const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const hazardTest = {
    title: "Hazard Perception Test 1",
    description: "Practice your hazard perception skills with this clip. Click when you see a developing hazard.",
    videoUrl: "https://vimeo.com/1150624838?share=copy&fl=sv&fe=ci", // User provided URL
    courseSlug: "driving-theory",
    hazards: [
        {
            // Placeholder Window: You MUST update these times after watching the video carefully
            // Example: Imagine a car pulls out at 15s. The window might be 14s to 19s.
            startTime: 5.0,
            endTime: 10.0,
            description: "Car pulling out from side road (Example)"
        }
    ]
};

async function main() {
    console.log(`🚗 Seeding Hazard Test - ${hazardTest.title}...`);

    const course = await prisma.course.findUnique({
        where: { slug: hazardTest.courseSlug }
    });

    if (!course) {
        console.error("Course 'driving-theory' not found! Please ensure it is seeded.");
        return;
    }

    // Check if exists to avoid dupes (optional, or just delete)
    // Deleting for clean seed
    const existing = await prisma.hazardTest.findFirst({
        where: { title: hazardTest.title, courseId: course.id }
    });

    if (existing) {
        console.log(`Deleting existing test: ${existing.id}`);
        await prisma.hazardTest.delete({ where: { id: existing.id } });
    }

    const created = await prisma.hazardTest.create({
        data: {
            title: hazardTest.title,
            description: hazardTest.description,
            videoUrl: hazardTest.videoUrl,
            courseId: course.id,
            hazards: {
                create: hazardTest.hazards.map(h => ({
                    startTime: h.startTime,
                    endTime: h.endTime,
                    description: h.description
                }))
            }
        }
    });

    console.log(`✅ ${hazardTest.title} seeded successfully! ID: ${created.id}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
