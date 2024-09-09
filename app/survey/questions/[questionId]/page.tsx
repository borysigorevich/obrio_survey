import { RenderQuestion } from '@/components/render-question';
import { QuestionType, surveyConfig } from '@/configs/surveyConfig';
import { SessionStorageGuard } from '@/guards/session-storage-guard';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		questionId: string;
	};
};

export const revalidate = 600; // 10 minutes

export const generateStaticParams = async () => {
	return Object.keys(surveyConfig.questions).map((questionId) => ({
		questionId,
	}));
};

const Page = async ({ params }: Props) => {
	const { questionId } = params;

	const question = surveyConfig.questions[questionId];

	if (!question) return redirect(`/survey/${surveyConfig.firstQuestionId}`);

	return (
		<SessionStorageGuard>
			<RenderQuestion question={question as QuestionType} />
		</SessionStorageGuard>
	);
};

export default Page;
