import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const SURVEY_ANSWERS_STORE_KEY = 'survey-answers-store';

export type SurveyAnswersType = Record<string, string>;

type SurveyAnswersStoreType = {
	answers: SurveyAnswersType;
	setAnswer: (questionId: string, answer: string) => void;
	resetAnswers: () => void;
};

export const useSurveyAnswersStore = create<SurveyAnswersStoreType>()(
	persist(
		(set, get) => ({
			answers: {},
			setAnswer: (questionId, answer) =>
				set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),
			resetAnswers: () => set({ answers: {} }),
		}),
		{
			name: SURVEY_ANSWERS_STORE_KEY,
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
