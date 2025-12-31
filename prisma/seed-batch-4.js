const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 10",
        "questions": [
            { "text": "Who is the patron saint of England?", "options": ["St Andrew", "St Patrick", "St George"], "correctAnswer": 2 },
            { "text": "Where are Loch Lomond and the Trossachs National Park located?", "options": ["England", "Scotland", "Northern Ireland"], "correctAnswer": 1 },
            { "text": "Wales has its own established church?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which stories are associated with Geoffrey Chaucer?", "options": ["The Canterbury Tales", "Romeo & Juliet", "The Christmas Carol"], "correctAnswer": 0 },
            { "text": "When is Boxing Day celebrated?", "options": ["25th December", "1st January", "26th December"], "correctAnswer": 2 },
            { "text": "What is the name of the holiday when banks and many other businesses are closed for the day?", "options": ["April Fools", "Bank Holiday", "Shrove Tuesday"], "correctAnswer": 1 },
            { "text": "Why were women given the right to vote?", "options": ["Suffragettes damaging property", "In recognition of contribution to war effort", "Margaret Thatcher"], "correctAnswer": 1 },
            { "text": "What do you need to drive in the UK?", "options": ["A valid driving licence", "A British passport", "Provisional licence"], "correctAnswer": 0 },
            { "text": "Where does “the Fringe” festival take place?", "options": ["London", "Belfast", "Edinburgh"], "correctAnswer": 2 },
            { "text": "How many members does the Welsh Assembly have?", "options": ["100", "60", "36"], "correctAnswer": 1 },
            { "text": "The name or photographs of young people found guilty of a crime can be published in media?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What was Edward Elgar famous for?", "options": ["He was a musician", "He was a scientist", "He was a racing car driver"], "correctAnswer": 0 },
            { "text": "Which of the following is not a British bank note?", "options": ["£50", "£25", "£5"], "correctAnswer": 1 },
            { "text": "Where does the Scottish Grand national take place?", "options": ["Ayr", "Edinburgh", "London"], "correctAnswer": 0 },
            { "text": "When did the UK join the EU?", "options": ["1998", "1937", "1973"], "correctAnswer": 2 },
            { "text": "During the reign of Elizabeth I, a large fleet of ships was sent to England from?", "options": ["France", "Germany", "Spain"], "correctAnswer": 2 },
            { "text": "What did the Habeas Corpus Act introduce?", "options": ["3 meals a day", "Every prisoner has a right to a court hearing", "3 hours free time"], "correctAnswer": 1 },
            { "text": "What did Emmeline Pankhurst fight for?", "options": ["Housing", "Right for women to vote", "Free health service"], "correctAnswer": 1 },
            { "text": "What are ‘the Proms’?", "options": ["8 week summer season of orchestral classical music", "Year 11 event", "Prime minister visit"], "correctAnswer": 0 },
            { "text": "What was Isaac Newton known for?", "options": ["Galaxy discovery", "Penicillin", "Gravity"], "correctAnswer": 2 },
            { "text": "When did World War 1 come to an end?", "options": ["1945", "1918", "1939"], "correctAnswer": 1 },
            { "text": "Who built a wall in the north of England to keep out the Picts?", "options": ["Emperor Hadrian", "Julius Cesar", "Henry VIII"], "correctAnswer": 0 },
            { "text": "Which 2 universities participate in an annual rowing race?", "options": ["Oxford & Cambridge", "Leicester & Hull"], "correctAnswer": 0 },
            { "text": "Does England have a written constitution?", "options": ["Yes", "No"], "correctAnswer": 1 }
        ]
    },
    {
        "title": "Life in the UK Test 11",
        "questions": [
            { "text": "Is St Helena part of the UK?", "options": ["No", "Yes"], "correctAnswer": 0 },
            { "text": "Where is Theatreland?", "options": ["Belfast", "London’s West End", "Edinburgh"], "correctAnswer": 1 },
            { "text": "What is the name of the UK currency?", "options": ["Dollar", "Euro", "Pound Sterling"], "correctAnswer": 2 },
            { "text": "What another name is given to Diwali?", "options": ["Festival of Celebration", "Festival of Lights", "Festival of Happiness"], "correctAnswer": 1 },
            { "text": "What is the Enlightenment?", "options": ["Industrial Revolution", "New ideas about politics technology science", "Light bulb invention"], "correctAnswer": 1 },
            { "text": "Which of the following charities helps the environment?", "options": ["Friends of Earth", "Cancer Research", "RSPCA"], "correctAnswer": 0 },
            { "text": "Which of the following was a crucial aerial battle fought between Germany and Britain during WWII?", "options": ["Falklands War", "Battle of Trafalgar", "Battle of Britain"], "correctAnswer": 2 },
            { "text": "What was Margaret Thatcher famous for?", "options": ["First female Prime Minister", "Women vote", "Tax fraud"], "correctAnswer": 0 },
            { "text": "Which 2 languages combine to become one English language?", "options": ["Anglo Saxon & Norman French", "Latin & French"], "correctAnswer": 0 },
            { "text": "By law, media coverage of political parties must be balanced?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Where did the Spanish Armada come from?", "options": ["France", "Poland", "Spain"], "correctAnswer": 2 },
            { "text": "What is the name of the war memorial located in Whitehall?", "options": ["Whitehall memorial", "Commonwealth memorial", "Cenotaph"], "correctAnswer": 2 },
            { "text": "The UK government has never suspended the Northern Ireland Assembly?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Who is responsible for the opening of the new parliamentary session each year?", "options": ["Prime minister", "The Queen", "Speaker"], "correctAnswer": 1 },
            { "text": "When was the Doomsday Book written?", "options": ["After death of James III", "After Norman Conquest", "Before Industrial Revolution"], "correctAnswer": 1 },
            { "text": "The Northern Ireland Assembly cannot make decisions on which 2 issues?", "options": ["Immigration & Defence", "Health & Environment", "Education"], "correctAnswer": 0 },
            { "text": "What should you do to make a complaint about the police?", "options": ["Write to Chief Constable", "Social media", "Sue"], "correctAnswer": 0 },
            { "text": "What flower did William Wordsworth write about?", "options": ["Daffodils", "Roses", "Dandelions"], "correctAnswer": 0 },
            { "text": "When is St Andrews day celebrated?", "options": ["30th November", "1st April", "25th December"], "correctAnswer": 0 },
            { "text": "Can the National Anthem be played if the Queen is not present?", "options": ["Yes", "No"], "correctAnswer": 0 },
            { "text": "When were the first coins in Britain made?", "options": ["Middle age", "Iron ages", "Stone age"], "correctAnswer": 1 },
            { "text": "Who was Emmeline Pankhurst?", "options": ["Scientist", "Inventor", "Suffragette"], "correctAnswer": 2 },
            { "text": "Who did Britain fight against in the Crimean War?", "options": ["Russia", "Germany", "Spain"], "correctAnswer": 0 },
            { "text": "How old do you have to be to buy alcohol in the UK?", "options": ["16", "18", "20"], "correctAnswer": 1 }
        ]
    }
];

async function main() {
    for (const q of allQuizzes) {
        const quiz = await prisma.quiz.create({
            data: {
                title: q.title,
                questions: {
                    create: q.questions.map(qt => ({
                        text: qt.text,
                        options: JSON.stringify(qt.options),
                        correctAnswer: qt.correctAnswer
                    }))
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
