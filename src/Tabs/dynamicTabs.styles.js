import { makeStyles } from '@material-ui/core/styles';

export const useTabsStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	tabs: {
		width: '100%',
	},
	content: { width: '100%' },
	tab: { height: '4rem', paddingLeft: '1rem', paddingRight: '1rem' },
	addButton: {
		border: 'none !important',
	},
	withDot: {
		paddingRight: '2rem',
		'&:before': {
			top: '30px',
			right: '11px',
			width: '7px',
			height: '8px',
			borderRadius: '100%',
			content: '""',
			position: 'absolute',
			backgroundColor: theme.palette.primary.main,
		},
	},
	header: {
		border: 'none !important',
		height: '4rem',
		marginBottom: '1rem',
	},
}));
