const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 2: Alertness Questions
 * 28 questions with images where applicable
 */

const quiz = {
    title: "Lesson 2: Alertness Questions",
    description: "Test your alertness and awareness on the road. Covers observation, anticipation, and dealing with distractions.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "How should you use a satellite navigation system so that it doesn't distract you when you're driving?",
            options: [
                "Only set the destination when you're lost",
                "Choose a voice that you find calming",
                "Turn it off while driving in built-up areas",
                "Stop in a safe place before programming the system"
            ],
            correctAnswer: 3,
            explanation: "Programming a sat-nav while driving is a major distraction. Always pull over in a safe place to set your destination."
        },
        {
            text: "You're waiting to emerge from a junction. The windscreen pillar is restricting your view. What should you be particularly aware of?",
            options: ["Lorries", "Buses", "Motorcyclists", "Coaches"],
            correctAnswer: 2,
            explanation: "Windscreen pillars can easily hide smaller road users like motorcyclists and cyclists. Lean forward or move your head to check around the pillar."
        },
        {
            text: "You're turning right onto a dual carriageway. What should you do before emerging?",
            options: [
                "Check that the central reservation is wide enough for your vehicle",
                "Position your vehicle well to the left of the side road",
                "Make sure that you leave enough room for a vehicle behind",
                "Stop, apply the handbrake and then select a low gear"
            ],
            correctAnswer: 0,
            explanation: "If the central reservation isn't wide enough to protect your entire vehicle, you must wait until both carriageways are clear before crossing."
        },
        {
            text: "What's likely to happen if you use a hands-free phone while you're driving?",
            options: [
                "It will divert your attention",
                "It will increase your concentration",
                "It will reduce your view",
                "It will improve your safety"
            ],
            correctAnswer: 0,
            explanation: "Even hands-free phones can be a distraction. The conversation itself diverts your mental attention from the road."
        },
        {
            text: "What does the term 'blind spot' mean for a driver?",
            options: [
                "An area covered by your right-hand mirror",
                "An area not covered by your mirrors",
                "An area covered by your left-hand mirror",
                "An area not covered by your headlights"
            ],
            correctAnswer: 1,
            explanation: "Blind spots are areas around your vehicle that you cannot see in your mirrors. You must check them by looking around before changing direction."
        },
        {
            text: "You can't see clearly behind when reversing. What should you do?",
            options: [
                "Open the door to look behind",
                "Ask someone to guide you",
                "Look in the nearside mirror",
                "Open the window to look behind"
            ],
            correctAnswer: 1,
            explanation: "If your view is restricted when reversing, ask a reliable person to guide you. It's safer than guessing."
        },
        {
            text: "When do windscreen pillars cause a serious obstruction to your view?",
            options: [
                "When you're driving on a dual carriageway",
                "When you're approaching bends and junctions",
                "When you're approaching a one-way street",
                "When you're driving on a motorway"
            ],
            correctAnswer: 1,
            explanation: "Pillars can block your view of cross-traffic at junctions and hazards on bends. Take extra care to look around them."
        },
        {
            text: "You lose your way on a busy road. What's the best action to take?",
            options: [
                "Check a map, and keep going with the traffic flow",
                "Stop at traffic lights and ask pedestrians",
                "Shout to other drivers to ask them the way",
                "Turn into a side road, stop and check a map"
            ],
            correctAnswer: 3,
            explanation: "Don't try to navigate while driving in busy traffic. Find a safe place to stop, like a side road, to check your route."
        },
        {
            text: "Your vehicle is fitted with a hand-held telephone. What should you do to use the phone?",
            options: [
                "Reduce your speed",
                "Find a safe place to stop",
                "Be particularly careful at junctions",
                "Steer the vehicle with one hand"
            ],
            correctAnswer: 1,
            explanation: "It is illegal to use a hand-held mobile phone while driving. You must find a safe place to stop and switch off your engine first."
        },
        {
            text: "You're travelling along this narrow country road. How should you pass the cyclist?",
            options: [
                "Keep close to them as you pass",
                "Leave them plenty of room as you pass",
                "Sound your horn as you pass",
                "Change down one gear before you pass"
            ],
            correctAnswer: 1,
            explanation: "Cyclists may wobble or swerve to avoid potholes. Always give them as much room as you would a car (at least 1.5 metres)."
        },
        {
            text: "What should you do when moving off from behind a parked car?",
            options: [
                "Use the exterior mirrors only",
                "Give a signal after moving off",
                "Check both interior and exterior mirrors",
                "Look around after moving off"
            ],
            correctAnswer: 2,
            explanation: "Check all mirrors and your blind spot before moving off to ensure it is safe."
        },
        {
            text: "You're driving on a wet road. You have to stop your vehicle in an emergency. What should you do?",
            options: [
                "Give an arm signal",
                "Select reverse gear",
                "Keep both hands on the steering wheel",
                "Apply the handbrake and footbrake together"
            ],
            correctAnswer: 2,
            explanation: "Keep both hands on the wheel to maintain maximum control of the vehicle while braking firmly."
        },
        {
            text: "When may you use a hand-held mobile phone in your car?",
            options: [
                "When driving at less than 30 mph",
                "When receiving a call",
                "When suitably parked",
                "When driving an automatic vehicle"
            ],
            correctAnswer: 2,
            explanation: "You can only use a hand-held phone when your vehicle is safely parked with the engine switched off."
        },
        {
            text: "What's most likely to distract you while you're driving?",
            options: [
                "Using a mobile phone",
                "Using the demisters",
                "Using the windscreen wipers",
                "Checking the mirrors"
            ],
            correctAnswer: 0,
            explanation: "Mobile phones are a major distraction. Using one slows your reaction time significantly."
        },
        {
            text: "Why should you switch your lights on when it first starts to get dark?",
            options: [
                "Because the street lights are lit",
                "So that you blend in with other drivers",
                "To make your dials easier to see",
                "So others can see you more easily"
            ],
            correctAnswer: 3,
            explanation: "Lights help other road users see you, not just help you see where you're going."
        },
        {
            text: "You're on a long motorway journey. What should you do if you start to feel sleepy?",
            options: [
                "Play some loud music",
                "Stop on the hard shoulder for a rest",
                "Drive faster to complete your journey sooner",
                "Leave the motorway and stop in a safe place"
            ],
            correctAnswer: 3,
            explanation: "Fatigue kills. If you feel tired, leave the motorway at the next exit or service station and take a break."
        },
        {
            text: "What may happen if you hang objects from your interior mirror?",
            options: [
                "Your view could be obstructed",
                "Your sun visor might get tangled",
                "Your radio reception might be affected",
                "Your windscreen would mist up"
            ],
            correctAnswer: 0,
            explanation: "Objects hanging from the mirror can block your view of hazards and distract you."
        },
        {
            text: "You're waiting to turn right at the end of a road. Your view is obstructed by parked vehicles. What should you do?",
            options: [
                "Stop and then move forward slowly and carefully for a clear view",
                "Turn your vehicle around immediately and find another junction to use",
                "Move quickly to where you can see so you only block traffic from one direction",
                "Wait for a pedestrian to let you know when it's safe for you to emerge"
            ],
            correctAnswer: 0,
            explanation: "Creep forward slowly until you can see clearly. This allows you to check for traffic without fully exposing your vehicle to danger."
        },
        {
            text: "When you see a hazard ahead, you should use the mirrors. Why is this?",
            options: [
                "Because you'll need to accelerate out of danger",
                "Because you'll need to brake sharply to a stop",
                "To check what's happening on the road ahead",
                "To assess how your actions will affect following traffic"
            ],
            correctAnswer: 3,
            explanation: "Before you brake or change direction, check your mirrors to see how your actions will affect drivers behind you."
        },
        {
            text: "You're following a large vehicle. Why should you stay a safe distance behind it?",
            options: [
                "You'll keep out of the wind better",
                "You'll allow the driver to see you in their mirrors",
                "You'll help the large vehicle to stop more easily",
                "You'll be able to corner more quickly"
            ],
            correctAnswer: 1,
            explanation: "Staying back allows the driver of the large vehicle to see you in their mirrors. If you're too close, you're in their blind spot."
        },
        {
            text: "Which of the following should you do before stopping?",
            options: [
                "Use the mirrors",
                "Sound the horn",
                "Flash the headlights",
                "Select a higher gear"
            ],
            correctAnswer: 0,
            explanation: "Always check your mirrors before slowing down or stopping to ensure it's safe to do so."
        },
        {
            text: "What should you do when you're approaching traffic lights that have been on green for some time?",
            options: [
                "Be ready to stop",
                "Brake hard",
                "Accelerate hard",
                "Maintain your speed"
            ],
            correctAnswer: 0,
            explanation: "Lights that have been green for a while may change to amber soon. Anticipate this and be prepared to stop smoothly."
        },
        {
            text: "Why are these yellow lines painted across the road?",
            imageSrc: "/images/driving-theory/yellow-lines-road.png",
            options: [
                "To make you aware of your speed",
                "To help you choose the correct lane",
                "To help you keep the correct separation distance",
                "To tell you the distance to the roundabout"
            ],
            correctAnswer: 0,
            explanation: "These lines are often found on the approach to roundabouts or hazards to encourage you to reduce your speed."
        },
        {
            text: "Your mobile phone rings while you're travelling. What should you do?",
            options: [
                "Stop immediately",
                "Answer it immediately",
                "Pull up at the nearest kerb",
                "Ignore it"
            ],
            correctAnswer: 3,
            explanation: "Ignore the call. Stopping immediately or pulling up at the nearest kerb might be dangerous. Find a safe place to stop later to return the call."
        },
        {
            text: "What does this road marking mean?",
            imageSrc: "/images/driving-theory/road-marking-arrow.png",
            options: [
                "It's safe to overtake",
                "Overtaking traffic should move back to the left",
                "The road bends to the left",
                "Traffic should use the hard shoulder"
            ],
            correctAnswer: 1,
            explanation: "The arrow indicates that you should get back into the left-hand lane, usually because a hazard or double white lines are ahead."
        },
        {
            text: "In which of these situations should you avoid overtaking?",
            options: [
                "On a 30 mph road",
                "Just after a bend",
                "In a one-way street",
                "Approaching a dip in the road"
            ],
            correctAnswer: 3,
            explanation: "A dip in the road can hide oncoming vehicles. Never overtake unless you can see the road is clear ahead."
        },
        {
            text: "What should you do as you approach this bridge?",
            imageSrc: "/images/driving-theory/bridge-approach.png",
            options: [
                "Move to the right",
                "Keep to 30 mph",
                "Slow down",
                "Change gear"
            ],
            correctAnswer: 2,
            explanation: "The sign warns of oncoming vehicles in the middle of the road due to the narrow bridge. Slow down and be prepared to give way."
        },
        {
            text: "What should you do before making a U-turn?",
            options: [
                "Look over your shoulder for a final check",
                "Select a higher gear than normal",
                "Give an arm signal as well as using your indicators",
                "Check signs to see that U-turns are permitted"
            ],
            correctAnswer: 0,
            explanation: "A U-turn involves swinging out into the road. Always check your blind spot over your shoulder before turning."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 2: Alertness Questions...\n");

    const course = await prisma.course.findUnique({
        where: { slug: quiz.courseSlug }
    });

    if (!course) {
        console.error("Course not found!");
        return;
    }

    const existingQuiz = await prisma.quiz.findFirst({
        where: { title: quiz.title }
    });

    if (existingQuiz) {
        console.log(`Quiz "${quiz.title}" already exists. Skipping...`);
        return;
    }

    const createdQuiz = await prisma.quiz.create({
        data: {
            title: quiz.title,
            description: quiz.description,
            isPremium: quiz.isPremium,
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
