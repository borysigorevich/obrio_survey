import { Header } from '@/components/render-screen/components/question-screen/components';
import { Button } from '@/components/ui';
import { QuestionScreenType } from '@/configs/surveyConfig';
import { cn } from '@/lib/utils';
import React from 'react';
import { SetAnswerFnType } from '../../hooks';

type QuestionScreenProps = {
	questionTitle: QuestionScreenType['text'];
	questionDesc?: QuestionScreenType['description'];
	answers: QuestionScreenType['answers'];
	parentQuestionId: QuestionScreenType['parentQuestionId'];
	handleAnswerClick: SetAnswerFnType;
};

export const QuestionScreen = ({
	questionTitle,
	questionDesc,
	answers,
	parentQuestionId,
	handleAnswerClick,
}: QuestionScreenProps) => {
	return (
		<div className={'min-h-full bg-background'}>
			<Header parentQuestionId={parentQuestionId} />
			<main className={'px-[15px] lg:px-0 py-5'}>
				<div className={'max-w-[330px] mx-auto w-full'}>
					<h1
						className={cn(
							'text-2xl leading-[28px] font-bold text-typography-8',
							questionDesc && 'text-center text-typography-black'
						)}
					>
						{questionTitle}
					</h1>
					{questionDesc && (
						<h2
							className={
								'mt-5 text-typography-black font-bold text-lg text-center leading-[28px]'
							}
						>
							{questionDesc}
						</h2>
					)}
					<div className={'mt-[30px] grid gap-5'}>
						{answers.map((answer) => (
							<Button
								key={answer.id}
								onClick={() => handleAnswerClick(answer.id)}
							>
								{answer.text}
							</Button>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};
