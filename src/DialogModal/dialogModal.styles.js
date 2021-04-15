import { makeStyles } from '@material-ui/core/styles';

export const useDialogModalStyles = makeStyles((theme) => ({
	dialogContent: {
		overflow: 'initial',
		padding: '24px',
	},
	actions: {
		padding: '0 24px 24px 24px',
	},
	title: {
		padding: '16px 24px 0 24px',
	},
}));
