import React from 'react';
import { Box, Text, rem } from '@mantine/core';

interface InfoBannerProps {}

export const InfoBanner: React.FC<InfoBannerProps> = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Text
          size='xs'
          sx={{
            color: 'white',
            width: '80rem',
            paddingLeft: rem(16),
            paddingRight: rem(16),
          }}
        >
          <span role='img' aria-label='tree'>
            🌴{' '}
          </span>
          Please mind Ecomarketcap is in its early phase. You might be facing
          data limits if you use it heavily. Thank you for understanding!
        </Text>
      </Box>
    </>
  );
};

export default InfoBanner;
