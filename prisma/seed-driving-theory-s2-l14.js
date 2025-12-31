const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 14: Accidents and Emergencies",
    description: "Learn how to handle roadside incidents, emergencies, and basic first aid.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231107?fl=pl&fe=sh",
    questions: [
        {
            text: "You see a car on the hard shoulder of a motorway with a HELP pennant displayed. This means the driver is most likely to be",
            options: ["A disabled driver", "First aid trained", "A foreign visitor", "A rescue patrol person"],
            correctAnswer: 0,
            explanation: "The 'HELP' pennant is specifically designed for disabled drivers to display when they have broken down and need assistance."
        },
        {
            text: "You are going through a congested tunnel and have to stop. What should you do?",
            options: [
                "Pull up very close to the vehicle in front to save space",
                "Ignore any message signs as they are never up to date",
                "Keep a safe distance from the vehicle in front",
                "Make a U-turn and find another route"
            ],
            correctAnswer: 2,
            explanation: "Even in stationary traffic, especially in tunnels, you should maintain a safe gap in case the vehicle in front breaks down or you need to exit quickly."
        },
        {
            text: "You are on a motorway. A large box falls onto the road from a lorry. The lorry does not stop. You should",
            options: [
                "Go to the next emergency telephone and report the hazard",
                "Catch up with the lorry and try to get the driver’s attention",
                "Stop close to the box until the police arrive",
                "Pull over to the hard shoulder, then remove the box"
            ],
            correctAnswer: 0,
            explanation: "Never attempt to remove debris yourself on a motorway. Use the emergency telephone to alert authorities so they can handle it safely."
        },
        {
            text: "You arrive at the scene of a motorcycle crash. The rider is injured. When should the helmet be removed?",
            options: ["Only when it is essential", "Always straight way", "Only when the motorcyclist asks", "Always, unless they are in shock"],
            correctAnswer: 0,
            explanation: "Removing a helmet can cause further neck or spinal injuries. It should only be removed if the rider is having trouble breathing or it is otherwise absolutely essential."
        },
        {
            text: "Which of the following should you not do at the scene of a collision?",
            options: [
                "Warn other traffic by switching on your hazard warning lights",
                "Call the emergency services immediately",
                "Offer someone a cigarette to calm them down",
                "Ask drivers to switch off their engines"
            ],
            correctAnswer: 2,
            explanation: "Never offer a cigarette or anything to eat/drink at the scene of a crash, as there may be spilled fuel or the casualty may need surgery later."
        },
        {
            text: "At an incident a casualty is unconscious but still breathing. You should only move them if",
            options: ["An ambulance is on its way", "Bystanders advise you to", "There Is further danger", "Bystanders will help you to"],
            correctAnswer: 2,
            explanation: "Casualties should generally not be moved unless there is an immediate threat to their life, such as fire or further collision risk."
        },
        {
            text: "Your tyre bursts while you are driving. Which TWO things should you do?",
            options: [
                "Pull up the handbrake",
                "Brake as quickly as possible",
                "Pull up slowly at the side of the road",
                "Hold the steering wheel firmly to keep control",
                "Continue on at a normal speed"
            ],
            correctAnswers: [2, 3],
            correctAnswer: 2,
            explanation: "If a tyre bursts, grip the wheel firmly to maintain direction and allow the vehicle to slow down naturally before pulling over."
        },
        {
            text: "Which TWO safeguards could you take against fire risk to your vehicle?",
            options: [
                "Keep water levels above maximum",
                "Carry a fire extinguisher",
                "Avoid driving with a full tank petrol",
                "Use unleaded petrol",
                "Check for any strong smell of petrol",
                "Use low octane fuel"
            ],
            correctAnswers: [1, 4],
            correctAnswer: 1,
            explanation: "Carrying a suitable fire extinguisher and checking for fuel leaks (smell of petrol) are key steps in preventing and managing vehicle fires."
        },
        {
            text: "Your car catches fire. What should you do first?",
            options: [
                "Lift the bonnet and disconnect the battery",
                "Lift the bonnet and warn other traffic",
                "Call a breakdown service",
                "Call the fire brigade"
            ],
            correctAnswer: 3,
            explanation: "If your car catches fire, your priority is to get everyone out and call the emergency services. Never open the bonnet as it will feed the fire with oxygen."
        },
        {
            text: "You are in a collision on a two-way road. You have a warning triangle with you. At what distance before the obstruction should you place the warning triangle?",
            options: ["25 meters", "45 meters", "100 meters", "150 meters"],
            correctAnswer: 1,
            explanation: "A warning triangle should be placed at least 45 metres (147 feet) behind the obstruction on the same side of the road."
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
