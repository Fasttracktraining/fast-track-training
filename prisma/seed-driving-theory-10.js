const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 10: Vehicle Loading
 * 12 questions
 */

const quiz = {
    title: "Lesson 10: Vehicle Loading",
    description: "Understand the safety rules for loading your vehicle and towing trailers.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "You're carrying a child in your car. They're under three years old. Which of these is a suitable restraint?",
            options: [
                "An adult lap belt",
                "An adult seat belt",
                "An adult holding a child",
                "A child seat"
            ],
            correctAnswer: 3,
            explanation: "Children under three must use a suitable child restraint."
        },
        {
            text: "How should a load be carried on your roof rack?",
            options: [
                "Covered with plastic sheeting",
                "Securely fastened with suitable restraints",
                "Loaded towards the rear of the vehicle",
                "Visible in your exterior mirror"
            ],
            correctAnswer: 1,
            explanation: "Loads must be securely fastened so they don't fall off or shift."
        },
        {
            text: "You wish to tow a trailer. Where would you find the maximum nose weight allowed on your vehicle's tow hitch?",
            options: [
                "In your licence documents",
                "In The Highway Code",
                "In your vehicle registration certificate",
                "In the vehicle handbook"
            ],
            correctAnswer: 3,
            explanation: "The vehicle handbook gives specifications for towing weights."
        },
        {
            text: "A trailer must stay securely hitched to the towing vehicle. What additional safety device must be fitted to a trailer braking system?",
            options: [
                "Jockey wheel",
                "Stabiliser",
                "Breakaway cable",
                "Corner steadies"
            ],
            correctAnswer: 2,
            explanation: "A breakaway cable activates the trailer's brakes if it becomes detached."
        },
        {
            text: "Are passengers allowed to ride in a caravan that's being towed?",
            options: [
                "No, not at any time",
                "Only if all the seats in the towing vehicle are full",
                "Only if a stabiliser is fitted",
                "Yes, if they're over 14"
            ],
            correctAnswer: 0,
            explanation: "It is illegal and highly dangerous for passengers to travel in a moving caravan."
        },
        {
            text: "You're planning to tow a caravan. Which of these will be the biggest aid to the vehicle handling?",
            options: [
                "Power steering fitted to the towing vehicle",
                "A stabiliser fitted to the tow bar",
                "A jockey wheel fitted to the tow bar",
                "Anti-lock brakes fitted to the towing vehicle"
            ],
            correctAnswer: 1,
            explanation: "A stabiliser helps prevent the car and caravan from swaying (snaking)."
        },
        {
            text: "Who's responsible for making sure that a vehicle isn't overloaded?",
            options: [
                "The person who loaded the vehicle",
                "The owner of the items being carried",
                "The licensing authority",
                "The driver of the vehicle"
            ],
            correctAnswer: 3,
            explanation: "The driver is always responsible for the vehicle's condition and load."
        },
        {
            text: "What can be badly affected when you overload your vehicle?",
            options: [
                "The vehicle's ventilation",
                "The vehicle's battery",
                "The vehicle's gearbox",
                "The vehicle's handling"
            ],
            correctAnswer: 3,
            explanation: "Overloading affects steering, braking, and stability."
        },
        {
            text: "How will a heavy load on your roof rack affect your vehicle's handling?",
            options: [
                "It will make the steering lighter",
                "It will reduce the stopping distance",
                "It will improve the road holding",
                "It will reduce stability"
            ],
            correctAnswer: 3,
            explanation: "A high centre of gravity reduces stability, especially on bends."
        },
        {
            text: "On which occasion should you inflate your tyres to more than their normal pressure?",
            options: [
                "When the tyre tread is worn below 2 mm",
                "When the roads are slippery",
                "When the vehicle is fitted with anti-lock brakes",
                "When carrying a heavy load"
            ],
            correctAnswer: 3,
            explanation: "Check the handbook; higher pressures are usually needed for heavy loads."
        },
        {
            text: "What should you do if a trailer starts to swing from side to side while you're towing it?",
            options: [
                "Accelerate until it stabilises",
                "Let go of the steering wheel and let it correct itself",
                "Brake hard and hold the pedal down",
                "Ease off the accelerator to reduce your speed"
            ],
            correctAnswer: 3,
            explanation: "Slow down gently. Do not brake harshly or steer suddenly."
        },
        {
            text: "You're towing a small trailer on a busy three-lane motorway. What must you do if all the lanes are open?",
            options: [
                "Use only the left-hand and center lanes",
                "Not exceed 50 mph",
                "Have a stabiliser fitted",
                "Not overtake"
            ],
            correctAnswer: 0,
            explanation: "Towing vehicles are restricted from the right-hand lane of a motorway with three or more lanes."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 10: Vehicle Loading...\n");

    const course = await prisma.course.findUnique({
        where: { slug: quiz.courseSlug }
    });

    if (!course) {
        console.error("Course not found!");
        return;
    }

    // Delete existing quiz to ensure full update
    await prisma.quiz.deleteMany({
        where: { title: quiz.title }
    });
    console.log(`deleted existing quiz: ${quiz.title}`);

    const createdQuiz = await prisma.quiz.create({
        data: {
            title: quiz.title,
            description: quiz.description,
            isPremium: quiz.isPremium,
            videoUrl: "https://vimeo.com/1009429572",
            courseId: course.id,
            questions: {
                create: quiz.questions.map((q) => {
                    const optionsData = JSON.stringify(q.options);

                    return {
                        text: q.imageSrc ? `${q.text}\n[Image: ${q.imageSrc}]` : q.text,
                        options: optionsData,
                        correctAnswer: q.correctAnswer,
                        explanation: q.explanation || null
                    };
                })
            }
        },
        include: { questions: true }
    });

    console.log(`✅ Created quiz: ${createdQuiz.title}`);
    console.log(`   📝 ${createdQuiz.questions.length} questions added`);
}

main()
    .catch((e) => {
        console.error("❌ Error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
