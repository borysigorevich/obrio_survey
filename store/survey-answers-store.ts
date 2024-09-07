import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type SurveyAnswersType = Record<string, string>;

type SurveyAnswersStoreType = {
	answers: SurveyAnswersType;
	setAnswer: (questionId: string, answer: string) => void;
	getAnswer: (questionId: string) => string;
};

export const useSurveyAnswersStore = create<SurveyAnswersStoreType>()(
	persist(
		(set, get) => ({
			answers: {},
			setAnswer: (questionId, answer) =>
				set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),
			getAnswer: (questionId) => get().answers[questionId] || '',
		}),
		{
			name: 'survey-answers-store',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
