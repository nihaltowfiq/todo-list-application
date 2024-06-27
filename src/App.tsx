import { Column } from '@components/Column';
import { Responsive } from '@components/Responsive';
import { TodoContext } from '@context';
import { statuses } from '@utils/constants';
import { useContext } from 'react';

function App() {
	const { todos } = useContext(TodoContext);

	return (
		<div className="container max-w-[1024px]">
			<h1 className="text-white my-4 text-center text-[1.15rem] lg:text-[1.75rem] font-semibold">
				Todo List Application
			</h1>

			<div className="hidden lg:flex gap-[1rem]">
				{statuses.map((status) => (
					<Column
						key={status}
						status={status}
						items={todos.filter((el) => el.status === status) ?? []}
					/>
				))}
			</div>

			<Responsive />
		</div>
	);
}

export default App;
