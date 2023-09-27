export const getChartSvgIndex = ({ imageUrl }: { imageUrl: string }) => {
  const regex = /\/coins\/images\/(\d+)\//;
  const match = imageUrl.match(regex);

  if (match && match[1]) {
    return parseInt(match[1]);
  }

  return null;
};

export const computeNewCoinsData = ({
  data,
  startPage,
  coinsPerPage,
  getChangeInSnapshot,
}: {
  data: any[];
  startPage: number;
  coinsPerPage: number;
  getChangeInSnapshot: (newCoinsData: {}) => void;
}) => {
  const start = (startPage - 1) * coinsPerPage;
  const end = start + coinsPerPage;

  const newCoinsData = data.slice(start, end);

  const snapChange = getChangeInSnapshot(newCoinsData);

  return { newCoinsData, snapChange };
};
