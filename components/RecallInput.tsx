"use client";

import { useEffect, useRef } from "react";

import styles from "./RecallInput.module.css";

type RecallInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
};

export default function RecallInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
}: RecallInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!disabled) {
      textareaRef.current?.focus();
    }
  }, [disabled]);

  return (
    <div className={styles.wrapper}>
      <label htmlFor="recall-input" className={styles.label}>
        List everything you remember — separate items with commas or new lines
      </label>
      <textarea
        ref={textareaRef}
        id="recall-input"
        className={styles.textarea}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="e.g. apple, book, key..."
        rows={5}
      />
      <button
        type="button"
        className={styles.submit}
        onClick={onSubmit}
        disabled={disabled}
      >
        Submit Answers
      </button>
    </div>
  );
}
