const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 10: Vehicle Loading",
    description: "Learn about vehicle weight, stability, and handling various road conditions.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231554?fl=pl&fe=sh",
    questions: [
        {
            text: "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
            options: ["It will be doubled", "It will be halved", "It will be ten times greater", "It will be no different"],
            correctAnswer: 0,
            explanation: "In wet weather, stopping distances are at least double that of dry conditions."
        },
        {
            text: "Which plate may appear with this road sign? [Image: /images/driving-theory/sign-road-hump.png]",
            options: [
                { text: "Humps for 1/2 mile", imageSrc: "/images/driving-theory/plate-humps-1-2-mile.png" },
                { text: "Low Bridge", imageSrc: "/images/driving-theory/plate-low-bridge.png" },
                { text: "Hump Bridge", imageSrc: "/images/driving-theory/plate-hump-bridge.png" },
                { text: "Soft Verge", imageSrc: "/images/driving-theory/plate-soft-verge.png" }
            ],
            correctAnswer: 0,
            explanation: "Information plates are often added to warning signs to give more detail, such as the distance over which humps extend."
        },
        {
            text: "What colour are the reflective studs along the left-hand edge of the motorway?",
            options: ["Green", "Amber", "Red", "White"],
            correctAnswer: 2,
            explanation: "Red studs mark the left-hand edge of the motorway, between the carriageway and the hard shoulder."
        },
        {
            text: "What’s a rumble device designed to do? [Image: /images/driving-theory/road-rumble-strips.png]",
            options: ["Give directions", "Prevent cattle escaping", "Alert you to low tyre pressure", "Alert you to a hazard"],
            correctAnswer: 3,
            explanation: "Rumble strips or devices are used to alert you to hazards, such as a roundabout or a change in speed limit, by making a sound and vibration."
        },
        {
            text: "You're travelling on a road that has road humps. What should you do when the driver in front is travelling more slowly than you?",
            options: ["Sound your horn", "Overtake as soon as you can", "Flash your headlights", "Slow down and stay behind"],
            correctAnswer: 3,
            explanation: "Be patient. Speed humps are there for safety; maintain a safe distance and stay behind slower traffic."
        },
        {
            text: "You’re driving on an icy road. What distance from the car in front should you drive?",
            options: ["Four times the normal distance", "Six times the normal distance", "Eight times the normal distance", "Ten times the normal distance"],
            correctAnswer: 3,
            explanation: "In icy conditions, stopping distances can be ten times greater than on a dry road."
        },
        {
            text: "What will affect your vehicle's stopping distance?",
            options: ["The speed limit", "The street lighting", "The time of day", "The condition of the tyres"],
            correctAnswer: 3,
            explanation: "Tyre condition, road surface, and weather all directly affect how quickly your vehicle can stop."
        },
        {
            text: "Why is travelling in neutral for long distances (known as coasting) bad driving technique?",
            options: ["It will cause the car to skid", "It will make the engine stall", "The engine will run faster", "There won't be any engine braking"],
            correctAnswer: 3,
            explanation: "Coasting removes engine braking and gives you less control over the vehicle."
        },
        {
            text: "What should you do when dealing with this hazard? [Image: /images/driving-theory/sign-ford.png]",
            options: ["Switch on your hazard warning lights", "Use a low gear and drive slowly", "Use a high gear to prevent wheelspin", "Switch on your windscreen wipers"],
            correctAnswer: 1,
            explanation: "When driving through water (like a Ford), use a low gear and keep your speed slow to prevent damage and maintain control."
        },
        {
            text: "Why is dangerous to leave rear fog lights switched on after the fog has cleared?",
            options: ["They may be confused with brake lights", "The bulbs would fail", "Electrical systems could be overloaded", "Direction indicators may not work properly"],
            correctAnswer: 0,
            explanation: "Bright fog lights can dazzle other drivers and may be confused with brake lights, especially in traffic."
        },
        {
            text: "What should you check before you start a journey in foggy weather?",
            options: ["The radiator has enough anti-freeze", "You have a warning triangle in the vehicle", "The windows and lights are clean and clear", "You have a mobile phone with you"],
            correctAnswer: 2,
            explanation: "Ensure all your windows and lights are clean so you can see and be seen as clearly as possible."
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
                    explanation: q.explanation
                }))
            }
        }
    });

    console.log(`✅ ${quiz.title} seeded successfully!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
