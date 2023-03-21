import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link } from '@/components/link';
import { Navbar } from '@/components/navbar';
import { useUser } from '@/mock';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const user = useUser();
  const handleLogout = () =>
    console.log('@TODO: Log the user out!');

  return (
    <Box as="section" h="100vh" overflowY="auto">
      <Navbar onLogout={handleLogout} />
      <Container as="main" maxW="container.lg" py="12">
        {children}
      </Container>
      <Box py="8" textAlign="center">
        <Link href={`/organizations/${user.data?.orgId}`}>
          View Public Organization Page
        </Link>
      </Box>
    </Box>
  );
};
