import type { ScoreResult } from "@/lib/scoring";
import styles from "./Results.module.css";

type ResultsProps = {
  result: ScoreResult;
  isNewRecord?: boolean;
  onPlayAgain: () => void;
  onReview: () => void;
};

export default function Results({
  result,
  isNewRecord = false,
  onPlayAgain,
  onReview,
}: ResultsProps) {
  return (
    <div className={styles.results}>
      <div className={styles.scoreCard}>
        <p className={styles.scoreLabel}>Your Score</p>
        <p className={styles.scoreValue}>{result.score}</p>
        {isNewRecord && (
          <p className={styles.newRecord}>New high score!</p>
        )}
        <p className={styles.scoreMeta}>
          {result.correct.length} correct · {result.wrong.length} wrong ·{" "}
          {result.missed.length} missed
        </p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.reviewRound} onClick={onReview}>
          Review Round
        </button>
        <button type="button" className={styles.playAgain} onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}
