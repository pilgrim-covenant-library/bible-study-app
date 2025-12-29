// Message templates for Telegram bot

import { RoomState, GameVerse, ProgressiveRoundData } from '../shared/types.js';

export function welcomeMessage(): string {
  return `Welcome to Scripture Memory Challenge!

Test your Bible memory skills against a friend in this 6-round game.

Commands:
/newgame - Create a new game room
/join <CODE> - Join an existing room
/leave - Leave current game
/help - Show this help message

Ready to play? Use /newgame to create a room and share the link with a friend!`;
}

export function helpMessage(): string {
  return `Scripture Memory Challenge - Help

How to Play:
1. Create a game with /newgame
2. Share the link with a friend
3. Both players tap "I'm Ready"
4. Race to type Bible verses from memory!

Game Format:
- 6 rounds total
- Rounds 1-3: Type the full verse
- Rounds 4-6: Fill in the blanks (30%, 50%, 70%)

Scoring:
- Points based on accuracy (0-100%)
- Best translation match is used
- Higher total score wins!

Commands:
/newgame - Create a new room
/join CODE - Join with room code
/leave - Leave current game`;
}

export function roomCreatedMessage(roomCode: string, deepLink: string): string {
  return `Game room created!

Room Code: ${roomCode}

Share this link with a friend:
${deepLink}

Waiting for opponent to join...`;
}

export function waitingRoomMessage(room: RoomState): string {
  const players = Object.values(room.players);
  const playerList = players
    .map(p => `${p.name} ${p.isReady ? '(Ready)' : ''}`)
    .join('\n');

  const readyCount = players.filter(p => p.isReady).length;
  const status = players.length < 2
    ? 'Waiting for opponent...'
    : readyCount === 2
      ? 'Both ready! Starting...'
      : `${readyCount}/2 ready`;

  return `Room: ${room.code}

Players:
${playerList}

${status}`;
}

export function joinedRoomMessage(roomCode: string, hostName: string): string {
  return `Joined room ${roomCode}!

Host: ${hostName}

Tap "I'm Ready" when you're ready to play!`;
}

export function countdownMessage(count: number): string {
  if (count === 0) return 'GO!';
  return `Starting in ${count}...`;
}

export function typingRoundMessage(
  roundNumber: number,
  totalRounds: number,
  verse: GameVerse,
  timeLimit: number
): string {
  let msg = `Round ${roundNumber}/${totalRounds} - Type Full Verse

Reference: ${verse.reference}`;

  if (verse.context.before) {
    msg += `

Context before:
"${verse.context.before.text}"`;
  }

  msg += `

TYPE THIS VERSE FROM MEMORY!`;

  if (verse.context.after) {
    msg += `

Context after:
"${verse.context.after.text}"`;
  }

  msg += `

Time: ${timeLimit} seconds
Reply with your answer!`;

  return msg;
}

export function progressiveRoundMessage(
  roundNumber: number,
  totalRounds: number,
  verse: GameVerse,
  progressiveData: ProgressiveRoundData,
  timeLimit: number
): string {
  const text = verse.translations.ESV;
  const words = text.split(/\s+/).filter(w => w.length > 0);

  // Replace blanked words with numbered blanks
  let blankNum = 1;
  const displayWords = words.map((word, i) => {
    if (progressiveData.blankIndices.includes(i)) {
      return `___(${blankNum++})___`;
    }
    return word;
  });

  const displayText = displayWords.join(' ');

  return `Round ${roundNumber}/${totalRounds} - Fill in the Blanks (${progressiveData.blankPercentage}%)

Reference: ${verse.reference}

${displayText}

Time: ${timeLimit} seconds
Reply with: 1:word 2:word 3:word ...`;
}

export function answerSubmittedMessage(score: number, feedback: string, translation: string): string {
  return `Answer submitted!

Your score: ${score}% (${translation})
"${feedback}"

Waiting for opponent...`;
}

export function roundResultsMessage(
  room: RoomState,
  correctVerse: string
): string {
  const players = Object.values(room.players);
  const currentResult = room.roundResults?.[room.currentRound];

  let msg = `Round ${room.currentRound} Results

Correct verse:
"${correctVerse}"

`;

  // Sort by score descending
  const sortedPlayers = [...players].sort(
    (a, b) => (b.currentRoundScore || 0) - (a.currentRoundScore || 0)
  );

  for (const player of sortedPlayers) {
    const result = currentResult?.players?.[player.id];
    const score = result?.score || 0;
    const translation = result?.translation || 'ESV';
    msg += `${player.name}: ${score}% (${translation})\n`;
  }

  msg += `\nTotal Scores:`;
  for (const player of players) {
    msg += `\n${player.name}: ${player.totalScore}`;
  }

  return msg;
}

export function finalResultsMessage(room: RoomState): string {
  const players = Object.values(room.players);
  const sortedPlayers = [...players].sort((a, b) => b.totalScore - a.totalScore);

  const winner = sortedPlayers[0];
  const isTie = sortedPlayers.length > 1 && sortedPlayers[0].totalScore === sortedPlayers[1].totalScore;

  let msg = `Game Over!

`;

  if (isTie) {
    msg += `It's a tie!

`;
  } else {
    msg += `Winner: ${winner.name}!

`;
  }

  msg += `Final Scores:\n`;
  for (const player of sortedPlayers) {
    const avgScore = player.roundScores
      ? Math.round(player.roundScores.reduce((a, b) => a + b, 0) / player.roundScores.length)
      : 0;
    msg += `${player.name}: ${player.totalScore} (avg ${avgScore}%)\n`;
  }

  msg += `\nRound by Round:`;
  for (const player of sortedPlayers) {
    const scores = player.roundScores?.map((s, i) => `R${i + 1}:${s}%`).join(' ') || '';
    msg += `\n${player.name}: ${scores}`;
  }

  msg += `\n\nThanks for playing!`;

  return msg;
}

export function playerJoinedMessage(playerName: string): string {
  return `${playerName} has joined the game!`;
}

export function playerLeftMessage(playerName: string): string {
  return `${playerName} has left the game.`;
}

export function playerReadyMessage(playerName: string): string {
  return `${playerName} is ready!`;
}

export function opponentSubmittedMessage(): string {
  return `Opponent has submitted their answer!`;
}

export function timeUpMessage(): string {
  return `Time's up! Your answer has been submitted.`;
}

export function errorMessage(message: string): string {
  return `Error: ${message}`;
}

export function notInGameMessage(): string {
  return `You're not in a game. Use /newgame to create one or /join CODE to join.`;
}

export function alreadyInGameMessage(roomCode: string): string {
  return `You're already in a game (Room: ${roomCode}). Use /leave to exit first.`;
}
