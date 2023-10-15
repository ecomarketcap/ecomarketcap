import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  useMantineColorScheme,
} from '@mantine/core';

import { Format } from '../../modules/Utilities';
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
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (loading) {
      fetchMarketHeaderData();
    }
  });

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
  const items = [
    `Cryptocurrencies: ${marketHeaderData?.geckoData?.active_cryptocurrencies}`,
    `Markets: ${marketHeaderData.geckoData.markets}`,
    `Market Cap: ${Format.toCurrency(
      marketHeaderData?.geckoData?.total_market_cap?.usd,
      'USD',
    )}`,
    `Market Cap %(24h): ${marketHeaderData.geckoData.market_cap_change_percentage_24h_usd}`,
    `24h Vol.: ${Format.toCurrency(
      marketHeaderData?.geckoData?.total_volume,
      'USD',
    )}`,
    `BTC % dom: ${marketHeaderData?.geckoData?.market_cap_percentage?.btc}%`,
  ];
  const separators = ['♡', '♡', '♡', '♡', '♡', '♡'];

  return (
    <>
      <Box bg="gray.1">
        <Container size="xl">
          {loading ? (
            loader
          ) : (
            <>
              <Flex
                align="center"
                justify="space-between"
                gap="xs"
                style={{ overflowX: 'auto' }}
              >
                {items.map((item, index) => (
                  <React.Fragment key={item}>
                    <Text size="xs" style={{ whiteSpace: 'nowrap' }}>
                      {item}
                    </Text>
                    {index < items.length - 1 && (
                      <Text>{separators[index]}</Text>
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
