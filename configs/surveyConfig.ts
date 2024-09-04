type Answer = {
    id: string;
    text: string;
    nextQuestionId?: string;
};

type Question = {
    id: string;
    text?: string;
    type: "singleChoice" | "multipleChoice" | "text";
    answers: Answer[];
    required?: boolean;
    dynamicText?: (answers: Record<string, string>) => string;
};

type SurveyConfig = {
    questions: { [key: string]: Question };
};

const surveyConfig: SurveyConfig = {
    questions: {
        q1: {
            id: "q1",
            text: "Select your gender:",
            type: "singleChoice",
            answers: [
                { id: "a1", text: "Female", nextQuestionId: "q2" },
                { id: "a2", text: "Male", nextQuestionId: "q2" },
            ],
            required: true,
        },
        q2: {
            id: "q2",
            text: "So we can get to know you better, tell us about your relationship status.",
            type: "singleChoice",
            answers: [
                { id: "a3", text: "Single", nextQuestionId: "q3" },
                { id: "a4", text: "In a relationship", nextQuestionId: "q4" },
            ],
            required: true,
        },
        q3: {
            id: "q3",
            text: "Are you a single parent?",
            type: "singleChoice",
            answers: [
                { id: "a5", text: "Yes", nextQuestionId: "q5" },
                { id: "a6", text: "No", nextQuestionId: "q5" },
            ],
            required: true,
        },
        q4: {
            id: "q4",
            text: "Are you a parent?",
            type: "singleChoice",
            answers: [
                { id: "a7", text: "Yes", nextQuestionId: "q6" },
                { id: "a8", text: "No", nextQuestionId: "q6" },
            ],
            required: true,
        },
        q5: {
            id: "q5",
            dynamicText: (answers) => `${answers['q1']} ${answers['q3'] ? 'who have children' : ''} need a slightly different approach to find their perfect partner. Which statement best describes you?`,
            type: "singleChoice",
            answers: [
                { id: "a9", text: "I was unhappy with how things were going in my relationship", nextQuestionId: "q7" },
                { id: "a10", text: "I was unhappy with parts of my relationship, but some things were working", nextQuestionId: "q7" },
                { id: "a11", text: "I was generally happy with my relationship", nextQuestionId: "q7" },
            ],
            required: true,
        },
        q6: {
            id: "q6",
            dynamicText: (answers) => `Single ${answers['q1']} ${answers['q3'] ? 'who have children' : ''} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
            type: "singleChoice",
            answers: [
                { id: "a12", text: "I was unhappy with how things were going in my relationship", nextQuestionId: "q8" },
                { id: "a13", text: "I was unhappy with parts of my relationship, but some things were working", nextQuestionId: "q8" },
                { id: "a14", text: "I was generally happy with my relationship", nextQuestionId: "q8" },
                { id: "a15", text: "I’ve never been in a relationship", nextQuestionId: "q8" },
            ],
            required: true,
        },
    },
};

export default surveyConfig;