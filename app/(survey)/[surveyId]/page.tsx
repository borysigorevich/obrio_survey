import { RenderScreen } from '@/components/screens/render-screen';
import { ScreenType, surveyConfig } from '@/configs/surveyConfig';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		surveyId: string;
	};
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 10 minutes
export const revalidate = 600

export const generateStaticParams = async () => {
	return Object.keys(surveyConfig.questions).map((surveyId) => ({
		surveyId
	}));
}

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
