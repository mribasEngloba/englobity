import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { usButtonStyles } from './button.styles';

export function CustomButton({ type, children, className, ...props }) {
	const classes = usButtonStyles();
	return (
		<Button
			{...props}
			className={`${className} ${classes[type] || classes.primary}`}
		>
			{children}
		</Button>
	);
}

CustomButton.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
};
