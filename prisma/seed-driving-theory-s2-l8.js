const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 8: Vehicle Handling",
    description: "Learn how to control your vehicle in various conditions and environments.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231590?fl=pl&fe=sh",
    questions: [
        {
            text: "In which THREE of these situations may you overtake another vehicle on the left?",
            options: [
                "When you are in a one-way street",
                "When approaching a motorway slip road where you will be turning off",
                "When the vehicle in front is signalling to turn right",
                "When a slower vehicle is travelling in the right- hand lane of a dual carriageway",
                "In slow-moving traffic queues when traffic in the right-hand lane is moving more slowly"
            ],
            correctAnswers: [0, 2, 4],
            correctAnswer: 0,
            explanation: "You can overtake on the left in one-way streets, when a vehicle is turning right, or in slow-moving queues where the right lane is slower."
        },
        {
            text: "Traffic calming measures are used to",
            options: ["Stop road rage", "Help overtaking", "Slow traffic down", "Help parking"],
            correctAnswer: 2,
            explanation: "Measures like speed humps and chicanes are designed to reduce vehicle speed in sensitive areas."
        },
        {
            text: "You are on a road which has speed humps. A driver in front is travelling slower than you. You should",
            options: ["Sound your horn", "Overtake as soon as you can", "Flash your headlights", "Slow down and stay behind"],
            correctAnswer: 3,
            explanation: "Be patient. Speed humps are there for safety; maintain a safe distance and stay behind slower traffic."
        },
        {
            text: "Areas reserved for trams may have? Mark THREE answers.",
            options: [
                "Metal studs around them",
                "White line markings",
                "Zigzag markings",
                "A different coloured surface",
                "Yellow hatch marking",
                "A different surface texture"
            ],
            correctAnswers: [1, 3, 5],
            correctAnswer: 1,
            explanation: "Tram areas are often delineated by white lines, different colors, or differing road textures."
        },
        {
            text: "You see a vehicle coming towards you on a single-track road. You should",
            options: ["Go back to the main road", "Do an emergency stop", "Stop at a passing place", "Put on your hazard warning light"],
            correctAnswer: 2,
            explanation: "Pull into (or wait opposite) a passing place to allow the oncoming vehicle to pass safely."
        },
        {
            text: "You are driving on a motorway in windy conditions. When passing high-sided vehicles you should",
            options: ["Increase your speed", "Beware of sudden gust", "Drive alongside very closely", "Expect normal conditions"],
            correctAnswer: 1,
            explanation: "Large vehicles can block the wind; as you pass them, you may be hit by a sudden gust of wind."
        },
        {
            text: "Chains can be fitted to your wheels to help prevent",
            options: ["Damage to the road surface", "Wear to the tyres", "Skidding in deep snow", "The brakes locking"],
            correctAnswer: 2,
            explanation: "Snow chains provide extra grip in deep snow to help prevent skidding and loss of traction."
        },
        {
            text: "You are driving at night. You are dazzled by headlights coming towards you. You should",
            options: ["Pull down your sun visor", "Slow down or stop", "Switch on your main beam headlights", "Put your hand over your eyes"],
            correctAnswer: 1,
            explanation: "If you are dazzled, slow down and if necessary, stop until your vision recovers."
        },
        {
            text: "You are on the motorway at night. You must have your headlights switched on unless",
            options: [
                "There are vehicles close in front of you",
                "You are travelling below 50 mph",
                "The motorway is lit",
                "Your vehicle is broken down on the hard shoulder"
            ],
            correctAnswer: 3,
            explanation: "Headlights must be used at night on motorways. The only time they are usually off when on the motorway is if you are stationary on the hard shoulder."
        },
        {
            text: "You will feel the effects of engine braking when you",
            options: ["Only use the handbrake", "Only use neutral", "Change to a lower gear", "Change to a higher gear"],
            correctAnswer: 2,
            explanation: "Changing to a lower gear increases engine resistance, which helps slow the vehicle down."
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
