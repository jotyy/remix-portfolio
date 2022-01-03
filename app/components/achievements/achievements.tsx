import { Box, Heading, Link, LinkProps, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaTools } from 'react-icons/fa';
import {
  FiBarChart2,
  FiEdit2,
  FiHome,
  FiPackage,
  FiUsers
} from 'react-icons/fi';
import { GiLovers } from 'react-icons/gi';
import { Link as RemixLink } from 'remix';
import Header from '~/components/layout/header';
import { PageSlideFade } from '~/components/ui/page-transitions';
import { useLinkColor } from '~/components/ui/theme';
import { TimelineItem } from './Timeline';

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <RemixLink to={url}>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </RemixLink>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <RemixLink to={url}>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </RemixLink>
  );
};

const Achievements = () => {
  const linkColor = useLinkColor();

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={FaTools}>
              Refactor this website using{` `}
              <InternalLink
                color={linkColor}
                url="https://remix.run/"
                text={`Remix`}
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiPackage}>
              Published my first post on this website{` `}
              <InternalLink color={linkColor} url="/blog" text={`Blog`} />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              Collected 6k+ post views and 70+ total reactions on{` `}
              <ExternalLink
                color={linkColor}
                url="https://www.jianshu.com/u/a83fbf0ddc76"
                text={`Jianshu.com`}
                target="_blank"
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{` `}
              <ExternalLink
                color={linkColor}
                url="https://github.com/jotyy?tab=repositories"
                text={`3 open-source repositories`}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Built my portfolio website with React and ChakraUI,{` `}
              <ExternalLink
                color={linkColor}
                url="https://github.com/jotyy/portfolio"
                text={`source on Github`}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>
          <Box>
            <TimelineItem icon={GiLovers}>Became a dad ❤️</TimelineItem>
            <TimelineItem icon={FiUsers}>Became a husband 🤵</TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
