import type { ElementMeta } from "./elementRegistry";
import { normalizeAnswer } from "./normalizeAnswer";

export type ScoreResult = {
  score: number;
  correct: string[];
  wrong: string[];
  missed: string[];
};

function getMatchKeys(element: ElementMeta): string[] {
  return [element.id, element.name, ...element.synonyms].map(normalizeAnswer);
}

function findMatchingElement(
  guess: string,
  roundElements: ElementMeta[]
): ElementMeta | undefined {
  const normalizedGuess = normalizeAnswer(guess);
  return roundElements.find((element) =>
    getMatchKeys(element).includes(normalizedGuess)
  );
}

export function scoreAnswers(
  guesses: string[],
  roundElements: ElementMeta[]
): ScoreResult {
  const correct: string[] = [];
  const wrong: string[] = [];
  const matchedIds = new Set<string>();

  for (const guess of guesses) {
    const match = findMatchingElement(guess, roundElements);
    if (match) {
      if (!matchedIds.has(match.id)) {
        matchedIds.add(match.id);
        correct.push(match.name);
      }
    } else {
      wrong.push(guess);
    }
  }

  const missed = roundElements
    .filter((element) => !matchedIds.has(element.id))
    .map((element) => element.name);

  const score = correct.length;

  return { score, correct, wrong, missed };
}
