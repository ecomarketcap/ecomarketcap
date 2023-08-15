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
    <Box>
      <Grid gutter='md'>
        {filterInputData.map((inputData, index) => (
          <div key={index}>
            <label htmlFor={inputData.id}>{inputData.label}:</label>
            <TextInput
              id={inputData.id}
              type='number'
              placeholder={inputData.placeholder}
              min={inputData.min}
              max={inputData.max}
              name={inputData.id}
              ref={inputData.ref}
              mr='xs'
            />
          </div>
        ))}
      </Grid>
      <Button onClick={changeFilterHandler} mr='xs'>
        Apply Filter
      </Button>
      <Button onClick={resetFilterHandler}>Reset Filter</Button>
    </Box>
  );
};

export default Filters;
