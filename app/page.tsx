"use client";
import { useState } from "react";
import { getSteamDeals } from "@/lib/controllers/Deals";
import { TGame } from "@/lib/types/TGame";
import Game from "@/lib/components/Game/Game";

export default function Home() {
  const [steamDeals, setSteamDeals] = useState([]);

  // const result: Promise<TGame[]> = getSteamDeals(10)
  //   .then((deals) => setSteamDeals(deals))
  //   .catch((err) => console.log(err));

  return (
    <main>
      <h1>Game Deals App</h1>
      {steamDeals?.map((game: TGame) => (
        <Game key={game.gameID} game={game} />
      ))}
    </main>
  );
}
