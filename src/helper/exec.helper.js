let timeoutID;

function delayed(cb, time) {
	clearTimeout(timeoutID);
	timeoutID = setTimeout(() => cb(), time);
}

export const execHelper = {
	delayed,
};
