import validateEthiopicDate from ".";

describe("Ethiopic month validation", () => {
  test("Reject month below 1", () => {
    expect(() => validateEthiopicDate(2000, 0, 11)).toThrowError(
      "Month should be between 1 and 13"
    );
  });
  test("Reject month above 13", () => {
    expect(() => validateEthiopicDate(2000, 14, 11)).toThrowError(
      "Month should be between 1 and 13"
    );
  });
});

describe("Ethiopic date validation", () => {
  test("Reject date below 1", () => {
    expect(() => validateEthiopicDate(2000, 1, 0)).toThrowError(
      "Date should be between 1 and 30"
    );
  });
  test("Reject date above 30", () => {
    expect(() => validateEthiopicDate(2000, 1, 31)).toThrowError(
      "Date should be between 1 and 30"
    );
  });
});

describe("Ethiopic leap year month length validation", () => {
  test("13th month should have 5 days on non-leap years", () => {
    expect(() => validateEthiopicDate(2012, 13, 6)).toThrowError(
      "13th month can't have more than 5 days on non-leap years"
    );
  });
  test("13th month should have 6 days on leap years", () => {
    expect(() => validateEthiopicDate(2011, 13, 6)).not.toThrow();
  });
});
