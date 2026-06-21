/**
 * Element names from themes/summer-solstice.md.
 * Used by scripts/generate-css-art.ts with the --summer flag.
 */
export const SUMMER_SOLSTICE_ELEMENTS = [
  "Sunflower",
  "Butterfly",
  "Orange slice",
  "Iced Citrus Tea",
  "Honeybee",
  "Watermelon Slice",
  "Cherries",
  "Plum",
  "Crystal",
  "Sea Shell",
  "Sunglasses",
  "Icecream",
  "Sun Hat",
  "Blueberries",
  "Strawberry",
  "Sandcastle",
  "Picnic Basket",
  "Flip Flops",
  "Yellow Candle",
  "Watering Can",
  "Blue Bird",
  "Popsicle",
  "Lemons",
  "Bonfire",
  "Story Book",
  "Tropical Tree",
  "Lavender",
  "Mango",
  "Camping Tent",
  "Bicycle",
  "Surfboard",
  "Jar"
] as const;

export type SummerSolsticeElement = (typeof SUMMER_SOLSTICE_ELEMENTS)[number];
