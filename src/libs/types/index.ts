export type Status = 'new' | 'ongoing' | 'done';

export type Todo = {
	id?: number;
	title: string;
	description: string;
	status: Status;
};
