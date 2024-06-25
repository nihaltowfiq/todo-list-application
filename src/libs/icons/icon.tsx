import { SVGAttributes } from 'react';

export function Icon({
	path,
	width = 24,
	height = 24,
	fill = '#444444',
	viewBox = '0 0 24 24',
	...rest
}: IconProps) {
	const props = {
		width,
		height,
		fill,
		...rest,
	};
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...props}>
			<path d={path} />
		</svg>
	);
}

export interface IconProps extends SVGAttributes<SVGElement> {
	path: string;
	viewBox?: string;
}
