const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 20",
        "questions": [
            { "text": "Who was the first person to lead a Roman invasion in Britain in 55 BC?", "options": ["Queen Boudica", "Sake Dean Mohammed", "Julius Caesar"], "correctAnswer": 2 },
            { "text": "What name is given to the tombs where people buried their dead during the Bronze Age?", "options": ["Round barrows", "Round houses", "Golden tombs"], "correctAnswer": 0 },
            { "text": "What name is given to the tombs where people buried their dead during the Bronze Age? (Duplicate question text in source, assumed correct options provided here)", "options": ["Rights of Parliament", "Rights to vote", "Rights to school"], "correctAnswer": 0, "explanation": "Note: original source had repeated question text with different options. Assuming this refers to 'What was the Grand Remonstrance?' or similar." },
            { "text": "Who designed the Clifton Suspension Bridge?", "options": ["Isambard Kingdom Brunel", "William Caxton", "Winston Churchill"], "correctAnswer": 0 },
            { "text": "Where did the glass manufacturers come from during Middle Ages?", "options": ["France", "Spain", "Italy"], "correctAnswer": 2 },
            { "text": "Which American President worked closely with Margaret Thatcher?", "options": ["Barack Obama", "George Bush", "Ronald Reagan"], "correctAnswer": 2 },
            { "text": "Who was the first Archbishop of Canterbury?", "options": ["St Andrew", "St George", "St Augustine"], "correctAnswer": 2 },
            { "text": "Who was the first wife of Henry VIII?", "options": ["Anne Boleyn", "Anne of Cleaves", "Catherine of Aragon"], "correctAnswer": 2 },
            { "text": "Which of the following flags is not represented in the union flag?", "options": ["English", "Scottish", "Welsh"], "correctAnswer": 2 },
            { "text": "When did ‘the Concorde’ aircraft fly for the first time?", "options": ["1945", "1989", "1969"], "correctAnswer": 2 },
            { "text": "When did ‘the Concorde’ aircraft fly for the first time? (Duplicate text in source)", "options": ["Liberals", "Republicans", "Tories"], "correctAnswer": 2, "explanation": "Likely refers to 'Which party did Margaret Thatcher lead?' -> Tories." },
            { "text": "When did Adolf Hitler come to power in Germany?", "options": ["1945", "2020", "1933"], "correctAnswer": 2 },
            { "text": "What was inscribed in the first coins during Iron Age?", "options": ["Names of Iron Age Kings", "Saying of people", "Pictures of animals"], "correctAnswer": 0 },
            { "text": "When did Emmeline Pankhurst set up the Women’s Franchise League?", "options": ["1889", "1720", "1066"], "correctAnswer": 0 },
            { "text": "In which English county is Stonehenge located?", "options": ["Nottinghamshire", "Peak District", "Wiltshire"], "correctAnswer": 2 },
            { "text": "What is the best-known work from Robert Burns?", "options": ["We wish you a merry Christmas", "Romeo and Juliet", "Auld Lang Syne"], "correctAnswer": 2 },
            { "text": "Which of the following crosses does NOT form part of the Union Flag?", "options": ["St David", "St George", "St Andrew"], "correctAnswer": 0 },
            { "text": "What British actor was best known for his roles in various Shakespeare plays?", "options": ["Dev Patel", "Chris Evans", "Sir Laurence Olivier"], "correctAnswer": 2 },
            { "text": "What British actor was best known for his roles in various Shakespeare plays? (Duplicate text)", "options": ["The Enlightenment", "Glorious Revolution", "Industrial Revolution"], "correctAnswer": 0, "explanation": "Likely refers to 'What was the 18th century known as?' -> Enlightenment." },
            { "text": "Who was responsible for the construction of the Great Western Railway?", "options": ["Isambard Kingdom Brunel", "Alexander Fleming", "Queen Elizabeth I"], "correctAnswer": 0 },
            { "text": "Which TWO of the following forts form part of Hadrian’s Wall?", "options": ["Vindolanda and Housesteads", "Windsor and Edinburgh", "John O’Groats"], "correctAnswer": 0 },
            { "text": "Why did Elizabeth I keep her cousin Mary prisoner for 20 years?", "options": ["Suspected of wanting throne", "Disagreement", "Spy"], "correctAnswer": 0 },
            { "text": "What was the name of the first cloned mammal?", "options": ["Dolly", "Elizabeth", "Edward"], "correctAnswer": 0 },
            { "text": "How many British casualties were recorded during the First World War?", "options": ["100", "1,000", "More than 2 million"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 21",
        "questions": [
            { "text": "As a British citizen, what are your responsibilities?", "options": ["Respect and obey the law", "Walk dog", "Keep passport"], "correctAnswer": 0 },
            { "text": "What characterised the Bronze Age?", "options": ["Roundhouses and tombs", "Philosophers", "Paintings"], "correctAnswer": 0 },
            { "text": "What is New Year Eve called in Scotland?", "options": ["Hogmanay", "Lent", "Christmas"], "correctAnswer": 0 },
            { "text": "Who was known as the Iron Duke?", "options": ["Prime Minister", "Duke of Wellington", "Queen’s son"], "correctAnswer": 1 },
            { "text": "Which of the following is not a British invention?", "options": ["Satellite", "Hand drill", "Mobile phone"], "correctAnswer": 2 },
            { "text": "When did Argentina invade the Falklands Islands?", "options": ["1066", "1928", "1982"], "correctAnswer": 2 },
            { "text": "When did Alexander Fleming win the Nobel Prize for penicillin?", "options": ["1066", "1928", "1945"], "correctAnswer": 2 },
            { "text": "When did the Roman army leave Britain?", "options": ["AD 410", "BC 55", "AD 1066"], "correctAnswer": 0 },
            { "text": "Who was voted the greatest Briton of all time?", "options": ["Theresa May", "Bradley Wiggins", "Winston Churchill"], "correctAnswer": 2 },
            { "text": "How long did the First World War last for?", "options": ["Six years", "Ten years", "Four years"], "correctAnswer": 2 },
            { "text": "Who was Henry VII?", "options": ["Cloned sheep", "Print books", "Leader of House of Lancaster"], "correctAnswer": 2 },
            { "text": "What is the capital city of Scotland?", "options": ["Edinburgh", "London", "Belfast"], "correctAnswer": 0 },
            { "text": "In 1833 the Emancipation Act abolished slavery?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "After the Black Death, the growing wealth led to a strong middle class?", "options": ["True", "False"], "correctAnswer": 0 },
            { "text": "What was the ability of the Harrier jump jet aircraft?", "options": ["Fly invisibly", "Carry 100", "Take off vertically"], "correctAnswer": 2 },
            { "text": "Which two of Henry VIII’s wives were executed?", "options": ["Catherine Howard and Anne Boleyn", "Anne of Cleaves and Jayne"], "correctAnswer": 0 },
            { "text": "Which two scientists cloned Dolly the sheep?", "options": ["Ian Wilmot and Keith Campbell", "Ian Wilmot and William Caxton"], "correctAnswer": 0 },
            { "text": "What British discovery was influential in computer science?", "options": ["Turing machine", "Radar", "Battery"], "correctAnswer": 0 },
            { "text": "Which famous philosopher developed ideas about human nature (18th c)?", "options": ["David Hume", "David Beckham", "David Cameron"], "correctAnswer": 0 },
            { "text": "When did the ‘Concorde’ aircraft carry passengers for the first time?", "options": ["1997", "2003", "1976"], "correctAnswer": 2 },
            { "text": "Which prehistoric village is located in northern Europe?", "options": ["Stonehenge", "Skara Brae", "Canterbury"], "correctAnswer": 1 },
            { "text": "During the Middle Ages, Scottish Parliament had three Houses called:", "options": ["Lords, commons, clergy", "Lancaster and York", "Commons and Lords"], "correctAnswer": 0 },
            { "text": "Which scientific discovery helped the Industrial Revolution?", "options": ["Gravity", "Steam power", "Penicilian"], "correctAnswer": 1 },
            { "text": "Where in England was one of the Anglo-Saxon kings buried with treasure?", "options": ["Round House", "Hadrins Wall", "Sutton Hoo, Suffolk"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 22",
        "questions": [
            { "text": "Which words come from Norman French?", "options": ["Beauty", "Apple", "Car"], "correctAnswer": 0 },
            { "text": "Catherine Parr was Anne Boleyn’s cousin:", "options": ["True", "False"], "correctAnswer": 1 },
            { "text": "What was the symbol of York?", "options": ["Rabbit", "White Rose", "Brown Bear"], "correctAnswer": 1 },
            { "text": "During which movement did Parliament pass laws for equal pay?", "options": ["Bronze age", "Iron Age", "Swinging Sixties"], "correctAnswer": 2 },
            { "text": "Where can you find a statue of Boudicca?", "options": ["Westminster Bridge", "London Bridge", "Trafalgar Square"], "correctAnswer": 0 },
            { "text": "For how long was Britain a republic?", "options": ["20 years", "11 years", "50 years"], "correctAnswer": 1 },
            { "text": "When did the ‘Concorde’ retire?", "options": ["2003", "2020", "1969"], "correctAnswer": 0 },
            { "text": "When did the Allies defeat Germany (WWII end)?", "options": ["November 1955", "May 1945", "December 2020"], "correctAnswer": 1 },
            { "text": "Where did the weavers come from (Middle Ages)?", "options": ["France", "Spain", "Ireland"], "correctAnswer": 0 },
            { "text": "Where did the weavers come from? (Duplicate)", "options": ["Monarch", "Prime Minister", "Speaker"], "correctAnswer": 2, "explanation": "Likely refers to 'Who chairs House of Commons debates?' -> Speaker." },
            { "text": "The ‘swinging sixties’ was known for growth in:", "options": ["British fashion, cinema, pop music", "Lockdown", "War"], "correctAnswer": 0 },
            { "text": "Which prehistoric village helped archaeologists understand Stone Age?", "options": ["House of Lancaster", "Skara Brae", "Bath House"], "correctAnswer": 1 },
            { "text": "What sort of event is the Grand National?", "options": ["Car racing", "Dog racing", "Horse Racing"], "correctAnswer": 2 },
            { "text": "Which scientific discovery helped Industrial Revolution?", "options": ["Penicillin", "Gravity", "Steam power"], "correctAnswer": 2 },
            { "text": "Who where the parents of Elizabeth I?", "options": ["Henry VIII and Anne Boleyn", "Henry VII and Anne", "William III"], "correctAnswer": 0 },
            { "text": "What were the religions of the Puritans?", "options": ["Catholics", "Protestants"], "correctAnswer": 1 },
            { "text": "Who were the first people to live in Britain (Stone Age)?", "options": ["Hunter-gatherers", "Blacksmiths", "Builders"], "correctAnswer": 0 },
            { "text": "Who were the first people to live in Britain? (Duplicate)", "options": ["Children only", "Animals", "1/3 of people"], "correctAnswer": 2, "explanation": "Refers to Black Death impact." },
            { "text": "Who was reigning when Wales united with England?", "options": ["Henry VIII", "William", "Charles II"], "correctAnswer": 0 },
            { "text": "Elizabethan period is known for which playwright?", "options": ["Wordsworth", "Shakespeare", "Chaucer"], "correctAnswer": 1 },
            { "text": "Which flag has a diagonal red cross on a white ground?", "options": ["St George", "St Andrew", "St Patrick"], "correctAnswer": 2 },
            { "text": "How many members make up the jury in Scotland?", "options": ["18", "16", "15"], "correctAnswer": 2 },
            { "text": "After Black Death, new social classes included:", "options": ["Serfs", "Doctors", "Gentry"], "correctAnswer": 2 },
            { "text": "What two documents do you need for NI Number?", "options": ["Identity & Right to work", "Address & Passport", "Marriage cert"], "correctAnswer": 0 }
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
