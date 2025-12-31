const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 8",
        "questions": [
            { "text": "World War 2 started as a result of Germany invading which country?", "options": ["Poland", "France", "Austria"], "correctAnswer": 0 },
            { "text": "Which flower is associated with Scotland?", "options": ["The Rose", "The Thistle", "The Daffodil"], "correctAnswer": 1 },
            { "text": "Complaints against the police can only be made by writing to the Police Complaints Commissioner?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which of the following is a responsibility of the Home Secretary?", "options": ["Housing", "Crime", "Finance"], "correctAnswer": 1 },
            { "text": "When is St David’s Day celebrated?", "options": ["17th March", "1st March", "23rd April"], "correctAnswer": 1 },
            { "text": "What happened to ‘Mary, Queen of Scots’ after she spent 20 years in prison?", "options": ["She ran away to Spain", "She was executed", "She became Queen of England"], "correctAnswer": 1 },
            { "text": "Which of the following lines are from the National Anthem (Choose 2)?", "options": ["God save the glorious Queen & Send her victorious", "May the Queen live long", "Make Britain great again"], "correctAnswer": 0 },
            { "text": "Northern Ireland and Scotland have their own banknotes, which are valid anywhere in the UK?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "How many national parks are there in England, Wales and Scotland?", "options": ["20", "15", "14"], "correctAnswer": 1 },
            { "text": "Is Northern Ireland part of Great Britain?", "options": ["Yes", "No"], "correctAnswer": 1, "explanation": "Great Britain is England, Scotland, Wales. The UK includes Northern Ireland." },
            { "text": "If you’re a dog owner, which two things should your dog’s collar have when you go out for a walk?", "options": ["The owner's address & The owner's name", "The dog's name", "Health details"], "correctAnswer": 0 },
            { "text": "What day is related to the death of Jesus Christ?", "options": ["Good Friday", "Christmas Day", "Shrove Tuesday"], "correctAnswer": 0 },
            { "text": "Who is the heir to the throne of England?", "options": ["The prince of Wales", "The prince of Suffolk", "The prince of Cardiff"], "correctAnswer": 0 },
            { "text": "What was achieved with the Magna Carta?", "options": ["It formed a democracy", "People could vote", "It restricted the power of the king"], "correctAnswer": 2 },
            { "text": "Female genital mutilation (FGM) is illegal in the UK and it is a criminal offence?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What year where women given the right to vote?", "options": ["1918", "1944", "1962"], "correctAnswer": 0 },
            { "text": "Which two of the following are British overseas territories?", "options": ["St Helena & The Falklands Islands", "Isle of Man", "Guernsey"], "correctAnswer": 0 },
            { "text": "Who did the English defeat in 1588?", "options": ["The Spanish Armada", "The French", "The American army"], "correctAnswer": 0 },
            { "text": "Who designed the Cenotaph?", "options": ["Richard Arkwright", "Elton John", "Sir Edwin Lutyens"], "correctAnswer": 2 },
            { "text": "How often are the members of the Welsh Assembly (AMs) elected?", "options": ["Every 5 years", "Every 2 years", "Every 4 years"], "correctAnswer": 0 },
            { "text": "During which period did the Beatles become popular and social laws were liberalised?", "options": ["1980s", "1960s", "1970s"], "correctAnswer": 1 },
            { "text": "What sort of election takes place when a member of parliament (MP) dies or resigns?", "options": ["Political Election", "MP Vote", "By-election"], "correctAnswer": 2 },
            { "text": "What is the Turner Prize?", "options": ["A professional drifting prize", "A contemporary art award", "A poetry award"], "correctAnswer": 1 }
        ]
    },
    {
        "title": "Life in the UK Test 9",
        "questions": [
            { "text": "Which flower is associated with Northern Ireland?", "options": ["The Shamrock", "The Rose", "The Thistle"], "correctAnswer": 0 },
            { "text": "The last battle between Britain and France was the Battle of Waterloo?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "£100 is the highest value note in circulation in the UK?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Where is Lake District National Park located?", "options": ["Scotland", "Wales", "England"], "correctAnswer": 2 },
            { "text": "Which two responsibilities will you have as a British Citizen?", "options": ["Look after yourself and your family & Respect rights of others", "Make sure car is insured", "Work 300 days a year"], "correctAnswer": 0 },
            { "text": "Who was born in Stratford-upon-Avon?", "options": ["William Wordsworth", "Oliver Cromwell", "William Shakespeare"], "correctAnswer": 2 },
            { "text": "Why is 1928 an important year in women’s voting history?", "options": ["Women given right to vote at 18", "Women given right to vote at 19", "Women given right to vote at 21 (same as men)"], "correctAnswer": 2 },
            { "text": "What does Hogmanay refer to?", "options": ["Christmas day", "New year's Eve in Scotland", "Halloween"], "correctAnswer": 1 },
            { "text": "What is the capital city of Northern Ireland?", "options": ["Belfast", "Cardiff", "Edinburgh"], "correctAnswer": 0 },
            { "text": "Which of the following wars took place between 1899 and 1902 in South Africa?", "options": ["The Crimean War", "The Boer War", "The Falklands War"], "correctAnswer": 1 },
            { "text": "Northern Ireland uses a system called ‘individual registration’?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which two of the following policies are not controlled by the devolved administrations?", "options": ["Health", "Education", "Immigration & Crime"], "correctAnswer": 2 },
            { "text": "How old do citizens have to be to stand for public office?", "options": ["20", "18", "16"], "correctAnswer": 1 },
            { "text": "How did the Government promote policies of free trade during the Victorian Age?", "options": ["Charge less", "Abolish a number of taxes on imported goods", "Charge more"], "correctAnswer": 1 },
            { "text": "Who was Admiral Nelson?", "options": ["A British officer in charge of the British fleet at Trafalgar", "First man to find America", "Traveller"], "correctAnswer": 0 },
            { "text": "During the middle Ages, who were the serfs?", "options": ["Peasants who had a small area of land", "Dwarfs", "People who worked off wealthy"], "correctAnswer": 0 },
            { "text": "Which invention leads to the rapid development of the industry in Britain during the 18th/19th century?", "options": ["Telephone", "Sewing machine", "Steam power"], "correctAnswer": 2 },
            { "text": "MP’s can only be contacted by post?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What movement challenged the authority of the Pope?", "options": ["Industrial Revolution", "The Reformation", "Magna Carta"], "correctAnswer": 1 },
            { "text": "Which British King introduced the Doomsday Book?", "options": ["William the conqueror", "James III", "Henry VIII"], "correctAnswer": 0 },
            { "text": "What did the ‘Butler Act’ introduce in 1944?", "options": ["Free secondary education", "Higher wage", "Working hours limit"], "correctAnswer": 0 },
            { "text": "What is the Small Claims Procedure?", "options": ["Informal way of settling minor disputes without lawyers", "Claim cash", "Claim money"], "correctAnswer": 0 },
            { "text": "What building was constructed in Hyde Park to hold the Great Exhibition of 1851?", "options": ["The Crystal Palace", "National Museum", "Exhibition House"], "correctAnswer": 0 },
            { "text": "Who was Florence Nightingale?", "options": ["A singer", "A Vet", "A Nurse"], "correctAnswer": 2 }
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
