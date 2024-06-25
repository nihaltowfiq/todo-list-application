import { Column } from '@components/Column';

function App() {
	return (
		<div className="container max-w-[1024px]">
			<h1>Todo List Application</h1>
			<div className="flex gap-[1rem]">
				<Column title="new" />
				<Column title="ongoing" />
				<Column title="done" />
			</div>
		</div>
	);
}

export default App;
