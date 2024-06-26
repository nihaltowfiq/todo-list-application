import { RefObject, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useClickOutside = (ref: RefObject<any>, callback: () => void) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref &&
				ref?.current &&
				!ref?.current?.contains(event.target as HTMLElement)
			) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, callback]);
};
