import { Status, Todo } from '@libs/types';

export type TodoState = Todo[];

export type TodoContextProps = {
	todos: TodoState;
	addTodo: (payload: AddTodo) => void;
	moveTodo: (payload: MoveTodo) => void;
	removeTodo: (payload: RemoveTodo) => void;
	addTime: (payload: AddTime) => void;
};

export type AddTodo = { item: Todo; status?: Status };
export type MoveTodo = { status: Status; id: number };
export type RemoveTodo = { id: number };
export type AddTime = { id: number; minute: number; timestamp: number };

export type ActionType =
	| { type: 'ADD'; payload: AddTodo }
	| { type: 'MOVE'; payload: MoveTodo }
	| { type: 'REMOVE'; payload: RemoveTodo }
	| { type: 'ADD_TIME'; payload: AddTime };
