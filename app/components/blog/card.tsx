import {
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'remix';
import { Post } from 'types';
import { CardTransition } from '../ui/page-transitions';
import { Tags } from '../ui/Tags';
import { useLinkColor } from '../ui/theme';

interface IProps {
  post: Post;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue('gray.500', 'gray.200');

  return (
    <CardTransition>
      <VStack
        spacing={1}
        p={4}
        _hover={{ shadow: 'md', textDecoration: 'none' }}
        borderWidth="1px"
        rounded="md"
        bg={useColorModeValue('white', 'gray.800')}
        align="left"
      >
        <Heading fontSize="lg">
          <Link to={post.slug}>
            <Text color={linkColor}>{post.title}</Text>
          </Link>
        </Heading>
        <HStack>
          <Text fontSize="sm" fontWeight="600" color={textColor}>
            {dayjs(post.published_at).format('D MMMM YYYY')}
          </Text>
          <HStack spacing={1} alignItems="center">
            <Tags
              tags={post.tags}
              interactive={false}
              tagProps={{
                padding: '0 3px',
                size: 'sm',
              }}
            />
          </HStack>
        </HStack>
        <Text fontSize="md" noOfLines={1} color={textColor}>
          {post.description}
        </Text>
      </VStack>
    </CardTransition>
  );
};

export default PostCard;
