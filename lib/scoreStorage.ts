const STORAGE_KEY = "kimsgame:highest-score";

export function getHighestScore(): number | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveScore(score: number): {
  highest: number;
  isNewRecord: boolean;
} {
  const current = getHighestScore();
  const isNewRecord = current === null || score > current;
  const highest = current === null ? score : Math.max(current, score);

  if (isNewRecord) {
    try {
      localStorage.setItem(STORAGE_KEY, String(highest));
    } catch {
      // Storage blocked or unavailable
    }
  }

  return { highest, isNewRecord };
}
