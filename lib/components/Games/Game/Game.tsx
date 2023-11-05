import { TGame } from "@/lib/AppTypes";
import Image from "next/image";

export default function Game({ game }: { game: TGame }) {
  const DEAL_BASEURL = "https://www.cheapshark.com/redirect?dealID=";

  return (
    <div
      className="flex flex-col mb-4 border border-solid border-gray-500"
      style={{ width: "320px", height: "320px" }}
    >
      <div className="relative" style={{ width: "auto", height: "300px" }}>
        <Image src={game.thumb} alt={game.external} fill style={{ objectFit: "cover" }} />
      </div>

      {/* RATING */}
      <div className="pt-4 pb-4 pl-4 pr-2 bg-gray-700">
        <div className="font-bold text-xl text-white">{game.external}</div>
      </div>

      <div className="text-center px-2 py-4 bg-slate-400">Cheapest: ${game.cheapest}</div>

      {/* ACTIONS */}
      <div className="flex">
        <a
          href={`${DEAL_BASEURL}${game.cheapestDealID}`}
          target="_blank"
          className="bg-slate-900 hover:bg-slate-800 text-white w-full h-full text-center p-2"
        >
          View Deal
        </a>
      </div>
    </div>
  );
}
