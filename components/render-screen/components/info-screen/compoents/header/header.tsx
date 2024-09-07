import { ArrowLeft, Logo } from '@/assets/svg';
import { WhiteLogo } from '@/assets/svg/white-logo';
import React from 'react';

export const Header = () => {
	return (
		<header className={'px-[15px] py-2.5 lg:px-[165px] lg:py-[15px] relative flex justify-center'}>
			<ArrowLeft className={'absolute left-[15px] lg:left-[165px]'} fill={'#FAFAFA'}/>
			<WhiteLogo/>
		</header>
	);
};
