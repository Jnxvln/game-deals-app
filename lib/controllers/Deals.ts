import { TGame } from "../AppTypes";
import { TDealQuery } from "../AppTypes";

const API_URL = "https://www.cheapshark.com/api/1.0/deals";
let storeID = 1; // 1 = Steam platform

export const getDeals = async (queryOptions: TDealQuery) => {
  // Cancel query until all params are available
  if (
    !queryOptions ||
    !queryOptions.lowerPrice ||
    !queryOptions.upperPrice ||
    !queryOptions.pageSize
  )
    return;

  // Build query string and fetch data
  let URL = `${API_URL}?storeID=${storeID}&lowerPrice=${queryOptions.lowerPrice}&upperPrice=${queryOptions.upperPrice}&pageSize=${queryOptions.pageSize}`;
  const res = await fetch(URL, {
    method: "GET",
    redirect: "follow",
  });

  if (!res) throw new Error("No response from server");

  const data: TGame[] = await res.json();

  return data;
};
