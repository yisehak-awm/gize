import isEthiopianLeapYear from "../isEthiopicLeapYear";
import isGregorianLeapYear from "../isGregorianLeapYear";
import {
  NON_LEAP_YEAR_MAPPING,
  LEAP_YEAR_MAPPING,
  POST_LEAP_YEAR_MAPPING,
} from "../constants";
import validateGregorianDate from "../validateGregorianDate";

/**
 * @name fromGregorianDate
 * @description Given year, month and date in gregorian calendat, construct an instance of Ethioipan date
 * @param {Number} year - the gregorian year to check
 * @param {Number} month - the gregorian month to check
 * @param {Number} date - the gregorian date to check
 * @returns {Object} Ethiopian date instance
 * @throws {TypeError} 3 argument required
 */
export default function fromGregorianDate(year, month, date) {
  if (arguments.length !== 3)
    throw new TypeError(
      "3 argument required, but " + arguments.length + " present"
    );

  validateGregorianDate(year, month, date);

  // Calculate the Ethiopian year from the Gregorian date
  const ethiopian_new_year_day = isGregorianLeapYear(year + 1) ? 12 : 11;
  const ethiopian_year =
    (month >= 1 && month < 9) || (month === 9 && date < ethiopian_new_year_day)
      ? year - 8
      : year - 7;

  // Decide which Ethiopian calendar mapping to use based wether or not it is a Gregorian leap year
  const mapping = isEthiopianLeapYear(ethiopian_year)
    ? LEAP_YEAR_MAPPING
    : isEthiopianLeapYear(ethiopian_year - 1)
    ? POST_LEAP_YEAR_MAPPING
    : NON_LEAP_YEAR_MAPPING;

  // Find months in the Ethiopian calendar where the date falls
  const valid_mappings = mapping.filter((m) =>
    m.range.some((r) => r.id === month && r.start <= date && r.end >= date)
  );

  // Find the Ethiopian month on which the Gregorian date falls
  // During Ethiopian leap years, the first day and the last day of the year both fall on Septemeber 11th. To differentiate between the two, we check if the Gregorian year preceds a leap year. If so the day is the last day of the Year (Puagme 6th). Otherwise it is the first day of the year (Meskerem 1)
  const ethiopian_month_data = isGregorianLeapYear(year + 1)
    ? valid_mappings.pop()
    : valid_mappings[0];

  // Calculate the Ethiopian date number based on the mapping
  const ethiopian_date = ethiopian_month_data.range
    .filter((m) => m.id <= month)
    .reduce(
      (accumulator, current) =>
        current.id === month
          ? accumulator + date - current.start + 1
          : accumulator + current.end - current.start + 1,
      0
    );

  return {
    year: ethiopian_year,
    month: ethiopian_month_data.id,
    date: ethiopian_date,
  };
}
