'use client'
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { surveyConfig } from '@/configs/surveyConfig';
import React from 'react';

const Page = () => {

	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);

	const resultArray = Object.entries(surveyAnswers);

	const questionsWithAnswers = resultArray.map(([questionId, answerId]) => {
		const question = surveyConfig.questions[questionId];
		const answer = question.answers.find((answer) => answer.id === answerId);

		return {
			questionTitle: question.title,
			answer: answer?.title,
		};

	})

	console.log({ questionsWithAnswers });

	return (
		<div className={'bg-background h-full'}>

		</div>
	);
};

export default Page;