"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Timer.module.css";

type TimerProps = {
  seconds: number;
  active: boolean;
  onComplete: () => void;
  label: string;
  compact?: boolean;
};

export default function Timer({
  seconds,
  active,
  onComplete,
  label,
  compact = false,
}: TimerProps) {
  const [remaining, setRemaining] = useState(seconds);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setRemaining(seconds);
  }, [seconds, active]);

  useEffect(() => {
    if (!active) return;

    if (remaining <= 0) {
      onCompleteRef.current();
      return;
    }

    const id = window.setTimeout(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(id);
  }, [active, remaining]);

  const minutes = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const display = `${minutes}:${secs.toString().padStart(2, "0")}`;

  return (
    <div className={`${styles.timer} ${compact ? styles.compact : ""}`}>
      <span className={styles.label}>{label}</span>
      <span className={styles.countdown}>{display}</span>
    </div>
  );
}
