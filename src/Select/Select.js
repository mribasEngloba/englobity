import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	ListItemIcon,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useCustomSelectStyles } from './select.styles';

export function CustomSelect({
	className,
	title,
	value,
	elements,
	menuItemRender,
	isLoading,
	skeletonHeight = 48,
	...props
}) {
	const id = shortid.generate();
	const classes = useCustomSelectStyles();

	return (
		<FormControl
			{...props}
			variant='outlined'
			className={`${classes.root} ${className}`}
		>
			{isLoading ? (
				<Skeleton height={skeletonHeight} />
			) : (
				<>
					<InputLabel id={`select-outlined-${id}`}>{title}</InputLabel>
					<Select
						className={classes.customSelect}
						labelId={`select-outlined-${id}`}
						id={`${id}-select-outlined`}
						value={value}
						{...props}
						label={title}
					>
						{elements.map((element) => (
							<MenuItem key={shortid.generate()} value={element.value}>
								{menuItemRender ? (
									menuItemRender(element.value)
								) : (
									<>
										{element.icon && (
											<ListItemIcon className={classes.icon}>
												{element.icon}
											</ListItemIcon>
										)}
										{element.name}
									</>
								)}
							</MenuItem>
						))}
					</Select>
				</>
			)}
		</FormControl>
	);
}

CustomSelect.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	elements: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			icons: PropTypes.element,
			name: PropTypes.string,
		})
	).isRequired,
	noneValue: PropTypes.string,
	menuItemRender: PropTypes.func,
	isLoading: PropTypes.bool,
	skeletonHeight: PropTypes.number,
};
