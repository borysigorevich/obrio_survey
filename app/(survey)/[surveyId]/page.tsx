import { RenderScreen } from '@/components/screens/render-screen';
import surveyConfig, {getSurveyConfigAsync, QuestionType} from '@/configs/surveyConfig';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		surveyId: string;
	};
};

const Page = async ({ params }: Props) => {
	const { surveyId } = params;

	const survey = await getSurveyConfigAsync()

	const question = survey.questions[surveyId]

	if (!question) return notFound();

	return (
		<main>
			<RenderScreen question={question as QuestionType} />
		</main>
	);
};

export default Page;
