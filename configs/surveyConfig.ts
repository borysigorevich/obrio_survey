enum QuestionTypeEnum {
	SingleChoice = 'SingleChoice',
	MultipleChoice = 'MultipleChoice',
	Text = 'Text',
}

export enum ScreenTypeEnum {
	Default = 'Default',
	Info = 'Info',
}

export type QuestionAnswerType = {
	id: string;
	title: string;
} & (
	| { nextQuestionId: string }
	| { dependsOn: string; nextQuestionId: Record<string, string> }
);

export type QuestionTextPlaceholdersType = {
	[key: string]: {
		source: string;
		values: {
			[key: string]: string | null;
		};
	};
};

type BaseQuestionType = {
	id: string;
	screenType: ScreenTypeEnum;
	title: string;
	questionType?: QuestionTypeEnum;
	answers: QuestionAnswerType[];
	description?: string;
	required?: boolean;
	placeholders?: QuestionTextPlaceholdersType;
	parentQuestionId: string | null;
	isLastQuestion?: boolean;
}

export type DefaultQuestionType = BaseQuestionType & {
	screenType: ScreenTypeEnum.Default;
}

export type InfoQuestionType = BaseQuestionType & {
	screenType: ScreenTypeEnum.Info;
}

export type QuestionType = DefaultQuestionType | InfoQuestionType;

type SurveyConfigType = {
	questions: { [key: string]: QuestionType };
	firstQuestionId: string;
};

