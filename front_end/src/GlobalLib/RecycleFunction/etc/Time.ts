import { S_N_to_N } from "./type_convert";

export const timeNote = (
  hour: number | string,
  minute: number | string
): string => {
  hour = S_N_to_N(hour);
  minute = S_N_to_N(minute);
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let string = "";
  hour >= 12
    ? (string = `${hour - 12}:${minute} pm`)
    : (string = `${hour}:${minute} am`);

  return string;
};
