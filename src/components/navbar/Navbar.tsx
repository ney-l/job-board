import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Spacer,
  HStack,
  Button,
} from '@chakra-ui/react';

import { CONSTANTS } from '@/constants';

import { Link } from '../link';

export type NavbarProps = {
  logout: {
    submit: () => void;
    isLoading: boolean;
  };
};

export const Navbar = ({ logout }: NavbarProps) => {
  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Box p="2">
            <Link variant="solid" href="/">
              {CONSTANTS.BRAND_NAME}
            </Link>
          </Box>
          <Spacer />
          <HStack spacing="1">
            <Link
              icon={<InfoOutlineIcon />}
              variant="solid"
              href="/dashboard/jobs"
            >
              Jobs
            </Link>
          </HStack>
          <HStack>
            <Button
              isDisabled={logout.isLoading}
              isLoading={logout.isLoading}
              variant="outline"
              onClick={() => logout.submit()}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
