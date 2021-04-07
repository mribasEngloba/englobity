import { makeStyles } from '@material-ui/core/styles';
const defauldButton = (font) => ({
	height: '2.4rem',
	padding: '0rem 1rem',
	// minWidth: '6.25rem',
	borderRadius: '8px',
	fontStyle: 'normal',
	fontWeight: font.weight.seminormal,
	fontSize: font.size.s,
});

export const usButtonStyles = makeStyles((theme) => ({
	primary: {
		...defauldButton(theme.font),
		background: theme.palette.primary.main,
		color: theme.palette.secondary.light,
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
			boxShadow: `0px 0px 4px ${theme.palette.action.activeButton}`,
		},
		'&:disabled': {
			background: theme.palette.basic.brighter,
			color: theme.palette.secondary.light,
		},
		textTransform: 'capitalize',
	},
	secondary: {
		...defauldButton(theme.font),
		border: `1.25px solid ${theme.palette.primary.main}`,
		background: theme.palette.secondary.main,
		color: theme.palette.primary.main,
		'&:hover': {
			border: `1.25px solid ${theme.palette.primary.dark}`,
			boxShadow: `0px 0px 4px ${theme.palette.action.activeButton}`,
			color: theme.palette.primary.dark,
		},
		'&:disabled': {
			border: `1.25px solid ${theme.palette.basic.brighter}`,
			color: theme.palette.basic.brighter,
		},
		textTransform: 'capitalize',
	},
}));
