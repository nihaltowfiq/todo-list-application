import { TodoContext } from '@context';
import { Status, Todo } from '@libs/types';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { statuses } from '@utils/constants';
import { capitalize, classNames } from '@utils/helpers';
import { useContext } from 'react';

export function Card({ id, title, description, status }: Props) {
	const { moveTodo } = useContext(TodoContext);

	const handleMove = (status: Status) => {
		moveTodo({ status, id });
	};

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger>
				<div
					className={classNames(
						{
							'border-tertiary': status === 'done',
							'border-primary': status === 'new',
							'border-quaternary': status === 'ongoing',
						},
						'bg-white rounded-md mb-[1rem] p-[0.75rem] border',
					)}
				>
					<p title={title} className="line-clamp-2 font-semibold">
						{title}
					</p>
					<p title={title} className="text-[0.95rem] line-clamp-3">
						{description}
					</p>
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content className="ContextMenuContent">
					{statuses.map((el) => {
						if (status !== el) {
							return (
								<ContextMenu.Item
									onClick={() => handleMove(el)}
									className={classNames(
										{
											'hover:!text-tertiary': el === 'done',
											'hover:!text-primary': el === 'new',
											'hover:!text-quaternary': el === 'ongoing',
										},
										'ContextMenuItem',
									)}
								>
									Move to {capitalize(el)}
								</ContextMenu.Item>
							);
						}
					})}
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
}

type Props = Todo;
