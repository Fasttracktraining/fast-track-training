const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 16",
        "questions": [
            { "text": "Who was reigning in England when Wales became formally united with England?", "options": ["Oliver Cromwell", "Henry VIII", "Alexander Fleming"], "correctAnswer": 1 },
            { "text": "During the reign of Henry VIII, Wales became formally united with England?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which TWO of the following are environmental charities?", "options": ["The National Trust & Friends of the Earth", "NSPCC and RSPCA"], "correctAnswer": 0 },
            { "text": "The National Trust and Friends of the Earth are environmental charities?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Where is the city of Swansea located?", "options": ["England", "Scotland", "Wales"], "correctAnswer": 2 },
            { "text": "Haggis is the traditional food of which country?", "options": ["England", "Wales", "Scotland"], "correctAnswer": 2 },
            { "text": "How many people are in a jury in England?", "options": ["12", "18", "24"], "correctAnswer": 0 },
            { "text": "How many people are in a jury in Scotland?", "options": ["12", "20", "15"], "correctAnswer": 2 },
            { "text": "At what age can you smoke in the UK?", "options": ["18", "20", "28"], "correctAnswer": 0 },
            { "text": "At what age should you buy alcohol?", "options": ["16", "18", "24"], "correctAnswer": 1 },
            { "text": "What age can you drive?", "options": ["20", "17", "12"], "correctAnswer": 1 },
            { "text": "What age can you ride a moped?", "options": ["20", "16", "12"], "correctAnswer": 1 },
            { "text": "Who is the longest serving UK prime minster?", "options": ["Winston Churchill", "Sir Robert Walpole", "Margaret Thatcher"], "correctAnswer": 1 },
            { "text": "What is the minimum age required to serve on the jury?", "options": ["20", "18", "12"], "correctAnswer": 1 },
            { "text": "What is New Year’s Eve Called in Scotland?", "options": ["New Years Celebration", "Hogmanay", "The Big Night Out"], "correctAnswer": 1 },
            { "text": "When is St Andrew’s day celebrated in Scotland?", "options": ["25th of December", "30th of November", "1st of November"], "correctAnswer": 1 },
            { "text": "Channel Islands are dependent territories of the British Crown?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "The Scottish Parliament is in Holyrood, Edinburgh?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which English king stopped the Vikings from invading England?", "options": ["Oliver Cromwell", "King Charles II", "King Alfred The Great"], "correctAnswer": 2 },
            { "text": "Name 2 responsibilities of British citizen?", "options": ["Look after your family and respect/obey law", "Go to all wedding functions"], "correctAnswer": 0 },
            { "text": "Which fleet was defeated in 1588 by the English?", "options": ["Italian Fleet", "Spanish Armada", "French Fleet"], "correctAnswer": 1 },
            { "text": "Name the 2 roles of a school governor?", "options": ["Strategic planning and oversight", "Helping with school dinners"], "correctAnswer": 0 },
            { "text": "Scottish banknotes are accepted elsewhere in the UK?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Where is Lake District is located?", "options": ["Scotland", "England", "Wales"], "correctAnswer": 1 }
        ]
    },
    {
        "title": "Life in the UK Test 17",
        "questions": [
            { "text": "Who is the patron saint of England?", "options": ["St Andrew", "St Patrick", "St George"], "correctAnswer": 2 },
            { "text": "Where was Charles II when he was appointed as the King?", "options": ["Scotland", "France", "Netherlands"], "correctAnswer": 2 },
            { "text": "Which sport is associated with Wimbledon?", "options": ["Golf", "Horse racing", "Tennis"], "correctAnswer": 2 },
            { "text": "The National Trust and Friends of the Earth are environmental charities?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "When could women vote at the same age as men?", "options": ["1828", "1728", "1928"], "correctAnswer": 2 },
            { "text": "Minor cases in England can be heard at the Magistrate’s Court?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "The minimum age to serve on a jury is 21?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Darts is a popular game played in pubs?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What is New Year’s Eve called in Scotland?", "options": ["New years going out day", "Hogmanay", "Christmas Eve"], "correctAnswer": 1 },
            { "text": "When is the Christmases day?", "options": ["1st January", "25th December", "1st November"], "correctAnswer": 1 },
            { "text": "What is the capital city of Scotland?", "options": ["London", "Edinburgh", "Dublin"], "correctAnswer": 1 },
            { "text": "How many members are there in the jury in England?", "options": ["20", "12", "25"], "correctAnswer": 1 },
            { "text": "When was the last successful foreign invasion of England?", "options": ["1215", "1485", "1066"], "correctAnswer": 2 },
            { "text": "What is the Turner Prize?", "options": ["Film award", "Sports award", "Art awards"], "correctAnswer": 2 },
            { "text": "Who was William Wilberforce?", "options": ["Doctor", "Athlete", "Politician"], "correctAnswer": 2 },
            { "text": "On which day did Jesus Christ die?", "options": ["Good Friday", "Bad Friday", "Christmas Day"], "correctAnswer": 0 },
            { "text": "Who can apply for the National Citizen Service Programme?", "options": ["16 and 17-year-old", "20 and 21 year olds", "Under 12"], "correctAnswer": 0 },
            { "text": "Who invented the jet engine?", "options": ["Alexander Fleming", "Alan Turing", "Sir Frank Whittle"], "correctAnswer": 2 },
            { "text": "What is the legal age for national lottery?", "options": ["18 years old", "20 years old", "30 years old"], "correctAnswer": 0 },
            { "text": "What flower is associated with Northern Ireland?", "options": ["The Rose", "The Thistle", "The Shamrock"], "correctAnswer": 2 },
            { "text": "When is ST Patrick’s day?", "options": ["Friday the 13th", "17th March", "1st November"], "correctAnswer": 1 },
            { "text": "What do you need to apply for National Insurance Number?", "options": ["Marriage certificate", "Valid ID and right to work"], "correctAnswer": 1 },
            { "text": "Which TWO laws can Wales make?", "options": ["Education and Health", "Prison sentences", "Taxes"], "correctAnswer": 0 },
            { "text": "Where is Big Ben located?", "options": ["Edinburgh", "Scotland", "England, London"], "correctAnswer": 2 }
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
