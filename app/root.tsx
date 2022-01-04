import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { AccentGlobal } from '~/components/ui/Accent';
import AppLayout from '~/components/layout/appLayout';
import { AnimatePresence } from 'framer-motion';
import { theme } from '~/components/ui/theme';

export const meta: MetaFunction = () => {
  return { title: `Jotyy - FullStack Developer` };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme} resetCSS={true}>
          <AccentGlobal />
          <AppLayout>
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Box>
                <Outlet />
              </Box>
            </AnimatePresence>
          </AppLayout>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
