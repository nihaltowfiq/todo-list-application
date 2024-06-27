import { TodoContext } from '@context';
import Icon, { calender } from '@libs/icons';
import { Todo } from '@libs/types';
import { times } from '@utils/constants';
import { addMinutes, classNames, isOverdue } from '@utils/helpers';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ContextOption } from './ContextOption';
import { Overdue } from './Overdue';

export function Card(props: Props) {
	const { id, title, description, status, minute, timestamp } = props;
	const [isCalenderOpen, setCalenderOpen] = useState(false);

	const { addTime } = useContext(TodoContext);

	useEffect(() => {
		if (minute) setCalenderOpen(true);
	}, [minute]);

	useEffect(() => {
		if (timestamp) {
			isOverdue(timestamp);
		}
	}, [timestamp]);

	const onTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		if (value === 'Select') return;

		const minute = Number(value);
		const timestamp = addMinutes(minute);

		addTime({ id, minute, timestamp });
	};

	return (
		<ContextOption {...props}>
			<div
				className={classNames(
					{
						'border-tertiary': status === 'done',
						'border-primary': status === 'new',
						'border-quaternary': status === 'ongoing',
					},
					'bg-white rounded-md mb-[1rem] p-[0.75rem] border',
				)}
			>
				<p title={title} className="line-clamp-2 font-semibold">
					{title}
				</p>
				<p title={title} className="text-[0.95rem] line-clamp-3">
					{description}
				</p>

				{status === 'ongoing' && (
					<>
						<div className="flex items-center justify-between gap-2 text-quaternary mt-2">
							<select
								name="minute"
								defaultValue={minute ?? times[0]}
								onChange={onTimeChange}
								className={classNames(
									{ visible: isCalenderOpen, invisible: !isCalenderOpen },
									'w-full outline-none border-2 border-secondary-400 px-2 py-1 rounded',
								)}
							>
								{times.map((e) => (
									<option key={e} value={e}>
										{e} Minute
									</option>
								))}
							</select>

							<Icon
								height={26}
								width={26}
								path={calender}
								className="ml-auto cursor-pointer"
								onClick={() => setCalenderOpen(!isCalenderOpen)}
							/>
						</div>
					</>
				)}

				<Overdue timestamp={timestamp} />
			</div>
		</ContextOption>
	);
}

type Props = Todo;
