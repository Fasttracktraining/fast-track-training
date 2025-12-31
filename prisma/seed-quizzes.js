const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create Mock Quizzes
    const quizzes = [
        {
            title: "Life in the UK: Practice Test 1",
            description: "Fundamental principles of British life and government.",
            questions: [
                {
                    text: "Which of these is a fundamental principle of British life?",
                    options: JSON.stringify(["Democracy", "Shopping", "Driving on the right", "Talking loudly"]),
                    correctAnswer: 0,
                    explanation: "Democracy is a fundamental principle of British life.",
                },
                {
                    text: "How often are General Elections held in the UK?",
                    options: JSON.stringify(["Every 3 years", "Every 4 years", "Every 5 years", "Every 10 years"]),
                    correctAnswer: 2,
                    explanation: "General Elections are held at least every 5 years.",
                },
                {
                    text: "Who is the Head of State in the UK?",
                    options: JSON.stringify(["The Prime Minister", "The Monarch", "The Archbishop of Canterbury", "The Mayor of London"]),
                    correctAnswer: 1,
                    explanation: "The Monarch is the Head of State."
                }
            ]
        },
        {
            title: "Life in the UK: Practice Test 2",
            description: "History and Law.",
            questions: [
                {
                    text: "Which court deals with minor criminal cases in England, Wales and Northern Ireland?",
                    options: JSON.stringify(["High Court", "Crown Court", "Magistrates' Court", "County Court"]),
                    correctAnswer: 2,
                    explanation: "Magistrates' Courts deal with minor criminal cases.",
                },
                {
                    text: "What includes the right to a fair trial?",
                    options: JSON.stringify(["The Bill of Rights", "Magna Carta", "The Act of Union", "The Domesday Book"]),
                    correctAnswer: 1,
                    explanation: "The Magna Carta established the idea that even the King was subject to the law.",
                }
            ]
        }
    ];

    for (const q of quizzes) {
        const quiz = await prisma.quiz.create({
            data: {
                title: q.title,
                description: q.description,
                questions: {
                    create: q.questions
                }
            }
        });
        console.log(`Created quiz: ${quiz.title}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
