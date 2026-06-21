import Game from "@/components/Game";
import type { Difficulty } from "@/lib/gameLogic";
import type { ThemeId } from "@/lib/elementRegistry";

type PlayPageProps = {
  searchParams: Promise<{ theme?: string; difficulty?: string }>;
};

function parseTheme(value: string | undefined): ThemeId {
  return value === "winter" ? "winter" : "summer";
}

function parseDifficulty(value: string | undefined): Difficulty {
  return value === "hard" ? "hard" : "easy";
}

export default async function PlayPage({ searchParams }: PlayPageProps) {
  const params = await searchParams;

  return (
    <main style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
      <Game
        themeId={parseTheme(params.theme)}
        difficulty={parseDifficulty(params.difficulty)}
      />
    </main>
  );
}
