import axios, { AxiosError } from "axios";

const GECKO = {
       BASE_URL: 'https://api.coingecko.com/api/v3',
       COINS: '/coins',
       COINS_MARKETS: '/coins/markets',
       GLOBAL: '/global',
       LIST: '/list',
       MARKET_CHART: '/market_chart',
       VS_CURRENCY: '?vs_currency=',
       DAYS: '&days=',
};
const GeckoCoinsMarketsMockedData = [
       {
              "id": "bitcoin",
              "symbol": "btc",
              "name": "Bitcoin",
              "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
              "current_price": 34952,
              "market_cap": 678008774456,
              "market_cap_rank": 1,
              "fully_diluted_valuation": 729278363023,
              "total_volume": 31048811935,
              "high_24h": 34929,
              "low_24h": 33433,
              "price_change_24h": 1519.5,
              "price_change_percentage_24h": 4.54495,
              "market_cap_change_24h": 5308346543,
              "market_cap_change_percentage_24h": 0.78911,
              "circulating_supply": 19523662,
              "total_supply": 21000000,
              "max_supply": 21000000,
              "ath": 69045,
              "ath_change_percentage": -49.74741,
              "ath_date": "2021-11-10T14:24:11.849Z",
              "atl": 67.81,
              "atl_change_percentage": 51068.40715,
              "atl_date": "2013-07-06T00:00:00.000Z",
              "roi": null,
              "last_updated": "2023-10-25T15:36:27.603Z"
       }
]


type GeckoCoinsMarketsType = typeof GeckoCoinsMarketsMockedData
type FetchGeckoCoinsMarketsResult = { data?: GeckoCoinsMarketsType, error?: AxiosError | null }
type CoinGeckoLocale = 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-tw'

export const fetchGeckoCoinsMarkets = async ({
       currency = "usd",
       order = "market_cap_desc",
       perPage = 100,
       page = 1,
       sparkline = false,
       locale = "en",
}: {
       currency?: "usd" | "czk" | "eur" | "btc",
       order?: "market_cap_desc" | "market_cap_asc",
       perPage?: 25 | 50 | 100,
       page?: number,
       sparkline?: boolean,
       locale?: CoinGeckoLocale,

}): Promise<FetchGeckoCoinsMarketsResult> => {
       try {

              const { data } = await axios.get<GeckoCoinsMarketsType>(
                     `${GECKO.BASE_URL}${GECKO.COINS_MARKETS}?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&locale=${locale}`,
                     {
                            headers: {
                                   'Content-Type': 'application/json',

                            },
                     },
              );
              return { data };
       } catch (error) {
              console.error(error);
              return { error: error as AxiosError };
       }
};