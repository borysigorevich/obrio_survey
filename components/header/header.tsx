import { Logo } from '@/assets/svg';
import { NavigateBack } from '@/components/header/components/navigate-back';
import React from 'react';

export const Header = () => {
	return (
		<header className={'px-[15px] py-2.5 lg:px-[165px] lg:py-[15px] relative flex'}>
			<NavigateBack />
			<Logo
				className={'absolute left-1/2 -translate-x-1/2 top-2.5 lg:top-[15px]'}
			/>
		</header>
	);
};
