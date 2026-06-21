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
    synonyms: ["sunflower", "flower", "sunflower flower"],
    Component: Sunflower,
  },
  {
    id: "butterfly",
    name: "Butterfly",
    synonyms: ["butterfly", "insect", "butterfly insect"],
    Component: Butterfly,
  },
  {
    id: "orange-slice",
    name: "Orange Slice",
    synonyms: ["orange slice", "orange", "orange slice orange"],
    Component: OrangeSlice,
  },
  {
    id: "iced-citrus-tea",
    name: "Iced Citrus Tea",
    synonyms: ["iced citrus tea", "tea", "iced citrus tea tea"],
    Component: IcedCitrusTea,
  },
  {
    id: "honeybee",
    name: "Honeybee",
    synonyms: ["honeybee", "bee", "honeybee bee"],
    Component: Honeybee,
  },
  {
    id: "watermelon-slice",
    name: "Watermelon Slice",
    synonyms: ["watermelon slice", "watermelon", "watermelon slice watermelon"],
    Component: WatermelonSlice,
  },
  {
    id: "cherries",
    name: "Cherries",
    synonyms: ["cherries", "fruit", "cherries fruit"],
    Component: Cherries,
  },
  {
    id: "plum",
    name: "Plum",
    synonyms: ["plum", "fruit", "plum fruit"],
    Component: Plum,
  },
  {
    id: "crystal",
    name: "Crystal",
    synonyms: ["crystal", "gem", "crystal gem"],
    Component: Crystal,
  },
  {
    id: "sea-shell",
    name: "Sea Shell",
    synonyms: ["sea shell", "shell", "sea shell shell"],
    Component: SeaShell,
  },
  {
    id: "sunglasses",
    name: "Sunglasses",
    synonyms: ["sunglasses", "glasses", "sunglasses glasses"],
    Component: Sunglasses,
  },
  {
    id: "icecream",
    name: "Icecream",
    synonyms: ["icecream", "ice cream", "icecream ice cream"],
    Component: Icecream,
  },
  {
    id: "sun-hat",
    name: "Sun Hat",
    synonyms: ["sun hat", "hat", "sun hat hat"],
    Component: SunHat,
  },
  {
    id: "blueberries",
    name: "Blueberries",
    synonyms: ["blueberries", "fruit", "blueberries fruit"],
    Component: Blueberries,
  },
  {
    id: "strawberry",
    name: "Strawberry",
    synonyms: ["strawberry", "fruit", "strawberry fruit"],
    Component: Strawberry,
  },
  {
    id: "sandcastle",
    name: "Sandcastle",
    synonyms: ["sandcastle", "sand", "sandcastle sand"],
    Component: Sandcastle,
  },
  {
    id: "picnic-basket",
    name: "Picnic Basket",
    synonyms: ["picnic basket", "basket", "picnic basket basket"],
    Component: PicnicBasket,
  },
  {
    id: "flip-flops",
    name: "Flip Flops",
    synonyms: ["flip flops", "flip flops", "flip flops flip flops"],
    Component: FlipFlops,
  },
  {
    id: "yellow-candle",
    name: "Yellow Candle",
    synonyms: ["yellow candle", "candle", "yellow candle candle"],
    Component: YellowCandle,
  },
  {
    id: "watering-can",
    name: "Watering Can",
    synonyms: ["watering can", "can", "watering can can"],
    Component: WateringCan,
  },
  {
    id: "blue-bird",
    name: "Blue Bird",
    synonyms: ["blue bird", "bird", "blue bird bird"],
    Component: BlueBird,
  },
  {
    id: "popsicle",
    name: "Popsicle",
    synonyms: ["popsicle", "popsicle", "popsicle popsicle"],
    Component: Popsicle,
  },
  {
    id: "lemons",
    name: "Lemons",
    synonyms: ["lemons", "fruit", "lemons fruit"],
    Component: Lemons,
  },
  {
    id: "bonfire",
    name: "Bonfire",
    synonyms: ["bonfire", "fire", "bonfire fire"],
    Component: Bonfire,
  },
  {
    id: "story-book",
    name: "Story Book",
    synonyms: ["story book", "book", "story book book"],
    Component: StoryBook,
  },
  {
    id: "tropical-tree",
    name: "Tropical Tree",
    synonyms: ["tropical tree", "tree", "tropical tree tree"],
    Component: TropicalTree,
  },
  {
    id: "lavender",
    name: "Lavender",
    synonyms: ["lavender", "flower", "lavender flower"],
    Component: Lavender,
  },
  {
    id: "mango",
    name: "Mango",
    synonyms: ["mango", "fruit", "mango fruit"],
    Component: Mango,
  },
  {
    id: "camping-tent",
    name: "Camping Tent",
    synonyms: ["camping tent", "tent", "camping tent tent"],
    Component: CampingTent,
  },
  {
    id: "bicycle",
    name: "Bicycle",
    synonyms: ["bicycle", "bike", "bicycle bike"],
    Component: Bicycle,
  },
  {
    id: "surfboard",
    name: "Surfboard",
    synonyms: ["surfboard", "surf", "surfboard surf"],
    Component: Surfboard,
  },
  {
    id: "jar",
    name: "Jar",
    synonyms: ["jar", "jar of", "jar jar"],
    Component: Jar,
  },
];
