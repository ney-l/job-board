const CONSTANTS = {
  BRAND_NAME: 'Job Board',
  IS_SERVER: typeof window === 'undefined',
  IS_BROWSER: typeof window !== 'undefined',

  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  API_MOCKING:
    process.env.NEXT_PUBLIC_API_MOCKING === 'true',
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
};

export default CONSTANTS;
