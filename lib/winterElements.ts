import type { ElementMeta } from "./elementTypes";

import ChristmasTree from "@/elements/ChristmasTree";
import LightCandles from "@/elements/LightCandles";
import CoffeeMug from "@/elements/CoffeeMug";
import CinnamonSticks from "@/elements/CinnamonSticks";
import Lantern from "@/elements/Lantern";
import Book from "@/elements/Book";
import CinnamonRoll from "@/elements/CinnamonRoll";
import Bonfire from "@/elements/Bonfire";
import GingerbreadCookie from "@/elements/GingerbreadCookie";
import Sweater from "@/elements/Sweater";
import ApplePie from "@/elements/ApplePie";
import Beanie from "@/elements/Beanie";
import JingleBells from "@/elements/JingleBells";
import Scarf from "@/elements/Scarf";
import WoolSocks from "@/elements/WoolSocks";
import SnowBoots from "@/elements/SnowBoots";
import Thermos from "@/elements/Thermos";
import SnowGlobe from "@/elements/SnowGlobe";
import SnowMan from "@/elements/SnowMan";
import StarOrnament from "@/elements/StarOrnament";
import CandyCane from "@/elements/CandyCane";
import Squirrel from "@/elements/Squirrel";
import RoastedChestnut from "@/elements/RoastedChestnut";
import ToastedMarshmallowOnAStick from "@/elements/ToastedMarshmallowOnAStick";
import Clove from "@/elements/Clove";
import Ribbon from "@/elements/Ribbon";
import TeaBag from "@/elements/TeaBag";
import HoneyJar from "@/elements/HoneyJar";
import BreadBasket from "@/elements/BreadBasket";
import EarMuffs from "@/elements/EarMuffs";
import SugarCookies from "@/elements/SugarCookies";
import YuleLog from "@/elements/YuleLog";

