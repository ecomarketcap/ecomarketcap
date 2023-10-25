import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataContext } from '../components/navbar/DataContext';


import RankingsPage from './mainpages/RankingsPage';
import CoinsPage from './mainpages/CoinsPage';
import About from './About';
import { Loader } from '@mantine/core';

import { Box } from '@mantine/core';
import { fetchGeckoCoinsMarkets } from '../Fetches/coinGecko';
import { getChartSvgIndex } from '../helpers';
import { Coin } from './types';




const MainPage: React.FC = (props) => {
  const { coinsInfos, setCoinsInfos } = useContext(DataContext);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>();

  const loading =
    coinsInfos?.list?.length === 0 ? (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </Box>
    ) : (
      ''
    );

  useEffect(() => {
    if (coinsInfos?.list?.length === 0) {
      fetchCoinsList();
    }
  }, []);

  const refreshUpdateTime = (newUpdateTime: Date) => {
    setLastUpdateTime(newUpdateTime);
  };

  const fetchCoinsList = async () => {
    const { data } = await fetchGeckoCoinsMarkets({ currency: "usd" });

    const promises = data?.map(async (coin) => {
      const key = coin.symbol.toLowerCase();
      const coinData: Coin = {
        paprika_id: '',
        gecko_id: coin?.id,
        name: coin?.name,
        symbol: coin?.symbol,
        rank: coin?.market_cap_rank,
        is_new: false,
        is_active: true,
        svg: coin?.image,
        chartSvgIndex: getChartSvgIndex({ imageUrl: coin?.image }),
      };
      return [key, coinData] as [string, Coin];
    });

    if (promises) {
      const coinEntries = await Promise.all(promises);
      const filteredCoinEntries = coinEntries.filter(Boolean);
      const coinList = new Map(filteredCoinEntries);

      setCoinsInfos(() => {
        const infos = {
          list: coinList,
        };
        return infos;
      });
    }
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      {loading === '' ? (
        <Switch>
          <Route exact strict path='(/|/ecomarketcap)(/|)'>
            <RankingsPage
              lastUpdateTime={lastUpdateTime}
              refreshUpdateTime={refreshUpdateTime}
            />
          </Route>

          <Route path='/coin/:id/:type'>
            <CoinsPage />
          </Route>
          <Route path='/coin/:id/chart'>
            <CoinsPage />
          </Route>
          <Route path='/about' component={About} />
        </Switch>
      ) : (
        loading
      )}
    </Box>
  );
};

export default MainPage;
