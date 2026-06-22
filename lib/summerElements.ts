import type { ElementMeta } from "./elementTypes";

import Sunflower from "@/elements/Sunflower";
import Butterfly from "@/elements/Butterfly";
import OrangeSlice from "@/elements/OrangeSlice";
import IcedCitrusTea from "@/elements/IcedCitrusTea";
import Honeybee from "@/elements/Honeybee";
import WatermelonSlice from "@/elements/WatermelonSlice";
import Cherries from "@/elements/Cherries";
import Plum from "@/elements/Plum";
import Crystal from "@/elements/Crystal";
import SeaShell from "@/elements/SeaShell";
import Sunglasses from "@/elements/Sunglasses";
import Icecream from "@/elements/Icecream";
import SunHat from "@/elements/SunHat";
import Blueberries from "@/elements/Blueberries";
import Strawberry from "@/elements/Strawberry";
import Sandcastle from "@/elements/Sandcastle";
import PicnicBasket from "@/elements/PicnicBasket";
import FlipFlops from "@/elements/FlipFlops";
import YellowCandle from "@/elements/YellowCandle";
import WateringCan from "@/elements/WateringCan";
import BlueBird from "@/elements/BlueBird";
import Popsicle from "@/elements/Popsicle";
import Lemons from "@/elements/Lemons";
import Bonfire from "@/elements/Bonfire";
import StoryBook from "@/elements/StoryBook";
import TropicalTree from "@/elements/TropicalTree";
import Lavender from "@/elements/Lavender";
import Mango from "@/elements/Mango";
import CampingTent from "@/elements/CampingTent";
import Bicycle from "@/elements/Bicycle";
import Surfboard from "@/elements/Surfboard";
import Jar from "@/elements/Jar";

