"use client";
import { useState } from "react";
import { getSteamDeals } from "@/lib/controllers/Deals";
import { TDeal } from "@/lib/types/TDeal";
import Deal from "@/lib/components/Deal/Deal";
import { TestGameData } from "@/lib/data/TestGameData";

export default function GameList() {
  const [steamDeals, setSteamDeals] = useState([]);

  // TEST DATA:
  if (steamDeals.length === 0) {
    setSteamDeals(TestGameData);
  }

  // REAL DATA:
  // if (steamDeals.length === 0) {
  //   getSteamDeals(10)
  //     .then((deals) => setSteamDeals(deals))
  //     .catch((err) => console.log(err));
  // }
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-8 p-6 pt-10 max-w-7xl m-auto">
      {steamDeals?.map((deal: TDeal) => (
        <Deal key={deal.gameID} deal={deal} />
      ))}
    </div>
  );
}
