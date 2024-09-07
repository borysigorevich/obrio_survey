import { QuestionTextPlaceholdersType } from '@/configs/surveyConfig';
import { useSurveyAnswersStore } from '@/store/survey-answers-store';

export const useGenerateTextWithPlaceholders = (
	text: string,
	placeholders: QuestionTextPlaceholdersType = {}
): string => {
	const surveyAnswers = useSurveyAnswersStore((state) => state.answers);

	const placeholderRegex = /\{(\w+)\}/g;
	const generatedText = text.replace(placeholderRegex, (match, p1) => {
		const placeholderConfig = placeholders[p1];
		if (placeholderConfig) {
			const answerId = surveyAnswers[placeholderConfig.source];

			const placeholderValue = placeholderConfig.values[answerId];

			if (answerId && placeholderValue) {
				return placeholderConfig.values[answerId] as string;
			} else if (placeholderValue === null) {
				return '';
			}
		}

		return match;
	});

	return generatedText;
};
