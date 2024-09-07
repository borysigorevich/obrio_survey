import { create } from 'zustand';

export type SurveyAnswersType = Record<string, string>

type SurveyAnswersStoreType = {
	answers: SurveyAnswersType;
	setAnswer: (questionId: string, answer: string) => void;
	getAnswer: (questionId: string) => string;
};

export const useSurveyAnswersStore = create<SurveyAnswersStoreType>((set, get) => ({
	answers: {},
	setAnswer: (questionId, answer) =>
		set((state) => ({ answers: { ...state.answers, [questionId]: answer } })),
	getAnswer: (questionId) => get().answers[questionId] || '',
}));
