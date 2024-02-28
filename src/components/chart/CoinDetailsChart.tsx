import React from 'react';
import { Box, useMantineColorScheme, useMantineTheme } from '@mantine/core';
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

interface CoinDetailsChartProps {
  coin: string;
}

const CoinDetailsChart = ({ coin }: CoinDetailsChartProps) => {
  const { colorScheme: theme } = useMantineColorScheme();
  console.log('theme', theme);

  // const colorTheme = theme.colorScheme === 'light' ? null : Themes.DARK;

  return (
    <Box sx={{ height: '80vh' }}>
      <AdvancedRealTimeChart
        symbol={coin}
        hide_side_toolbar={false}
        locale="en"
        theme={theme}
        autosize
      />
    </Box>
  );
};

export default CoinDetailsChart;
