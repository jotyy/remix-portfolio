import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { colors } from './foundations/colors';
import { mergeWith } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';
// Re-exports
export { useLinkColor, accentKeys } from './foundations/colors';
export type { ColorKeys } from './foundations/colors';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

export const extendedTheme = extendTheme({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode(`gray.700`, `whiteAlpha.900`)(props),
        bg: mode(`gray.50`, `gray.900`)(props),
        bgImage: mode(
          'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
          'none',
        )(props),
        bgRepeat: 'no-repeat',
        fontSize: `1.2em`,
        '.deleted': {
          color: `#ff8383 !important`,
          fontStyle: `normal !important`,
        },
        '.inserted': {
          color: `#b5f4a5 !important`,
          fontStyle: `normal !important`,
        },
      },
      a: {
        color: mode(`blue.500`, `blue.200`)(props),
        transition: `color 0.15s`,
        transitionTimingFunction: `ease-out`,
        fontWeight: `500`,
        _hover: {
          color: mode(`blue.600`, `blue.300`)(props),
        },
      },
    }),
  },
  components: {
    Popover: {
      parts: [`popper`],
      baseStyle: (props: any) => ({
        popper: {
          zIndex: 10,
          maxW: `xs`,
          // maxW: props.width ? props.width : 'xs',
          w: props.width,
        },
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: `500`,
        rounded: `xl`,
      },
    },
    Tag: {
      baseStyle: {
        rounded: `lg`,
      },
    },
    textarea: {
      baseStyle: {
        background: `green.300`,
      },
    },
    Link: {
      baseStyle: {
        fontWeight: `inherit`,
        _hover: {
          textDecoration: `none`,
        },
        _focus: {
          boxShadow: `none`,
        },
      },
      variants: {
        text: {
          color: `blue.400`,
          transition: `color 0.15s`,
          transitionTimingFunction: `ease-out`,
          fontWeight: `500`,
          _hover: {
            color: `blue.300`,
          },
        },
        gradient: {
          bgGradient: `linear(to-br, blue.400,blue.300)`,
          bgClip: `text`,
          fontWeight: `500`,
          _hover: {
            bgGradient: `linear(to-br, blue.500,blue.300)`,
            bgClip: `text`,
          },
        },
      },
    },
  },
});

export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  if (type === `rails` || type === `ruby`) {
    return `red`;
  } else if (type === `react`) {
    return `cyan`;
  } else if (type === `javascript`) {
    return `yellow`;
  } else if (type === `typescript` || type === `tailwindcss`) {
    return `blue`;
  } else if (type === `chakraui` || type === `css`) {
    return `teal`;
  }
};

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme(
    {
      ...extendedTheme,
      colors,
    },
    withProse(),
  );
  return mergeWith(theme, overrides);
}

export const theme = makeTheme();
