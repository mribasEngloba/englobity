import { font } from './font.styles';

const defauldButton = {
	height: '2.4rem',
	padding: '0rem 1rem',
	minWidth: '6.25rem',
	borderRadius: '8px',
	fontStyle: 'normal',
	fontWeight: font.weight.seminormal,
	fontSize: font.size.s,
};

export const components = {
	button: (color) => ({
		primary: {
			...defauldButton,
			background: color.primary.main,
			color: color.secondary.light,
			'&:hover': {
				backgroundColor: color.primary.dark,
				boxShadow: `0px 0px 4px ${color.action.activeButton}`,
			},
			'&:disabled': {
				background: color.basic.brighter,
				color: color.secondary.light,
			},
			textTransform: 'capitalize',
		},
		secondary: {
			...defauldButton,
			border: `1.25px solid ${color.primary.main}`,
			background: color.secondary.main,
			color: color.primary.main,
			'&:hover': {
				border: `1.25px solid ${color.primary.dark}`,
				boxShadow: `0px 0px 4px ${color.action.activeButton}`,
				color: color.primary.dark,
			},
			'&:disabled': {
				border: `1.25px solid ${color.basic.brighter}`,
				color: color.basic.brighter,
			},
			textTransform: 'capitalize',
		},
	}),
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
