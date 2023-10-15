import React from 'react';
import { Box, Container, Text } from '@mantine/core';

interface InfoBannerProps {}

export const InfoBanner: React.FC<InfoBannerProps> = () => {
  return (
    <Box bg="gray">
      <Container size="xl">
        <Text size="xs" c="white">
          <span role="img" aria-label="tree">
            🌴{' '}
          </span>
          Please mind Ecomarketcap is in its early phase. You might be facing
          data limits if you use it heavily. Thank you for understanding!
        </Text>
      </Container>
    </Box>
  );
};

export default InfoBanner;
