import { useState, useContext } from 'react';
import { DataContext } from '../navbar/DataContext';
import CoinRow from '../RankingRow/CoinRow';
import { Table } from '@mantine/core';

type CoinsData = {
  rank: number;
  symbol: string;
  name: string;
  circulating_supply: number;
  quotes: {
    [key: string]: {
      price: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_from_price_ath: number;
      volume_24h: number;
      market_cap: number;
    };
  };
};

const RankingCoins = ({
  handleClickSort,
  priceSetData,
  coinsData,
  devise,
  snapshotChange,
}: {
  coinsData: CoinsData[];
  priceSetData: any;
  snapshotChange: any;
  devise: string;
  handleClickSort: (key: string, order: string) => void;
}) => {
  // const { theme } = useMantineTheme();

  const { coinsInfos } = useContext(DataContext);
  const [sortSettings, setSortSettings] = useState({
    key: 'rank',
    order: 'asc',
  });

  const sortHeader = (key: string) => {
    let newOrder;
    if (sortSettings.key === key) {
      newOrder = sortSettings.order === 'asc' ? 'desc' : 'asc';
    } else {
      newOrder = 'asc';
    }
    setSortSettings({
      key: key,
      order: newOrder,
    });
    handleClickSort(key, newOrder);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => sortHeader('rank')}>Rank</th>
          <th onClick={() => sortHeader('name')}>Name</th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('price')}
          >
            Price
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('percent_change_1h')}
          >
            1h
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('percent_change_24h')}
          >
            24h
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('percent_change_7d')}
          >
            7d
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('percent_change_30d')}
          >
            30d
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('percent_from_price_ath')}
          >
            Ath
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('volume_24h')}
          >
            Volume 24h
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('market_cap')}
          >
            Market Cap
          </th>
          <th
            style={{ textAlign: 'right' }}
            onClick={() => sortHeader('circulating_supply')}
          >
            Circulating Supply
          </th>
          <th style={{ textAlign: 'right' }}>Price (7d)</th>
        </tr>
      </thead>

      <tbody>
        <>{console.log('coinsData', coinsData)}</>
        <>{console.log('coinsInfos', coinsInfos)}</>
        {coinsData.map(
          ({ rank, symbol, name, circulating_supply, quotes }, index) => (
            <CoinRow
              key={symbol}
              rank={rank}
              symbol={symbol}
              svg={
                coinsInfos.list.get(symbol.toLowerCase())
                  ? coinsInfos?.list?.get(symbol.toLowerCase())?.svg
                  : ''
              }
              name={name}
              price={quotes[devise].price}
              percent_change_1h={quotes[devise].percent_change_1h}
              percent_change_24h={quotes[devise].percent_change_24h}
              percent_change_7d={quotes[devise].percent_change_7d}
              percent_change_30d={quotes[devise].percent_change_30d}
              percent_from_price_ath={quotes[devise].percent_from_price_ath}
              volume_24h={quotes[devise].volume_24h}
              market_cap={quotes[devise].market_cap}
              circulating_supply={circulating_supply}
              snapshotChange={snapshotChange[index]}
              devise={devise}
              chartSvgIndex={
                coinsInfos.list.get(symbol.toLowerCase())?.chartSvgIndex || 0
              }
            />
          )
        )}
      </tbody>
    </Table>
  );
};

export default RankingCoins;
