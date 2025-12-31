const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 6",
        "questions": [
            { "text": "As a British citizen, what is a main responsibility?", "options": ["Respect and obey the law", "Walk your dog once a day", "Keep your British passport on you at all times"], "correctAnswer": 0 },
            { "text": "Who made the first coins to be minted in Britain?", "options": ["The people of the bronze age", "The people of the middle ages", "The people of the iron age"], "correctAnswer": 2 },
            { "text": "Who built the Tower of London?", "options": ["Henry VIII", "William the Conqueror", "Elizabeth I"], "correctAnswer": 1 },
            { "text": "There are 15 national parks in England, Wales and Scotland. What are national parks?", "options": ["Areas of protected countryside", "Areas that cover the whole nation", "Small parks where over 3million people visit from around the nation"], "correctAnswer": 0 },
            { "text": "Northern Ireland has its own established church?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which three territories form Great Britain?", "options": ["Northern Ireland, Wales, England", "Wales, England, Scotland", "England, Scotland, Northern Ireland"], "correctAnswer": 1 },
            { "text": "How often is ‘Prime Minister’s Question’ held in the parliament?", "options": ["Every month", "Every fortnight", "Every week"], "correctAnswer": 2 },
            { "text": "Which king was executed in 1649?", "options": ["Henry VII", "Richard III", "Charles I"], "correctAnswer": 2 },
            { "text": "Where was William Shakespeare born?", "options": ["Stratford-upon-Avon", "Berkshire", "Yorkshire"], "correctAnswer": 0 },
            { "text": "Which two of the following are famous British Paralympians?", "options": ["Baroness Tanni Grey-Thompson & Ellie Simmonds", "Usain Bolt & Bradley Wiggins", "Mo Farah & Jessica Ennis"], "correctAnswer": 0 },
            { "text": "Who was reigning in Britain when English settlers first began to colonise the eastern coast of America?", "options": ["Henry VI", "Elizabeth I", "James III"], "correctAnswer": 1 },
            { "text": "Scotland and Wales have a system called ‘individual registration’ regarding voting?", "options": ["False", "True"], "correctAnswer": 1 },
            { "text": "On what day is the birth of Jesus celebrated?", "options": ["Easter", "Christmas Day", "Halloween"], "correctAnswer": 1 },
            { "text": "What sort of battle was the ‘Battle of Britain’, fought between Germany and Britain in the summer of 1940?", "options": ["Sea Battle", "Land Battle", "Aerial Battle"], "correctAnswer": 2 },
            { "text": "Where is Swansea located?", "options": ["Scotland", "England", "Wales"], "correctAnswer": 2 },
            { "text": "Which two political parties formed a coalition in 2010?", "options": ["Labour & Conservatives", "Conservatives & Liberal Democrats", "UKIP & Green"], "correctAnswer": 1 },
            { "text": "Who established the Church of England?", "options": ["Henry VIII", "Jeremy Corbyn", "Elizabeth II"], "correctAnswer": 0 },
            { "text": "In 1348, one third of the population in England, Wales and Scotland dies as a result of which disease?", "options": ["Cancer", "The Black Death", "Strokes"], "correctAnswer": 1 },
            { "text": "Haggis is the traditional food of which area?", "options": ["Wales", "Scotland", "Northern Ireland"], "correctAnswer": 1 },
            { "text": "Which court deals with minor criminal offences in Scotland?", "options": ["The Justice of the Peace Court", "Magistrates Court", "Youth Court"], "correctAnswer": 0 },
            { "text": "Which record gives us information about England during the reign of William I?", "options": ["The Doomsday Book", "Bayeux Tapestry", "Ancestry.com"], "correctAnswer": 0 },
            { "text": "In 1913, the British government promised ‘Home Rule’ in Ireland, why were changes delayed until 1921?", "options": ["Riots", "Due to the outbreak of World War 1", "Housing crisis"], "correctAnswer": 1 },
            { "text": "Which of the following statements about Elizabeth I is true?", "options": ["She was Catholic", "She was Protestant and removed all Catholics", "She was Protestant and succeeded in finding a balance between the views of Catholics and Protestants"], "correctAnswer": 2 },
            { "text": "What two documents do you need to apply for a National Insurance Number?", "options": ["Proof of permission to work & Proof of identity", "Proof of address & Passport", "Marriage certificate"], "correctAnswer": 0 }
        ]
    },
    {
        "title": "Life in the UK Test 7",
        "questions": [
            { "text": "As a British citizen you should:", "options": ["Look after the area in which you live and the environment", "Attend all gatherings in your area", "Drive to work daily"], "correctAnswer": 0 },
            { "text": "When is Halloween Celebrated?", "options": ["25th December", "5th November", "31st October"], "correctAnswer": 2 },
            { "text": "The Bill of Rights of 1689 gave women the right to vote?", "options": ["False", "True"], "correctAnswer": 0 },
            { "text": "What is the name of the most famous cricket competition played between England & Australia?", "options": ["Champions League", "The Ashes", "Cricket World Cup"], "correctAnswer": 1 },
            { "text": "What was the biggest source of employment in the 18th century?", "options": ["Fishing", "Manufacturing", "Trading"], "correctAnswer": 1 },
            { "text": "In 1314 the Scottish, led by Robert the Bruce, defeated the English at the battle of Bannockburn?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which of the following is an example of a Criminal offence?", "options": ["Taking your dog off the leash", "Smoking in public places where not allowed", "Parking in driveway"], "correctAnswer": 1 },
            { "text": "Which Scottish Clan was killed for not taking the oath?", "options": ["Native Americans", "Boudicca", "MacDonald of Glencoe"], "correctAnswer": 2 },
            { "text": "Which two issues can devolved administrations pass laws on?", "options": ["Health & Education", "Defense & Foreign Policy", "Immigration & Trade"], "correctAnswer": 0 },
            { "text": "The assassination of Archduke Franz Ferdinand of Austria in 1914 led to which of the following wars?", "options": ["World War 1", "World War 2", "Falklands War"], "correctAnswer": 0 },
            { "text": "What is the capital city of Scotland?", "options": ["Edinburgh", "London", "Belfast"], "correctAnswer": 0 },
            { "text": "In 1833 the Emancipation Act abolished slavery throughout the British Empire?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What is the name of the process by which many Scottish landlords destroyed individual small farms?", "options": ["Farm degrading", "Dredging", "The Highland Clearances"], "correctAnswer": 2 },
            { "text": "The Falkland Islands are a British overseas territory and are part of the United Kingdom?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which two of the following are Civil War Battles?", "options": ["Battle of Marston Moor & Naseby", "Trafalgar & Waterloo", "Hastings & Agincourt"], "correctAnswer": 0 },
            { "text": "What was the name of the activist group who fought for the women’s right to vote?", "options": ["Suffragettes", "Me Too Movement", "Labour"], "correctAnswer": 0 },
            { "text": "What UK landmark was voted as Britain’s favourite view in 2007?", "options": ["Big Ben", "Angel of the North", "Lake District"], "correctAnswer": 2 },
            { "text": "Who were the first people to live in Britain in what we call the Stone Age?", "options": ["Hunter-gatherers", "Native British", "Huntsmen"], "correctAnswer": 0 },
            { "text": "What is the name of the movement against the authority of the Pope during the reign of Henry VIII?", "options": ["The Revolution", "The Reformation", "The Enlightenment"], "correctAnswer": 1 },
            { "text": "What do you need to do to apply for a National Insurance Number?", "options": ["Apply at post office", "Go to head office", "Contact the Department of Work and Pensions (DWP)"], "correctAnswer": 2 },
            { "text": "Which of the following is a major horse-racing event in England?", "options": ["The Open", "Royal Ascot", "The Ashes"], "correctAnswer": 1 },
            { "text": "How many members make up the jury in Scotland?", "options": ["18", "16", "15"], "correctAnswer": 2 },
            { "text": "What is known as Lent?", "options": ["The 40 days before Easter", "The day before Christmas Day", "Formal day for Halloween"], "correctAnswer": 0 },
            { "text": "What was the last successful foreign invasion of England?", "options": ["1997", "1812", "1066"], "correctAnswer": 2 }
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
