import { Status, Todo } from '@libs/types';

export type TodoState = Todo[];

export type TodoContextProps = {
	todos: TodoState;
	addTodo: (payload: AddTodo) => void;
	moveTodo: (payload: MoveTodo) => void;
};

export type AddTodo = { item: Todo; status?: Status };
export type MoveTodo = { status: Status; id: number };

export type ActionType =
	| { type: 'ADD'; payload: AddTodo }
	| { type: 'MOVE'; payload: MoveTodo };
