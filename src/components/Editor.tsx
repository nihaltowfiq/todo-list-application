import { TodoContext } from '@context';
import Icon, { check, close } from '@libs/icons';
import { Status } from '@libs/types';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { InputArea } from './InputArea';

export function Editor({ status, closeHandler }: Props) {
	const [values, setValues] = useState({
		title: '',
		description: '',
	});

	const { addTodo } = useContext(TodoContext);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value, name } = e.target;
		setValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const item = { ...values, status };
		addTodo({ item });
		closeHandler();
		setValues({ title: '', description: '' });
	};

	return (
		<form
			onSubmit={handlerSubmit}
			className="bg-white rounded-md mb-[1rem] p-[0.75rem] border-[0.18rem] border-primary-400"
		>
			<InputArea
				rows={1}
				name="title"
				value={values.title}
				changeHandler={handleChange}
				placeholder="What needs to be done?"
			/>
			<InputArea
				name="description"
				value={values.description}
				changeHandler={handleChange}
				placeholder="Write the description here.."
			/>

			<div className="flex items-center justify-between gap-2 mt-2">
				<button
					type="submit"
					className="w-full flex items-center justify-center gap-2 hover:bg-secondary-400 text-secondary/70 border-2 border-secondary/10 rounded py-1 px-2"
				>
					<Icon path={check} height={16} width={16} />
					<span>Add</span>
				</button>
				<button
					type="button"
					onClick={closeHandler}
					className="w-full flex items-center justify-center gap-2 hover:bg-secondary-400 text-secondary/70 border-2 border-secondary/10 rounded py-1 px-2"
				>
					<Icon path={close} height={16} width={16} />
					<span>Close</span>
				</button>
			</div>
		</form>
	);
}

type Props = {
	status: Status;
	closeHandler: () => void;
};
