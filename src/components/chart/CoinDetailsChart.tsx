import React from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

interface CoinDetailsChartProps {
  coin: string;
}

const CoinDetailsChart = ({ coin }: CoinDetailsChartProps) => {
  const theme = useMantineTheme();

  const colorTheme = theme.colorScheme === 'light' ? null : Themes.DARK;

  return (
    <Box sx={{ height: '80vh' }}>
      <TradingViewWidget
        symbol={coin}
        hide_side_toolbar={false}
        locale='fr'
        theme={colorTheme}
        autosize
      />
    </Box>
  );
};

export default CoinDetailsChart;
