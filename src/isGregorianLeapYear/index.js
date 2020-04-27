/**
 * @name isGregorianLeapYear
 * @description Checks if a given Gregorian year is a leap year
 * @param {Number} year - the Gregorian year to check
 * @returns {Boolean} the Gregorian year is a leap year
 * @throws {TypeError} 1 argument required
 */
export default function isGregorianLeapYear(year) {
  if (arguments.length !== 1)
    throw new TypeError(
      "1 argument required, but " + arguments.length + " present"
    );

  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
