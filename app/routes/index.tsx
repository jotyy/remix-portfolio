import Home from '~/components/home/home';
import PageLayout from '~/components/layout/pageLayout';
import { projects } from '~/data/projects';

export const loader = () => {
  return projects;
};

export default function Index() {
  return (
    <PageLayout title="Jotyy - Full Stack Developer">
      <Home projects={projects} />
    </PageLayout>
  );
}
