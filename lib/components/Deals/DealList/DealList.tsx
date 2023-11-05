"use client";
import { useState, useEffect } from "react";
import { getSteamDeals } from "@/lib/controllers/Deals";
import { TDeal } from "@/lib/AppTypes";
import Deal from "@/lib/components/Deals/Deal/Deal";
import Spinner from "../../ui/Spinner/Spinner";

export default function DealList({ deals }: { deals?: TDeal[] }) {
  const [steamDeals, setSteamDeals] = useState<TDeal[]>([]);

  useEffect(() => {
    if (!deals && steamDeals.length === 0) {
      getSteamDeals(10).then((_deals) => setSteamDeals(_deals));
    }
    if (deals && steamDeals.length === 0) {
      setSteamDeals(deals);
    }
  }, [deals, steamDeals]);

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-8 p-6 pt-10 max-w-7xl m-auto">
      {!steamDeals ||
        (steamDeals.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <Spinner />
            <div>No steam deals found</div>
          </div>
        ))}

      {steamDeals?.length > 0 &&
        steamDeals?.map((deal: TDeal) => <Deal key={deal.gameID} deal={deal} />)}
    </div>
  );
}
