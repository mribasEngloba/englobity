import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker, DatePicker } from '@material-ui/pickers';
import { Skeleton } from '@material-ui/lab';
import { Input } from '..';

export function CustomDateTimePicker({
	withHours,
	value,
	icon,
	InputProps,
	inputClassName,
	onChange,
	isLoading,
	skeletonHeight = 48,
	...props
}) {
	function handleDateChange(date) {
		if (onChange) {
			const event = {
				target: {
					value: date,
				},
			};
			onChange(event);
		}
	}

	const params = {
		...props,
		clearable: true,
		showTodayButton: true,
		ampm: false,
		fullWidth: true,
		value: value || null,
		inputVariant: 'outlined',
		onChange: handleDateChange,
		TextFieldComponent: function textField(params) {
			return (
				<Input
					containerProps={{ className: inputClassName }}
					{...params}
					icon={icon}
					InputProps={{ ...InputProps }}
				/>
			);
		},
	};

	return isLoading ? (
		<Skeleton height={skeletonHeight} />
	) : withHours ? (
		<DateTimePicker {...params} format='DD/MM/YYYY HH:mm' type='datetime' />
	) : (
		<DatePicker {...params} format='DD/MM/YYYY' />
	);
}

CustomDateTimePicker.propTypes = {
	withHours: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.instanceOf(Date),
	]),
	icon: PropTypes.element,
	InputProps: PropTypes.object,
	onChange: PropTypes.func,
	inputClassName: PropTypes.string,
	isLoading: PropTypes.bool,
	skeletonHeight: PropTypes.number,
};
