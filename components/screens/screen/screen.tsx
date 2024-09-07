import {SetAnswerFnType, useSetAnswer} from "@/components/screens/screen/hooks";
import {generateTextWithPlaceholders, QuestionAnswerType, QuestionType} from '@/configs/surveyConfig';
import { SurveyAnswersType } from '@/store/survey-answers-store';
import React from 'react';

type ScreenProps = {
	question: QuestionType;
	surveyAnswers: SurveyAnswersType;
	render: (props: {
		questionTitle: string;
		questionDesc?: string;
		answers: QuestionAnswerType[];
		handleAnswerClick: SetAnswerFnType;
	}) => React.ReactNode;
};

export const Screen = ({
	question,
	surveyAnswers,
	render,
}: ScreenProps) => {
	const questionTitle = generateTextWithPlaceholders(question.text, question.placeholders, surveyAnswers)
	const questionDesc = question.description;

	const handleAnswerClick = useSetAnswer({
		questionId: question.id,
		questionAnswers: question.answers,
		surveyAnswers,
	});

	return render({
		questionTitle,
		questionDesc,
		answers: question.answers,
		handleAnswerClick,
	});
};
