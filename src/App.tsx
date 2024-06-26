import { Column } from '@components/Column';
import { TodoContext } from '@context';
import { useContext } from 'react';

function App() {
	const { state } = useContext(TodoContext);

	console.log(state);

	return (
		<div className="container max-w-[1024px]">
			<h1>Todo List Application</h1>
			<div className="flex gap-[1rem]">
				<Column status="new" items={state.new} />
				<Column status="ongoing" items={state.ongoing} />
				<Column status="done" items={state.done} />
			</div>
		</div>
	);
}

export default App;
