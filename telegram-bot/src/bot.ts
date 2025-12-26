// Bot instance and middleware setup

import { Bot, Context, session, SessionFlavor } from 'grammy';
import { SessionData } from './shared/types.js';

// Extended context type with session
export type BotContext = Context & SessionFlavor<SessionData>;

// Create bot instance
export function createBot(token: string): Bot<BotContext> {
  const bot = new Bot<BotContext>(token);

  // Session middleware with default values
  bot.use(session({
    initial: (): SessionData => ({
      currentRoomCode: undefined,
      playerId: undefined,
      playerName: undefined,
    }),
  }));

  return bot;
}
