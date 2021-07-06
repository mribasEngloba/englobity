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
		cb: (value) => value.match(/^(d{8})([A-Z])$/) && validateNIF(value),
	},
	nieFormat: {
		name: 'nieFormat',
		cb: (value) => value.match(/^[XYZ]d{7,8}[A-Z]$/) && validateNIE(value),
	},
	// more validations here
};

function validateNIF(documentId) {
	const letrasNIF = 'TRWAGMYFPDXBNJZSQVHLCKE';
	const NIF_maxlength = 9;
	const NIF_minlength = 8;

	if (!documentId) {
		return false;
	}

	const hasCorrectLength =
		documentId.length >= NIF_minlength && documentId.length <= NIF_maxlength;

	if (hasCorrectLength) {
		let letraNIF = documentId[documentId.length - 1].toUpperCase();
		let numeroNIF =
			parseInt(documentId.substring(0, documentId.length - 1)) % 23;

		return letraNIF === letrasNIF[numeroNIF] ? true : false;
	}

	return false;
}

function validateNIE(documentId) {
	if (!documentId) {
		return false;
	}

	const letrasControl = 'XYZ';
	const letraInicio = documentId[0].toUpperCase();
	const prefijo = letrasControl.indexOf(letraInicio);

	if (prefijo === undefined || prefijo === null) {
		return false;
	}

	return validateNIF(prefijo + documentId.substring(1));
}
