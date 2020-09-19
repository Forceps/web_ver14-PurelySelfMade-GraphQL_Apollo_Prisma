export const byteIntoUnit = (
  byte: number
): {
  number: string;
  unit: "byte" | "KB" | "MB" | "GB" | "TB" | "PB";
} => {
  let num: string = "0";
  let unit: "byte" | "KB" | "MB" | "GB" | "TB" | "PB" = "byte";
  if (byte < 1024) {
    num = `${byte}`;
  } else if (byte < 1048576) {
    num = (byte / 1024).toFixed(2);
    unit = "KB";
  } else if (byte < 1073741824) {
    num = (byte / 1048576).toFixed(2);
    unit = "MB";
  } else if (byte < 1099511627776) {
    num = (byte / 1073741824).toFixed(2);
    unit = "GB";
  } else if (byte < 1125899906842624) {
    num = (byte / 1099511627776).toFixed(2);
    unit = "TB";
  } else {
    num = (byte / 1125899906842624).toFixed(2);
    unit = "PB";
  }
  return {
    number: num,
    unit,
  };
};

export const unitIntoByte = (num: number, unit: string) => {
  let vertedNum = num;
  switch (unit) {
    case "KB":
      vertedNum = num * 1024;
      break;
    case "MB":
      vertedNum = num * 1048576;
      break;
    case "GB":
      vertedNum = num * 1073741824;
      break;
    case "TB":
      vertedNum = num * 1099511627776;
      break;
    case "PB":
      vertedNum = num * 1125899906842624;
  }
  return vertedNum;
};
