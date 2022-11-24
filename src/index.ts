export const getDatesRange = (startDate: string | number | Date, endDate: string | number | Date) => {
  let result = [];

  for (
    let date = new Date(startDate);
    date <= new Date(endDate);
    date.setDate(date.getDate() + 1)
  ) {
    result.push(new Date(date));
  }

  return result;
};

export const getFirstDayOfWeek = (date: Date, firstDayOfWeek = 1) => {
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;

  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const getLastDayOfWeek = (date: Date, firstDayOfWeek = 1) => {
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? -7 : 0) + 6 - (day - firstDayOfWeek);

  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);

  return date;
};

export const getCalendarDates = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(
    firstDayOfMonth.getFullYear(),
    firstDayOfMonth.getMonth() + 1,
    0
  );

  return getDatesRange(
    getFirstDayOfWeek(firstDayOfMonth),
    getLastDayOfWeek(lastDayOfMonth)
  );
};


