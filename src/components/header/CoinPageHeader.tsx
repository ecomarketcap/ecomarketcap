import React from 'react';
import {
  Box,
  Text,
  Group,
  SimpleGrid,
  Image,
  Divider,
  useMantineTheme,
  Badge,
  Button,
  Grid,
  rem,
} from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Format } from '../../modules/Utilities';
import { CoinDetailsDataType } from '../../types';

const CoinPageHeader: React.FC<{ coinDetailsData: CoinDetailsDataType }> = ({
  coinDetailsData,
}) => {
  const theme = useMantineTheme();
  const priceChangeColor =
    coinDetailsData?.market_data?.price_change_percentage_24h >= 0
      ? theme.colors.green[6]
      : theme.colors.red[6];

  const IconComponent =
    coinDetailsData?.market_data?.price_change_percentage_24h > 0
      ? IconArrowUpRight
      : IconArrowDownRight;

  return (
    <Box pb='md'>
      <SimpleGrid spacing='sm' cols={1} mb='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
          }}
        >
          <Button
            color='gray'
            variant='filled'
            compact
            sx={{
              textAlign: 'center',
              pointerEvents: 'none',
            }}
            radius='md'
            size='xs'
          >
            Rank #{coinDetailsData?.market_data?.market_cap_rank}
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image
            src={coinDetailsData?.image?.small}
            alt={coinDetailsData?.name}
            width={30}
          />
          <Text size='xl' weight={700}>
            {coinDetailsData?.name}
          </Text>
          <Text size='lg' color='gray'>
            {coinDetailsData?.symbol.toUpperCase()}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Text size='xl' weight={700}>
            {Format.toCurrencyNDigits(
              coinDetailsData?.market_data?.current_price?.usd,
              'USD',
              2
            )}
          </Text>
          <Group align='flex-end' spacing={0}>
            <Text
              fw={700}
              sx={{
                color: priceChangeColor,
              }}
            >
              {coinDetailsData?.market_data?.price_change_percentage_24h.toFixed(
                2
              )}
              %
            </Text>
            <IconComponent
              size='1rem'
              style={{
                marginBottom: theme.spacing.xs,
                color: priceChangeColor,
              }}
              stroke={1.5}
            />
          </Group>
        </Box>
      </SimpleGrid>
      <SimpleGrid spacing={20} cols={2}>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              Market Cap
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.market_cap?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              Total Volume
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.total_volume?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
      </SimpleGrid>
      <SimpleGrid spacing={20} cols={2}>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              High (24h)
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.high_24h?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              Low (24h)
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.low_24h?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
      </SimpleGrid>
      <SimpleGrid spacing={20} cols={2}>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              All Time High
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.ath?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
        <Box>
          <Box mb='sm' mt='sm'>
            <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
              All Time Low
            </Text>
            <Text size='xs' fw={700}>
              {Format.toCurrencyNDigits(
                coinDetailsData?.market_data?.atl?.usd,
                'USD',
                2
              )}
            </Text>
          </Box>
          <Divider />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CoinPageHeader;
