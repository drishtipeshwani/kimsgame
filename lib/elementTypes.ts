import type { ComponentType } from "react";

export type ElementMeta = {
  id: string;
  name: string;
  synonyms: string[];
  Component: ComponentType;
};

export type ThemeId = "summer" | "winter";

export type Theme = {
  id: ThemeId;
  name: string;
  tagline: string;
  elements: ElementMeta[];
};
