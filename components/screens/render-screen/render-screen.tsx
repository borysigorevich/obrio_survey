'use client';
import { InfoScreen } from '@/components/screens/info-screen';
import { QuestionScreen } from '@/components/screens/question-screen';
import { useSetAnswer } from '@/components/screens/render-screen/hooks';
import { useGenerateTextWithPlaceholders } from '@/components/screens/render-screen/hooks/useGenerateTextWithPlaceholders';
import { ScreenType, ScreenTypeEnum } from '@/configs/surveyConfig';

type RenderScreenProps = {
	question: ScreenType;
};

export const RenderScreen = ({ question }: RenderScreenProps) => {
	const handleAnswerClick = useSetAnswer(question.answers, question.id);

	const questionTitle = useGenerateTextWithPlaceholders(
		question.text,
		question.placeholders
	);
	const questionDesc = question.description;

	if (question.screenType === ScreenTypeEnum.Info) {
		return (
			<InfoScreen
				questionTitle={questionTitle}
				questionDesc={questionDesc}
				answers={question.answers}
				handleAnswerClick={handleAnswerClick}
			/>
		);
	}

	return (
		<QuestionScreen
			questionTitle={questionTitle}
			questionDesc={questionDesc}
			answers={question.answers}
			handleAnswerClick={handleAnswerClick}
		/>
	);
};
