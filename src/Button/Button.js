import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@material-ui/core';
import { usButtonStyles } from './button.styles';

export function CustomButton({ type, tooltip, children, className, ...props }) {
	const classes = usButtonStyles();
	return (
		<Tooltip {...tooltip}>
			<Button
				{...props}
				className={`${className} ${classes[type] || classes.primary}`}
			>
				{children}
			</Button>
		</Tooltip>
	);
}

CustomButton.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	tooltip: PropTypes.shape({
		title: PropTypes.string,
		placement: PropTypes.string,
	}),
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
};
