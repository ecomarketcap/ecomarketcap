import {
  Col,
  Grid,
  Paper,
  Button,
  useMantineColorScheme,
  Pagination as MantinePagination,
} from '@mantine/core';

import { darkTheme, lightTheme } from '../../theme';
import { CoinsRankingFilters } from '../filter';
import { FilterInputs } from '../filter/CoinsRanking/types';

const Pagination = ({
  history,
  location,
  devise,
  setDevise,
  page: { current, last },
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
  // ... existing code

  const handlePaginationChange = (currentPage: number) => {
    setPage({ current: currentPage, last });
  };

  const { colorScheme: theme } = useMantineColorScheme();

  return (
    <Paper
      p='sm'
      mt='xl'
      sx={{
        backgroundColor: theme === 'dark' ? darkTheme?.body : lightTheme?.body,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid gutter='md'>
        {/* ... existing code for the first Col (like filters or any other UI elements) */}
        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <MantinePagination
            total={last}
            defaultValue={current}
            boundaries={2}
            onChange={handlePaginationChange}
          />
        </Col>
      </Grid>
    </Paper>
  );
};

export default Pagination;
