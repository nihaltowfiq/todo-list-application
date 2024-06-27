import { TodoContext } from '@context';
import { Todo } from '@libs/types';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { statuses } from '@utils/constants';
import { capitalize, classNames } from '@utils/helpers';
import { PropsWithChildren, useContext } from 'react';

export function ContextOption({ id, status, children }: Props) {
	const { moveTodo, removeTodo } = useContext(TodoContext);

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger>{children}</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content className="ContextMenuContent">
					{statuses.map((el) => {
						if (status !== el) {
							return (
								<ContextMenu.Item
									key={el}
									onClick={() => moveTodo({ status: el, id })}
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
					{status === 'new' && (
						<ContextMenu.Item
							onClick={() => removeTodo({ id })}
							className="ContextMenuItem text-red-400"
						>
							Remove Card
						</ContextMenu.Item>
					)}
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
}

type Props = Todo & PropsWithChildren;
