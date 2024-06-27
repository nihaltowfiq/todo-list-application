import Icon, { moreHorizontal } from '@libs/icons';
import { Status, Todo } from '@libs/types';
import { capitalize, classNames } from '@utils/helpers';
import { Card } from './Card';
import { CardAdder } from './CardAdder';

export function Column({ status, items }: Props) {
	return (
		<div className="w-full lg:min-w-[250px] pb-[1rem] bg-secondary-400 min-h-[calc(100vh-125px)] lg:min-h-[calc(100vh-90px)] rounded-lg">
			<div className="flex w-full justify-between items-center p-[1rem]">
				<p
					className={classNames(
						{
							'text-tertiary': status === 'done',
							'text-primary': status === 'new',
							'text-quaternary': status === 'ongoing',
						},
						'font-medium',
					)}
				>
					{capitalize(status)}
				</p>
				<Icon className="cursor-pointer" path={moreHorizontal} />
			</div>

			{items?.length > 0 && (
				<div className="px-[1rem]">
					{items.map((el) => (
						<Card key={el.id} {...el} />
					))}
				</div>
			)}

			{status === 'new' && <CardAdder status={status} />}
		</div>
	);
}

type Props = {
	items: Todo[];
	status: Status;
};
