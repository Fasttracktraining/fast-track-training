const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Mark Rapid Fire Quizzes as Premium
    await prisma.quiz.updateMany({
        where: {
            title: {
                contains: "Rapid Fire"
            }
        },
        data: {
            isPremium: true
        }
    });

    // 2. Mark Tests 11-25 as Premium
    // We can do this by regex matching loop or brute force list
    // A simpler way: Fetch all, check regex, update.
    const allQuizzes = await prisma.quiz.findMany();

    for (const quiz of allQuizzes) {
        // Check for "Test X" where X >= 11
        // Titles format: "Life in the UK Test 11" or "Life in the UK: Practice Test 11"
        const match = quiz.title.match(/Test (\d+)/);
        if (match) {
            const num = parseInt(match[1]);
            if (num >= 11) {
                console.log(`Locking ${quiz.title}`);
                await prisma.quiz.update({
                    where: { id: quiz.id },
                    data: { isPremium: true }
                });
            }
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
