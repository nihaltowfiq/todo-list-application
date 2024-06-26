import { useClickOutside } from '@libs/hooks';
import Icon, { add } from '@libs/icons';
import { Status } from '@libs/types';
import { classNames } from '@utils/helpers';
import { useRef, useState } from 'react';
import { Editor } from './Editor';

export function CardAdder({ status }: Props) {
	const [isActive, setActive] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setActive(false));

	return (
		<div ref={ref} className="px-[1rem] mb-[1rem]">
			{!isActive && (
				<button
					onClick={() => setActive(true)}
					className="w-full flex items-center gap-2 text-secondary py-[0.5rem] hover:bg-secondary/10 rounded-lg"
				>
					<Icon path={add} fill="currentColor" />
					<span>Add a card</span>
				</button>
			)}

			<div className={classNames({ hidden: !isActive, block: isActive })}>
				<Editor status={status} closeHandler={() => setActive(false)} />
			</div>
		</div>
	);
}

type Props = {
	status: Status;
};
