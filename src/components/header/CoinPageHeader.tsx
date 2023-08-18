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
          backgroundImage: 'linear-gradient(127deg, #093637, #093b58)',
          color: '#ffffff',
          padding: '20px',
        }
      : {
          backgroundImage: 'linear-gradient(127deg, #1a1a1b, #2b2b2b)',
          color: '#ffffff',
          padding: '20px',
        };

  return (
    <header>
      <Grid gutter='md' justify='center' sx={headerStyle}>
        <Col span={3}>
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={coinDetailsData?.image?.small}
              alt=''
              style={{ borderRadius: '50%', border: '2px solid #fff' }}
            />
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Text size='sm' weight='bold'>
              Market cap rank: {coinDetailsData?.market_data?.market_cap_rank}
            </Text>
            <Text
              size='sm'
              weight='bold'
              color={
                coinDetailsData?.market_data?.price_change_percentage_24h >= 0
                  ? 'green'
                  : 'red'
              }
            >
              Change % (24h):{' '}
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.price_change_percentage_24h,
                'USD',
                5
              )}
            </Text>
            <Text size='sm' weight='bold'>
              Total volume:{' '}
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.total_volume.usd,
                'USD',
                0
              )}
            </Text>
          </Box>
        </Col>
        <Col span={9}>
          <Grid gutter='md'>
            <Col span={6}>
              <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <Text size='xxl' weight='bold' sx={{ marginBottom: '10px' }}>
                  {coinDetailsData?.name}
                </Text>
                <Text size='lg' color='gray'>
                  {coinDetailsData?.symbol.toUpperCase()}
                </Text>
              </Box>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginBottom: '10px',
                }}
              >
                <Text size='sm' weight='bold'>
                  High (24h):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.high_24h.usd,
                    'USD',
                    2
                  )}
                </Text>
                <Text size='sm' weight='bold'>
                  Low (24h):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.low_24h.usd,
                    'USD',
                    2
                  )}
                </Text>
              </Box>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginBottom: '10px',
                }}
              >
                <Text size='sm' weight='bold'>
                  Price (usd):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.current_price?.usd,
                    'USD',
                    2
                  )}
                </Text>
                <Text size='sm' weight='bold'>
                  Price (btc):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.current_price?.btc,
                    'BTC',
                    8
                  )}
                </Text>
                <Text size='sm' weight='bold'>
                  Price (eth):{' '}
                  {Format.toCurrencyNDigits(
                    coinDetailsData?.market_data?.current_price?.eth,
                    'ETH',
                    5
                  )}
                </Text>
              </Box>
            </Col>
            <Col span={5}>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginBottom: '10px',
                }}
              >
                <Text size='sm' weight='bold'>
                  Total supply:{' '}
                  {Format.toLocale(coinDetailsData?.market_data?.total_supply)}
                </Text>
                <Text size='sm' weight='bold'>
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
                  marginBottom: '10px',
                }}
              >
                <Text size='sm' weight='bold'>
                  Block time (min): {coinDetailsData?.block_time_in_minutes}
                </Text>
                <Text size='sm' weight='bold'>
                  Hash Algorithm: {coinDetailsData?.hashing_algorithm}
                </Text>
              </Box>
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  marginBottom: '10px',
                }}
              >
                <Text size='sm' weight='bold'>
                  Category:
                </Text>
                {coinDetailsData?.categories.map((cat, index) => (
                  <Text key={index} size='sm'>
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
