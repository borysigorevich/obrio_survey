import { Header } from '@/components/render-question/components/default-question/components';
import { Button } from '@/components/ui';
import { DefaultQuestionType } from '@/configs/surveyConfig';
import { cn } from '@/lib/utils';
import React from 'react';
import { SetAnswerFnType } from '../../hooks';

type DefaultQuestionProps = {
	title: DefaultQuestionType['title'];
	description?: DefaultQuestionType['description'];
	answers: DefaultQuestionType['answers'];
	parentQuestionId: DefaultQuestionType['parentQuestionId'];
	handleAnswerClick: SetAnswerFnType;
};

export const DefaultQuestion = ({
	title,
	description,
	answers,
	parentQuestionId,
	handleAnswerClick,
}: DefaultQuestionProps) => {
	return (
		<div className={'min-h-full bg-background'}>
			<Header parentQuestionId={parentQuestionId} />
			<main className={'px-[15px] lg:px-0 py-5'}>
				<div className={'max-w-[330px] mx-auto w-full'}>
					<h1
						className={cn(
							'text-2xl leading-[28px] font-bold text-typography-8',
							description && 'text-center text-typography-black'
						)}
					>
						{title}
					</h1>
					{description && (
						<h2
							className={
								'mt-5 text-typography-black font-bold text-lg text-center leading-[28px]'
							}
						>
							{description}
						</h2>
					)}
					<ul className={'mt-[30px] grid gap-5'}>
						{answers.map((answer) => (
							<li key={answer.id} className={'w-full'}>
								<Button
									className={'w-full'}
									onClick={() => handleAnswerClick(answer.id)}
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
