export const WatchSigmoid = (count: number) => {
  const result: number = 65000 / (1 + Math.exp(-(count / 1.8) + 1.8));
  return Math.round(result);
};

export const relevanceSigmoid = (d1: number, d2: number) => {
  const result: number = Math.sqrt(d1 * d2);
  return Math.round(result);
};
