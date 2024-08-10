import { fromMinutesToTuple, substraction, formatPeriods } from "./helpers.js";

export function calculateTotalDuration(periods) {
  // format = [hours, minutes]
  let totalTime = [0, 0];
  for (const period of periods) {
    const [formattedStart, formattedEnd] = formatPeriods(period);
    if (formattedStart >= formattedEnd) continue;
    const result = substraction(period);

    totalTime[0] += result[0];
    totalTime[1] += result[1];
  }
  // Transform to final output format
  let hours = 0;
  let minutes = 0;
  hours = totalTime[0];
  // Parse minutes into [hours, minutes] format to keep it simple
  const minutesToTuple = fromMinutesToTuple(totalTime[1]);
  hours = hours + minutesToTuple[0];
  minutes = minutesToTuple[1];

  return `${hours} heures et ${minutes} minutes`;
}
