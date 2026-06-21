import type { ElementMeta, Theme, ThemeId } from "@/lib/elementTypes";
import { WINTER_ELEMENTS } from "@/lib/winterElements";
import { SUMMER_ELEMENTS } from "@/lib/summerElements";
export type { ElementMeta, Theme, ThemeId } from "@/lib/elementTypes";


export const THEMES: Record<ThemeId, Theme> = {
  summer: {
    id: "summer",
    name: "Summer Solstice",
    tagline: "The longest day — sun, blooms, and picnics.",
    elements: SUMMER_ELEMENTS,
  },
  winter: {
    id: "winter",
    name: "Winter Solstice",
    tagline: "The longest night — frost, candles, and cozy gatherings.",
    elements: WINTER_ELEMENTS,
  },
};

export const THEME_LIST: Theme[] = [THEMES.summer, THEMES.winter];
