import { QuestionAnswerType } from '@/configs/surveyConfig';
import { SurveyAnswersType } from '@/store/survey-answers-store';

type GetNextQuestionIdPropsType = {
	surveyAnswers: SurveyAnswersType;
	currentQuestionAnswer: QuestionAnswerType;
};

export const getNextQuestionId = ({
	currentQuestionAnswer,
	surveyAnswers,
}: GetNextQuestionIdPropsType) => {
	if (!currentQuestionAnswer) return;

	if ('dependsOn' in currentQuestionAnswer) {
		return currentQuestionAnswer.nextQuestionId[
			surveyAnswers[currentQuestionAnswer.dependsOn]
		];
	}

	return currentQuestionAnswer.nextQuestionId;
};
