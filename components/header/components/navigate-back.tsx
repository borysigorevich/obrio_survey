'use client';
import { ArrowLeft } from '@/assets/svg';
import { useRouter } from 'next/navigation';
import React from 'react';

export const NavigateBack = () => {
	const router = useRouter();

	const goBack = () => {
		router.back();
	};

	return (
		<button onClick={goBack}>
			<ArrowLeft />
		</button>
	);
};
