import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
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
							key={shortid.generate()}
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
	buttons: PropTypes.arrayOf(PropTypes.object),
	children: PropTypes.element.isRequired,
};
