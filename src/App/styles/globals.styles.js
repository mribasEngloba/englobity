import { color } from './color.styles';

export const globals = {
  html: {
    fontSize: '16px' // 1rem = 16px,
  },
  body: {
    backgroundColor: color.secondary.main
  },
  '.MuiInputLabel-outlined': {
    backgroundColor: 'white',
    padding: '0 0.5rem 0 0.2rem'
  },
  '.MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    bottom: '-18px'
  },
  '#nprogress': {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: '9999',
    bar: {
      zIndex: '9999',

      backgroundColor: color.primary.main
    },
    peg: {
      zIndex: '9999',

      boxShadow: 'none'
    }
  }
};
