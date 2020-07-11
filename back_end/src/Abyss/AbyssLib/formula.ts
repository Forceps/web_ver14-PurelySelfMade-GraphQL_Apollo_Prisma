export const WatchSigmoid = (count: number) => {
  const result: number = 65000 / (1 + Math.exp(-(count / 1.8) + 1.8));
  return Math.round(result);
};

export const roundedGeometricMean = (d1: number, d2: number) => {
  const result: number = Math.sqrt(d1 * d2);
  return Math.round(result);
};

export const relevanceSigmoid = () => {};

export const interestFade = (obj: number, HowMuchOld: number): number => {
  const coefficient = 33 / (HowMuchOld + 9) - 2.4;
  if (0 < coefficient && coefficient < 1) {
    console.log("Out of range numbers came out by formula!!!");
    throw Error("error occured in 'formula.ts'!!!");
  }
  const result = Math.round(obj * coefficient);
  return result;
};
