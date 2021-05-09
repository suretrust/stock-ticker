export const getPercentageChange = (open: number, close: number) => {
  let valueDifference = close - open;
  const isNegative = valueDifference < 0;
  const sign = isNegative ? '-' : '+';

  valueDifference *= isNegative ? -1 : 1;
  valueDifference = Number(valueDifference.toFixed(2));

  const percentage = (((close - open) / close) * 100).toFixed(2);

  return {
    isNegative,
    percentage: `${sign}${valueDifference} (${percentage}%)`,
  };
};
