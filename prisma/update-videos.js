const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const videoMappings = [
    { titlePart: "Life in the UK Test 1", url: "https://vimeo.com/496431100" },
    { titlePart: "Life in the UK Test 2", url: "https://vimeo.com/529701828" },
    { titlePart: "Life in the UK Test 3", url: "https://vimeo.com/529698929" },
    { titlePart: "Life in the UK Test 4", url: "https://vimeo.com/529696396" },
    { titlePart: "Life in the UK Test 5", url: "https://vimeo.com/532290505" },
    { titlePart: "Life in the UK Test 6", url: "https://vimeo.com/530725868" },
    { titlePart: "Life in the UK Test 7", url: "https://vimeo.com/529720272" },
    { titlePart: "Life in the UK Test 8", url: "https://vimeo.com/496422264" },
    { titlePart: "Life in the UK Test 9", url: "https://vimeo.com/496424032" },
    { titlePart: "Life in the UK Test 10", url: "https://vimeo.com/526646203" },
    { titlePart: "Life in the UK Test 11", url: "https://vimeo.com/526648346" },
    { titlePart: "Life in the UK Test 12", url: "https://vimeo.com/526650078" },
    { titlePart: "Life in the UK Test 13", url: "https://vimeo.com/496426758" },
    { titlePart: "Life in the UK Test 14", url: "https://vimeo.com/496427903" },
    { titlePart: "Life in the UK Test 15", url: "https://vimeo.com/496429027" },
    { titlePart: "Life in the UK Test 16", url: "https://vimeo.com/496429027" },
    { titlePart: "Life in the UK Test 17", url: "https://vimeo.com/527960466" },
    { titlePart: "Life in the UK Test 18", url: "https://vimeo.com/526615089" },
    { titlePart: "Life in the UK Test 19", url: "https://vimeo.com/526617446" },
    { titlePart: "Life in the UK Test 20", url: "https://vimeo.com/526619512" },
    { titlePart: "Life in the UK Test 21", url: "https://vimeo.com/526621735" },
    { titlePart: "Life in the UK Test 22", url: "https://vimeo.com/526623908" },
    { titlePart: "Life in the UK Test 23", url: "https://vimeo.com/526625916" },
    { titlePart: "Life in the UK Test 24", url: "https://vimeo.com/526628019" },
    { titlePart: "Life in the UK Test 25", url: "https://vimeo.com/526629976" },
    { titlePart: "Lesson 1", url: "https://vimeo.com/521036265" },
    { titlePart: "Lesson 2", url: "https://vimeo.com/531712469" },
    { titlePart: "Lesson 3", url: "https://vimeo.com/523153598" },
    { titlePart: "Lesson 4", url: "https://vimeo.com/526178875" },
    { titlePart: "Lesson 5", url: "https://vimeo.com/526657371" },
    { titlePart: "Lesson 6", url: "https://vimeo.com/531726459" },
    { titlePart: "Lesson 7", url: "https://vimeo.com/531610192" },
    { titlePart: "Lesson 8", url: "https://vimeo.com/531631814" },
    { titlePart: "Lesson 9", url: "https://vimeo.com/531670311" },
    { titlePart: "Rapid Fire", url: "https://vimeo.com/980564197" },
];

async function main() {
    const quizzes = await prisma.quiz.findMany();

    for (const map of videoMappings) {
        const cleanUrl = map.url.split('?')[0];
        let targetNum = null;
        let isLesson = false;

        if (map.titlePart.includes("Test")) {
            const match = map.titlePart.match(/Test (\d+)/);
            if (match) targetNum = match[1];
        } else if (map.titlePart.includes("Lesson")) {
            const match = map.titlePart.match(/Lesson (\d+)/);
            if (match) {
                targetNum = match[1];
                isLesson = true;
            }
        }

        const matches = quizzes.filter(q => {
            if (map.titlePart.includes("Rapid Fire") && q.title.includes("Rapid Fire")) return true;
            if (!targetNum) return false;

            const dbTitle = q.title;

            if (isLesson) {
                return new RegExp(`Lesson ${targetNum}([^0-9]|$)`).test(dbTitle);
            } else {
                if (!dbTitle.includes("Test")) return false;
                return new RegExp(`Test ${targetNum}([^0-9]|$)`).test(dbTitle);
            }
        });

        for (const match of matches) {
            console.log(`Updating ${match.title} with video ${cleanUrl}`);
            await prisma.quiz.update({
                where: { id: match.id },
                data: { videoUrl: cleanUrl }
            });
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
