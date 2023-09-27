import React from 'react';
import { Box, Text, Divider } from '@mantine/core';
import { Format } from '../../modules/Utilities';

const InformationBox = ({
  title,
  data,
}: {
  title: string;
  data: number | undefined;
}) => (
  <Box>
    <Box mb='sm' mt='sm'>
      <Text size='xs' tt='uppercase' fz='xs' c='dimmed' fw={700}>
        {title}
      </Text>
      <Text size='xs' fw={700}>
        {Format.toCurrencyNDigits(data, 'USD', 2)}
      </Text>
    </Box>
    <Divider />
  </Box>
);

export default InformationBox;
