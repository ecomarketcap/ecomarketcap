import React, { useState } from 'react';
import {
  Col,
  Grid,
  Paper,
  Text,
  Button,
  useMantineColorScheme,
} from '@mantine/core';

import { darkTheme, lightTheme } from '../../theme';

import { FilterInputs } from '../filter/CoinsRanking/types';
import { CoinsRankingFilters } from '../filter';

const CoinRankingNavBar = ({
  devise,
  setDevise,
  page,
  setPage,
  changeFilter,
  resetFilter,
}: {
  history: any;
  location: any;
  devise: string;
  setDevise: (devise: string) => void;
  page: { current: number; last: number };
  setPage: (page: { current: number; last: number }) => void;
  changeFilter: (filters: FilterInputs) => void;
  resetFilter: () => void;
}) => {
  const [isDownDevise, setIsDownDevise] = useState(false);
  const [isDownFilter, setIsDownFilter] = useState(false);

  const toggleDropDownDevise = () => setIsDownDevise(!isDownDevise);
  const toggleDropDownFilter = () => setIsDownFilter(!isDownFilter);

  const toggleDeviseUSD = () => {
    setDevise('USD');
    setIsDownDevise(false);
  };
  const toggleDeviseBTC = () => {
    setDevise('BTC');
    setIsDownDevise(false);
  };

  const { colorScheme: theme } = useMantineColorScheme();

  return (
    <Paper
      sx={{
        padding: 'md',
        marginBottom: 15,
        backgroundColor: theme === 'dark' ? darkTheme?.body : lightTheme?.body,
      }}
    >
      <Grid gutter='md'>
        <Col
          span={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button onClick={toggleDropDownDevise} style={{ marginRight: 20 }}>
            {devise} {isDownDevise ? '▴' : '▾'}
          </Button>
          {isDownDevise && (
            <Grid gutter='md'>
              <Button onClick={toggleDeviseUSD}>USD</Button>
              <Button onClick={toggleDeviseBTC}>BTC</Button>
            </Grid>
          )}
          <Button onClick={toggleDropDownFilter} style={{ marginRight: 20 }}>
            Filter {isDownFilter ? '▴' : '▾'}
          </Button>
          {isDownFilter && (
            <Paper
              sx={{
                padding: 'md',
                position: 'absolute',
                backgroundColor:
                  theme === 'dark' ? darkTheme?.body : lightTheme?.body,
              }}
            >
              <Grid gutter='md'>
                <Grid gutter='md'>
                  <CoinsRankingFilters
                    changeFilter={changeFilter}
                    resetFilter={resetFilter}
                  />
                </Grid>
              </Grid>
            </Paper>
          )}
        </Col>
      </Grid>
    </Paper>
  );
};

export default CoinRankingNavBar;
