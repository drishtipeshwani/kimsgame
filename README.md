# Kim's Game

A browser-based memory game inspired by the classic observation exercise from *Kim* (Rudyard Kipling). Study a tray of objects, then recall as many as you can before time runs out.

Built with **Next.js**, **React**, and **pure CSS art** — every object on the tray is rendered with HTML and CSS, no images.

## How to Play

1. Choose a theme (**Summer Solstice** or **Winter Solstice**) and a difficulty on the home screen.
2. **Memorize** — 20 objects are placed on the tray. You have **60 seconds** (Easy) or **30 seconds** (Hard) to study them.
3. **Recall** — The tray closes. Type everything you remember within **60 seconds**. Separate items with commas or new lines.
4. **Score** — You earn **+1 point per correct item**. Wrong guesses do not reduce your score. Your highest score is saved locally in the browser.

Open the **Rules** drawer from the home screen for a quick summary.

## Features

- **Two seasonal themes**, each with a pool of 32 hand-crafted CSS art elements
- **Easy / Hard** difficulty (memorize time only; recall time is always 60 seconds)
- **Fuzzy answer matching** — plurals, spacing, and hyphenation are normalized (e.g. `snow man`, `snow-man`, and `Snow Man` all match)
- **Synonym support** — common alternate names count as correct
- **Animated tray** — lid closes between memorize and recall phases
- **Local high score** — persisted via `localStorage`

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (`lib/**/*.test.ts`) |
| `npm run generate:elements` | Generate CSS art elements via Gemini (optional; see below) |

## Project Structure

```
app/                  Next.js App Router pages
  page.tsx            Home screen
  play/page.tsx       Game screen (?theme=summer|winter&difficulty=easy|hard)
  favicon.ico         App icon
components/           UI — HomeScreen, Game, Tray, Timer, RecallInput, Results, RulesModal, …
elements/             One React component + CSS module per game object
  shared.module.css   Shared layout wrapper used by all element components
lib/
  elementTypes.ts     Shared TypeScript types (ElementMeta, Theme, …)
  elementRegistry.ts  Theme definitions (summer + winter)
  summerElements.ts   Summer element metadata & component imports
  winterElements.ts   Winter element metadata & component imports
  gameLogic.ts        Round setup, random selection, input parsing
  scoring.ts          Answer matching and score calculation
  normalizeAnswer.ts  Guess normalization (case, plurals, spacing)
  scoreStorage.ts     Local high-score persistence
scripts/
  summer-solstice-elements.ts   Canonical summer element name list
  winter-solstice-elements.ts   Canonical winter element name list
  generate-css-art.ts           AI-assisted element generation (optional)
skills/css-art/       CSS art generation skill & reference assets (SKILL.md, assets/)
```

## Themes & Elements

Each round randomly selects **20 objects** from the theme's full pool of **32 elements**.

| Theme | Pool size | Aesthetic |
|-------|-----------|-----------|
| Summer Solstice | 32 | Warm gradients, sun, blooms, picnics |
| Winter Solstice | 32 | Cool tones, frost, candles, cozy gatherings |

Element names are defined in:

- [`scripts/summer-solstice-elements.ts`](scripts/summer-solstice-elements.ts)
- [`scripts/winter-solstice-elements.ts`](scripts/winter-solstice-elements.ts)

Registered for gameplay in:

- [`lib/summerElements.ts`](lib/summerElements.ts)
- [`lib/winterElements.ts`](lib/winterElements.ts)

Each element is a self-contained component under `elements/` (e.g. `Sunflower.tsx` + `Sunflower.module.css`).

## Generating New Elements (Optional)

A script can generate new CSS art elements using Google's Gemini API. This is a **development tool** — the game itself does not require it at runtime.

1. Create `.env.local` with your API key:

   ```
   GEMINI_API_KEY=your_key_here
   ```

2. Generate elements for a theme:

   ```bash
   npm run generate:elements -- --summer
   npm run generate:elements -- --winter
   ```

   Or generate specific items:

   ```bash
   npm run generate:elements -- "Sunflower" "Coffee Mug"
   ```

Output is written to `elements/`. After generating, register new elements in the appropriate `lib/*Elements.ts` file and add synonyms for flexible recall matching.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- TypeScript
- CSS Modules (no image assets for game objects)
- Google Fonts — **Luckiest Guy** (headings), **Dongle** (body text)

## Scoring Details

- Score = number of uniquely matched correct items
- Duplicate guesses for the same item only count once
- Wrong guesses are reported in results but do not affect the score
- Answers are matched against each element's `name`, `id`, and `synonyms` after normalization
