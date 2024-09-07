import { Button } from '@/components/ui';
import { QuestionAnswerType } from '@/configs/surveyConfig';
import React from 'react';
import { SetAnswerFnType } from '../render-screen/hooks';

type InfoScreenProps = {
	questionTitle: string;
	questionDesc?: string;
	answers: QuestionAnswerType[];
	handleAnswerClick: SetAnswerFnType;
};

export const InfoScreen = ({
	questionTitle,
	questionDesc,
	answers,
	handleAnswerClick,
}: InfoScreenProps) => {
	return (
		<div
			className={
				'mt-4 text-typography-1 px-4 lg:px-0 text-center'
			}
		>
			<div className={'w-full max-w-[328px] mx-auto'}>
				<h1 className="text-2xl leading-[28px] font-bold text-typography-1">
					{questionTitle}
				</h1>
				<p className="text-sm leading-[25.2px] mt-5 text-typography-1">
					{questionDesc}
				</p>
				<div className={'grid gap-5 mt-10'}>
					{answers.map((answer) => (
						<Button
							key={answer.id}
							onClick={() => handleAnswerClick(answer.id)}
							className={
								'bg-typography-1 py-[14px] shadow-info text-primary-violet rounded-xl border-none text-lg leading-[21px]'
							}
						>
							{answer.text}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
