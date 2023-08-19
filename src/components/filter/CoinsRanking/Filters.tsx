import { TextInput, Grid, Box, Button } from '@mantine/core';
import { useFilters } from './hooks';
import { FilterInputs as FilterInputsType } from './types';
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
          {filterInputData.map((inputData, index) => (
            <Grid.Col key={index} span={6}>
              <Box sx={{ marginBottom: 'xs' }}>
                <label
                  htmlFor={inputData.id}
                  style={{
                    fontSize: '0.8rem',
                    marginBottom: 'xs',
                    display: 'block',
                  }}
                >
                  {inputData.label}:
                </label>
                <TextInput
                  id={inputData.id}
                  type='number'
                  placeholder={inputData.placeholder}
                  min={inputData.min}
                  max={inputData.max}
                  name={inputData.id}
                  ref={inputData.ref}
                  size='xs' // This sets the height, so keep it at 'xs' to be small
                  sx={{ width: '90px' }} // This sets a consistent width for the number inputs.
                />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
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
      </Box>
    </>
  );
};

export default Filters;
