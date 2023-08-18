export type CoinDetailsData = {
  image: {
    small: string;
  };
  market_data: {
    market_cap_rank: number;
    price_change_percentage_24h: number;
    total_volume: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    current_price: {
      usd: number;
      btc: number;
      eth: number;
    };
    total_supply: number;
    circulating_supply: number;
  };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  name: string;
  symbol: string;
};

export type RouteParams = {
  tabValue?: string;
};
