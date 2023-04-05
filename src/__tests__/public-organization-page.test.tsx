import PublicOrganizationsPage, {
  getServerSideProps,
} from '@/pages/organizations/[orgId]';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
} from '@/testing/test-utils';

const org = testData.organizations[0];
const jobs = testData.jobs.filter(
  (job) => job.orgId === org.id
);

describe('Public Organization Page', () => {
  it('should use getServerSideProps that fetches and returns data', async () => {
    const { props } = await getServerSideProps({
      params: {
        orgId: org.id,
      },
    } as any);
    expect(props.org).toEqual(org);
    expect(props.jobs).toEqual(jobs);
  });

  it('should render the organization details', async () => {
    appRender(
      <PublicOrganizationsPage org={org} jobs={jobs} />
    );

    expect(
      screen.getByRole('heading', { name: org.name })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: org.email })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: org.phone,
      })
    ).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: jobs,
      columns: ['position', 'department', 'location'],
    });
  });

  it('should render the not found message if the organization is not found', async () => {
    appRender(
      <PublicOrganizationsPage org={null} jobs={[]} />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();
  });
});
