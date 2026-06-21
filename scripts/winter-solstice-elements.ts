/**
 * Element names from themes/winter-solstice.md.
 * Used by scripts/generate-css-art.ts with the --winter flag.
 */
export const WINTER_SOLSTICE_ELEMENTS = [
  "Christmas Tree",
  "Light Candles",
  "Coffee Mug",
  "Cinnamon Sticks",
  "Lantern",
  "Book",
  "Cinnamon Roll",
  "Bonfire",
  "Gingerbread Cookie",
  "Sweater",
  "Apple Pie",
  "Beanie",
  "Jingle Bells",
  "Scarf",
  "Wool Socks",
  "Snow Boots",
  "Thermos",
  "Snow Globe",
  "Snow Man",
  "Star Ornament",
  "Candy Cane",
  "Squirrel",
  "Roasted Chestnut",
  "Toasted Marshmallow on a Stick",
  "Clove",
  "Ribbon",
  "Tea Bag",
  "Honey Jar",
  "Bread Basket",
  "EarMuffs",
  "Sugar Cookies",
  "Yule Log",
] as const;

export type WinterSolsticeElement = (typeof WINTER_SOLSTICE_ELEMENTS)[number];
