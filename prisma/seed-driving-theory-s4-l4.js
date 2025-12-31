const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 4",
    description: "Fourth installment of Road Sign tests, covering warning signs, level crossings, and road hazards.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/572946517?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-uneven-road-v2.png]",
            options: [
                "Quayside",
                "Hill climb",
                "Ring road",
                "Uneven road"
            ],
            correctAnswer: 3,
            explanation: "This sign warns drivers that the road surface ahead is uneven and may require a reduction in speed for safety."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-reduce-speed-v2.png]",
            options: [
                "Hazard ahead",
                "Reduce speed now",
                "Car park",
                "Junction ahead"
            ],
            correctAnswer: 1,
            explanation: "This text-based sign is used in conjunction with other warning signs to advise you to slow down immediately for an upcoming hazard."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-two-way-crosses-v3.png]",
            options: [
                "Two-way traffic crosses one-way road",
                "Trains travelling in both directions",
                "Nobody has priority",
                "Level crossing"
            ],
            correctAnswer: 0,
            explanation: "Horizontal black arrows in a red warning triangle indicate that two-way traffic crosses an upcoming one-way road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-two-way-straight-v3.png]",
            options: [
                "Trains travelling both directions",
                "Direction of road",
                "No U-turns",
                "Two-way traffic straight ahead"
            ],
            correctAnswer: 3,
            explanation: "Vertical black arrows pointing in opposite directions warn that you are approaching a section of two-way traffic ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-opening-bridge-v2.png]",
            options: [
                "Bridge ahead",
                "Opening or swing bridge ahead",
                "Pedal cycles",
                "Home zone entry"
            ],
            correctAnswer: 1,
            explanation: "This sign warns of a bridge that may open or swing to allow marine traffic to pass, requiring road traffic to stop."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-low-flying-aircraft-v2.png]",
            options: [
                "Road works",
                "Slow-moving",
                "Low flying aircraft",
                "Aircraft hanger"
            ],
            correctAnswer: 2,
            explanation: "This sign warns of low-flying aircraft or sudden noise from aircraft near an airfield."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-falling-rocks-v2.png]",
            options: [
                "Falling/ fallen rocks",
                "No cycling",
                "No motor vehicles",
                "Contraflow"
            ],
            correctAnswer: 0,
            explanation: "This sign warns of the risk of rocks falling onto the road or rocks already lying in the carriageway."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-traffic-lights-not-in-use.png]",
            options: [
                "Traffic lights not in use",
                "No need to stop at a red light",
                "No overtaking",
                "No stopping"
            ],
            correctAnswer: 0,
            explanation: "A red diagonal line across a traffic light symbol indicates that the traffic signals ahead are not in operation."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-traffic-signals-v3.png]",
            options: [
                "Stop at traffic lights",
                "Beware of pedestrians crossing at traffic lights",
                "Traffic signals",
                "No vehicles carrying explosives"
            ],
            correctAnswer: 2,
            explanation: "A standard red triangle with a traffic light symbol warns of traffic signals ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-slippery-road-v3.png]",
            options: [
                "Racing course",
                "Slippery road",
                "No vehicles over width shown",
                "Diverted route"
            ],
            correctAnswer: 1,
            explanation: "This sign warns that the road surface ahead is likely to be slippery under certain conditions."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-steep-hill-down-v2.png]",
            options: [
                "No right turn",
                "Steep hill downwards",
                "Steep hill upwards",
                "No U-turns"
            ],
            correctAnswer: 1,
            explanation: "A vehicle pointing downhill with a percentage indicates a steep hill downwards ahead. In this case, a 10% gradient."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-steep-hill-up-v2.png]",
            options: [
                "Parking restricted",
                "Steep hill downwards",
                "Steep hill upwards",
                "Permit holders"
            ],
            correctAnswer: 2,
            explanation: "A vehicle pointing uphill with a percentage indicates a steep hill upwards ahead. In this case, a 20% gradient."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tunnel-ahead.png]",
            options: [
                "No waiting",
                "Tunnel ahead",
                "Ahead only",
                "No lighting"
            ],
            correctAnswer: 1,
            explanation: "This sign warns of a tunnel ahead. You should check your lights and follow the rules for driving in tunnels."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-tram-crossing-v2.png]",
            options: [
                "Keep left",
                "Tram crossing ahead",
                "Park & Ride",
                "Coach station"
            ],
            correctAnswer: 1,
            explanation: "A red triangle with a tram symbol warns that trams may cross the road ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-gate-v3.png]",
            options: [
                "Level crossing with barrier or gate ahead",
                "Fence",
                "Gate",
                "Road closed ahead"
            ],
            correctAnswer: 0,
            explanation: "The fence symbol in a warning triangle indicates a level crossing with a gate or barrier."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-no-gate-v3.png]",
            options: [
                "End of minimum speed",
                "Mini-roundabout",
                "Level crossing without barrier or gate ahead",
                "Trams only"
            ],
            correctAnswer: 2,
            explanation: "The steam locomotive symbol in a warning triangle indicates a level crossing without a gate or barrier."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-level-crossing-cross-v2.png]",
            options: [
                "No entry",
                "Road closed ahead",
                "Level crossing without barrier",
                "Roadworks"
            ],
            correctAnswer: 2,
            explanation: "The 'St Andrew's Cross' (X-shape) indicates a level crossing without a barrier. If it has a red border and multiple arms, it means it's a multi-track crossing."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-school-crossing-patrol-v2.png]",
            options: [
                "Road narrows on right",
                "Staggered junction",
                "Crossroads",
                "School crossing patrol ahead"
            ],
            correctAnswer: 3,
            explanation: "This sign warns drivers that they are approaching a children's crossing point where a school crossing patrol may be on duty."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-elderly-people.png]",
            options: [
                "Elderly people ahead",
                "Two-way traffic",
                "Roundabout",
                "Blind pedestrians"
            ],
            correctAnswer: 0,
            explanation: "This sign warns of the likely presence of frail or elderly pedestrians crossing the road ahead."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-pedestrians-in-road-v3.png]",
            options: [
                "Low-flying aircraft",
                "Pedestrians in road ahead",
                "Slippery road",
                "Steep hill upwards"
            ],
            correctAnswer: 1,
            explanation: "This sign warn that pedestrians may be walking in the road, often where there is no permanent footway."
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
