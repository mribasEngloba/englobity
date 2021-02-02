import React from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@material-ui/core';
import { useDialogModalStyles } from './dialogModal.styles';

export function DialogModal({
	title,
	description,
	isOpen,
	handleClose,
	buttons,
	children,
}) {
	const classes = useDialogModalStyles();
	return (
		<Dialog open={isOpen} onClose={handleClose} aria-labelledby='dialog_title'>
			<DialogTitle id='dialog_title'>{title}</DialogTitle>
			<DialogContent className={classes.dialogContent}>
				<DialogContentText id='dialog_description'>
					{description}
				</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions>
				{buttons &&
					buttons.map((button, i) => (
						<Button
							id={button.id || `dialog_button_${i}`}
							key={`dialog_button_${i}`}
							onClick={button.onClick}
							color={button.color || 'primary'}
						>
							{button.text}
						</Button>
					))}
			</DialogActions>
		</Dialog>
	);
}

DialogModal.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			onClick: PropTypes.func,
			text: PropTypes.string,
			color: PropTypes.string,
		})
	),
	children: PropTypes.element.isRequired,
};
