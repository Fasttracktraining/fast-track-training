const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const quizzes = await prisma.quiz.findMany({
        where: { title: "Life in the UK: Practice Test 1" }
    });
    console.log("Found quizzes matching 'Life in the UK: Practice Test 1':");
    quizzes.forEach(q => {
        console.log(`ID: ${q.id}, Title: "${q.title}", VideoURL: "${q.videoUrl}"`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
