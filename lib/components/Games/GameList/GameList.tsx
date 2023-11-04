"use client";
import { useState, useEffect } from "react";
import { TGame } from "@/lib/AppTypes";
import Game from "@/lib/components/Games/Game/Game";

export default function GameList({ games }: { games: TGame[] }) {
  const [gameList, setGameList] = useState<TGame[]>([]);

  useEffect(() => {
    if (games) {
      setGameList(games);
    }
  }, [games]);

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-8 p-6 pt-10 max-w-7xl m-auto">
      {!gameList || (gameList.length === 0 && <div>No games found</div>)}

      {gameList?.map((game: TGame) => (
        <Game key={game.gameID} game={game} />
      ))}
    </div>
  );
}
