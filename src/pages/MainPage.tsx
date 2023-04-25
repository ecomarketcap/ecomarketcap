import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { DataContext } from '../components/navbar/DataContext';
import { DataProvider } from '../modules/DataProvider';

import RankingsPage from './mainpages/RankingsPage';
import CoinsPage from './mainpages/CoinsPage';
import About from './About';
import { Loader } from '@mantine/core';

import { Box } from '@mantine/core';

interface RouteParams {
  id: string;
}

/************************************
 *
 * MainPage
 *
 * ******************************** */
const MainPage: React.FC = (props) => {
  const { coinsInfos, setCoinsInfos } = useContext(DataContext);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>();

  const loading =
    coinsInfos.list.length === 0 ? (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Loader />
      </Box>
    ) : (
      ''
    );

  useEffect(() => {
    if (coinsInfos.list.length === 0) {
      fetchCoinsList();
    }
  }, []);

  const refreshUpdateTime = (newUpdateTime: Date) => {
    setLastUpdateTime(newUpdateTime);
  };

  const fetchCoinsList = async () => {
    const dictionary: string[] = [];

    await DataProvider.getCoinList().then((datas) => {
      for (const val of datas.values()) {
        dictionary.push(
          val.name.toLowerCase() + ' ' + val.symbol.toLowerCase()
        );
      }

      setCoinsInfos(() => {
        const infos = {
          dictionary: dictionary,
          list: datas,
        };
        return infos;
      });
    });
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      {loading === '' ? (
        <Switch>
          <Route exact strict path='(/|/cryptomarketparrot)(/|)'>
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
