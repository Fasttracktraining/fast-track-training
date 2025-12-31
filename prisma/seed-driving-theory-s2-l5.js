const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 5: Vulnerable road users",
    description: "Learn how to share the road safely with pedestrians, cyclists, motorcyclists, and others.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231805?fl=pl&fe=sh",
    questions: [
        {
            text: "How will a school crossing patrol signal you to stop?",
            options: ["By pointing to children on the opposite pavement", "By displaying a red light", "By displaying a stop sign", "By giving you an arm signal"],
            correctAnswer: 2,
            explanation: "A school crossing patrol will use a 'STOP-CHILDREN' sign to signal you to stop."
        },
        {
            text: "Why should you look particularly for motorcyclists and cyclists at junctions?",
            options: ["They may slow down to let you turn", "They may want to turn into the side road", "They might not see you turn", "They are harder to see"],
            correctAnswer: 3,
            explanation: "Because they are smaller than cars, they are often difficult to see, especially at junctions."
        },
        {
            text: "You are following two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
            options: ["Left", "Right", "Any direction", "Straight ahead"],
            correctAnswer: 2,
            explanation: "Cyclists often stay in the left-hand lane for safety, even when turning right at a roundabout. Give them plenty of room."
        },
        {
            text: "There are flashing amber lights under a school warning sign. What action should you take?",
            options: ["Reduce speed until you are clear of the area", "Keep up your speed and sound your horn", "Increase your speed to clear the area quickly", "Wait at the lights until they change to green"],
            correctAnswer: 0,
            explanation: "Flashing amber lights mean that children are likely to be crossing. Slow down and be prepared to stop."
        },
        {
            text: "You are following a car driven by an elderly driver. You should",
            options: ["Expect the driver to driver badly", "Flash your lights and overtake", "Be aware that the driver’s reactions may not be as fast as your", "Stay very close behind but be careful"],
            correctAnswer: 2,
            explanation: "Always be patient and considerate. Older drivers may take longer to react or process information."
        },
        {
            text: "Ahead of you there is a moving vehicle with a flashing amber beacon. This means it is",
            options: ["Slow moving", "Broken down", "A doctor’s car", "School crossing patrol"],
            correctAnswer: 0,
            explanation: "Flashing amber beacons are used by slow-moving vehicles, such as tractors or maintenance vehicles."
        },
        {
            text: "You see a pedestrian with a dog. The dog has a yellow or burgundy coat. This especially warns you that the pedestrian is",
            options: ["Elderly", "Dog training", "Colour blind", "Deaf"],
            correctAnswer: 3,
            explanation: "A dog wearing a yellow or burgundy coat (often with a harness) signifies that the person is deaf."
        },
        {
            text: "You see two elderly pedestrians about to cross the road ahead. You should",
            options: ["Expect them to wait for you to pass", "Speed up t get past them quickly", "Stop and wave them across the road", "Be careful, they may misjudge your speed"],
            correctAnswer: 3,
            explanation: "Elderly people and children may find it harder to judge the speed of approaching vehicles. Be prepared to slow down."
        },
        {
            text: "You are coming to a roundabout. A cyclist is signalling to turn right. What should you do?",
            options: ["Overtake on the right", "Give a horn warning", "Give the cyclist plenty of room", "Signal the cyclist to move across"],
            correctAnswer: 2,
            explanation: "Give cyclists plenty of room, especially at roundabouts where they may be unstable or take an unusual line."
        },
        {
            text: "There is a slow-moving motorcyclist ahead of you. You are unsure what the rider is going to do. You should",
            options: ["Pass on the left", "Stay behind", "Pass on the right", "Move closer"],
            correctAnswer: 1,
            explanation: "If you are unsure of another road user's intentions, stay back until you can see what they are doing."
        },
        {
            text: "You are turning left into a side road. What hazards should you be especially aware of?",
            options: ["One way street", "Pedestrians", "Traffic congestion", "Parked Vehicles"],
            correctAnswer: 1,
            explanation: "Always check for pedestrians who may be crossing the side road you are about to enter."
        },
        {
            text: "Why should you always reduce your speed when travelling in fog?",
            options: ["The brakes do not work as well", "You will be dazzled by other headlights", "The engine will take longer to warm up", "It is more difficult to see events ahead"],
            correctAnswer: 3,
            explanation: "Fog significantly reduces visibility, so you must slow down to ensure you can stop within the distance you can see."
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
