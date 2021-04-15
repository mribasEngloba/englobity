import React from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import { useDialogModalStyles } from './dialogModal.styles';
import { Button } from '../Button';

export function DialogModal({
	title,
	description,
	isOpen,
	buttons,
	children,
	...rest
}) {
	const classes = useDialogModalStyles();
	return (
		<Dialog open={isOpen} aria-labelledby={title} {...rest}>
			<DialogTitle className={classes.title} id={title}>
				{title}
			</DialogTitle>
			<DialogContent className={classes.dialogContent}>
				{description && (
					<DialogContentText id='dialog_description'>
						{description}
					</DialogContentText>
				)}
				{children}
			</DialogContent>
			{buttons && (
				<DialogActions className={classes.actions}>
					{buttons.map((button, i) => (
						<Button
							tooltip={{
								title: button.text,
								placement: 'top',
							}}
							id={button.id || `dialog_button_${i}`}
							key={`dialog_button_${i}`}
							{...button}
						/>
					))}
				</DialogActions>
			)}
		</Dialog>
	);
}

DialogModal.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	className: PropTypes.string,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			onClick: PropTypes.func,
			text: PropTypes.string,
			children: PropTypes.element,
			type: PropTypes.string,
		})
	),
	children: PropTypes.element.isRequired,
};
