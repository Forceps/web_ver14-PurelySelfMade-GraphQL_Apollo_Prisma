export default () => {
  const today = new Date();

  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const day = today.getDate(); // 날짜
  const day_of_the_week = today.getDay(); // 요일

  const hour = today.getHours(); // 시
  const minute = today.getMinutes(); // 분
  const second = today.getSeconds(); // 초
  const millisecond = today.getMilliseconds(); // 밀리

  return {
    year,
    month,
    day,
    day_of_the_week,
    hour,
    minute,
    second,
    millisecond,
  };
};
