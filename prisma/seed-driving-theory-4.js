const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 4: Safety Margins
 * 44 questions
 */

const quiz = {
    title: "Lesson 4: Safety Margins",
    description: "Understand stopping distances, weather conditions, and how to maintain safe gaps between vehicles.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/1013063550",
    questions: [
        {
            text: "What should you do when driving in fog?",
            options: [
                "Position close to the center line",
                "Use sidelights only",
                "Allow more time for your journey",
                "Keep close to the car in front"
            ],
            correctAnswer: 2,
            explanation: "Fog can drastically reduce visibility. Allow plenty of time for your journey so you don't feel rushed."
        },
        {
            text: "What can result when you travel for long distances in neutral (known as coasting)?",
            options: [
                "Reduction in control",
                "Easier steering",
                "Increased fuel consumption",
                "Improvement in control"
            ],
            correctAnswer: 0,
            explanation: "Coasting reduces your control over the vehicle, particularly steering and braking responsiveness."
        },
        {
            text: "You're driving on a wet motorway with surface spray. What lights should you use?",
            options: [
                "Sidelights",
                "Rear fog lights",
                "Dipped headlights",
                "Hazard warning lights"
            ],
            correctAnswer: 2,
            explanation: "Dipped headlights help you be seen by other drivers in spray without dazzling them."
        },
        {
            text: "When will anti-lock brakes take effect?",
            options: [
                "When you don't brake quickly enough",
                "When you haven't seen a hazard ahead",
                "When you're speeding on a slippery road surface",
                "When the wheels are about to lock"
            ],
            correctAnswer: 3,
            explanation: "ABS detects when a wheel is about to lock and releases the brake momentarily to allow the wheel to keep turning."
        },
        {
            text: "When are anti-lock brakes (ABS) most effective?",
            options: [
                "When you brake normally but grip the steering wheel tightly",
                "When you brake promptly and firmly until you've stopped",
                "When you keep pumping the foot brake to prevent skidding",
                "When you apply the handbrake to reduce the stopping distance"
            ],
            correctAnswer: 1,
            explanation: "To use ABS effectively in an emergency, brake firmly and keep your foot on the pedal until the vehicle stops."
        },
        {
            text: "How can you use your vehicle's engine as a brake?",
            options: [
                "By selecting reverse gear",
                "By selecting neutral gear",
                "By changing to a lower gear",
                "By changing to a higher gear"
            ],
            correctAnswer: 2,
            explanation: "Selecting a lower gear forces the engine to turn faster, creating resistance that slows the vehicle (engine braking)."
        },
        {
            text: "You're driving on an open road in dry weather. What should the distance be between you and the vehicle in front?",
            imageSrc: "/images/driving-theory/separation-distance.png",
            options: [
                "One car length",
                "A two-second time gap",
                "Two meters (6 feet 6 inches)",
                "Two car lengths"
            ],
            correctAnswer: 1,
            explanation: "In good, dry conditions, keep a two-second gap. This distance increases in wet or icy weather."
        },
        {
            text: "In which conditions will your overall stopping distance increase?",
            options: [
                "In the rain",
                "In fog",
                "In strong winds",
                "At night"
            ],
            correctAnswer: 0,
            explanation: "Rain reduces tyre grip, doubling your stopping distance compared to dry roads."
        },
        {
            text: "You're driving along a wet road. How can you tell if your vehicle's tyres are losing their grip on the surface?",
            options: [
                "The engine noise will increase",
                "The steering will feel very light",
                "The steering will feel very heavy",
                "The engine noise will increase" // Duplicate option in source, assuming distinct d or ignoring
            ],
            correctAnswer: 1,
            explanation: "If the steering feels light and unresponsive, your tyres may be hydroplaning (aquaplaning) or losing grip."
        },
        {
            text: "What would suggest you're driving on ice?",
            options: [
                "There's less transmission noise",
                "There's less wind noise",
                "There's less tyre noise",
                "There's less engine noise"
            ],
            correctAnswer: 2,
            explanation: "Tyre noise decreases on ice because there is less friction between the tyre and road surface."
        },
        {
            text: "You're driving along a country road. You see this sign. What should you do after dealing safely with the hazard?",
            imageSrc: "/images/driving-theory/ford-sign.png",
            options: [
                "Switch on your hazard warning lights",
                "Test your brakes",
                "Accelerate briskly",
                "Check your tyre pressures"
            ],
            correctAnswer: 1,
            explanation: "After driving through a ford (water), your brakes may be wet. Test them gently to dry them out."
        },
        {
            text: "In which conditions are your anti-lock brakes most unlikely to prevent skidding?",
            options: [
                "On dry tarmac",
                "In foggy conditions",
                "At night on unlit roads",
                "On loose road surfaces"
            ],
            correctAnswer: 3,
            explanation: "ABS can be less effective on loose surfaces like gravel or snow, as the locked wheel can build up a wedge of material to help stop."
        },
        {
            text: "You're driving a vehicle that has anti-lock brakes. How should you apply the footbrake when you need to stop in an emergency?",
            options: [
                "Rapidly and firmly",
                "Slowly but firmly",
                "Slowly and gently",
                "Rapidly and gently"
            ],
            correctAnswer: 0,
            explanation: "Apply firm, rapid pressure. Do not pump the brakes; let the ABS do the work."
        },
        {
            text: "What does driving a vehicle with anti-lock brakes allow you to do?",
            options: [
                "Pay less attention to the road ahead",
                "Drive at higher speeds",
                "Steer and brake harshly at the same time",
                "Brake harder because it's impossible to skid"
            ],
            correctAnswer: 2,
            explanation: "The main benefit of ABS is that it allows you to steer while braking firmly, helping you avoid obstacles."
        },
        {
            text: "When are anti-lock brakes of most use to you?",
            options: [
                "When you're braking gently",
                "When you're braking harshly",
                "When you're braking on rural roads",
                "When you're braking on a motorway"
            ],
            correctAnswer: 1,
            explanation: "ABS is designed to activate during harsh, emergency braking to prevent wheel lock."
        },
        {
            text: "On what type of road surface may anti-lock brakes not work effectively?",
            options: [
                "Firm",
                "Loose",
                "Smooth",
                "Dry"
            ],
            correctAnswer: 1,
            explanation: "Loose surfaces (gravel, snow) can confuse ABS sensors or extend stopping distances."
        },
        {
            text: "Anti-lock brakes reduce the chances of skidding. When is this particularly important?",
            options: [
                "When you're braking in an emergency",
                "When you're driving on good road surfaces",
                "When you're braking during normal driving",
                "When you're driving down steep hills"
            ],
            correctAnswer: 0,
            explanation: "Preventing skids during emergency braking allows you to maintain steering control."
        },
        {
            text: "You're driving in a built-up area that has traffic-calming measures. What should you do when you approach a road hump?",
            options: [
                "Stop and check both pavements",
                "Move across to the left-hand side of the road",
                "Check your mirror and slow down",
                "Wait for any pedestrians to cross"
            ],
            correctAnswer: 2,
            explanation: "Slow down for road humps to protect your vehicle and suspension. Check mirrors first."
        },
        {
            text: "What should you do when parking your vehicle facing downhill?",
            options: [
                "Turn the steering wheel away from the kerb",
                "Park with two wheels on the kerb",
                "Park close to the bumper of another car",
                "Turn the steering wheel towards the kerb"
            ],
            correctAnswer: 3,
            explanation: "When parking downhill, turn your wheels towards the kerb so that if the car moves, the kerb will act as a chock."
        },
        {
            text: "You're about to go down a steep hill. What should you do to control the speed of your vehicle?",
            options: [
                "Select a high gear and use the brakes carefully",
                "Select a low gear and avoid using the brakes",
                "Select a low gear and use the brakes carefully",
                "Select a high gear and use the brakes firmly"
            ],
            correctAnswer: 2,
            explanation: "Using a low gear provides engine braking, which helps control speed without overheating the brakes."
        },
        {
            text: "What's the main benefit of driving a four-wheel-drive vehicle?",
            options: [
                "Lower fuel consumption",
                "Improved passenger comfort",
                "Shorter stopping distances",
                "Improved grip on the road"
            ],
            correctAnswer: 3,
            explanation: "4WD improves traction, especially on slippery or uneven surfaces."
        },
        {
            text: "What should you do when you're driving in snowy conditions?",
            options: [
                "Be ready to steer sharply",
                "Use sidelights only",
                "Brake firmly and quickly",
                "Brake gently in plenty of time"
            ],
            correctAnswer: 3,
            explanation: "Sudden actions can cause a skid on snow. Brake gently and much earlier than usual."
        },
        {
            text: "What will help when you're trying to move off on snow?",
            options: [
                "Use the handbrake and footbrake together",
                "Use a high engine speed",
                "Use the car's lowest gear",
                "Use a higher gear than normal"
            ],
            correctAnswer: 3,
            explanation: "Starting in a higher gear (like 2nd) reduces the torque at the wheels, making it less likely they will spin."
        },
        {
            text: "What should you clear of ice and snow before starting a journey in freezing weather?",
            options: [
                "The windows",
                "The boot",
                "The aerial",
                "The bumper"
            ],
            correctAnswer: 0,
            explanation: "You must be able to see clearly. Clear all windows, mirrors, lights, and number plates."
        },
        {
            text: "You're turning left on a slippery road. What should you do if the back of your vehicle slides to the right?",
            options: [
                "Steer carefully to the left",
                "Brake firmly and don't turn the steering wheel",
                "Brake firmly and steer to the left",
                "Steer carefully to the right"
            ],
            correctAnswer: 3,
            explanation: "Steer into the skid. If the back slides right, steer right to correct it."
        },
        {
            text: "You're driving in freezing conditions. What should you do when approaching a sharp bend?",
            options: [
                "Firmly use your footbrake",
                "Coast into the bend",
                "Slow down before you reach the bend",
                "Gently apply your handbrake"
            ],
            correctAnswer: 2,
            explanation: "Slow down on the straight before the bend. Braking or accelerating while turning on ice can cause a loss of control."
        },
        {
            text: "What's the main cause of skidding?",
            options: [
                "The driver",
                "The weather",
                "The vehicle",
                "The road"
            ],
            correctAnswer: 0,
            explanation: "Most skids are caused by driver error—driving too fast for the conditions or harsh braking/steering."
        },
        {
            text: "You're driving on an icy road. How can you avoid wheel spin?",
            options: [
                "Drive at a slow speed in as high a gear as possible",
                "Drive in a low gear at all times",
                "Use the handbrake if the wheels start to slip",
                "Brake gently and repeatedly"
            ],
            correctAnswer: 0,
            explanation: "A higher gear keeps revs low and reduces wheel torque, helping maintain grip."
        },
        {
            text: "You're using a contraflow system. What should you do?",
            options: [
                "Increase speed to pass through quickly",
                "Switch lanes at any time to make progress",
                "Follow other motorists closely to avoid long queues",
                "Choose an appropriate lane in good time"
            ],
            correctAnswer: 3,
            explanation: "Get into the correct lane early, as lanes are often narrow and separated by studs in contraflows."
        },
        {
            text: "You're following other vehicles in fog. You have your lights on. What else can you do to reduce the chances of being in a collision?",
            options: [
                "Keep up with the faster vehicles",
                "Use your main beam instead of dipped headlights",
                "Keep close to the vehicle in front",
                "Reduce your speed and increase the gap in front"
            ],
            correctAnswer: 3,
            explanation: "Give yourself more space to stop. Fog makes it harder to judge speed and distance."
        },
        {
            text: "In heavy motorway traffic, the vehicle behind you is following too closely. How can you lower the risk of a collision?",
            options: [
                "Increase your distance from the vehicle in front",
                "Switch on your hazard warning lights",
                "Move onto the hard shoulder and stop",
                "Brake sharply"
            ],
            correctAnswer: 0,
            explanation: "By increasing the gap in front, you can brake more gently if traffic slows, giving the tailgater more time to react."
        },
        {
            text: "Overall stopping distance is made up of thinking distance and braking distance. You're on a good, dry road surface, with good brakes and tyres. What's the typical braking distance from 50 mph?",
            options: [
                "38 meters (125 feet)",
                "14 meters (46 feet)",
                "55 meters (180 feet)",
                "24 meters (80 feet)"
            ],
            correctAnswer: 0,
            explanation: "At 50 mph, braking distance is approximately 38 metres. (Thinking distance is another 15m)."
        },
        {
            text: "What should you do when overtaking a motorcyclist in strong winds?",
            options: [
                "Pass wide",
                "Pass very slowly",
                "Pass immediately",
                "Pass closely"
            ],
            correctAnswer: 0,
            explanation: "Strong winds can blow cyclists and motorcyclists sideways. Give them plenty of room."
        },
        {
            text: "You're on a good, dry road surface. Your brakes and tyres are good. What's the typical overall stopping distance at 40 mph?",
            options: [
                "23 meters (75 feet)",
                "53 meters (175 feet)",
                "96 meters (315 feet)",
                "36 meters (118 feet)"
            ],
            correctAnswer: 3,
            explanation: "At 40 mph: 12m thinking + 24m braking = 36m total."
        },
        {
            text: "You're travelling at 50 mph on a good, dry road. What's your typical overall stopping distance?",
            options: [
                "75 meters (245 feet)",
                "53 meters (175 feet)",
                "96 meters (315 feet)",
                "36 meters (118 feet)"
            ],
            correctAnswer: 1,
            explanation: "At 50 mph: 15m thinking + 38m braking = 53m total."
        },
        {
            text: "You're following a vehicle at a safe distance on a wet road. Another driver overtakes you and pulls into the gap you've left. What should you do?",
            options: [
                "Try to overtake safely as soon as you can",
                "Drop back to regain a safe distance",
                "Stay close to the other vehicle until it moves on",
                "Flash your headlights as a warning"
            ],
            correctAnswer: 1,
            explanation: "Always maintain a safe gap. If someone cuts in, drop back."
        },
        {
            text: "What's the shortest overall stopping distance on a dry road at 60 mph?",
            options: [
                "53 meters (175 feet)",
                "96 meters (315 feet)",
                "58 meters (190 feet)",
                "73 meters (240 feet)"
            ],
            correctAnswer: 3,
            explanation: "At 60 mph: 18m thinking + 55m braking = 73m total."
        },
        {
            text: "In good conditions, what's the typical stopping distance at 70 mph?",
            options: [
                "96 meters (315 feet)",
                "53 meters (175 feet)",
                "60 meters (197 feet)",
                "73 meters (240 feet)"
            ],
            correctAnswer: 0,
            explanation: "At 70 mph: 21m thinking + 75m braking = 96m total."
        },
        {
            text: "Where are you most likely to be affected by side winds?",
            options: [
                "On an open stretch of road",
                "On a long, straight road",
                "On a narrow country lane",
                "On a busy stretch of road"
            ],
            correctAnswer: 0,
            explanation: "Open roads have less shelter from the wind."
        },
        {
            text: "In very hot weather the road surface can become soft. What will this affect?",
            options: [
                "The exhaust emissions",
                "The tyre grip",
                "The suspension",
                "The fuel consumption"
            ],
            correctAnswer: 1,
            explanation: "Soft tarmac (melting) can reduce tyre grip and affect braking and steering."
        },
        {
            text: "You've just gone through deep water. What should you do to make sure your brakes are working properly?",
            options: [
                "Go slowly while gently applying the brakes",
                "Stop for at least an hour to allow them time to dry",
                "Accelerate and keep to a high speed for a short time",
                "Avoid using the brakes at all for a few miles"
            ],
            correctAnswer: 0,
            explanation: "Gently applying the brakes creates heat which dries them out."
        },
        {
            text: "When approaching a right-hand bend, you should keep well to the left. Why is this?",
            imageSrc: "/images/driving-theory/right-bend-sign.png",
            options: [
                "To improve your view of the road",
                "To let faster traffic from behind overtake",
                "To overcome the effect of the road's slope",
                "To be positioned safely if you skid"
            ],
            correctAnswer: 0,
            explanation: "Positioning to the left gives you a better view around a right-hand bend and helps you see hazards earlier."
        },
        {
            text: "In windy conditions, which activity requires extra care?",
            options: [
                "Using the brakes",
                "Turning into a narrow road",
                "Moving off on a hill",
                "Passing pedal cyclists"
            ],
            correctAnswer: 3,
            explanation: "Cyclists are easily blown off course. Give them plenty of room."
        },
        {
            text: "By how much can stopping distances increase in icy conditions?",
            options: [
                "Five times",
                "Two times",
                "Three times",
                "Ten times"
            ],
            correctAnswer: 3,
            explanation: "On ice, tyres have very little grip. Stopping distances can be ten times longer than on dry roads."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 4: Safety Margins...\n");

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
            videoUrl: quiz.videoUrl,
            courseId: course.id,
            questions: {
                create: quiz.questions.map((q) => {
                    const optionsData = typeof q.options[0] === 'object'
                        ? JSON.stringify(q.options)
                        : JSON.stringify(q.options);

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
