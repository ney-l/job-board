import { MSWDevTools } from 'msw-devtools';
import { ReactNode } from 'react';

import { CONSTANTS } from '@/constants';
import { db, handlers } from '@/testing/mocks';

export type MSWWrapperProps = {
  children: ReactNode;
};

require('@/testing/mocks/initialize');

export const MSWWrapper = ({
  children,
}: MSWWrapperProps) => (
  <>
    {CONSTANTS.IS_DEVELOPMENT && (
      <MSWDevTools db={db} handlers={handlers} />
    )}
    {children}
  </>
);
