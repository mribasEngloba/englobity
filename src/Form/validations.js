const NIF_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const NIF_MAX_LENGTH = 9;
const NIF_MIN_LENGTH = 8;
const NIE_LETTERS = 'XYZ';
const NIF_REGEX = /^(\d{8})([A-Z])$/;
const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

function validateNIF(documentId) {
	let isValid = false;

	if (!documentId) {
		return isValid;
	}

	const hasCorrectLength =
		documentId.length >= NIF_MIN_LENGTH && documentId.length <= NIF_MAX_LENGTH;

	if (hasCorrectLength) {
		const NIFLetter = documentId[documentId.length - 1].toUpperCase();
		const NIFNumber =
			parseInt(documentId.substring(0, documentId.length - 1)) % 23;

		isValid = NIFLetter === NIF_LETTERS[NIFNumber];
	}

	return isValid;
}

function validateNIE(documentId) {
	if (!documentId) {
		return false;
	}

	const firstLetter = documentId[0].toUpperCase();
	const prefix = NIE_LETTERS.indexOf(firstLetter);

	if (!prefix) {
		return false;
	}

	return validateNIF(prefix + documentId.substring(1));
}

export const validations = {
	hourFormat: {
		name: 'hourFormat',
		cb: (value) => !isNaN(value) && value?.length <= 5,
	},
	daysFormat: {
		name: 'daysFormat',
		cb: (value) => !isNaN(value) && value?.length <= 5,
	},
	nifFormat: {
		name: 'nifFormat',
		cb: (value) => value.match(NIF_REGEX) && validateNIF(value),
	},
	nieFormat: {
		name: 'nieFormat',
		cb: (value) => value.match(NIE_REGEX) && validateNIE(value),
	},
	// more validations here
};
