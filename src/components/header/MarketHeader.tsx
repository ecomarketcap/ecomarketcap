import React, { useState, useEffect } from 'react';
import { Box, Text, useMantineColorScheme } from '@mantine/core';

import { lightTheme, darkTheme } from '../../theme';
import { Time, Format } from '../../modules/Utilities';
import { DataProvider } from '../../modules/DataProvider';

export default function MarketHeader() {
  type GeckoData = {
    active_cryptocurrencies: number;
    total_market_cap: { usd: number };
    total_volume: { usd: number };
    market_cap_percentage: { btc: number };
    markets: number;
    market_cap_change_percentage_24h_usd: number;
  };

  const [marketHeaderData, setMarketHeaderData] = useState<{
    geckoData: GeckoData;
  }>({
    geckoData: {
      active_cryptocurrencies: 0,
      total_market_cap: { usd: 0 },
      total_volume: { usd: 0 },
      market_cap_percentage: { btc: 0 },
      markets: 0,
      market_cap_change_percentage_24h_usd: 0,
    },
  });

  const [loading, setLoading] = useState(true);
  const { colorScheme: theme } = useMantineColorScheme();

  useEffect(() => {
    if (loading) {
      fetchMarketHeaderData();
    }
  });
  const headerStyle =
    theme === 'light'
      ? {
          backgroundColor: `${lightTheme.container}`,
          color: `${lightTheme.content}`,
        }
      : {
          backgroundColor: `${darkTheme.container}`,
          color: `${darkTheme.content}`,
        };

  const fetchMarketHeaderData = () => {
    let respGeckoData = DataProvider.getGlobalInfosFromGecko();

    Promise.all([respGeckoData]).then((responses) => {
      setMarketHeaderData({
        geckoData: responses[0]?.data?.data,
      });
    });
    setLoading(false);
  };

  const loader = !loading ? '' : <span>Fecthing data ... </span>;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        style={headerStyle}
      >
        {loading ? (
          loader
        ) : (
          <>
            <Text size='xs'>
              Cryptocurrencies:{' '}
              {marketHeaderData?.geckoData?.active_cryptocurrencies}
            </Text>
            <Text>.</Text>
            <Text size='xs'>Markets: {marketHeaderData.geckoData.markets}</Text>
            <Text>.</Text>
            <Text size='xs'>
              Market Cap:{' '}
              {Format.toCurrency(
                marketHeaderData?.geckoData?.total_market_cap?.usd,
                'USD'
              )}
            </Text>
            <Text>.</Text>
            <Text size='xs'>
              Market Cap %(24h):{' '}
              {marketHeaderData.geckoData.market_cap_change_percentage_24h_usd}
            </Text>
            <Text>.</Text>
            <Text size='xs'>
              24h Vol.:{' '}
              {Format.toCurrency(
                marketHeaderData?.geckoData?.total_volume,
                'USD'
              )}
            </Text>
            <Text>.</Text>
            <Text size='xs'>
              BTC % dom:{' '}
              {marketHeaderData?.geckoData?.market_cap_percentage?.btc}%
            </Text>
          </>
        )}
      </Box>
    </>
  );
}
