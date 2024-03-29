import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactElement, ReactNode } from 'react';

import { CONSTANTS } from '@/constants';
import { MSWWrapperProps } from '@/lib/msw';
import { AppProvider } from '@/providers/app';

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import('@/lib/msw').then(({ MSWWrapper }) => MSWWrapper)
);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(
    <Component {...pageProps} />
  );

  return (
    <AppProvider>
      {CONSTANTS.API_MOCKING ? (
        <MSWWrapper>{pageContent}</MSWWrapper>
      ) : (
        pageContent
      )}
    </AppProvider>
  );
}

export default App;
