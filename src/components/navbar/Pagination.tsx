import {
  Col,
  Grid,
  Paper,
  Button,
  Text,
  Pagination as MantinePagination,
} from '@mantine/core';
import { CoinsRankingFilters } from '../filter';
import { FilterInputs } from '../filter/CoinsRanking/types';

const Pagination = ({
  history,
  location,
  devise,
  setDevise,
  page,
  setPage,
  changeFilter,
  resetFilter,
  total,
  setNeedRefresh,
}: {
  history: any;
  location: any;
  devise: string;
  setDevise: (devise: string) => void;
  page: { current: number; last: number };
  setPage: (
    value: React.SetStateAction<{
      current: number;
      last: number;
    }>
  ) => void;
  changeFilter: (filters: FilterInputs) => void;
  resetFilter: (number: number) => void;
  total: number;
  setNeedRefresh: (
    value: React.SetStateAction<{
      needed: boolean;
      filterDidChanged: boolean;
    }>
  ) => void;
}) => {
  const handlePaginationChange = (currentPage: number) => {
    setPage({
      current: currentPage,
      last: page.last,
    });

    setNeedRefresh({
      needed: true,
      filterDidChanged: false,
    });
  };

  return (
    <Paper
      p='sm'
      mt='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid gutter='md'>
        <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <MantinePagination
            total={total}
            // value={page.current}
            value={page.current}
            boundaries={2}
            onChange={handlePaginationChange}
          />
        </Col>
      </Grid>
    </Paper>
  );
};

export default Pagination;
