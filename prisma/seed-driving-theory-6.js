const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 6: Other Types of Vehicle
 * 23 questions
 */

const quiz = {
    title: "Lesson 6: Other Types of Vehicle",
    description: "Learn how to deal safely with large vehicles, buses, trams, and other road users.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "It's a very windy day and you're about to overtake a cyclist. What should you do?",
            options: [
                "Allow extra room",
                "Sound your horn repeatedly",
                "Keep close as you pass",
                "Overtake very slowly"
            ],
            correctAnswer: 0,
            explanation: "Cyclists can be blown sideways by wind. Give them plenty of room."
        },
        {
            text: "You're driving in heavy traffic on a wet road. Spray makes it difficult to be seen. What lights should you use?",
            options: [
                "Sidelights only",
                "Rear fog lights if visibility is more than 100 meters (328 feet)",
                "Full-beam headlights",
                "Dipped headlights"
            ],
            correctAnswer: 3,
            explanation: "Dipped headlights help you be seen by others without dazzling them."
        },
        {
            text: "You're towing a caravan. Which is the safest type of rear-view mirror to use?",
            options: [
                "Ordinary door mirrors",
                "Interior wide-angle mirror",
                "Ordinary interior mirror",
                "Extended-arm side mirrors"
            ],
            correctAnswer: 3,
            explanation: "Extended-arm mirrors help you see past the caravan."
        },
        {
            text: "As a driver, why should you be more careful where trams operate?",
            options: [
                "Because they don't have a horn",
                "Because they can't stop for cars",
                "Because they don't have lights",
                "Because they can't steer to avoid you"
            ],
            correctAnswer: 3,
            explanation: "Trams run on fixed rails and cannot steer to avoid hazards."
        },
        {
            text: "You're driving along this road. What should you be prepared to do?",
            imageSrc: "/images/driving-theory/lorry-turning-left.png",
            options: [
                "Sound your horn and continue",
                "Squeeze through the gap",
                "Slow down and give way",
                "Report the driver to the police"
            ],
            correctAnswer: 2,
            explanation: "Large vehicles may need to use the full width of the road to turn or manoeuvre. Be patient and give way."
        },
        {
            text: "You're driving in town. Ahead of you a bus is at a bus stop. Which of the following should you do?",
            options: [
                "Flash your lights to warn the driver of your presence",
                "Continue at the same speed but sound your horn as a warning",
                "Watch carefully for the sudden appearance of pedestrians",
                "Pass the bus as quickly as you possibly can"
            ],
            correctAnswer: 2,
            explanation: "Pedestrians may step out from behind the bus. Be vigilant."
        },
        {
            text: "It's very windy. You're behind a motorcyclist who's overtaking a high-sided vehicle. What should you do?",
            options: [
                "Keep well back",
                "Overtake the motorcyclist immediately",
                "Keep close to the motorcyclist",
                "Stay level with the motorcyclist"
            ],
            correctAnswer: 0,
            explanation: "Ideally stay back. Wind buffeting from the large vehicle can affect the motorcyclist's stability."
        },
        {
            text: "Why is it more difficult to overtake a large vehicle than a car?",
            options: [
                "It will be slow climbing hills",
                "It will take longer to pass one",
                "It will be fitted with a speed limiter",
                "It will have air brakes"
            ],
            correctAnswer: 1,
            explanation: "Large vehicles are long, so it takes more time and road space to overtake them safely."
        },
        {
            text: "What's the maximum speed of powered wheelchairs or scooters used by disabled people?",
            options: [
                "12 mph",
                "16 mph",
                "20 mph",
                "8 mph"
            ],
            correctAnswer: 3,
            explanation: "Class 3 invalid carriages have a maximum speed of 8 mph on the road."
        },
        {
            text: "You're following a large vehicle approaching a crossroads. The driver signals to turn left. What should you do?",
            options: [
                "Overtake if you can leave plenty of room",
                "Don't overtake until the vehicle begins to turn",
                "Don't overtake as you approach or at the junction",
                "Overtake only if there are no oncoming vehicles"
            ],
            correctAnswer: 2,
            explanation: "Do not overtake at junctions. The vehicle may swing out or need more space."
        },
        {
            text: "What should you do as you approach this lorry?",
            imageSrc: "/images/driving-theory/lorry-turning-across.png",
            options: [
                "Slow down and be prepared to wait",
                "Flash your lights at the lorry",
                "Move to the right-hand side of the road",
                "Make the lorry wait for you"
            ],
            correctAnswer: 0,
            explanation: "If a lorry is turning or manoeuvring, hold back and wait. It may need both lanes."
        },
        {
            text: "Which of these is least likely to be affected by side winds?",
            options: [
                "Motorcyclists",
                "Cyclists",
                "High-sided vehicles",
                "Cars"
            ],
            correctAnswer: 3,
            explanation: "Cars are generally more stable than two-wheeled vehicles or high-sided vehicles in wind."
        },
        {
            text: "How should you overtake a long, slow-moving vehicle on a busy road?",
            options: [
                "Flash your headlights for the oncoming traffic to give way",
                "Stay behind until the driver waves you past",
                "Follow it closely and keep moving out to see the road ahead",
                "Keep well back until you can see that it's clear"
            ],
            correctAnswer: 3,
            explanation: "Staying back improves your view of the road ahead."
        },
        {
            text: "What should you do when you're approaching a bus that's signaling to move away from a bus stop?",
            imageSrc: "/images/driving-theory/bus-pulling-out.png",
            options: [
                "Allow it to pull away, if it's safe to do so",
                "Get past before it moves",
                "Flash your headlights as you approach",
                "Signal left and wave the bus on"
            ],
            correctAnswer: 0,
            explanation: "Give way to buses, especially in built-up areas, if it is safe to do so."
        },
        {
            text: "You keep well back while waiting to overtake a large vehicle. What should you do if a car moves into the gap?",
            options: [
                "Flash your headlights",
                "Sound your horn",
                "Drop back further",
                "Start to overtake"
            ],
            correctAnswer: 2,
            explanation: "Increase your distance to maintain a safe gap."
        },
        {
            text: "You're following a lorry on a wet road. What should you do when spray makes it difficult to see the road ahead?",
            imageSrc: "/images/driving-theory/lorry-spray.png",
            options: [
                "Keep close to the lorry, away from the spray",
                "Drop back until you can see better",
                "Speed up and overtake quickly",
                "Put your headlights on full beam"
            ],
            correctAnswer: 1,
            explanation: "Drop back to get out of the spray and improve visibility."
        },
        {
            text: "You're travelling behind a bus that pulls up at a bus stop. What should you do?",
            options: [
                "Pull in closely behind the bus",
                "Accelerate past the bus",
                "Watch carefully for pedestrians",
                "Sound your horn"
            ],
            correctAnswer: 2,
            explanation: "Pedestrians may be crossing towards or away from the bus."
        },
        {
            text: "Before overtaking a large vehicle, you should keep well back. Why is this?",
            options: [
                "To leave a gap in case the vehicle stops and rolls back",
                "To offer other drivers a safe gap if they want to overtake you",
                "To give acceleration space to overtake quickly on blind bends",
                "To get the best view of the road ahead"
            ],
            correctAnswer: 3,
            explanation: "Being further back allows you to see further down the road past the large vehicle."
        },
        {
            text: "You're approaching a mini-roundabout. What should you do when you see the long vehicle in front signalling left but positioned over to the right?",
            imageSrc: "/images/driving-theory/long-vehicle-roundabout.png",
            options: [
                "Sound your horn",
                "Follow the same course as the lorry",
                "Keep well back",
                "Overtake on the left"
            ],
            correctAnswer: 2,
            explanation: "Long vehicles often need to swing out right to turn left. Keep back."
        },
        {
            text: "You're following a long vehicle approaching a crossroads. The driver signals right but moves close to the left-hand kerb. What should you do?",
            imageSrc: "/images/driving-theory/lorry-turning-right-swing-left.png",
            options: [
                "Report the driver to the police",
                "Overtake on the right-hand side",
                "Wait behind the long vehicle",
                "Warn the driver about the wrong signal"
            ],
            correctAnswer: 2,
            explanation: "Wait behind. They are swinging left to make the right turn possible."
        },
        {
            text: "You're following a long vehicle. As it approaches a crossroads, it signals left but moves out to the right. What should you do?",
            imageSrc: "/images/driving-theory/lorry-turning-left-swing-right.png",
            options: [
                "Assume the signal is wrong and that it's turning right",
                "Overtake it as it starts to slow down",
                "Get closer in order to pass it quickly",
                "Stay well back and give it room"
            ],
            correctAnswer: 3,
            explanation: "Stay well back. Do not overtake on the left."
        },
        {
            text: "You're waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
            options: [
                "The large vehicle can easily hide vehicles from the left",
                "The large vehicle can easily hide an overtaking vehicle",
                "The large vehicle can turn suddenly",
                "The large vehicle is difficult to steer in a straight line"
            ],
            correctAnswer: 1,
            explanation: "There may be a vehicle overtaking the large truck that you cannot see."
        },
        {
            text: "You're about to overtake a slow-moving motorcyclist. Which one of these signs would make you take special care?",
            options: [
                { "text": "Side Winds", "imageSrc": "/images/driving-theory/sign-side-winds.png" },
                { "text": "Clearway", "imageSrc": "/images/driving-theory/sign-clearway.png" },
                { "text": "Ahead Only", "imageSrc": "/images/driving-theory/sign-ahead-only.png" },
                { "text": "No Left Turn", "imageSrc": "/images/driving-theory/sign-no-left-turn.png" }
            ],
            correctAnswer: 0,
            explanation: "Pay attention to warning signs indicating wind. Side winds can blow motorcyclists off course."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 6: Other Types of Vehicle...\n");

    const course = await prisma.course.findUnique({
        where: { slug: quiz.courseSlug }
    });

    if (!course) {
        console.error("Course not found!");
        return;
    }

    // Delete existing quiz to ensure full update
    await prisma.quiz.deleteMany({
        where: { title: quiz.title }
    });
    console.log(`deleted existing quiz: ${quiz.title}`);

    const createdQuiz = await prisma.quiz.create({
        data: {
            title: quiz.title,
            description: quiz.description,
            isPremium: quiz.isPremium,
            videoUrl: "https://vimeo.com/1011728169",
            courseId: course.id,
            questions: {
                create: quiz.questions.map((q) => {
                    const optionsData = JSON.stringify(q.options);

                    return {
                        text: q.imageSrc ? `${q.text}\n[Image: ${q.imageSrc}]` : q.text,
                        options: optionsData,
                        correctAnswer: q.correctAnswer,
                        explanation: q.explanation || null
                    };
                })
            }
        },
        include: { questions: true }
    });

    console.log(`✅ Created quiz: ${createdQuiz.title}`);
    console.log(`   📝 ${createdQuiz.questions.length} questions added`);
}

main()
    .catch((e) => {
        console.error("❌ Error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
