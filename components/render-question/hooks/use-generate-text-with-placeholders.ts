import { QuestionTextPlaceholdersType } from '@/configs/surveyConfig';

export const generateTextWithPlaceholders = (
	surveyAnswers: Record<string, string>,
	text: string,
	placeholders: QuestionTextPlaceholdersType = {}
): string => {
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
