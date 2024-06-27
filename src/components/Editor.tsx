import { TodoContext } from '@context';
import Icon, { check, close } from '@libs/icons';
import { Status, Todo } from '@libs/types';
import { statuses } from '@utils/constants';
import { capitalize } from '@utils/helpers';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { InputArea } from './InputArea';

export function Editor({ closeHandler }: Props) {
	const [values, setValues] = useState<Todo>({
		title: '',
		description: '',
		status: 'new',
	});
	const [errors, setErrors] = useState({
		title: false,
		description: false,
	});

	const { addTodo } = useContext(TodoContext);

	const handleChange = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { value, name } = e.target;
		if (errors[name])
			setErrors((prevState) => ({ ...prevState, [name]: false }));
		setValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!values.title || !values.description) {
			setErrors(() => ({
				description: !values.description,
				title: !values.title,
			}));
			return;
		}

		addTodo({ item: values });
		closeHandler();
		setValues({ title: '', description: '', status: 'new' });
	};

	return (
		<form
			onSubmit={handlerSubmit}
			className="bg-white rounded-md p-[0.75rem] border-[0.18rem] border-primary-400"
		>
			<InputArea
				rows={1}
				name="title"
				value={values.title}
				error={errors.title}
				changeHandler={handleChange}
				placeholder="What needs to be done?"
			/>
			<InputArea
				name="description"
				error={errors.description}
				value={values.description}
				changeHandler={handleChange}
				placeholder="Write the description here.."
			/>

			<select
				name="status"
				onChange={handleChange}
				defaultValue={values.status}
				className="w-full block outline-none border-2 border-secondary-400 p-2 rounded"
			>
				{statuses.map((el) => (
					<option key={el} value={el}>
						{capitalize(el)}
					</option>
				))}
			</select>

			<div className="flex items-center justify-between gap-2 mt-2">
				<button
					type="submit"
					className="w-full flex items-center justify-center hover:text-green-400 gap-2 hover:bg-secondary-400 text-secondary/70 border-2 border-secondary/10 rounded py-1 px-2"
				>
					<Icon path={check} height={16} width={16} />
					<span>Add</span>
				</button>
				<button
					type="button"
					onClick={closeHandler}
					className="w-full flex items-center justify-center hover:text-red-400 gap-2 hover:bg-secondary-400 text-secondary/70 border-2 border-secondary/10 rounded py-1 px-2"
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
