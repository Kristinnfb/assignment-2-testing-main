import { describe, it, expect } from "vitest";
import {
  getCurrentYear,
  add,
  isWithinRange,
  isDateBefore,
  isSameDay,
} from "../dateUtils"; // Replace with your file path
import { DATE_UNIT_TYPES } from "../constants"; // Replace with your file path

describe("Date Utils", () => {
  describe("getCurrentYear", () => {
    it("should return the current year", () => {
      const expectedYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(expectedYear);
    });
  });

  describe("add", () => {
    it("should add days to a date by default", () => {
      const initialDate = new Date("2025-01-01");
      const result = add(initialDate, 5, DATE_UNIT_TYPES.DAYS); // Add 5 days
      const expectedDate = new Date("2025-01-06");
      expect(result).toEqual(expectedDate);
    });

    it("should add months to a date when type is MONTHS", () => {
      const initialDate = new Date("2025-01-01");
      const result = add(initialDate, 2, DATE_UNIT_TYPES.MONTHS); // Add 2 months
      const expectedDate = new Date("2025-03-01");
      expect(result).toEqual(expectedDate);
    });

    it("should add years to a date when type is YEARS", () => {
      const initialDate = new Date("2025-01-01");
      const result = add(initialDate, 1, DATE_UNIT_TYPES.YEARS); // Add 1 year
      const expectedDate = new Date("2026-01-01");
      expect(result).toEqual(expectedDate);
    });
  });

  describe("isWithinRange", () => {
    it("should return true if the date is within the range", () => {
      const date = new Date("2025-01-15");
      const from = "2025-01-01";
      const to = "2025-01-31";
      expect(isWithinRange(date, from, to)).toBe(true);
    });

    it("should return false if the date is outside the range", () => {
      const date = new Date("2025-02-01");
      const from = "2025-01-01";
      const to = "2025-01-31";
      expect(isWithinRange(date, from, to)).toBe(false);
    });
  });

  describe("isDateBefore", () => {
    it("should return true if the date is before the comparison date", () => {
      const date = new Date("2025-01-01");
      const compareDate = new Date("2025-01-10");
      expect(isDateBefore(date, compareDate)).toBe(true);
    });

    it("should return false if the date is not before the comparison date", () => {
      const date = new Date("2025-01-15");
      const compareDate = new Date("2025-01-10");
      expect(isDateBefore(date, compareDate)).toBe(false);
    });
  });

  describe("isSameDay", () => {
    it("should return true if both dates are the same day", () => {
      const date = new Date("2025-01-15");
      const compareDate = new Date("2025-01-15");
      expect(isSameDay(date, compareDate)).toBe(true);
    });

    it("should return false if the dates are not the same day", () => {
      const date = new Date("2025-01-20");
      const compareDate = new Date("2025-01-18");
      expect(isSameDay(date, compareDate)).toBe(false);
    });
  });
});
