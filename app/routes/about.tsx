import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from '~/components/ui/page-transitions';
import { MotionBox } from '~/components/ui/motion';
import { companies, institutes } from '~/data/data';
import Header from '~/components/layout/header';
import PageLayout from '~/components/layout/pageLayout';
import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Tags } from '~/components/ui/Tags';
import { Company, Institute } from 'types';

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt?: string;
}

const TURQUOISE = `#06b6d4`;

export const loader = () => {
  return {
    companies,
    institutes,
  };
};

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode, alt } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: `lg` }}
        bg={useColorModeValue(`white`, `gray.800`)}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={`/assets/images/placeholder.png`}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={[`none`, `none`, `flex`, `flex`]}
              >
                <Tags
                  tags={skills}
                  interactive={false}
                  tagProps={{
                    colorScheme: `gray`,
                    padding: `0 3px`,
                    size: `sm`,
                  }}
                />
              </Stack>
            </Stack>
          </Flex>
          <Stack display={[`none`, `none`, `flex`, `flex`]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={[`flex`, `flex`, `none`, `none`]}
        >
          <Tags
            tags={skills}
            interactive={false}
            tagProps={{
              colorScheme: `gray`,
              padding: `0 3px`,
              size: `sm`,
            }}
          />
        </Stack>
      </Box>
    </CardTransition>
  );
};

const About = () => {
  const { companies, institutes } = useLoaderData();
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      title="About"
      description="My educational and professional journey so far"
    >
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {companies.map((company: Company, index: number) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Education
              </Header>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute: Institute, index: number) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `About | Jotyy` };
};

export default About;
