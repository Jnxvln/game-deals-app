import { TGame } from "../types/TGame";

const API_URL = "https://www.cheapshark.com/api/1.0/deals";
let storeID = 1; // 1 = steam platform

export const getSteamDeals = async (pageSize?: number | string) => {
  const res = await fetch(`${API_URL}?storeID=${storeID}${pageSize && `pageSize=${pageSize}`}`);

  if (!res) throw new Error("No response from server");

  const data: TGame[] = await res.json();

  if (!data) throw new Error("Error fetching Steam game deals");

  return data;
};
