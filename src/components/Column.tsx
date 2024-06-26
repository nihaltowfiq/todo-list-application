import Icon, { moreHorizontal } from '@libs/icons';
import { Todo } from '@libs/types';
import { capitalize } from '@utils/helpers';
import { Card } from './Card';
import { CardAdder } from './CardAdder';

export function Column({ title, items }: Props) {
	return (
		<div className="w-full min-w-[300px] bg-secondary-400 min-h-screen rounded-lg">
			<div className="flex w-full justify-between items-center p-[1rem]">
				<p>{capitalize(title)}</p>
				<Icon className="cursor-pointer" path={moreHorizontal} />
			</div>

			{items?.length > 0 && (
				<div className="px-[1rem]">
					{items.map((el) => (
						<Card key={el.id} {...el} />
					))}
				</div>
			)}

			<CardAdder status={title} />
		</div>
	);
}

type Props = {
	items: Todo[];
	title: Todo['status'];
};
