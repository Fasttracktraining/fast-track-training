const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 6: Other types of vehicles",
    description: "Learn how to share the road with large vehicles, buses, trams, and vehicles towing trailers.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231638?fl=pl&fe=sh",
    questions: [
        {
            text: "You are waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
            options: ["The large vehicle can easily hide an overtaking vehicle", "The large vehicle can turn suddenly", "The large vehicle is difficult to steer in a straight line", "The large vehicle can easily hide vehicles from the left"],
            correctAnswer: 0,
            explanation: "Large vehicles can hide smaller vehicles (like motorcycles or cars) that may be overtaking them. Wait until you have a clear view."
        },
        {
            text: "You are travelling behind a bus that pulls up at a bus stop. What should you do? Mark TWO answers.",
            options: ["Accelerate past the bus sounding your horn", "Watch careful for pedestrians", "Be ready to give way to the bus", "Pull in closely behind the bus"],
            correctAnswers: [1, 2],
            correctAnswer: 1,
            explanation: "Pedestrians may run out from in front of the bus, and you should give way to buses when they signal to pull away."
        },
        {
            text: "Which of these is least likely to be affected by crosswinds?",
            options: ["Cyclists", "Motorcyclists", "High- sided vehicles", "Cars"],
            correctAnswer: 3,
            explanation: "While all vehicles can be affected, cars have a lower profile than the others and are generally less sensitive to crosswinds."
        },
        {
            text: "You are following a large articulated vehicle. It is going to turn left into a narrow road. What action should you take?",
            options: ["Move out and overtake on the right", "Pass on the left as the vehicle moves out", "Be prepared to stop behind", "Overtake quickly before the lorry moves out"],
            correctAnswer: 2,
            explanation: "Large vehicles need to swing out wide to make a turn. Stay back and wait for them to complete the maneuver."
        },
        {
            text: "As a driver why should you be more careful where trams operate?",
            options: ["Because they do not have a horn", "Because they do not stop for cars", "Because they do not have light", "Because they cannot steer to avoid you"],
            correctAnswer: 3,
            explanation: "Trams run on fixed rails and cannot steer around you, so you must be extra vigilant in tram areas."
        },
        {
            text: "You are towing a caravan. Which is the safest type of rear-view mirror to use?",
            options: ["Interior wide-angle mirror", "Extended- arm side mirror", "Ordinary door mirrors", "Ordinary interior mirror"],
            correctAnswer: 1,
            explanation: "Extended-arm mirrors allow you to see clearly past the sides of the caravan to the road behind."
        },
        {
            text: "It is a very windy day and you are about to overtake a cyclist. What should you do?",
            options: ["Overtake very close", "Keep close as you pass", "Sound your horn repeatedly", "Allow extra room"],
            correctAnswer: 3,
            explanation: "In windy conditions, cyclists can be blown off course. Always give them at least as much room as you would a car."
        },
        {
            text: "You are driving in heavy traffic on a wet road. Spray makes it difficult to be seen. You should use your Mark TWO answers",
            options: ["Full beam headlights", "Rear fog lights if visibility is less than 100 metres (328 feet )", "Rear fog lights if visibility is more than 100 metres (328 feet )", "Dipped headlights", "Sidelights only"],
            correctAnswers: [1, 3],
            correctAnswer: 3,
            explanation: "Dipped headlights help you be seen, and rear fog lights should be used if visibility is severely reduced (less than 100m)."
        },
        {
            text: "You wish to overtake a long, slow-moving vehicle on a busy road. You should",
            options: ["Follow it closely and keep moving out to see the road ahead", "Flash your headlights for oncoming traffic to give way", "Stay behind until the driver waves you past", "Keep well back until you can see that it is clear"],
            correctAnswer: 3,
            explanation: "Staying back gives you a better view of the road ahead and allows you to plan a safe overtaking maneuver."
        },
        {
            text: "You are towing a small trailer on a busy three-lane motorway. All the lanes are open. You must? (Mark two answers)",
            options: ["Not exceed 60 mph", "Not overtake", "Have a stabiliser fitted", "Use only the left and centre lanes"],
            correctAnswers: [0, 3],
            correctAnswer: 0,
            explanation: "Vehicles towing trailers must not exceed 60 mph on motorways and are not allowed in the right-hand lane (lane 3)."
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
