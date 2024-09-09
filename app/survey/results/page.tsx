'use client';
import { generateTextWithPlaceholders } from '@/components/render-question/hooks';
import { Button } from '@/components/ui';
import { surveyConfig } from '@/configs/surveyConfig';
import { routes } from '@/routes';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
	const router = useRouter();

	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	const resetAnswers = useSurveyAnswersStore((state) => state.resetAnswers);

	const resultArray = Object.entries(surveyAnswers);

	const questionsWithAnswers = resultArray.map(([questionId, answerId]) => {
		const question = surveyConfig.questions[questionId];
		const answer = question.answers.find((answer) => answer.id === answerId);

		return {
			questionTitle: generateTextWithPlaceholders(
				surveyAnswers,
				question.title,
				question.placeholders
			),
			answer: answer?.title,
		};
	});

	const goToFirstQuestion = () => {
		router.replace(`${routes.questions}/${surveyConfig.firstQuestionId}`);
		resetAnswers();
	};

	return (
		<div className={'bg-background px-[15px] lg:px-0 py-5'}>
			<div className={'max-w-3xl mx-auto w-full'}>
				<h1
					className={
						'text-center uppercase text-typography-8 font-bold text-3xl'
					}
				>
					Your Answers
				</h1>

				<ul className={'grid mt-6 gap-4 list-disc list-inside'}>
					{questionsWithAnswers.map(({ questionTitle, answer }, index) => (
						<li key={index} className={'grid gap-1'}>
							<span
								className={
									'font-bold text-2xl text-typography-black underline'
								}
							>
								{questionTitle}
							</span>{' '}
							{''}
							<span
								className={
									'font-semibold italic text-2xl text-typography-8'
								}
							>
								{answer}
							</span>
						</li>
					))}
				</ul>

				<Button onClick={goToFirstQuestion} className={'mt-6 mx-auto'}>
					Restart Survey
				</Button>
			</div>
		</div>
	);
};

export default Page;
