import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { LoginForm } from '@/features/auth';
import { AuthLayout } from '@/layouts';

const LoginPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    router.replace(redirect || '/dashboard/jobs');
  };

  return (
    <>
      <Seo title="Log In" />
      <LoginForm onSuccess={onSuccess} />
    </>
  );
};

LoginPage.getLayout = (page: ReactElement) => (
  <AuthLayout title="Log In">{page}</AuthLayout>
);

export default LoginPage;
