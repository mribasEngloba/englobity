import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Collapse, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useHandleOpen } from '../';

export function Summary({
	text,
	detail,
	seeMoreText = 'see more',
	severity,
	className,
	...props
}) {
	const { isOpen, handleClose } = useHandleOpen(Boolean(text));
	const {
		isOpen: isSeeMoreOpen,
		handleClose: handleSeeMoreCLose,
		handleOpen: handleSeeMoreOpen,
	} = useHandleOpen(false);

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
				<Typography variant='subtitle1'>{text}</Typography>
				{detail && (
					<>
						<Typography
							onClick={isSeeMoreOpen ? handleSeeMoreCLose : handleSeeMoreOpen}
							style={{
								fontWeight: 400,
								marginTop: '0.5rem',
								marginBottom: '0.5rem',
								color: '#f44336c2',
								cursor: 'pointer',
							}}
						>
							{`[${seeMoreText}]`}
						</Typography>
						<Collapse in={isSeeMoreOpen}>
							{Array.isArray(detail) ? (
								detail.map((text, i) => {
									return (
										<Typography
											key={i}
											style={{ marginLeft: '2rem' }}
											variant='subtitle2'
										>
											{text}
										</Typography>
									);
								})
							) : (
								<Typography style={{ marginLeft: '2rem' }} variant='subtitle2'>
									{detail}
								</Typography>
							)}
						</Collapse>
					</>
				)}
			</Alert>
		</Collapse>
	);
}

Summary.propTypes = {
	text: PropTypes.string,
	detail: PropTypes.string,
	className: PropTypes.string,
	seeMoreText: PropTypes.string,
	severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};
