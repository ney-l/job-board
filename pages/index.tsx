import type { NextPage } from 'next';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { Seo } from '@/components/seo/seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Jobs Board" />
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>
    </>
  );
};

export default Home;
