import { makeStyles } from '@material-ui/core/styles';

const slydeStyle = {
	top: '20px',
	width: '0.5px',
	height: '45%',
	content: '""',
	position: 'absolute',
};

export const useTabsStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& .MuiTab-wrapper':{
			textTransform: 'none'
		}
	},
	tabs: { width: '100%' },
	flexTab: { flex: 1 },
	tab: { height: '4rem', paddingLeft: '1rem', paddingRight: '1rem' },
	addButton: {
		border: 'none !important',
	},
	deleteIconContainer: {
		width: 'auto',
		padding: 0,
	},
	deleteIconWrapper: {
		flexDirection: 'row-reverse',
		'& .MuiSvgIcon-root': {
			marginLeft: '0.5rem !important',
			marginRight: '0 !important',
		},
	},
	dynamicTab: {
		'&:after': {
			...slydeStyle,
			left: '0',
			backgroundColor: 'rgba(0, 0, 0, 0.54)',
		},
	},
	withDot: {
		paddingRight: '2rem',
		'&:before': {
			top: '30px',
			width: '7px',
			left: '88%',
			height: '8px',
			borderRadius: '100%',
			content: '""',
			position: 'absolute',
			backgroundColor: theme.palette.primary.main,
		},
	},
}));
