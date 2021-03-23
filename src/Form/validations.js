export const validations = {
	hourFormat: {
		name: 'hourFormat',
		cb: (value) => !isNaN(value) && value?.length <= 5,
	},
	daysFormat: {
		name: 'daysFormat',
		cb: (value) => !isNaN(value) && value?.length <= 5,
	},
	// more validations here
};
