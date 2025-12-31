const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const rawInput = `
New Life In The UK Test 1: https://vimeo.com/496431100?fl=pl&fe=sh
New Life In The UK Test 2: https://vimeo.com/529701828?fl=pl&fe=sh
New Life In The UK Test 3: https://vimeo.com/529698929?fl=pl&fe=sh
New Life In The UK Test 4: https://vimeo.com/529696396?fl=pl&fe=sh
New Life In The UK Test 5: https://vimeo.com/532290505?fl=pl&fe=sh
New Life In The UK Test 6: https://vimeo.com/530725868?fl=pl&fe=sh
New Life In The UK Test 7: https://vimeo.com/529720272?fl=pl&fe=sh
New Life In The UK Test 8: https://vimeo.com/496422264?fl=pl&fe=sh
New Life In The UK Test 9: https://vimeo.com/496424032?fl=pl&fe=sh
New Life In The UK Test 10: https://vimeo.com/526646203?fl=pl&fe=sh
New Life In The UK Test 11: https://vimeo.com/526648346?fl=pl&fe=sh
New Life In The UK Test 12: https://vimeo.com/526650078?fl=pl&fe=sh
New Life In The UK Test 13: https://vimeo.com/496426758?fl=pl&fe=sh
New Life In The UK Test 14: https://vimeo.com/496427903?fl=pl&fe=sh
New Life In The UK Test 15: https://vimeo.com/496429027?fl=pl&fe=sh
New Life In The UK Test 16: https://vimeo.com/496429027?fl=pl&fe=sh
New Life In The UK Test 17: https://vimeo.com/527960466?fl=pl&fe=sh
New Life In The UK Test 18: https://vimeo.com/526615089?fl=pl&fe=sh
New Life In The UK Test 19: https://vimeo.com/526617446?fl=pl&fe=sh
New Life In The UK Test 20: https://vimeo.com/526619512?fl=pl&fe=sh
New Life In The UK Test 21: https://vimeo.com/526621735?fl=pl&fe=sh
New Life In The UK Test 22: https://vimeo.com/526623908?fl=pl&fe=sh
New Life In The UK Test 23: https://vimeo.com/526625916?fl=pl&fe=sh
New Life In The UK Test 24: https://vimeo.com/526628019?fl=pl&fe=sh
New Life In The UK Test 25: https://vimeo.com/526629976?fl=pl&fe=sh
Frequent Questions: https://vimeo.com/980564197?fl=pl&fe=sh
Lesson 1: What is the UK?: https://vimeo.com/521036265?fl=pl&fe=sh
Lesson 2: The Middles Ages: https://vimeo.com/531712469?fl=pl&fe=sh
Lesson 3: The Tudors and Stuarts: https://vimeo.com/523153598?fl=pl&fe=sh
Lesson 4: A Global Power: Lesson 4: A Global Power: https://vimeo.com/526178875?fl=pl&fe=sh
Lesson 5: A Global Power part 2: https://vimeo.com/526657371?fl=pl&fe=sh
Lesson 6: The 20th Century: https://vimeo.com/531726459?fl=pl&fe=sh
Lesson 7: Britain Since 1945: https://vimeo.com/531610192?fl=pl&fe=sh
Lesson 8: A Modern, Thriving, Society: https://vimeo.com/531631814?fl=pl&fe=sh
Lesson 9: The Government, The Law And Your Role: https://vimeo.com/531670311?fl=pl&fe=sh
`;

async function main() {
    const lines = rawInput.split('\n').filter(l => l.trim().length > 0);
    const quizzes = await prisma.quiz.findMany();

    for (const line of lines) {
        // Simple Split by last colon? No, URLs use colons.
        // Split by "http"
        const parts = line.split("http");
        if (parts.length < 2) continue;

        const titlePart = parts[0].replace(/:$/, '').trim(); // Remove trailing colon
        const url = "http" + parts[1].trim();
        const cleanUrl = url.split('?')[0];

        // Determine Match Type
        let targetNum = null;
        let isLesson = false;
        let isRapidFire = false;

        if (titlePart.includes("Frequent Questions")) {
            isRapidFire = true;
        } else if (titlePart.includes("Test")) {
            const match = titlePart.match(/Test (\d+)/);
            if (match) targetNum = match[1];
        } else if (titlePart.includes("Lesson")) {
            const match = titlePart.match(/Lesson (\d+)/);
            if (match) {
                targetNum = match[1];
                isLesson = true;
            }
        }

        const matches = quizzes.filter(q => {
            if (isRapidFire && q.title.includes("Rapid Fire")) return true;
            if (targetNum === null && !isRapidFire) return false;

            const dbTitle = q.title;

            if (isLesson) {
                // Match Lesson X
                return new RegExp(`Lesson ${targetNum}([^0-9]|$)`).test(dbTitle);
            } else {
                // Match Test X
                // DB naming might be "Life in the UK Test 1" or "Life in the UK: Practice Test 1"
                if (!dbTitle.includes("Test")) return false;
                return new RegExp(`Test ${targetNum}([^0-9]|$)`).test(dbTitle);
            }
        });

        for (const match of matches) {
            console.log(`Updating [${match.title}] -> ${cleanUrl}`);
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
