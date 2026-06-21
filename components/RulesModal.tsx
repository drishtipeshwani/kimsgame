"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import type { ThemeId } from "@/lib/elementRegistry";
import { getMemorizeSeconds } from "@/lib/gameLogic";
import { THEME_MODAL_VARS } from "@/lib/themeModalVars";

import styles from "./RulesModal.module.css";

type RulesModalProps = {
  open: boolean;
  onClose: () => void;
  themeId: ThemeId;
};

export default function RulesModal({ open, onClose, themeId }: RulesModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const vars = THEME_MODAL_VARS[themeId];

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const drawerVars = {
    "--modal-bg": vars.bg,
    "--modal-text": vars.text,
    "--modal-border": vars.border,
  } as CSSProperties;

  return (
    <>
      <div
        className={styles.backdrop}
        data-open={open}
        onClick={onClose}
        role="presentation"
        aria-hidden={!open}
      />
      <aside
        className={styles.drawer}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-modal-title"
        aria-hidden={!open}
        style={drawerVars}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close rules"
          tabIndex={open ? 0 : -1}
        >
          ×
        </button>
        <h2
          id="rules-modal-title"
          className={`luckiest-guy-regular ${styles.title}`}
        >
          How to Play
        </h2>
        <p className={`dongle-light ${styles.intro}`}>
          A digital take on the classic{" "}
          <a
            href="https://en.wikipedia.org/wiki/Kim%27s_Game"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.introLink}
          >
            Kim&apos;s Game
          </a>{" "}
          observation exercise, first described in Rudyard Kipling&apos;s novel{" "}
          <em>Kim</em>.
        </p>
        <ol className={`dongle-light ${styles.rulesList}`}>
          <li>
            Study the objects on the tray for {getMemorizeSeconds("easy")}{" "}
            seconds (Easy) or {getMemorizeSeconds("hard")} seconds (Hard).
          </li>
          <li>
            The tray closes — type everything you remember within 1 minute.
          </li>
          <li>Score +1 per correct item.</li>
        </ol>
      </aside>
    </>
  );
}
