import React, { useState, useContext, useEffect } from 'react';
import { Route, Switch, withRouter, useParams } from 'react-router-dom';

import { DataProvider } from '../../modules/DataProvider';
import { DataContext } from '../../components/navbar/DataContext';

import { CoinPageHeader } from '../../components/header';
import { CoinNavbar } from '../../components/navbar';
import CoinAbout from '../../components/CoinPageContent/CoinAbout';
import CoinDetailsChart from '../../components/chart/CoinDetailsChart';
import { Box, Loader } from '@mantine/core';
import { CoinDetailsDataType } from '../../types';

type RouteParams = {
  id: string;
};

const CoinsPage = () => {
  const { id } = useParams<RouteParams>();

  const [coinDetailsData, setCoinDetailsData] = useState<CoinDetailsDataType>(
    {} as CoinDetailsDataType
  );
  const [loading, setLoading] = useState(true);
  const { coinsInfos } = useContext(DataContext);

  const id_tview = id.toUpperCase() + 'USD';
  const id_gecko = coinsInfos.list.get(id).gecko_id;

  useEffect(() => {
    if (loading) {
      fetchCoinData();
    }
  });

  const fetchCoinData = () => {
    const data = coinDetailsData ? { ...coinDetailsData } : {};
    if (Object?.keys(data)?.length === 0) {
      let respInfos = DataProvider.getCoinInfoGecko(id_gecko);

      Promise.all([respInfos]).then((responses) => {
        setCoinDetailsData(responses[0].data);
      });
      setLoading(false);
    }
  };

  return (
    <>
      {coinDetailsData === undefined ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Loader />
        </Box>
      ) : Object.keys(coinDetailsData).length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Loader />
        </Box>
      ) : (
        <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: '2em' }}>
          <CoinPageHeader coinDetailsData={coinDetailsData} />
          <CoinNavbar coin={id} />

          <Switch>
            <Route exact path={`/coin/${id}/about`}>
              <CoinAbout
                coinDetailsData={coinDetailsData}
                ident={coinsInfos.list.get(id)}
              />
            </Route>
            <Route exact path={`/coin/${id}/chart`}>
              <CoinDetailsChart coin={id_tview} />
            </Route>
          </Switch>
        </Box>
      )}
    </>
  );
};

export default withRouter(CoinsPage);
