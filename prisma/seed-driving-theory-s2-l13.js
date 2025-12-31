const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Section 2 Lesson 13: Documents",
    description: "Learn about the essential legal documents required for driving, insurance, and vehicle maintenance.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/807231229?fl=pl&fe=sh",
    questions: [
        {
            text: "A cover note is a document issued before you receive your",
            options: ["Driving license", "Insurance certificate", "Registration document", "Mot certificate"],
            correctAnswer: 1,
            explanation: "A cover note is a temporary document that provides proof of insurance until your full certificate arrives."
        },
        {
            text: "You have just passed your practical test. You do not hold a full licence in another category. Within two years you get six penalty points on your licence. What will you have to do? Mark TWO answers.",
            options: [
                "Retake only your theory test",
                "Retake your theory and practical tests",
                "Retake only your practical test",
                "Reapply for your full license immediately",
                "Reapply for your provisional license"
            ],
            correctAnswers: [1, 4],
            correctAnswer: 1,
            explanation: "Under the New Drivers Act, passing with 6 or more points within 2 years of passing your first test results in your license being revoked. You must reapply for a provisional license and pass both tests again."
        },
        {
            text: "What is the maximum specified fine for driving without insurance?",
            options: ["£50", "£500", "£5000", "Unlimited"],
            correctAnswer: 3,
            explanation: "While fixed penalties exist, if the case goes to court, the fine for driving without insurance is now unlimited."
        },
        {
            text: "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to a police station within",
            options: ["5 days", "7 days", "14 days", "21 days"],
            correctAnswer: 1,
            explanation: "If you don't have your documents when asked, you usually have 7 days to produce them at a nominated police station."
        },
        {
            text: "When you apply to renew your vehicle excise license (tax disc) what must you have?",
            options: ["Valid insurance", "The vehicle handbook", "The old tax disc", "A valid driving license"],
            correctAnswer: 0,
            explanation: "To tax your vehicle, you must have valid insurance (and a valid MOT if applicable)."
        },
        {
            text: "Before driving anyone else’s motor vehicle you should make sure that",
            options: [
                "The vehicle owner has third party insurance cover",
                "Your own vehicle has insurance cover",
                "The vehicle is insured for your use",
                "The owner has left the insurance documents in the vehicle"
            ],
            correctAnswer: 2,
            explanation: "It is your responsibility to ensure you are legally insured to drive any vehicle you operate."
        },
        {
            text: "A newly qualified driver must",
            options: ["Display green L plates", "Not exceed 40 mph for 12 months", "Be accompanied on motorway", "Have valid motor insurance"],
            correctAnswer: 3,
            explanation: "All drivers, including newly qualified ones, must have valid motor insurance to drive on public roads."
        },
        {
            text: "Which THREE pieces of information are found on a vehicle registration document?",
            options: ["Registered keeper", "Make of the vehicle", "Service history details", "Date of mot", "Type of insurance cover", "Engine size"],
            correctAnswers: [0, 1, 5],
            correctAnswer: 0,
            explanation: "The V5C (Logbook) contains details about the keeper, the vehicle's make, model, and engine size, but not its MOT or insurance status."
        },
        {
            text: "The cost of your insurance may be reduced if you",
            options: [
                "Are under 25 years old",
                "Do not wear glasses",
                "Pass the driving test",
                "Take the pass plus scheme"
            ],
            correctAnswer: 3,
            explanation: "Completing the Pass Plus course after passing your test can help reduce insurance premiums with many providers."
        },
        {
            text: "Which THREE of these do you need before you can drive legally?",
            options: ["A valid driving license", "A valid tax disc", "A vehicle service record", "Proper insurance cover", "Breakdown cover"],
            correctAnswers: [0, 1, 3],
            correctAnswer: 0,
            explanation: "To drive legally, you must have a valid license, valid insurance, and have paid the vehicle excise duty (road tax)."
        },
        {
            text: "An MOT certificate is normally valid for",
            options: ["Three years after the date it was issued", "10,000 miles", "One year after the date it was issued", "30,000 miles"],
            correctAnswer: 2,
            explanation: "An MOT certificate is valid for one year from the date of issue."
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
                    correctAnswers: q.correctAnswers ? JSON.stringify(q.correctAnswers) : null,
                    explanation: q.explanation
                }))
            }
        }
    });

    console.log(`✅ ${quiz.title} seeded successfully!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
