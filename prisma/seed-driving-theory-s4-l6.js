const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 6",
    description: "Comprehensive test on directional, tourist, and confirmation road signs.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/572946696?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-risk-of-grounding-tri-v2.png]",
            options: [
                "Risk of grounding",
                "No vehicles over 7.5 tonnes",
                "No vehicles this tall",
                "Construction site"
            ],
            correctAnswer: 0,
            explanation: "This sign warns of a risk of grounding, typically for long or low vehicles at a hump-backed bridge or level crossing."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-direction-market-walborough.png]",
            options: [
                "Roundabout",
                "Direction to the nearest town/city",
                "Pedestrian crossing",
                "Zebra crossing"
            ],
            correctAnswer: 1,
            explanation: "This white sign shows the direction and distance to the nearest town or village on a non-primary route."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-direction-turpins-crossroads.png]",
            options: [
                "School area",
                "On approach to junction",
                "Turn right",
                "Zebra crossing"
            ],
            correctAnswer: 1,
            explanation: "A map-type sign showing the layout of a junction ahead, in this case, a crossroads with a staggered junction on the right."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-route-confirmatory-m1.png]",
            options: [
                "Parking spaces at service station near location",
                "Direction of traffic",
                "Roundabout",
                "Route confirmatory sign after junction"
            ],
            correctAnswer: 3,
            explanation: "This blue sign on a motorway confirms the route number and distances to destinations after a junction."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-map-roundabout-park-street.png]",
            options: [
                "Roundabout",
                "Turn right",
                "Shows route to take to reach destination",
                "National speed limit"
            ],
            correctAnswer: 2,
            explanation: "This advanced direction sign shows the layout of a roundabout and the exits to take for specific destinations."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-motorway-lane-destinations.png]",
            options: [
                "The panel with the inclined arrow indicates the destinations which can be reached by leaving the motorway at the next junction.",
                "Stop accident ahead",
                "National speed limit",
                "Speed reduced to 40 miles per hour"
            ],
            correctAnswer: 0,
            explanation: "Overhead signs on motorways use inclined arrows to indicate lanes for exiting at the next junction."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-route-confirmatory-green.png]",
            options: [
                "At a roundabout",
                "School crossing",
                "Zebra crossing",
                "Turn left"
            ],
            correctAnswer: 0,
            explanation: "This route confirmatory sign is typically seen after a junction or roundabout on a primary route, confirming distances to destinations."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-direction-a46-stack.png]",
            options: [
                "Stop sign",
                "At the junction",
                "Roundabout",
                "Motorway limit ends"
            ],
            correctAnswer: 1,
            explanation: "Stack-type direction signs are located at a junction, indicating directions for different routes."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-direction-nottingham.png]",
            options: [
                "Hardshoulder",
                "Emergency refuge area",
                "Turn left",
                "Route confirmatory sign after junction"
            ],
            correctAnswer: 3,
            explanation: "This green sign on a primary route confirms the route and distances to destinations after a junction."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-junction-countdown-markers.png]",
            options: [
                "On approaches to junctions",
                "Roundabout",
                "T-junction",
                "A cross roads"
            ],
            correctAnswer: 0,
            explanation: "Countdown markers (bars on a background) indicate the distance to an exit or junction, commonly seen on approaches to roundabouts or motorway exits."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-direction-swansea-wales.png]",
            options: [
                "Stop sign",
                "On approach to junctions in Wales",
                "Sharp bend to the right",
                "No right turn"
            ],
            correctAnswer: 1,
            explanation: "Bilingual signs with English and Welsh place names are found on approaches to junctions in Wales."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-ring-road-yellow-r.png]",
            options: [
                "Stop",
                "Turn left",
                "Primary route forming part of a ring road",
                "Turn right"
            ],
            correctAnswer: 2,
            explanation: "A green rectangular sign with a yellow 'R' symbol indicates a primary route that forms part of a ring road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-direction-port-lever-ring-road.png]",
            options: [
                "Ring Road",
                "Residential area",
                "Parking",
                "Road works"
            ],
            correctAnswer: 0,
            explanation: "This sign indicates the direction to a ring road, often helping to bypass a town center."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-direction-heathrow.png]",
            options: [
                "School crossing",
                "On approaches to junction",
                "Stop",
                "Near an airport"
            ],
            correctAnswer: 3,
            explanation: "Direction signs with an aircraft symbol indicate the route to an airport."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-direction-lampton-height.png]",
            options: [
                "On approaches to junctions",
                "At airport",
                "Turn left",
                "Two way crossing"
            ],
            correctAnswer: 0,
            explanation: "This advanced direction sign with a warning triangle (height restriction) is found on the approach to a junction."
        },
        {
            text: "Where would you see this sign? [Image: /images/driving-theory/sign-direction-hangmans-crossroads.png]",
            options: [
                "No parking",
                "Zebra Crossing",
                "At the junction",
                "No cars"
            ],
            correctAnswer: 2,
            explanation: "This sign is located at a junction to guide traffic to the correct road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-wc-wheelchair.png]",
            options: [
                "Level crossing",
                "Airport",
                "Roundabout",
                "Direction to toilets with access for wheelchair users"
            ],
            correctAnswer: 3,
            explanation: "A sign with a WC and wheelchair symbol directs drivers to toilets with wheelchair access."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-picnic-site.png]",
            options: [
                "City centre",
                "Stop",
                "Picnic site",
                "Wildlife"
            ],
            correctAnswer: 2,
            explanation: "A brown tourist sign with a picnic table symbol indicates a picnic site."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tourist-wrest-park.png]",
            options: [
                "Picnic area",
                "Ancient monument in the care of English heritage",
                "Local housing estate",
                "Lanes closed ahead"
            ],
            correctAnswer: 1,
            explanation: "A brown tourist sign with this specific logo indicates an ancient monument cared for by English Heritage."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-parking-saturday.png]",
            options: [
                "No waiting",
                "Direction to a car park",
                "No stopping",
                "No vehicles"
            ],
            correctAnswer: 1,
            explanation: "A sign with a large 'P' typically indicates the direction to a car park, sometimes with time restrictions (e.g., Saturday only)."
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
