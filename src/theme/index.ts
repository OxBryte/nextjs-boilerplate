import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#0A0F18', '#0A0F18')(props),
    },
  }),
};

const colors = {
  brand: {
    100: '#0A0F18',
    200: '#020915',
    300: '#0057FF',
    400: '#141F32',
    500: '#',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
  },
  brandbg: {
    100: '#EDEBFF',
  }
};

const fonts = {
  heading: `Josefin Sans, ${base.fonts.heading}`,
};

const components = {
  Button: {
    
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
