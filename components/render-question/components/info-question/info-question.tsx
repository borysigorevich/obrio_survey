import { Header } from '@/components/render-question/components/info-question/components';
import { Button } from '@/components/ui';
import { InfoQuestionType } from '@/configs/surveyConfig';
import React from 'react';
import { SetAnswerFnType } from '../../hooks';

type InfoQuestionProps = {
	title: InfoQuestionType['title'];
	description?: InfoQuestionType['description'];
	answers: InfoQuestionType['answers'];
	parentQuestionId: InfoQuestionType['parentQuestionId'];
	handleAnswerClick: SetAnswerFnType;
};

export const InfoQuestion = ({
	title,
	description,
	answers,
	handleAnswerClick,
	parentQuestionId,
}: InfoQuestionProps) => {
	return (
		<div className={'min-h-full bg-info-screen'}>
			<Header parentQuestionId={parentQuestionId} />
			<main className={'py-4 text-typography-1 px-4 lg:px-0 text-center'}>
				<div className={'w-full max-w-[328px] mx-auto'}>
					<h1 className="text-2xl leading-[28px] font-bold text-typography-1">{title}</h1>
					<p className="text-sm leading-[25.2px] mt-5 text-typography-1">{description}</p>
					<ul className={'grid gap-5 mt-10'}>
						{answers.map((answer) => (
							<li key={answer.id} className={'w-full'}>
								<Button
									onClick={() => handleAnswerClick(answer.id)}
									className={
										'bg-typography-1 pt-[14px] pb-[15px] w-full shadow-info text-primary-violet rounded-xl border-none text-lg leading-[21px] h-auto'
									}
								>
									{answer.title}
								</Button>
							</li>
						))}
					</ul>
				</div>
			</main>
		</div>
	);
};
