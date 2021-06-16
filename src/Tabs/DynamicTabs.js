import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Grid, Button, useTheme } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Close from '@material-ui/icons/Close';
import SwipeableViews from 'react-swipeable-views';
import { useDynamicTabsStyles } from './dynamicTabs.styles';
import { TabPanel } from './TabPanel';

export function DynamicTabs({
	tabs = [],
	onAdd,
	onDelete,
	onChange,
	classNameContent,
}) {
	const [tabPosition, setTabPosition] = useState(0);
	const classes = useDynamicTabsStyles();
	const theme = useTheme();

	async function addTab() {
		const position = tabs.length;
		await onAdd(position);
		setTabPosition(position);
	}

	async function deleteTab(e, tabId, positionToDelete) {
		e.stopPropagation();

		if (tabs.length === 1) {
			return;
		}

		onDelete && (await onDelete(tabId, positionToDelete));

		setTabPosition((prevPosition) => {
			if (positionToDelete > prevPosition) {
				return prevPosition;
			} else if (positionToDelete < prevPosition) {
				return prevPosition - 1;
			} else {
				return prevPosition - 1;
			}
		});
	}

	function handleTabChange(event, newValue) {
		setTabPosition(newValue);
		onChange && onChange(event, newValue);
	}

	return (
		<Grid container style={{ padding: '1rem', paddingBottom: 0 }}>
			<AppBar className={classes.header} position='static' color='default'>
				<Grid container alignItems='center' justify='center'>
					<Grid item xs={12} className={classes.root}>
						<Tabs
							className={classes.tabs}
							value={tabPosition}
							onChange={handleTabChange}
							indicatorColor='primary'
							textColor='primary'
							variant='scrollable'
							scrollButtons='auto'
						>
							{tabs.map((tab, index) => (
								<Tab
									id={`scrollable-force-tab-${index}`}
									key={index}
									label={tab.name}
									className={`${classes.tab} ${
										tab.withDot ? classes.withDot : ''
									}`}
									icon={
										onDelete && index !== 0 ? (
											<Close
												id={tab.id}
												onClick={(e) => deleteTab(e, tab.id, index)}
											/>
										) : null
									}
								/>
							))}
						</Tabs>
						{onAdd && (
							<Button
								className={classes.addButton}
								variant='outlined'
								onClick={addTab}
							>
								<Add />
							</Button>
						)}
					</Grid>
				</Grid>
			</AppBar>
			<SwipeableViews
				className={`${classNameContent} ${classes.content}`}
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
	);
}

DynamicTabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			icon: PropTypes.node,
			children: PropTypes.node,
		})
	).isRequired,
	onChange: PropTypes.func,
	defaultPosition: PropTypes.number,
	classNameContent: PropTypes.string,
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
};
