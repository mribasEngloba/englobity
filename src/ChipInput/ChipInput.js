import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { InputAdornment } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useChipInputStyles } from './chipInput.styles';
import { ValidatorComponent } from 'react-material-ui-form-validator';

// TODO ADD VALIDATIONS STYLES
function ChipInputImplementation({
	value,
	icon,
	InputProps,
	isLoading,
	skeletonHeight = 48,
	...props
}) {
	const classes = useChipInputStyles();
	const startAdornment = icon && (
		<InputAdornment position='start'>{icon}</InputAdornment>
	);

	return isLoading ? (
		<Skeleton height={skeletonHeight} />
	) : (
		<ChipInput
			{...props}
			classes={{ inputRoot: classes.chipInputInput }}
			value={value}
			InputProps={{ ...InputProps, startAdornment }}
			fullWidth
			variant='outlined'
		/>
	);
}

ChipInputImplementation.propTypes = {
	value: PropTypes.array,
	icon: PropTypes.element,
	InputProps: PropTypes.object,
	isLoading: PropTypes.bool,
	skeletonHeight: PropTypes.number,
};

export class CustomChipInput extends ValidatorComponent {
	renderValidatorComponent() {
		const { errorMessages, validators, requiredError, ...rest } = this.props;

		return (
			<ChipInputImplementation
				ref={(r) => {
					this.input = r;
				}}
				error={!this.isValid}
				helperText={!this.isValid ? this.getErrorMessage() : ''}
				{...rest}
			/>
		);
	}
}
