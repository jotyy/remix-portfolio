import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsBook, BsCheckCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as RemixLink, useLocation } from 'remix';
import { AccentPicker } from '../ui/Accent';
import { ColorModeSwitcher } from '../ui/ColorModeSwitcher';
import { useLinkColor } from '../ui/theme';

const webLinks = [
  { name: `About`, path: `/about` },
  { name: `Blog`, path: `/blog` },
];

const mobileLinks = [
  { name: `About`, path: `/about` },
  // { name: `Open Source`, path: `/open-source` },
  { name: `Blog`, path: `/blog` },
  { name: `Tech Stack`, path: `/tech-stack` },
  { name: `Achievements`, path: `/achievements` },
];

const dropdownLinks = [
  { name: `Tech Stack`, path: `/tech-stack` },
  // { name: `Open Source`, path: `/open-source` },
  // { name: `Developer Story`, path: `/developer-story` },
  { name: `Achievements`, path: `/achievements` },
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const location = useLocation();
  const link = {
    bg: useColorModeValue(`gray.200`, `gray.900`),
    color: useColorModeValue(`blue.500`, `blue.200`),
  };

  return (
    <Link
      px={2}
      py={1}
      as={RemixLink}
      to={props.path}
      rounded={`md`}
      _hover={{
        textDecoration: `none`,
        bg: link.bg,
      }}
      bg={location.pathname === props.path ? link.bg : `transparent`}
      color={location.pathname === props.path ? link.color : `inherit`}
      onClick={() => props.onClose()}
    >
      {props.name}
    </Link>
  );
};

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

const MenuLink = (props: MenuLinkProps) => {
  const iconsObj = {
    '/tech-stack': (
      <Icon as={AiTwotoneThunderbolt} size={18} color={props.color} />
    ),
    '/open-source': <Icon as={BsBook} size={18} color={props.color} />,
    // '/developer-story': <Icon as={MdTimeline} size={18} color={props.color} />,
    '/achievements': <Icon as={BsCheckCircle} size={18} color={props.color} />,
  };

  return (
    <Link as={RemixLink} to={props.path} onClick={() => props.onClose}>
      <MenuItem
        color={props.rPath === props.path ? props.color : undefined}
        bg={props.rPath === props.path ? props.bg : undefined}
      >
        <HStack>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore:next-line */}
          {iconsObj[props.path]}
          <Text>{props.name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};

export default function TopNav() {
  const linkColor = useLinkColor();
  const router = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue(`gray.200`, `gray.900`),
    color: useColorModeValue(`blue.500`, `blue.200`),
  };

  return (
    <>
      <Box
        bg={useColorModeValue(`whiteAlpha.400`, `grayAlpha.700`)}
        backdropFilter="auto"
        backdropBlur="10px"
        px={4}
        boxShadow={`lg`}
        position="fixed"
        width="100%"
        zIndex={55}
      >
        <Flex
          h={16}
          alignItems={`center`}
          justifyContent={`space-between`}
          w={[`90%`, `85%`, `80%`]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={`Open Menu`}
            display={[`inherit`, `inherit`, `none`]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={`center`}>
            <Box>
              <RemixLink to="/">
                <Avatar
                  as={Link}
                  size={`sm`}
                  alt="avatar"
                  src={`https://avatars.githubusercontent.com/u/30037764?v=4`}
                />
              </RemixLink>
            </Box>
            <HStack
              as={`nav`}
              spacing={4}
              display={{ base: `none`, md: `flex` }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              <Menu autoSelect={false} isLazy>
                {({ onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      px={2}
                      py={1.5}
                      fontSize={`1em`}
                      rounded={`md`}
                      height={`auto `}
                      _hover={menuProps}
                      _expanded={menuProps}
                      _focus={{ boxShadow: `none` }}
                      rightIcon={<BiChevronDown size={18} />}
                    >
                      Links
                    </MenuButton>
                    <MenuList zIndex={5}>
                      {dropdownLinks.map((link, index) => (
                        <MenuLink
                          key={index}
                          path={link.path}
                          name={link.name}
                          onClose={onClose}
                          color={menuProps.color}
                          bg={menuProps.bg}
                          rPath={router.pathname}
                        />
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={`center`}>
            <AccentPicker
              aria-label="Accent Color Picker"
              variant="ghost"
              zIndex={1}
              color={linkColor}
              mr={2}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={[`100%`, `100%`, `80%`]}
            maxW={800}
            display={[`inherit`, `inherit`, `none`]}
          >
            <Stack as={`nav`} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
