// Inline keyboard builders for Telegram bot

import { InlineKeyboard } from 'grammy';

export function readyKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text("I'm Ready!", 'ready');
}

export function nextRoundKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text('Next Round', 'next_round');
}

export function playAgainKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text('Play Again', 'play_again')
    .text('Leave Game', 'leave');
}

export function leaveKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text('Leave Game', 'leave');
}

export function cancelReadyKeyboard(): InlineKeyboard {
  return new InlineKeyboard()
    .text('Cancel Ready', 'cancel_ready');
}
