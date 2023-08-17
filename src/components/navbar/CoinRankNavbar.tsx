import React, { useState } from 'react';
import {
  Col,
  Grid,
  Paper,
  Text,
  Button,
  useMantineColorScheme,
  Divider,
  Box,
  Collapse,
  Transition,
} from '@mantine/core';

import { FilterInputs } from '../filter/CoinsRanking/types';
import { CoinsRankingFilters } from '../filter';
import { useDisclosure } from '@mantine/hooks';

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
  const [opened, { toggle }] = useDisclosure(false);

  const { colorScheme: theme } = useMantineColorScheme();

  return (
    <>
      <Box pt='md' pb='md'>
        <Grid gutter='md'>
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              onClick={() => toggle()}
              style={{ marginRight: 20 }}
              size='xs'
              radius='md'
              color='gray'
            >
              Filters {opened ? '▴' : '▾'}
            </Button>
            <Transition
              mounted={opened}
              transition='slide-down'
              duration={200}
              timingFunction='ease'
            >
              {(styles) => (
                <Box
                  style={{ ...styles }}
                  sx={{
                    position: 'relative',
                    top: '0px',
                  }}
                >
                  <Grid gutter='md'>
                    <CoinsRankingFilters
                      changeFilter={changeFilter}
                      resetFilter={resetFilter}
                    />
                  </Grid>
                </Box>
              )}
            </Transition>
          </Col>
        </Grid>
      </Box>
      <Divider size='xs' />
    </>
  );
};

export default CoinRankingNavBar;
