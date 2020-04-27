import ethiopicToGregorian from ".";

describe("Ethiopic date to Gregorian", () => {
  test("Should convert to Gregorian leap year date (February 29)", () => {
    expect(ethiopicToGregorian(2008, 6, 21)).toEqual(new Date(2016, 1, 29));
  });

  test("Should convert from Ethiopian new year (post leap year)", () => {
    expect(ethiopicToGregorian(2012, 1, 1)).toEqual(new Date(2019, 8, 12));
  });

  test("Should convert from Ethiopian new year", () => {
    expect(ethiopicToGregorian(2011, 1, 1)).toEqual(new Date(2018, 8, 11));
  });
});
