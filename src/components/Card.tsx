import { Todo } from '@libs/types';

export function Card({ title, description }: Props) {
	return (
		<div className="bg-white rounded-md mb-[1rem] p-[0.75rem] border border-secondary/10">
			<p>{title}</p>
			<p>{description}</p>
		</div>
	);
}

type Props = Todo;
