'use client';
import { InfoScreen } from '@/components/screens/info-screen';
import { QuestionScreen } from '@/components/screens/question-screen';
import { QuestionType, ScreenTypeEnum } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { Screen } from '../screen';

type RenderScreenProps = {
	question: QuestionType;
};

export const RenderScreen = ({ question }: RenderScreenProps) => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	return (
		<Screen
			question={question}
			surveyAnswers={surveyAnswers}
			render={({ questionTitle, questionDesc, answers, handleAnswerClick }) => {
				if (question.screenType === ScreenTypeEnum.Info) {
					return (
						<InfoScreen
							questionTitle={questionTitle}
							questionDesc={questionDesc}
							answers={answers}
							handleAnswerClick={handleAnswerClick}
						/>
					);
				}

				return (
					<QuestionScreen
						questionTitle={questionTitle}
						questionDesc={questionDesc}
						answers={answers}
						handleAnswerClick={handleAnswerClick}
					/>
				);
			}}
		/>
	);
};
