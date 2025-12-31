const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 12",
        "questions": [
            { "text": "Which of the following is a Crown Dependency but is not part of the UK?", "options": ["Falkland Islands", "Isle of Man", "Guernsey"], "correctAnswer": 1 },
            { "text": "Is the BBC controlled by the government?", "options": ["No", "Yes"], "correctAnswer": 0 },
            { "text": "How many members does the Northern Ireland Assembly have?", "options": ["60", "90", "38"], "correctAnswer": 1 },
            { "text": "Who was in charge of the British fleet at the Battle of Trafalgar?", "options": ["Isaac Newton", "Winston Churchill", "Admiral Nelson"], "correctAnswer": 2 },
            { "text": "What was inscribed in the first coins to be minted in Britain during the Iron Ages?", "options": ["Names of the makers", "Drawings of animals", "Names of Iron Age kings"], "correctAnswer": 2 },
            { "text": "Towns, cities and rural areas in the UK are governed by Government appointed officials?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Where is the Tate Art Gallery located?", "options": ["London", "Belfast", "Cardiff"], "correctAnswer": 0 },
            { "text": "The version of the Bible created by King James I is known as?", "options": ["James’ Bible", "Unauthorised Bible", "Authorized Bible"], "correctAnswer": 2 },
            { "text": "What is the period of the 1960s known for?", "options": ["First female Prime Minister", "UK joined EU", "Growth in British Fashion and Pop music"], "correctAnswer": 2 },
            { "text": "Between 1680 and 1720 many refugees called Huguenots came to England, which country did they come from?", "options": ["India", "France", "North Korea"], "correctAnswer": 1 },
            { "text": "What is the most famous tennis tournament played in the UK?", "options": ["Wimbledon", "The Open", "International T20"], "correctAnswer": 0 },
            { "text": "MPs can only be contacted at their office in the House of Commons?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What is April Fool’s Day?", "options": ["Jokes published in newspapers", "March Fools", "July Fools"], "correctAnswer": 0 },
            { "text": "Which Scottish king defeated the English at the Battle of Bannockburn?", "options": ["King Richard", "King James III", "Robert the Bruce"], "correctAnswer": 2 },
            { "text": "Who invented the World Wide Web?", "options": ["Sir Tim Berners-Lee", "Isaac Newton", "Richard Arkwright"], "correctAnswer": 0 },
            { "text": "How are Civil servants appointed?", "options": ["By Prime Minister", "On merit, politically neutral", "By Queen"], "correctAnswer": 1 },
            { "text": "What is known as the ‘Dunkirk Spirit’?", "options": ["Soldiers killed", "Drink", "The evacuation of Allied soldiers from France"], "correctAnswer": 2 },
            { "text": "You have to be at least 21 to serve in the jury?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "If you wish to be a permanent resident or citizen of the UK, you should:", "options": ["Respect rights of others & Look after yourself/family", "Walk dog/Have licence"], "correctAnswer": 0 },
            { "text": "Which of the following major sports events took place in the UK in 2012?", "options": ["The Open", "Tour De France", "The Olympics"], "correctAnswer": 2 },
            { "text": "Charles I believed in ‘Divine Right of Kings’ so he tried:", "options": ["To rule without a parliament", "To rule Spain", "Thought he was immortal"], "correctAnswer": 0 },
            { "text": "What is the Union Jack?", "options": ["The flag of the United Kingdom", "Parliament name", "Statue"], "correctAnswer": 0 },
            { "text": "Who was voted the greatest Briton of all time in 2002?", "options": ["David Cameron", "Winston Churchill", "Theresa May"], "correctAnswer": 1 },
            { "text": "Which of the following statements are true about women in workforce?", "options": ["87%", "27%", "Women make up half of the work force"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 13",
        "questions": [
            { "text": "When is St George’s day?", "options": ["23rd April", "30th November", "1st January"], "correctAnswer": 0 },
            { "text": "Which is the largest National park in England?", "options": ["Hyde park", "Loch Lomond", "Lake District"], "correctAnswer": 2 },
            { "text": "Boudicca fought against which foreign invaders?", "options": ["Anglo Saxons", "The Romans", "The Spanish"], "correctAnswer": 1 },
            { "text": "Which poem is about a group of people going on a pilgrimage?", "options": ["Remains", "Poppies", "The Canterbury Tales"], "correctAnswer": 2 },
            { "text": "What are public holidays called?", "options": ["Bank Holiday", "National Holiday", "Shrove Tuesday"], "correctAnswer": 0 },
            { "text": "How did Charles II manage to escape to Europe after his defeat?", "options": ["Private jet", "Hid in an oak tree", "Underground tunnel"], "correctAnswer": 1 },
            { "text": "Who defeated the Vikings?", "options": ["William the conqueror", "King Alfred the Great", "Margret Thatcher"], "correctAnswer": 1 },
            { "text": "Who was William Caxton?", "options": ["Playwright", "Scientist", "First person to print books using printing press"], "correctAnswer": 2 },
            { "text": "Where do beefeaters serve as tour guides?", "options": ["Tower of London", "Town Centres", "Ancient Castles"], "correctAnswer": 0 },
            { "text": "Bonnie Prince Charlie was supported by clansmen from which Scottish region?", "options": ["Highlands", "Villages", "Lake district"], "correctAnswer": 0 },
            { "text": "What religion did Elizabeth I follow?", "options": ["Catholic", "Protestant", "No religion"], "correctAnswer": 1 },
            { "text": "Who became famous for his tramp character in silent movies?", "options": ["George Clooney", "Chuckle Brothers", "Charlie Chaplin"], "correctAnswer": 2 },
            { "text": "Which armed force was used in the Battle of Britain?", "options": ["Navy", "Armed Police", "Royal Air Force"], "correctAnswer": 2 },
            { "text": "In the UK, you have to be 21 years old to be able to vote?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which poet was inspired by nature?", "options": ["William Wordsworth", "William Shakespeare", "Simon Armitage"], "correctAnswer": 0 },
            { "text": "Against which country did Britain fight at the Battle of Waterloo?", "options": ["France", "Germany", "Spain"], "correctAnswer": 0 },
            { "text": "Who was William Wilberforce?", "options": ["Painter", "Poet", "Politician"], "correctAnswer": 2 },
            { "text": "Who is the spiritual leader of the Church of England?", "options": ["Pope", "Archbishop of Canterbury", "Prime Minister"], "correctAnswer": 1 },
            { "text": "James I was king of which country before becoming king of Great Britain?", "options": ["Austria", "Poland", "Scotland"], "correctAnswer": 2 },
            { "text": "Which statement is correct about shops?", "options": ["Pubs close at 8", "Open all hours", "Most shops in the UK are open seven days a week"], "correctAnswer": 2 },
            { "text": "Which country sent a fleet of ships to Britain in 1588?", "options": ["Spain", "France", "South Africa"], "correctAnswer": 0 },
            { "text": "Where is the National Horseracing Museum located?", "options": ["Newmarket, Suffolk", "Stratford", "Belfast"], "correctAnswer": 0 },
            { "text": "Which of the following castles is located in Scotland?", "options": ["Windsor Castle", "Nottingham Castle", "Crathes Castle"], "correctAnswer": 2 },
            { "text": "How often are European parliamentary elections held?", "options": ["4 years", "7 years", "5 years"], "correctAnswer": 2 }
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
