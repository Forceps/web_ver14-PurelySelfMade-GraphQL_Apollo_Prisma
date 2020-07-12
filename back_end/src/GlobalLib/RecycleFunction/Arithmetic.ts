export const byteUnitConversion = (byte: number): string => {
  if (byte < 1024) {
    return `${byte} bytes`;
  } else if (byte < 1048576) {
    return `${(byte / 1024).toFixed(2)} KB`;
  } else if (byte < 1073741824) {
    return `${(byte / 1048576).toFixed(2)} MB`;
  } else if (byte < 1099511627776) {
    return `${(byte / 1073741824).toFixed(2)} GB`;
  } else if (byte < 1125899906842624) {
    return `${(byte / 1099511627776).toFixed(2)} TB`;
  } else {
    return `${(byte / 1125899906842624).toFixed(2)} PB`;
  }
};

export const GeoMean = (d1: number, d2: number): number => {
  const result: number = Math.sqrt(d1 * d2);
  return result;
};
