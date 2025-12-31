const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 3",
    description: "Final test in Section 4 covering warnings, regulatory signs, and tramway information.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/572946427?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-end-of-minimum-speed-v2.png]",
            options: [
                "Road narrows on both sides",
                "No Maximum speed",
                "End of minimum speed",
                "Dual carriageway ends"
            ],
            correctAnswer: 2,
            explanation: "A blue circle with a number and a red diagonal line through it marks the end of a minimum speed limit zone."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-buses-and-cycles-only-v2.png]",
            options: [
                "Crossroads",
                "Buses and cycles only",
                "No motor vehicles",
                "No pedestrians"
            ],
            correctAnswer: 1,
            explanation: "This blue circular sign with a bus and cycle symbol indicates a mandatory route for buses and pedal cycles only."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tramway-pedestrian-crossing-v2.png]",
            options: [
                "Staggered junction",
                "Roundabout",
                "Level crossing",
                "Pedestrian crossing point over tramway"
            ],
            correctAnswer: 3,
            explanation: "This informative sign warns pedestrians to look both ways for trams at a designated crossing point."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-one-way-traffic-v2.png]",
            options: [
                "No exits",
                "One way traffic",
                "Oncoming vehicles",
                "Direction to car park"
            ],
            correctAnswer: 1,
            explanation: "A blue rectangular sign with a white arrow pointing up indicates a one-way street where traffic flows in the direction of the arrow."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-with-flow-bus-cycle-lane-v2.png]",
            options: [
                "Bus and Cycles only",
                "No buses or cyclists allowed",
                "With-flow bus and cycle lane",
                "No cars or HGVs"
            ],
            correctAnswer: 2,
            explanation: "This rectangular sign indicates a with-flow lane for buses and pedal cycles."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-contra-flow-bus-lane-v2.png]",
            options: [
                "Uneven road",
                "Reversing buses",
                "Coach parking bay",
                "Contra-flow bus lane"
            ],
            correctAnswer: 3,
            explanation: "This sign indicates a contra-flow bus lane, meaning buses travel in the opposite direction to the main flow of traffic."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-with-flow-pedal-cycle-lane-v2.png]",
            options: [
                "Only cyclists allowed",
                "No cyclists",
                "With-flow pedal cycle lane",
                "Two-way traffic"
            ],
            correctAnswer: 2,
            explanation: "A blue rectangular sign with a cycle symbol indicates a with-flow pedal cycle lane."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-distance-to-stop-line-v2.png]",
            options: [
                "Swing bridge ahead",
                "Distance to stop line ahead",
                "Hazard ahead",
                "Junction ahead"
            ],
            correctAnswer: 1,
            explanation: "An inverted triangle 'GIVE WAY' sign with a 'STOP' plate and distance indicates the distance to a STOP line ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-steep-hill-down-10-tri.png]",
            options: [
                "Steep hill downwards",
                "Dual carriageway ends",
                "Slippery road",
                "Traffic signals not in use"
            ],
            correctAnswer: 0,
            explanation: "The percentage on a red triangle sign indicates the gradient of a steep hill. This sign warns of a 10% steep hill downwards."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-narrows-on-right-v2.png]",
            options: [
                "Slight turn for oncoming traffic",
                "Diverted route",
                "Tram tracks",
                "Road narrows on right"
            ],
            correctAnswer: 3,
            explanation: "A red triangle with a line narrowing on the right side warns that the road ahead narrows on the right-hand side."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-narrows-both-v2.png]",
            options: [
                "Road narrows on both sides",
                "Narrow tunnel",
                "Road near tram tracks",
                "Obstruction ahead"
            ],
            correctAnswer: 0,
            explanation: "A red triangle with lines narrowing on both sides warns that the road narrows from both ends ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-distance-to-give-way-v2.png]",
            options: [
                "No speed limit",
                "Steep hill downwards",
                "Oncoming traffic",
                "Distance to ‘give way’ line"
            ],
            correctAnswer: 3,
            explanation: "A 'GIVE WAY' sign with a distance plate tells you how far ahead the give way line is."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-with-barrier-tri.png]",
            options: [
                "Fence",
                "Level crossing",
                "Crossroads",
                "Main road exits"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with a gate symbol warns of a level crossing with a gate or barrier."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-junction-on-bend-v2.png]",
            options: [
                "Junction on bend ahead",
                "Tunnel ahead",
                "Trams crossing ahead",
                "Road closed ahead"
            ],
            correctAnswer: 0,
            explanation: "A red triangle showing a curved main road with a side road branching off indicates a junction on a bend ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-without-barrier-tri.png]",
            options: [
                "T-junction",
                "Level crossing without barrier",
                "Junction ahead",
                "Left turn ahead"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with a steam locomotive symbol warns of a level crossing without a gate or barrier."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-overhead-electric-cable-tri.png]",
            options: [
                "Zebra crossing",
                "Overhead electric cable",
                "Staggered junction",
                "Bird feeder"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with a lightning bolt symbol warns of overhead electric cables ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-traffic-merging-v2.png]",
            options: [
                "Cattle",
                "Dual carriageway",
                "No exiting",
                "Traffic merging from left side"
            ],
            correctAnswer: 3,
            explanation: "A red triangle showing a main arrow with a side arrow merging into it from the left warns that traffic will be joining from the left-hand slip road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-wild-horses-tri.png]",
            options: [
                "Double bend",
                "Sharp turn ahead",
                "Wild horses or ponies",
                "Cycle route ahead"
            ],
            correctAnswer: 2,
            explanation: "A red triangle with a horse symbol warns of the likely presence of wild horses or ponies on the road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-bend-to-right-v3.png]",
            options: [
                "Risk of ice",
                "Bend to right",
                "Lamppost",
                "Shelter"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with a black arrow pointing right and then straight warns of a bend to the right ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hump-bridge-tri.png]",
            options: [
                "Soft verges",
                "Hump bridge",
                "Roundabout",
                "U-turn"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with an arched bridge symbol warns of a hump bridge ahead."
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
