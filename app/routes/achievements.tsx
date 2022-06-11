import { MetaFunction } from '@remix-run/node';
import Achievements from '~/components/achievements/achievements';
import PageLayout from '~/components/layout/pageLayout';

const Archievement = () => {
  return (
    <PageLayout title="Achievements" keywords="My achievements">
      <Achievements />
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `Achivements | Jotyy` };
};

export default Archievement;
