import { FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Jotyy. All Rights Reserved.`,
  author: {
    name: 'Jotyy',
    accounts: [
      {
        url: 'https://github.com/jotyy',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />,
      },
      {
        url: 'https://twitter.com/jotyy3',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />,
      },
      {
        url: 'https://dev.to/jotyy',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />,
      },
      {
        url: 'https://linkedin.com/in/jotyy',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        url: 'jotyy318@gmail.com',
        label: 'Mail jotyy',
        type: 'gray',
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
