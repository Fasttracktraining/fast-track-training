const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 8",
    description: "Expert level test on road works, temporary restrictions, and complex junctions.",
    courseSlug: "driving-theory",
    isPremium: true,
    videoUrl: "https://vimeo.com/572946853?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-merge-priority-left.png]",
            options: [
                "Additional traffic joining from left ahead. Traffic on main carriageway has priority over joining traffic from right hand lane of slip road",
                "Traffic jam ahead",
                "Speed limit reduced",
                "Move left"
            ],
            correctAnswer: 0,
            explanation: "This sign indicates that traffic is joining from the left and that you, on the main carriageway, have priority."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-merge-priority-right-slip.png]",
            options: [
                "Turn right.",
                "Traffic in right hand lane of slip road joining the main carriageway has priority over.",
                "Left turn ahead.",
                "Minimum speed."
            ],
            correctAnswer: 1,
            explanation: "This sign tells drivers in the right-hand lane of a slip road that they have priority over traffic joining from the left lane of the same slip road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-motorway-countdown.png]",
            options: [
                "Level crossing",
                "Hard shoulder",
                "Countdown markers at exit from motorway",
                "Roundabout"
            ],
            correctAnswer: 2,
            explanation: "These blue countdown markers indicate the distance to a motorway exit (300, 200, and 100 yards)."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-motorway-services.png]",
            options: [
                "Motorway service area sign showing the operators name.",
                "End of motorway.",
                "No turning right.",
                "Buses and cycles only."
            ],
            correctAnswer: 0,
            explanation: "This sign shows the name of the operator and the facilities available at a motorway service area."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-priority-over-oncoming-blue.png]",
            options: [
                "Traffic coming from both directions.",
                "Traffic has priority over oncoming vehicles.",
                "Oncoming traffic must pass slowly.",
                "Danger of cars passing closely."
            ],
            correctAnswer: 1,
            explanation: "The blue square sign with a white arrow indicates that you have priority over vehicles coming from the opposite direction."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hospital-ae-not-24hrs.png]",
            options: [
                "Bus lane.",
                "Permit holders.",
                "No parking.",
                "Hospital ahead with Accident and Emergency facilities."
            ],
            correctAnswer: 3,
            explanation: "A blue sign with a white 'H' and 'A&E' indicates a hospital with Accident and Emergency facilities."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-info-brown.png]",
            options: [
                "Wildfire.",
                "Ahead only.",
                "Tourist information point.",
                "Keep left."
            ],
            correctAnswer: 2,
            explanation: "The 'i' symbol on a brown or blue background indicates a tourist information point."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-through-road-t.png]",
            options: [
                "No through road for vehicles.",
                "Junction ahead.",
                "Busy road ahead.",
                "One way road."
            ],
            correctAnswer: 0,
            explanation: "A blue rectangular sign with a white 'T' (often with a red bar on top) indicates a no through road or cul-de-sac."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-cycles-red.png]",
            options: [
                "No cycles.",
                "No stopping.",
                "Recommended route for pedal cycles.",
                "No parking."
            ],
            correctAnswer: 0,
            explanation: "A red circle with a black bicycle symbol means cycling is prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-home-zone-entry.png]",
            options: [
                "Residential area.",
                "No pets.",
                "Stop.",
                "Home zone entry."
            ],
            correctAnswer: 3,
            explanation: "This sign marks the entry to a 'Home Zone', a residential area designed to be shared by pedestrians, cyclists, and vehicles, with very low speeds."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-speed-camera.png]",
            options: [
                "No left turn.",
                "No stopping.",
                "Speed camera.",
                "Undercover traffic patrol car."
            ],
            correctAnswer: 2,
            explanation: "A sign with a black camera symbol on a white or grey background warns of speed cameras ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-bus-lane-ahead-arrow.png]",
            options: [
                "Two way road.",
                "Bus lane on road junction ahead.",
                "Contraflow system.",
                "With flow traffic."
            ],
            correctAnswer: 1,
            explanation: "An arrow on a bus lane sign indicates the direction of the bus lane at the junction ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-works-man-small.png]",
            options: [
                "Roundabout.",
                "Road works.",
                "Level crossing.",
                "Gardening."
            ],
            correctAnswer: 1,
            explanation: "The red triangle with a 'man digging' silhouette is the standard warning sign for road works."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-loose-chippings-red.png]",
            options: [
                "Loose chipping.",
                "Water splashed by cars.",
                "Small debris falling for car tyres.",
                "Small rocks stuck in car tyres."
            ],
            correctAnswer: 0,
            explanation: "A warning sign showing a car and loose stones warns of loose chippings on the road surface."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-temporary-road-surface.png]",
            options: [
                "Construction ahead.",
                "Temporary hazard at road works.",
                "New road.",
                "Risk of tar sticking to car tyres."
            ],
            correctAnswer: 1,
            explanation: "A red sign with text like 'Temporary Road Surface' or similar warns of a temporary hazard at road works."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-lane-closure-yellow-wickets.png]",
            options: [
                "Road splits into 4 individual sections.",
                "No oncoming traffic.",
                "Temporary lane closure.",
                "Dead end roads ahead."
            ],
            correctAnswer: 2,
            explanation: "Yellow signs with arrow diagrams ('wickets') indicate temporary lane closures and lane changes at road works."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-works-vehicle-keep-left.png]",
            options: [
                "No overtaking.",
                "Move into lane on left side because of slow-moving or stationary works vehicle blocking a traffic lane.",
                "Level crossing.",
                "Keep right."
            ],
            correctAnswer: 1,
            explanation: "A large white arrow on a blue background on the back of a vehicle directs traffic to pass on that side (left in this case) to avoid a blockage."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-speed-limit-50-ahead.png]",
            options: [
                "Cafe.",
                "Minimum speed limit.",
                "Speed limit for the next ¾ mile.",
                "Traffic jam."
            ],
            correctAnswer: 2,
            explanation: "A yellow sign with a speed limit roundel and a distance (e.g., '3/4 mile ahead') gives advance warning of a speed limit change."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-works-1-mile-delays.png]",
            options: [
                "Turn right.",
                "Gardening.",
                "Fishing.",
                "Road works 1 mile ahead."
            ],
            correctAnswer: 3,
            explanation: "This yellow sign provides advance warning of road works 1 mile ahead and potential delays."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-works-end-sorry.png]",
            options: [
                "End of road works and any temporary restrictions.",
                "No right turn.",
                "No vehicle or combination of vehicles over length shown.",
                "No vehicles over width shown."
            ],
            correctAnswer: 0,
            explanation: "A sign stating 'End' or 'End of road works', often with a 'Sorry for any delay' message, marks the end of the road works zone."
        },
        {
            text: "What do these signs mean? [Image: /images/driving-theory/sign-works-vehicle-rear.png]",
            options: [
                "End of motorway.",
                "Sign used on the back for slow moving or stationary vehicle warning of a lane closure.",
                "Roundabout.",
                "No turning left."
            ],
            correctAnswer: 1,
            explanation: "Large yellow and black chevron boards or arrow signs are used on the rear of works vehicles to warn of lane closures or slow-moving operations."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-stopping-clearway-cross.png]",
            options: [
                "No stopping.",
                "No waiting.",
                "Lane restrictions at road works ahead.",
                "No bicycles."
            ],
            correctAnswer: 0,
            explanation: "A red cross on a blue background indicates a 'Clearway' where stopping is prohibited at any time."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-contraflow-max-speed-30.png]",
            options: [
                "Contraflow road works.",
                "Slip road merging with motorway.",
                "Increased speed limit.",
                "No stopping."
            ],
            correctAnswer: 0,
            explanation: "A yellow sign showing lanes crossing over a central reservation indicates a contraflow system at road works."
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
