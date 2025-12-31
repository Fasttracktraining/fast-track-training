const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 11: Rules of the road",
    description: "Learn the essential rules for safe and legal driving on UK roads.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231411?fl=pl&fe=sh",
    questions: [
        {
            text: "There is a tractor ahead of you. You wish to overtake but you are not sure if it is safe to do so. You should",
            options: ["Follow another overtaking vehicle", "Sound your horn to the slow vehicle to pull over", "Speed through but flash your lights to oncoming traffic", "Not overtake if you are in doubt"],
            correctAnswer: 3,
            explanation: "If you are in any doubt about the safety of an overtaking maneuver, do not attempt it."
        },
        {
            text: "Which THREE of the following are most likely to take an unusual course at roundabouts?",
            options: ["Horse riders", "Milk floats", "Delivery vans", "Long vehicles", "Estate cars", "Cyclists"],
            correctAnswers: [0, 3, 5],
            correctAnswer: 0,
            explanation: "Horse riders, cyclists, and long vehicles often take a different or unusual line at roundabouts for safety and maneuverability."
        },
        {
            text: "On a clearway you must not stop",
            options: ["At any time", "When it is busy", "In the rush hour", "During daylight hours"],
            correctAnswer: 0,
            explanation: "A clearway sign means no stopping at any time on the main carriageway, even to pick up or set down passengers."
        },
        {
            text: "You can park on the right-hand side of a road at night",
            options: ["In a one-way street", "With your sidelights on", "More than 10 metres (32 feet ) from a junction", "Under a lamp-post"],
            correctAnswer: 0,
            explanation: "Normally you must park on the left at night. However, in a one-way street, you may park on either side."
        },
        {
            text: "You are approaching a busy junction. There are several lanes with road markings. At the last moment you realise that you are in the wrong lane. You should",
            options: ["Continue it that lane", "Force your way across", "Stop until the area has cleared", "Use clear arm signals to cut across"],
            correctAnswer: 0,
            explanation: "If you realise too late that you're in the wrong lane, stay in that lane and find another way back to your route later. Never cut across traffic."
        },
        {
            text: "Where may you overtake on a one-way street?",
            options: ["Only on the left-hand side", "Overtaking is not allowed", "Only on the right-hand side", "Either on the right or the left"],
            correctAnswer: 3,
            explanation: "In a one-way street, you can overtake on either the right or the left side safely."
        },
        {
            text: "When going straight ahead at a roundabout you should",
            options: ["Indicate left before leaving the roundabout", "Not indicate at any time", "Indicate right when approaching the roundabout", "Indicate left when approaching the roundabout"],
            correctAnswer: 0,
            explanation: "When going straight, do not indicate on approach, but you must indicate left after you pass the exit before the one you want."
        },
        {
            text: "You are intending to turn right at a crossroads. An oncoming driver is also turning right. It will normally be safer to",
            options: ["Keep the other vehicle to your right and turn behind it (offside to offside)", "Keep the other vehicle to your left and turn in of it (nearside to nearside)", "Carry on and turn at the next junction instead", "Hold back and wait for the other driver to turn first"],
            correctAnswer: 0,
            explanation: "Turning 'offside to offside' (behind each other) is generally safer as it gives both drivers a clearer view of oncoming traffic."
        },
        {
            text: "When may you reverse from a side road into a main road?",
            options: ["Only if both road are clear of traffic", "Not at any time", "Not right away", "Only if the main road is clear of traffic"],
            correctAnswer: 1,
            explanation: "You must never reverse from a side road into a main road. Always reverse from a main road into a side road if necessary."
        },
        {
            text: "You are travelling on a well-lit road at night in a built-up area. By using dipped headlights you will be able to",
            options: ["See further along the road", "Go at a much faster speed", "Switch to main beam quickly", "Be easily seen by others"],
            correctAnswer: 3,
            explanation: "Dipped headlights help you be seen by other road users, especially in built-up areas with street lighting."
        },
        {
            text: "You are on a busy main road and find that you are travelling in the wrong direction. What should you do?",
            options: ["Turn into a side road on the right and reverse into the main road", "Make a U-turn in the main road", "Make a ‘three-point’ turn in the main road", "Turn round in a side road"],
            correctAnswer: 3,
            explanation: "Never attempt U-turns or multi-point turns on busy main roads. Find a safe side road or roundabout to turn around safely."
        },
        {
            text: "You are reversing your vehicle into a side road. When would the greatest hazard to passing traffic occur?",
            options: ["After you’ve completed the maneuver", "Just before you actually begin the manoeuvre", "After you’ve entered the side road", "When the front of your vehicle swings out"],
            correctAnswer: 3,
            explanation: "As you turn the steering wheel to reverse, the front of your vehicle will swing out into the road, which can be a major hazard for passing traffic."
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
