import axios from 'axios';

const PAPRIKA = {
  BASE_URL: 'https://api.coinpaprika.com/v1',
  COINS: '/coins',
  TICKERS: '/tickers',
  QUOTES: '?quotes=',
};

const GECKO = {
  BASE_URL: 'https://api.coingecko.com/api/v3',
  COINS: '/coins',
  GLOBAL: '/global',
  LIST: '/list',
  MARKET_CHART: '/market_chart',
  VS_CURRENCY: '?vs_currency=',
  DAYS: '&days=',
};

export var DataProvider = {
  getCoinList: async () => {
    let coinList = new Map();

    const responseP = await axios.get(`${PAPRIKA.BASE_URL}${PAPRIKA.COINS}`);

    responseP.data.forEach((coin) => {
      let key = coin.symbol.toLowerCase();
      coinList.set(key, {
        paprika_id: coin.id,
        gecko_id: '',
        name: coin.name,
        symbol: coin.symbol,
        rank: coin.rank,
        is_new: coin.is_new,
        is_active: coin.is_active,
        type: coin.type,
        svg: key + '.svg',
      });
    });

    const responseC = await axios.get(
      `${GECKO.BASE_URL}${GECKO.COINS}${GECKO.LIST}`
    );

    responseC.data.forEach((coin) => {
      if (coinList.get(coin.symbol)) {
        const newset = coinList.get(coin.symbol);
        newset.gecko_id = coin.id;
        coinList.set(coin.symbol, newset);
      }
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

  getCoinsPriceSetGecko: async (id, devise) => {
    const response = await axios
      .get(
        `${GECKO.BASE_URL}${GECKO.COINS}/${id}${GECKO.MARKET_CHART}${
          GECKO.VS_CURRENCY
        }${devise.toLowerCase()}${GECKO.DAYS}7`
      )
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        console.log('not available', err);
        return { prices: undefined };
      });
    return response;
  },
};
