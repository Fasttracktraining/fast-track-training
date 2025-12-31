const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 2",
    description: "Continue testing your knowledge of UK road signs, from prohibitions to mandatory instructions.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/582634767?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-give-way-oncoming-text.png]",
            options: [
                "Must slow down at junctions",
                "Give priority to vehicles from opposite direction",
                "You have right of way",
                "Road works"
            ],
            correctAnswer: 1,
            explanation: "This sign indicates that you must give way to vehicles coming from the opposite direction. The red arrow in your direction means you do not have priority."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-right-turn-v2.png]",
            options: [
                "Sharp right",
                "Slow-moving",
                "No right turn",
                "No junctions"
            ],
            correctAnswer: 2,
            explanation: "A red circle with a right-pointing arrow crossed through means no right turn is allowed at this location."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-left-turn-v2.png]",
            options: [
                "No left turn",
                "road at left turn",
                "Slow-moving",
                "One way road"
            ],
            correctAnswer: 0,
            explanation: "A red circle with a left-pointing arrow crossed through means no left turn is allowed."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-u-turns-v2.png]",
            options: [
                "Contraflow",
                "One way road",
                "No U-turns",
                "Lane restrictions"
            ],
            correctAnswer: 2,
            explanation: "This sign prohibits drivers from making a U-turn."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-goods-7-5t-loading.png]",
            options: [
                "No goods vehicles over 7.5 tonnes",
                "Large vehicles only",
                "No stopping",
                "Road works"
            ],
            correctAnswer: 0,
            explanation: "This sign prohibits goods vehicles with a maximum gross weight exceeding 7.5 tonnes, except for loading or unloading."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-weak-bridge-18t.png]",
            options: [
                "Loose chippings",
                "Heavy vehicles only",
                "No vehicles over maximum gross weight shown",
                "Risk of grounding"
            ],
            correctAnswer: 2,
            explanation: "This sign indicates a maximum weight restriction, often for a weak bridge or structure. Vehicles exceeding the weight shown (18 tonnes in this case) are prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-permit-holders-only.png]",
            options: [
                "Risk of ice",
                "Private car park",
                "Hump bridge",
                "Permitted holders only"
            ],
            correctAnswer: 3,
            explanation: "This sign means that only vehicles with a valid permit are allowed to park in the designated area."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-red-route-buses.png]",
            options: [
                "Wild animals",
                "Road to industrial zone",
                "No stopping during period indicated except for buses",
                "Dangerous area"
            ],
            correctAnswer: 2,
            explanation: "On a red route, stopping is strictly prohibited during the times shown, with the exception of buses."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-urban-clearway-times.png]",
            options: [
                "No stopping during times shown except for as long as necessary to set down or pick up passengers",
                "No overtaking",
                "No towed caravans",
                "No vehicles"
            ],
            correctAnswer: 0,
            explanation: "An Urban Clearway sign prohibits stopping during peak hours to keep traffic moving, though picking up or setting down passengers is usually permitted."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-waiting-v2.png]",
            options: [
                "No entry",
                "One way road",
                "No waiting",
                "No stopping"
            ],
            correctAnswer: 2,
            explanation: "A red circle with a single blue diagonal stripe means 'No Waiting'. You can stop briefly to pick up or drop off passengers, but you cannot park."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-clearway-v2.png]",
            options: [
                "No parking",
                "No stopping",
                "No exits",
                "No speed limit"
            ],
            correctAnswer: 1,
            explanation: "A red cross on a blue background is a Clearway sign, meaning no stopping is allowed at any time for any reason."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-ahead-only-v2.png]",
            options: [
                "One way road",
                "No turning",
                "Ahead only",
                "No reversing"
            ],
            correctAnswer: 2,
            explanation: "A blue circle with a white arrow pointing up means you must only proceed straight ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-turn-left-ahead-v2.png]",
            options: [
                "No cycling",
                "No motor vehicles",
                "One way road ahead",
                "Turn left ahead"
            ],
            correctAnswer: 3,
            explanation: "A blue circle with a white arrow turning to the left indicates that you must turn left at the junction ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-turn-left-v2.png]",
            options: [
                "Turn left",
                "Traffic from left ahead",
                "Ahead only",
                "No waiting"
            ],
            correctAnswer: 0,
            explanation: "A blue circle with a horizontal white arrow pointing left means you must turn left immediately."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-keep-left-v2.png]",
            options: [
                "Segregated pedal cycle",
                "Minimum speed",
                "Keep left",
                "Parking only on the left side"
            ],
            correctAnswer: 2,
            explanation: "A blue circle with a white arrow pointing down and to the left instructs you to keep to the left of the obstacle or island."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-pass-either-side-v2.png]",
            options: [
                "No cycling",
                "Vehicles may pass either side to reach same destination",
                "Traffic approaching on both sides",
                "No overtaking"
            ],
            correctAnswer: 1,
            explanation: "This sign, often seen at central refuges, allows vehicles to pass on either side to reach the same destination."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-mini-roundabout-v2.png]",
            options: [
                "No stopping",
                "No left turn",
                "Mini-roundabout",
                "No vehicles"
            ],
            correctAnswer: 2,
            explanation: "This sign indicates a mini-roundabout ahead. You should give way to traffic already on the roundabout from your right."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-pedal-cycles-only-v2.png]",
            options: [
                "Turn left ahead",
                "Route to be used by pedal cycles only",
                "No cycles allowed",
                "Turn left"
            ],
            correctAnswer: 1,
            explanation: "A blue circle with a bicycle symbol marks a mandatory route for pedal cycles only."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-segregated-cycle-pedestrian-v2.png]",
            options: [
                "Minimum speed",
                "With-flow pedal cycle lane",
                "Dual carriageway ends",
                "Segregated pedal cycle and pedestrian route"
            ],
            correctAnswer: 3,
            explanation: "This sign marks a route where pedestrians and cyclists are segregated, usually with a dividing line or different pavement levels."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-minimum-speed-30-v2.png]",
            options: [
                "Maximum speed",
                "Minimum speed",
                "Reduce speed",
                "Increase speed"
            ],
            correctAnswer: 1,
            explanation: "A blue circle with a number (like 30) indicates a minimum speed limit. You should not drive slower than this speed unless it's unsafe to do so."
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

