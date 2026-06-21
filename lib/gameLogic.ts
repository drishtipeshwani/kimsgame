import type { ElementMeta } from "./elementRegistry";
import { normalizeAnswer } from "./normalizeAnswer";

export type Difficulty = "easy" | "hard";

export const RECALL_SECONDS = 60;

const MEMORIZE_SECONDS: Record<Difficulty, number> = {
  easy: 60,
  hard: 30,
};

export function getMemorizeSeconds(difficulty: Difficulty): number {
  return MEMORIZE_SECONDS[difficulty];
}

export function pickRandomElements(
  pool: ElementMeta[],
  count = 20
): ElementMeta[] {
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Make sure we never try to return more elements than exist in the pool
  return shuffled.slice(0, Math.min(count, pool.length));
}

export function parseRecallInput(raw: string): string[] {
  const parts = raw
    .split(/[\n,;]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const seen = new Set<string>();
  const deduped: string[] = [];

  for (const part of parts) {
    const key = normalizeAnswer(part);
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(part);
    }
  }

  return deduped;
}
