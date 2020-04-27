import isEthiopicLeapYear from "../isEthiopicLeapYear";

/**
 * @name validateEthiopianDate
 * @description Checks if the given Ethiopian date is valid
 * @param {Number} year - year in Ethiopian calendar
 * @param {Number} month - month in Ethiopian calendar
 * @param {Number} date - date in Ethiopian calendar
 * @throws {Error} Month should be between 1 and 13
 * @throws {Error} Date should be between 1 and 30
 * @throws {Error} 13th month can't have more than 6 days on leap years
 * @throws {Error} 13th month can't have more than 5 days on non-leap years
 */
export default function validateEthiopianDate(year, month, date) {
  const isLeapYear = isEthiopicLeapYear(year);

  // Puagme is the 13th month in the Ethiopian calendar. It is 6 days long on leap years  and 5 days long otherwise.
  const maxDaysofPuagme = isLeapYear ? 6 : 5;

  // Ethiopian calendar has 13 months
  if (month < 1 || month > 13)
    throw new Error("Month should be between 1 and 13");

  // All Ethiopian months , except the 13th, have exactly 30 days
  if (date < 1 || date > 30) throw new Error("Date should be between 1 and 30");

  // Check the lendth of the 13th month
  if (month === 13 && date > maxDaysofPuagme)
    throw new Error(
      isLeapYear
        ? "13th month can't have more than 6 days on leap years"
        : "13th month can't have more than 5 days on non-leap years"
    );
}
