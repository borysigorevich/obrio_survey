import { Button } from '@/components/ui';
import { QuestionAnswerType } from '@/configs/surveyConfig';
import React from 'react';
import { SetAnswerFnType } from '../render-screen/hooks';

type QuestionScreenProps = {
	questionTitle: string;
	questionDesc?: string;
	answers: QuestionAnswerType[];
	handleAnswerClick: SetAnswerFnType;
};

export const QuestionScreen = ({
	questionTitle,
	questionDesc,
	answers,
	handleAnswerClick,
}: QuestionScreenProps) => {
	return (
		<div className={'px-3 lg:px-0 mt-5'}>
			<div className={'max-w-[330px] mx-auto w-full'}>
				<h1 className={'text-2xl leading-[28px] font-bold text-typography-8'}>
					{questionTitle}
				</h1>
				{questionDesc && <h2 className={'mt-5'}>{questionDesc}</h2>}
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
		</div>
	);
};
