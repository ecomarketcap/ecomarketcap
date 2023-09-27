import {
  Button,
  useMantineColorScheme,
  Box,
  Divider,
  Popover,
} from '@mantine/core';
import { FilterInputs } from '../filter/CoinsRanking/types';
import { CoinsRankingFilters } from '../filter';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

const CoinRankingNavBar = ({
  devise,
  setDevise,
  page,
  setPage,
  changeFilter,
  resetFilter,
}: {
  devise: string;
  setDevise: (devise: string) => void;
  page: { current: number; last: number };
  setPage: (page: { current: number; last: number }) => void;
  changeFilter: (filters: FilterInputs) => void;
  resetFilter: () => void;
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Popover
        opened={opened}
        onChange={setOpened}
        position='bottom-end'
        radius='md'
        withArrow
      >
        <Popover.Target>
          <Button
            mb='xs'
            size='xs'
            radius='md'
            color='gray'
            onClick={() => setOpened((o) => !o)}
          >
            Filters {opened ? '▴' : '▾'}
          </Button>
        </Popover.Target>

        <Popover.Dropdown
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(5px)',
          }}
          p='xl'
        >
          <CoinsRankingFilters
            changeFilter={changeFilter}
            resetFilter={resetFilter}
          />
        </Popover.Dropdown>
        <Divider
          size='xs'
          mb='xs'
          sx={{
            backgroundColor: 'gray',
            height: '0.1px',
            width: '100%',
          }}
        />
      </Popover>
    </Box>
  );
};

export default CoinRankingNavBar;
