import { RenderScreen } from '@/components/render-screen';
import { ScreenType, surveyConfig } from '@/configs/surveyConfig';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		surveyId: string;
	};
};

export const revalidate = 600; // 10 minutes

export const generateStaticParams = async () => {
	return Object.keys(surveyConfig.questions).map((surveyId) => ({
		surveyId,
	}));
};

const Page = async ({ params }: Props) => {
	const { surveyId } = params;

	const question = surveyConfig.questions[surveyId];

	if (!question) return notFound();

	return <RenderScreen question={question as ScreenType} />;
};

export default Page;
