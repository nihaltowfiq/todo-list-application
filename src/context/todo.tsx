import { Todo } from '@libs/types';
import { createContext, PropsWithChildren, useReducer } from 'react';
import { ActionType, AddTodo, TodoContextProps, TodoState } from './types';

// const initialState: TodoState = {
// 	new: [],
// 	ongoing: [],
// 	done: [],
// };
const initialState: TodoState = {
	new: [
		{
			id: 1,
			title: 'new 1 new 1 new 1 new 1 new 1 new 1',
			description:
				'description description description description description description description description description description ',
			status: 'new',
		},
		{ id: 2, title: 'new 2', description: '', status: 'new' },
	],
	ongoing: [
		{ id: 3, title: 'ongoing 1', description: '', status: 'ongoing' },
		{ id: 4, title: 'ongoing 2', description: '', status: 'ongoing' },
	],
	done: [
		{ id: 5, title: 'done 1', description: '', status: 'done' },
		{ id: 6, title: 'done 2', description: '', status: 'done' },
	],
};

export const TodoContext = createContext<TodoContextProps>({
	state: initialState,
	addTodo: () => {},
	updateNew: () => {},
	updateOngoing: () => {},
	updateDone: () => {},
});

const taskReducer = (state: TodoState, action: ActionType): TodoState => {
	switch (action.type) {
		case 'ADD': {
			const { status, item } = action.payload;
			const items = state[status];
			const id = [...state.new, ...state.ongoing, ...state.done].length + 1;
			return { ...state, [status]: [{ ...item, id }, ...items] };
		}
		case 'UPDATE_NEW':
			return { ...state, new: action.payload };
		case 'UPDATE_ONGOING':
			return { ...state, ongoing: action.payload };
		case 'UPDATE_DONE':
			return { ...state, done: action.payload };
		default:
			return state;
	}
};

export function TodoProvider({ children }: PropsWithChildren) {
	const [state, dispatch] = useReducer(taskReducer, initialState);

	const addTodo = (payload: AddTodo) => {
		dispatch({ type: 'ADD', payload });
	};

	const updateNew = (tasks: Todo[]) => {
		dispatch({ type: 'UPDATE_NEW', payload: tasks });
	};

	const updateOngoing = (tasks: Todo[]) => {
		dispatch({ type: 'UPDATE_ONGOING', payload: tasks });
	};

	const updateDone = (tasks: Todo[]) => {
		dispatch({ type: 'UPDATE_DONE', payload: tasks });
	};

	return (
		<TodoContext.Provider
			value={{ state, addTodo, updateNew, updateOngoing, updateDone }}
		>
			{children}
		</TodoContext.Provider>
	);
}
