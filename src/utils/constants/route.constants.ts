export const ROUTE_NAMES = {
  HOME: '/',
  DUMMY: '/dummy',
} as const;

export type ROUTE_NAMES_TYPE = typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES];
