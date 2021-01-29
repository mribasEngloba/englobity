import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useHandleOpen } from '../';

export function Summary({ text, severity, className, ...props }) {
	const { isOpen, handleClose } = useHandleOpen(Boolean(text));

	return (
		<Collapse in={isOpen} {...props}>
			<Alert
				className={className}
				severity={severity}
				action={
					<IconButton aria-label='close' size='small' onClick={handleClose}>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
			>
				{/* TODO: gestionar multi errors */}
				{text}
			</Alert>
		</Collapse>
	);
}

Summary.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};
