import { ChangeEventHandler } from 'react';

export function InputArea({
	name,
	value,
	rows = 2,
	placeholder,
	changeHandler,
}: Props) {
	return (
		<textarea
			rows={rows}
			name={name}
			value={value}
			className="w-full outline-none"
			onChange={changeHandler}
			placeholder={placeholder}
		/>
	);
}

type Props = {
	name: string;
	value: string;
	rows?: number;
	placeholder: string;
	changeHandler: ChangeEventHandler<HTMLTextAreaElement>;
};
