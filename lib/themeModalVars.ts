import type { ThemeId } from "@/lib/elementRegistry";

export const THEME_MODAL_VARS: Record<
  ThemeId,
  { bg: string; text: string; border: string }
> = {
  summer: {
    bg: "#FFEF91",
    text: "#A44F30",
    border: "#A44F30",
  },
  winter: {
    bg: "#547792",
    text: "#EAE0CF",
    border: "#EAE0CF",
  },
};
