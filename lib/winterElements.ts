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
    synonyms: ["christmas tree", "tree", "christmas tree"],
    Component: ChristmasTree,
  },
  {
    id: "light-candles",
    name: "Light Candles",
    synonyms: ["light candles", "candles", "light candles"],
    Component: LightCandles,
  },
  {
    id: "coffee-mug",
    name: "Coffee Mug",
    synonyms: ["coffee mug", "mug", "coffee mug"],
    Component: CoffeeMug,
  },
  {
    id: "cinnamon-sticks",
    name: "Cinnamon Sticks",
    synonyms: ["cinnamon sticks", "sticks", "cinnamon sticks"],
    Component: CinnamonSticks,
  },
  {
    id: "lantern",
    name: "Lantern",
    synonyms: ["lantern", "lantern", "lantern"],
    Component: Lantern,
  },
  {
    id: "book",
    name: "Book",
    synonyms: ["book", "book", "book"],
    Component: Book,
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    synonyms: ["cinnamon roll", "roll", "cinnamon roll"],
    Component: CinnamonRoll,
  },
  {
    id: "bonfire",
    name: "Bonfire",
    synonyms: ["bonfire", "fire", "bonfire"],
    Component: Bonfire,
  },
  {
    id: "gingerbread-cookie",
    name: "Gingerbread Cookie",
    synonyms: ["gingerbread cookie", "cookie", "gingerbread cookie"],
    Component: GingerbreadCookie,
  },
  {
    id: "sweater",
    name: "Sweater",
    synonyms: ["sweater", "sweater", "sweater"],
    Component: Sweater,
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    synonyms: ["apple pie", "pie", "apple pie"],
    Component: ApplePie,
  },
  {
    id: "beanie",
    name: "Beanie",
    synonyms: ["beanie", "beanie", "beanie"],
    Component: Beanie,
  },
  {
    id: "jingle-bells",
    name: "Jingle Bells",
    synonyms: ["jingle bells", "bells", "jingle bells"],
    Component: JingleBells,
  },
  {
    id: "scarf",
    name: "Scarf",
    synonyms: ["scarf", "scarf", "scarf"],
    Component: Scarf,
  },
  {
    id: "wool-socks",
    name: "Wool Socks",
    synonyms: ["wool socks", "socks", "wool socks"],
    Component: WoolSocks,
  },
  {
    id: "snow-boots",
    name: "Snow Boots",
    synonyms: ["snow boots", "boots", "snow boots"],
    Component: SnowBoots,
  },
  {
    id: "thermos",
    name: "Thermos",
    synonyms: ["thermos", "thermos", "thermos"],
    Component: Thermos,
  },
  {
    id: "snow-globe",
    name: "Snow Globe",
    synonyms: ["snow globe", "globe", "snow globe"],
    Component: SnowGlobe,
  },
  {
    id: "snow-man",
    name: "Snow Man",
    synonyms: ["snow man", "man", "snow man"],
    Component: SnowMan,
  },
  {
    id: "star-ornament",
    name: "Star Ornament",
    synonyms: ["star ornament", "ornament", "star ornament"],
    Component: StarOrnament,
  },
  {
    id: "candy-cane",
    name: "Candy Cane",
    synonyms: ["candy cane", "cane", "candy cane"],
    Component: CandyCane,
  },
  {
    id: "squirrel",
    name: "Squirrel",
    synonyms: ["squirrel", "squirrel", "squirrel"],
    Component: Squirrel,
  },
  {
    id: "roasted-chestnut",
    name: "Roasted Chestnut",
    synonyms: ["roasted chestnut", "chestnut", "roasted chestnut"],
    Component: RoastedChestnut,
  },
  {
    id: "toasted-marshmallow-on-a-stick",
    name: "Toasted Marshmallow on a Stick",
    synonyms: ["toasted marshmallow on a stick", "marshmallow", "toasted marshmallow on a stick"],
    Component: ToastedMarshmallowOnAStick,
  },
  {
    id: "clove",
    name: "Clove",
    synonyms: ["clove", "clove", "clove"],
    Component: Clove,
  },
  {
    id: "ribbon",
    name: "Ribbon",
    synonyms: ["ribbon", "ribbon", "ribbon"],
    Component: Ribbon,
  },
  {
    id: "tea-bag",
    name: "Tea Bag",
    synonyms: ["tea bag", "bag", "tea bag"],
    Component: TeaBag,
  },
  {
    id: "honey-jar",
    name: "Honey Jar",
    synonyms: ["honey jar", "jar", "honey jar"],
    Component: HoneyJar,
  },
  {
    id: "bread-basket",
    name: "Bread Basket",
    synonyms: ["bread basket", "basket", "bread basket"],
    Component: BreadBasket,
  },
  {
    id: "ear-muffs",
    name: "Ear Muffs",
    synonyms: ["ear muffs", "muffs", "ear muffs"],
    Component: EarMuffs,
  },
  {
    id: "sugar-cookies",
    name: "Sugar Cookies",
    synonyms: ["sugar cookies", "cookies", "sugar cookies"],
    Component: SugarCookies,
  },
  {
    id: "yule-log",
    name: "Yule Log",
    synonyms: ["yule log", "log", "yule log"],
    Component: YuleLog,
  },
];
