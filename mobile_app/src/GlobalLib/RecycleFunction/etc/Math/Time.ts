import { S_N_to_N } from "../type_convert";

export const LogClock = (
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

export const MediaClock = (seconds: string | number): string => {
  seconds = `${seconds}`;
  const secondsNumber = parseInt(seconds, 10);
  let hours: string | number = Math.floor(secondsNumber / 3600);
  let minutes: string | number = Math.floor(
    (secondsNumber - hours * 3600) / 60
  );
  let totalSeconds: string | number =
    secondsNumber - hours * 3600 - minutes * 60;

  if (S_N_to_N(totalSeconds) < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  if (hours < 1) {
    if (minutes < 1) {
      return `0:${totalSeconds}`;
    }
    return `${minutes}:${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};
