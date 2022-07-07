import { font } from './font.styles.js';
import { media, time } from './utils.styles.js';
import { components } from './components.styles.js';
import { createTheme } from '@material-ui/core/styles';

export function createEnglobaMaterialTheme(
	color,
	globals,
	fontFamily,
	options
) {
	return createTheme({
		...options,
		font,
		media,
		time,
		palette: color,
		typography: {
			fontFamily,
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'.MuiSkeleton-pulse': {
						transform: 'inherit !important',
					},
					'.Mui-disabled': {
						cursor: 'not-allowed !important',
					},
					'.MuiFormLabel-root': {
						color: color.basic.dark,
					},
					'.MuiOutlinedInput-notchedOutline': {
						borderColor: color.basic.dark,
					},
					...globals,
				},
			},
			MuiOutlinedInput: {
				...components.inputOutLine,
			},
			MuiInputLabel: {
				...components.inputLabel,
			},
			MuiAutocomplete: {
				...components.autoCompleteInput,
			},
			MuiChip: {
				...components.chips(color),
			},
			MuiAccordion: {
				...components.accordion,
			},
			MuiAppBar: {
				...components.tabs(color),
			},
			MuiTab: {
				...components.tab(color),
			},
		},
	});
}
