export const getChartSvgIndex = ({ imageUrl }: { imageUrl: string }) => {
  const regex = /\/coins\/images\/(\d+)\//;
  const match = imageUrl.match(regex);

  if (match && match[1]) {
    return parseInt(match[1]);
  }

  return null;
};
