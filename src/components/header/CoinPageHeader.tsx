import React from 'react';
import {
  Box,
  Text,
  Group,
  SimpleGrid,
  Image,
  useMantineTheme,
  Button,
} from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Format } from '../../modules/Utilities';
import { CoinDetailsDataType } from '../../types';
import InformationBox from './InformationBox';
import { getInformationBoxData } from './helpers';

const CoinPageHeader: React.FC<{ coinDetailsData: CoinDetailsDataType }> = ({
  coinDetailsData,
}) => {
  const theme = useMantineTheme();
  const isPositiveChange =
    coinDetailsData?.market_data?.price_change_percentage_24h >= 0;
  const priceChangeColor = isPositiveChange
    ? theme.colors.green[6]
    : theme.colors.red[6];
  const IconComponent = isPositiveChange
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
            width={40}
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
        <SimpleGrid spacing='sm' cols={2}>
          {getInformationBoxData({ coinDetailsData })?.map((item) => (
            <InformationBox
              key={item?.title}
              title={item?.title}
              data={item?.data === null ? undefined : item?.data}
            />
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default CoinPageHeader;
