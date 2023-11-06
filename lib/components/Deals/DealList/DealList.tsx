"use client";
import { useState, useEffect } from "react";
import { getDeals } from "@/lib/controllers/Deals";
import { TDeal, TDealQuery } from "@/lib/AppTypes";
import Deal from "@/lib/components/Deals/Deal/Deal";
import Spinner from "../../ui/Spinner/Spinner";
import DealControls from "../DealControls/DealControls";

export default function DealList({ deals }: { deals?: TDeal[] }) {
  const [steamDeals, setSteamDeals] = useState<TDeal[]>([]);
  const [queryData, setQueryData] = useState<TDealQuery>();

  const onDealControlsUpdate = (dealQuery: TDealQuery) => {
    setQueryData(dealQuery);
  };

  useEffect(() => {
    if (queryData !== null) {
      getDeals(queryData).then((_steamDeals) => setSteamDeals(_steamDeals));
    }
  }, [queryData]);

  return (
    <div>
      <div>
        <DealControls onUpdate={onDealControlsUpdate} />
      </div>
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
    </div>
  );
}
