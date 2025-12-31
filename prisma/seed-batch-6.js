const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 14",
        "questions": [
            { "text": "When is St Patrick’s day celebrated?", "options": ["17th March", "15th June", "24th January"], "correctAnswer": 0 },
            { "text": "How are the members of the Northern Ireland parliament elected?", "options": ["National vote", "Random raffle", "System of proportional representation"], "correctAnswer": 2 },
            { "text": "Who was the first British Prime Minister?", "options": ["Winston Churchill", "Sir Robert Walpole", "Theresa may"], "correctAnswer": 1 },
            { "text": "Which of the following actresses has not won an Oscar?", "options": ["Kate Winslet", "Reece Witherspoon", "Emily Watson"], "correctAnswer": 2 },
            { "text": "During the Enlightenment, Adam Smith developed ideas about:", "options": ["Economics", "Trade", "Periodic Table"], "correctAnswer": 0 },
            { "text": "Who died at the Battle of Trafalgar?", "options": ["Richard Arkwright", "Isaac Newton", "Admiral Nelson"], "correctAnswer": 2 },
            { "text": "When is Hogmanay celebrated?", "options": ["1st January", "31st December", "25th December"], "correctAnswer": 1 },
            { "text": "Proceedings in parliament are published in official reports known as:", "options": ["Enlightenment", "Industrial revolution", "Hansard"], "correctAnswer": 2 },
            { "text": "Which of the following is a Rugby competition?", "options": ["FIFA World Cup", "The Open", "The Six Nations"], "correctAnswer": 2 },
            { "text": "Who appoints life peers in the House of Lords?", "options": ["The Monarch", "The Prime Minister", "The Speaker"], "correctAnswer": 0 },
            { "text": "Who mapped the coast of Australia?", "options": ["Kanye West", "James Cook", "Christopher Columbus"], "correctAnswer": 1 },
            { "text": "What was the first war to be extensively covered by the media?", "options": ["The Falkland War", "The Crimean War", "The Boer War"], "correctAnswer": 1 },
            { "text": "Which of the following monuments is located in Wiltshire?", "options": ["Nelson Column", "Stonehenge", "Angel of the North"], "correctAnswer": 1 },
            { "text": "Who was the first Archbishop of Canterbury?", "options": ["St Augustine", "Pope Francis", "Nick Crompton"], "correctAnswer": 0 },
            { "text": "How old do you have to be to go into gambling or betting clubs?", "options": ["18", "16", "19"], "correctAnswer": 0 },
            { "text": "The system of Government in the UK is a parliamentary democracy?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What is the traditional food of Northern Ireland?", "options": ["Haggis", "Ulster Fry", "Fish & Chips"], "correctAnswer": 1 },
            { "text": "Who was elected as British Prime Minister in 1945?", "options": ["Winston Churchill", "Clement Attlee", "David Cameron"], "correctAnswer": 1 },
            { "text": "How many times has the UK hosted the Olympics?", "options": ["3", "5", "2"], "correctAnswer": 0 },
            { "text": "Why were canals built during the Industrial Revolution?", "options": ["Park boats", "Swimming", "To link factories to towns and cities and to the ports"], "correctAnswer": 2 },
            { "text": "Are Civil Servants appointed by the Government?", "options": ["No", "Yes"], "correctAnswer": 0 },
            { "text": "Which of the following countries helped Britain to develop the Concorde?", "options": ["America", "Spain", "France"], "correctAnswer": 2 },
            { "text": "Which invention leads to the development of England during the Industrial Revolution?", "options": ["Fishing Rods", "Factories", "Steam Power"], "correctAnswer": 2 },
            { "text": "Who was the tribal leader who fought against the Romans?", "options": ["Admiral Nelson", "Isambard Kingdom Brunel", "Boudicca"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 15",
        "questions": [
            { "text": "What 2 languages were used across Britain during the middle Ages?", "options": ["Anglo Saxon & Norman French", "Latin & English"], "correctAnswer": 0 },
            { "text": "Which British colonies declared their Independence because of ‘no taxation without representation’?", "options": ["India", "France", "North America"], "correctAnswer": 2 },
            { "text": "When was England ruled by a republic?", "options": ["When James III was executed", "When Charles I was executed", "When Henry VIII died"], "correctAnswer": 1 },
            { "text": "Which UK film franchise was one of the most commercially successful?", "options": ["Harry Potter", "Star Wars", "Fast and Furious 8"], "correctAnswer": 0 },
            { "text": "When did the first farmers come to Britain?", "options": ["10,000 years ago", "3,000 years ago", "6,000 years ago"], "correctAnswer": 2 },
            { "text": "When did the First World War end?", "options": ["11:00am on 11th November 1918", "1945", "1939"], "correctAnswer": 0 },
            { "text": "Can court orders be obtained to protect a person from being forced into marriage?", "options": ["Yes", "No"], "correctAnswer": 0 },
            { "text": "What medal did Mary Peters win in 1972 Olympics?", "options": ["Bronze", "Silver", "Gold"], "correctAnswer": 2 },
            { "text": "Youth Court cases are normally heard by?", "options": ["Solicitor", "District Judge or 3 specially trained magistrates", "Jury"], "correctAnswer": 1 },
            { "text": "What was invented by Alan Turning in the 1930s?", "options": ["Screwdriver", "The Turing Machine", "Mobile Phone"], "correctAnswer": 1 },
            { "text": "Which tells us about how people lived in England just after Norman Conquest?", "options": ["Bible", "Harry Potter", "Doomsday Book"], "correctAnswer": 2 },
            { "text": "Who led a team of scientists to ‘split the atom’?", "options": ["Ernest Rutherford", "Isaac Newton", "Charles Darwin"], "correctAnswer": 0 },
            { "text": "What song is sung celebrating New Year?", "options": ["We Wish you a Merry Christmas", "Auld Lang Syne", "Silent Night"], "correctAnswer": 1 },
            { "text": "Who fought in the English Civil War of 1642?", "options": ["Cavaliers & Roundheads", "Lancaster", "York"], "correctAnswer": 0 },
            { "text": "Which 2 forts were part of Hadrian’s Wall?", "options": ["Housesteads & Vindolanda", "Spanish Armada", "York"], "correctAnswer": 0 },
            { "text": "What were the religion of the Puritans?", "options": ["Catholics", "Protestants"], "correctAnswer": 1 },
            { "text": "Name of Irish people who favoured independence in 19th century?", "options": ["Celts", "Fenians", "Picts"], "correctAnswer": 1 },
            { "text": "Which 2 British pop music group were famous during the Swinging Sixties?", "options": ["The Beatles & The Rolling Stones", "One Direction"], "correctAnswer": 0 },
            { "text": "What is the minimum age required to drive a motorcycle?", "options": ["16", "18", "17"], "correctAnswer": 2 },
            { "text": "The members of the House of Lords are elected by the people?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "When did the Emancipation Act abolish slavery?", "options": ["1918", "1833", "1658"], "correctAnswer": 1 },
            { "text": "Who is responsible for crime, policing and immigration?", "options": ["The Home Secretary", "Mayor of London", "Prime Minister"], "correctAnswer": 0 },
            { "text": "What kind of genre was Wallace & Gromit?", "options": ["Animation film", "Crime film", "Documentary"], "correctAnswer": 0 },
            { "text": "Anyone who is violent towards their partner can be prosecuted?", "options": ["True", "False"], "correctAnswer": 0 }
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
