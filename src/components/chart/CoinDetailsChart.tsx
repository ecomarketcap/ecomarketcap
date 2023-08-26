import React from 'react';
import { Box, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

interface CoinDetailsChartProps {
  coin: string;
}

const CoinDetailsChart = ({ coin }: CoinDetailsChartProps) => {
  const { colorScheme: theme } = useMantineColorScheme();
  console.log('theme', theme);

  // const colorTheme = theme.colorScheme === 'light' ? null : Themes.DARK;

  return (
    <Box sx={{ height: '80vh' }}>
      <TradingViewWidget
        symbol={coin}
        hide_side_toolbar={false}
        locale='en'
        theme={theme}
        autosize
      />
    </Box>
  );
};

export default CoinDetailsChart;
