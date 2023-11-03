import { TDeal } from "@/lib/types/TDeal";
import Image from "next/image";

export default function Deal({ deal }: { deal: TDeal }) {
  const DEAL_BASEURL = "https://www.cheapshark.com/redirect?dealID=";

  const figureSteamRatingTextStyle = (rating) => {
    let fRating = rating.toString().toLowerCase();
    switch (fRating) {
      case "mixed":
        return "text-amber-600";
      case "mostly positive":
        return "text-lime-400";
      case "very positive":
        return "text-lime-600";
      case "overwhelmingly positive":
        return "text-green-700";
      default:
        return "text-black";
    }
  };

  return (
    <div
      className="flex flex-col mb-4 border border-solid border-gray-500"
      style={{ width: "320px", height: "320px" }}
    >
      <div className="relative" style={{ width: "auto", height: "300px" }}>
        <a href={`${DEAL_BASEURL}${deal.dealID}`} target="_blank">
          <Image src={deal.thumb} alt={deal.title} fill style={{ objectFit: "cover" }} />
        </a>
      </div>

      {/* RATING */}
      <div className="pt-4 pb-4 pl-4 pr-2 bg-gray-600">
        <div className="font-bold text-xl text-white">{deal.title}</div>
        <div className="text-base text-gray-200">
          Rating:{" "}
          <span
            className={`font-bold ${figureSteamRatingTextStyle(deal.steamRatingText)}`}
          >
            {deal.steamRatingText}
          </span>
        </div>
      </div>

      {/* PRICE */}
      <div className="bg-amber-100 text-center">
        <div className="bg-amber-700 font-bold text-white p-2">
          <div>${deal.salePrice}!</div>
          <div className="text-sm font-normal">Normally ${deal.normalPrice}</div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex">
        <a
          href={`${DEAL_BASEURL}${deal.dealID}`}
          target="_blank"
          className="bg-slate-800 hover:bg-slate-700 text-white w-full h-full text-center p-2"
        >
          View Deal
        </a>
      </div>
    </div>
  );
}
