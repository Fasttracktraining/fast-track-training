const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 5",
    description: "Practice addressing hazards, road conditions, and warning signs.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/572946615?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-pedestrians-in-road-tri-v2.png]",
            options: [
                "Wild animals",
                "Pedestrians in road ahead",
                "Trams crossing ahead",
                "Zebra crossing"
            ],
            correctAnswer: 1,
            explanation: "This sign warns you that pedestrians may be walking in the road ahead, often where there is no pavement."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-explosives-v2.png]",
            options: [
                "Dangerous area",
                "Overhead electric cable",
                "No towed caravans",
                "No vehicles carrying explosives"
            ],
            correctAnswer: 3,
            explanation: "A white circle with a red border and a black car with an explosion symbol indicates no vehicles carrying explosives are allowed."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-stopping-clearway-v2.png]",
            options: [
                "Narrow road",
                "Height restriction",
                "No stopping",
                "No U-turns"
            ],
            correctAnswer: 2,
            explanation: "A blue circle with a red diagonal cross is a 'Clearway' sign, meaning no stopping is allowed at any time."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-chevron-left-v2.png]",
            options: [
                "Turn left ahead",
                "Ahead only",
                "Sharp deviation of route to left",
                "Diverted route"
            ],
            correctAnswer: 2,
            explanation: "Chevron signs (white arrows on a black background) indicate a sharp bend or deviation of the route, in this case, to the left."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-lights-tri-v2.png]",
            options: [
                "Light signals ahead at level crossing",
                "Mini-roundabout",
                "Temporary traffic lights",
                "End of minimum speed"
            ],
            correctAnswer: 0,
            explanation: "A warning triangle with a traffic light symbol is widely used to warn of light signals ahead, including those at a level crossing."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-miniature-warning-lights-rect.png]",
            options: [
                "Buses and cycles only",
                "Trams only",
                "Miniature warnings lights at level crossing",
                "Contra-flow"
            ],
            correctAnswer: 2,
            explanation: "This sign indicates the presence of miniature warning lights at a user-operated level crossing."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-cattle-tri-v2.png]",
            options: [
                "Cattle",
                "STOP",
                "Dual carriageway ends",
                "meat factory"
            ],
            correctAnswer: 0,
            explanation: "A warning triangle with a cow silhouette warns of cattle crossing or near the road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-wild-animals-deer-tri.png]",
            options: [
                "Tourist attraction",
                "Wild animals",
                "Nature reserve",
                "Diversion route"
            ],
            correctAnswer: 1,
            explanation: "A warning triangle with a deer silhouette warns of wild animals likely to be in the road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-wild-horses-tri-v2.png]",
            options: [
                "Road works",
                "Loose chippings",
                "Temporary lane closure",
                "Wild horses or ponies"
            ],
            correctAnswer: 3,
            explanation: "A warning triangle with a horse silhouette warns of wild horses or ponies."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-horse-riders-tri.png]",
            options: [
                "Horse riders",
                "Dip in the road",
                "Danger ahead",
                "Left lane closed"
            ],
            correctAnswer: 0,
            explanation: "A warning triangle with a horse and rider silhouette warns of horse riders ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-cycle-route-tri.png]",
            options: [
                "Cycle route ahead",
                "Contraflow road works",
                "No pedal bike",
                "Bike lock stand"
            ],
            correctAnswer: 0,
            explanation: "A warning triangle with a bicycle silhouette indicates a cycle route ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-risk-of-ice-tri.png]",
            options: [
                "Traffic queues likely ahead",
                "Cattle",
                "Risk of ice",
                "Hidden dip"
            ],
            correctAnswer: 2,
            explanation: "A warning triangle with a snowflake symbol warns of the risk of ice or snow."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-traffic-queues-tri.png]",
            options: [
                "School crossing patrol",
                "Traffic queues likely ahead",
                "Pedestrians in road ahead",
                "Zebra crossing"
            ],
            correctAnswer: 1,
            explanation: "A warning triangle showing a queue of cars warns that traffic queues are likely ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-road-humps-tri.png]",
            options: [
                "Small hill",
                "Bridge ahead",
                "Road humps",
                "Wild animals"
            ],
            correctAnswer: 2,
            explanation: "A warning triangle with a hump symbol warns of road humps ahead for traffic calming."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hidden-dip-tri.png]",
            options: [
                "Hidden dip",
                "Roundabout",
                "Speed limit",
                "Oncoming vehicles"
            ],
            correctAnswer: 0,
            explanation: "A warning triangle with an exclamation mark can warn of a hidden dip when accompanied by a plate saying 'Hidden dip'."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-soft-verge-tri-v2.png]",
            options: [
                "Roundabout",
                "Soft verge on either side",
                "Road closed",
                "Speed bumps"
            ],
            correctAnswer: 1,
            explanation: "A warning triangle showing a car tipping on an edge with a 'Soft verges' plate warns of soft verges."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-side-winds-tri.png]",
            options: [
                "Roundabout",
                "Side winds",
                "Horses",
                "Airfield"
            ],
            correctAnswer: 1,
            explanation: "A warning triangle with a windsock symbol warns of side winds."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-hump-bridge-tri-v2.png]",
            options: [
                "Tunnel",
                "Roundabout",
                "Hump bridge",
                "Train"
            ],
            correctAnswer: 2,
            explanation: "A warning triangle with an arched bridge symbol warns of a hump bridge."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-ford-tri.png]",
            options: [
                "Stop sign",
                "Train",
                "Heavy floods",
                "High pavement"
            ],
            correctAnswer: 2,
            explanation: "A general warning sign (exclamation mark) can be used with a plate to warn of a 'Ford' or 'Flood'. The 'Ford' sign specifically means a shallow water crossing."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-quayside-tri.png]",
            options: [
                "Stop",
                "Elderly",
                "Roundabout",
                "Quayside or riverside"
            ],
            correctAnswer: 3,
            explanation: "A warning triangle showing a car falling off a quay warns of an unfenced quayside or riverbank."
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
