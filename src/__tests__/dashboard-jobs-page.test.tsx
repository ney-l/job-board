import DashboardJobsPage from '@/pages/dashboard/jobs';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

const testUser = getUser();

jest.mock('@/features/auth', () => ({
  useUser: () => ({ data: testUser }),
}));

describe('Dashboard Jobs Page', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the jobs list', async () => {
    await appRender(<DashboardJobsPage />);

    await waitForLoadingToFinish();

    expect(screen.getByText(/jobs/i)).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: testData.jobs.filter(
        (job) => job.orgId === testUser.orgId
      ),
      columns: ['position', 'department', 'location'],
    });
  });
});
