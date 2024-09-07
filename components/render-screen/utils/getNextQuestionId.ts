import { QuestionAnswerType } from '@/configs/surveyConfig';
import { SurveyAnswersType } from '@/store/survey-answers-store';

type GetNextQuestionIdPropsType = {
	surveyAnswers: SurveyAnswersType;
	questionAnswers: QuestionAnswerType[];
	answerId: string;
};

export const getNextQuestionId = ({
	questionAnswers,
	surveyAnswers,
	answerId,
}: GetNextQuestionIdPropsType) => {
	const currentQuestionAnswer = questionAnswers.find(
		(answer) => answer.id === answerId
	);

	if (!currentQuestionAnswer) return;

	if ('dependsOn' in currentQuestionAnswer) {
		return currentQuestionAnswer.nextQuestionId[
			surveyAnswers[currentQuestionAnswer.dependsOn]
		];
	}

	return currentQuestionAnswer.nextQuestionId;
};
