import {
  Box,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export interface TimelineItemProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = true,
  children,
  ...props
}) => {
  const color = useColorModeValue(`gray.700`, `gray.500`);

  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue(`gray.600`, `gray.500`)}
          opacity={useColorModeValue(0.07, 0.15)}
          sx={{}}
        />
        <Box
          as={icon}
          size="1.25rem"
          color={color}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={3} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};
