const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const courses = [
    { title: "Life In The UK", slug: "life-in-the-uk", description: "Complete preparation for the Life in the UK Citizenship Test." },
    { title: "Driving Theory", slug: "driving-theory", description: "Master the DVSA Driving Theory Test." },
    { title: "A1 English", slug: "a1-english", description: "GESE Grade 2 - A1 English Test Training." },
    { title: "A2 English", slug: "a2-english", description: "A2 English preparation for further visa extensions." },
    { title: "B1 English", slug: "b1-english", description: "B1 SELT - GESE Grade 5 Exam Preparation." },
    { title: "B1/B2 Worker Visa", slug: "work-visa-english", description: "English training for Skilled Worker Visas." },
    { title: "Lorry HGV Training", slug: "hgv-training", description: "HGV / LGV Driver CPC and Theory Training." },
    { title: "Gedling Taxi Training", slug: "gedling-taxi", description: "Specialized training for Gedling Taxi Knowledge Test." },
    { title: "Wolverhampton Taxi Training", slug: "wolverhampton-taxi", description: "Wolverhampton Private Hire Knowledge Test." },
];

async function main() {
    console.log("Seeding Courses...");

    let litukCourseId = null;

    for (const c of courses) {
        // Upsert Course
        const course = await prisma.course.upsert({
            where: { slug: c.slug },
            update: {},
            create: {
                title: c.title,
                slug: c.slug,
                description: c.description
            }
        });
        console.log(`Created Course: ${course.title}`);

        if (c.slug === "life-in-the-uk") {
            litukCourseId = course.id;
        }
    }

    if (litukCourseId) {
        console.log("Assigning existing quizzes to Life In The UK course...");
        // Assign all current quizzes (which are unassigned) to LITUK
        await prisma.quiz.updateMany({
            where: {
                courseId: null
            },
            data: {
                courseId: litukCourseId
            }
        });
        console.log("Quizzes assigned.");
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