/** All summer solstice elements — game rounds pick 20 at random from this pool. */
export const SUMMER_ELEMENTS: ElementMeta[] = [
  {
    id: "sunflower",
    name: "Sunflower",
    synonyms: ["sunflower", "yellow flower", "bloom", "blossom", "flower"],
    Component: Sunflower,
  },
  {
    id: "butterfly",
    name: "Butterfly",
    synonyms: ["butterfly", "bug", "insect", "caterpillar", "moth"],
    Component: Butterfly,
  },
  {
    id: "orange-slice",
    name: "Orange Slice",
    synonyms: ["orange slice", "orange", "citrus wedge", "citrus", "orange wedge"],
    Component: OrangeSlice,
  },
  {
    id: "iced-citrus-tea",
    name: "Iced Citrus Tea",
    synonyms: ["iced citrus tea", "iced tea", "cold tea", "lemon tea", "sweet tea"],
    Component: IcedCitrusTea,
  },
  {
    id: "honeybee",
    name: "Honeybee",
    synonyms: ["honeybee", "bee", "bumblebee", "worker bee"],
    Component: Honeybee,
  },
  {
    id: "watermelon-slice",
    name: "Watermelon Slice",
    synonyms: ["watermelon slice", "watermelon", "melon", "fruit slice", "watermelon wedge"],
    Component: WatermelonSlice,
  },
  {
    id: "cherries",
    name: "Cherries",
    synonyms: ["cherries", "cherry", "red fruit", "cherry fruit"],
    Component: Cherries,
  },
  {
    id: "plum",
    name: "Plum",
    synonyms: ["plum", "prune", "stone fruit", "purple fruit", "purple plum"],
    Component: Plum,
  },
  {
    id: "crystal",
    name: "Crystal",
    synonyms: ["crystal", "gem", "gemstone", "quartz", "mineral", "rock"],
    Component: Crystal,
  },
  {
    id: "sea-shell",
    name: "Sea Shell",
    synonyms: ["sea shell", "seashell", "shell", "conch", "clam shell"],
    Component: SeaShell,
  },
  {
    id: "sunglasses",
    name: "Sunglasses",
    synonyms: ["sunglasses", "shades", "glasses", "sunnies", "sun glasses"],
    Component: Sunglasses,
  },
  {
    id: "icecream",
    name: "Icecream",
    synonyms: ["icecream", "ice cream", "gelato", "cone", "soft serve", "ice cream cone"],
    Component: Icecream,
  },
  {
    id: "sun-hat",
    name: "Sun Hat",
    synonyms: ["sun hat", "straw hat", "hat", "wide brim hat", "beach hat"],
    Component: SunHat,
  },
  {
    id: "blueberries",
    name: "Blueberries",
    synonyms: ["blueberries", "blueberry", "berries", "blue berry", "blue fruit"],
    Component: Blueberries,
  },
  {
    id: "strawberry",
    name: "Strawberry",
    synonyms: ["strawberry", "berry", "red berry", "strawberries", "strawberry fruit"],
    Component: Strawberry,
  },
  {
    id: "sandcastle",
    name: "Sandcastle",
    synonyms: ["sandcastle", "sand fort", "sand building", "sand castle", "castle"],
    Component: Sandcastle,
  },
  {
    id: "picnic-basket",
    name: "Picnic Basket",
    synonyms: ["picnic basket", "basket", "hamper", "woven basket", "picnic hamper"],
    Component: PicnicBasket,
  },
  {
    id: "flip-flops",
    name: "Flip Flops",
    synonyms: ["flip flops", "sandals", "slippers", "thongs", "shoes", "beach sandals"],
    Component: FlipFlops,
  },
  {
    id: "yellow-candle",
    name: "Yellow Candle",
    synonyms: ["yellow candle", "candle", "wax candle", "tealight", "citronella candle"],
    Component: YellowCandle,
  },
  {
    id: "watering-can",
    name: "Watering Can",
    synonyms: ["watering can", "sprinkler", "pitcher", "water jug", "garden can"],
    Component: WateringCan,
  },
  {
    id: "blue-bird",
    name: "Blue Bird",
    synonyms: ["blue bird", "bluebird", "bird", "songbird", "blue jay"],
    Component: BlueBird,
  },
  {
    id: "popsicle",
    name: "Popsicle",
    synonyms: ["popsicle", "ice pop", "ice lolly", "freezie", "frozen treat", "popsicle stick"],
    Component: Popsicle,
  },
  {
    id: "lemons",
    name: "Lemons",
    synonyms: ["lemons", "lemon", "citrus", "yellow fruit", "lemon fruit"],
    Component: Lemons,
  },
  {
    id: "bonfire",
    name: "Bonfire",
    synonyms: ["bonfire", "campfire", "fire", "flames", "fire pit", "hearth"],
    Component: Bonfire,
  },
  {
    id: "story-book",
    name: "Story Book",
    synonyms: ["story book", "book", "novel", "tale", "storybook", "fairy tale"],
    Component: StoryBook,
  },
  {
    id: "tropical-tree",
    name: "Tropical Tree",
    synonyms: ["tropical tree", "palm tree", "palm", "coconut tree", "coconut palm"],
    Component: TropicalTree,
  },
  {
    id: "lavender",
    name: "Lavender",
    synonyms: ["lavender", "purple flower", "herb", "lilac", "lavender flower"],
    Component: Lavender,
  },
  {
    id: "mango",
    name: "Mango",
    synonyms: ["mango", "tropical fruit", "stone fruit", "mango fruit"],
    Component: Mango,
  },
  {
    id: "camping-tent",
    name: "Camping Tent",
    synonyms: ["camping tent", "tent", "shelter", "camp", "pop up tent"],
    Component: CampingTent,
  },
  {
    id: "bicycle",
    name: "Bicycle",
    synonyms: ["bicycle", "bike", "cycle", "two-wheeler", "pushbike"],
    Component: Bicycle,
  },
  {
    id: "surfboard",
    name: "Surfboard",
    synonyms: ["surfboard", "board", "wave board", "longboard", "surf board"],
    Component: Surfboard,
  },
  {
    id: "jar",
    name: "Jar",
    synonyms: ["jar", "glass jar", "mason jar", "container", "jam jar"],
    Component: Jar,
  },
];