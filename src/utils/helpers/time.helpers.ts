export function addMinutes(minutes: number) {
	const currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + minutes);
	return currentDate.getTime();
}

export function isOverdue(timestamp: number) {
	const currentDate = new Date();
	const currentTimestamp = currentDate.getTime();
	return currentTimestamp > timestamp;
}
