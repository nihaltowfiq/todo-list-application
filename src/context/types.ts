import { Status, Todo } from '@libs/types';

export type TodoState = {
	new: Todo[];
	ongoing: Todo[];
	done: Todo[];
};

export type TodoContextProps = {
	state: TodoState;
	addTodo: (payload: AddTodo) => void;
	updateNew: (tasks: Todo[]) => void;
	updateOngoing: (tasks: Todo[]) => void;
	updateDone: (tasks: Todo[]) => void;
};

export type AddTodo = { status: Status; item: Todo };

export type ActionType =
	| { type: 'ADD'; payload: AddTodo }
	| { type: 'UPDATE_NEW'; payload: Todo[] }
	| { type: 'UPDATE_ONGOING'; payload: Todo[] }
	| { type: 'UPDATE_DONE'; payload: Todo[] };
