import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link } from '@/components/link';

export type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({
  children,
}: PublicLayoutProps) => (
  <Box maxW="container.lg" mx="auto" h="full">
    <Box minH="80%" mx="4">
      {children}
    </Box>
    <Box py="8" textAlign="center">
      Powered by <Link href="/">Job Board</Link>
    </Box>
  </Box>
);
