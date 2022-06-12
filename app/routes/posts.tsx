import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { Outlet } from '@remix-run/react';
import styles from 'highlight.js/styles/night-owl.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function Blog() {
  return (
    <Prose>
      <Outlet />
    </Prose>
  );
}
