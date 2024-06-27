import { TodoContext } from '@context';
import { Status } from '@libs/types';
import { statuses } from '@utils/constants';
import { capitalize, classNames } from '@utils/helpers';
import { useContext, useState } from 'react';
import { Column } from './Column';

export function Responsive() {
	const [activeTab, setActiveTab] = useState<Status>('new');

	const { todos } = useContext(TodoContext);

	return (
		<div className="block lg:hidden">
			<div className="pb-3 space-x-2 text-center text-white">
				{statuses.map((el) => (
					<button
						key={el}
						className={classNames(
							{
								'border-secondary-400': el === activeTab,
								'border-transparent': el !== activeTab,
							},
							'p-2 py-1 border hover:border-secondary-400 rounded-md',
						)}
						onClick={() => setActiveTab(el)}
					>
						{capitalize(el)}
					</button>
				))}
			</div>

			<Column
				status={activeTab}
				items={todos.filter((el) => el.status === activeTab) ?? []}
			/>
		</div>
	);
}
