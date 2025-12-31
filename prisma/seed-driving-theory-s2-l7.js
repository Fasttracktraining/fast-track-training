const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 7: Hazard Awareness",
    description: "Learn how to identify and respond safely to potential hazards on the road.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231734?fl=pl&fe=sh",
    questions: [
        {
            text: "How does alcohol affect you?",
            options: ["It speeds up reactions", "It increases your awareness", "It improves your co-ordination", "It reduces your concentration"],
            correctAnswer: 3,
            explanation: "Alcohol significantly impairs your judgement and reduces your concentration, making driving extremely dangerous."
        },
        {
            text: "Which of the following types of glasses should NOT be worn when driving at night?",
            options: ["Half-moon", "Round", "Bi- focal", "Tinted"],
            correctAnswer: 3,
            explanation: "Tinted glasses or visors reduce the amount of light reaching your eyes, which is dangerous when visibility is already limited at night."
        },
        {
            text: "How will a school crossing patrol signal you to stop?",
            options: ["By pointing to children on the opposite pavement", "By displaying a red light", "By displaying a stop sign", "By giving you an arm signal"],
            correctAnswer: 2,
            explanation: "A school crossing patrol will use a 'STOP-CHILDREN' sign to signal you to stop."
        },
        {
            text: "Why should you look particularly for motorcyclists and cyclists at junctions?",
            options: ["They may want to turn into the side road", "They may slow down to let you turn", "They are harder to see", "They might not see you turn"],
            correctAnswer: 2,
            explanation: "Because they are smaller than other vehicles, motorcycles and bicycles are easier to miss at junctions."
        },
        {
            text: "You are waiting to come out of a side road. Why should you watch carefully for motorcycles?",
            options: ["Motorcycles are usually faster then cars", "Police patrols often use motorcycles", "Motorcycles are small and hard to see", "Motorcycles have right of way"],
            correctAnswer: 2,
            explanation: "Motorcycles are small and easily hidden by other vehicles or pillars. Always check twice."
        },
        {
            text: "You are following two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
            options: ["Left", "Right", "Any direction", "Straight ahead"],
            correctAnswer: 2,
            explanation: "Cyclists often stay in the left-hand lane for safety, even when turning right at a roundabout."
        },
        {
            text: "There are flashing amber lights under a school warning sign. What action should you take?",
            options: ["Reduce speed until you are clear of the area", "Keep up your speed and sound your horn", "Increase your speed to clear the area quickly", "Wait at the light until they change to green"],
            correctAnswer: 0,
            explanation: "Flashing amber lights mean that children are likely to be crossing. Slow down and be extra vigilant."
        },
        {
            text: "You are following a car driven by an elderly driver. You should",
            options: ["Expect the driver to drive badly", "Flash your lights and overtake", "Be aware that the driver’s reactions may not be as fast as yours", "Stay very close behind but be careful"],
            correctAnswer: 2,
            explanation: "Older drivers may take longer to react. Be patient and give them plenty of space."
        },
        {
            text: "Ahead of you there is a moving vehicle with a flashing amber beacon. This means it is",
            options: ["Slow moving", "Broken down", "A doctor’s car", "A school crossing patrol"],
            correctAnswer: 0,
            explanation: "Flashing amber beacons mean the vehicle is slow-moving, such as a maintenance vehicle or tractor."
        },
        {
            text: "You should never attempt to overtake a cyclist",
            options: ["Just before you turn left", "On a left-hand bend", "On a one-way street", "On a dual carriageway"],
            correctAnswer: 0,
            explanation: "Overtaking just before turning left is dangerous as you could 'left-hook' the cyclist."
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
