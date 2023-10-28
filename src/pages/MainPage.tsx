import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataContext } from '../components/navbar/DataContext';


import RankingsPage from './mainpages/RankingsPage';
import CoinsPage from './mainpages/CoinsPage';
import About from './About';
import { Loader, Alert, rem, Dialog } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { Box } from '@mantine/core';
import { fetchGeckoCoinsMarkets } from '../Fetches/coinGecko';
import { getChartSvgIndex } from '../helpers';
import { Coin } from './types';




const MainPage: React.FC = (props) => {
  const { coinsInfos, setCoinsInfos } = useContext(DataContext);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>();
  const [coinsMarketError, setCoinsMarketError] = useState('');

  useEffect(() => {
    const fetchCoinsList = async () => {
      const { data, error } = await fetchGeckoCoinsMarkets({ currency: "usd" });
      if (error) {
        setCoinsMarketError(error?.message);

        setTimeout(() => { setCoinsMarketError('') }, 5000);
      }
      const promises = data?.map(async (coin) => {
        setCoinsMarketError('')
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

    fetchCoinsList();

  }, [setCoinsInfos]);

  const refreshUpdateTime = (newUpdateTime: Date) => {
    setLastUpdateTime(newUpdateTime);
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      {coinsInfos?.list?.length !== 0 &&
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
      }
      {
        !coinsInfos?.list?.length && !coinsMarketError &&
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </Box>

      }


      <Dialog opened={coinsMarketError ? true : false}
        size="300px" radius="md" bg='transparent' sx={{ boxShadow: 'none' }} p={0} position={{ bottom: '25%', right: 'calc(50% - 150px)' }}>
        <Alert variant='light' icon={<IconX style={{ width: rem(20), height: rem(20) }} />} color="red" title="Error!">
          {coinsMarketError}
        </Alert>
      </Dialog>

    </Box>
  );
};

export default MainPage;
