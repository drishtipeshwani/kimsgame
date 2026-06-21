"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import FolderButton from "@/components/FolderButton";
import RulesModal from "@/components/RulesModal";
import type { ThemeId } from "@/lib/elementRegistry";
import type { Difficulty } from "@/lib/gameLogic";
import { getHighestScore } from "@/lib/scoreStorage";

import styles from "./HomeScreen.module.css";

export default function HomeScreen() {
  const router = useRouter();
  const [themeId, setThemeId] = useState<ThemeId>("summer");
  const [rulesOpen, setRulesOpen] = useState(false);
  const [highestScore, setHighestScore] = useState<number | null>(null);

  useEffect(() => {
    setHighestScore(getHighestScore());
  }, []);

  const handlePlay = useCallback(
    (difficulty: Difficulty) => {
      router.push(`/play?theme=${themeId}&difficulty=${difficulty}`);
    },
    [router, themeId]
  );

  return (
    <div className={styles.home} data-theme={themeId}>
      <header className={styles.top}>
        <div className={styles.scorePill}>
          Highest score: {highestScore !== null ? highestScore : "—"}
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={`luckiest-guy-regular ${styles.title}`}>KIM&apos;S GAME</h1>
        <p className={styles.subtitle}>
          Memorize the objects in the box, then recall as many as you can.
        </p>
      </section>

      <nav className={styles.folderNav} aria-label="Main navigation">
        <FolderButton
          label="Summer Solstice"
          onClick={() => setThemeId("summer")}
          active={themeId === "summer"}
        />
        <FolderButton
          label="Winter Solstice"
          onClick={() => setThemeId("winter")}
          active={themeId === "winter"}
        />
        <FolderButton
          label="Rules"
          size="large"
          ariaExpanded={rulesOpen}
          onClick={() => setRulesOpen((open) => !open)}
        />
        <FolderButton
          label="Play - Hard"
          onClick={() => handlePlay("hard")}
        />
        <FolderButton
          label="Play - Easy"
          onClick={() => handlePlay("easy")}
        />
      </nav>

      <RulesModal
        open={rulesOpen}
        onClose={() => setRulesOpen(false)}
        themeId={themeId}
      />
    </div>
  );
}
