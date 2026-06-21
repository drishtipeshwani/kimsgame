"use client";

import { useEffect, useRef, type ReactNode } from "react";

import styles from "./Tray.module.css";

/** Matches `closeLidSmooth` duration in Tray.module.css */
export const TRAY_CLOSE_ANIMATION_MS = 1200;

type TrayProps = {
  open: boolean;
  memorize?: boolean;
  onCloseAnimationComplete?: () => void;
  children?: ReactNode;
};

export default function Tray({
  open,
  memorize = false,
  onCloseAnimationComplete,
  children,
}: TrayProps) {
  const lidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open || !onCloseAnimationComplete) return;

    const lid = lidRef.current;
    if (!lid) return;

    const handleAnimationEnd = () => {
      onCloseAnimationComplete();
    };

    lid.addEventListener("animationend", handleAnimationEnd);
    return () => lid.removeEventListener("animationend", handleAnimationEnd);
  }, [open, onCloseAnimationComplete]);

  return (
    <div className={`${styles.scene} ${memorize ? styles.memorize : ""}`}>
      <div
        className={`${styles.isometricWrapper} ${open ? styles.open : styles.closed}`}
      >
        <div className={styles.boxBase}>
          <div className={styles.floorShadow} />
          <div className={styles.floor}>
            <div className={styles.floorContent}>{open ? children : null}</div>
          </div>
          <div className={styles.wallBackRight} />
          <div className={styles.wallFrontRight} />
          <div className={styles.wallBackLeft} />
          <div className={styles.wallFrontLeft} />
        </div>

        <div ref={lidRef} className={styles.lidWrapper} aria-hidden="true">
          <div className={styles.lidTop} />
          <div className={styles.lidWallBackRight} />
          <div className={styles.lidWallFrontRight} />
          <div className={styles.lidWallBackLeft} />
          <div className={styles.lidWallFrontLeft} />
        </div>
      </div>
    </div>
  );
}
