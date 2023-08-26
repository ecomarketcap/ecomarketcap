import axios from 'axios';
import { getChartSvgIndex } from '../helpers';

const PAPRIKA = {
  BASE_URL: 'https://api.coinpaprika.com/v1',
  COINS: '/coins',
  TICKERS: '/tickers',
  QUOTES: '?quotes=',
};

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

export var DataProvider = {
  getCoinList: async () => {
    let coinList = new Map();
    const response = await axios.get(
      `${GECKO.BASE_URL}${GECKO.COINS_MARKETS}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );

    response.data.forEach((coin) => {
      let key = coin.symbol.toLowerCase();
      coinList?.set(key, {
        paprika_id: '',
        gecko_id: coin?.id,
        name: coin?.name,
        symbol: coin?.symbol,
        rank: coin?.market_cap_rank,
        is_new: false,
        is_active: true,
        svg: coin?.image,
        chartSvgIndex: getChartSvgIndex({ imageUrl: coin?.image }),
      });
    });
    console.log('coinList', coinList);

    return coinList;
  },

  getGlobalInfosFromGecko: async () => {
    return await axios.get(`${GECKO.BASE_URL}${GECKO.GLOBAL}`);
  },

  getCoinsDataAllCur: async () => {
    return await axios.get(
      `${PAPRIKA.BASE_URL}${PAPRIKA.TICKERS}${PAPRIKA.QUOTES}USD,BTC`
    );
  },

  getCoinInfoGecko: async (id) => {
    return await axios.get(`${GECKO.BASE_URL}${GECKO.COINS}/${id}`);
  },
};
