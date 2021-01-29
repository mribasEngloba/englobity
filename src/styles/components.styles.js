import { font } from './font.styles';

export const components = {
	autoCompleteInput: {
		root: {
			'& .MuiAutocomplete-inputRoot': {
				paddingTop: '5px !important',
				paddingBottom: '5px !important',
			},
		},
	},
	inputOutLine: {
		input: {
			padding: '14.5px 14px',
		},
		root: {
			borderRadius: '8px',
		},
	},
	inputLabel: {
		outlined: {
			zIndex: '1',
			transform: 'translate(14px, 16px) scale(1)',
			pointerEvents: 'none',
		},
	},
	accordion: {
		root: {
			boxShadow: 'none',
			margin: '0 !important',
			border: 'none',
			'&:before': {
				opacity: 0,
			},
		},
	},
	chips: (color) => ({
		root: {
			backgroundColor: 'rgb(232, 240, 254) !important',
		},
		deleteIcon: {
			color: color.primary.main,
			'&:hover': {
				color: color.primary.dark,
			},
		},
	}),
	tabs: (color) => ({
		colorDefault: {
			borderBottom: `1px solid ${color.basic.brighter}`,
			boxShadow: 'none !important',
			backgroundColor: color.secondary.light,
		},
	}),
	tab: (color) => ({
		wrapper: {
			display: 'flex',
			flexDirection: 'initial',
			justifyContent: 'center',
			alignItems: 'center',
		},
		labelIcon: {
			minHeight: '3rem',
			'& > .MuiTab-wrapper > *:first-child': {
				marginBottom: 0,
				marginRight: '0.5rem',
			},
		},
		textColorPrimary: {
			color: color.basic.semidark,
			'&$selected': {
				fontWeight: font.weight.semibold,
			},
		},
	}),
};
