import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { CreateJobForm } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardCreateJobPage = () => {
  const { showNotification } = useNotifications();

  const router = useRouter();
  const onSuccess = () => {
    showNotification({
      type: 'success',
      title: 'Success 🎉',
      duration: 5000,
      message: 'Job created! ',
    });
    router.push(`/dashboard/jobs`);
  };
  return (
    <>
      <Seo title="Create Job" />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  );
};

DashboardCreateJobPage.getLayout = (
  page: ReactElement
) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardCreateJobPage;
