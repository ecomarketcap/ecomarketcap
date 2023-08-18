import { Box, Tabs } from '@mantine/core';
import { useHistory, useParams } from 'react-router-dom';
import { RouteParams } from '../../types';

const CoinPageNavBar = ({ coin }: { coin: string }) => {
  const history = useHistory();
  const { tabValue } = useParams() as RouteParams;

  const tabsConfig = [
    { label: 'Chart', value: 'chart', path: `/coin/${coin}/chart` },
    { label: 'About', value: 'about', path: `/coin/${coin}/about` },
  ];

  return (
    <Box pb='md' pt='md' sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
      <Tabs
        value={tabValue}
        onTabChange={(value) => history.push(`/coin/${coin}/${value}`)}
      >
        <Tabs.List>
          {tabsConfig.map((tab) => (
            <Tabs.Tab key={tab.label} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Box>
  );
};

export default CoinPageNavBar;
