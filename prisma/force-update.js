const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const id = "cmjlwyuj00000sbgd25a6z9ac";
    const videoUrl = "https://vimeo.com/496431100"; // Cleaned URL

    console.log(`Force updating ${id} with ${videoUrl}`);

    await prisma.quiz.update({
        where: { id },
        data: { videoUrl }
    });

    const verify = await prisma.quiz.findUnique({ where: { id } });
    console.log("Verification:", verify.videoUrl);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
