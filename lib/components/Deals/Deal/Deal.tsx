import { TDeal } from "@/lib/AppTypes";
import Image from "next/image";

export default function Deal({ deal }: { deal: TDeal }) {
  const DEAL_BASEURL = "https://www.cheapshark.com/redirect?dealID=";

  type TSalePercentage = {
    normalPrice?: string;
    salePrice?: string;
  };

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

  const figurePercentageOff = ({ normalPrice, salePrice }: TSalePercentage) => {
    const _normal = normalPrice ? parseFloat(normalPrice) : 0;
    const _sale = salePrice ? parseFloat(salePrice) : 0;
    let diff;

    if (_normal && _sale) {
      diff = _normal - _sale;

      const decimalPercentage = (_normal - _sale) / _normal;
      const percentage = (decimalPercentage * 100).toPrecision(2);

      return percentage;
    }

    return `${normalPrice}, ${salePrice}`;
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
      <div className="pt-4 pb-4 pl-4 pr-2 bg-gray-700">
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
        <div className="bg-amber-800  text-white p-2">
          <div className="line-through ml-2 text-gray-400">${deal.normalPrice}</div>
          <div className="font-bold text-xl">
            {figurePercentageOff({
              normalPrice: deal.normalPrice,
              salePrice: deal.salePrice,
            })}
            % Off!
          </div>
          <div>${deal.salePrice}</div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex">
        <a
          href={`${DEAL_BASEURL}${deal.dealID}`}
          target="_blank"
          className="bg-slate-900 hover:bg-slate-800 text-white w-full h-full text-center p-2"
        >
          View on Steam
        </a>
      </div>
    </div>
  );
}
