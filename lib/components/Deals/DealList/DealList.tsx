"use client";
import { useState, useEffect } from "react";
import { getSteamDeals } from "@/lib/controllers/Deals";
import { TDeal } from "@/lib/AppTypes";
import Deal from "@/lib/components/Deals/Deal/Deal";

export default function DealList({ deals }: { deals?: TDeal[] }) {
  const [steamDeals, setSteamDeals] = useState<TDeal[]>([]);

  useEffect(() => {
    if (!deals && steamDeals.length === 0) {
      getSteamDeals(10).then((_deals) => setSteamDeals(_deals));
    }
    if (deals) {
      setSteamDeals(deals);
    }
  }, [deals]);

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-8 p-6 pt-10 max-w-7xl m-auto">
      {!steamDeals || (steamDeals.length === 0 && <div>No Steam deals found</div>)}

      {steamDeals?.length > 0 &&
        steamDeals?.map((deal: TDeal) => <Deal key={deal.gameID} deal={deal} />)}
    </div>
  );
}
