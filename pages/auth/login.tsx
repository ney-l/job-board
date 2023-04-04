import { useRouter } from 'next/router';

import { Seo } from '@/components/seo';
import { LoginForm } from '@/features/auth';

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

export default LoginPage;