export const surveyConfig: SurveyConfigType = {
	firstQuestionId: 'q1',
	questions: {
		q1: {
			id: 'q1',
			parentQuestionId: null,
			title: 'Select your gender:',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q1_a1', title: 'Female', nextQuestionId: 'q2' },
				{ id: 'q1_a2', title: 'Male', nextQuestionId: 'q2' },
			],
			required: true,
		},
		q2: {
			id: 'q2',
			parentQuestionId: 'q1',
			title: 'So we can get to know you better, tell us about your relationship status.',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q2_a1', title: 'Single', nextQuestionId: 'q3' },
				{ id: 'q2_a2', title: 'In a relationship', nextQuestionId: 'q4' },
			],
			required: true,
		},
		q3: {
			id: 'q3',
			parentQuestionId: 'q2',
			title: 'Are you a single parent?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q3_a1', title: 'Yes', nextQuestionId: 'q5' },
				{ id: 'q3_a2', title: 'No', nextQuestionId: 'q5' },
			],
			required: true,
		},
		q4: {
			id: 'q4',
			parentQuestionId: 'q2',
			title: 'Are you a parent?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q4_a1', title: 'Yes', nextQuestionId: 'q6' },
				{ id: 'q4_a2', title: 'No', nextQuestionId: 'q6' },
			],
			required: true,
		},
		q5: {
			id: 'q5',
			parentQuestionId: 'q3',
			title: '{Gender} {ChildrenStatus} need a slightly different approach to improve their relationship. Which statement best describes you?',
			placeholders: {
				Gender: {
					source: 'q1',
					values: {
						q1_a1: 'Female',
						q1_a2: 'Male',
					},
				},
				ChildrenStatus: {
					source: 'q3',
					values: {
						q3_a1: 'with children',
						q3_a2: null,
					},
				},
			},
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{
					id: 'q5_a1',
					title: 'I’m very unhappy with how things are going in my relationship',
					nextQuestionId: 'q7',
				},
				{
					id: 'q5_a2',
					title: 'I’m unhappy with parts of my relationship, but some things are working well',
					nextQuestionId: 'q7',
				},
				{
					id: 'q5_a3',
					title: 'I’m generally happy in my relationship',
					nextQuestionId: 'q7',
				},
			],
			required: true,
		},
		q6: {
			id: 'q6',
			parentQuestionId: 'q4',
			title: 'Single {Gender} {ChildrenStatus} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
			placeholders: {
				Gender: {
					source: 'q1',
					values: {
						q1_a1: 'Female',
						q1_a2: 'Male',
					},
				},
				ChildrenStatus: {
					source: 'q4',
					values: {
						q4_a1: 'with children',
						q4_a2: null,
					},
				},
			},
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{
					id: 'q6_a1',
					title: 'I was unhappy with how things were going in my relationship',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a2',
					title: 'I was unhappy with parts of my relationship, but some things were working',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a3',
					title: 'I was generally happy with my relationship',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a4',
					title: 'I’ve never been in a relationship',
					nextQuestionId: 'q8',
				},
			],
			required: true,
		},
		q7: {
			id: 'q7',
			parentQuestionId: 'q5',
			title: 'Do you tend to overthink?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q7_a1', title: 'Yes', nextQuestionId: 'q9' },
				{ id: 'q7_a2', title: 'No', nextQuestionId: 'q9' },
			],
			required: true,
		},
		q8: {
			id: 'q8',
			parentQuestionId: 'q6',
			title: 'Is your partner an introvert or extrovert?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q8_a1', title: 'Introvert', nextQuestionId: 'q12' },
				{ id: 'q8_a2', title: 'Extrovert', nextQuestionId: 'q12' },
				{ id: 'q8_a3', title: 'A bit of both', nextQuestionId: 'q12' },
			],
			required: true,
		},
		q9: {
			id: 'q9',
			parentQuestionId: 'q7',
			title: 'So how does it work?',
			screenType: ScreenTypeEnum.Info,
			description:
				'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
			answers: [
				{
					id: 'q9_a1',
					title: 'Next',
					dependsOn: 'q7',
					nextQuestionId: {
						q7_a1: 'q10',
						q7_a2: 'q11',
					},
				},
			],
		},
		q10: {
			id: 'q10',
			parentQuestionId: 'q9',
			title: 'What is most important to you?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q10_a1', title: 'Success', nextQuestionId: 'q15' },
				{ id: 'q10_a2', title: 'Romance', nextQuestionId: 'q15' },
				{ id: 'q10_a3', title: 'Stability', nextQuestionId: 'q15' },
				{ id: 'q10_a4', title: 'Freedom', nextQuestionId: 'q15' },
			],
		},
		q11: {
			id: 'q11',
			parentQuestionId: 'q9',
			title: 'Is emotional control tricky for you?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q11_a1', title: 'Yes', nextQuestionId: 'q15' },
				{ id: 'q11_a2', title: 'Sometimes', nextQuestionId: 'q15' },
				{ id: 'q11_a3', title: 'Rarely', nextQuestionId: 'q15' },
				{ id: 'q11_a4', title: 'Not at all', nextQuestionId: 'q15' },
			],
		},
		q12: {
			id: 'q12',
			parentQuestionId: 'q8',
			title: "What is your partner's gender?",
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q12_a1', title: 'Male', nextQuestionId: 'q13' },
				{ id: 'q12_a2', title: 'Female', nextQuestionId: 'q13' },
			],
			required: true,
		},
		q13: {
			id: 'q13',
			parentQuestionId: 'q12',
			title: 'Do you agree with the statement below?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			description: `"My partner and I make sex a priority in our relationship"`,
			answers: [
				{ id: 'q13_a1', title: 'Strongly agree', nextQuestionId: 'q14' },
				{ id: 'q13_a2', title: 'Agree', nextQuestionId: 'q14' },
				{ id: 'q13_a3', title: 'Neutral', nextQuestionId: 'q14' },
				{ id: 'q13_a4', title: 'Disagree', nextQuestionId: 'q14' },
				{ id: 'q13_a5', title: 'Strongly disagree', nextQuestionId: 'q14' },
			],
			required: true,
		},
		q14: {
			id: 'q14',
			parentQuestionId: 'q13',
			title: 'When you think about your relationship goals, you feel...?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{
					id: 'q14_a1',
					title: 'Optimistic! They are totally doable, with some guidance.',
					nextQuestionId: 'q15',
				},
				{
					id: 'q14_a2',
					title: "Cautious. I've struggled before, but I'm hopeful.",
					nextQuestionId: 'q15',
				},
				{
					id: 'q14_a3',
					title: "I'm feeling a little anxious, honestly.",
					nextQuestionId: 'q15',
				},
			],
			required: true,
		},
		q15: {
			id: 'q15',
			parentQuestionId: 'q14',
			title: 'Where did you hear about us?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q15_a1', title: 'Poster or Billboard', nextQuestionId: 'end' },
				{ id: 'q15_a2', title: 'Friend or Family', nextQuestionId: 'end' },
				{ id: 'q15_a3', title: 'Instagram', nextQuestionId: 'end' },
				{
					id: 'q15_a4',
					title: 'Direct Mail or Package Insert',
					nextQuestionId: 'end',
				},
				{
					id: 'q15_a5',
					title: 'Online TV or Streaming TV',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a6', title: 'TV', nextQuestionId: 'end' },
				{ id: 'q15_a7', title: 'Radio', nextQuestionId: 'end' },
				{
					id: 'q15_a8',
					title: 'Search Engine (Google, Bing, etc.)',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a9', title: 'Newspaper or Magazine', nextQuestionId: 'end' },
				{ id: 'q15_a10', title: 'Facebook', nextQuestionId: 'end' },
				{
					id: 'q15_a11',
					title: 'Blog Post or Website Review',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a12', title: 'Podcast', nextQuestionId: 'end' },
				{ id: 'q15_a13', title: 'Influencer', nextQuestionId: 'end' },
				{ id: 'q15_a14', title: 'Youtube', nextQuestionId: 'end' },
				{ id: 'q15_a15', title: 'Pinterest', nextQuestionId: 'end' },
				{ id: 'q15_a16', title: 'Other', nextQuestionId: 'end' },
			],
			required: true,
			isLastQuestion: true
		},
	},
};
