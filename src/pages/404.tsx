import { Box, Stack, VStack } from '@chakra-ui/react';

import { Link } from '@/components/link';
import { NotFound } from '@/components/not-found';

const NotFoundPage = () => (
  <>
    <Stack>
      <VStack>
        <NotFound />
      </VStack>
      <VStack>
        <Box mt="20">
          <Link href="/">Home</Link>
        </Box>
      </VStack>
    </Stack>
  </>
);

export default NotFoundPage;
