const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 9: Motorway Driving",
    description: "Learn the rules, signals, and safety procedures for driving on motorways.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231678?fl=pl&fe=sh",
    questions: [
        {
            text: "When joining a motorway you must always",
            options: ["Use the hard shoulder", "Stop at the end of the acceleration lane", "Come to stop before joining the motorway", "Give way to traffic already on motorway"],
            correctAnswer: 3,
            explanation: "Traffic already on the motorway has priority. You should adjust your speed to fit into a gap in the traffic safely."
        },
        {
            text: "You break down on a motorway. You need to call for help. Why may it be better to use an emergency roadside telephone rather than a mobile phone?",
            options: ["It connects you ton a local garage", "Using a mobile phone will distract other drivers", "It allows easy location by the emergency services", "Mobile phones do not work on motorways"],
            correctAnswer: 2,
            explanation: "Emergency telephones are numbered and linked directly to a control centre, allowing operators to know your exact location immediately."
        },
        {
            text: "After a breakdown you need to re-join the main carriageway of a motorway from the hard shoulder. You should",
            options: ["Gain speed on the hard shoulder before moving out onto the carriageway", "Move out onto the carriageway then build up your speed", "Move out onto the carriageway using your hazard light", "Wait on the hard shoulder until someone flashes their headlights"],
            correctAnswer: 0,
            explanation: "Use the hard shoulder as an acceleration lane to match the speed of the traffic in the left-hand lane before merging."
        },
        {
            text: "What colour are the reflective studs between a motorway and its slip road?",
            options: ["Green", "Red", "Amber", "White"],
            correctAnswer: 0,
            explanation: "Green studs mark the boundary between the main carriageway and a slip road or lay-by."
        },
        {
            text: "On a three-lane motorway which lane should you normally use?",
            options: ["Centre", "Left", "Right", "Either the right or centre"],
            correctAnswer: 1,
            explanation: "You should always stay in the left-hand lane unless you are overtaking slower-moving traffic."
        },
        {
            text: "Which FOUR of these must not use motorways? Mark FOUR answers.",
            options: [
                "Learner car drivers with a parent as a supervising driver",
                "Motorcycles over 50cc",
                "Double-decker buses",
                "Farm tractors",
                "Horse riders",
                "Cyclists"
            ],
            correctAnswers: [0, 3, 4, 5],
            correctAnswer: 0,
            explanation: "Motorways are prohibited for learners (unless with an ADI in a dual-controlled car), farm vehicles, horse riders, and cyclists."
        },
        {
            text: "Immediately after joining a motorway you should normally",
            options: ["Try to overtake", "Re-adjust your mirrors", "Position your vehicle in the centre lane", "Keep in the left-hand lane"],
            correctAnswer: 3,
            explanation: "Once you've joined, stay in the left-hand lane to settle into the flow of traffic."
        },
        {
            text: "You are allowed to stop on a motorway when you",
            options: ["Need to walk and get fresh air", "Wish to pick up hitchhikers", "Are told to do so by flashing red lights", "Need to use a mobile phone"],
            correctAnswer: 2,
            explanation: "You must only stop on a motorway in an emergency, when told to do so by the police or signs (like flashing red lights), or in a traffic jam."
        },
        {
            text: "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should",
            options: ["Race the other vehicles", "Move to another lane", "Maintain a steady speed", "Switch on your hazard flashers"],
            correctAnswer: 1,
            explanation: "Moving to the middle lane (if it's safe to do so) creates a gap for the joining traffic, helping the flow."
        },
        {
            text: "When may you overtake another vehicle on the left of the motorway?",
            options: [
                "You can see well ahead that the hard shoulder is clear",
                "The traffic in the right-hand lane is signalling right",
                "You warn drivers behind by signalling left",
                "You are exiting the motorway"
            ],
            correctAnswer: 3,
            explanation: "You can move to the left if you are in a queue of traffic and the lane to your right is moving more slowly, or when you are moving into a deceleration lane to exit."
        }
    ]
};

async function main() {
    console.log(`🚗 Seeding Driving Theory - ${quiz.title}...`);

    const course = await prisma.course.findUnique({
        where: { slug: quiz.courseSlug }
    });

    if (!course) {
        console.error("Course not found!");
        return;
    }

    // Delete existing quiz
    await prisma.quiz.deleteMany({ where: { title: quiz.title } });

    // Create quiz
    await prisma.quiz.create({
        data: {
            title: quiz.title,
            description: quiz.description,
            courseId: course.id,
            isPremium: quiz.isPremium,
            videoUrl: quiz.videoUrl,
            questions: {
                create: quiz.questions.map((q) => ({
                    text: q.text,
                    options: JSON.stringify(q.options),
                    correctAnswer: q.correctAnswer,
                    correctAnswers: q.correctAnswers ? JSON.stringify(q.correctAnswers) : null,
                    explanation: q.explanation
                }))
            }
        }
    });

    console.log(`✅ ${quiz.title} seeded successfully!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
