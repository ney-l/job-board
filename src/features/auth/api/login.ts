import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { AuthUser, LoginData } from '../types';

// api request
export const login = (
  data: LoginData
): Promise<{
  user: AuthUser;
}> => apiClient.post('/auth/login', data);

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

// hook to login
export const useLogin = ({
  onSuccess,
}: UseLoginOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['auth-user'], user);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
