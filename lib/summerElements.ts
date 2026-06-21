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
    synonyms: ["sunflower", "yellow flower", "bloom", "blossom"],
    Component: Sunflower,
  },
  {
    id: "butterfly",
    name: "Butterfly",
    synonyms: ["butterfly", "bug", "insect", "caterpillar"],
    Component: Butterfly,
  },
  {
    id: "orange-slice",
    name: "Orange Slice",
    synonyms: ["orange slice", "orange", "citrus wedge", "citrus"],
    Component: OrangeSlice,
  },
  {
    id: "iced-citrus-tea",
    name: "Iced Citrus Tea",
    synonyms: ["iced citrus tea", "iced tea", "cold tea", "lemon tea", "beverage"],
    Component: IcedCitrusTea,
  },
  {
    id: "honeybee",
    name: "Honeybee",
    synonyms: ["honeybee", "bee", "bumblebee", "pollinator"],
    Component: Honeybee,
  },
  {
    id: "watermelon-slice",
    name: "Watermelon Slice",
    synonyms: ["watermelon slice", "watermelon", "melon", "fruit slice"],
    Component: WatermelonSlice,
  },
  {
    id: "cherries",
    name: "Cherries",
    synonyms: ["cherries", "cherry", "red fruit", "stone fruit"],
    Component: Cherries,
  },
  {
    id: "plum",
    name: "Plum",
    synonyms: ["plum", "prune", "stone fruit", "purple fruit"],
    Component: Plum,
  },
  {
    id: "crystal",
    name: "Crystal",
    synonyms: ["crystal", "gem", "gemstone", "quartz", "mineral"],
    Component: Crystal,
  },
  {
    id: "sea-shell",
    name: "Sea Shell",
    synonyms: ["sea shell", "seashell", "shell", "conch", "clam"],
    Component: SeaShell,
  },
  {
    id: "sunglasses",
    name: "Sunglasses",
    synonyms: ["sunglasses", "shades", "glasses", "sunnies"],
    Component: Sunglasses,
  },
  {
    id: "icecream",
    name: "Icecream",
    synonyms: ["icecream", "ice cream", "gelato", "cone", "soft serve"],
    Component: Icecream,
  },
  {
    id: "sun-hat",
    name: "Sun Hat",
    synonyms: ["sun hat", "straw hat", "hat", "wide brim hat"],
    Component: SunHat,
  },
  {
    id: "blueberries",
    name: "Blueberries",
    synonyms: ["blueberries", "blueberry", "berries", "blue berry"],
    Component: Blueberries,
  },
  {
    id: "strawberry",
    name: "Strawberry",
    synonyms: ["strawberry", "berry", "red berry", "strawberries"],
    Component: Strawberry,
  },
  {
    id: "sandcastle",
    name: "Sandcastle",
    synonyms: ["sandcastle", "sand fort", "sand building", "sand castle"],
    Component: Sandcastle,
  },
  {
    id: "picnic-basket",
    name: "Picnic Basket",
    synonyms: ["picnic basket", "basket", "hamper", "woven basket"],
    Component: PicnicBasket,
  },
  {
    id: "flip-flops",
    name: "Flip Flops",
    synonyms: ["flip flops", "sandals", "slippers", "thongs", "shoes"],
    Component: FlipFlops,
  },
  {
    id: "yellow-candle",
    name: "Yellow Candle",
    synonyms: ["yellow candle", "candle", "wax candle", "tealight"],
    Component: YellowCandle,
  },
  {
    id: "watering-can",
    name: "Watering Can",
    synonyms: ["watering can", "sprinkler", "pitcher", "water jug"],
    Component: WateringCan,
  },
  {
    id: "blue-bird",
    name: "Blue Bird",
    synonyms: ["blue bird", "bluebird", "bird", "songbird"],
    Component: BlueBird,
  },
  {
    id: "popsicle",
    name: "Popsicle",
    synonyms: ["popsicle", "ice pop", "ice lolly", "freezie", "frozen treat"],
    Component: Popsicle,
  },
  {
    id: "lemons",
    name: "Lemons",
    synonyms: ["lemons", "lemon", "citrus", "yellow fruit"],
    Component: Lemons,
  },
  {
    id: "bonfire",
    name: "Bonfire",
    synonyms: ["bonfire", "campfire", "fire", "flames"],
    Component: Bonfire,
  },
  {
    id: "story-book",
    name: "Story Book",
    synonyms: ["story book", "book", "novel", "tale", "storybook"],
    Component: StoryBook,
  },
  {
    id: "tropical-tree",
    name: "Tropical Tree",
    synonyms: ["tropical tree", "palm tree", "palm", "coconut tree"],
    Component: TropicalTree,
  },
  {
    id: "lavender",
    name: "Lavender",
    synonyms: ["lavender", "purple flower", "herb", "lilac"],
    Component: Lavender,
  },
  {
    id: "mango",
    name: "Mango",
    synonyms: ["mango", "tropical fruit", "stone fruit"],
    Component: Mango,
  },
  {
    id: "camping-tent",
    name: "Camping Tent",
    synonyms: ["camping tent", "tent", "shelter", "camp"],
    Component: CampingTent,
  },
  {
    id: "bicycle",
    name: "Bicycle",
    synonyms: ["bicycle", "bike", "cycle", "two-wheeler"],
    Component: Bicycle,
  },
  {
    id: "surfboard",
    name: "Surfboard",
    synonyms: ["surfboard", "board", "wave board", "skurfboard"],
    Component: Surfboard,
  },
  {
    id: "jar",
    name: "Jar",
    synonyms: ["jar", "glass jar", "mason jar", "container"],
    Component: Jar,
  },
];