export const IntMemorySize = 65000;

export const WatchSigmoid = (count: number): number => {
  const result: number = IntMemorySize / (1 + Math.exp(-(count / 1.8) + 1.8));
  return Math.round(result);
};

export const GeoMeanRound = (d1: number, d2: number): number => {
  const result: number = Math.sqrt(d1 * d2);
  return Math.round(result);
};

export const relevanceSigmoid = (x: number): number => {
  const flexibleCurve =
    IntMemorySize / (1 + Math.exp(-0.4 * Math.log(2) * (x - 15)));
  const result = Math.round(flexibleCurve);
  return result;
};

export const relevanceSigmoidInverse = (y: number): number => {
  const flexibleCurveInverse =
    15 + (5 * Math.log(IntMemorySize / y - 1)) / (-2 * Math.log(2));
  const result = Math.round(flexibleCurveInverse);
  return result;
};

export const interestFade = (obj: number, HowMuchOld: number): number => {
  const coefficient = 33 / (HowMuchOld + 9) - 2.4;
  if (0 < coefficient && coefficient < 1) {
    console.log("Out of range numbers came out by formula!!!");
    throw Error("error occured in 'formula.ts'!!!");
  }
  const result = Math.round(obj * coefficient);
  return result;
};
