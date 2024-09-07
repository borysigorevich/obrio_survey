import { getNextQuestionId, QuestionAnswerType } from '@/configs/surveyConfig';
import { SurveyAnswersType, useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useRouter } from 'next/navigation';

type UseSetAnswerArgsType = {
	questionId: string;
	questionAnswers: QuestionAnswerType[];
	surveyAnswers: SurveyAnswersType;
};

export type SetAnswerFnType = (props: { answerId: string; answerText: string }) => void;

export const useSetAnswer = (
	{
		surveyAnswers,
		questionAnswers,
		questionId,
	}: UseSetAnswerArgsType) => {
	const setAnswer = useSurveyAnswersStore((state) => state.setAnswer);
	const router = useRouter();

	const handleSetAnswer: SetAnswerFnType = ({ answerId }) => {
		setAnswer(questionId, answerId);
		const nextQuestionId = getNextQuestionId({
			answerId,
			questionAnswers,
			surveyAnswers,
		});

		router.push(`/${nextQuestionId}`);
	};

	return handleSetAnswer;
};
