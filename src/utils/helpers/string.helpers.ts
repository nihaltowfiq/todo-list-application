export const capitalize = (s: string) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export function capitalizeEveryWord(sentence: string) {
	if (typeof sentence !== 'string') return '';
	return sentence?.replace(/\b\w/g, (char) => char?.toUpperCase());
}

export const truncate = (str: string, num: number) => {
	if (!str) return '';

	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
};

export const lineBreak = (value: string) => {
	return { __html: value?.replace(/\n/g, '<br />') };
};
