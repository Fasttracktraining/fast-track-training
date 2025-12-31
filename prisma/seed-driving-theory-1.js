const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 1: Attitude Questions
 * 39 questions with images where applicable
 * Images are stored in /public/images/driving-theory/
 */

const quiz = {
    title: "Lesson 1: Attitude Questions",
    description: "Learn about safe driving attitudes, following distances, and road courtesy. This covers essential topics like the two-second rule, pedestrian crossings, and how to respond to other road users.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "What style of driving causes increased risk to everyone?",
            options: ["Responsible", "Defensive", "Considerate", "Competitive"],
            correctAnswer: 3,
            explanation: "Competitive driving increases risk as it encourages dangerous overtaking, tailgating, and aggressive maneuvers."
        },
        {
            text: "After refueling your vehicle, what should you do to avoid spillage?",
            options: [
                "Check that your filler cap is securely fastened",
                "Check that you've used a locking filler cap",
                "Check that your tank is only three-quarters full",
                "Check that your fuel gauge is working"
            ],
            correctAnswer: 0,
            explanation: "A loose filler cap can cause fuel to spill, which is dangerous and harmful to the environment."
        },
        {
            text: "What can a loose filler cap on your diesel fuel tank cause?",
            options: [
                "It can increase the level of exhaust emissions",
                "It can make the engine difficult to start",
                "It can improve your vehicle's fuel consumption",
                "It can make the roads slippery for other road users"
            ],
            correctAnswer: 3,
            explanation: "Diesel fuel is very slippery and if it leaks onto the road, it can be extremely dangerous for other road users, especially motorcyclists."
        },
        {
            text: "You're driving a slow-moving vehicle on a narrow, winding road. What should you do?",
            options: [
                "Pull in when you can, to let following vehicles overtake",
                "Wave following vehicles past you if you think they can overtake quickly",
                "Give a left signal when it's safe for vehicles to overtake you",
                "Keep well out to stop vehicles overtaking dangerously"
            ],
            correctAnswer: 0,
            explanation: "If you're driving a slow-moving vehicle, it's courteous to pull in safely when you can to allow faster traffic to pass."
        },
        {
            text: "You're driving at night on an unlit road, following another vehicle. What should you do?",
            options: [
                "Flash your headlights",
                "Use dipped headlights",
                "Use full-beam headlights",
                "Switch off your headlights"
            ],
            correctAnswer: 1,
            explanation: "Use dipped headlights when following another vehicle to avoid dazzling the driver ahead through their mirrors."
        },
        {
            text: "In which conditions should you leave at least a two-second gap between your vehicle and the one in front?",
            imageSrc: "/images/driving-theory/two-second-gap.png",
            options: ["Foggy", "Damp", "Dry", "Wet"],
            correctAnswer: 2,
            explanation: "The two-second rule is the minimum gap in dry conditions. In wet conditions, you should double this to four seconds."
        },
        {
            text: "Which instrument-panel warning light would show that headlights are on full beam?",
            options: [
                { text: "Full beam indicator", imageSrc: "/images/driving-theory/full-beam.png" },
                { text: "Left indicator", imageSrc: "/images/driving-theory/left-indicator.png" },
                { text: "Brake warning", imageSrc: "/images/driving-theory/brake-warning.png" },
                { text: "Hazard warning", imageSrc: "/images/driving-theory/hazard-triangle.png" }
            ],
            correctAnswer: 0,
            explanation: "The full-beam indicator is a blue symbol showing horizontal light rays. It reminds you to dip your headlights when necessary."
        },
        {
            text: "You're approaching a red light at a puffin crossing. Pedestrians are on the crossing. When will the red light change?",
            options: [
                "When a driver from the opposite direction reaches the crossing",
                "When the pedestrians push the button on the far side of the crossing",
                "When you start to edge forward onto the crossing",
                "When the pedestrians have cleared the crossing"
            ],
            correctAnswer: 3,
            explanation: "Puffin crossings have sensors that detect when pedestrians have finished crossing. The lights won't change until the crossing is clear."
        },
        {
            text: "A vehicle pulls out in front of you at a junction. What should you do?",
            options: [
                "Flash your headlights and drive up close behind",
                "Slow down and be ready to stop",
                "Accelerate past it immediately",
                "Swerve past it and sound your horn"
            ],
            correctAnswer: 1,
            explanation: "Stay calm and slow down. Aggressive reactions like tailgating or sounding the horn can escalate the situation and cause accidents."
        },
        {
            text: "You're approaching a zebra crossing. Pedestrians are waiting to cross. What should you do?",
            options: [
                "Wave at them to cross the road",
                "Slow down and prepare to stop",
                "Give way to the elderly and infirm only",
                "Use your headlights to indicate they can cross"
            ],
            correctAnswer: 1,
            explanation: "Slow down and be ready to stop for pedestrians. Don't wave them across as other vehicles may not stop."
        },
        {
            text: "What should you do when you're overtaking a horse and rider?",
            options: [
                "Flash your headlights as a warning",
                "Go past as quickly as possible",
                "Go past slowly and carefully",
                "Sound your horn as a warning"
            ],
            correctAnswer: 2,
            explanation: "Horses can be easily frightened by vehicles. Pass slowly and give them plenty of room."
        },
        {
            text: "What should you do when a person herding sheep asks you to stop?",
            options: [
                "Stop and switch off your engine",
                "Try to get past quickly",
                "Continue on but drive slowly",
                "Ignore them as they have no authority"
            ],
            correctAnswer: 0,
            explanation: "Stop and switch off your engine. Animals can be frightened by moving vehicles and engine noise."
        },
        {
            text: "There's a bus lane on your left. The signs show no times of operation. What does this mean?",
            imageSrc: "/images/driving-theory/bus-lane.png",
            options: [
                "The lane is only in operation at peak times",
                "The lane isn't in operation",
                "The lane is in operation 24 hours a day",
                "The lane is only in operation in daylight hours"
            ],
            correctAnswer: 2,
            explanation: "If no times are shown on the sign, the bus lane is in operation 24 hours a day."
        },
        {
            text: "You're driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?",
            options: [
                "Wave the driver behind to overtake when it's safe",
                "Move closer to the car ahead, so the driver behind has no room to overtake",
                "Accelerate to get away from the driver behind",
                "Keep a steady course and allow the driver behind to overtake"
            ],
            correctAnswer: 3,
            explanation: "Keep a steady course and allow them to overtake. It's not your job to enforce speed limits on other drivers."
        },
        {
            text: "You're waiting in a traffic queue at night. How can you avoid dazzling drivers behind you?",
            options: [
                "Use the footbrake only",
                "Use the clutch with the accelerator",
                "Use the parking brake with the footbrake",
                "Use the parking brake only"
            ],
            correctAnswer: 3,
            explanation: "Using the parking brake alone means your brake lights won't stay on, preventing dazzle for the driver behind."
        },
        {
            text: "You're driving along this road. The red van cuts in close in front of you. What should you do?",
            imageSrc: "/images/driving-theory/red-van-cutting.png",
            options: [
                "Drop back to leave the correct separation distance",
                "Flash your headlights several times",
                "Give a long blast on the horn",
                "Accelerate to get closer to the red van"
            ],
            correctAnswer: 0,
            explanation: "Stay calm and drop back to regain a safe following distance. Don't react aggressively."
        },
        {
            text: "You're driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
            options: [
                "Hold your speed and sound your horn",
                "Slow down and let the vehicle turn",
                "Drive on, keeping to the left",
                "Overtake on the right of it"
            ],
            correctAnswer: 1,
            explanation: "Large vehicles often need to swing out in the opposite direction before turning. Give them room and wait."
        },
        {
            text: "You're driving on a clear night. There's a steady stream of oncoming traffic. The national speed limit applies. Which lights should you use?",
            options: [
                "Full-beam headlights",
                "Fog lights",
                "Dipped headlights",
                "Sidelights"
            ],
            correctAnswer: 2,
            explanation: "Use dipped headlights to avoid dazzling oncoming drivers. Full beam would blind them."
        },
        {
            text: "You're in a line of traffic. The driver behind you is following very closely. What action should you take?",
            options: [
                "Ignore the following driver and continue to travel within the speed limit",
                "Move over to a position just left of the centre line of the road",
                "Slow down, gradually increasing the gap between you and the vehicle in front",
                "Signal left and wave the following driver past"
            ],
            correctAnswer: 2,
            explanation: "By increasing your gap from the vehicle ahead, you can slow down more gradually if needed, reducing the risk of being rear-ended."
        },
        {
            text: "At a puffin crossing, which colour follows the green signal?",
            options: [
                "Flashing amber",
                "Steady amber",
                "Steady red",
                "Flashing green"
            ],
            correctAnswer: 1,
            explanation: "Puffin crossings go from green to steady amber, then red. They don't have a flashing amber phase like pelican crossings."
        },
        {
            text: "The conditions are good and dry. When should you use the 'two-second rule'?",
            options: [
                "When checking your gap from the vehicle in front",
                "Before using the 'Mirrors - Signal - Manoeuvre' routine",
                "When traffic lights change to green",
                "Before restarting the engine after it has stalled"
            ],
            correctAnswer: 0,
            explanation: "The two-second rule helps you keep a safe following distance from the vehicle ahead in dry conditions."
        },
        {
            text: "You're approaching an unmarked crossroads. How should you deal with this type of junction?",
            options: [
                "Slow down and keep to the right",
                "Slow down and look both ways",
                "Accelerate and keep to the middle",
                "Accelerate and look to the left"
            ],
            correctAnswer: 1,
            explanation: "At unmarked crossroads, no one has priority. Slow down and look carefully in all directions."
        },
        {
            text: "When should you flash your headlights at other road users?",
            options: [
                "When showing that you're about to turn",
                "When showing that you're giving way",
                "When telling them that you have right of way",
                "When letting them know that you're there"
            ],
            correctAnswer: 3,
            explanation: "Only flash your headlights to let others know you're there. Never assume it means 'go ahead'."
        },
        {
            text: "You're driving at the legal speed limit. A vehicle comes up quickly behind you, flashing its headlights. What should you do?",
            options: [
                "Accelerate to make a gap behind you",
                "Touch the brakes sharply to show your brake lights",
                "Maintain your speed to prevent the vehicle from overtaking",
                "Allow the vehicle to overtake"
            ],
            correctAnswer: 3,
            explanation: "Let them overtake safely. It's not your responsibility to prevent others from speeding."
        },
        {
            text: "At which type of crossing are cyclists allowed to ride across with pedestrians?",
            options: ["Toucan", "Zebra", "Puffin", "Pelican"],
            correctAnswer: 0,
            explanation: "Toucan crossings are designed for both pedestrians and cyclists - 'two can' cross together."
        },
        {
            text: "You wish to turn right ahead. Why should you take up the correct position in good time?",
            options: [
                "To give a better view into the road that you're joining",
                "To allow drivers to pass you on the right",
                "To allow other drivers to pull out in front of you",
                "To help other road users know what you intend to do"
            ],
            correctAnswer: 3,
            explanation: "Positioning yourself correctly helps other road users anticipate your intentions."
        },
        {
            text: "You're in a one-way street and want to turn right. There are two lanes. Where should you position your vehicle?",
            options: [
                "In the right-hand lane",
                "In the left-hand lane",
                "Just left of the centre line",
                "In either lane, depending on the traffic"
            ],
            correctAnswer: 0,
            explanation: "In a one-way street, position yourself in the right-hand lane when turning right."
        },
        {
            text: "What should you use your horn for?",
            options: [
                "To alert others to your presence",
                "To signal your annoyance",
                "To greet other road users",
                "To allow you right of way"
            ],
            correctAnswer: 0,
            explanation: "The horn should only be used to warn others of your presence, never to express frustration."
        },
        {
            text: "On a road where trams operate, which of these vehicles will be most at risk from the tram rails?",
            options: ["Buses", "Cars", "Lorries", "Cycles"],
            correctAnswer: 3,
            explanation: "Cyclists are at most risk because thin bicycle wheels can get caught in tram rails."
        },
        {
            text: "Who should obey diamond-shaped traffic signs?",
            imageSrc: "/images/driving-theory/diamond-sign.png",
            options: [
                "Bus drivers",
                "Tram drivers",
                "Lorry drivers",
                "Taxi drivers"
            ],
            correctAnswer: 1,
            explanation: "Diamond-shaped signs give instructions to tram drivers only."
        },
        {
            text: "What type of emergency vehicle is fitted with a green flashing beacon?",
            options: ["Ambulance", "Road gritter", "Doctor's car", "Fire engine"],
            correctAnswer: 2,
            explanation: "Doctors responding to emergencies use green flashing beacons. Give way to them if possible."
        },
        {
            text: "Which vehicle will use a blue flashing beacon?",
            options: [
                "Motorway maintenance",
                "Bomb disposal",
                "Breakdown recovery",
                "Snow plough"
            ],
            correctAnswer: 1,
            explanation: "Bomb disposal vehicles and other emergency services use blue flashing beacons."
        },
        {
            text: "You're being followed by an ambulance showing flashing blue lights. What should you do?",
            options: [
                "Pull over as soon as it's safe to do so",
                "Accelerate hard to get away from it",
                "Maintain your speed and course",
                "Brake harshly and stop well out into the road"
            ],
            correctAnswer: 0,
            explanation: "Pull over safely when you can to let the ambulance pass. Don't panic or brake suddenly."
        },
        {
            text: "A long, heavily laden lorry is taking a long time to overtake you. What should you do?",
            options: ["Slow down", "Hold your speed", "Change direction", "Speed up"],
            correctAnswer: 0,
            explanation: "Slow down to help the lorry complete its overtake more quickly and safely."
        },
        {
            text: "What's the minimum time gap you should leave when following a vehicle on a wet road?",
            options: ["Three seconds", "Two seconds", "One second", "Four seconds"],
            correctAnswer: 3,
            explanation: "In wet conditions, stopping distances are doubled. Use the four-second rule instead of two."
        },
        {
            text: "Why is it unwise to follow this vehicle too closely?",
            imageSrc: "/images/driving-theory/lorry-rear.png",
            options: [
                "Your view ahead will be reduced",
                "Your view ahead will be increased",
                "Your brakes will overheat",
                "Your engine will overheat"
            ],
            correctAnswer: 0,
            explanation: "Following large vehicles too closely severely limits your view of the road ahead, reducing your ability to react to hazards."
        },
        {
            text: "What does 'tailgating' mean?",
            options: [
                "Driving with rear fog lights on",
                "Reversing into a parking space",
                "Following another vehicle too closely",
                "Using the rear door of a hatchback car"
            ],
            correctAnswer: 2,
            explanation: "Tailgating is dangerous as it doesn't give you enough time to react if the vehicle ahead brakes suddenly."
        },
        {
            text: "Why should you never wave people across at pedestrian crossings?",
            options: [
                "They may not be ready to cross",
                "They may not be looking",
                "Another vehicle may be coming",
                "It's safer for you to carry on"
            ],
            correctAnswer: 2,
            explanation: "Another vehicle on the other side of the road or behind you may not stop. Let pedestrians decide when it's safe."
        },
        {
            text: "At a pelican crossing, what must you do when the amber light is flashing?",
            options: [
                "Stop and wait for the red light",
                "Give way to pedestrians already on the crossing",
                "Stop and wait for the green light",
                "Give way to pedestrians waiting to cross"
            ],
            correctAnswer: 1,
            explanation: "During the flashing amber phase, you must give way to pedestrians still on the crossing, but may proceed if the crossing is clear."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 1: Attitude Questions...\n");

    // First, find the Driving Theory course
    let course = await prisma.course.findUnique({
        where: { slug: quiz.courseSlug }
    });

    if (!course) {
        console.log("Creating Driving Theory course...");
        course = await prisma.course.create({
            data: {
                title: "Driving Theory",
                slug: "driving-theory",
                description: "Master the DVSA Driving Theory Test with comprehensive lessons and practice tests."
            }
        });
    }

    // Check if quiz already exists
    const existingQuiz = await prisma.quiz.findFirst({
        where: { title: quiz.title }
    });

    if (existingQuiz) {
        console.log(`Quiz "${quiz.title}" already exists. Skipping...`);
        return;
    }

    // Create the quiz with questions
    const createdQuiz = await prisma.quiz.create({
        data: {
            title: quiz.title,
            description: quiz.description,
            isPremium: quiz.isPremium,
            courseId: course.id,
            questions: {
                create: quiz.questions.map((q, index) => {
                    // Handle options - convert to JSON string
                    const optionsData = typeof q.options[0] === 'object'
                        ? JSON.stringify(q.options)  // Image-based options
                        : JSON.stringify(q.options); // Text-only options

                    return {
                        text: q.imageSrc ? `${q.text}\n[Image: ${q.imageSrc}]` : q.text,
                        options: optionsData,
                        correctAnswer: q.correctAnswer,
                        explanation: q.explanation || null
                    };
                })
            }
        },
        include: {
            questions: true
        }
    });

    console.log(`✅ Created quiz: ${createdQuiz.title}`);
    console.log(`   📝 ${createdQuiz.questions.length} questions added`);
    console.log(`   📚 Linked to course: ${course.title}`);
}

main()
    .catch((e) => {
        console.error("❌ Error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
