import isEthiopicLeapYear from "../isEthiopicLeapYear";
import {
  NON_LEAP_YEAR_MAPPING,
  LEAP_YEAR_MAPPING,
  POST_LEAP_YEAR_MAPPING,
} from "../constants";
import validateEthiopicDate from "../validateEthiopicDate";

/**
 * @name ethiopicToGregorian
 * @description Given year, month and date in Ethiopian calendar, construct an instance of Gregorian date
 * @param {Number} year - the Ethiopian year to convert
 * @param {Number} month - the Ethiopian month to convert
 * @param {Number} date - the Ethiopian date to convert
 * @returns {Object} Gregorian date instance
 * @throws {TypeError} 3 argument required
 */
export default function ethiopicToGregorian(year, month, date) {
  if (arguments.length !== 3)
    throw new TypeError(
      "3 argument required, but " + arguments.length + " present"
    );

  validateEthiopicDate(year, month, date);

  // If the year is a post-leap year Ethiopian date, the gregorian new year falls on Tahisas 22. Otherwise, it falls on Tahisas 23
  const gregorian_new_year_day = isEthiopicLeapYear(year + 1) ? 22 : 23;

  // If the Ethiopian date is before the Gregorian new year, the year difference is 7. Otherwise the difference is 8.
  const gregorian_year =
    month < 4 || (month === 4 && date < gregorian_new_year_day)
      ? year + 7
      : year + 8;

  // Decide which Ethiopian calendar mapping to use based wether or not it is a Gregorian leap year
  const mapping = isEthiopicLeapYear(year)
    ? LEAP_YEAR_MAPPING
    : isEthiopicLeapYear(year - 1)
    ? POST_LEAP_YEAR_MAPPING
    : NON_LEAP_YEAR_MAPPING;

  // get the mapping info for the Ethiopian month
  const month_mapping = mapping.find((m) => m.id === month);

  // If the Ethiopian date is less than the range of the first month, that's the month in Gregorian calendar. Otherwise, the month will be the next one
  const gregorian_month =
    date <= month_mapping.range[0].end - month_mapping.range[0].start + 1
      ? month_mapping.range[0].id
      : month_mapping.range[1].id;

  // If the Ethiopian date is less than the range of the first month, add it to the start of the range to get the gregorian day. Otherwise, the Gregorian date will fall on the next month and it will be what is left over from the previous month
  const gregorian_date =
    date <= month_mapping.range[0].end - month_mapping.range[0].start + 1
      ? month_mapping.range[0].start + date - 1
      : date - (month_mapping.range[0].end - month_mapping.range[0].start + 1);

  // Month is zero indexed in Javascript's Date object
  return new Date(gregorian_year, gregorian_month - 1, gregorian_date);
}
