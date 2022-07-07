import { makeStyles } from '@material-ui/core/styles';

export const useAvatarStyles = makeStyles((theme) => ({
	avatarIcon: {
		color: theme.palette.secondary.light,
		backgroundColor: theme.palette.primary.dark,
	},
	avatarIconBig: {
		width: '5rem',
		height: '5rem',
		fontSize: theme.font.size.xxxl
	},
	grow: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	signOutButton: {
		height: '3.4375rem',
	},
	text: {
		color: theme.palette.basic.semidark,
	},
	textLeft: {
		marginLeft: '1rem',
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '16rem',
		padding: 0,
		outline: 'none',
	},
	details: {
		display: 'flex',
	},
	content: {
		flex: '1 0 auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	cover: {
		width: 151,
	},
}));
