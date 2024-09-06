import React from 'react';

type Props = {
	params: {
		surveyId: string;
	};
};

const Page = ({ params }: Props) => {
	const { surveyId } = params;

	return <div></div>;
};

export default Page;
