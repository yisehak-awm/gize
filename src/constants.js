// The maaping array contains 13 items, one for each Ethiopian month. Each object in the array has an Id that is the sequencial number of the month in the Ethiopian calendar. The duration array specifies which of the dates in the Gregorian calendar falls on the particular month. For example an item {id: 9, start: 11, end: 30} means the dates 11 through 30 on the 9th month (September) fall on this month.

// NON_LEAP_YEAR_MAPPING holds mapping information for non-leap years in the Ethiopian calendar
export const NON_LEAP_YEAR_MAPPING = [
  {
    id: 1,
    range: [
      { id: 9, start: 11, end: 30 },
      { id: 10, start: 1, end: 10 },
    ],
  },
  {
    id: 2,
    range: [
      { id: 10, start: 11, end: 31 },
      { id: 11, start: 1, end: 9 },
    ],
  },
  {
    id: 3,
    range: [
      { id: 11, start: 10, end: 30 },
      { id: 12, start: 1, end: 9 },
    ],
  },
  {
    id: 4,
    range: [
      { id: 12, start: 10, end: 31 },
      { id: 1, start: 1, end: 8 },
    ],
  },
  {
    id: 5,
    range: [
      { id: 1, start: 9, end: 31 },
      { id: 2, start: 1, end: 7 },
    ],
  },
  {
    id: 6,
    range: [
      { id: 2, start: 8, end: 28 },
      { id: 3, start: 1, end: 9 },
    ],
  },
  {
    id: 7,
    range: [
      { id: 3, start: 10, end: 31 },
      { id: 4, start: 1, end: 8 },
    ],
  },
  {
    id: 8,
    range: [
      { id: 4, start: 9, end: 30 },
      { id: 5, start: 1, end: 8 },
    ],
  },
  {
    id: 9,
    range: [
      { id: 5, start: 9, end: 31 },
      { id: 6, start: 1, end: 7 },
    ],
  },
  {
    id: 10,
    range: [
      { id: 6, start: 8, end: 30 },
      { id: 7, start: 1, end: 7 },
    ],
  },
  {
    id: 11,
    range: [
      { id: 7, start: 8, end: 31 },
      { id: 8, start: 1, end: 6 },
    ],
  },
  {
    id: 12,
    range: [
      { id: 8, start: 7, end: 31 },
      { id: 9, start: 1, end: 5 },
    ],
  },
  {
    id: 13,
    range: [{ id: 9, start: 6, end: 10 }],
  },
];

// LEAP_YEAR_MAPPING holds mapping information for leap years in the Ethiopian calendar. On these years, Puagme (the 13th month) has a 6th day.
export const LEAP_YEAR_MAPPING = [
  {
    id: 1,
    range: [
      { id: 9, start: 11, end: 30 },
      { id: 10, start: 1, end: 10 },
    ],
  },
  {
    id: 2,
    range: [
      { id: 10, start: 11, end: 31 },
      { id: 11, start: 1, end: 9 },
    ],
  },
  {
    id: 3,
    range: [
      { id: 11, start: 10, end: 30 },
      { id: 12, start: 1, end: 9 },
    ],
  },
  {
    id: 4,
    range: [
      { id: 12, start: 10, end: 31 },
      { id: 1, start: 1, end: 8 },
    ],
  },
  {
    id: 5,
    range: [
      { id: 1, start: 9, end: 31 },
      { id: 2, start: 1, end: 7 },
    ],
  },
  {
    id: 6,
    range: [
      { id: 2, start: 8, end: 28 },
      { id: 3, start: 1, end: 9 },
    ],
  },
  {
    id: 7,
    range: [
      { id: 3, start: 10, end: 31 },
      { id: 4, start: 1, end: 8 },
    ],
  },
  {
    id: 8,
    range: [
      { id: 4, start: 9, end: 30 },
      { id: 5, start: 1, end: 8 },
    ],
  },
  {
    id: 9,
    range: [
      { id: 5, start: 9, end: 31 },
      { id: 6, start: 1, end: 7 },
    ],
  },
  {
    id: 10,
    range: [
      { id: 6, start: 8, end: 30 },
      { id: 7, start: 1, end: 7 },
    ],
  },
  {
    id: 11,
    range: [
      { id: 7, start: 8, end: 31 },
      { id: 8, start: 1, end: 6 },
    ],
  },
  {
    id: 12,
    range: [
      { id: 8, start: 7, end: 31 },
      { id: 9, start: 1, end: 5 },
    ],
  },
  {
    id: 13,
    range: [{ id: 9, start: 6, end: 11 }],
  },
];

// POST_LEAP_YEAR_MAPPING holds mapping information for years in the Ethiopian calendar that follow a leap year. On these years, the corresponding month of February in the gregorian calendar has a 29th day.
export const POST_LEAP_YEAR_MAPPING = [
  {
    id: 1,
    range: [
      { id: 9, start: 12, end: 30 },
      { id: 10, start: 1, end: 11 },
    ],
  },
  {
    id: 2,
    range: [
      { id: 10, start: 12, end: 31 },
      { id: 11, start: 1, end: 10 },
    ],
  },
  {
    id: 3,
    range: [
      { id: 11, start: 11, end: 30 },
      { id: 12, start: 1, end: 10 },
    ],
  },
  {
    id: 4,
    range: [
      { id: 12, start: 11, end: 31 },
      { id: 1, start: 1, end: 9 },
    ],
  },
  {
    id: 5,
    range: [
      { id: 1, start: 10, end: 31 },
      { id: 2, start: 1, end: 8 },
    ],
  },
  {
    id: 6,
    range: [
      { id: 2, start: 9, end: 29 },
      { id: 3, start: 1, end: 9 },
    ],
  },
  {
    id: 7,
    range: [
      { id: 3, start: 10, end: 31 },
      { id: 4, start: 1, end: 8 },
    ],
  },
  {
    id: 8,
    range: [
      { id: 4, start: 9, end: 30 },
      { id: 5, start: 1, end: 8 },
    ],
  },
  {
    id: 9,
    range: [
      { id: 5, start: 9, end: 31 },
      { id: 6, start: 1, end: 7 },
    ],
  },
  {
    id: 10,
    range: [
      { id: 6, start: 8, end: 30 },
      { id: 7, start: 1, end: 7 },
    ],
  },
  {
    id: 11,
    range: [
      { id: 7, start: 8, end: 31 },
      { id: 8, start: 1, end: 6 },
    ],
  },
  {
    id: 12,
    range: [
      { id: 8, start: 7, end: 31 },
      { id: 9, start: 1, end: 5 },
    ],
  },
  {
    id: 13,
    range: [{ id: 9, start: 6, end: 10 }],
  },
];
