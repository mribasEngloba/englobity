import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

export function TabPanel({ children, value, index, ...props }) {
	const [isRendered, setRendered] = useState(false);

	useEffect(() => {
		if (index === value) {
			setRendered(true);
		}
	}, [value, index]);

	return (
		<div
			{...props}
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			style={{
				width: '100%',
				visibility: index === value ? 'visible' : 'hidden',
			}}
		>
			{isRendered && <Box>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
