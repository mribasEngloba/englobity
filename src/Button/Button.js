import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@material-ui/core';
import { usButtonStyles } from './button.styles';

export function CustomButton({
	type = 'primary',
	isSubmit = false,
	tooltip,
	children,
	className,
	...props
}) {
	const classes = usButtonStyles();
	return (
		<>
			{tooltip ? (
				<Tooltip {...tooltip}>
					<Button
						type={isSubmit ? 'submit' : 'button'}
						{...props}
						className={`${className} ${classes[type] || classes.primary}`}
					>
						{children}
					</Button>
				</Tooltip>
			) : (
				<Button
					type={isSubmit ? 'submit' : 'button'}
					{...props}
					className={`${className} ${classes[type] || classes.primary}`}
				>
					{children}
				</Button>
			)}
		</>
	);
}

CustomButton.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
	isSubmit: PropTypes.bool,
	tooltip: PropTypes.shape({
		title: PropTypes.string,
		placement: PropTypes.string,
	}),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	className: PropTypes.string,
};
