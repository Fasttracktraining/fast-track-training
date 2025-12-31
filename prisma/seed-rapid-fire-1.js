const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const reviewQuiz = {
    title: "Rapid Fire Review: Top 40 Questions",
    questions: [
        { text: "Which battle signified the end of the Wars of the Roses?", options: ["The Battle of Bosworth Field", "The Battle of Hastings", "The Battle of Trafalgar", "The Battle of Waterloo"], correctAnswer: 0, explanation: "The Battle of Bosworth Field (1485) ended the Wars of the Roses." },
        { text: "Who was William Wilberforce?", options: ["A National Poet", "A Musician", "A Politician", "A Philosopher"], correctAnswer: 2, explanation: "William Wilberforce was a politician who campaigned to abolish slavery." },
        { text: "In which country is the Prehistoric village Skara Brae located?", options: ["England", "Ireland", "Wales", "Scotland"], correctAnswer: 3, explanation: "Skara Brae is in Orkney, Scotland." },
        { text: "Who fought against the Romans?", options: ["Queen Elizabeth II", "King Henry VII", "William the Conqueror", "Queen Boudicca of Iceni"], correctAnswer: 3, explanation: "Boudicca was the queen of the Iceni who fought the Romans." },
        { text: "How old do you have to be to ride a motorbike?", options: ["25", "17", "15", "20"], correctAnswer: 1, explanation: "You typically need to be 17 to ride a standard motorbike (on a provisional license)." },
        { text: "What is the national flower of Wales?", options: ["The Daffodil", "The Rose", "The White Lilly", "The Jasmine"], correctAnswer: 0, explanation: "The Daffodil is the national flower of Wales." },
        { text: "How many members does a jury have in England, Wales and Ireland?", options: ["16", "20", "12", "24"], correctAnswer: 2, explanation: "A jury has 12 members." },
        { text: "What are the roles of MPs?", options: ["Managing business", "Surveying construction", "Law-making and representing everyone", "Selecting sports teams"], correctAnswer: 2, explanation: "MPs represent people in Parliament and help make laws." },
        { text: "Which was the last successful foreign invasion of Britain that took place in 1066?", options: ["Battle of Trafalgar", "Battle of Hastings", "Battle of Waterloo", "Battle of Bannockburn"], correctAnswer: 1, explanation: "The Battle of Hastings (1066) was the last successful invasion." },
        { text: "Where are the Crown Jewels kept?", options: ["The Tower of London", "British Museum", "The National Gallery", "Buckingham Palace"], correctAnswer: 0, explanation: "Typically kept at the Tower of London." },
        { text: "Which sport can be traced back to the 15th century in Scotland?", options: ["Cricket", "Football", "Golf", "Baseball"], correctAnswer: 2, explanation: "Golf originated in Scotland." },
        { text: "What did the Habeas Corpus Act introduce?", options: ["Every prisoner has the right to a court hearing", "Smoking ban", "3 meals a day", "No drink driving"], correctAnswer: 0, explanation: "Habeas Corpus ensures no one is held unlawfully without a court hearing." },
        { text: "What did Emmeline Pankhurst fight for?", options: ["Women's right to work", "Right to drive", "Women's right to vote", "Right to be a politician"], correctAnswer: 2, explanation: "She was the leader of the suffragettes." },
        { text: "Who is the longest-serving UK Prime minister?", options: ["Sir Robert Walpole", "Tony Blair", "Winston Churchill", "Anthony Eden"], correctAnswer: 0, explanation: "Sir Robert Walpole (1721–1742) is considered the longest serving." },
        { text: "What age can you ride a moped?", options: ["21", "19", "13", "16"], correctAnswer: 3, explanation: "You can ride a moped at 16." },
        { text: "How many people are in a jury in Scotland?", options: ["21", "15", "13", "19"], correctAnswer: 1, explanation: "In Scotland, a jury has 15 members." },
        { text: "During the reign of Henry VIII, Wales became formally united with England?", options: ["True", "False"], correctAnswer: 0, explanation: "True, via the Laws in Wales Acts." },
        { text: "Who was reigning in England when Wales became formally united with England?", options: ["William IV", "Richard", "Henry VIII", "Mary I"], correctAnswer: 2, explanation: "Henry VIII." },
        { text: "What percentage of UK population has a parent or grandparent born outside of the UK?", options: ["Around 10%", "Around 15%", "Around 20%", "Around 30%"], correctAnswer: 0, explanation: "According to the test source material, it's around 10%." },
        { text: "The National Trust and Friends of the Earth are environmental charities?", options: ["True", "False"], correctAnswer: 0, explanation: "True (Friends of the Earth is environmental; National Trust preserves heritage/nature)." },
        { text: "Where is the city of Swansea located?", options: ["England", "Spain", "Wales", "France"], correctAnswer: 2, explanation: "Swansea is in Wales." },
        { text: "Haggis is traditional food of which country?", options: ["Scotland", "Russia", "France", "Spain"], correctAnswer: 0, explanation: "Haggis is Scottish." },
        { text: "The Channel Islands are dependent territories of British Crown?", options: ["True", "False"], correctAnswer: 0, explanation: "True, they are Crown Dependencies." },
        { text: "Who is the patron saint of Scotland?", options: ["St James", "St Andrew", "St Deiniol", "St Luan"], correctAnswer: 1, explanation: "St Andrew." },
        { text: "Henry VII was married to whom after the War of the Roses?", options: ["Elizabeth of York", "Queen Mary of Scots", "Catherine of Aragon", "Anne of Cleves"], correctAnswer: 0, explanation: "He married Elizabeth of York to unite the houses." },
        { text: "Police complaints can be made where?", options: ["Army", "Sports Dept", "Finance Ministry", "To anyone in the Police Force"], correctAnswer: 3, explanation: "You can make a complaint to the police force (or IPCC)." },
        { text: "You have to be at least 21 to serve on the jury.", options: ["True", "False"], correctAnswer: 1, explanation: "False. You can serve from age 18." },
        { text: "Which historical monument did William the Conqueror build?", options: ["Buckingham Palace", "The Art Gallery", "The Tower of London", "Windsor Castle"], correctAnswer: 2, explanation: "He built the White Tower (Tower of London)." },
        { text: "Which two houses form the UK parliament?", options: ["House of Lords and The Coach House", "The School House and Commons", "House of Lords and House of Commons", "The Old Rectory and The Lodge"], correctAnswer: 2, explanation: "House of Commons and House of Lords." },
        { text: "Several Church of England bishops sit in House of Lords.", options: ["True", "False"], correctAnswer: 0, explanation: "True (The Lords Spiritual)." },
        { text: "If you think someone is trying to persuade you to join an extremist or terrorist activities, who should you contact?", options: ["Army", "The Local Police Force", "Magistrate", "MP"], correctAnswer: 1, explanation: "Contact the police." },
        { text: "What is the minimum age required to serve on a jury?", options: ["14", "16", "18", "20"], correctAnswer: 2, explanation: "18." },
        { text: "Name 2 responsibilities of a British Citizen.", options: ["Look after family", "Drive car", "Obey and respect the law", "Watch sports"], correctAnswer: 2, explanation: "To obey and respect the law (and look after yourself/family/environment)." },
        { text: "Where is the Lake District located?", options: ["France", "Germany", "England", "Belgium"], correctAnswer: 2, explanation: "England." },
        { text: "What medal did the Mary Peters win in the 1972 Olympics?", options: ["Bronze", "Silver", "Platinum", "Gold"], correctAnswer: 3, explanation: "She won Gold in the pentathlon." },
        { text: "The members of House of Lords, known as Peers, are elected by the people?", options: ["True", "False"], correctAnswer: 1, explanation: "False. They are appointed (or hereditary/bishops)." },
        { text: "Who is responsible for the crime, policing and immigration?", options: ["The Prime Minister", "The Finance Secretary", "The Home Secretary", "The King"], correctAnswer: 2, explanation: "The Home Secretary." },
        { text: "Which of the following statement are true?", options: ["Women in Britain make up about half of the workforce.", "Women in Britain make up about a quarter of the workforce."], correctAnswer: 0, explanation: "Women make up about half the workforce." },
        { text: "Against which country did Britain fight at the Battle of Waterloo?", options: ["America", "Spain", "France", "Italy"], correctAnswer: 2, explanation: "France (Napoleon)." },
        { text: "Which two countries developed the Concorde?", options: ["Germany and Russia", "France and South Africa", "Britain and France", "Russia and China"], correctAnswer: 2, explanation: "Britain and France." }
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
