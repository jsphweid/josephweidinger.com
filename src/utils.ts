const NUMBER_OF_DAYS_TO_GO_BACK = 5;
export const getRecentStartDate = (): Date => {
  const d = new Date();
  d.setDate(d.getDate() - NUMBER_OF_DAYS_TO_GO_BACK);
  return new Date(d.toISOString().slice(0, 10));
};

export const getTimeSince = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  const display = (num: number, unit: string) =>
    num === 1 ? `1 ${unit} ago` : `${num} ${unit}s ago`;

  if (interval > 1) {
    return display(Math.floor(interval), "year");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return display(Math.floor(interval), "month");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return display(Math.floor(interval), "day");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return display(Math.floor(interval), "hour");
  }
  interval = seconds / 60;
  if (interval > 1) {
    return display(Math.floor(interval), "minute");
  }
  return display(Math.floor(seconds), "second");
};
