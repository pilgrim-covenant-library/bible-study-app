// Room code generation utilities

const CHARACTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars: I, O, 0, 1

export function generateRoomCode(length: number = 6): string {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }
  return code;
}

export function isValidRoomCode(code: string): boolean {
  if (!code || code.length !== 6) return false;
  return /^[A-Z0-9]{6}$/.test(code.toUpperCase());
}

export function normalizeRoomCode(code: string): string {
  return code.toUpperCase().trim();
}
