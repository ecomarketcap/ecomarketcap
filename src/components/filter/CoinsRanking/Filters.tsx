import { TextInput, Grid, Box, Button } from '@mantine/core';
import { useFilters } from './hooks';
import { FilterInputs as FilterInputsType } from './types';
import { LabelInputCard } from '../../card';
import { getFilterInputData } from './data';

export const Filters = ({
  changeFilter,
  resetFilter,
}: {
  changeFilter: (filters: FilterInputsType) => void;
  resetFilter: () => void;
}) => {
  const { inputRefs, changeFilterHandler, resetFilterHandler } = useFilters({
    changeFilter,
    resetFilter,
  });

  const filterInputData = getFilterInputData({ inputRefs });

  return (
    <>
      <Box sx={{ marginTop: 'xs', maxWidth: '90vw' }}>
        <Grid gutter='md'>
          {filterInputData.map((inputDataGroup, index) => (
            <Grid.Col key={index} span={6}>
              {inputDataGroup.data.map((inputData, dataIndex) => (
                <LabelInputCard
                  title={inputDataGroup?.title}
                  description={inputDataGroup?.description}
                  data={inputDataGroup?.data}
                >
                  <Box
                    key={dataIndex}
                    sx={{
                      marginBottom: 'xs',
                      fontSize: '0.8rem',
                      display: 'block',
                    }}
                  >
                    <TextInput
                      id={inputData.id}
                      type='number'
                      placeholder={inputData.placeholder}
                      min={inputData.min}
                      max={inputData.max}
                      name={inputData.id}
                      ref={inputData.ref}
                      size='xs'
                      sx={{ width: '100px' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginTop: 'xs',
                    }}
                  >
                    <Button
                      size='xs'
                      radius='md'
                      color='gray'
                      onClick={changeFilterHandler}
                      sx={{ marginRight: 'sm' }}
                    >
                      Apply Filter
                    </Button>
                    <Button
                      size='xs'
                      radius='md'
                      color='gray'
                      onClick={resetFilterHandler}
                    >
                      Reset Filter
                    </Button>
                  </Box>
                </LabelInputCard>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Filters;
