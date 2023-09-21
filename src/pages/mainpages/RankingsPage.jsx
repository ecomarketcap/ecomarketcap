import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { DataContext } from '../../components/navbar/DataContext';
import styled from 'styled-components';

import RankingCoins from './../../components/RankingList/RankingCoins';
import { Pagination } from '../../components/navbar';
import { CoinRankNavbar } from '../../components/navbar';

import { Compare, Filter, Copy, Time } from '../../modules/Utilities';
import { DataProvider } from '../../modules/DataProvider';
import { computeNewCoinsData } from '../../helpers';
import { Image, Text, Box } from '@mantine/core';

const COIN_COUNT = 50; //100;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  height: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    height: 5rem;
  }
  color: #495057;
`;

export default function RankingsPage(props) {
  const { coinsInfos } = useContext(DataContext);

  const [page, setPage] = useState({
    current: 1,
    last: 50,
  });

  const [sorting, setSorting] = useState({
    key: 'rank',
    order: 'asc',
  });

  const [filter, setFilter] = useState({
    devise: 'USD',
    minCap: 0,
    maxCap: +1e19,
    minSup: 0,
    maxSup: +1e19,
    minVarD: -100,
    maxVarD: +1e19,
    minVarAth: -100,
    maxVarAth: +1e19,
    minPrice: 0,
    maxPrice: +1e19,
  });

  const [DataSet, setDataSet] = useState({
    coinsData: [], //data of all coins and vs_currencies
    coinsFiltered: [], //data filtered by user
    snapshot: [], //sample to display
    snapshotChange: [], //indication of change in sample since last update
    priceSetData: [], //7days prices {symbol, [[time, price]]}
  });

  const [needRefresh, setNeedRefresh] = useState({
    needed: false,
    filterDidChanged: false,
  });

  useEffect(function () {
    if (DataSet.coinsData.length === 0) {
      fetchAllData();
    } else {
    }

    let interval = null;
    interval = setInterval(() => {
      fetchAllData();
    }, 35000);

    return () => clearInterval(interval);
  });

  useLayoutEffect(() => {
    if (needRefresh.needed) {
      refreshData(needRefresh.filterDidChanged);
    }
  });

  const fetchAllData = async () => {
    const response = await DataProvider.getCoinsDataAllCur();

    const sortedResponse = sortDataSet(
      response.data,
      sorting.key,
      sorting.order
    );
    const dataFiltered = Filter.byRange(sortedResponse, filter);

    const { newCoinsData, snapChange } = computeNewCoinsData({
      data: dataFiltered,
      startPage: page.current,
      coinsPerPage: COIN_COUNT,
      getChangeInSnapshot: () => getChangeInSnapshot(dataFiltered),
    });
    setDataSet({
      coinsData: Copy.nested(sortedResponse),
      coinsFiltered: Copy.nested(dataFiltered),
      snapshot: Copy.nested(newCoinsData),
      snapshotChange: Copy.deep(snapChange),
    });

    props.refreshUpdateTime(Time.fromTimestamp(Date.now() / 1000));
  };

  const getChangeInSnapshot = (newCoinsData) => {
    const snapChange = [];
    if (DataSet.snapshot.length !== 0) {
      for (let i = 0; i < newCoinsData.length; i++) {
        const newName = newCoinsData[i].name;
        const newPrice = newCoinsData[i].quotes[filter.devise].price;
        let change = 'unchanged';

        for (let j = 0; j < DataSet.snapshot.length; j++) {
          if (newName === DataSet.snapshot[j].name) {
            if (DataSet.snapshot[j].quotes[filter.devise].price < newPrice) {
              change = 'up';
            } else if (
              DataSet.snapshot[j].quotes[filter.devise].price > newPrice
            ) {
              change = 'down';
            }
          }
        }
        snapChange.push(change);
      }
    } else {
      for (let i = 0; i < newCoinsData.length; i++) {
        snapChange.push('unchanged');
      }
    }
    return snapChange;
  };

  const refreshData = async (isFilterChanged) => {
    const dataFiltered = isFilterChanged
      ? Filter.byRange(DataSet.coinsData, filter)
      : DataSet.coinsFiltered;

    const { newCoinsData, snapChange } = computeNewCoinsData({
      data: dataFiltered,
      startPage: page.current,
      coinsPerPage: COIN_COUNT,
      getChangeInSnapshot: () => getChangeInSnapshot(dataFiltered),
    });

    /*update data states*/
    setDataSet((oldSet) => {
      const newSet = {
        coinsData: oldSet.coinsData,
        coinsFiltered: dataFiltered,
        snapshot: newCoinsData,
        snapshotChange: snapChange,
      };
      return newSet;
    });

    setNeedRefresh({
      needed: false,
      filterDidChanged: false,
    });
  };

  const sortDataSet = (setToSort, key, order) => {
    const newSet = setToSort;

    switch (key) {
      case 'rank':
      case 'name':
      case 'circulating_supply':
        newSet.sort(Compare.byKey(key, order));
        break;
      default:
        newSet.sort(Compare.quotesByKey(filter.devise, key, order));
        break;
    }
    return newSet;
  };

  const handleClickSort = async (key, order) => {
    setSorting({
      key: key,
      order: order,
    });

    setPage((oldPage) => {
      const newPage = {
        current: 0,
        last: oldPage.last,
      };
      return newPage;
    });

    const sortedData = sortDataSet(DataSet.coinsFiltered, key, order);
    /*get the snapshot to display*/
    const newCoinsData = sortedData.slice(0, COIN_COUNT);
    const snapChange = getChangeInSnapshot(newCoinsData);

    setDataSet((oldSet) => {
      const newSet = {
        coinsData: oldSet.coinsData,
        coinsFiltered: sortedData,
        snapshot: newCoinsData,
        snapshotChange: snapChange,
      };
      return newSet;
    });
  };

  const changeFilter = async ({
    minCap,
    maxCap,
    minSup,
    maxSup,
    minVarD,
    maxVarD,
    minVarAth,
    maxVarAth,
    minPrice,
    maxPrice,
  }) => {
    setFilter((oldFilter) => {
      const newFilter = {
        devise: oldFilter.devise,
        minCap: oldFilter.minCap === minCap ? oldFilter.minCap : minCap,
        maxCap: oldFilter.maxCap === maxCap ? oldFilter.maxCap : maxCap,
        minSup: oldFilter.minSup === minSup ? oldFilter.minSup : minSup,
        maxSup: oldFilter.maxSup === maxSup ? oldFilter.maxSup : maxSup,
        minVarD: oldFilter.minVarD === minVarD ? oldFilter.minVarD : minVarD,
        maxVarD: oldFilter.maxVarD === maxVarD ? oldFilter.maxVarD : maxVarD,
        minVarAth:
          oldFilter.minVarAth === minVarAth ? oldFilter.minVarAth : minVarAth,
        maxVarAth:
          oldFilter.maxVarAth === maxVarAth ? oldFilter.maxVarAth : maxVarAth,
        minPrice:
          oldFilter.minPrice === minPrice ? oldFilter.minPrice : minPrice,
        maxPrice:
          oldFilter.maxPrice === maxPrice ? oldFilter.maxPrice : maxPrice,
      };
      return newFilter;
    });

    setPage({
      current: 1,
      last: page.last,
    });

    setNeedRefresh({
      needed: true,
      filterDidChanged: true,
    });
  };

  const toggleDevise = async (newdevise) => {
    setFilter((oldFilter) => {
      const newFilter = Copy.deep(oldFilter);
      newFilter.devise = newdevise;
      return newFilter;
    });

    refreshData(false);
  };

  const handleClickPage = async (directionNext) => {
    setPage((oldPage) => {
      const newCurrent = {
        current: oldPage.current + directionNext,
        last: oldPage.last,
      };
      return newCurrent;
    });

    setNeedRefresh({
      needed: true,
      filterDidChanged: false,
    });
  };

  return (
    <div
      className='tableContainer container-fluid py-4'
      style={{ maxWidth: '80rem' }}
    >
      <Box
        style={{
          display: 'flex',

          paddingTop: '2.5rem',
        }}
        pb='lg'
      >
        <Box
          sx={{
            '@media (max-width: 767px)': {
              marginRight: 0, // None on small screens
            },
            '@media (min-width: 768px) and (max-width: 1023px)': {
              marginRight: '3rem', // 3rem on medium screens
            },
            '@media (min-width: 1024px)': {
              marginRight: '10rem', // 10rem on big screens
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
          <Text color='dimmed'>
            Follow and compare all of the important crypto statistics! Now with
            ecomarketcap it's never been easier!
          </Text>
        </Box>
        <Image
          src={`${process.env.PUBLIC_URL}/girl-with-laptop-and-rocket.svg`}
          style={{ width: '200px', height: '100%', objectFit: 'cover' }}
          sx={{
            '@media (max-width: 767px)': {
              display: 'none', // Hide on small screens
            },
          }}
        />
      </Box>

      <CoinRankNavbar
        toggleDevise={toggleDevise}
        changeFilter={changeFilter}
        handleClickPage={handleClickPage}
        devise={filter.devise}
        page={page}
      />
      <RankingCoins
        coinsData={DataSet.snapshot}
        coinsList={coinsInfos.list}
        priceSetData={DataSet.priceSetData}
        devise={filter.devise}
        snapshotChange={DataSet.snapshotChange}
        handleClickSort={handleClickSort}
        pubIsOpen={props.pubIsOpen}
      />
      <Pagination
        toggleDevise={toggleDevise}
        changeFilter={changeFilter}
        handleClickPage={handleClickPage}
        setPage={setPage}
        total={DataSet?.coinsData?.length / page.last}
        setNeedRefresh={setNeedRefresh}
        devise={filter.devise}
        page={page}
      />
    </div>
  );
}
