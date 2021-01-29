export const validations = {
	hourFormat: {
		name: 'hourFormat',
		cb: (value) =>
			value?.length <= 3 && value?.toLocaleLowerCase().includes('h'),
	},
	daysFormat: {
		name: 'daysFormat',
		cb: (value) =>
			value?.length <= 4 && value?.toLocaleLowerCase().includes('d'),
	},
	// more validations here
};
