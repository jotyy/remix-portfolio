import { MetaFunction } from 'remix';
import Achievements from '~/components/achievements/achievements';
import PageLayout from '~/components/layout/pageLayout';

const Index = () => {
  return (
    <PageLayout title="Achievements" keywords="My achievements">
      <Achievements />
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `Achivements | Jotyy` };
};

export default Index;
