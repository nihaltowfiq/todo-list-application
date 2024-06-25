import Icon, { add, moreHorizontal } from '@libs/icons';
import { Todo } from '@libs/types';
import { capitalize } from '@utils/helpers';
import { Card } from './Card';

export function Column({ title }: Props) {
	return (
		<div className="w-full min-w-[300px] bg-[#F1F2F4] min-h-screen rounded-lg">
			<div className="flex w-full justify-between items-center p-[1rem]">
				<p>{capitalize(title)}</p>
				<Icon className="cursor-pointer" path={moreHorizontal} />
			</div>

			<div className="px-[1rem]">
				<Card
					title="Testing"
					status={title}
					description="testing the description"
				/>
			</div>

			<div className="px-[1rem] pb-[1rem]">
				<button className="w-full flex items-center gap-2 text-secondary py-[0.5rem] hover:bg-secondary/10 rounded-lg">
					<Icon path={add} fill="currentColor" />
					<span>Add a card</span>
				</button>
			</div>
		</div>
	);
}

type Props = {
	items?: Todo[];
	title: Todo['status'];
};
