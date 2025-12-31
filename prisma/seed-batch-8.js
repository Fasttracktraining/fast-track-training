const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 18",
        "questions": [
            { "text": "Is it true that one third of the population died during The Black Death?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "St Helena is a British overseas territory and is part of the UK?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "The Justice of the Peace Court deals with minor criminal cases in Wales England and North Ireland?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Who came from the Netherlands to become the British Monarch?", "options": ["James II", "Elizabeth I", "Charles II"], "correctAnswer": 2 },
            { "text": "What is the maximum amount you can claim through the small claims procedure in England and Wales?", "options": ["Less than £3,000", "Less than £10,000", "£50,000"], "correctAnswer": 1 },
            { "text": "Where is the Giants Causeway located?", "options": ["England", "Wales", "Northern Ireland"], "correctAnswer": 2 },
            { "text": "Where is Skara Brae?", "options": ["South of England", "Lake District", "Northern Coast of Scotland"], "correctAnswer": 2 },
            { "text": "Where is the Scottish Parliament is located?", "options": ["Westminster", "Holyrood, Edinburgh", "Nottingham"], "correctAnswer": 1 },
            { "text": "What time do pubs usually open on a Sunday in the UK?", "options": ["1 pm", "12 pm"], "correctAnswer": 1 },
            { "text": "Which two houses form the UK parliament?", "options": ["York and Lancaster", "Lords and Commons", "Semi-detached and Detached"], "correctAnswer": 1 },
            { "text": "Nick Park won Oscars for films featuring:", "options": ["Yasu", "Wallace and Gromit", "Charlie Chaplin"], "correctAnswer": 1 },
            { "text": "Who was the British scientist who co-discovered DNA?", "options": ["Ian Wilmot", "Alexander Flemming", "Sir Francis Crick"], "correctAnswer": 2 },
            { "text": "What percentage of the UK population has a parent or grandparent born outside the UK?", "options": ["Around 20%", "Exactly 50%", "Around 10%"], "correctAnswer": 2 },
            { "text": "Which historical monument did William the Conqueror build?", "options": ["London Eye", "The White Tower", "Hadrin’s Wall"], "correctAnswer": 1 },
            { "text": "When is Remembrance Day?", "options": ["11th November at 11am", "12th November", "13th December"], "correctAnswer": 0 },
            { "text": "The Turner Prize is an award for?", "options": ["Acting", "Science", "Art"], "correctAnswer": 2 },
            { "text": "Which two of the following are British overseas territories?", "options": ["St Helena & Falklands", "Isle of Man", "Guernsey"], "correctAnswer": 0 },
            { "text": "You have to be at least 21 to serve in the jury?", "options": ["False", "True"], "correctAnswer": 0 },
            { "text": "What percentage of the UK population has a parent/grandparent born outside UK?", "options": ["Around 10%", "50%", "25%"], "correctAnswer": 0 },
            { "text": "Police complaints can be made where?", "options": ["To anyone in police force", "Only to officer", "Only receptionist"], "correctAnswer": 0 },
            { "text": "Which flower is associated with Scotland?", "options": ["Thistle", "Rose", "Shamrock"], "correctAnswer": 0 },
            { "text": "Who is the patron saint of Scotland?", "options": ["St Andrew", "St George", "St David"], "correctAnswer": 0 },
            { "text": "Great Britain refers to which three countries?", "options": ["Northern Ireland and Republic", "England, Wales and Scotland"], "correctAnswer": 1 },
            { "text": "What is the minimum driving age for the moped?", "options": ["19", "16", "20"], "correctAnswer": 1 }
        ]
    },
    {
        "title": "Life in the UK Test 19",
        "questions": [
            { "text": "Henry VII married whom after the War of Roses?", "options": ["Elizabeth of York", "Anne of Cleves", "Anne Boleyn"], "correctAnswer": 0 },
            { "text": "What is sent by post to collect before you can vote?", "options": ["Poll Card", "National Insurance Card", "Driving Licence"], "correctAnswer": 0 },
            { "text": "The Justice of the Peace Court deals with minor criminal cases in Wales?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which country competed with England for trade in 1800s?", "options": ["France", "Pakistan", "Bangladesh"], "correctAnswer": 0 },
            { "text": "Who was the inventor of the radar?", "options": ["Sir Robert Watson-Watt", "Alexander Fleming", "Tim Berner’s Lee"], "correctAnswer": 0 },
            { "text": "Isaac Newton had theory about?", "options": ["Politics", "Economics", "Gravity"], "correctAnswer": 2 },
            { "text": "What are the Channel Islands?", "options": ["Crown Dependency", "Independent", "Overseas Territories"], "correctAnswer": 0 },
            { "text": "How many MSPs are in Scotland?", "options": ["180", "200", "129"], "correctAnswer": 2 },
            { "text": "Admiral Nelson fought against which country?", "options": ["England", "Scotland", "France"], "correctAnswer": 2 },
            { "text": "When did World War 1 start?", "options": ["1914", "1939", "1965"], "correctAnswer": 0 },
            { "text": "What are two responsibilities of British people?", "options": ["Look after area/respect law", "Attend parties"], "correctAnswer": 0 },
            { "text": "Golf invented in which century?", "options": ["15th Century", "20th Century", "6th Century"], "correctAnswer": 0 },
            { "text": "Who is the husband of Queen Elizabeth II?", "options": ["Prince Philip", "King Charles II", "James II"], "correctAnswer": 0 },
            { "text": "Minor cases in Northern Ireland are heard in which court?", "options": ["Magistrate Court", "Crown Court", "High Court"], "correctAnswer": 0 },
            { "text": "Who was the Anglo Saxon king who fought against the Vikings?", "options": ["King McAlpin", "Alfred The Great", "David Beckham"], "correctAnswer": 1 },
            { "text": "What was the population of UK in 1951?", "options": ["50 million", "100 million", "200 million"], "correctAnswer": 0 },
            { "text": "When did men and women get to vote at age of 21 for first time?", "options": ["1969", "1066", "1928"], "correctAnswer": 2 },
            { "text": "Charlie Chaplin was famous for playing what role?", "options": ["Doctor", "Priest", "Tramp"], "correctAnswer": 2 },
            { "text": "When was the United Nations set up?", "options": ["After Second World War", "Before First World War", "Vietnam War"], "correctAnswer": 0 },
            { "text": "Where is the Giant’s Causeway located?", "options": ["Northern Ireland", "Scotland", "Wales"], "correctAnswer": 0 },
            { "text": "Which Paralympic athlete has won gold medals for swimming?", "options": ["Ellie Simmonds", "Francis Drake", "Mo Farah"], "correctAnswer": 0 },
            { "text": "Which country is associated with the rose?", "options": ["Wales", "Ireland", "England"], "correctAnswer": 2 },
            { "text": "Who introduced a Scottish Parliament and a Welsh Assembly?", "options": ["Tony Blair", "John Major", "David Cameron"], "correctAnswer": 0 },
            { "text": "Who co-discovered DNA?", "options": ["Alexander Fleming", "Mo Farah", "Sir Francis Crick"], "correctAnswer": 2 }
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
