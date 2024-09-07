import { ArrowLeft, Logo } from '@/assets/svg';
import { QuestionScreenType } from '@/configs/surveyConfig';
import { useRouter } from 'next/navigation';
import React from 'react';

type HeaderProps = {
	parentQuestionId: QuestionScreenType['parentQuestionId'];
};

export const Header = ({ parentQuestionId }: HeaderProps) => {
	const router = useRouter();

	const navigateToParentQuestion = () => {
		router.push(`/survey/${parentQuestionId}`);
	};

	const navigateToHome = () => {
		router.push('/');
	};

	return (
		<header
			className={
				'px-[15px] py-2.5 lg:px-[165px] lg:py-[15px] relative flex justify-center'
			}
		>
			{parentQuestionId && (
				<ArrowLeft
					className={'absolute left-[15px] lg:left-[165px] cursor-pointer'}
					onClick={navigateToParentQuestion}
				/>
			)}
			<Logo onClick={navigateToHome} />
		</header>
	);
};
