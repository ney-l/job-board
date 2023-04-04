import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Illustration } from '@/components/hero';
import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo title="JobBoard" />

      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '6xl',
            }}
            lineHeight={'110%'}
          >
            Find Your{' '}
            <Text as={'span'} color={'orange.400'}>
              Dream Job{' '}
            </Text>
            Today
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Are you tired of endlessly scrolling through
            various job boards and websites, hoping to
            stumble upon your dream job? Look no further.
            Our app is designed to make the job search
            process simple and efficient.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link
              href={'/dashboard/jobs'}
              variant="solid"
            >
              Get Started
            </Link>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
