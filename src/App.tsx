import { Column } from '@components/Column';
import { TodoContext } from '@context';
import { useContext } from 'react';

function App() {
	const { todos } = useContext(TodoContext);

	return (
		<div className="container max-w-[1024px]">
			<h1>Todo List Application</h1>
			<div className="flex gap-[1rem]">
				<Column
					status="new"
					items={todos.filter((el) => el.status === 'new') ?? []}
				/>
				<Column
					status="ongoing"
					items={todos.filter((el) => el.status === 'ongoing') ?? []}
				/>
				<Column
					status="done"
					items={todos.filter((el) => el.status === 'done') ?? []}
				/>
			</div>
		</div>
	);
}

export default App;
