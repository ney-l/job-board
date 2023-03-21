import { Box, Stack } from '@chakra-ui/react';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

type CreateJobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({
  onSuccess,
}: CreateJobFormProps) => {
  const handleSubmit = () => onSuccess();
  return (
    <Box w="full">
      <Stack
        as="form"
        onSubmit={handleSubmit}
        w="full"
        spacing="8"
      >
        <InputField label="Position" />
        <InputField label="Department" />
        <InputField label="Location" />

        <InputField type="textarea" label="Info" />

        <Button
          isDisabled={false}
          isLoading={false}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
