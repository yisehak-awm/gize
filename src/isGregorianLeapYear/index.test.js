import isGregorianLeapYear from ".";

describe("Gregorian calendar leap years", () => {
  test("It should recognise leap years", () => {
    const leapYears = [2020, 2016, 2012, 2008, 2004];
    const isLeapYear = leapYears.map((y) => isGregorianLeapYear(y));
    expect(isLeapYear.every((i) => i)).toBe(true);
  });

  test("It should recognise non-leap years", () => {
    const nonLeapYears = [2019, 2018, 2100, 1900, 1800, 2200];
    const isLeapYear = nonLeapYears.map((y) => isGregorianLeapYear(y));
    expect(isLeapYear.every((i) => !i)).toBe(true);
  });
});
