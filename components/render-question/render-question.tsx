'use client';
import { InfoQuestion, DefaultQuestion } from '@/components/render-question/components';
import {
	useGenerateTextWithPlaceholders,
	useSetAnswer,
} from '@/components/render-question/hooks';
import { QuestionType, ScreenTypeEnum } from '@/configs/surveyConfig';

type RenderScreenProps = {
	question: QuestionType;
};

export const RenderQuestion = ({ question }: RenderScreenProps) => {
	const handleAnswerClick = useSetAnswer(question.answers, question.id, question.isLastQuestion);

	const title = useGenerateTextWithPlaceholders(
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
		return (
			<InfoQuestion
				{...sharedProps}
			/>
		);
	}

	return (
		<DefaultQuestion
			{...sharedProps}
		/>
	);
};
