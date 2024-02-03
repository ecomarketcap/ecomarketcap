import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataContext } from '../components/navbar/DataContext';

import RankingsPage from './mainpages/RankingsPage';
import CoinsPage from './mainpages/CoinsPage';
import About from './About';
import {
  Loader,
  Alert,
  rem,
  Dialog,
  Text,
  Image,
  Box,
  Container,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { fetchGeckoCoinsMarkets } from '../Fetches/coinGecko';
import { getChartSvgIndex } from '../helpers';
import { Coin } from './types';

const MainPage: React.FC = (props) => {
  const { coinsInfos, setCoinsInfos } = useContext(DataContext);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>();
  const [clearableCoinsMarketError, setClearableCoinsMarketError] =
    useState('');
  const [coinsMarketError, setCoinsMarketError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoinsList = async () => {
      setLoading(true);
      const { data, error } = await fetchGeckoCoinsMarkets({ currency: 'usd' });
      if (error) {
        setLoading(false);
        setCoinsMarketError(error?.message);
        setClearableCoinsMarketError(error?.message);

        setTimeout(() => {
          setClearableCoinsMarketError('');
        }, 5000);
      }
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
        setLoading(false);
      }
    };

    fetchCoinsList();
  }, [setCoinsInfos]);

  const refreshUpdateTime = (newUpdateTime: Date) => {
    setLastUpdateTime(newUpdateTime);
  };

  const hasCoinInfosLenght = coinsInfos?.list?.length;

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          maxWidth: '80rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '1.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Box
          style={{}}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ...((coinsMarketError || loading) && { height: '55vh' }),
          }}
        >
          <Switch>
            <Route exact strict path="(/|/ecomarketcap)(/|)">
              <Box
                style={{
                  paddingTop: '2.5rem',
                }}
                pb="lg"
                display="flex"
              >
                <Box
                  sx={{
                    '@media (max-width: 767px)': {
                      marginRight: 0,
                    },
                    '@media (min-width: 768px) and (max-width: 1023px)': {
                      marginRight: '3rem',
                    },
                    '@media (min-width: 1024px)': {
                      marginRight: '10rem',
                    },
                  }}
                  style={{ maxWidth: '480px' }}
                >
                  <h1
                    style={{
                      color: 'black',
                      fontFamily: 'Arial',
                      fontSize: '44px',
                      lineHeight: '1.2',
                      fontWeight: 900,
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'lightyellow',
                        borderRadius: '4px',
                        padding: '4px 12px',
                      }}
                    >
                      Your
                    </span>
                    crypto portfolio <br />
                    tracker
                  </h1>
                  <Text color="dimmed">
                    Follow and compare all of the important crypto statistics!
                    Now with ecomarketcap it's never been easier!
                  </Text>
                </Box>
                <Image
                  src={`${process.env.PUBLIC_URL}/girl-with-laptop-and-rocket.svg`}
                  style={{ width: '200px', height: '100%', objectFit: 'cover' }}
                  sx={{
                    '@media (max-width: 767px)': {
                      display: 'none',
                    },
                  }}
                />
              </Box>

              {hasCoinInfosLenght !== 0 && (
                <RankingsPage
                  lastUpdateTime={lastUpdateTime}
                  refreshUpdateTime={refreshUpdateTime}
                />
              )}
            </Route>

            <>
              {hasCoinInfosLenght !== 0 && (
                <Route path="/coin/:id/chart">
                  <CoinsPage />
                </Route>
              )}

              <Route path="/about" component={About} />
            </>
          </Switch>

          {loading && (
            <Box
              sx={{
                display: 'flex',
                marginTop: '5%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Loader />
            </Box>
          )}
          {clearableCoinsMarketError && (
            <Dialog
              opened={clearableCoinsMarketError ? true : false}
              size="300px"
              radius="md"
              bg="transparent"
              sx={{ boxShadow: 'none' }}
              p={0}
              position={{ bottom: '30%', right: 'calc(50% - 150px)' }}
            >
              <Alert
                variant="light"
                icon={<IconX style={{ width: rem(20), height: rem(20) }} />}
                color="red"
                title="Error!"
              >
                {clearableCoinsMarketError}
              </Alert>
            </Dialog>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
