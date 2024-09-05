import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				`px-5 py-[21px] rounded-2xl shadow-primary border bg-button border-button text-sm leading-[22.4px]
				 		text-black active:text-button-active active:bg-button-active`,
				className
			)}
		>
			{children}
		</button>
	);
};
