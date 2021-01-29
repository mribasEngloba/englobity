import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Tab, Tabs, AppBar } from '@material-ui/core';
import { TabPanel } from './TabPanel';

function tabProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export function CustomTabs({ tabs, defaultPosition = 0, classNameContent }) {
	const [tabPosition, setTabPosition] = useState(defaultPosition);
	const theme = useTheme();

	const handleChange = (event, newValue) => {
		setTabPosition(newValue);
	};

	return (
		<Grid container style={{ padding: '1rem' }}>
			<Grid item xs={12}>
				<AppBar position='static' color='default'>
					<Tabs
						value={tabPosition}
						onChange={handleChange}
						indicatorColor='primary'
						textColor='primary'
						variant='fullWidth'
					>
						{tabs.map((tab, index) => {
							return (
								<Tab
									key={index}
									icon={tab.icon}
									label={tab.name}
									{...tabProps({ index })}
								/>
							);
						})}
					</Tabs>
				</AppBar>
			</Grid>
			<Grid item xs={12}>
				<SwipeableViews
					className={classNameContent}
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={tabPosition}
					onChangeIndex={setTabPosition}
				>
					{tabs.map((tab, index) => {
						return (
							<TabPanel
								key={index}
								value={tabPosition}
								index={index}
								dir={theme.direction}
							>
								{tab.children}
							</TabPanel>
						);
					})}
				</SwipeableViews>
			</Grid>
		</Grid>
	);
}

CustomTabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			icon: PropTypes.node,
			children: PropTypes.node,
		})
	).isRequired,
	defaultPosition: PropTypes.number,
	classNameContent: PropTypes.string,
};
