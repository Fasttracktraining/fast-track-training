const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 2: Alertness",
    description: "Learn how to maintain concentration and stay alert while driving.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807232236?fl=pl&fe=sh",
    questions: [
        {
            text: "You’re following a large vehicle. Why should you stay a safe distance behind it?",
            options: ["You'll keep out of the wind better", "You'll allow the driver to see you in their mirrors", "You'll help the large vehicle to stop more easily", "You'll be able to corner more quickly"],
            correctAnswer: 1,
            explanation: "Staying back allows the driver of the large vehicle to see you in their side mirrors."
        },
        {
            text: "You’re driving on a wet road. You have to stop your vehicle in an emergency. What should you do?",
            options: ["Give an arm signal", "Select reverse gear", "Keep both hands on the steering wheel", "Apply the handbrake and footbrake together"],
            correctAnswer: 2,
            explanation: "In an emergency, keep both hands on the steering wheel to maintain control while braking."
        },
        {
            text: "When you see a hazard ahead you should use the mirrors. Why is this?",
            options: ["Because you will need to accelerate out of danger", "To assess how your actions will affect following traffic", "Because you will need to brake sharply to stop", "To check what is happening on the road ahead"],
            correctAnswer: 1,
            explanation: "You need to know what's behind you before you change speed or direction to avoid causing a collision."
        },
        {
            text: "On a long motorway journey boredom can cause you to feel sleepy. You should? (mark TWO answers)",
            options: ["Leave the motorway and find a safe place to stop", "Keep looking around at the surrounding landscape", "Drive faster to complete your journey faster", "Ensure a supply of fresh air into your vehicle", "Stop on the hard shoulder for a rest"],
            correctAnswers: [0, 3],
            correctAnswer: 0,
            explanation: "Fresh air and stopping in a safe place (not the hard shoulder) help combat sleepiness."
        },
        {
            text: "You cannot see clearly behind when reversing. What should you do?",
            options: ["Open your window to look behind", "Open the door and look behind", "Look in the nearside mirror", "Ask someone to guide you"],
            correctAnswer: 3,
            explanation: "If you have a restricted view, ask someone to guide you and make sure they are in a safe position."
        },
        {
            text: "Windscreen pillars can obstruct your view. You should take particular care when",
            options: ["Driving on a motorway", "Driving on dual carriageway", "Approaching a one-way street", "Approaching bends and junctions"],
            correctAnswer: 3,
            explanation: "Pillars can hide other road users, especially at junctions and on bends."
        },
        {
            text: "To answer a call on your mobile phone while travelling you should",
            options: ["Reduce your speed wherever you are", "Stop in a proper and convenient place", "Keep the call time to a minimum", "Slow down and allow others to overtake"],
            correctAnswer: 1,
            explanation: "You must be parked in a safe and legal place before using a hand-held mobile phone."
        },
        {
            text: "Which FOUR are most likely to cause you to lose concentration while you are driving?",
            options: ["Using a mobile phone", "Talking into a microphone", "Tuning your car radio", "Looking at a map", "Checking the mirrors", "Using the demisters"],
            correctAnswers: [0, 1, 2, 3],
            correctAnswer: 0,
            explanation: "Anything that takes your eyes off the road or your mind off driving can cause you to lose concentration."
        },
        {
            text: "You are waiting to turn right at the end of a road. Your view is obstructed by parked vehicles. What should you do?",
            options: ["Stop and then move forward slowly and carefully for a proper view", "Move quickly to where you can see so you only block traffic from one direction", "Wait for pedestrian to let you know when it safe for you emerge", "Turn your vehicle around immediately and find another junction to use"],
            correctAnswer: 0,
            explanation: "Edge forward slowly until you can see past the obstruction."
        },
        {
            text: "In which of these situations should you avoid overtaking?",
            options: ["Just after a bend", "In a one-way street", "On a 30 mph road", "Approaching a dip in the road"],
            correctAnswer: 3,
            explanation: "A dip could hide an oncoming vehicle, making overtaking extremely dangerous."
        },
        {
            text: "Your mobile phone rings while you are travelling. You should?",
            options: ["Stop immediately", "Answer it immediately", "Pull up in a suitable place", "Pull up at the nearest kerb"],
            correctAnswer: 2,
            explanation: "Wait until you find a safe and legal place to stop before using your phone."
        },
        {
            text: "What does the term ‘blind spot’ mean for a driver?",
            options: ["An area covered by your right-hand mirror", "An area not covered by your headlights", "An area covered by your left-hand mirror", "An area not covered by your mirrors"],
            correctAnswer: 3,
            explanation: "Blind spots are areas around your vehicle that you cannot see in your mirrors."
        },
        {
            text: "When following a large vehicle you should keep well back because this",
            options: ["Allows you to corner more quickly", "Helps the large vehicle to stop more easily", "Allows the driver to see you in the mirrors", "Helps you to keep out of the wind"],
            correctAnswer: 2,
            explanation: "Staying back gives you a better view of the road and allows the driver to see you."
        },
        {
            text: "You are driving at dusk. You should switch your lights on (mark two answers)",
            options: ["Even when street lights are not lit", "So others can see you", "Only when other have done so", "Only when street lights are lit"],
            correctAnswers: [0, 1],
            correctAnswer: 0,
            explanation: "Dipped headlights help you see and, more importantly, help others see you at dusk."
        },
        {
            text: "You go to a social event and need to drive for a short time afterwards. What precautions should you take?",
            options: ["Drink plenty of coffee after drinking alcohol", "Drink plenty of milk before drinking alcohol", "Avoid drinking alcohol on an empty stomach", "Avoid drinking alcohol completely"],
            correctAnswer: 3,
            explanation: "The safest option is to not drink any alcohol if you are going to drive."
        },
        {
            text: "During a period of illness your ability to drive may be impaired. You must (mark two answers)",
            options: ["See your doctor each time before you drive", "Only take smaller doses of any medicines", "Be medically fit to drive", "Do not drive after taking certain medicines", "Take all your medicines with you when you drive"],
            correctAnswers: [2, 3],
            correctAnswer: 2,
            explanation: "You must be medically fit and should not drive if your medication causes drowsiness."
        },
        {
            text: "As you approach a hump bridge you should (mark three answers)",
            options: ["Move into the middle of the road to get a better view", "Slow down", "Get over the bridge as quickly as possible", "Consider using your horn", "Find another route", "Beware of pedestrians"],
            correctAnswers: [1, 3, 5],
            correctAnswer: 1,
            explanation: "Approaching blind hazards like hump bridges requires caution and reduced speed."
        },
        {
            text: "Objects hanging from your interior mirror may (mark two answers)",
            options: ["Restrict your view", "Improve your driving", "Distract your attention", "Help your concentration"],
            correctAnswers: [0, 2],
            correctAnswer: 0,
            explanation: "Items hanging from the mirror can be a distraction and block your view."
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
