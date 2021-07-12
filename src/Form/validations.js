const NIF_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const NIF_MAX_LENGTH = 9;
const NIF_MIN_LENGTH = 8;
const NIE_LETTERS = 'XYZ';
const NIF_REGEX = /^(\d{8})([A-Z])$/i;
const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/i;
const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/i;

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

function validateCIF(documentId) {
	const lettersControl = 'JABCDEFGHI';
	const CIF_length = 9;
	let isValid = false;

	if (!documentId) {
		return isValid;
	}

	documentId = documentId.toUpperCase();

	if (documentId.length === CIF_length) {
		let match = documentId.match(CIF_REGEX);
		if (match !== undefined && match !== null && match.length >= 4) {
			let number = match[2],
				control = match[3];

			let digitsCIF = parseInt(number);
			if (!isNaN(digitsCIF)) {
				let sum = 0;
				let num = 0;
				for (var i = 0; i < number.length; i++) {
					num = parseInt(number[i]);
					if (i % 2 === 0) {
						num *= 2;
						sum += num < 10 ? num : num - 9;
					} else sum += num;
				}

				sum = (10 - (sum % 10)) % 10;

				let digitControl = parseInt(control);
				let controlExpected = parseInt(control);

				if (!isNaN(digitControl)) {
					controlExpected = sum.toString();
				} else {
					controlExpected = lettersControl[sum];
				}

				isValid = control === controlExpected;
			}
		}
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
	cifFormat: {
		name: 'cifFormat',
		cb: (value) => value.match(CIF_REGEX) && validateCIF(value),
	},
	nieFormat: {
		name: 'nieFormat',
		cb: (value) => value.match(NIE_REGEX) && validateNIE(value),
	},
	// more validations here
};
