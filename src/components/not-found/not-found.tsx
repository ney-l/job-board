import {
  Center,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

export type NotFoundProps = {
  imageUrl?: string;
};

export const NotFound = ({
  imageUrl = '/images/404.svg',
}: NotFoundProps) => (
  <Center color="gray.500" h="96" p="10">
    <VStack mt="20">
      <div>
        <Image
          src={imageUrl}
          alt="An illustration showing 404 page not found error"
          width={350}
          height={350}
        />
      </div>
      <Heading>Not Found</Heading>
    </VStack>
  </Center>
);
