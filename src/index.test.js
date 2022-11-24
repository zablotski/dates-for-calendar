const {
  getCalendarDates,
  getDatesRange,
  getFirstDayOfWeek,
  getLastDayOfWeek,
} = require("./index");

describe("dates for calendar:", () => {
  test("should get calendar dates for given month ", () => {
    const result = getCalendarDates(2023, 0);
    expect(result).toMatchSnapshot();
  });

  test("should get dates from range", () => {
    const result = getDatesRange(
      new Date("2023-01-01"),
      new Date("2023-01-03")
    );
    expect(result).toMatchSnapshot();
  });

  describe("Last day of week: ", () => {
    test("should get last day of week when Monday is first day of week by default", () => {
      const result = getLastDayOfWeek(new Date("2023-01-01"));
      expect(result.toISOString()).toBe("2023-01-01T22:59:59.999Z");
    });

    test("should get last day of week when Monday is first day of week is Sunday", () => {
      const result = getLastDayOfWeek(new Date("2023-01-01"), 0);
      expect(result.toISOString()).toBe("2023-01-07T22:59:59.999Z");
    });

    test("should get last day of week when Monday is first day of week is Saturday", () => {
      const result = getLastDayOfWeek(new Date("2023-01-01"), 6);
      expect(result.toISOString()).toBe("2023-01-06T22:59:59.999Z");
    });
  });

  describe("First day of week: ", () => {
    test("should get last day of week when Monday is first day of week by default", () => {
      const result = getFirstDayOfWeek(new Date("2023-01-01"));
      expect(result.toISOString()).toBe("2022-12-25T23:00:00.000Z");
    });

    test("should get last day of week when Monday is first day of week is Sunday", () => {
      const result = getFirstDayOfWeek(new Date("2023-01-01"), 0);
      expect(result.toISOString()).toBe("2022-12-31T23:00:00.000Z");
    });

    test("should get last day of week when Monday is first day of week is Saturday", () => {
      const result = getFirstDayOfWeek(new Date("2023-01-01"), 6);
      expect(result.toISOString()).toBe("2022-12-30T23:00:00.000Z");
    });
  });
});
