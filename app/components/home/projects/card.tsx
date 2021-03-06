import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
// import LazyImage from '~/components/ui/lazy-image';
import { useLinkColor } from '~/components/ui/theme';
import { useState } from 'react';
import { Tag } from '~/components/ui/Tags';

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
}) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue(`gray.500`, `gray.200`);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue(`white`, `gray.800`)}
        rounded="xl"
        borderWidth="1px"
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: `lg` }}
      >
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={(e) => e.stopPropagation}
                  color={linkColor}
                  isExternal
                >
                  {title}
                </Text>
                <HStack>
                  {technologies.map((tech, index) => (
                    <Tag
                      key={index}
                      name={tech}
                      mt="1px"
                      interactive={false}
                      mr="auto"
                    />
                  ))}
                </HStack>
              </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color="textColor" noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text fontSize="sm" color={textColor}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
