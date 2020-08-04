export const mediaStateRenewalCycle = (timeSec: number) => {
  const squared =
    (-Math.log(1.7) * (timeSec - 60 - (300 * Math.log(170)) / Math.log(1.7))) /
    300;
  const result = -Math.exp(squared) + 200;
  return result;
};
