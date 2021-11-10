import { color } from './color.styles';
import { globals } from './globals.styles';
import { createEnglobaMaterialTheme } from '../../styles';

// create material engloba theme
const fontFamily = ['Poppins', 'Roboto'].join(',');
const theme = createEnglobaMaterialTheme(color, globals, fontFamily, {
	props: {
		MuiCheckbox: {
			color: 'primary',
		},

		MuiTableRow: {
			hover: {
				'&:hover': {
					backgroundColor: 'rgba(33, 150, 243, 0.25) !important',
				},
			},
		},
	},
});

export default theme;
