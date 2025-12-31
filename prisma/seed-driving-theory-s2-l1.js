const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 1: Attitude",
    description: "Learn about the correct attitude and behavior for safe driving on the road.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807232351?fl=pl&fe=sh",
    questions: [
        {
            text: "What type of emergency vehicle is fitted with a green flashing beacon?",
            options: ["Fire engine", "Road gritter", "Ambulance", "Doctor's car"],
            correctAnswer: 3,
            explanation: "A green flashing beacon is used by a doctor when attending an emergency call."
        },
        {
            text: "You are driving on a clear night. There is a steady stream of oncoming traffic. The national speed limit applies. Which lights should you use?",
            options: ["Full beam headlights", "Sidelights", "Dipped headlights", "Fog lights"],
            correctAnswer: 2,
            explanation: "Use dipped headlights so that you don't dazzle other road users."
        },
        {
            text: "You are driving in traffic at the speed limit for the road. The driver behind is trying to overtake. You should",
            options: ["Move closer to the car ahead, so the driver behind has no room to overtake", "Wave the driver behind to overtake when it safe", "Keep a steady course and allow the driver behind to overtake", "Accelerate to get away from the driver behind"],
            correctAnswer: 2,
            explanation: "Allow the driver behind to overtake safely. Don't block them or speed up."
        },
        {
            text: "A bus lane on your left shows no times of operation. This means it is",
            options: ["Not in operation at all", "Only in operation at peak times", "In operation 24 hours a day", "Only in operation in daylight hours"],
            correctAnswer: 2,
            explanation: "If no times are shown, the bus lane is in operation 24 hours a day."
        },
        {
            text: "A vehicle pulls out in front of you at a junction. What should you do?",
            options: ["Swerve past it and sound your horn", "Flash your headlights and drive up close behind", "Slow down and be ready to stop", "Accelerate past it immediately"],
            correctAnswer: 2,
            explanation: "Stay calm and slow down. Be prepared to stop if necessary."
        },
        {
            text: "At puffin crossings, which light will not show to a driver?",
            options: ["Flashing Amber", "Red", "Steady Amber", "Green"],
            correctAnswer: 0,
            explanation: "Puffin crossings don't have a flashing amber phase; they go from red to steady amber and then green."
        },
        {
            text: "You are driving a slow-moving vehicle on a narrow winding road. You should",
            options: ["Keep well out to stop vehicles overtake dangerously", "Wave following vehicles past you if you think they can overtake quickly", "Pull in safely when you can, to let following vehicles overtake", "Give a left signal when it is safe for vehicles to overtake"],
            correctAnswer: 2,
            explanation: "Pull in when there's a safe place to allow traffic to pass."
        },
        {
            text: "You have a loose filler cap on your diesel fuel tank. This will? (mark TWO answers)",
            options: ["Waste fuel and money", "Make roads slippery for other road users", "Improve your vehicle's fuel consumption", "Increase the level of exhaust emissions"],
            correctAnswers: [0, 1],
            correctAnswer: 0, // Fallback for single choice logic
            explanation: "A loose cap wastes fuel and spilled diesel makes the road very slippery and dangerous for others."
        },
        {
            text: "What style of driving causes increased risk to everyone?",
            options: ["Considerate", "Defensive", "Competitive", "Responsible"],
            correctAnswer: 2,
            explanation: "Competitive driving is aggressive and dangerous."
        },
        {
            text: "You wish to turn right ahead. Why should you take up the correct position in good time?",
            options: ["To allow other drivers to pull out in front of you", "To give a better view into the road that you are joining", "To help other road users know what you intend to do", "To allow driver to pass you on the right"],
            correctAnswer: 2,
            explanation: "Correct positioning shows other road users what you intend to do."
        },
        {
            text: "Tailgating means:",
            options: ["Flashing your headlights", "Driving too fast", "Driving too slow", "Following another vehicle too closely"],
            correctAnswer: 3,
            explanation: "Tailgating is following the vehicle in front too closely, which is dangerous."
        },
        {
            text: "You should only flash your headlights to other road users",
            options: ["To show that you are giving way", "To show that you are about to turn", "To tell them that you have right of way", "To let them know that you are there."],
            correctAnswer: 3,
            explanation: "Only flash your headlights to let other road users know that you are there."
        },
        {
            text: "A bus has stopped at a bus stop ahead of you. Its right-hand indicator is flashing. You should",
            options: ["Flash your headlights and slow down", "Slow down and give way if it is safe to do so", "Sound your horn and keep going", "Slow down and then sound your horn"],
            correctAnswer: 1,
            explanation: "Give way to buses when they are signaling to move away from a stop, if safe to do so."
        },
        {
            text: "You are driving at night. There is a steady stream of oncoming traffic. The national speed limit applies. Which lights should you use?",
            options: ["Side lights", "Full beam headlights", "Fog lights", "Dipped headlights"],
            correctAnswer: 3,
            explanation: "Use dipped headlights to avoid dazzling oncoming drivers."
        },
        {
            text: "What should you use your horn for?",
            options: ["To alert others to your presence", "To allow you right of way", "To greet together road users", "To signal your annoyance"],
            correctAnswer: 0,
            explanation: "The horn should be used to warn others of your presence."
        },
        {
            text: "Following a long vehicle too closely is unwise because…",
            options: ["Your brakes will overheat", "Your view ahead is reduced", "Your view ahead is increased", "Your engine will overheat"],
            correctAnswer: 1,
            explanation: "Being close to a large vehicle blocks your view of the road ahead."
        },
        {
            text: "You are in a line of traffic. The driver behind you is following very closely. What action should you take?",
            options: ["Ignore the following driver and continue to travel within the speed limit", "Slow down, gradually increasing the gap between you and the vehicle in front", "Signal left and wave the following driver past", "Move over to a position just left of the center line of the road"],
            correctAnswer: 1,
            explanation: "By slowing down, you increase the gap ahead, giving you more time to stop safely if the driver behind can't stop quickly."
        },
        {
            text: "You are following a vehicle on a wet road. You should leave a time gap of at least:",
            options: ["One second", "Two seconds", "Four seconds", "Five seconds"],
            correctAnswer: 2,
            explanation: "In wet weather, the 2-second gap should be doubled to 4 seconds."
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
