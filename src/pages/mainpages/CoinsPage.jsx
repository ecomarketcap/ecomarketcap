import React, { useState, useContext, useEffect } from 'react';
import { Route, Switch, withRouter, useParams } from 'react-router-dom';

import { DataProvider } from '../../modules/DataProvider';
import { DataContext } from '../../components/navbar/DataContext';

import { CoinPageHeader } from '../../components/header';
import { CoinNavbar } from '../../components/navbar';
import CoinAbout from '../../components/CoinPageContent/CoinAbout';
import CoinDetailsChart from '../../components/chart/CoinDetailsChart';
import { Loader } from '@mantine/core';

/************************************
 *
 * CoinsPage
 *
 * ******************************** */

const CoinsPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState([]);
  const [coinTwitter, setCoinTwitter] = useState([]);
  const [coinEvents, setCoinEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const { coinsInfos } = useContext(DataContext);

  const id_tview = id.toUpperCase() + 'USD';

  const id_paprika = coinsInfos.list.get(id).paprika_id;
  const id_gecko = coinsInfos.list.get(id).gecko_id;

  useEffect(() => {
    if (loading) {
      fetchCoinData();
    }
  });

  function fetchCoinData() {
    const testData = coinInfo !== undefined ? [] : coinInfo;
    if (testData.length === 0) {
      let respInfos = DataProvider.getCoinInfoGecko(id_gecko);
      let respEvents = DataProvider.getCoinEventsPaprika(id_paprika);

      Promise.all([respInfos, respEvents]).then((responses) => {
        setCoinInfo(responses[0].data);

        setCoinEvents(responses[1].data);
      });
      setLoading(false);
    }
  }

  return (
    <>
      {coinInfo === undefined ? (
        <div className='container'>
          <Loader />
        </div>
      ) : coinInfo.length === 0 ? (
        <div className='container'>
          <Loader />
        </div>
      ) : (
        <div className='container'>
          <CoinPageHeader coinInfo={coinInfo} coin={coinsInfos.list.get(id)} />
          <CoinNavbar coin={id} />

          <Switch>
            <Route exact path={`/coin/${id}/about`}>
              <CoinAbout
                coinInfo={coinInfo}
                coinEvents={coinEvents}
                ident={coinsInfos.list.get(id)}
              />
            </Route>
            <Route exact path={`/coin/${id}/chart`}>
              <CoinDetailsChart coin={id_tview} />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
};

export default withRouter(CoinsPage);
