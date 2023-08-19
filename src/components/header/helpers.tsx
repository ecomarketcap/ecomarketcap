import { CoinDetailsDataType } from '../../types';

export const getInformationBoxData = ({
  coinDetailsData,
}: {
  coinDetailsData: CoinDetailsDataType;
}): { title: string; data: number | null | undefined }[] => {
  const marketData = coinDetailsData?.market_data;

  return [
    { title: 'Market Cap', data: marketData?.market_cap?.usd },
    { title: 'Total Volume', data: marketData?.total_volume?.usd },
    { title: 'High (24h)', data: marketData?.high_24h?.usd },
    { title: 'Low (24h)', data: marketData?.low_24h?.usd },
    { title: 'All Time High', data: marketData?.ath?.usd },
    { title: 'All Time Low', data: marketData?.atl?.usd },
  ];
};
