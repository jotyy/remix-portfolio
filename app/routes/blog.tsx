import {
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { MetaFunction } from '@remix-run/react/routeModules';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { json } from '@remix-run/node';
import { Post } from 'types';
import PostCard from '~/components/blog/card';
import Header from '~/components/layout/header';
import PageLayout from '~/components/layout/pageLayout';
import { MotionBox } from '~/components/ui/motion';
import {
  PageSlideFade,
  StaggerChildren,
} from '~/components/ui/page-transitions';
import * as helloMdx from './posts/hello-world.mdx';
import { useLoaderData } from '@remix-run/react';

const TURQUOSISE = '#06b6d4';

dayjs.extend(localizedFormat);

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes,
  };
}

type LoaderData = {
  posts: Post[];
};

export const loader = () => {
  return json<LoaderData>({
    posts: [postFromModule(helloMdx)],
  });
};

const Blog = () => {
  const { posts } = useLoaderData<LoaderData>();
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post: Post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageLayout title="Blog">
      <PageSlideFade>
        <Heading>
          <Header underlineColor={TURQUOSISE} mt={0} mb={6}>
            Featured Articles
          </Header>
        </Heading>
        <InputGroup maxW="30rem">
          <Input
            placeholder="Search articles"
            onChange={(e) => setSearch(e.target.value)}
            background={useColorModeValue('gray.100', '#1e2533')}
          />
          <InputRightElement>
            <Icon as={BiSearch} w={6} h={6} />
          </InputRightElement>
        </InputGroup>
        <StaggerChildren>
          <Stack spacing={4} mt={6}>
            <AnimatePresence>
              {filteredPosts.map((post: Post, i: number) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: (i) => ({
                      opacity: 0,
                      y: -30 * i,
                    }),
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                  }}
                  custom={i}
                  key={post.slug}
                >
                  <MotionBox whileHover={{ y: -5 }} key={i}>
                    <PostCard post={post} />
                  </MotionBox>
                </motion.div>
              ))}
            </AnimatePresence>
          </Stack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `Blog | Jotyy` };
};

export default Blog;
