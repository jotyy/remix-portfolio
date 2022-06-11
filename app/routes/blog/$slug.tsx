import { Box, Heading, HStack, Tag, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { json, LoaderFunction, useLoaderData } from 'remix';
import PageLayout from '~/components/layout/pageLayout';
import { fadeInUp } from '~/components/ui/page-transitions';
import { getTagColor } from '~/components/ui/theme';
import { getPostData, Post } from '~/models/blog.server';

dayjs.extend(localizedFormat);

type LoaderData = {
  postData: Post;
};

export const loader: LoaderFunction = async ({ params }) => {
  const postData = await getPostData(params.slug ?? '');
  return json({
    postData,
  });
};

const BlogSlug = () => {
  const { postData } = useLoaderData<LoaderData>();
  return (
    <PageLayout title={postData.title}>
      <motion.div variants={fadeInUp}>
        <Heading as="h1" size="xl" mt="2" mb="2">
          {postData.title}
        </Heading>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HStack isInline flexDirection={['column', 'row', 'row']}>
          {postData.tags.map((tag) => (
            <Tag
              key={tag}
              size="md"
              padding="0 3px"
              colorScheme={getTagColor(tag)}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HStack mt="2" spacing={2} alignItems="left" justifyContent="left">
          <Text fontSize="xs">Published on</Text>
          <Text fontSize="xs" fontWeight="bold">
            {dayjs(postData.published_at).format('LL')}
          </Text>
        </HStack>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Box className="article">
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? '' }}
          />
        </Box>
      </motion.div>
    </PageLayout>
  );
};

export default BlogSlug;
