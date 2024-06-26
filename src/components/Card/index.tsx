import { Todo } from '@libs/types';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { classNames } from '@utils/helpers';
import './styles.scss';

export function Card({ title, description, status }: Props) {
	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger className="">
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
					<p className="truncate">{title}</p>
					<p className="text-[0.85rem] line-clamp-2">{description}</p>
				</div>
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content className="ContextMenuContent">
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger className="ContextMenuSubTrigger">
							More Tools
						</ContextMenu.SubTrigger>
						<ContextMenu.Portal>
							<ContextMenu.SubContent
								className="ContextMenuSubContent"
								sideOffset={2}
								alignOffset={-5}
							>
								<ContextMenu.Item className="ContextMenuItem">
									Save Page As… <div className="RightSlot">⌘+S</div>
								</ContextMenu.Item>
								<ContextMenu.Item className="ContextMenuItem">
									Create Shortcut…
								</ContextMenu.Item>
								<ContextMenu.Item className="ContextMenuItem">
									Name Window…
								</ContextMenu.Item>
								<ContextMenu.Separator className="ContextMenuSeparator" />
								<ContextMenu.Item className="ContextMenuItem">
									Developer Tools
								</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Portal>
					</ContextMenu.Sub>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
}

type Props = Todo;
