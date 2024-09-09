import { routes } from '@/routes';
import { getNextQuestionId } from '../utils';
import { QuestionAnswerType } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useRouter } from 'next/navigation';

export type SetAnswerFnType = (answerId: string) => void;

export const useSetAnswer = (
	questionAnswers: QuestionAnswerType[],
	questionId: string,
	isLastScreen?: boolean
) => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	const setAnswer = useSurveyAnswersStore((state) => state.setAnswer);
	const router = useRouter();

	const handleSetAnswer: SetAnswerFnType = (answerId) => {
		setAnswer(questionId, answerId);
		const currentQuestionAnswer = questionAnswers.find(
			(answer) => answer.id === answerId
		);

		if(!currentQuestionAnswer) return;

		const nextQuestionId = getNextQuestionId({
			currentQuestionAnswer,
			surveyAnswers,
		});

		router.push(`${routes.questions}/${nextQuestionId}`);
	};

	return handleSetAnswer;
};
