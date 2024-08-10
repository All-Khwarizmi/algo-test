export function fromNumberToTuple(num) {
  let str = String(num);

  if (num >= 1000) {
    const hours = str.slice(0, 2);
    const minutes = str.slice(2);
    return [+hours, +minutes];
  }
  const hours = str.slice(0, 1);
  const minutes = str.slice(1);
  return [+hours, +minutes];
}
export function fromMinutesToTuple(num) {
  let numCopy = num;
  const time = [0, 0];
  do {
    if (numCopy >= 60) {
      time[0]++;
      numCopy -= 60;
    } else {
      time[1] = numCopy;
      numCopy = 0;
    }
  } while (numCopy);
  return time;
}

export function substraction(period) {
  const [formattedStart, formattedEnd] = formatPeriods(period);
  let startHours;
  let startMinutes;
  startHours = Number(formattedStart.slice(0, 2));
  startMinutes = Number(formattedStart.slice(2));

  let endHours;
  let endMinutes;
  endHours = Number(formattedEnd.slice(0, 2));
  endMinutes = Number(formattedEnd.slice(2));

  if (endHours - startHours === 1 && startMinutes > endMinutes) {
    return [0, (endMinutes === 0 ? 60 : endMinutes) - startMinutes];
  }
  return [endHours - startHours, endMinutes - startMinutes];
}

export function formatPeriods(period) {
  return [period.start.replace(":", ""), period.end.replace(":", "")];
}
