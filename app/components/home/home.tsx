import {
  Avatar,
  Box,
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Header from '../layout/header';
import { MotionBox, MotionFlex } from '../ui/motion';
import { Link as RemixLink } from 'remix';
import { useLinkColor } from '../ui/theme';
import Projects from './projects';
import { Project } from 'types';

const ANIMATION_DURATION = 0.5;
const ORANGE = `#ff9400`;

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  const linkColor = useLinkColor();
  return (
    <Flex direction="column" align="center">
      <Box></Box>
      <Flex direction={[`column`, `column`, `row`]}>
        <MotionBox
          opacity="0"
          initial={{ translateX: -150, opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, `auto`]}
        >
          <Avatar
            size={`2xl`}
            src={`https://avatars.githubusercontent.com/u/30037764?v=4`}
          />
        </MotionBox>
        <MotionFlex
          ml={[`auto`, `auto`, 16]}
          m={[`auto`, `initial`]}
          w={[`90%`, `85%`, `80%`]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0}>
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{` `}
            <Box as="strong" fontWeight="600">
              Jotyy
            </Box>
            {` `}
            and I&apos;m a{` `}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer and
            </Box>
            {` `}
            <Box as="span" whiteSpace="nowrap">
              an blockchain lover&nbsp;
            </Box>
            from{` `}
            <Box as="span" whiteSpace="nowrap">
              CN
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I&apos;m
            working on and share what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor="#53c8c4"
            color={`whatsapp`}
            _hover={{ shadow: `lg` }}
            backgroundColor={useColorModeValue(`gray.100`, `#1e2533`)}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              {/* <ListItem>
                <NextLink href={`/open-source`} passHref>
                  <Link color={linkColor}>
                    Live/Local Github Repos
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Link>
                </NextLink>
              </ListItem> */}
              <ListItem>
                <RemixLink to={`/tech-stack`}>
                  <Link color={linkColor}>Tech Stack</Link>
                </RemixLink>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
