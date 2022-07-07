import { makeStyles } from '@material-ui/core/styles';
const defauldButton = (font) => ({
  height: '2.4rem',
  padding: '0rem 1rem',
  // minWidth: '6.25rem',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: font.weight.seminormal,
  fontSize: font.size.s
});

export const usButtonStyles = makeStyles((theme) => ({
  primary: {
    ...defauldButton(theme.font),
    background: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      cursor: 'not-allowed !important',
      background: theme.palette.buttons.disabled.background,
      color: theme.palette.buttons.disabled.text,
    },
    textTransform: 'none',
  },
  secondary: {
    ...defauldButton(theme.font),
    border: `1.25px solid ${theme.palette.primary.main}`,
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      border: `1.25px solid ${theme.palette.primary.dark}`,
      color: theme.palette.primary.dark,
    },
    '&:disabled': {
      background: theme.palette.buttons.disabled.background,
      color: theme.palette.buttons.disabled.text,
    },
    textTransform: 'none',
  },
  wrapperButton: {
    display: 'flex',
    alignItems: 'center',
  },
  textButton: {
    margin: 0,
    marginLeft: '0.2rem',
    marginTop: '0.1rem',
    marginRight: '0.2rem',
    whiteSpace: 'nowrap',
  },
}));
