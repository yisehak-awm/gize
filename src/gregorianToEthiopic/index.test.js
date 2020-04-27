import gregorianToEthiopic from ".";

describe("Gregorian date to Ethiopic", () => {
  test("Should convert to Ethiopic leap year date (Puagme 6)", () => {
    expect(gregorianToEthiopic(2019, 9, 11)).toEqual({
      year: 2011,
      month: 13,
      date: 6,
    });
  });

  test("Should convert to Ethiopic new year (Meskerem 1)", () => {
    expect(gregorianToEthiopic(2018, 9, 11)).toEqual({
      year: 2011,
      month: 1,
      date: 1,
    });
  });

  test("Should convert from Gregorian leap year (February 29)", () => {
    expect(gregorianToEthiopic(2020, 2, 29)).toEqual({
      year: 2012,
      month: 6,
      date: 21,
    });
  });
});
