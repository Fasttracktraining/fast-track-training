const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 3: Safety and your vehicle",
    description: "Understand vehicle maintenance, security, and environmental impact.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807232057?fl=pl&fe=sh",
    questions: [
        {
            text: "Excessive or uneven tyre wear can be caused by faults in which THREE of the following?",
            options: ["The gearbox", "The braking system", "The accelerator", "The exhaust system", "Wheel alignment", "The suspension"],
            correctAnswers: [1, 4, 5],
            correctAnswer: 1,
            explanation: "Faults in the braking system, suspension and wheel alignment can all cause tyres to wear unevenly."
        },
        {
            text: "Why is it a good idea to plan your journey to avoid busy times?",
            options: ["You will an easier journey", "You will have a more stressful journey", "Your journey time be longer", "It will cause more traffic congestion"],
            correctAnswer: 0,
            explanation: "Avoiding peak times makes your journey less stressful and prevents you from adding to traffic congestion."
        },
        {
            text: "As well as planning your route before starting a journey, you should also plan an alternative route. Why is this?",
            options: ["To let another driver overtake", "Your first route may be blocked", "To avoid a railway level crossing", "In case you have to avoid emergency vehicles"],
            correctAnswer: 1,
            explanation: "Roadworks or accidents can block your planned route, so having an alternative is a smart move."
        },
        {
            text: "Which of these, if allowed to get low, could cause you to crash?",
            options: ["Anti-freezer level", "Brake fluid level", "Battery water level", "Radiator coolant level"],
            correctAnswer: 1,
            explanation: "If your brake fluid is low, your brakes may fail, which could lead to a serious crash."
        },
        {
            text: "What can cause heavy steering?",
            options: ["Driving on ice", "Badly worn brakes", "Over-inflated tyres", "Under-inflated tyres"],
            correctAnswer: 3,
            explanation: "Under-inflated tyres have a larger contact area with the road, making the steering feel heavy."
        },
        {
            text: "Which of the following should not be kept in your vehicle?",
            options: ["A first aid kit", "A road atlas", "The tax disc", "The vehicle documents"],
            correctAnswer: 3,
            explanation: "Never leave vehicle documents (like the V5C) in your car, as it makes it much easier for a thief to sell your vehicle."
        },
        {
            text: "Which of these is most likely to deter the theft of your vehicle?",
            options: ["An immobiliser", "Tinted windows", "Locking wheel nuts", "A sun screen"],
            correctAnswer: 0,
            explanation: "An immobiliser prevents the engine from starting without the correct key or fob, making it very effective against theft."
        },
        {
            text: "The purpose of a catalytic converter is to reduce",
            options: ["Fuel consumption", "The risk of fire", "Toxic exhaust gases", "Engine wear"],
            correctAnswer: 2,
            explanation: "A catalytic converter removes some of the harmful gases from the exhaust system before they enter the atmosphere."
        },
        {
            text: "It is essential that tyre pressures are checked regularly. When should this be done?",
            options: ["After any lengthy journey", "After travelling at high speed", "When tyres are hot", "When tyres are cold"],
            correctAnswer: 3,
            explanation: "Check tyre pressures when the tyres are cold to get an accurate reading."
        },
        {
            text: "You are parked on a road at night. Where must you use parking lights?",
            options: ["Where there continuous white lines in the middle of the road", "Where the speed limit exceeds 30 mph", "Where you are facing oncoming traffic", "Where you are near a bus stop"],
            correctAnswer: 1,
            explanation: "You must use parking lights if you are parked on a road with a speed limit greater than 30 mph."
        },
        {
            text: "Which three of the following does the law require you to keep in good condition? (mark three answers)",
            options: ["Gears", "Transmission", "Headlights", "Windscreen", "Seat belts"],
            correctAnswers: [2, 3, 4],
            correctAnswer: 2,
            explanation: "The law requires safety-critical items like lights, windscreens, and seat belts to be in good working order."
        },
        {
            text: "Motor vehicles can harm the environment. This has resulted in (mark 3 answers)",
            options: ["Air pollution", "Damage to buildings", "Less risk to health", "Improved public transport", "Less use of electrical vehicles", "Using up natural resources"],
            correctAnswers: [0, 1, 5],
            correctAnswer: 0,
            explanation: "Exhaust fumes pollute the air, damage buildings, and use up finite natural resources like oil."
        },
        {
            text: "When leaving your vehicle parked and unattended you should?",
            options: ["Park near a busy junction", "Park in a housing estate", "remove the key and lock it", "Leave the left indicator on"],
            correctAnswer: 2,
            explanation: "Never leave your vehicle with the key in the ignition. Always lock it, even if you're only leaving it for a moment."
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
