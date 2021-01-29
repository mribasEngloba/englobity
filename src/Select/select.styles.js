import { makeStyles } from '@material-ui/core/styles';

export const useCustomSelectStyles = makeStyles((theme) => ({
	root: {
		minWidth: '13rem',
		display: 'flex',
	},
	customSelect: {
		'&& .MuiSelect-outlined': {
			display: 'flex',
			alignItems: 'center',
			height: '1.1875rem',
		},
	},
	icon: {
		minWidth: 0,
		marginRight: '0.5rem',
	},
}));
