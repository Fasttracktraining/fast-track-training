export type Question = {
    id: number;
    text: string;
    audioSrc?: string; // Optional audio clip URL
    options: string[];
    correctAnswer: number; // Index of the correct option
    explanation: string;
};

export const quizQuestions: Question[] = [
    {
        id: 1,
        text: "Which of these is a fundamental principle of British life?",
        audioSrc: "https://actions.google.com/sounds/v1/human_voices/male_burp.ogg", // Just a placeholder sound that works generally or can be empty
        options: [
            "Democracy",
            "Shopping",
            "Driving on the right",
            "Talking loudly"
        ],
        correctAnswer: 0,
        explanation: "Democracy is a fundamental principle of British life, along with the rule of law, individual liberty, and mutual respect and tolerance of those with different faiths and beliefs.",
    },
    {
        id: 2,
        text: "How often are General Elections held in the UK?",
        options: [
            "Every 3 years",
            "Every 4 years",
            "Every 5 years",
            "Every 10 years"
        ],
        correctAnswer: 2,
        explanation: "General Elections are held at least every 5 years.",
    },
    {
        id: 3,
        text: "Who is the Head of State in the UK?",
        options: [
            "The Prime Minister",
            "The Monarch",
            "The Archbishop of Canterbury",
            "The Mayor of London"
        ],
        correctAnswer: 1,
        explanation: "The Monarch (King or Queen) is the Head of State.",
    }
];