/** All winter solstice elements — game rounds pick 20 at random from this pool. */
export const WINTER_ELEMENTS: ElementMeta[] = [
  {
    id: "christmas-tree",
    name: "Christmas Tree",
    synonyms: ["christmas tree", "pine tree", "fir tree", "evergreen", "tree"],
    Component: ChristmasTree,
  },
  {
    id: "light-candles",
    name: "Light Candles",
    synonyms: ["light candles", "candles", "lit candles", "flames", "wax"],
    Component: LightCandles,
  },
  {
    id: "coffee-mug",
    name: "Coffee Mug",
    synonyms: ["coffee mug", "mug", "cup", "coffee cup"],
    Component: CoffeeMug,
  },
  {
    id: "cinnamon-sticks",
    name: "Cinnamon Sticks",
    synonyms: ["cinnamon sticks", "cinnamon", "spice", "cinnamon quill"],
    Component: CinnamonSticks,
  },
  {
    id: "lantern",
    name: "Lantern",
    synonyms: ["lantern", "lamp", "light", "oil lamp"],
    Component: Lantern,
  },
  {
    id: "book",
    name: "Book",
    synonyms: ["book", "novel", "hardcover", "reading book"],
    Component: Book,
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    synonyms: ["cinnamon roll", "sweet roll", "cinnamon bun", "pastry", "sticky bun"],
    Component: CinnamonRoll,
  },
  {
    id: "bonfire",
    name: "Bonfire",
    synonyms: ["bonfire", "campfire", "fire", "hearth", "flames"],
    Component: Bonfire,
  },
  {
    id: "gingerbread-cookie",
    name: "Gingerbread Cookie",
    synonyms: ["gingerbread cookie", "gingerbread man", "biscuit", "gingerbread"],
    Component: GingerbreadCookie,
  },
  {
    id: "sweater",
    name: "Sweater",
    synonyms: ["sweater", "jumper", "pullover", "cardigan", "knitwear"],
    Component: Sweater,
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    synonyms: ["apple pie", "pie", "fruit pie", "baked good", "tart"],
    Component: ApplePie,
  },
  {
    id: "beanie",
    name: "Beanie",
    synonyms: ["beanie", "winter hat", "toque", "knit cap", "hat"],
    Component: Beanie,
  },
  {
    id: "jingle-bells",
    name: "Jingle Bells",
    synonyms: ["jingle bells", "bells", "sleigh bells", "chimes"],
    Component: JingleBells,
  },
  {
    id: "scarf",
    name: "Scarf",
    synonyms: ["scarf", "muffler", "neck wrap", "neck warmer"],
    Component: Scarf,
  },
  {
    id: "wool-socks",
    name: "Wool Socks",
    synonyms: ["wool socks", "socks", "warm socks", "stockings"],
    Component: WoolSocks,
  },
  {
    id: "snow-boots",
    name: "Snow Boots",
    synonyms: ["snow boots", "winter boots", "boots", "footwear", "galoshes"],
    Component: SnowBoots,
  },
  {
    id: "thermos",
    name: "Thermos",
    synonyms: ["thermos", "flask", "vacuum flask", "insulated bottle"],
    Component: Thermos,
  },
  {
    id: "snow-globe",
    name: "Snow Globe",
    synonyms: ["snow globe", "snowglobe", "water globe", "snowdome"],
    Component: SnowGlobe,
  },
  {
    id: "snow-man",
    name: "Snow Man",
    synonyms: ["snowman", "snow man", "frosty", "snow figure"],
    Component: SnowMan,
  },
  {
    id: "star-ornament",
    name: "Star Ornament",
    synonyms: ["star ornament", "star", "tree topper", "decoration"],
    Component: StarOrnament,
  },
  {
    id: "candy-cane",
    name: "Candy Cane",
    synonyms: ["candy cane", "peppermint stick", "mint candy", "striped candy"],
    Component: CandyCane,
  },
  {
    id: "squirrel",
    name: "Squirrel",
    synonyms: ["squirrel", "rodent", "chipmunk", "critter"],
    Component: Squirrel,
  },
  {
    id: "roasted-chestnut",
    name: "Roasted Chestnut",
    synonyms: ["roasted chestnut", "chestnut", "nut", "roasted nut"],
    Component: RoastedChestnut,
  },
  {
    id: "toasted-marshmallow-on-a-stick",
    name: "Toasted Marshmallow on a Stick",
    synonyms: ["toasted marshmallow", "marshmallow", "s'more ingredient", "roasted marshmallow"],
    Component: ToastedMarshmallowOnAStick,
  },
  {
    id: "clove",
    name: "Clove",
    synonyms: ["clove", "spice", "dried clove"],
    Component: Clove,
  },
  {
    id: "ribbon",
    name: "Ribbon",
    synonyms: ["ribbon", "bow", "decorative ribbon", "wrapping ribbon"],
    Component: Ribbon,
  },
  {
    id: "tea-bag",
    name: "Tea Bag",
    synonyms: ["tea bag", "teabag", "tea", "infusion"],
    Component: TeaBag,
  },
  {
    id: "honey-jar",
    name: "Honey Jar",
    synonyms: ["honey jar", "honey", "pot of honey", "honey pot"],
    Component: HoneyJar,
  },
  {
    id: "bread-basket",
    name: "Bread Basket",
    synonyms: ["bread basket", "basket of bread", "rolls", "buns", "loaf"],
    Component: BreadBasket,
  },
  {
    id: "ear-muffs",
    name: "Ear Muffs",
    synonyms: ["ear muffs", "earmuffs", "ear warmers"],
    Component: EarMuffs,
  },
  {
    id: "sugar-cookies",
    name: "Sugar Cookies",
    synonyms: ["sugar cookies", "cookies", "biscuits", "frosted cookies"],
    Component: SugarCookies,
  },
  {
    id: "yule-log",
    name: "Yule Log",
    synonyms: ["yule log", "log", "firewood"],
    Component: YuleLog,
  },
];