import isEthiopicLeapYear from ".";

describe("Ethiopian calendar leap years", () => {
  test("It should recognise leap years", () => {
    const leapYears = [2011, 2007, 2003, 1999, 1995, 1991];
    const isLeapYear = leapYears.map((y) => isEthiopicLeapYear(y));
    expect(isLeapYear.every((i) => i)).toBe(true);
  });

  test("It should recognise non-leap years", () => {
    const nonLeapYears = [2012, 2010, 2009, 2008, 2006, 2005];
    const isLeapYear = nonLeapYears.map((y) => isEthiopicLeapYear(y));
    expect(isLeapYear.every((i) => !i)).toBe(true);
  });
});
