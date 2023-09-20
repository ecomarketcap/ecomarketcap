import {
  Box,
  Button,
  Card,
  Group,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';

import { FilterInputs as FilterInputsType } from './types';
import { data } from 'jquery';
import { getFilterInputData } from './data';
import { useFilters } from './hooks';

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
      {filterInputData.map((inputField, dataIndex) => (
        <Box
          key={dataIndex}
          sx={{
            marginBottom: 'xs',
            fontSize: '0.8rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Text
              fz='lg'
              style={{ lineHeight: 1, fontWeight: 500, color: '#495057' }}
            >
              {inputField?.title}
            </Text>
            <Text fz='xs' c='dimmed' mt={3} mb='xl' sx={{ maxWidth: '200px' }}>
              {inputField?.description}
            </Text>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.3125rem' }}>
            {inputField.data.map((inputData) => (
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
            ))}
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // stack the buttons vertically
          justifyContent: 'flex-end',
          marginTop: 'xs',
          gap: 'sm', // space between the buttons
        }}
      >
        <Button
          size='xs'
          radius='md'
          color='blue'
          onClick={changeFilterHandler}
          mb='sm'
        >
          Apply Filter
        </Button>
        <Button
          size='xs'
          radius='md'
          color='red'
          variant='light'
          onClick={resetFilterHandler}
        >
          Reset Filter
        </Button>
      </Box>
    </>
  );
};
