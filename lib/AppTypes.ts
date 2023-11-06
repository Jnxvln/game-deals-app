export type TDeal = {
  dealID?: string;
  dealRating?: string;
  gameID?: string;
  internalName?: string;
  isOnSale?: string;
  lastChange?: number;
  metacriticLink?: string;
  metacriticScore?: string;
  normalPrice?: string;
  releaseDate?: number;
  salePrice?: string;
  savings?: string;
  steamAppID?: string;
  steamRatingCount?: string;
  steamRatingPercent?: string;
  steamRatingText?: string;
  storeID?: string;
  thumb?: string;
  title?: string;
};

export type TGame = {
  cheapest?: string;
  cheapestDealID?: string;
  external?: string;
  gameID?: string;
  internalName?: string;
  steamAppID?: null;
  thumb?: string;
};

export type TDealQuery = {
  lowerPrice: string | undefined;
  upperPrice: string | undefined;
  pageSize: string | undefined;
};
