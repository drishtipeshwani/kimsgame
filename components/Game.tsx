"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import ElementGrid from "@/components/ElementGrid";
import RecallInput from "@/components/RecallInput";
import Results from "@/components/Results";
import ReviewModal from "@/components/ReviewModal";
import Timer from "@/components/Timer";
import Box, { BOX_CLOSE_ANIMATION_MS } from "@/components/Box";
import { THEMES, type ElementMeta, type ThemeId } from "@/lib/elementRegistry";
import {
  RECALL_SECONDS,
  getMemorizeSeconds,
  parseRecallInput,
  pickRandomElements,
  type Difficulty,
} from "@/lib/gameLogic";
import { saveScore } from "@/lib/scoreStorage";
import { scoreAnswers, type ScoreResult } from "@/lib/scoring";

import styles from "./Game.module.css";

type GamePhase = "memorize" | "recall" | "results";

const ELEMENTS_PER_ROUND = 20;

type GameProps = {
  themeId: ThemeId;
  difficulty: Difficulty;
};

export default function Game({ themeId, difficulty }: GameProps) {
  const memorizeSeconds = getMemorizeSeconds(difficulty);

  const [phase, setPhase] = useState<GamePhase>("memorize");
  const [roundElements, setRoundElements] = useState<ElementMeta[] | null>(null);
  const [recallText, setRecallText] = useState("");
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [memorizeBoxOpen, setMemorizeBoxOpen] = useState(true);
  const [isClosingBox, setIsClosingBox] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const recallTransitionStarted = useRef(false);

  useEffect(() => {
    setRoundElements(
      pickRandomElements(THEMES[themeId].elements, ELEMENTS_PER_ROUND)
    );
  }, [themeId]);

  const startRound = useCallback(() => {
    setRoundElements(
      pickRandomElements(THEMES[themeId].elements, ELEMENTS_PER_ROUND)
    );
    setRecallText("");
    setScoreResult(null);
    setIsNewRecord(false);
    setMemorizeBoxOpen(true);
    setIsClosingBox(false);
    setReviewOpen(false);
    recallTransitionStarted.current = false;
    setTimerKey((key) => key + 1);
    setPhase("memorize");
  }, [themeId]);

  const beginRecall = useCallback(() => {
    if (recallTransitionStarted.current) return;
    recallTransitionStarted.current = true;
    setPhase("recall");
    setTimerKey((key) => key + 1);
    setMemorizeBoxOpen(true);
    setIsClosingBox(false);
  }, []);

  const handleMemorizeComplete = useCallback(() => {
    if (isClosingBox) return;
    setIsClosingBox(true);
    setMemorizeBoxOpen(false);
  }, [isClosingBox]);

  const handleMemorizeBoxCloseComplete = useCallback(() => {
    beginRecall();
  }, [beginRecall]);

  // Fallback if lid animationend does not fire
  useEffect(() => {
    if (!isClosingBox) return;

    const timeoutId = window.setTimeout(() => {
      beginRecall();
    }, BOX_CLOSE_ANIMATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isClosingBox, beginRecall]);

  const handleSubmitRecall = useCallback(() => {
    if (!roundElements) return;
    const guesses = parseRecallInput(recallText);
    const result = scoreAnswers(guesses, roundElements);
    const { isNewRecord: newRecord } = saveScore(result.score);
    setIsNewRecord(newRecord);
    setScoreResult(result);
    setPhase("results");
  }, [recallText, roundElements]);

  const gameLayoutClass = [
    styles.game,
    phase === "memorize" ? styles.gameMemorize : "",
    phase === "recall" ? styles.gameRecall : "",
    phase === "results" ? styles.gameResults : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gameLayoutClass} data-theme={themeId}>
      <Link href="/" className={styles.backHome}>
        Back to Home
      </Link>

      {phase === "results" && (
        <header className={styles.header}>
          <h1 className={`luckiest-guy-regular ${styles.title}`}>Kim&apos;s Game</h1>
          <p className={styles.subtitle}>
            Memorize the objects in the box, then recall as many as you can.
          </p>
        </header>
      )}

      {phase === "memorize" && (
        <section className={styles.memorizePhase}>
          <div className={styles.memorizeTop}>
            <Timer
              key={`memorize-${timerKey}`}
              compact
              seconds={memorizeSeconds}
              active={roundElements !== null && !isClosingBox}
              onComplete={handleMemorizeComplete}
              label="Memorize"
            />
          </div>

          <div className={styles.memorizeSpacer} aria-hidden="true" />

          <div className={styles.memorizeMiddle}>
            <button
              type="button"
              className={styles.skipButton}
              onClick={handleMemorizeComplete}
              disabled={!roundElements || isClosingBox}
            >
              I&apos;m Ready — Start Recall
            </button>
          </div>

          <div className={styles.memorizeSpacer} aria-hidden="true" />

          <div className={styles.boxSlot}>
            <Box
              open={memorizeBoxOpen}
              memorize
              onCloseAnimationComplete={
                isClosingBox ? handleMemorizeBoxCloseComplete : undefined
              }
            >
              {roundElements && <ElementGrid elements={roundElements} />}
            </Box>
          </div>
        </section>
      )}

      {phase === "recall" && (
        <section className={styles.recallPhase}>
          <Timer
            key={`recall-${timerKey}`}
            compact
            seconds={RECALL_SECONDS}
            active
            onComplete={handleSubmitRecall}
            label="Recall"
          />
          <RecallInput
            value={recallText}
            onChange={setRecallText}
            onSubmit={handleSubmitRecall}
          />
        </section>
      )}

      {phase === "results" && scoreResult && (
        <section className={`${styles.phase} ${styles.resultsPhase}`}>
          <Results
            result={scoreResult}
            isNewRecord={isNewRecord}
            onPlayAgain={startRound}
            onReview={() => setReviewOpen(true)}
          />
          <ReviewModal
            open={reviewOpen}
            onClose={() => setReviewOpen(false)}
            themeId={themeId}
            result={scoreResult}
          />
        </section>
      )}
    </div>
  );
}
