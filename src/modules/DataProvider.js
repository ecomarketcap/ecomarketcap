import axios from 'axios';
import { getChartSvgIndex } from '../helpers';
import { fetchGeckoCoinsMarkets } from '../Fetches/coinGecko';

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






















  getGlobalInfosFromGecko: async () => {
    return await axios.get(`${GECKO.BASE_URL}${GECKO.GLOBAL}`);
  },

  getCoinsDataAllCur: async () => {
    return await axios.get(
      `${PAPRIKA.BASE_URL}${PAPRIKA.TICKERS}${PAPRIKA.QUOTES}USD,BTC,CZK`
    );
  },

  getCoinInfoGecko: async (id) => {
    return await axios.get(`${GECKO.BASE_URL}${GECKO.COINS}/${id}`);
  },
};
