import { Todo } from '@libs/types';
import { classNames } from '@utils/helpers';

export function Card({ title, description, status }: Props) {
	return (
		<div
			className={classNames(
				{
					'border-tertiary': status === 'done',
					'border-primary': status === 'new',
					'border-quaternary': status === 'ongoing',
				},
				'bg-white rounded-md mb-[1rem] p-[0.75rem] border-2',
			)}
		>
			<p>{title}</p>
			<p>{description}</p>
		</div>
	);
}

type Props = Todo;
