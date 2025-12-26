// Deep link utilities for Telegram bot

const ROOM_PREFIX = 'room_';

export function createDeepLink(botUsername: string, roomCode: string): string {
  return `https://t.me/${botUsername}?start=${ROOM_PREFIX}${roomCode}`;
}

export function parseDeepLink(startPayload: string | undefined): { roomCode: string } | null {
  if (!startPayload) return null;

  if (startPayload.startsWith(ROOM_PREFIX)) {
    const roomCode = startPayload.slice(ROOM_PREFIX.length).toUpperCase();
    if (roomCode.length === 6) {
      return { roomCode };
    }
  }

  return null;
}

export function isRoomDeepLink(startPayload: string | undefined): boolean {
  return parseDeepLink(startPayload) !== null;
}
