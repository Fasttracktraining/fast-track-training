const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 4: Safety margins",
    description: "Learn about stopping distances, weather conditions, and maintaining safe gaps.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231957?fl=pl&fe=sh",
    questions: [
        {
            text: "You have just gone through deep water. To dry off the brakes you should",
            options: ["Accelerate and keep to high speed for short time", "Go slowly while gently applying the brake", "Avoid using the brakes all for a few miles", "Stop for at least an hour to allow them time to dry"],
            correctAnswer: 1,
            explanation: "Treading on the brake pedal lightly while moving slowly will generate enough heat to dry them out."
        },
        {
            text: "You are overtaking a motorcyclist in strong winds. What should you do?",
            options: ["Allow extra room", "Give a thank you wave", "Move back early", "Sound your horn"],
            correctAnswer: 0,
            explanation: "Motorcyclists can be blown off course by strong gusts of wind or the turbulence from your vehicle."
        },
        {
            text: "You are travelling at 50mph on a good, dry road. What is your typical overall stopping distance?",
            options: ["96 metres (315 feet)", "75 metres (245 feet)", "53 metres (175 feet)", "36 metres (118 feet)"],
            correctAnswer: 2,
            explanation: "At 50 mph, the typical stopping distance consists of 15m thinking distance and 38m braking distance, totalling 53m."
        },
        {
            text: "What is the most common cause of skidding?",
            options: ["Worn tyres", "Driver error", "Other vehicles", "Pedestrians"],
            correctAnswer: 1,
            explanation: "Skidding is usually caused by the driver braking, accelerating, or steering too harshly for the road conditions."
        },
        {
            text: "You are following a vehicle at a safe distance on a wet road. Another driver overtakes you and pulls into the gap you have left. What should you do?",
            options: ["Flash your headlights as a warning", "Try to overtake safely as soon as you can", "Drop back to regain a safe distance", "Stay close to the other vehicle until it moves on"],
            correctAnswer: 2,
            explanation: "Always maintain a safe following distance. If someone pulls into your gap, drop back until you have a safe margin again."
        },
        {
            text: "You are trying to move off on snow. You should use",
            options: ["The lowest gear you can", "The highest gear you can", "A high engine speed", "The handbrake and footbrake together"],
            correctAnswer: 1,
            explanation: "Using a higher gear (like second) helps prevent the wheels from spinning on slippery surfaces."
        },
        {
            text: "The main benefit of having four-wheel drive is to improve",
            options: ["Road holding", "Fuel consumption", "Stopping distance", "Passenger comfort"],
            correctAnswer: 0,
            explanation: "Four-wheel drive provides better traction and road holding, especially in slippery or off-road conditions."
        },
        {
            text: "You are on a long, downhill slope. What should you do to help control the speed of your vehicle?",
            options: ["Select neutral", "Select a lower gear", "Grip the handbrake firmly", "Apply the parking brake gently"],
            correctAnswer: 1,
            explanation: "Using a lower gear (engine braking) helps prevent your brakes from overheating on long descents."
        },
        {
            text: "Anti-lock brakes may not work as effectively if the road surface is Mark TWO answers.",
            options: ["Dry", "Loose", "Wet", "Good", "Firm"],
            correctAnswers: [1, 2],
            correctAnswer: 1,
            explanation: "ABS can be less effective on loose surfaces (like gravel) or very slippery conditions where it may increase stopping distances."
        },
        {
            text: "You are driving in heavy rain. Your steering suddenly becomes very light. You should",
            options: ["Steer towards the side of the road", "Apply gentle acceleration", "Brake firmly to reduce speed", "Ease off the accelerator"],
            correctAnswer: 3,
            explanation: "This is 'aquaplaning'. Ease off the accelerator to allow the tyres to regain contact with the road. Don't brake or steer harshly."
        },
        {
            text: "You are travelling at 50 mph on a dry road. What is the shortest overall stopping distance you could expect to stop in?",
            options: ["23 metres (75 feet)", "36 metres (118 feet)", "53 metres (175 feet)", "73 metres (240 feet)"],
            correctAnswer: 2,
            explanation: "53 metres is the standard overall stopping distance at 50 mph on a dry road."
        },
        {
            text: "Anti-lock brakes reduce the chances of a skid occurring particularly when",
            options: ["Driving down a steep hill", "Braking during normal driving", "Braking in an emergency", "Driving on good road surfaces"],
            correctAnswer: 2,
            explanation: "ABS is designed to prevent wheels from locking during heavy or emergency braking, helping you maintain steering control."
        },
        {
            text: "To avoid a collision when entering a contraflow system, you should (mark 3 answers)",
            options: ["Reduce speed in good time", "Switch lanes at any time to make progress", "Choose an appropriate lane in good time", "Keep the correct separation distance", "Increase speed to pass through quickly", "Follow other motorists closely to avoid long queues"],
            correctAnswers: [0, 2, 3],
            correctAnswer: 0,
            explanation: "When entering a contraflow, you must obey speed limits, stay in your lane, and keep a safe distance from other vehicles."
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
