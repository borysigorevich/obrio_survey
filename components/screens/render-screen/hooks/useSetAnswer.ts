import { getNextQuestionId } from '@/components/screens/render-screen/utils';
import { QuestionAnswerType } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useRouter } from 'next/navigation';

export type SetAnswerFnType = (answerId: string) => void;

export const useSetAnswer = (
	questionAnswers: QuestionAnswerType[],
	questionId: string
) => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	const setAnswer = useSurveyAnswersStore((state) => state.setAnswer);
	const router = useRouter();

	const handleSetAnswer: SetAnswerFnType = (answerId) => {
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
