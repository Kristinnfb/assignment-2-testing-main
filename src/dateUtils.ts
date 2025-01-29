import { format, add as addFn } from 'date-fns';
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function add(date: Date, number: number, type = DATE_UNIT_TYPES.DAYS): Date {
  const duration: { days?: number; months?: number; years?: number } = {};

  if (type === DATE_UNIT_TYPES.DAYS) {
    duration.days = number;
  } else if (type === DATE_UNIT_TYPES.MONTHS) {
    duration.months = number;
  } else if (type === DATE_UNIT_TYPES.YEARS) {
    duration.years = number;
  }

  return addFn(date, duration);
}

export function isWithinRange(date: Date, from: string, to: string) : boolean {
  return date >= new Date(from) && date <= new Date(to);
}

export function isDateBefore(date: Date, compareDate: Date) : boolean {
  return date < compareDate;
}

export function isSameDay(date: Date, compareDate: Date) : boolean {
  return format(date, 'yyyy-MM-dd') === format(compareDate, 'yyyy-MM-dd');
}

