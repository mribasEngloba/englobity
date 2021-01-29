import React from 'react';
import PropTypes from 'prop-types';
import { TextValidator } from 'react-material-ui-form-validator';
import { InputAdornment } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export function EOInput({
	icon,
	isLoading,
	className,
	value,
	InputProps,
	skeletonHeight,
	skeletonClassName,
	variant,
	...props
}) {
	const iconAdorment = icon ? (
		<InputAdornment position='start'>{icon}</InputAdornment>
	) : (
		''
	);
	const startAdornment = (
		<>
			{iconAdorment}
			{InputProps?.startAdornment || ''}
		</>
	);

	return isLoading ? (
		<Skeleton
			className={`${className} ${skeletonClassName}`}
			height={skeletonHeight || 48}
		/>
	) : (
		<TextValidator
			{...props}
			containerProps={{ className }}
			value={value}
			fullWidth
			variant={variant || 'outlined'}
			InputProps={{ ...InputProps, startAdornment }}
		/>
	);
}

EOInput.propTypes = {
	icon: PropTypes.element,
	value: PropTypes.string,
	className: PropTypes.string,
	InputProps: PropTypes.object,
	isLoading: PropTypes.bool,
	skeletonHeight: PropTypes.string,
	skeletonClassName: PropTypes.string,
	variant: PropTypes.string,
};
