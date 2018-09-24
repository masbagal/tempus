export function convertSecondsToTimerFormat(seconds) {
  const hours   = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const sec = seconds - (hours * 3600) - (minutes * 60);

  return `${appendZero(hours)}:${appendZero(minutes)}:${appendZero(sec)}`;
}

export function appendZero(number) {
  return number.toString().length < 2 ? `0${number}` : number;
}