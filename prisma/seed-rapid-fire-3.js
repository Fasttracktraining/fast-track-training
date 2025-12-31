const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const reviewQuiz = {
    title: "Rapid Fire Review 3: Questions 81-118",
    questions: [
        { text: "What sort of charity is ‘Friends of the Earth’?", options: ["Friend Making Charity", "Health Charity", "Environmental Charity", "Orphan Charity"], correctAnswer: 2, explanation: "It is an environmental charity." },
        { text: "Which of the following action is known as ‘Canvassing’?", options: ["Painting", "Voting for governor", "Persuading people to vote", "Influencing charity"], correctAnswer: 2, explanation: "Canvassing involves persuading people to vote for a political party." },
        { text: "Which of the following poems is about a group of people going on a pilgrimage?", options: ["Remains", "Poppies", "The Canterbury Tales"], correctAnswer: 2, explanation: "The Canterbury Tales by Geoffrey Chaucer." },
        { text: "Where do Beefeaters serve as tour guides?", options: ["The Tower of London", "Ancient Castles", "Town Centres", "Art Gallery"], correctAnswer: 0, explanation: "They serve at the Tower of London." },
        { text: "What religion did Queen Elizabeth I follow?", options: ["Islam", "Judaism", "Catholic", "Protestant"], correctAnswer: 3, explanation: "She was a Protestant." },
        { text: "Which of the following is not a valid UK coin?", options: ["50p", "25p", "20p"], correctAnswer: 1, explanation: "There is no 25p coin in general circulation." },
        { text: "How often is ‘Prime Minister’s Questions’ held in parliament?", options: ["Every week", "Every Fortnight", "Every Month", "Every Year"], correctAnswer: 0, explanation: "It is held every week while Parliament is sitting." },
        { text: "Where was William Shakespeare born?", options: ["Stratford-upon-Avon", "Berkshire", "Yorkshire", "Berlin"], correctAnswer: 0, explanation: "Stratford-upon-Avon." },
        { text: "On what day is the birth of Jesus celebrated?", options: ["Halloween", "Easter", "Christmas Day", "New Year"], correctAnswer: 2, explanation: "Christmas Day." },
        { text: "What did Sir Frank Whittle invent in the 1930s?", options: ["Bulb", "Telephone", "Jet Engine", "Electric Car"], correctAnswer: 2, explanation: "The Jet Engine." },
        { text: "Who wrote 'The Daffodils'?", options: ["Adam Smith", "William Wordsworth", "Shakespeare", "Arkwright"], correctAnswer: 1, explanation: "William Wordsworth." },
        { text: "Who is the Patron Saint of Wales?", options: ["St David", "St Albans", "St Luan", "St Deiniol"], correctAnswer: 0, explanation: "St David." },
        { text: "What is the Cenotaph?", options: ["A large theatre", "A war memorial", "Stone Henge", "Artwork"], correctAnswer: 1, explanation: "It is a war memorial in Whitehall." },
        { text: "By law, which TWO types of media have to give a balanced coverage of all political parties?", options: ["Online News", "Television & Radio", "Newspaper"], correctAnswer: 1, explanation: "Television and Radio." },
        { text: "Who was supported by clansmen from the Scottish highlands and raised an army in 1745?", options: ["Stalin", "Churchill", "William Conqueror", "Bonnie Prince Charlie"], correctAnswer: 3, explanation: "Bonnie Prince Charlie." },
        { text: "Is it compulsory for 16 and 17-years-olds to join National Citizen Service Programme?", options: ["True", "False"], correctAnswer: 1, explanation: "False, it is voluntary." },
        { text: "During the great depression in the 1930s which industry was badly affected?", options: ["Fishing", "Music", "Shipbuilding", "Motor industry"], correctAnswer: 2, explanation: "Traditional heavy industries like shipbuilding were famously affected." },
        { text: "What type of character was played by Charlie Chaplin?", options: ["A Tramp", "A Psychopath", "A Clown", "A Writer"], correctAnswer: 0, explanation: "He was famous for playing 'The Tramp'." },
        { text: "When does Easter take place?", options: ["Jan or Feb", "March or April", "June or July", "Aug or Sept"], correctAnswer: 1, explanation: "March or April." },
        { text: "The Northern Ireland Assembly cannot make decisions on which 2 of the following issues?", options: ["Defence & Immigration", "Health", "Environment"], correctAnswer: 0, explanation: "Defence and Immigration are reserved matters." },
        { text: "Which of the following is a rugby competition?", options: ["FIFA World Cup", "Cricket World Cup", "The Six Nations", "Ascot"], correctAnswer: 2, explanation: "The Six Nations." },
        { text: "Who became King of Scotland after Mary, Queen of Scots died?", options: ["Her son, James VI", "Her cousin", "Her Husband", "Her Brother"], correctAnswer: 0, explanation: "Her son, James VI." },
        { text: "Why did Henry VIII establish the Church of England?", options: ["To become powerful", "To divorce his first wife, Catherine of Aragon", "To prove power"], correctAnswer: 1, explanation: "To divorce Catherine of Aragon." },
        { text: "Where is the Scottish Parliament located?", options: ["Westminster", "Holyrood, Edinburgh", "Nottingham", "Belfast"], correctAnswer: 1, explanation: "Holyrood, Edinburgh." },
        { text: "In 1913, Government promised 'Home Rule' in Ireland, why were changes delayed?", options: ["Outbreak of World War 1", "Housing crisis", "Riots"], correctAnswer: 0, explanation: "Because of the outbreak of WWI." },
        { text: "Bonnie Prince Charlie was supported by clansmen from which Scottish region?", options: ["Highlands", "Villages", "Lake District"], correctAnswer: 0, explanation: "The Highlands." },
        { text: "What is the small claims limit in England and Wales?", options: ["£50,000", "£3,000", "£10,000"], correctAnswer: 2, explanation: "It is £10,000 (standard test answer)." },
        { text: "Who succeeded Margaret Thatcher?", options: ["Churchill", "Adam Smith", "John Major", "Tony Blair"], correctAnswer: 2, explanation: "John Major." },
        { text: "The carding machine was invented by?", options: ["Einstein", "Bohr", "Richard Arkwright", "Adam Smith"], correctAnswer: 2, explanation: "Richard Arkwright." },
        { text: "Who sailed around the world in the Golden Hind?", options: ["Richard II", "Wordsworth", "Sir Francis Drake", "Wren"], correctAnswer: 2, explanation: "Sir Francis Drake." },
        { text: "Which TWO of the following are fundamental principles of British life?", options: ["Democracy & The Rule of Law", "Life insurance", "Going to work"], correctAnswer: 0, explanation: "Democracy and the Rule of Law." },
        { text: "St Helena is a British overseas territory and is part of the UK.", options: ["True", "False"], correctAnswer: 1, explanation: "False. It is an overseas territory but NOT part of the UK." },
        { text: "If you’re a dog owner, which two things should your dog’s collar have?", options: ["Owner’s address & Name", "Dog’s name", "Health details"], correctAnswer: 0, explanation: "The owner's name and address." },
        { text: "What is a Bank Holiday?", options: ["When banks close for summer", "A public holiday when businesses close", "Holiday for bank workers"], correctAnswer: 1, explanation: "A public holiday." },
        { text: "Which TWO are 20th-century British discoveries or inventions?", options: ["Hovercraft & Penicillin", "Radium", "Printing press"], correctAnswer: 0, explanation: "Hovercraft and Penicillin." },
        { text: "Who is associated with Pop Art?", options: ["Adam Smith", "Andy Warhol", "Steve Smith", "Neil Bohr"], correctAnswer: 1, explanation: "Andy Warhol (though Pop Art had British origins, he is the option given)." },
        { text: "Who celebrates Diwali?", options: ["Muslims and Christians", "Hindus and Muslims", "Hindus and Sikhs"], correctAnswer: 2, explanation: "Hindus and Sikhs." },
        { text: "What comes after 30 days of fasting for the Muslims?", options: ["Eid ul Adha", "Eid ul Fitr", "Eid Milad un Nabi"], correctAnswer: 1, explanation: "Eid ul Fitr." }
    ]
};

async function main() {
    const quiz = await prisma.quiz.create({
        data: {
            title: reviewQuiz.title,
            questions: {
                create: reviewQuiz.questions.map(qt => ({
                    text: qt.text,
                    options: JSON.stringify(qt.options),
                    correctAnswer: qt.correctAnswer,
                    explanation: qt.explanation
                }))
            }
        }
    });
    console.log(`Created quiz: ${quiz.title}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
