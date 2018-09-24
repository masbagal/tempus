import dayjs from 'dayjs';

export function generateDateKey(timestamp) {
  const dayjsObject = dayjs(timestamp);
  return dayjsObject.format('YYYY-MM-DD');
}

export function generateTodayDateKey() {
  const todayTimestamp = new Date().getTime();
  return generateDateKey(todayTimestamp);
}