export const CONSTANTS = {
  BRAND_NAME: 'Job Board',
  IS_SERVER: typeof window === 'undefined',
  IS_BROWSER: typeof window !== 'undefined',

  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_TEST: process.env.NODE_ENV === 'test',

  API_MOCKING:
    process.env.NEXT_PUBLIC_API_MOCKING === 'true',
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
};
