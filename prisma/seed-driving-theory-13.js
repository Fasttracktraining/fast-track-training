const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Lesson 13: Documents",
    description: "Learn about the essential legal documents you need to drive on UK roads.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/988323435?fl=pl&fe=sh",
    questions: [
        {
            text: "What does the Pass Plus scheme enable newly qualified drivers to do?",
            options: ["Increase their insurance premiums", "Widen their driving experience", "Avoid mechanical breakdowns", "Supervise a learner driver"],
            correctAnswer: 1,
            explanation: "The Pass Plus scheme is designed to improve your basic driving skills and widen your driving experience."
        },
        {
            text: "What's the purpose of the Pass Plus scheme?",
            options: ["To allow you to drive anyone else's vehicle", "To improve your basic driving skills", "To increase your mechanical knowledge", "To give you a discount on your MOT"],
            correctAnswer: 1,
            explanation: "The purpose is to improve your basic skills and experience after passing your test."
        },
        {
            text: "You claim on your insurance to have your car repaired. Your policy has an excess of £100. What does this mean?",
            options: ["Your vehicle is insured for a value of £100 if it's stolen", "The insurance company will pay the first £100 of any claim", "You'll be paid £100 if you don't claim within one year", "You'll have to pay the first £100 of the cost of repairs to your car"],
            correctAnswer: 3,
            explanation: "An excess is the amount you have to pay towards the cost of any claim."
        },
        {
            text: "What's the legal minimum insurance cover you must have to drive on public roads?",
            options: ["Third party, fire and theft", "Third party only", "Personal injury cover", "Comprehensive"],
            correctAnswer: 1,
            explanation: "The legal minimum is Third Party insurance."
        },
        {
            text: "Your vehicle is insured third-party only. What does this cover?",
            options: ["Damage to your vehicle", "All damage and injury", "Damage to other vehicles", "Injury to yourself"],
            correctAnswer: 2,
            explanation: "Third-party insurance covers damage to other people's property and injury to other people."
        },
        {
            text: "The Pass Plus scheme has been created for new drivers. What's its main purpose?",
            options: ["To allow you to carry passengers", "To allow you to drive faster", "To improve your basic skills", "To let you drive on motorways"],
            correctAnswer: 2,
            explanation: "Its purpose is to improve skills and experience in different conditions."
        },
        {
            text: "A new car will need its first MOT test when it's how old?",
            options: ["Seven years", "Five years", "Three years", "One year"],
            correctAnswer: 2,
            explanation: "In most cases, a car needs its first MOT when it is three years old."
        },
        {
            text: "Your car requires an MOT certificate. When is it legal to drive it without an MOT certificate?",
            options: ["When driving to an appointment at an MOT centre", "When driving the car with the owner's permission", "Up to seven days after the old certificate has run out", "When driving to an MOT centre to arrange an appointment"],
            correctAnswer: 0,
            explanation: "You can only drive without an MOT if you are driving to a pre-arranged appointment at an MOT testing centre."
        },
        {
            text: "What qualifies you to supervise a learner driver?",
            options: ["You must have held a licence for at least a year", "You must be an approved driving instructor", "You must hold an advanced driving certificate", "You must be at least 21 years old"],
            correctAnswer: 3,
            explanation: "To supervise a learner, you must be at least 21 and have held a full license for at least three years."
        },
        {
            text: "When may the cost of your insurance come down?",
            options: ["When you pass the driving test first time", "When you complete the Pass Plus scheme", "When you don't wear glasses", "When you're under 25 years old"],
            correctAnswer: 1,
            explanation: "Many insurance companies offer discounts to those who have completed Pass Plus."
        },
        {
            text: "When must you notify the licensing authority?",
            options: ["When you lend your vehicle to someone", "When your health affects your driving", "When your vehicle needs an MOT certificate", "When you have to work abroad"],
            correctAnswer: 1,
            explanation: "You must tell the DVLA if you have a medical condition that could affect your driving."
        },
        {
            text: "When must you contact the vehicle licensing authority?",
            options: ["When you change your vehicle", "When your vehicle's insurance is due", "When you take your vehicle abroad on holiday", "When you use your vehicle for work"],
            correctAnswer: 0,
            explanation: "You must notify the DVLA when you buy or sell a vehicle."
        },
        {
            text: "What information is found on a vehicle registration document?",
            options: ["The date of the MOT", "The type of insurance cover", "The registered keeper", "The service history details"],
            correctAnswer: 2,
            explanation: "The V5C registration document shows the registered keeper and vehicle details."
        },
        {
            text: "Who's responsible for paying the vehicle excise duty (road tax)?",
            options: ["The driver of the vehicle", "The registered keeper of the vehicle", "The car dealer", "The Driver and Vehicle Licensing Agency (DVLA)"],
            correctAnswer: 1,
            explanation: "The registered keeper is responsible for ensuring the vehicle is taxed."
        },
        {
            text: "You have third-party insurance. What does this cover?",
            options: ["Damage to other vehicles", "Fire damage to your vehicle", "Flood damage to your vehicle", "Damage to your vehicle"],
            correctAnswer: 0,
            explanation: "Third party insurance only covers damage to others."
        },
        {
            text: "What must a newly qualified driver do?",
            options: ["Keep under 40 mph for 12 months", "Display green L plates", "Have valid motor insurance", "Be accompanied on a motorway"],
            correctAnswer: 2,
            explanation: "You must have valid insurance to drive on the road."
        },
        {
            text: "Your car needs to pass an MOT test. What may be invalidated if you drive the car without a current MOT certificate?",
            options: ["The vehicle service record", "The vehicle excise licence (road tax)", "Your insurance", "Your vehicle registration document"],
            correctAnswer: 2,
            explanation: "Driving without an MOT can invalidate your insurance."
        },
        {
            text: "What must you make sure of before you drive someone else's vehicle?",
            options: ["That your own vehicle has insurance cover", "That the insurance documents are in the vehicle", "That the vehicle owner has third-party insurance cover", "That the vehicle is insured for your use"],
            correctAnswer: 3,
            explanation: "You must ensure you are legally insured to drive that specific vehicle."
        },
        {
            text: "What must learner drivers do before they start driving on the road?",
            options: ["Take professional instruction", "Apply for a driving test", "Sign their provisional licence", "Pass their theory test"],
            correctAnswer: 2,
            explanation: "You must have a valid provisional license and have signed it."
        },
        {
            text: "A police officer asks to see your documents. You don't have them with you. Within what time must you produce them at a police station?",
            options: ["7 days", "14 days", "21 days", "5 days"],
            correctAnswer: 0,
            explanation: "You have 7 days to produce requested documents at a police station."
        },
        {
            text: "What must you have when you apply to renew your vehicle excise licence?",
            options: ["Valid insurance", "The handbook", "A valid driving licence", "The vehicle's chassis number"],
            correctAnswer: 0,
            explanation: "You must have valid insurance to tax your vehicle."
        },
        {
            text: "Which of these is needed before you can legally use a vehicle on the road?",
            options: ["A vehicle handbook", "Breakdown cover", "Proof of your identity", "A valid driving licence"],
            correctAnswer: 3,
            explanation: "You must hold a valid driving license."
        },
        {
            text: "In which of these circumstances must you show your insurance certificate?",
            options: ["When buying or selling a vehicle", "When making a SORN", "When a police officer asks you for it", "When having an MOT inspection"],
            correctAnswer: 2,
            explanation: "You must produce your certificate when requested by a police officer."
        },
        {
            text: "Who's legally responsible for ensuring that a vehicle registration certificate (V5C) is updated?",
            options: ["The vehicle manufacturer", "The licensing authority", "Your insurance company", "The registered vehicle keeper"],
            correctAnswer: 3,
            explanation: "The registered keeper must ensure the V5C is accurate."
        },
        {
            text: "What's the maximum fine for driving without insurance?",
            options: ["£500", "£1000", "£5000", "Unlimited"],
            correctAnswer: 3,
            explanation: "The courts can impose an unlimited fine for driving without insurance."
        },
        {
            text: "What is a Statutory Off-Road Notification (SORN)?",
            options: ["Information held by insurance companies to check a vehicle is insured", "Information kept by the police about the owner of a vehicle", "A notification to tell DVSA that a vehicle doesn't have a current MOT", "A notification to tell DVLA that a vehicle isn't being used on the road"],
            correctAnswer: 3,
            explanation: "SORN tells the DVLA your vehicle is off the road and not being used."
        },
        {
            text: "For how long is a Statutory Off-Road Notification (SORN) valid?",
            options: ["Until the vehicle is used on the road", "Until the vehicle is taxed, sold or scrapped", "Until the vehicle is repaired or modified", "Until the vehicle is insured and MOT'd"],
            correctAnswer: 1,
            explanation: "SORN remains valid until the vehicle is taxed, sold, or scrapped."
        },
        {
            text: "You've just passed your practical test. You don't hold a full licence in another category. Within two years you get six penalty points on your licence. What will you have to do?",
            options: ["Reapply for your full licence immediately", "Retake only your theory test", "Retake only your practical test", "Retake your theory and practical tests"],
            correctAnswer: 3,
            explanation: "Under the New Drivers Act, your license is revoked if you get 6 points within 2 years, requiring a full retake."
        },
        {
            text: "What is a cover note?",
            options: ["A document issued before you receive your driving licence", "A document issued before you receive your MOT certificate", "A document issued before you receive your insurance certificate", "A document issued before you receive your registration document"],
            correctAnswer: 2,
            explanation: "A cover note is a temporary document issued while you wait for your full insurance certificate."
        },
        {
            text: "For how long is an MOT certificate normally valid?",
            options: ["Three years after the date it was issued", "One year after the date it was issued", "10,000 miles", "30,000 miles"],
            correctAnswer: 1,
            explanation: "An MOT certificate is valid for one year from the date of issue."
        }
    ]
};

async function main() {
    console.log(`🚗 Seeding Driving Theory - Lesson 13: Documents (${quiz.questions.length} questions)...`);

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

    console.log("✅ Lesson 13 seeded successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
