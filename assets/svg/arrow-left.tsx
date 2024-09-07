import React from 'react';

type ArrowLeftProps = {
	fill?: string
	className?: string
	onClick?: () => void
}

export const ArrowLeft = ({fill = '#333', className, onClick}: ArrowLeftProps) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			onClick={onClick}
		>
			<path
				d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z"
				fill={fill}
			/>
		</svg>
	);
};
