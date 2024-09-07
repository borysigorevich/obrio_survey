import { Button } from '@/components/ui';
import { QuestionAnswerType } from '@/configs/surveyConfig';
import React from 'react';

type SpecialQuestionProps = {
	questionTitle: string;
	questionDesc?: string;
	answers: QuestionAnswerType[];
	handleAnswerClick: (answerId: string, answerText: string) => void;
};

export const SpecialQuestion = ({
	questionTitle,
	questionDesc,
	answers,
	handleAnswerClick,
}: SpecialQuestionProps) => {
	return (
		<div
			className={'bg-purple-900 px-5 py-10 text-white mx-auto w-full max-w-[330px]'}
		>
			<h1 className="text-2xl leading-[28px] font-bold mb-4 text-secondary">{questionTitle}</h1>
			<p className="text-sm leading-[25.2px] mb-5">{questionDesc}</p>
			<div className={'grid gap-5'}>
				{answers.map((answer) => (
					<Button
						key={answer.id}
						onClick={() => handleAnswerClick(answer.id, answer.text)}
						className={'bg-secondary'}
					>
						{answer.text}
					</Button>
				))}
			</div>
		</div>
	);
};
