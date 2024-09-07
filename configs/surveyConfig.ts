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
	text: string;
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

export type QuestionScreenType = {
	id: string;
	screenType: ScreenTypeEnum.Default;
	text: string;
	questionType: QuestionTypeEnum;
	answers: QuestionAnswerType[];
	description?: string;
	required?: boolean;
	placeholders?: QuestionTextPlaceholdersType;
	parentQuestionId: string | null;
};

export type InfoScreenType = {
	id: string;
	screenType: ScreenTypeEnum.Info;
	text: string;
	description?: string;
	answers: QuestionAnswerType[];
	placeholders?: QuestionTextPlaceholdersType;
	parentQuestionId: string | null;
};

export type ScreenType = QuestionScreenType | InfoScreenType;

type SurveyConfigType = {
	questions: { [key: string]: ScreenType };
	firstQuestionId: string;
};

export const surveyConfig: SurveyConfigType = {
	firstQuestionId: 'q1',
	questions: {
		q1: {
			id: 'q1',
			parentQuestionId: null,
			text: 'Select your gender:',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q1_a1', text: 'Female', nextQuestionId: 'q2' },
				{ id: 'q1_a2', text: 'Male', nextQuestionId: 'q2' },
			],
			required: true,
		},
		q2: {
			id: 'q2',
			parentQuestionId: 'q1',
			text: 'So we can get to know you better, tell us about your relationship status.',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q2_a1', text: 'Single', nextQuestionId: 'q3' },
				{ id: 'q2_a2', text: 'In a relationship', nextQuestionId: 'q4' },
			],
			required: true,
		},
		q3: {
			id: 'q3',
			parentQuestionId: 'q2',
			text: 'Are you a single parent?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q3_a1', text: 'Yes', nextQuestionId: 'q5' },
				{ id: 'q3_a2', text: 'No', nextQuestionId: 'q5' },
			],
			required: true,
		},
		q4: {
			id: 'q4',
			parentQuestionId: 'q2',
			text: 'Are you a parent?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q4_a1', text: 'Yes', nextQuestionId: 'q6' },
				{ id: 'q4_a2', text: 'No', nextQuestionId: 'q6' },
			],
			required: true,
		},
		q5: {
			id: 'q5',
			parentQuestionId: 'q3',
			text: '{Gender} {ChildrenStatus} need a slightly different approach to improve their relationship. Which statement best describes you?',
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
					text: 'I’m very unhappy with how things are going in my relationship',
					nextQuestionId: 'q7',
				},
				{
					id: 'q5_a2',
					text: 'I’m unhappy with parts of my relationship, but some things are working well',
					nextQuestionId: 'q7',
				},
				{
					id: 'q5_a3',
					text: 'I’m generally happy in my relationship',
					nextQuestionId: 'q7',
				},
			],
			required: true,
		},
		q6: {
			id: 'q6',
			parentQuestionId: 'q4',
			text: 'Single {Gender} {ChildrenStatus} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
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
					text: 'I was unhappy with how things were going in my relationship',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a2',
					text: 'I was unhappy with parts of my relationship, but some things were working',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a3',
					text: 'I was generally happy with my relationship',
					nextQuestionId: 'q8',
				},
				{
					id: 'q6_a4',
					text: 'I’ve never been in a relationship',
					nextQuestionId: 'q8',
				},
			],
			required: true,
		},
		q7: {
			id: 'q7',
			parentQuestionId: 'q5',
			text: 'Do you tend to overthink?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q7_a1', text: 'Yes', nextQuestionId: 'q9' },
				{ id: 'q7_a2', text: 'No', nextQuestionId: 'q9' },
			],
			required: true,
		},
		q8: {
			id: 'q8',
			parentQuestionId: 'q6',
			text: 'Is your partner an introvert or extrovert?',
			questionType: QuestionTypeEnum.SingleChoice,
			screenType: ScreenTypeEnum.Default,
			answers: [
				{ id: 'q8_a1', text: 'Introvert', nextQuestionId: 'q12' },
				{ id: 'q8_a2', text: 'Extrovert', nextQuestionId: 'q12' },
				{ id: 'q8_a3', text: 'A bit of both', nextQuestionId: 'q12' },
			],
			required: true,
		},
		q9: {
			id: 'q9',
			parentQuestionId: 'q7',
			text: 'So how does it work?',
			screenType: ScreenTypeEnum.Info,
			description:
				'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
			answers: [
				{
					id: 'q9_a1',
					text: 'Next',
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
			text: 'What is most important to you?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q10_a1', text: 'Success', nextQuestionId: 'q15' },
				{ id: 'q10_a2', text: 'Romance', nextQuestionId: 'q15' },
				{ id: 'q10_a3', text: 'Stability', nextQuestionId: 'q15' },
				{ id: 'q10_a4', text: 'Freedom', nextQuestionId: 'q15' },
			],
		},
		q11: {
			id: 'q11',
			parentQuestionId: 'q9',
			text: 'Is emotional control tricky for you?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q11_a1', text: 'Yes', nextQuestionId: 'q15' },
				{ id: 'q11_a2', text: 'Sometimes', nextQuestionId: 'q15' },
				{ id: 'q11_a3', text: 'Rarely', nextQuestionId: 'q15' },
				{ id: 'q11_a4', text: 'Not at all', nextQuestionId: 'q15' },
			],
		},
		q12: {
			id: 'q12',
			parentQuestionId: 'q8',
			text: "What is your partner's gender?",
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q12_a1', text: 'Male', nextQuestionId: 'q13' },
				{ id: 'q12_a2', text: 'Female', nextQuestionId: 'q13' },
			],
			required: true,
		},
		q13: {
			id: 'q13',
			parentQuestionId: 'q12',
			text: 'Do you agree with the statement below?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			description: `"My partner and I make sex a priority in our relationship"`,
			answers: [
				{ id: 'q13_a1', text: 'Strongly agree', nextQuestionId: 'q14' },
				{ id: 'q13_a2', text: 'Agree', nextQuestionId: 'q14' },
				{ id: 'q13_a3', text: 'Neutral', nextQuestionId: 'q14' },
				{ id: 'q13_a4', text: 'Disagree', nextQuestionId: 'q14' },
				{ id: 'q13_a5', text: 'Strongly disagree', nextQuestionId: 'q14' },
			],
			required: true,
		},
		q14: {
			id: 'q14',
			parentQuestionId: 'q13',
			text: 'When you think about your relationship goals, you feel...?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{
					id: 'q14_a1',
					text: 'Optimistic! They are totally doable, with some guidance.',
					nextQuestionId: 'q15',
				},
				{
					id: 'q14_a2',
					text: "Cautious. I've struggled before, but I'm hopeful.",
					nextQuestionId: 'q15',
				},
				{
					id: 'q14_a3',
					text: "I'm feeling a little anxious, honestly.",
					nextQuestionId: 'q15',
				},
			],
			required: true,
		},
		q15: {
			id: 'q15',
			parentQuestionId: 'q14',
			text: 'Where did you hear about us?',
			screenType: ScreenTypeEnum.Default,
			questionType: QuestionTypeEnum.SingleChoice,
			answers: [
				{ id: 'q15_a1', text: 'Poster or Billboard', nextQuestionId: 'end' },
				{ id: 'q15_a2', text: 'Friend or Family', nextQuestionId: 'end' },
				{ id: 'q15_a3', text: 'Instagram', nextQuestionId: 'end' },
				{
					id: 'q15_a4',
					text: 'Direct Mail or Package Insert',
					nextQuestionId: 'end',
				},
				{
					id: 'q15_a5',
					text: 'Online TV or Streaming TV',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a6', text: 'TV', nextQuestionId: 'end' },
				{ id: 'q15_a7', text: 'Radio', nextQuestionId: 'end' },
				{
					id: 'q15_a8',
					text: 'Search Engine (Google, Bing, etc.)',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a9', text: 'Newspaper or Magazine', nextQuestionId: 'end' },
				{ id: 'q15_a10', text: 'Facebook', nextQuestionId: 'end' },
				{
					id: 'q15_a11',
					text: 'Blog Post or Website Review',
					nextQuestionId: 'end',
				},
				{ id: 'q15_a12', text: 'Podcast', nextQuestionId: 'end' },
				{ id: 'q15_a13', text: 'Influencer', nextQuestionId: 'end' },
				{ id: 'q15_a14', text: 'Youtube', nextQuestionId: 'end' },
				{ id: 'q15_a15', text: 'Pinterest', nextQuestionId: 'end' },
				{ id: 'q15_a16', text: 'Other', nextQuestionId: 'end' },
			],
			required: true,
		},
	},
};
