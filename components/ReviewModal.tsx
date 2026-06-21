"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import type { ThemeId } from "@/lib/elementRegistry";
import type { ScoreResult } from "@/lib/scoring";
import { THEME_MODAL_VARS } from "@/lib/themeModalVars";

import styles from "./ReviewModal.module.css";

type ReviewModalProps = {
  open: boolean;
  onClose: () => void;
  themeId: ThemeId;
  result: ScoreResult;
};

type ReviewSectionProps = {
  title: string;
  items: string[];
};

function ReviewSection({ title, items }: ReviewSectionProps) {
  return (
    <section className={styles.section}>
      <h3 className={`luckiest-guy-regular ${styles.sectionTitle}`}>
        {title} ({items.length})
      </h3>
      <ul className={`dongle-light ${styles.itemList}`}>
        {items.length > 0 ? (
          items.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li className={styles.emptyItem}>None</li>
        )}
      </ul>
    </section>
  );
}

export default function ReviewModal({
  open,
  onClose,
  themeId,
  result,
}: ReviewModalProps) {
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
        aria-labelledby="review-modal-title"
        aria-hidden={!open}
        style={drawerVars}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close review"
          tabIndex={open ? 0 : -1}
        >
          ×
        </button>
        <h2
          id="review-modal-title"
          className={`luckiest-guy-regular ${styles.title}`}
        >
          Round Review
        </h2>
        <div className={styles.sections}>
          <ReviewSection title="Correct" items={result.correct} />
          <ReviewSection title="Wrong" items={result.wrong} />
          <ReviewSection title="Missed" items={result.missed} />
        </div>
      </aside>
    </>
  );
}
