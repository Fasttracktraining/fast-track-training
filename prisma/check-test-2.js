const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const quizzes = await prisma.quiz.findMany({
        where: {
            title: {
                contains: "Test 2"
            }
        }
    });
    console.log("Checking Test 2:");
    quizzes.forEach(q => {
        console.log(`ID: ${q.id}, Title: "${q.title}", VideoURL: "${q.videoUrl}"`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
