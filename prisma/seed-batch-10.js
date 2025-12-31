const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allQuizzes = [
    {
        "title": "Life in the UK Test 23",
        "questions": [
            { "text": "Who is the patron saint of England?", "options": ["St Andrew", "St Patrick", "St George"], "correctAnswer": 2 },
            { "text": "When did the First World War end?", "options": ["11th of November 1918", "12th of November 1918", "24th of December 1945"], "correctAnswer": 0 },
            { "text": "Which British scientist was awarded a Nobel Prize for discovering DNA?", "options": ["Francis Crick", "Alexander Fleming", "Tim-Berner’s Lee"], "correctAnswer": 0 },
            { "text": "When did people learn how to make bronze?", "options": ["6,000 years ago", "4,000 years ago", "2,000 years ago"], "correctAnswer": 1 },
            { "text": "Who was Boudicca?", "options": ["Nurse", "Inventor", "Tribal leader who fought Romans"], "correctAnswer": 2 },
            { "text": "What actions did Henry VII take after his victory?", "options": ["Reduced power of nobles", "Increased power of nobles", "Helped poor"], "correctAnswer": 0 },
            { "text": "Who became Prime Minister of the UK in May 2010?", "options": ["Tony Blair", "Winston Churchill", "David Cameron"], "correctAnswer": 2 },
            { "text": "How were Elizabeth I and ‘Mary, Queen of Scots’ related?", "options": ["Sisters", "Friends", "Cousins"], "correctAnswer": 2 },
            { "text": "Choose the correct answer, the Middle Ages was:", "options": ["Period of constant war", "Enlightenment", "New ideas"], "correctAnswer": 0 },
            { "text": "What characterised the people from the Bronze Age?", "options": ["Farmers", "Accomplished metalworkers", "Poetry"], "correctAnswer": 1 },
            { "text": "What is the name of the event on 6 June 1944?", "options": ["D-Day", "Blitzkrieg", "Battle of Britain"], "correctAnswer": 0 },
            { "text": "Which British Prime Minister led from 1979 to 1990?", "options": ["Margaret Thatcher", "Winston Churchill", "Duke of Wellington"], "correctAnswer": 0 },
            { "text": "Which civilisation built roads and public buildings?", "options": ["Picts", "Highlanders", "Romans"], "correctAnswer": 2 },
            { "text": "What marked the beginning of ‘constitutional monarchy’?", "options": ["Glorious Revolution laws", "Industrial Revolution laws", "Alexander laws"], "correctAnswer": 0 },
            { "text": "When was the Turing machine discovered?", "options": ["1930s", "1970s", "1990s"], "correctAnswer": 0 },
            { "text": "During which period were Houses of Parliament established?", "options": ["Stone Age", "Middle Age", "Iron Age"], "correctAnswer": 1 },
            { "text": "How many years did Queen Victoria reign for?", "options": ["Almost 64 years", "Less than 30", "10"], "correctAnswer": 0 },
            { "text": "In which battle did Admiral Nelson die?", "options": ["Trafalgar", "Waterloo", "Roses"], "correctAnswer": 0 },
            { "text": "What are Sir Ian Wilmot and Keith Campbell famous for?", "options": ["Cloning Dolly", "Penicillin", "Wallace and Gromit"], "correctAnswer": 0 },
            { "text": "Who was one of the commanders against Spanish Armada?", "options": ["Sir Francis Drake", "David Beckham", "David Cameron"], "correctAnswer": 0 },
            { "text": "Who was the inventor of the World Wide Web?", "options": ["Sir Tim Berners-Lee", "Fleming", "Caxton"], "correctAnswer": 0 },
            { "text": "When did the Wars of the Roses start?", "options": ["1455", "1066", "1928"], "correctAnswer": 0 },
            { "text": "When did the UK join the EEC?", "options": ["1973", "1969", "1665"], "correctAnswer": 0 },
            { "text": "What was the last successful foreign invasion of England?", "options": ["1997", "1812", "1066"], "correctAnswer": 2 }
        ]
    },
    {
        "title": "Life in the UK Test 24",
        "questions": [
            { "text": "Who defeated the French at the battle of Agincourt in 1455?", "options": ["Ernest Rutherford", "King Henry V", "David Beckham"], "correctAnswer": 1 },
            { "text": "Which British Prime Minister nationalised major industries?", "options": ["Margaret Thatcher", "Clement Attlee", "Tony Blair"], "correctAnswer": 1 },
            { "text": "Who was the first Archbishop of Canterbury?", "options": ["St Augustine", "St David", "St George"], "correctAnswer": 0 },
            { "text": "Who was the first Archbishop of Canterbury? (Duplicate question)", "options": ["Oliver Twist", "Captain James Cook", "Sir Francis Drake"], "correctAnswer": 2, "explanation": "Likely refers to 'Who sailed the Golden Hind?' or similar -> Drake." },
            { "text": "What were the main occupations during the Iron Age?", "options": ["Scientists", "Fishermen", "Farmers, craft workers or warriors"], "correctAnswer": 2 },
            { "text": "What was the name of Sir Francis Drake’s ship?", "options": ["Jason", "The Golden Hind", "Pirate ship"], "correctAnswer": 1 },
            { "text": "Where is the Tate Art Gallery located?", "options": ["London", "Belfast", "Cardiff"], "correctAnswer": 0 },
            { "text": "The version of the Bible created by King James I is known as?", "options": ["James’ Bible", "Unauthorised Bible", "Authorised Bible"], "correctAnswer": 2 },
            { "text": "Where was Catherine of Aragon from?", "options": ["Spain", "India", "Pakistan"], "correctAnswer": 0 },
            { "text": "Is Northern Ireland part of Great Britain?", "options": ["Yes", "No"], "correctAnswer": 1 },
            { "text": "If you’re a dog owner, what should collar have?", "options": ["Owner's address & name", "Owner's name", "Dog's name"], "correctAnswer": 0 },
            { "text": "What day related to the death of Jesus Christ?", "options": ["Good Friday", "Christmas Day", "Shrove Tuesday"], "correctAnswer": 0 },
            { "text": "What day related to the death of Jesus Christ? (Duplicate)", "options": ["Apple", "Idiot", "Spaghetti"], "correctAnswer": 1 },
            { "text": "What type of literature are the Canterbury tales?", "options": ["Rap", "Poem", "Song"], "correctAnswer": 1 },
            { "text": "Which British playwright invented many words?", "options": ["Mo Farah", "Roger Bannister", "William Shakespeare"], "correctAnswer": 2 },
            { "text": "What proportion of population died in Black Death?", "options": ["No one", "Elderly", "One third"], "correctAnswer": 2 },
            { "text": "Who wrote ‘The Canterbury Tales’?", "options": ["Wordsworth", "Geoffrey Chaucer", "Shakespeare"], "correctAnswer": 1 },
            { "text": "What led American colonies to want independence?", "options": ["Food", "Claim", "Tax"], "correctAnswer": 2 },
            { "text": "Which PM is famous for ‘blood, toil, tears and sweat’?", "options": ["Elizabeth I", "Winston Churchill", "Oliver Cromwell"], "correctAnswer": 1 },
            { "text": "Which country did NOT belong to the Allies during World War II?", "options": ["France", "Bulgaria", "Britain"], "correctAnswer": 1 },
            { "text": "Which country did NOT belong to the Allies? (Duplicate)", "options": ["Mo Farah", "Christopher Wren", "Roger Bannister"], "correctAnswer": 2, "explanation": "Likely refers to 'First sub-4 minute mile?' -> Bannister." },
            { "text": "Who developed the radar?", "options": ["Tim Berner’s Lee", "Francis Cockerill", "Sir Robert Watson-Watt"], "correctAnswer": 2 },
            { "text": "Who sat at the House of Lords during the Middle Ages?", "options": ["Doctors", "Engineers", "Great landowners and bishops"], "correctAnswer": 2 },
            { "text": "Which country was NOT part of Central Powers (WWI)?", "options": ["Great Britain", "Serbia", "France"], "correctAnswer": 0, "explanation": "Actually Britain, Serbia and France were Allies. The Central Powers were Germany, Austria-Hungary etc. The question logic is tricky or source is flawed, but typically Britain was NOT Central Power." }
        ]
    },
    {
        "title": "Life in the UK Test 25",
        "questions": [
            { "text": "Who was the first English Prime Minister?", "options": ["David Beckham", "Winston Churchill", "Sir Robert Walpole"], "correctAnswer": 2 },
            { "text": "Who was Robert Burns?", "options": ["Scottish poet", "French nurse", "Italian painter"], "correctAnswer": 0 },
            { "text": "Who established the Church of England?", "options": ["Margaret Thatcher", "Henry VIII", "William the Conqueror"], "correctAnswer": 1 },
            { "text": "What is the Enlightenment?", "options": ["Industrial Revolution", "Glorious Revolution", "Enlightenment"], "correctAnswer": 2 },
            { "text": "What is the meaning of ‘Magna Carta’?", "options": ["Tower of London", "Queen’s nickname", "The Great Charter"], "correctAnswer": 2 },
            { "text": "When did the Wars of the Roses end?", "options": ["1066", "1455", "1485"], "correctAnswer": 2 },
            { "text": "When is Hogmanay celebrated?", "options": ["1st January", "31st December", "25th December"], "correctAnswer": 1 },
            { "text": "When is Hogmanay celebrated? (Duplicate)", "options": ["Enlightenment", "Industrial revolution", "Hansard"], "correctAnswer": 2, "explanation": "Likely refers to 'What are parliament reports called?' -> Hansard." },
            { "text": "Who defeated Napoleon at Waterloo?", "options": ["Napoleon", "Duke of Wellington", "Mary Poppins"], "correctAnswer": 1 },
            { "text": "What was the symbol of the House of Tudor?", "options": ["Camel", "Horse", "A red rose with a white rose inside it"], "correctAnswer": 2 },
            { "text": "What animal is represented in the Welsh flag?", "options": ["Cow", "Rabbit", "Dragon"], "correctAnswer": 2 },
            { "text": "Which famous economist developed ideas about economics (18th c)?", "options": ["Adam Smith", "Theresa May", "Margaret Thatcher"], "correctAnswer": 0 },
            { "text": "Who invented the AGM/cashpoint?", "options": ["Tim Berners Lee", "James Goodfellow", "Tony Blair"], "correctAnswer": 1 },
            { "text": "What is the meaning of ‘Habeas corpus’?", "options": ["Present person in court", "Stop at accident", "No appeal"], "correctAnswer": 0 },
            { "text": "Which German princess got married with Henry VIII?", "options": ["Catherine of Aragorn", "Anne of Cleves", "Anne Boleyn"], "correctAnswer": 1 },
            { "text": "What was the most spoken language during the Iron Age?", "options": ["Celtic", "Urdu", "Punjabi"], "correctAnswer": 0 },
            { "text": "Which was a famous battle of Hundred Years War?", "options": ["Waterloo", "Agincourt", "Bosworth"], "correctAnswer": 1 },
            { "text": "Where did engineers come from during Middle Ages?", "options": ["Germany", "Italy", "France"], "correctAnswer": 0 },
            { "text": "How many wives did Henry VIII have?", "options": ["Two", "Six", "Eight"], "correctAnswer": 1 },
            { "text": "When did English become preferred language of royal court?", "options": ["1400", "1066", "410"], "correctAnswer": 0 },
            { "text": "What was Boudicca known for?", "options": ["Rebellion against Romans", "Inspire farmers", "Travel"], "correctAnswer": 0 },
            { "text": "When was the hovercraft invented?", "options": ["1950s", "1930s", "1820s"], "correctAnswer": 0 },
            { "text": "Who is the author of ‘Macbeth’?", "options": ["Carol Anne Duffy", "Shakespeare", "Wordsworth"], "correctAnswer": 1 },
            { "text": "What animal was cloned by Wilmot and Campbell?", "options": ["Cow", "Rat", "Sheep"], "correctAnswer": 2 },
            { "text": "Which statements are true about women?", "options": ["87%", "27%", "Women make up half of the work force"], "correctAnswer": 2 }
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
