// Scripture Memory Challenge - Telegram Bot Entry Point

import 'dotenv/config';
import { createBot, BotContext } from './bot.js';
import { initializeFirebase } from './config/firebase.js';
import {
  createRoom,
  joinRoom,
  leaveRoom,
  getRoom,
  setPlayerReady,
  checkAllReady,
  startCountdown,
  startPlaying,
  submitAnswer,
  checkAllSubmitted,
  showRoundResults,
  nextRound,
  getPlayerNames,
} from './game/room-manager.js';
import { calculateSimilarity } from './shared/similarity.js';
import { parseDeepLink, createDeepLink } from './utils/deep-links.js';
import { normalizeRoomCode, isValidRoomCode } from './utils/room-code.js';
import {
  welcomeMessage,
  helpMessage,
  roomCreatedMessage,
  waitingRoomMessage,
  joinedRoomMessage,
  countdownMessage,
  typingRoundMessage,
  progressiveRoundMessage,
  answerSubmittedMessage,
  roundResultsMessage,
  finalResultsMessage,
  errorMessage,
  notInGameMessage,
  alreadyInGameMessage,
  playerReadyMessage,
} from './ui/messages.js';
import {
  readyKeyboard,
  nextRoundKeyboard,
  playAgainKeyboard,
  cancelReadyKeyboard,
} from './ui/keyboards.js';

// Validate environment
const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error('BOT_TOKEN environment variable is required');
  process.exit(1);
}

// Initialize Firebase
try {
  initializeFirebase();
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
  process.exit(1);
}

// Create bot
const bot = createBot(BOT_TOKEN);

// Get bot info for deep links
let botUsername = '';
bot.api.getMe().then(me => {
  botUsername = me.username;
  console.log(`Bot started as @${botUsername}`);
});

// Helper to get player info
function getPlayerInfo(ctx: BotContext): { id: string; name: string } {
  const user = ctx.from!;
  return {
    id: user.id.toString(),
    name: user.first_name + (user.last_name ? ` ${user.last_name}` : ''),
  };
}

// Helper to notify host when someone joins
async function notifyHostOfJoin(hostId: string, joinerName: string, roomCode: string): Promise<void> {
  try {
    await bot.api.sendMessage(
      hostId,
      `🎉 ${joinerName} has joined room ${roomCode}!\n\nBoth players are here. Press Ready when you're ready to start!`,
      { reply_markup: readyKeyboard() }
    );
  } catch (error) {
    console.error('Failed to notify host:', error);
  }
}

