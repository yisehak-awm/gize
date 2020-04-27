import isGregorianLeapYear from "../isGregorianLeapYear";

// Length of months in the Gregorian calendar.
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * @name validateGregorianDate
 * @description Checks if the given Gregorian date is valid
 * @param {Number} year - year in Gregorian calendar
 * @param {Number} month - month in Gregorian calendar
 * @param {Number} date - date in Gregorian calendar
 * @throws {Error} Month should be between 1 and 12
 * @throws {Error} February can't have more than 29 days on leap years
 * @throws {Error} February month can't have more than 28 days on non-leap years
 * @throws {Error} The specified month can't have more than {number} days
 */
export default function validateGregorianDate(year, month, date) {
  const isLeapYear = isGregorianLeapYear(year);

  const maxDaysOfFebruary = isLeapYear ? 29 : 28;

  // Gregorian calendar has 12 months
  if (month < 1 || month > 12)
    throw new Error("Month should be between 1 and 12");

  // For the month of February, depending on wether it is a leap year validate wether it is 29 or 28
  if (month === 2 && date > maxDaysOfFebruary)
    throw new Error(
      isLeapYear
        ? "February can't have more than 29 days on leap years"
        : "February month can't have more than 28 days on non-leap years"
    );

  // For the rest of the months, validate the date against the maximum lengths of the months
  if (date < 1 || date > DAYS_IN_MONTH[month - 1])
    throw new Error(
      `The specified month can't have more than ${
        DAYS_IN_MONTH[month - 1]
      } days.`
    );
}
