import { routes } from '@/routes';
import { getNextQuestionId } from '../utils';
import { QuestionType, ScreenTypeEnum } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';
import { useRouter } from 'next/navigation';

export type SetAnswerFnType = (answerId: string) => void;

export const useSetAnswer = (question: QuestionType) => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);
	const setAnswer = useSurveyAnswersStore((state) => state.setAnswer);
	const router = useRouter();

	const handleSetAnswer: SetAnswerFnType = (answerId) => {
		const needToSaveAnswer = question.screenType !== ScreenTypeEnum.Info;

		needToSaveAnswer && setAnswer(question.id, answerId);
		const currentQuestionAnswer = question.answers.find(
			(answer) => answer.id === answerId
		);

		if (!currentQuestionAnswer) return;

		const nextQuestionId = getNextQuestionId({
			currentQuestionAnswer,
			surveyAnswers,
		});

		const path = question.isLastQuestion
			? routes.results
			: `${routes.questions}/${nextQuestionId}`;

		router.push(path);
	};

	return handleSetAnswer;
};
