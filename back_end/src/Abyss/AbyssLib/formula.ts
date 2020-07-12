export const IntMemorySize = 65000;

export const WatchSigmoid = (count: number): number => {
  const result: number = IntMemorySize / (1 + Math.exp(-(count / 1.8) + 1.8));
  return Math.round(result);
};

const halfReachP: number = 300;
const halfReachU: number = 80;
const halfReach = (select: string): number => {
  if (select === "post") {
    return halfReachP;
  } else {
    return halfReachU;
  }
};
export const relevanceSigmoid = (x: number, select: string): number => {
  const Curve =
    IntMemorySize /
    (1 + Math.exp(-0.4 * Math.log(2) * (x - halfReach(select))));
  const result = Math.round(Curve);
  return result;
};
export const relevanceSigmoidInverse = (y: number, select: string): number => {
  const CurveInverse =
    halfReach(select) +
    (5 * Math.log(IntMemorySize / y - 1)) / (-2 * Math.log(2));
  const result = Math.round(CurveInverse);
  return result;
};

export const interestFade = (obj: number, HowMuchOld: number): number => {
  const coefficient = 33 / (HowMuchOld + 9) - 2.4;
  if (0 > coefficient && coefficient > 1) {
    console.log("Out of range numbers came out by formula!!!");
    throw Error("error occured in 'formula.ts'!!!");
  }
  const result = Math.round(obj * coefficient);
  return result;
};
