const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const quizData = {
        title: "Life in the UK Test 1",
        description: "Official practice questions for the Life in the UK test covering British values, history, government, and law.",
        questions: [
            {
                text: "What is a responsibility that you will have as a British citizen or permanent resident of the UK?",
                options: JSON.stringify([
                    "To look after the area in which you live and the environment",
                    "Attend all gatherings in your area",
                    "Eat fish and chips every Friday",
                    "Drive to work in a car everyday"
                ]),
                correctAnswer: 0,
                explanation: "Responsibilities include looking after yourself, your family, and the environment."
            },
            {
                text: "Where is Big Ben located?",
                options: JSON.stringify([
                    "House of Lancaster",
                    "Houses of Parliament",
                    "Buckingham Palace",
                    "Tower of London"
                ]),
                correctAnswer: 1,
                explanation: "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster (Houses of Parliament)."
            },
            {
                text: "When were men and women given the right to vote at the age of 21?",
                options: JSON.stringify(["1928", "1979", "1912", "1918"]),
                correctAnswer: 0,
                explanation: "In 1928, the voting age was lowered to 21 for both men and women."
            },
            {
                text: "Where is the UK geographically located?",
                options: JSON.stringify(["South East Europe", "North East Europe", "North West Europe", "South West Europe"]),
                correctAnswer: 2,
                explanation: "The UK is located in North West Europe."
            },
            {
                text: "Who is the patron saint of Scotland?",
                options: JSON.stringify(["St George", "St Andrew", "St Patrick", "St David"]),
                correctAnswer: 1,
                explanation: "St Andrew is the patron saint of Scotland."
            },
            {
                text: "Which house fought in the War of the Roses alongside the House of York?",
                options: JSON.stringify(["House of Westminster", "House of Lancaster", "House of Tudor", "House of Parliament"]),
                correctAnswer: 1,
                explanation: "The War of the Roses was fought between the House of Lancaster (Red Rose) and the House of York (White Rose)."
            },
            {
                text: "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
                options: JSON.stringify(["True", "False"]),
                correctAnswer: 1,
                explanation: "False. The Bill of Rights 1689 established Parliamentary privilege but did not give universal suffrage."
            },
            {
                text: "What is the Cenotaph?",
                options: JSON.stringify(["A large outdoor theatre", "A war memorial", "Latin word for Stone Henge", "A museum"]),
                correctAnswer: 1,
                explanation: "The Cenotaph is a war memorial located in Whitehall, London."
            },
            {
                text: "Who was the first female Prime Minister of the UK?",
                options: JSON.stringify(["Theresa May", "Nicola Sturgeon", "Margaret Thatcher", "Queen Elizabeth II"]),
                correctAnswer: 2,
                explanation: "Margaret Thatcher became the first female Prime Minister in 1979."
            },
            {
                text: "Who chairs the debates at the House of Commons?",
                options: JSON.stringify(["The Speaker", "The Life Peers", "Cross Benchers", "The Prime Minister"]),
                correctAnswer: 0,
                explanation: "The Speaker chairs the debates in the House of Commons."
            },
            {
                text: "Who was the captain of the English football team that won the World Cup in 1966?",
                options: JSON.stringify(["Bobby Moore", "Steven Gerrard", "Billy Wright", "David Beckham"]),
                correctAnswer: 0,
                explanation: "Bobby Moore was the captain of the 1966 World Cup winning team."
            },
            {
                text: "When did the English defeat the Spanish Armada?",
                options: JSON.stringify(["1466", "1697", "1588", "1066"]),
                correctAnswer: 2,
                explanation: "The Spanish Armada was defeated in 1588."
            },
            {
                text: "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
                options: JSON.stringify(["True", "False"]),
                correctAnswer: 0,
                explanation: "True. You can complain directly to the police force involved."
            },
            {
                text: "What is the minimum age required to serve on a jury?",
                options: JSON.stringify(["18", "20", "12", "21"]),
                correctAnswer: 0,
                explanation: "The minimum age for jury service is 18."
            },
            {
                text: "How is the jury selected?",
                options: JSON.stringify(["People vote for them", "They apply online", "Randomly from the electoral register", "Chosen by the judge"]),
                correctAnswer: 2,
                explanation: "Juries are selected randomly from the electoral register."
            },
            {
                text: "What is a Bank Holiday?",
                options: JSON.stringify([
                    "When banks close for summer",
                    "A public holiday when banks and businesses are closed",
                    "When bank staff go on holiday",
                    "A strike day"
                ]),
                correctAnswer: 1,
                explanation: "Bank holidays are public holidays in the UK."
            },
            {
                text: "What will you be given to vote before a general election takes place?",
                options: JSON.stringify(["Poll Card", "Gift Card", "Identity Card", "Membership Card"]),
                correctAnswer: 0,
                explanation: "You receive a poll card telling you where and when to vote."
            },
            {
                text: "Which of the following statements is correct regarding solicitors?",
                options: JSON.stringify([
                    "Charges are usually based on how much time they spend on a case",
                    "Charges are usually based on how much they want to do the case",
                    "Charges are usually based on how much money they want to earn",
                    "Charges are fixed by the government"
                ]),
                correctAnswer: 0,
                explanation: "Solicitors mostly charge by the time spent on a case."
            },
            {
                text: "Which type of media must give balanced coverage of all political parties before an election?",
                options: JSON.stringify(["Newspaper", "Television", "Online Blogs", "Magazines"]),
                correctAnswer: 1,
                explanation: "Television and radio broadcasters are required by law to remain distinct from political parties and be balanced."
            },
            {
                text: "Which of the following is a Crown dependency but NOT part of the UK?",
                options: JSON.stringify(["The Isle of Man", "The Falklands", "Hawaii", "Australia"]),
                correctAnswer: 0,
                explanation: "The Isle of Man and the Channel Islands are Crown dependencies."
            },
            {
                text: "What did Sir Frank Whittle invent in the 1930s?",
                options: JSON.stringify(["Electric Car", "Jet Engine", "Telephone", "Television"]),
                correctAnswer: 1,
                explanation: "Sir Frank Whittle key in the invention of the jet engine."
            },
            {
                text: "Who wrote 'The Daffodils'?",
                options: JSON.stringify(["Richard Arkwright", "William Shakespeare", "William Wordsworth", "Jane Austen"]),
                correctAnswer: 2,
                explanation: "William Wordsworth wrote the poem 'I Wandered Lonely as a Cloud', commonly known as 'The Daffodils'."
            },
            {
                text: "Who was given the title of Lord Protector?",
                options: JSON.stringify(["Charles I", "Henry VIII", "Oliver Cromwell", "Winston Churchill"]),
                correctAnswer: 2,
                explanation: "Oliver Cromwell was named Lord Protector of the Commonwealth."
            },
            {
                text: "What are the 40 days before Easter called?",
                options: JSON.stringify(["Hogmanay", "Christmas", "Lent", "Advent"]),
                correctAnswer: 2,
                explanation: "Lent is the 40-day period before Easter."
            }
        ]
    };

    const quiz = await prisma.quiz.create({
        data: {
            title: quizData.title,
            description: quizData.description,
            questions: {
                create: quizData.questions
            }
        }
    });

    console.log(`Created quiz: ${quiz.title} with ${quizData.questions.length} questions`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
