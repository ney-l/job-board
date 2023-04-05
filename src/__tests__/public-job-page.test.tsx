import PublicJobPage, {
  getServerSideProps,
} from '@/pages/organizations/[orgId]/jobs/[jobId]';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

const job = testData.jobs[0];
const org = testData.organizations[0];

describe('Public Job Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        jobId: job.id,
        orgId: org.id,
      },
    } as any);
    expect(props.job).toEqual(job);
    expect(props.org).toEqual(org);
  });

  it('should render the job details', async () => {
    appRender(<PublicJobPage org={org} job={job} />);

    const jobPosition = screen.getByRole('heading', {
      name: job.position,
    });
    const info = screen.getByText(job.info);
    expect(jobPosition).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  it('should render the not found message if the data does not exist', async () => {
    const { rerender } = appRender(
      <PublicJobPage org={null} job={null} />
    );
    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });
    rerender(<PublicJobPage org={org} job={null} />);

    expect(notFoundMessage).toBeInTheDocument();

    rerender(<PublicJobPage org={null} job={job} />);
    expect(notFoundMessage).toBeInTheDocument();
    rerender(
      <PublicJobPage
        org={org}
        job={{
          ...job,
          orgId:
            'SOME_ID_THAT_DOES_NOT_MATCH_THE_ORG_ID_ON_THE_JOB_OBJECT',
        }}
      />
    );
    expect(notFoundMessage).toBeInTheDocument();
  });
});
