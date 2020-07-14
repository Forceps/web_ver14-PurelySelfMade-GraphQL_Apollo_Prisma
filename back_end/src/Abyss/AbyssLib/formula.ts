export const IntMemorySize = 65000;

export const interestSigmoid = (count: number): number => {
  let result = 0;
  if (count > 19) {
    result = IntMemorySize;
  } else {
    const reform: number =
      IntMemorySize / (1 + Math.exp((-Math.log(11.5) * (count - 4)) / 3));
    result = Math.round(reform);
  }
  return result;
};

const halfReachP: number = 30;
const halfReachU: number = 33;
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
  const result = CurveInverse;
  return result;
};

export const interestFade = (obj: number, HowMuchOld: number): number => {
  let coefficient: number = 1;
  if (HowMuchOld === 1) {
    coefficient = 0.9;
  } else if (HowMuchOld === 2) {
    coefficient = 0.6;
  } else if (HowMuchOld === 3) {
    coefficient = 0.35;
  } else {
    coefficient = 0;
  }
  const result = obj * coefficient;
  return result;
};

export const interestFadeSigmoid = (
  obj: number,
  HowMuchOld: number
): number => {
  const coefficient: number =
    1 / (1 + Math.exp((Math.log(9) * (HowMuchOld - 6)) / 2));

  const result = obj * coefficient;
  return result;
};
