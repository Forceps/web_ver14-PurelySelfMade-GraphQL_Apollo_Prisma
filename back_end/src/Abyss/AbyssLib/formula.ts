export const WatchSigmoid = (count: number) => {
  const result: number = 65000 / (1 + Math.exp(-(count / 1.8) + 1.8));
  return Math.round(result);
};
