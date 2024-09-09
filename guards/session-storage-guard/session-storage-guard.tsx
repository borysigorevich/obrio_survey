'use client';
import { surveyConfig } from '@/configs/surveyConfig';
import { sleep } from '@/lib/utils';
import { routes } from '@/routes';
import { SURVEY_ANSWERS_STORE_KEY, useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useParams, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react';

export const SessionStorageGuard = ({ children }: PropsWithChildren) => {
	const [isStorageLoaded, setIsStorageLoaded] = useState(false);
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	const params = useParams()
	const router = useRouter();

	useEffect(() => {

		const storageAnswers = sessionStorage.getItem(SURVEY_ANSWERS_STORE_KEY);
		const firstQuestionId = surveyConfig.firstQuestionId;
		const currentQuestionId = params.questionId;

		if(!storageAnswers && currentQuestionId !== firstQuestionId) {
			router.push(`${routes.questions}${firstQuestionId}`);
		}

		setIsStorageLoaded(true);


	}, []);

	const hasAnswers = Object.keys(surveyAnswers).length > 0;

	if(!isStorageLoaded && !hasAnswers) return <div className={'h-full w-full bg-background'}/>

	return <div className={'h-full bg-background'}>{children}</div>;
};
