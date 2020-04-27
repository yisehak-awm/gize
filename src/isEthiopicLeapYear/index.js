/**
 * @name isEthiopianLeapYear
 * @description Checks if a given Ethiopian year is a leap year
 * @param {Number} year - the Ethiopian year to check
 * @returns {Boolean} the Ethiopian year is a leap year
 * @throws {TypeError} 1 argument required
 */
export default function isEthiopianLeapYear(year) {
  if (arguments.length !== 1)
    throw new TypeError(
      "1 argument required, but " + arguments.length + " present"
    );

  return year % 4 === 3;
}
