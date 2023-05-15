import React from 'react';
import { Box, Text, Col, Grid, useMantineColorScheme } from '@mantine/core';
import { Format } from '../../modules/Utilities';
import { darkTheme, lightTheme } from '../../theme';
import { CoinDetailsData } from '../../types';

type CoinPageHeaderProps = {
  coinDetailsData: CoinDetailsData;
};

const CoinPageHeader: React.FC<CoinPageHeaderProps> = ({ coinDetailsData }) => {
  const { colorScheme: theme } = useMantineColorScheme();
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
  return (
    <header>
      <Grid gutter='md' justify='center' sx={headerStyle}>
        <Col span={3}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={coinDetailsData?.image?.small} alt='' />
          </Box>
          <Text size='xs' weight='bold'>
            Market cap rank: {coinDetailsData?.market_data?.market_cap_rank}
          </Text>
          <Text size='xs' weight='bold'>
            Change % (24h):{' '}
            {Format.toCurrencyNDigits(
              coinDetailsData?.market_data?.price_change_percentage_24h,
              'USD',
              5
            )}
          </Text>
          <Text size='xs' weight='bold'>
            Total volume:{' '}
            {Format.toCurrencyNDigits(
              coinDetailsData?.market_data?.total_volume.usd,
              'USD',
              0
            )}
          </Text>
        </Col>
        <Col span={9}>
          <Grid gutter='md'>
            <Col span={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Text size='xl' weight='bold'>
                  {coinDetailsData?.name}
                </Text>
                <Text size='lg' weight='bold'>
                  {coinDetailsData?.symbol}
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <Text size='xs' weight='bold'>
                  High (24h):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.high_24h.usd,
                    'USD',
                    2
                  )}
                </Text>
                <Text size='xs' weight='bold'>
                  Low (24h):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.low_24h.usd,
                    'USD',
                    2
                  )}
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <Text size='xs' weight='bold'>
                  Price (usd):{' '}
                  {coinDetailsData?.market_data?.current_price?.usd}
                </Text>
                <Text size='xs' weight='bold'>
                  Price (btc):{' '}
                  {coinDetailsData?.market_data?.current_price?.btc}
                </Text>
                <Text size='xs' weight='bold'>
                  Price (eth):{' '}
                  {coinDetailsData?.market_data?.current_price?.eth}
                </Text>
              </Box>
            </Col>
            <Col span={5}>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginTop: 'md',
                }}
              >
                <Text size='xs' weight='bold'>
                  Total supply:{' '}
                  {Format.toLocale(coinDetailsData?.market_data?.total_supply)}
                </Text>
                <Text size='xs' weight='bold'>
                  Circulating supply:{' '}
                  {Format.toLocale(
                    coinDetailsData?.market_data?.circulating_supply
                  )}
                </Text>
              </Box>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginTop: 'md',
                }}
              >
                <Text size='xs' weight='bold'>
                  Block time(min): {coinDetailsData?.block_time_in_minutes}
                </Text>
                <Text size='xs' weight='bold'>
                  Hash Algorithm: {coinDetailsData?.hashing_algorithm}
                </Text>
              </Box>

              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginTop: 'md',
                }}
              >
                <Text size='xs' weight='bold'>
                  Category:
                </Text>
                {coinDetailsData?.categories.map((cat, index) => (
                  <Text key={index} size='xs'>
                    {index > 0 && cat !== '' ? ', ' + cat : cat}
                  </Text>
                ))}
              </Box>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </header>
  );
};

export default CoinPageHeader;
