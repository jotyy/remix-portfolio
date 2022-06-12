import { Box, ChakraProvider } from '@chakra-ui/react';
import { withEmotionCache } from '@emotion/react';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import AppLayout from '~/components/layout/appLayout';
import { AccentGlobal } from '~/components/ui/Accent';
import { theme } from '~/components/ui/theme';
import { ClientStyleContext, ServerStyleContext } from './context';

export const meta: MetaFunction = () => {
  return {
    charSet: 'utf-8',
    title: `Jotyy - FullStack Developer`,
    viewport: 'width=device-width, initial-scale=1',
  };
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  },
);

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
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
    </Document>
  );
}
