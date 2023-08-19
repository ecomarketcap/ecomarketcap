import { Button, useMantineColorScheme, Box, Divider } from '@mantine/core';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Button
        onClick={() => toggle()}
        mb='xs'
        size='xs'
        radius='md'
        color='gray'
      >
        Filters {opened ? '▴' : '▾'}
      </Button>

      <Divider
        size='xs'
        mb='xs'
        sx={{
          backgroundColor: 'gray',
          height: '0.1px',
          width: '100%',
        }}
      />

      {opened && (
        <>
          <CoinsRankingFilters
            changeFilter={changeFilter}
            resetFilter={resetFilter}
          />
          <Divider
            size='xs'
            mb='xs'
            sx={{
              backgroundColor: 'gray',
              height: '0.1px',
              width: '100%',
            }}
          />
        </>
      )}
    </Box>
  );
};

export default CoinRankingNavBar;
