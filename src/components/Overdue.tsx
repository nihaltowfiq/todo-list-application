import { useEffect, useState } from 'react';

export const Overdue = ({ timestamp }: Props) => {
	const [isOverdue, setIsOverdue] = useState<boolean>(false);

	useEffect(() => {
		if (!timestamp) return;

		const checkOverdue = () => {
			const currentTimestamp = new Date().getTime();
			setIsOverdue(currentTimestamp > timestamp);
		};

		const intervalId = setInterval(checkOverdue, 1000);

		checkOverdue();

		return () => {
			clearInterval(intervalId);
		};
	}, [timestamp]);

	return (
		<div className="mt-2 text-red-400 text-[0.85rem] text-center">
			{isOverdue ? 'The time is overdue.' : ''}
		</div>
	);
};

type Props = {
	timestamp: number;
};
