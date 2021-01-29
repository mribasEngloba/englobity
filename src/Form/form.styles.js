import { makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles((theme) => ({
	hiddenSubmit: {
		position: 'absolute',
		left: ' -9999px',
		width: ' 1px',
		height: '1px',
	},
	summary: {
		marginBottom: '1rem',
	},
}));
