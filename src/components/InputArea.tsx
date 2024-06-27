import { classNames } from '@utils/helpers';
import { ChangeEventHandler } from 'react';

export function InputArea({
	name,
	value,
	error,
	rows = 2,
	placeholder,
	changeHandler,
}: Props) {
	return (
		<textarea
			rows={rows}
			name={name}
			value={value}
			className={classNames(
				{
					'border-secondary-400': !error,
					'border-red-400': error,
				},
				'w-full outline-none border-2  p-2 rounded',
			)}
			onChange={changeHandler}
			placeholder={placeholder}
		/>
	);
}

type Props = {
	name: string;
	value: string;
	rows?: number;
	error?: boolean;
	placeholder: string;
	changeHandler: ChangeEventHandler<HTMLTextAreaElement>;
};
