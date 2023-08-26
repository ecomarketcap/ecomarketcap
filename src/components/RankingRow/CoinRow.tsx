import { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import {
  useMantineColorScheme,
  Image,
  Group,
  Text,
  Skeleton,
} from '@mantine/core';

import { Format } from '../../modules/Utilities';
import CoinsPage from '../../pages/mainpages/CoinsPage';
import icons from './iconLoader';
import axios from 'axios';
import { useInterval } from '@mantine/hooks';

const CoinRow = ({
  rank,

  symbol,
  name,
  circulating_supply,
  priceSet,
  devise,
  snapshotChange,
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  percent_change_30d,
  percent_from_price_ath,
  volume_24h,
  market_cap,
  price,
  svg,
  chartSvgIndex,
}: {
  rank: number;
  symbol: string;
  name: string;
  circulating_supply: number;
  priceSet?: Array<[number, number]>;
  devise: string;
  snapshotChange: string;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_from_price_ath: number;
  volume_24h: number;
  market_cap: number;
  price: number;
  svg: string;
  chartSvgIndex: number;
}) => {
  const { colorScheme } = useMantineColorScheme();
  const [isHovered, setIsHovered] = useState(false);
  const [chartSvgLoading, setChartSvgLoading] = useState(true);
  const [chartSvg, setchartSvg] = useState<string | undefined>(undefined);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const fetchChartSvg = async () => {
      if (fetchCount >= 100) {
        return;
      }

      try {
        const response = await axios.get(
          `https://www.coingecko.com/coins/${chartSvgIndex}/sparkline.svg`,
          {
            responseType: 'blob',
          }
        );

        const objectUrl = URL.createObjectURL(response.data);
        setchartSvg(objectUrl);
        setChartSvgLoading(false);
        setFetchCount((prevCount) => prevCount + 1); // Increment fetch count
      } catch (error) {
        console.error('Error fetching coin image:', error);
      }
    };
    fetchChartSvg();
  }, []);
  const link = '/coin/' + symbol.toLowerCase() + '/chart';

  const styleClassVarH1 =
    'text-' + (percent_change_1h >= 0 ? 'success' : 'danger');
  const styleClassVarH24 =
    'text-' + (percent_change_24h >= 0 ? 'success' : 'danger');
  const styleClassVarD7 =
    'text-' + (percent_change_7d >= 0 ? 'success' : 'danger');
  const styleClassVarD30 =
    'text-' + (percent_change_30d >= 0 ? 'success' : 'danger');
  const styleClassVarAth =
    'text-' + (percent_from_price_ath >= 0 ? 'success' : 'danger');

  const getAvailableIcon = () => {
    const icon = icons[symbol.toLowerCase().replace('.svg', '')];
    return icon || svg ? (icon ? icon : svg) : icons.generic;
  };

  const icon = getAvailableIcon();

  const formattedPrice = Format.toCurrencyNDigits(
    market_cap > 0 ? price : 0,
    devise,
    8
  );
  const volume = Format.toCurrencyNDigits(volume_24h, devise, 0);
  const marketcap = Format.toCurrency(market_cap, devise);

  return (
    <>
      <tr
        style={{
          background: isHovered ? '#f8f9fa' : 'transparent',
          transition: 'background-color 0.1s',
          transform: 'translateZ(0)',
          height: '60px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <td>{rank}</td>
        <td>
          <NavLink
            to={link}
            exact
            style={{ textDecoration: 'none', color: 'clack' }}
            activeStyle={{
              textDecoration: 'none',
            }}
          >
            <Group spacing='xs' miw={170}>
              <Image src={icon} alt={symbol} width={24} />
              <Text fw={700} style={{ color: '#495057' }}>
                {name}
              </Text>
            </Group>
          </NavLink>
        </td>
        {snapshotChange === 'unchanged' ? (
          <td style={{ textAlign: 'right' }}>{formattedPrice}</td>
        ) : snapshotChange === 'up' ? (
          <td style={{ textAlign: 'right' }} className='text-success'>
            {formattedPrice}
          </td>
        ) : (
          <td style={{ textAlign: 'right' }} className='text-danger'>
            {formattedPrice}
          </td>
        )}
        <td style={{ textAlign: 'right' }} className={styleClassVarH1}>
          {percent_change_1h}
        </td>
        <td style={{ textAlign: 'right' }} className={styleClassVarH24}>
          {percent_change_24h}
        </td>
        <td style={{ textAlign: 'right' }} className={styleClassVarD7}>
          {percent_change_7d}
        </td>
        <td style={{ textAlign: 'right' }} className={styleClassVarD30}>
          {percent_change_30d}
        </td>
        <td style={{ textAlign: 'right' }} className={styleClassVarAth}>
          {percent_from_price_ath}
        </td>
        <td style={{ textAlign: 'right' }}>{volume}</td>
        <td style={{ textAlign: 'right' }}>{marketcap}</td>
        <td style={{ textAlign: 'right' }}>
          {circulating_supply.toLocaleString()}
        </td>
        <td style={{ textAlign: 'right' }}>
          {chartSvgLoading ? (
            <Skeleton visible={chartSvgLoading} />
          ) : (
            <Image src={chartSvg} alt='Chart Svg' width={135} height={50} />
          )}
        </td>
      </tr>
      <Route exact path={link}>
        <CoinsPage />
      </Route>
    </>
  );
};

export default CoinRow;
