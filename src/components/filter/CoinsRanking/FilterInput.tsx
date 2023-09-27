import { Grid, TextInput } from '@mantine/core';
import { getFilterInputData } from './data';

export const FilterInput = ({
  label,
  id,
  placeholder,
  min,
  max,
  inputRef,
}: keyof typeof getFilterInputData) => {
  return (
    <Grid.Col span={2}>
      <label htmlFor={id}>{label}:</label>
      <TextInput
        id={id}
        type='number'
        placeholder={placeholder}
        min={min}
        max={max}
        name={id}
        ref={inputRef}
        sx={{ marginBottom: 'xs' }}
      />
    </Grid.Col>
  );
};
