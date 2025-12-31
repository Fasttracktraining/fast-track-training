const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 7",
    description: "Advanced test on specialized road signs, zones, and motorway information.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/572946777?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-zoo.png]",
            options: [
                "Wildlife",
                "Public area",
                "Tourist attraction",
                "Church"
            ],
            correctAnswer: 2,
            explanation: "Brown signs with white symbols indicate tourist attractions. This specific symbol indicates a zoo."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-camping-caravan.png]",
            options: [
                "Direction to camping and caravan site",
                "Turn right",
                "Roundabout",
                "Level crossing"
            ],
            correctAnswer: 0,
            explanation: "A brown sign with a tent and caravan symbol indicates the direction to a camping and caravan site."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-advisory-route-lorries.png]",
            options: [
                "Advisory route for lorries",
                "Tunnel ahead",
                "Heavy vehicles only",
                "Steep hill downwards"
            ],
            correctAnswer: 0,
            explanation: "A white lorry silhouette on a black background indicates an advisory route for lorries, often to avoid hazards or restrictions elsewhere."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-cycle-route-network.png]",
            options: [
                "Traffic signals",
                "Route for pedal cycle forming part of a network",
                "Traffic signals not in use",
                "Entry point for cars"
            ],
            correctAnswer: 1,
            explanation: "Signs with a white bicycle symbol and a number (often on a red patch) indicate a cycle route that is part of a national or local network."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-cycle-route-recommendation.png]",
            options: [
                "No right turn",
                "Level crossing",
                "No vehicles",
                "Recommended route for pedal cycle to place shown"
            ],
            correctAnswer: 3,
            explanation: "A blue sign with a cycle symbol, place name, and distance indicates a recommended route for cyclists."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-public-library-pedestrian.png]",
            options: [
                "Direction for car park",
                "Zebra crossing",
                "Route for pedestrians",
                "No vehicle access"
            ],
            correctAnswer: 2,
            explanation: "A blue sign with a walking figure symbol indicates a route for pedestrians to the named destination."
        },
        {
            text: "What do these signs mean? [Image: /images/driving-theory/sign-emergency-diversion-symbols.png]",
            options: [
                "Symbol showing emergency diversion route for motorway and other main road traffic",
                "Opening or swing bridge ahead",
                "Two-way traffic straight ahead",
                "Uneven roads"
            ],
            correctAnswer: 0,
            explanation: "Yellow geometric shapes (square, triangle, diamond, circle) on black signs mark emergency diversion routes for motorway traffic."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-diversion-northtown.png]",
            options: [
                "T-junction",
                "Bend to right",
                "Diversion route",
                "Roundabout"
            ],
            correctAnswer: 2,
            explanation: "A yellow sign with black text 'Diversion' and an arrow indicates the route to follow to bypass a road closure."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-controlled-zone-entry.png]",
            options: [
                "Entrance to controlled parking zone",
                "No parking",
                "No Stopping",
                "T-Junction"
            ],
            correctAnswer: 0,
            explanation: "A rectangular sign stating 'Controlled ZONE' with a 'No Waiting' roundel indicates the entrance to a zone where parking is restricted."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-zone-ends.png]",
            options: [
                "National speed limit",
                "End of controlled parking zone",
                "No stopping",
                "Entry allowed"
            ],
            correctAnswer: 1,
            explanation: "A grey sign stating 'Zone ENDS' indicates that the restrictions of the controlled parking zone no longer apply."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-congestion-charging-zone.png]",
            options: [
                "Meet the Queen this way",
                "No tall hats in London",
                "Entrance to congestion charging zone",
                "Area is controlled by Fish and Chips company"
            ],
            correctAnswer: 2,
            explanation: "A sign with a red circle containing a white 'C' marks the entrance to a Congestion Charging Zone."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-low-bridge-ahead.png]",
            options: [
                "No stopping",
                "Not vehicles over 7.5 tonnes",
                "2 miles long bridge ahead",
                "Advanced warning of restrictions or prohibition ahead"
            ],
            correctAnswer: 3,
            explanation: "This sign gives advanced warning of a restriction ahead, in this case, a low bridge with a height restriction of 14' 6\"."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-parking-motorcycles.png]",
            options: [
                "No parking",
                "Parking place for motorcycles",
                "Cars only",
                "Parking except cars"
            ],
            correctAnswer: 1,
            explanation: "A sign with a 'P' and a motorcycle symbol indicates a parking place reserved for motorcycles."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-bus-lane-taxi-cycle.png]",
            options: [
                "With-flow bus lane ahead which pedal cycles and taxis may also use",
                "Junction on bend ahead",
                "Crossroads",
                "Distance to ‘Give Way’ line ahead"
            ],
            correctAnswer: 0,
            explanation: "This blue sign indicates a bus lane that can also be used by taxis and pedal cycles during the times shown (if any)."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hov-lane-2plus.png]",
            options: [
                "Road narrows on both sides",
                "Family car parking only",
                "Lane designated for use by high occupancy vehicles",
                "Larger cars not allowed during specified times"
            ],
            correctAnswer: 2,
            explanation: "A '2+ lane' sign designates a lane for High Occupancy Vehicles (vehicles with 2 or more occupants)."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hov-lane-info.png]",
            options: [
                "Road narrows on right",
                "Vehicles permitted to use the HOV lane ahead",
                "With-flow pedal cycle lane",
                "Distance to ‘STOP’ line ahead"
            ],
            correctAnswer: 1,
            explanation: "This sign provides information about who is permitted to use the High Occupancy Vehicle (HOV) lane ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-end-of-motorway.png]",
            options: [
                "End of motorway",
                "No overhead bridges",
                "With-flow bus and cycle lane",
                "No exits"
            ],
            correctAnswer: 0,
            explanation: "A blue sign with a motorway symbol and a red diagonal line indicates the end of the motorway regulations."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-start-of-motorway-regulations.png]",
            options: [
                "Ahead only sign",
                "Pedestrian crossing point over tramway",
                "Start of motorway and point from which motorway regulations apply",
                "Stop"
            ],
            correctAnswer: 2,
            explanation: "A blue rectangular sign with the motorway symbol (and often the motorway number) indicates the start of motorway regulations."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-lanes-except-buses.png]",
            options: [
                "Buses and cycles only",
                "End of minimum speed",
                "Trams only",
                "Appropriate traffic lanes at junction ahead"
            ],
            correctAnswer: 3,
            explanation: "This sign shows the appropriate traffic lanes for a junction ahead, with a special lane for buses."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-motorway-merge-priority.png]",
            options: [
                "Traffic on the main carriageway coming from the right has priority over joining traffic",
                "You have priority over traffic coming from the right",
                "Slight left turn",
                "No right turn"
            ],
            correctAnswer: 0,
            explanation: "On a motorway slip road, this sign indicates that traffic already on the main carriageway has priority."
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