// /start command - with deep link support
bot.command('start', async (ctx) => {
  const { id, name } = getPlayerInfo(ctx);
  const payload = ctx.match;

  // Check for room deep link
  const parsed = parseDeepLink(payload);
  if (parsed) {
    // Auto-join room from deep link
    if (ctx.session.currentRoomCode) {
      await ctx.reply(alreadyInGameMessage(ctx.session.currentRoomCode));
      return;
    }

    try {
      const room = await joinRoom(parsed.roomCode, id, name);
      if (!room) {
        await ctx.reply(errorMessage('Room not found. It may have expired.'));
        return;
      }

      ctx.session.currentRoomCode = parsed.roomCode;
      ctx.session.playerId = id;
      ctx.session.playerName = name;

      const hostName = Object.values(room.players).find(p => p.id === room.hostId)?.name || 'Host';
      await ctx.reply(joinedRoomMessage(parsed.roomCode, hostName), {
        reply_markup: readyKeyboard(),
      });

      // Notify the host that someone joined
      if (room.hostId !== id) {
        await notifyHostOfJoin(room.hostId, name, parsed.roomCode);
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to join room';
      await ctx.reply(errorMessage(msg));
    }
    return;
  }

  // Regular start - show welcome
  await ctx.reply(welcomeMessage());
});

// /help command
bot.command('help', async (ctx) => {
  await ctx.reply(helpMessage());
});

// /newgame command
bot.command('newgame', async (ctx) => {
  const { id, name } = getPlayerInfo(ctx);

  // Check if already in a game
  if (ctx.session.currentRoomCode) {
    await ctx.reply(alreadyInGameMessage(ctx.session.currentRoomCode));
    return;
  }

  try {
    const room = await createRoom(id, name);

    ctx.session.currentRoomCode = room.code;
    ctx.session.playerId = id;
    ctx.session.playerName = name;

    const deepLink = createDeepLink(botUsername, room.code);
    await ctx.reply(roomCreatedMessage(room.code, deepLink));
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Failed to create room';
    await ctx.reply(errorMessage(msg));
  }
});

// /join command
bot.command('join', async (ctx) => {
  const { id, name } = getPlayerInfo(ctx);

  // Check if already in a game
  if (ctx.session.currentRoomCode) {
    await ctx.reply(alreadyInGameMessage(ctx.session.currentRoomCode));
    return;
  }

  const code = ctx.match?.trim();
  if (!code || !isValidRoomCode(code)) {
    await ctx.reply('Please provide a valid 6-character room code.\nUsage: /join ABCD12');
    return;
  }

  const roomCode = normalizeRoomCode(code);

  try {
    const room = await joinRoom(roomCode, id, name);
    if (!room) {
      await ctx.reply(errorMessage('Room not found. Check the code and try again.'));
      return;
    }

    ctx.session.currentRoomCode = roomCode;
    ctx.session.playerId = id;
    ctx.session.playerName = name;

    const hostName = Object.values(room.players).find(p => p.id === room.hostId)?.name || 'Host';
    await ctx.reply(joinedRoomMessage(roomCode, hostName), {
      reply_markup: readyKeyboard(),
    });

    // Notify the host that someone joined
    if (room.hostId !== id) {
      await notifyHostOfJoin(room.hostId, name, roomCode);
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Failed to join room';
    await ctx.reply(errorMessage(msg));
  }
});

// /leave command
bot.command('leave', async (ctx) => {
  const { id } = getPlayerInfo(ctx);

  if (!ctx.session.currentRoomCode) {
    await ctx.reply(notInGameMessage());
    return;
  }

  try {
    await leaveRoom(ctx.session.currentRoomCode, id);
    ctx.session.currentRoomCode = undefined;
    ctx.session.playerId = undefined;
    ctx.session.playerName = undefined;

    await ctx.reply('You have left the game. Use /newgame to start a new one!');
  } catch (error) {
    await ctx.reply(errorMessage('Failed to leave room'));
  }
});

// Ready button callback
bot.callbackQuery('ready', async (ctx) => {
  await ctx.answerCallbackQuery();

  const roomCode = ctx.session.currentRoomCode;
  const playerId = ctx.session.playerId;

  if (!roomCode || !playerId) {
    await ctx.reply(notInGameMessage());
    return;
  }

  try {
    await setPlayerReady(roomCode, playerId, true);

    const room = await getRoom(roomCode);
    if (!room) return;

    await ctx.editMessageText(waitingRoomMessage(room), {
      reply_markup: cancelReadyKeyboard(),
    });

    // Notify other player
    const otherPlayerId = Object.keys(room.players).find(p => p !== playerId);
    if (otherPlayerId) {
      const playerName = ctx.session.playerName || 'Player';
      // Note: In production, you'd store chat IDs and message other players
    }

    // Check if both ready
    if (await checkAllReady(roomCode)) {
      // Start countdown
      await startCountdown(roomCode);

      // Countdown sequence
      for (let i = 3; i >= 0; i--) {
        await ctx.reply(countdownMessage(i));
        if (i > 0) await new Promise(r => setTimeout(r, 1000));
      }

      // Start playing
      await startPlaying(roomCode);

      // Send first verse prompt
      const updatedRoom = await getRoom(roomCode);
      if (updatedRoom?.currentVerse) {
        const roundMode = updatedRoom.roundModes?.[0] || 'typing';
        const timeLimit = roundMode === 'typing' ? 90 : 60;

        if (roundMode === 'typing') {
          await ctx.reply(typingRoundMessage(1, 6, updatedRoom.currentVerse, timeLimit));
        } else if (updatedRoom.progressiveData) {
          await ctx.reply(progressiveRoundMessage(
            1, 6, updatedRoom.currentVerse, updatedRoom.progressiveData, timeLimit
          ));
        }
      }
    }
  } catch (error) {
    await ctx.reply(errorMessage('Failed to set ready status'));
  }
});

// Cancel ready callback
bot.callbackQuery('cancel_ready', async (ctx) => {
  await ctx.answerCallbackQuery();

  const roomCode = ctx.session.currentRoomCode;
  const playerId = ctx.session.playerId;

  if (!roomCode || !playerId) return;

  try {
    await setPlayerReady(roomCode, playerId, false);

    const room = await getRoom(roomCode);
    if (room) {
      await ctx.editMessageText(waitingRoomMessage(room), {
        reply_markup: readyKeyboard(),
      });
    }
  } catch (error) {
    await ctx.reply(errorMessage('Failed to cancel ready'));
  }
});

// Next round callback
bot.callbackQuery('next_round', async (ctx) => {
  await ctx.answerCallbackQuery();

  const roomCode = ctx.session.currentRoomCode;
  const playerId = ctx.session.playerId;

  if (!roomCode || !playerId) return;

  const room = await getRoom(roomCode);
  if (!room || room.hostId !== playerId) {
    await ctx.reply('Only the host can advance to the next round.');
    return;
  }

  try {
    const hasNext = await nextRound(roomCode);

    if (hasNext) {
      const updatedRoom = await getRoom(roomCode);
      if (updatedRoom?.currentVerse) {
        const roundNum = updatedRoom.currentRound;
        const roundMode = updatedRoom.roundModes?.[roundNum - 1] || 'typing';
        const timeLimit = roundMode === 'typing' ? 90 : 60;

        if (roundMode === 'typing') {
          await ctx.reply(typingRoundMessage(
            roundNum, 6, updatedRoom.currentVerse, timeLimit
          ));
        } else if (updatedRoom.progressiveData) {
          await ctx.reply(progressiveRoundMessage(
            roundNum, 6, updatedRoom.currentVerse, updatedRoom.progressiveData, timeLimit
          ));
        }
      }
    } else {
      // Game over - show final results
      const finalRoom = await getRoom(roomCode);
      if (finalRoom) {
        await ctx.reply(finalResultsMessage(finalRoom), {
          reply_markup: playAgainKeyboard(),
        });
      }
    }
  } catch (error) {
    await ctx.reply(errorMessage('Failed to advance round'));
  }
});

// Play again callback
bot.callbackQuery('play_again', async (ctx) => {
  await ctx.answerCallbackQuery();

  // Leave current room and create new one
  const { id, name } = getPlayerInfo(ctx);

  if (ctx.session.currentRoomCode) {
    await leaveRoom(ctx.session.currentRoomCode, id);
  }

  const room = await createRoom(id, name);
  ctx.session.currentRoomCode = room.code;
  ctx.session.playerId = id;
  ctx.session.playerName = name;

  const deepLink = createDeepLink(botUsername, room.code);
  await ctx.reply(roomCreatedMessage(room.code, deepLink));
});

// Leave callback
bot.callbackQuery('leave', async (ctx) => {
  await ctx.answerCallbackQuery();

  const { id } = getPlayerInfo(ctx);

  if (ctx.session.currentRoomCode) {
    await leaveRoom(ctx.session.currentRoomCode, id);
    ctx.session.currentRoomCode = undefined;
    ctx.session.playerId = undefined;
    ctx.session.playerName = undefined;
  }

  await ctx.reply('Thanks for playing! Use /newgame to start again.');
});

// Handle text messages (verse answers)
bot.on('message:text', async (ctx) => {
  const roomCode = ctx.session.currentRoomCode;
  const playerId = ctx.session.playerId;

  if (!roomCode || !playerId) {
    // Not in a game, ignore or show help
    return;
  }

  const room = await getRoom(roomCode);
  if (!room || room.status !== 'playing' || !room.currentVerse) {
    return;
  }

  // Check if player already submitted
  const player = room.players[playerId];
  if (player?.currentRoundFinishedAt) {
    await ctx.reply('You already submitted your answer for this round!');
    return;
  }

  const answer = ctx.message.text;
  const roundMode = room.roundModes?.[room.currentRound - 1] || 'typing';

  let score: number;
  let translation: string;
  let feedback: string;
  let progressiveAnswers: string[] | undefined;

  if (roundMode === 'typing') {
    // Calculate similarity score
    const result = calculateSimilarity(answer, room.currentVerse.translations);
    score = result.bestScore;
    translation = result.bestTranslation;
    feedback = result.feedback;
  } else {
    // Progressive mode - parse answers like "1:word 2:word"
    progressiveAnswers = [];
    const parts = answer.split(/\s+/);
    const answerMap: Record<number, string> = {};

    for (const part of parts) {
      const match = part.match(/^(\d+):(.+)$/);
      if (match) {
        answerMap[parseInt(match[1])] = match[2].toLowerCase().replace(/[.,!?;:'"]/g, '');
      }
    }

    if (!room.progressiveData) {
      await ctx.reply('Error: No progressive data for this round');
      return;
    }

    // Check each blank
    let correct = 0;
    for (let i = 0; i < room.progressiveData.correctAnswers.length; i++) {
      const expected = room.progressiveData.correctAnswers[i]
        .toLowerCase()
        .replace(/[.,!?;:'"]/g, '');
      const given = answerMap[i + 1] || '';
      progressiveAnswers.push(given);

      if (given === expected) {
        correct++;
      }
    }

    score = Math.round((correct / room.progressiveData.correctAnswers.length) * 100);
    translation = 'ESV';
    feedback = score === 100 ? 'Perfect!' :
      score >= 70 ? 'Great job!' :
        score >= 50 ? 'Good effort!' : 'Keep practicing!';
  }

  try {
    await submitAnswer(roomCode, playerId, answer, score, translation, progressiveAnswers);
    await ctx.reply(answerSubmittedMessage(score, feedback, translation));

    // Check if both submitted
    if (await checkAllSubmitted(roomCode)) {
      await showRoundResults(roomCode);

      const updatedRoom = await getRoom(roomCode);
      if (updatedRoom) {
        const correctVerse = updatedRoom.currentVerse?.translations.ESV || '';
        const isHost = playerId === updatedRoom.hostId;

        await ctx.reply(
          roundResultsMessage(updatedRoom, correctVerse),
          isHost ? { reply_markup: nextRoundKeyboard() } : undefined
        );
      }
    }
  } catch (error) {
    await ctx.reply(errorMessage('Failed to submit answer'));
  }
});

// Error handler
bot.catch((err) => {
  console.error('Bot error:', err);
});

// Start bot
console.log('Starting bot...');
bot.start();
