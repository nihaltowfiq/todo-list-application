import { Todo } from '@libs/types';
import { createContext, PropsWithChildren, useReducer } from 'react';
import {
	ActionType,
	AddTime,
	AddTodo,
	MoveTodo,
	RemoveTodo,
	TodoContextProps,
	TodoState,
} from './types';

const initialState: TodoState = [];

export const TodoContext = createContext<TodoContextProps>({
	todos: initialState,
	addTodo: () => {},
	moveTodo: () => {},
	removeTodo: () => {},
	addTime: () => {},
});

const taskReducer = (state: TodoState, action: ActionType): TodoState => {
	switch (action.type) {
		case 'ADD': {
			const { item } = action.payload;
			const id = [...state].length + 1;
			return [{ ...item, id }, ...state];
		}
		case 'MOVE': {
			const { status, id } = action.payload;
			const item = state.find((el) => el.id === id) as Todo;
			const filteredTodo = state.filter((el) => el.id !== id);

			return [...filteredTodo, { ...item, status }];
		}
		case 'REMOVE': {
			const { id } = action.payload;
			const filteredTodo = state.filter((el) => el.id !== id);

			return [...filteredTodo];
		}
		case 'ADD_TIME': {
			const { minute, timestamp, id } = action.payload;
			const arr = [...state];
			const index = arr.findIndex((el) => el.id === id);
			arr[index].timestamp = timestamp;
			arr[index].minute = minute;

			return [...arr];
		}
		default:
			return state;
	}
};

export function TodoProvider({ children }: PropsWithChildren) {
	const [todos, dispatch] = useReducer(taskReducer, initialState);

	const addTodo = (payload: AddTodo) => {
		dispatch({ type: 'ADD', payload });
	};

	const moveTodo = (payload: MoveTodo) => {
		dispatch({ type: 'MOVE', payload });
	};

	const removeTodo = (payload: RemoveTodo) => {
		dispatch({ type: 'REMOVE', payload });
	};

	const addTime = (payload: AddTime) => {
		dispatch({ type: 'ADD_TIME', payload });
	};

	return (
		<TodoContext.Provider
			value={{ todos, addTodo, moveTodo, removeTodo, addTime }}
		>
			{children}
		</TodoContext.Provider>
	);
}
