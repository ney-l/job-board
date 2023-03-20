import { extendTheme } from '@chakra-ui/react';

const semanticTokens = {
  colors: {
    primary: 'purple.900',
    primaryAccent: 'gray.50',
  },
};

const styles = {
  global: {
    'html,body': {
      height: '100%',
      bg: 'gray.50',
    },
    '#__next': {
      height: '100%',
      bg: 'gray.100',
    },
  },
};

export const theme = extendTheme({
  semanticTokens,
  styles,
});
