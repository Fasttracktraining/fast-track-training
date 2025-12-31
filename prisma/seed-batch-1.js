const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// This script will seed Quizzes 2-25. It's a large script. 
// Note: Some question text was slightly cleaned programmatically.

const allQuizzes = [
    {
        "title": "Life in the UK Test 2",
        "questions": [
            { "text": "What is the Home Secretary responsible for?", "options": ["Housing", "Policing", "Environmental Issues"], "correctAnswer": 1 },
            { "text": "St Helena is a British overseas territory and is part of the United Kingdom?", "options": ["True", "False"], "correctAnswer": 1, "explanation": "It is a British overseas territory but NOT part of the United Kingdom, unlike Scotland/Wales." },
            { "text": "Several Church of England bishops sit in the House of Lords?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "When walking a dog in a public place, you must ensure:", "options": ["The dog is on a lead at all times", "Keep your dog away from other dogs to avoid conflicts and barking", "That your dog wears a collar showing the name and address of the owner"], "correctAnswer": 2 },
            { "text": "Women over the age of 30 were given the right to vote as a result of their contribution towards the war efforts. Which war was that?", "options": ["World War 1", "World War 2", "Falklands War"], "correctAnswer": 0 },
            { "text": "When did Ireland become a republic?", "options": ["1949", "1956", "1978"], "correctAnswer": 0 },
            { "text": "Where did the first farmers come from?", "options": ["West Africa", "North-West Asia", "South-East Europe"], "correctAnswer": 2 },
            { "text": "The national anthem ‘God Save the Queen’ can only be played in the presence of the Queen?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Who became Prime Minister and was an inspirational leader to the British people during WWII?", "options": ["David Cameron", "Winston Churchill", "Admiral Nelson"], "correctAnswer": 1 },
            { "text": "What is the title of the Queens eldest son?", "options": ["Prince of Wales", "Price of Scotland", "Price of Suffolk"], "correctAnswer": 0 },
            { "text": "Under which king did the Anglo-Saxons kingdoms in England unite to defeat the Vikings?", "options": ["King Charles l", "King Alfred the Great", "King Henry VIII"], "correctAnswer": 1 },
            { "text": "When was the Magna Carta created?", "options": ["1340", "1160", "1215"], "correctAnswer": 2 },
            { "text": "Northern Ireland has its own banknotes, which are valid everywhere in the UK?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which of the following plays was written by William Shakespeare?", "options": ["A Midsummer Night’s Dream", "Blood Brothers", "Game of Thrones"], "correctAnswer": 0 },
            { "text": "How many members does a jury have in England, Wales and Northern Ireland?", "options": ["15", "12", "13"], "correctAnswer": 1 },
            { "text": "Which two of the following religious communities celebrate Diwali?", "options": ["Muslims", "Christians", "Hindus", "Sikhs"], "correctAnswer": 2, "explanation": "Hindus and Sikhs." },
            { "text": "What is Good Friday?", "options": ["The day when Jesus Christ was born", "The day when Jesus Christ died", "The day when everybody is good"], "correctAnswer": 1 },
            { "text": "St Patrick’s Day is a public holiday in Northern Ireland?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "Which was the last successful foreign invasion of Britain that took place in 1066?", "options": ["Battle of Hastings", "World War 2", "Crimean War"], "correctAnswer": 0 },
            { "text": "Where are the Crown jewels kept?", "options": ["Windsor Castle", "Buckingham Palace", "Tower of London"], "correctAnswer": 2 },
            { "text": "Which sport can be traced back to the 15th century in Scotland?", "options": ["Cricket", "Golf", "Netball"], "correctAnswer": 1 },
            { "text": "Who was the first person in England to print books using a printing press?", "options": ["William Caxton", "Isaac Newton", "Richard Arkwright"], "correctAnswer": 0 },
            { "text": "Which court deals with minor criminal cases in England, Wales and Northern Ireland?", "options": ["Magistrates Court", "Crown Court", "Youth Court"], "correctAnswer": 0 },
            { "text": "What did the Scottish John Logie Baird develop?", "options": ["Radio", "Telephone", "Television"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 3",
        "questions": [
            { "text": "Which of the following is a fundamental principle of British life?", "options": ["Individual Liberty", "Privacy", "Life insurance"], "correctAnswer": 0 },
            { "text": "Wales has its own established church?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What is New Year Eve called in Scotland?", "options": ["Hogmanay", "Lent", "Christmas"], "correctAnswer": 0 },
            { "text": "Why did Henry VIII establish the Church of England?", "options": ["To become the most powerful king in history", "To prove to people how much power he had", "To divorce his first wife, Catherine of Aragon"], "correctAnswer": 2 },
            { "text": "What is the name of the long war the English kings fought with France in the middle Ages?", "options": ["War of the Roses", "Falkland War", "Hundred Year War"], "correctAnswer": 2 },
            { "text": "Who was supported by clansmen from the Scottish highlands and raised an army in 1745?", "options": ["Bonnie Prince Charlie", "William the Conqueror", "Winston Churchill"], "correctAnswer": 0 },
            { "text": "If you think someone is trying to persuade you to join an extremist or terrorist activity, who should you contact?", "options": ["Friends", "Local police force", "Army"], "correctAnswer": 1 },
            { "text": "It is compulsory for 16 and 17 year olds to join the National Citizen Service programme?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What is the name of the tour guide that tells visitors stories about the Tower of London’s history?", "options": ["Soldiers", "Historians", "Beefeaters"], "correctAnswer": 2 },
            { "text": "Which two countries developed the Concorde, the world’s only supersonic commercial airliner?", "options": ["Britain & France", "Britain & America", "Britain & China"], "correctAnswer": 0 },
            { "text": "Where is Snowdonia located?", "options": ["Scotland", "Wales", "Northern Ireland"], "correctAnswer": 1 },
            { "text": "Who wrote Sherlock Holmes?", "options": ["William Shakespeare", "Sir Arthur Conan Doyle", "J.K Rowling"], "correctAnswer": 1 },
            { "text": "Which country was invaded by Germany in 1939?", "options": ["Austria", "Ukraine", "Poland"], "correctAnswer": 2 },
            { "text": "Who is the Patron Saint of Wales?", "options": ["St David", "St George", "St Andrew"], "correctAnswer": 0 },
            { "text": "Lake District is the largest national park of England?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What is the name of the area in London where famous theatres are located?", "options": ["West End", "Theatreland", "Playhouse"], "correctAnswer": 1 },
            { "text": "Which is a key role of school governors?", "options": ["Controlling what every teacher does and says", "Making choices about school dinners", "Monitoring and evaluating school performance and setting strategic direction"], "correctAnswer": 2 },
            { "text": "What led the American colonies to want their independence from Britain?", "options": ["The British didn’t provide food", "The British tried to claim everything as theirs", "The British government wanted to tax them"], "correctAnswer": 2 },
            { "text": "When did the Black Death take place?", "options": ["Victorian Era", "Middle Ages", "Jacobean Era"], "correctAnswer": 1 },
            { "text": "Who was the leader of the suffragettes?", "options": ["Emmeline Pankhurst", "Florence Nightingale", "Rosa Parks"], "correctAnswer": 0 },
            { "text": "Cardiff is the capital of which country?", "options": ["Wales", "Scotland", "Northern Ireland"], "correctAnswer": 0 },
            { "text": "During the great depression in the 1930s which industry was badly affected?", "options": ["Fishing", "Shipbuilding", "Motor industry"], "correctAnswer": 1 },
            { "text": "Who was the first man in the world to run 1 mile in under 4 minutes?", "options": ["Sir Bradley Wiggins", "Sir Elton John", "Sir Roger Bannister"], "correctAnswer": 2 },
            { "text": "Which jubilee did Queen Elizabeth II celebrate in 2012?", "options": ["Golden Jubilee", "Crystal Jubilee", "Diamond Jubilee"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 4",
        "questions": [
            { "text": "What was the last battle between Great Britain and France?", "options": ["Battle of Waterloo", "Crimean War", "World War 2"], "correctAnswer": 0 },
            { "text": "Which flower is associated with Wales?", "options": ["Rose", "Daffodil", "Thistle"], "correctAnswer": 1 },
            { "text": "During the reign of Charles II parts of London were destroyed, what was the cause?", "options": ["Bombing", "Floods", "Fire"], "correctAnswer": 2 },
            { "text": "How often are general elections held in the UK?", "options": ["Every 5 years", "Every 4 years", "Every 6 years"], "correctAnswer": 0 },
            { "text": "Scotland has its own banknotes, which are valid anywhere in the UK?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What charity works to preserve important buildings, coastlines and countryside in the UK?", "options": ["Cancer Research", "National Trust", "Woodland Trust"], "correctAnswer": 1 },
            { "text": "Great Britain refers only to England, Wales and Scotland?", "options": ["False", "True"], "correctAnswer": 1 },
            { "text": "Who was the tribal leader who fought against the Romans?", "options": ["Boudicca", "David Cameron", "David Beckham"], "correctAnswer": 0 },
            { "text": "Who was voted the greatest Briton of all time?", "options": ["Theresa May", "Sir Bradley Wiggins", "Winston Churchill"], "correctAnswer": 2 },
            { "text": "Which 2 houses form the UK parliament?", "options": ["House of York & House of Lancaster", "House of Lords & House of Commons", "Semi-detached house & Detached house"], "correctAnswer": 1 },
            { "text": "When did women get the right to vote at the same age as men?", "options": ["1928", "1934", "1949"], "correctAnswer": 0 },
            { "text": "Who is the head of the Church of England?", "options": ["The Monarch", "The Pope", "The bishop"], "correctAnswer": 0 },
            { "text": "What sort of event is the Grand National?", "options": ["Car racing", "Dog racing", "Horse Racing"], "correctAnswer": 2 },
            { "text": "What type of literature are the Canterbury tales?", "options": ["Rap", "Poem", "Song"], "correctAnswer": 1 },
            { "text": "When is Christmas day?", "options": ["25th December", "1st January", "24th December"], "correctAnswer": 0 },
            { "text": "Who supported King Charles I during the civil war?", "options": ["Cavaliers", "Navy", "Beefeaters"], "correctAnswer": 0 },
            { "text": "What battle is commemorated in the Bayeux Tapestry?", "options": ["Battle of Hastings", "Battle of Bayeux", "World War 2"], "correctAnswer": 0 },
            { "text": "Where was Anne Boleyn, the wife of Henry VIII, executed?", "options": ["Windsor Castle", "Buckingham Palace", "Tower of London"], "correctAnswer": 2 },
            { "text": "Racial crime and smoking in public places are examples of:", "options": ["Murder", "Criminal Offence", "Illegal Activity"], "correctAnswer": 1 },
            { "text": "What type of character was played by Charlie Chaplin?", "options": ["A psychopath", "A clown", "A tramp"], "correctAnswer": 2 },
            { "text": "You have to be at least 21 to stand as an MP?", "options": ["False", "True"], "correctAnswer": 1 },
            { "text": "Who developed the Radar?", "options": ["Isaac Newton", "Richard Arkwright", "Sir Robert Watson-Watt"], "correctAnswer": 2 },
            { "text": "Where is the official home of the prime minister?", "options": ["Chequers", "White House", "10 Downing Street"], "correctAnswer": 2 },
            { "text": "Which type of media must give a balanced coverage of all political parties before an election?", "options": ["Online news sites", "Television", "Newspaper", "Radio"], "correctAnswer": 1, "explanation": "Television and Radio." }
        ]
    },
    {
        "title": "Life in the UK Test 5",
        "questions": [
            { "text": "When does Easter take place?", "options": ["December or January", "September or October", "March or April"], "correctAnswer": 2 },
            { "text": "Which of the following in not a valid UK coin?", "options": ["50p", "25p", "20p"], "correctAnswer": 1 },
            { "text": "Where is the Eden Project located?", "options": ["Glasgow", "London", "Cornwall"], "correctAnswer": 2 },
            { "text": "St Helena and the Falkland Islands are part of Great Britain?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Which of the following is a fundamental principle of British life?", "options": ["Life insurance", "The rule of Law", "Going to work"], "correctAnswer": 1 },
            { "text": "Where should you register if you want to be part of the jury?", "options": ["Post Office", "Local Library", "Electoral Register"], "correctAnswer": 2 },
            { "text": "What sort of church is the Church of Scotland?", "options": ["Presbyterian", "Catholic", "Protestant"], "correctAnswer": 0 },
            { "text": "Where does golf come from?", "options": ["America", "Scotland", "Iran"], "correctAnswer": 1 },
            { "text": "When do the television and newspapers have stories that are jokes until midday?", "options": ["Christmas Day", "Halloween", "April Fool’s Day"], "correctAnswer": 2 },
            { "text": "What king was defeated by Oliver Cromwell during the Civil War and hid in an Oak Tree before escaping to Europe?", "options": ["Charles II", "Henry VIII", "Queen"], "correctAnswer": 0 },
            { "text": "Who was the father of Queen Elizabeth I?", "options": ["James II", "Henry VIII", "David Beckham"], "correctAnswer": 1 },
            { "text": "Complaints against the police can only be made by writing to the Police Complaints Commissioner?", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "Who is the Patron Saint of Northern Ireland?", "options": ["St Patrick", "St George", "St Andrew"], "correctAnswer": 0 },
            { "text": "What is the name of the period when new ideas about politics, philosophy and science were developed?", "options": ["The Enlightenment", "The Industrial Revolution", "Millennial Bug"], "correctAnswer": 0 },
            { "text": "Which of the following statements is true regarding Mary Queen of Scots?", "options": ["She was Native American", "She was Protestant", "She was Catholic"], "correctAnswer": 2 },
            { "text": "Which of the following is an example of Civil Law?", "options": ["Hourly wage", "Discrimination in the work place", "Must join the Civil Service"], "correctAnswer": 1 },
            { "text": "When did Germany invade Poland?", "options": ["1939", "1945", "1940"], "correctAnswer": 0 },
            { "text": "In which battle did Admiral Nelson die?", "options": ["Battle of Trafalgar", "Battle of Waterloo", "War of the Roses"], "correctAnswer": 0 },
            { "text": "William of Orange was asked by Protestants to invade England. This event was meant to be the:", "options": ["Industrial Revolution", "Bill of Right", "Glorious Revolution"], "correctAnswer": 2 },
            { "text": "What sort of charity is ‘Friends of Earth’?", "options": ["A friend-making charity", "A environmental Charity", "A Health Charity"], "correctAnswer": 1 },
            { "text": "If a husband forces his wife for sex he can be charged with rape?", "options": ["False", "True"], "correctAnswer": 1 },
            { "text": "In which country of the British Empire did the Boer War (1899-1902) take place?", "options": ["South Africa", "Indian Subcontinent", "America"], "correctAnswer": 0 },
            { "text": "Which of the following actions is known as “canvassing”?", "options": ["Painting of a large canvass", "Voting for local School Governor", "Persuading people to vote for a political party"], "correctAnswer": 2 },
            { "text": "Which novel written by JRR Tolkien was voted the country’s best-loved novel in 2003?", "options": ["Romeo & Juliet", "Harry Potter", "The Lord of the Rings"], "correctAnswer": 2 }
        ]
    }
];
// ... I will skip writing the entire 25 quizzes in one call to avoid tool limits. 
// I will just iterate and insert these first few, then continue.

async function main() {
    for (const q of allQuizzes) {
        const quiz = await prisma.quiz.create({
            data: {
                title: q.title,
                questions: {
                    create: q.questions.map(qt => ({
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
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
