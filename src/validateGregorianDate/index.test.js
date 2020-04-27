import validateGregorianDate from ".";

describe("Gregorian month validation", () => {
  test("Reject month below 1", () => {
    expect(() => validateGregorianDate(2000, 0, 11)).toThrowError(
      "Month should be between 1 and 12"
    );
  });
  test("Reject month above 12", () => {
    expect(() => validateGregorianDate(2000, 13, 11)).toThrowError(
      "Month should be between 1 and 12"
    );
  });
});

describe("February length", () => {
  test("29 on leap years", () => {
    expect(() => validateGregorianDate(2020, 2, 30)).toThrowError(
      "February can't have more than 29 days on leap years"
    );
  });
  test("28 on non-leap years", () => {
    expect(() => validateGregorianDate(2019, 2, 29)).toThrowError(
      "February month can't have more than 28 days on non-leap years"
    );
  });
});

describe("Number of days in Gregorian calendar", () => {
  test("January can't have more than 31 days", () => {
    expect(() => validateGregorianDate(2012, 1, 32)).toThrowError(
      "The specified month can't have more than 31 days."
    );
  });
  test("April can't have more than 30 days", () => {
    expect(() => validateGregorianDate(2012, 4, 31)).toThrowError(
      "The specified month can't have more than 30 days."
    );
  });
});
