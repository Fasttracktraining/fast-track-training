const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 12: Road Signs",
    description: "Test your knowledge of UK road signs, symbols, and markings.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231314?fl=pl&fe=sh",
    questions: [
        {
            text: "How can you identify traffic signs that give orders?",
            options: [
                "They're rectangular with a yellow border",
                "They're triangular with a blue border",
                "They're square with a brown border",
                "They're circular with a red border"
            ],
            correctAnswer: 3,
            explanation: "Signs with red circles are mostly prohibitive (telling you what you must NOT do), while blue circles usually give mandatory instructions."
        },
        {
            text: "Which type of sign tells you what you must NOT do?",
            options: [
                { text: "Circular with red border", imageSrc: "/images/driving-theory/sign-red-circle.png" },
                { text: "Blue circle", imageSrc: "/images/driving-theory/sign-blue-circle.png" },
                { text: "Blue rectangle", imageSrc: "/images/driving-theory/sign-blue-rect.png" },
                { text: "Green rectangle", imageSrc: "/images/driving-theory/sign-green-rect.png" }
            ],
            correctAnswer: 0,
            explanation: "Red circles are prohibitive signs."
        },
        {
            text: "Which sign means 'No entry'?",
            options: [
                { text: "No stopping", imageSrc: "/images/driving-theory/sign-no-stopping.png" },
                { text: "No waiting", imageSrc: "/images/driving-theory/sign-no-waiting.png" },
                { text: "National speed limit", imageSrc: "/images/driving-theory/sign-national-speed-limit.png" },
                { text: "No entry", imageSrc: "/images/driving-theory/sign-no-entry.png" }
            ],
            correctAnswer: 3,
            explanation: "The red circle with a horizontal white bar means 'No Entry' to all vehicles."
        },
        {
            text: "Which type of vehicle does this sign apply to? [Image: /images/driving-theory/sign-height-limit.png]",
            options: ["wide vehicles", "long vehicles", "high vehicles", "heavy vehicles"],
            correctAnswer: 2,
            explanation: "The sign shows a height limit (in both metric and imperial units), usually found at low bridges or tunnels."
        },
        {
            text: "Which sign means no motor vehicles allowed?",
            options: [
                { text: "No overtaking", imageSrc: "/images/driving-theory/sign-no-overtaking.png" },
                { text: "No motor vehicles", imageSrc: "/images/driving-theory/sign-no-motor-vehicles.png" },
                { text: "No cars", imageSrc: "/images/driving-theory/sign-no-cars.png" },
                { text: "No pedestrians", imageSrc: "/images/driving-theory/sign-no-pedestrians.png" }
            ],
            correctAnswer: 1,
            explanation: "A red circle showing both a car and a motorcycle means 'no motor vehicles'."
        },
        {
            text: "Which sign means 'no stopping'?",
            options: [
                { text: "No overtaking", imageSrc: "/images/driving-theory/sign-no-overtaking.png" },
                { text: "No stopping (Clearway)", imageSrc: "/images/driving-theory/sign-no-stopping.png" },
                { text: "National speed limit", imageSrc: "/images/driving-theory/sign-national-speed-limit.png" },
                { text: "No entry", imageSrc: "/images/driving-theory/sign-no-entry.png" }
            ],
            correctAnswer: 1,
            explanation: "A blue circle with a red cross (Clearway) means 'No Stopping'."
        },
        {
            text: "What does this road sign mean? [Image: /images/driving-theory/sign-give-priority-oncoming.png]",
            options: ["No overtaking allowed", "Give priority to oncoming traffic", "Two-way traffic", "One-way traffic only"],
            correctAnswer: 1,
            explanation: "A red circle with black and red arrows means you must give priority to vehicles coming from the opposite direction."
        },
        {
            text: "What does this traffic sign mean? [Image: /images/driving-theory/sign-priority-over-oncoming.png]",
            options: ["End of two-way road", "Give priority to vehicles coming towards you", "You have priority over vehicles coming towards you", "Blue lane ahead"],
            correctAnswer: 2,
            explanation: "A blue square with a white and red arrow means you have priority over oncoming traffic."
        },
        {
            text: "What messages are given by circular traffic signs that have a blue background? [Image: /images/driving-theory/sign-blue-circle-mandatory.png]",
            options: [
                "They give temporary directions during a diversion",
                "They give direction to car parks",
                "They give motorway information",
                "They give mandatory instructions"
            ],
            correctAnswer: 3,
            explanation: "Blue circles give mandatory instructions, such as 'Turn left only' or 'Keep left'."
        },
        {
            text: "In winter, road signs can be become covered by snow. What does this sign mean? [Image: /images/driving-theory/sign-snow-covered-stop.png]",
            options: ["Crossroads", "Give way", "Stop", "Turn right"],
            correctAnswer: 2,
            explanation: "The stop sign is the only octagon-shaped sign, making it recognizable even if covered by snow."
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
