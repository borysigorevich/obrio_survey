import { RenderScreen } from '@/components/screens/render-screen';
import { ScreenType, surveyConfig } from '@/configs/surveyConfig';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		surveyId: string;
	};
};

const Page = async ({ params }: Props) => {
	const { surveyId } = params;

	const question = surveyConfig.questions[surveyId];

	if (!question) return notFound();

	return (
		<main>
			<RenderScreen question={question as ScreenType} />
		</main>
	);
};

export default Page;
