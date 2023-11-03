import { TGame } from "../types/TGame";

const API_URL = "https://www.cheapshark.com/api/1.0/deals";
let storeID = 1; // 1 = steam platform

export const getSteamDeals = async () => {
  try {
    const res = await fetch(`${API_URL}?storeID=${storeID}`);
    const data: TGame[] = await res.json();

    if (!data) return new Error("Error fetching Steam game deals");

    return data;
  } catch (error) {
    console.log(error);
  }
};
