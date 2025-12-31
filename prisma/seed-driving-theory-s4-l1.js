const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 4 Road Sign Test 1",
    description: "A comprehensive test of your knowledge of essential UK road signs.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/582634767?fl=pl&fe=sh",
    questions: [
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-20-zone.png]",
            options: ["Entry to 20 mph zone", "Distance to ‘STOP’ line ahead", "Road narrows on both sides", "Zebra crossing"],
            correctAnswer: 0,
            explanation: "This sign marks the entrance to a 20 mph zone, usually in residential areas or near schools."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-20-zone-ends.png]",
            options: ["Cattle", "End of 20 mph zone", "Cycle route ahead", "Hump bridge"],
            correctAnswer: 1,
            explanation: "A greyed-out circle with a diagonal line (often with a new speed limit sign above) indicates the end of a controlled zone."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-40-limit.png]",
            options: ["Two-way traffic crosses one-way road", "Slippery road", "Maximum speed", "Traffic signals"],
            correctAnswer: 2,
            explanation: "A red circle with a number indicates the maximum speed limit in miles per hour."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-national-limit-circle.png]",
            options: ["No cycling", "Stop and give way", "National speed limit applies", "No overtaking"],
            correctAnswer: 2,
            explanation: "A white circle with a black diagonal stripe means the national speed limit applies."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-school-patrol.png]",
            options: ["Turn left", "School crossing patrol", "No left turn", "Minimum speed"],
            correctAnswer: 1,
            explanation: "This sign is used by school crossing patrols to signal traffic to stop for children crossing the road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-stop-octagon.png]",
            options: ["Buses and cycles only", "One-way traffic", "Stop and give way", "Trams only"],
            correctAnswer: 2,
            explanation: "The octagonal red 'STOP' sign requires all vehicles to come to a complete halt before the line."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-give-way-tri.png]",
            options: ["Give way", "Dual carriageway ends", "T-junction", "Roundabout"],
            correctAnswer: 0,
            explanation: "The inverted triangle 'GIVE WAY' sign means you must give way to traffic on the main road."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-red-circle.png]",
            options: ["STOP sign", "Stop in certain circumstances", "Not necessary to stop", "Plate below some signs"],
            correctAnswer: 1,
            explanation: "An empty red circle (or one with a specific symbol) indicates a prohibition; you must obey the command (e.g., 'No Vehicles')."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-go-circle.png]",
            options: ["GO sign", "No stopping", "No stopping at traffic lights", "Don’t give way to traffic"],
            correctAnswer: 0,
            explanation: "A green circular sign with 'GO' is often used at roadworks to signal traffic can proceed."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-entry-circle.png]",
            options: ["No cyclists", "No pedestrians allowed", "Level crossing ahead", "No entry"],
            correctAnswer: 3,
            explanation: "A red circle with a white horizontal bar is the universal sign for 'No Entry'."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-vehicles.png]",
            options: ["No speed limit", "No vehicle", "No entry", "Roundabout"],
            correctAnswer: 1,
            explanation: "An empty red circle with the 'No vehicles' plate means all vehicles are prohibited (except manually propelled ones)."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-cycling.png]",
            options: ["No motor vehicles", "Cycles only", "Uneven road", "No cycling"],
            correctAnswer: 3,
            explanation: "A red circle showing a bicycle means that cycling is prohibited in that area."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-motor-v.png]",
            options: ["Bikes have priority", "Only bikes and cars allowed", "No motor vehicles", "Entry prohibited"],
            correctAnswer: 2,
            explanation: "A red circle showing both a car and a motorcycle means no motor vehicles are allowed."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-buses.png]",
            options: ["No buses", "Bus lane", "Only buses allowed", "Bus station"],
            correctAnswer: 0,
            explanation: "A red circle with a bus symbol means buses are prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-overtaking-cars.png]",
            options: ["Nobody has priority", "One-way road", "Two-way traffic", "No overtaking"],
            correctAnswer: 3,
            explanation: "A red circle showing two cars side-by-side means overtaking is prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-towed-caravans.png]",
            options: ["No towed caravans", "Camping site", "Large load", "Wide load"],
            correctAnswer: 0,
            explanation: "A red circle showing a car towing a caravan means towed caravans are prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-no-explosives.png]",
            options: ["Breakdown zone", "No vehicles carrying explosives", "Bomb disposal", "Car accident"],
            correctAnswer: 1,
            explanation: "A red circle with a vehicle and an explosion symbol means vehicles carrying explosives are prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-length-limit.png]",
            options: ["Slippery road", "Tunnel ahead", "No vehicles over length shown", "HGV lane"],
            correctAnswer: 2,
            explanation: "A red circle with a lorry and a length measurement means vehicles over that length are prohibited."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-height-limit-v2.png]",
            options: ["Trams crossing ahead", "Tunnel ahead", "No vehicles over height shown", "Overhead electric cable"],
            correctAnswer: 2,
            explanation: "A red circle with arrows pointing up and down indicates a height restriction."
        },
        {
            text: "What does this sign mean? [Image: /images/driving-theory/sign-width-limit.png]",
            options: ["No vehicles over width shown", "No vehicles below width shown", "Side winds", "Traffic queues"],
            correctAnswer: 0,
            explanation: "A red circle with horizontal arrows indicates a width restriction."
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
