import { makeStyles } from '@material-ui/core/styles';

export const useDialogModalStyles = makeStyles((theme) => ({
	dialogContent: {
		overflow: 'initial',
	},
	actions: {
		padding: '24px',
	},
	dialog: {
		minWidth: '24rem',
	},
}));
