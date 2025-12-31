const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const reviewQuiz = {
    title: "Rapid Fire Review 2: Questions 41-80",
    questions: [
        { text: "Name the 2 roles of a school governor.", options: ["Strategic planning & Oversight", "City council planning", "Maintaining law and order"], correctAnswer: 0, explanation: "School governors are responsible for strategic planning and oversight of the school." },
        { text: "When did the Emancipation Act abolish slavery throughout the British empire?", options: ["1830", "1833", "1836", "1839"], correctAnswer: 1, explanation: "The Emancipation Act was passed in 1833." },
        { text: "What kind of genre was the film Wallace and Gromit created by Nick Park?", options: ["Animation film", "Action film", "Horror film", "Romance"], correctAnswer: 0, explanation: "Wallace and Gromit are famous animated films." },
        { text: "Anyone who is violent toward their partner – whether they are a man or woman or living together – can be prosecuted?", options: ["True", "False"], correctAnswer: 0, explanation: "True. Domestic violence is a serious crime." },
        { text: "What are the 2 responsibilities that you will have as a British citizen?", options: ["Attend all gatherings", "Drive to work", "Look after yourself and your family & Respect environment", "Watch TV"], correctAnswer: 2, explanation: "Responsibilities include looking after yourself/family and respecting the rights of others/environment." },
        { text: "Which court deals with minor criminal cases in England, Wales and Northern Ireland?", options: ["Youth court", "Magistrate court", "Crown court", "High court"], correctAnswer: 1, explanation: "Magistrates' courts deal with minor criminal cases." },
        { text: "Who was the first person in England to print books using a printing press?", options: ["Isaac Newton", "Richard Arkwright", "William Caxton", "Davy Johnson"], correctAnswer: 2, explanation: "William Caxton introduced the printing press to England." },
        { text: "When did the women get right to vote at the same age as men?", options: ["1831", "1928", "1945", "1972"], correctAnswer: 1, explanation: "In 1928, the age for women to vote was lowered to match men (21)." },
        { text: "Which jubilee did the Queen Elizabeth II celebrate in 2012?", options: ["Golden Jubilee", "Silver Jubilee", "Diamond Jubilee", "Crystal Jubilee"], correctAnswer: 2, explanation: "She celebrated her Diamond Jubilee (60 years) in 2012." },
        { text: "Complaints against the police can only be made by writing to the Police Complaints Commissioner.", options: ["True", "False"], correctAnswer: 1, explanation: "False. You can complain directly to the police station or force." },
        { text: "When is St David’s day celebrated?", options: ["14th Feb", "1st March", "23rd April", "1st June"], correctAnswer: 1, explanation: "St David's Day is 1st March." },
        { text: "Which flower is associated with Northern Ireland?", options: ["The Rose", "The Shamrock", "The Lilly", "The Jasmine"], correctAnswer: 1, explanation: "The Shamrock is associated with Northern Ireland." },
        { text: "What happened to ‘Mary, Queen of Scots’ after she spent 20 years in prison?", options: ["She Became Queen", "She was executed", "She ran away", "She got married"], correctAnswer: 1, explanation: "She was executed for plotting against Elizabeth I." },
        { text: "What building was constructed in Hyde Park to hold the Great Exhibition of 1851?", options: ["Crystal Palace", "The Exhibition House", "The Art Gallery", "The National Museum"], correctAnswer: 0, explanation: "The Crystal Palace." },
        { text: "Where are Loch Lomond and the Trossachs National Park located?", options: ["France", "England", "Scotland", "Germany"], correctAnswer: 2, explanation: "They are in Scotland." },
        { text: "What is the capital city of Northern Ireland?", options: ["London", "Belfast", "Edinburgh", "Cardiff"], correctAnswer: 1, explanation: "Belfast." },
        { text: "The system of Government in the UK is parliamentary democracy.", options: ["True", "False"], correctAnswer: 0, explanation: "True." },
        { text: "What song is sung by people in the UK when they’re celebrating New Year?", options: ["Silent Night", "Christmas Wishes", "Auld Lang Syne", "National Anthem"], correctAnswer: 2, explanation: "Auld Lang Syne." },
        { text: "What in the following is a Crown Dependency but isn’t part of the UK?", options: ["Ireland", "Falkland Islands", "Isle of Man", "Portugal"], correctAnswer: 2, explanation: "The Isle of Man." },
        { text: "When is Christmas Day?", options: ["18th Nov", "24th Dec", "25th December", "29th Dec"], correctAnswer: 2, explanation: "25th December." },
        { text: "Where is the UK geographically located?", options: ["North-West Europe", "South-West Europe", "Africa", "Central Europe"], correctAnswer: 0, explanation: "North-West Europe." },
        { text: "Which two houses fought in the War of the Roses?", options: ["House of Lords & Commons", "House of York & Lancaster", "House of London & York"], correctAnswer: 1, explanation: "House of York and House of Lancaster." },
        { text: "Which of the following wars took place in 1899 to 1902 in South Africa?", options: ["Anglo-Zulu War", "The Boer War", "Trafalgar", "WWW2"], correctAnswer: 1, explanation: "The Boer War." },
        { text: "Which two of the following policies aren’t controlled by devolved administrations?", options: ["Crime", "Immigration & Defence", "Health", "Education"], correctAnswer: 1, explanation: "Immigration and Defence are reserved matters." },
        { text: "Who was Admiral Nelson?", options: ["Officer at Trafalgar", "First man in America", "Balloon traveller"], correctAnswer: 0, explanation: "He led the British fleet at Trafalgar." },
        { text: "Which Palace was a cast-iron and plate-glass building originally erected in Hyde Park?", options: ["Buckingham Palace", "Windsor Castle", "Crystal Palace"], correctAnswer: 2, explanation: "Crystal Palace." },
        { text: "Which two universities participate in an annual rowing race?", options: ["Oxford & Cambridge", "Warwick & Manchester"], correctAnswer: 0, explanation: "The University of Oxford and The University of Cambridge." },
        { text: "When do the television and newspapers have stories that are jokes until midday?", options: ["Christmas", "April Fool’s Day", "New Year", "Halloween"], correctAnswer: 1, explanation: "April Fool's Day (1st April)." },
        { text: "Who can apply for the National Citizen Service Programme?", options: ["16 and 17 years olds", "18 and 19", "20 and 21", "22 and 23"], correctAnswer: 0, explanation: "It is for 16 and 17 year olds." },
        { text: "When is St Patrick’s Day?", options: ["13th March", "15th March", "17th March", "18th March"], correctAnswer: 2, explanation: "17th March." },
        { text: "Isaac Newton had a theory about?", options: ["Light", "Vacuum", "Gravity", "Sound"], correctAnswer: 2, explanation: "Gravity." },
        { text: "What are the Channel Islands?", options: ["Part of UK", "Part of Europe", "Overseas Territories", "Crown Dependency"], correctAnswer: 3, explanation: "They are Crown Dependencies." },
        { text: "Which famous economist developed ideas about economics during the 18th century?", options: ["Isaac Newton", "Joseph Stalin", "Adam Smith", "Joseph Murphy"], correctAnswer: 2, explanation: "Adam Smith." },
        { text: "During the Middle ages, a parliament was developed in Scotland, which has three houses called Estates. These were:", options: ["The Lords, Commons & Clergy", "Lancaster & York", "Commons & Lords", "Senate & York"], correctAnswer: 0, explanation: "The Lords, the Commons, and the Clergy." },
        { text: "Who was the inventor of the World Wide Web?", options: ["Isaac Newton", "Alexander Fleming", "Sir Tim Berners-Lee", "William Caxton"], correctAnswer: 2, explanation: "Sir Tim Berners-Lee." },
        { text: "Which two of these forts were part of Hadrian’s Wall?", options: ["Housesteads & Vindolanda", "The Spanish Armada", "House of York"], correctAnswer: 0, explanation: "Housesteads and Vindolanda." },
        { text: "What was the religion of the Puritans?", options: ["Catholics", "Protestants"], correctAnswer: 1, explanation: "They were Protestants." },
        { text: "How often are the European Parliament elections held?", options: ["Every 3 years", "4 years", "5 years", "6 years"], correctAnswer: 2, explanation: "Every 5 years." },
        { text: "Who died at the Battle of Trafalgar?", options: ["Stalin", "Admiral Nelson", "Arkwright", "Newton"], correctAnswer: 1, explanation: "Admiral Nelson died at Trafalgar." },
        { text: "Who was the author of the famous play ‘Macbeth’?", options: ["Wordsworth", "William Shakespeare", "Herald Lamb", "Joseph Murphy"], correctAnswer: 1, explanation: "William Shakespeare." }
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
