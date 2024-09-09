'use client';
import { DefaultQuestion, InfoQuestion } from '@/components/render-question/components';
import {
	generateTextWithPlaceholders,
	useSetAnswer,
} from '@/components/render-question/hooks';
import { QuestionType, ScreenTypeEnum } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';

type RenderScreenProps = {
	question: QuestionType;
};

export const RenderQuestion = ({ question }: RenderScreenProps) => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);

	const handleAnswerClick = useSetAnswer(question);

	const title = generateTextWithPlaceholders(
		surveyAnswers,
		question.title,
		question.placeholders
	);
	const description = question.description;

	const sharedProps = {
		title,
		description,
		answers: question.answers,
		handleAnswerClick,
		parentQuestionId: question.parentQuestionId,
	};

	if (question.screenType === ScreenTypeEnum.Info) {
		return <InfoQuestion {...sharedProps} />;
	}

	return <DefaultQuestion {...sharedProps} />;
};
