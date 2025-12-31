const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 9: Motorway Rules
 * 58 questions
 */

const quiz = {
    title: "Lesson 9: Motorway Rules",
    description: "Learn the specific rules and regulations for driving on motorways.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "When may you stop on the hard shoulder of a motorway?",
            options: [
                "To pick up a hitchhiker",
                "If you miss the exit that you wanted",
                "If you feel tired and need to rest",
                "In an emergency"
            ],
            correctAnswer: 3,
            explanation: "Only stop on the hard shoulder in a genuine emergency or if told to do so by the police."
        },
        {
            text: "You're on a motorway. There's a contraflow system ahead. What would you expect to find?",
            options: [
                "Speed humps",
                "Temporary traffic lights",
                "Wider lanes than normal",
                "Lower speed limits"
            ],
            correctAnswer: 3,
            explanation: "Speed limits are often reduced in contraflow systems for safety."
        },
        {
            text: "You're towing a trailer along a three-lane motorway. When may you use the right-hand lane?",
            options: [
                "When large vehicles are in the left and center lanes",
                "When there's slow-moving traffic",
                "When there are lane closures",
                "When you can maintain a high speed"
            ],
            correctAnswer: 2,
            explanation: "Towing vehicles are restricted from the right-hand lane unless there are lane closures."
        },
        {
            text: "Your vehicle breaks down on the hard shoulder of a motorway. You need to use your mobile phone to call for help. What should you do?",
            options: [
                "Stand at the rear of the vehicle while making the call",
                "Open the bonnet to help the emergency services know you've broken down",
                "Check your location from the marker posts on the left",
                "Phone a friend and ask them to come and collect you"
            ],
            correctAnswer: 2,
            explanation: "Marker posts help emergency services locate you accurately."
        },
        {
            text: "What restrictions apply to new drivers holding a provisional driving licence?",
            options: [
                "They can't drive with more than one passenger",
                "They can't drive at night",
                "They can't drive over 30 mph",
                "They can't drive unaccompanied"
            ],
            correctAnswer: 3,
            explanation: "Provisional licence holders must be accompanied by a qualified driver."
        },
        {
            text: "You're driving on the motorway. Well before you reach your intended exit, where should you position your vehicle?",
            options: [
                "In the middle lane",
                "In the left-hand lane",
                "On the hard shoulder",
                "In any lane"
            ],
            correctAnswer: 1,
            explanation: "Move to the left-hand lane in good time."
        },
        {
            text: "You're driving on a motorway. The car in front shows its hazard warning lights for a short time. What does this tell you?",
            options: [
                "The driver wants you to overtake",
                "Traffic ahead is slowing or stopping suddenly",
                "The other car is going to change lanes",
                "There's a police speed check ahead"
            ],
            correctAnswer: 1,
            explanation: "Hazard lights can be provided to warn following traffic of slow or stopped traffic ahead."
        },
        {
            text: "Why is it particularly important to carry out a check on your vehicle before making a long motorway journey?",
            options: [
                "The road surface will wear down the tyres faster",
                "Continuous high speeds increase the risk of your vehicle breaking down",
                "You'll have to do more harsh braking on motorways",
                "Motorway service stations don't deal with breakdowns"
            ],
            correctAnswer: 1,
            explanation: "Continuous high speed puts more strain on the vehicle."
        },
        {
            text: "Your vehicle has broken down on a motorway. You aren't able to stop on the hard shoulder. What should you do?",
            options: [
                "Stand behind your vehicle to warn others",
                "Attempt to repair your vehicle quickly",
                "Switch on your hazard warning lights",
                "Stop following traffic and ask for help"
            ],
            correctAnswer: 2,
            explanation: "Warn others immediately with hazard lights."
        },
        {
            text: "You're driving on a motorway. By mistake, you go past the exit that you wanted to take. What should you do?",
            options: [
                "Carefully reverse in the left-hand lane",
                "Carefully reverse on the hard shoulder",
                "Make a U-turn at a gap in the central reservation",
                "Carry on to the next exit"
            ],
            correctAnswer: 3,
            explanation: "Never reverse or U-turn on a motorway. Go to the next exit."
        },
        {
            text: "Your car gets a puncture while you're driving on the motorway. You get it onto the hard shoulder. What should you do?",
            options: [
                "Use an emergency telephone and call for help",
                "Try to wave down another vehicle for help",
                "Only change the wheel if you have a passenger to help you",
                "Carefully change the wheel yourself"
            ],
            correctAnswer: 0,
            explanation: "Do not attempt to change a wheel on the hard shoulder yourself. Call for help."
        },
        {
            text: "You're driving on a motorway and have to slow down quickly due to a hazard ahead. How can you warn drivers behind of the hazard?",
            options: [
                "Switch on your headlights",
                "Switch on your hazard warning lights",
                "Flash your headlights",
                "Sound your horn"
            ],
            correctAnswer: 1,
            explanation: "Use hazard lights briefly to warn of sudden slowing."
        },
        {
            text: "What should the left-hand lane of a motorway be used for?",
            imageSrc: "/images/driving-theory/motorway-traffic-lanes.png",
            options: [
                "Overtaking slower traffic in the other lanes",
                "Breakdowns and emergencies only",
                "Normal driving",
                "Slow vehicles only"
            ],
            correctAnswer: 2,
            explanation: "The left lane is for normal driving. Overtake on the right."
        },
        {
            text: "You're towing a trailer on a motorway. What's the speed limit for a car towing a trailer on this road?",
            options: [
                "40 mph",
                "60 mph",
                "50 mph",
                "70 mph"
            ],
            correctAnswer: 1,
            explanation: "The limit is 60 mph for towing vehicles on motorways."
        },
        {
            text: "You're travelling along a motorway and feel tired. Where should you stop to rest?",
            options: [
                "On a slip road",
                "On the central reservation",
                "On the hard shoulder",
                "At the nearest service area"
            ],
            correctAnswer: 3,
            explanation: "Take a break at a service area."
        },
        {
            text: "On a three-lane motorway, what does this sign mean?",
            imageSrc: "/images/driving-theory/contraflow-sign.png",
            options: [
                "Use the hard shoulder only",
                "Use all the lanes, including the hard shoulder",
                "Use the three right-hand lanes only",
                "Use any lane except the hard shoulder"
            ],
            correctAnswer: 3,
            explanation: "This usually refers to a 'End of Motorway' or lane restriction sign."
        },
        {
            text: "You're on a three-lane motorway. A red cross is showing above the hard shoulder and mandatory speed limits above all other lanes. What does this mean?",
            imageSrc: "/images/driving-theory/smart-motorway-red-cross.png",
            options: [
                "The hard shoulder has a speed limit of 50 mph",
                "The hard shoulder can be used as a normal running lane",
                "The hard shoulder can be used as a rest area if you feel tired",
                "The hard shoulder is for emergency or breakdown use only"
            ],
            correctAnswer: 3,
            explanation: "Red cross means the lane is closed (or hard shoulder is not for use)."
        },
        {
            text: "You're on a motorway and there are red flashing lights above every lane. What must you do?",
            options: [
                "Stop and wait",
                "Slow down and watch for further signals",
                "Leave at the next exit",
                "Pull onto the hard shoulder"
            ],
            correctAnswer: 0,
            explanation: "Flashing red lights mean you must not proceed."
        },
        {
            text: "Unless signs show otherwise, what's the national speed limit for a car or motorcycle on a motorway?",
            options: [
                "50 mph",
                "70 mph",
                "60 mph",
                "80 mph"
            ],
            correctAnswer: 1,
            explanation: "70 mph is the national limit."
        },
        {
            text: "When may you stop on a motorway?",
            options: [
                "If you have to read a map",
                "If your mobile phone rings",
                "In an emergency or breakdown",
                "When you're tired and need a rest"
            ],
            correctAnswer: 2,
            explanation: "Only stop in an emergency."
        },
        {
            text: "What's used to reduce traffic bunching on a motorway?",
            options: [
                "Lane closures",
                "Variable speed limits",
                "Contraflow systems",
                "National speed limits"
            ],
            correctAnswer: 1,
            explanation: "Variable limits control the flow of traffic."
        },
        {
            text: "You shouldn't normally travel on the hard shoulder of a motorway. When can you use it?",
            options: [
                "When signs direct you to",
                "When taking the next exit",
                "When traffic is stopped",
                "When traffic is slow moving"
            ],
            correctAnswer: 0,
            explanation: "Only use it if signs (like in a smart motorway) permit it."
        },
        {
            text: "Why can it be an advantage for traffic speed to stay constant over a longer distance?",
            options: [
                "Your overall journey time will normally improve",
                "You'll be able to use more direct routes",
                "You'll use far more fuel",
                "You'll do more stop-start driving"
            ],
            correctAnswer: 0,
            explanation: "Smoother flow reduces congestion and journey times."
        },
        {
            text: "You're using a smart motorway. What happens when it's operating?",
            options: [
                "The speed limit is always 30 mph",
                "You must obey the speed limits shown",
                "Speed limits above lanes are advisory",
                "The national speed limit will apply"
            ],
            correctAnswer: 1,
            explanation: "Mandatory speed limits (in a red circle) must be obeyed."
        },
        {
            text: "What's the aim of a smart motorway?",
            options: [
                "To reduce rest stops",
                "To reduce congestion",
                "To prevent tailgating",
                "To prevent overtaking"
            ],
            correctAnswer: 1,
            explanation: "Smart motorways manage capacity to reduce congestion."
        },
        {
            text: "You're on a smart motorway. A mandatory speed limit is displayed above the hard shoulder. What does this mean?",
            imageSrc: "/images/driving-theory/smart-motorway-gantry-50.png",
            options: [
                "You shouldn't travel in this lane",
                "The hard shoulder can be used as a running lane",
                "You can park on the hard shoulder if you feel tired",
                "You can pull up in this lane to answer a mobile phone"
            ],
            correctAnswer: 1,
            explanation: "If a limit is shown, the hard shoulder is open as a running lane."
        },
        {
            text: "You're on a motorway. A red cross is displayed above the hard shoulder. What does this mean?",
            options: [
                "Use this lane as a running lane",
                "Pull up in this lane to answer your mobile phone",
                "You shouldn't travel in this lane",
                "This lane can be used if you need a rest"
            ],
            correctAnswer: 2,
            explanation: "Red cross means the lane is closed."
        },
        {
            text: "Traffic officers operate on motorways and some primary routes in England. What are they authorised to do?",
            options: [
                "Issue fixed penalty notices",
                "Stop and arrest drivers who break the law",
                "Stop and direct anyone on a motorway",
                "Repair broken-down vehicles on the motorway"
            ],
            correctAnswer: 2,
            explanation: "They manage traffic incidents."
        },
        {
            text: "On a motorway, what's an emergency refuge area used for?",
            options: [
                "For a police patrol to park and watch traffic",
                "For construction and road workers to store emergency equipment",
                "In cases of emergency or breakdown",
                "If you think you'll be involved in a road rage incident"
            ],
            correctAnswer: 2,
            explanation: "Safe areas on smart motorways for emergencies."
        },
        {
            text: "What basic rule applies when you're using a motorway?",
            options: [
                "Try to keep above 50 mph to prevent congestion",
                "Overtake on the side that's clearest",
                "Use the lane that has the least traffic",
                "Keep to the left-hand lane unless overtaking"
            ],
            correctAnswer: 3,
            explanation: "Keep left unless overtaking."
        },
        {
            text: "You're travelling along a motorway. When are you allowed to overtake on the left?",
            options: [
                "When in queues and traffic to your right is moving more slowly than you are",
                "When you warn drivers behind by signaling left",
                "When you can see well ahead that the hard shoulder is clear",
                "When the traffic in the right-hand lane is signaling right"
            ],
            correctAnswer: 0,
            explanation: "In congested traffic, you may pass on the left if your lane is moving faster."
        },
        {
            text: "You're travelling in the left-hand lane of a three-lane motorway. How should you react to traffic joining from a slip road?",
            options: [
                "Switch on your hazard warning lights",
                "Race the other vehicles",
                "Move to another lane",
                "Maintain a steady speed"
            ],
            correctAnswer: 2,
            explanation: "Move to the middle lane if safe to allow traffic to join."
        },
        {
            text: "When are you allowed to stop on a motorway?",
            options: [
                "When you're signaled to do so by flashing red lights",
                "When you wish to pick up hitchhikers",
                "When you need to use a mobile telephone",
                "When you need to walk and get fresh air"
            ],
            correctAnswer: 0,
            explanation: "Stop if signals (red lights) tell you to."
        },
        {
            text: "You're in the right-hand lane of a three-lane motorway. What do these overhead signs mean?",
            imageSrc: "/images/driving-theory/motorway-speed-limit-50.png",
            options: [
                "Use the hard shoulder until you've passed the hazard",
                "Move to the left and reduce your speed to 50 mph",
                "There are road works 50 meters (55 yards) ahead",
                "Leave the motorway at the next exit"
            ],
            correctAnswer: 1,
            explanation: "Arrows would indicate moving lanes, and the number is the new limit."
        },
        {
            text: "What should you use the hard shoulder of a motorway for?",
            options: [
                "Stopping when you're tired",
                "Joining the motorway",
                "Stopping in an emergency",
                "Leaving the motorway"
            ],
            correctAnswer: 2,
            explanation: "Emergencies only."
        },
        {
            text: "What's the right-hand lane used for on a three-lane motorway?",
            options: [
                "Overtaking",
                "Emergency vehicles only",
                "Vehicles towing trailers",
                "Coaches only"
            ],
            correctAnswer: 0,
            explanation: "Overtaking."
        },
        {
            text: "What should you do immediately after joining a motorway?",
            options: [
                "Keep in the left-hand lane",
                "Try to overtake",
                "Re-adjust your mirrors",
                "Position your vehicle in the center lane"
            ],
            correctAnswer: 0,
            explanation: "Stay in the left lane until you adjust to the speed."
        },
        {
            text: "What should you do when driving or riding along a motorway?",
            options: [
                "Look much further ahead than you would on other roads",
                "Concentrate more than you would on other roads",
                "Travel much faster than you would on other roads",
                "Maintain a shorter separation distance than you would on other roads"
            ],
            correctAnswer: 0,
            explanation: "High speeds mean things happen faster; look ahead."
        },
        {
            text: "Which of these mustn't use motorways?",
            options: [
                "Double-deck buses",
                "Cars driven by learner drivers",
                "Cars with automatic transmission",
                "Motorcycles over 50 cc"
            ],
            correctAnswer: 1,
            explanation: "Learner drivers (in cars) are not allowed on motorways unless with an approved instructor in a dual-controlled car (recent rule change allowing this), but generally 'Learner motorcyclists' and 'Learner drivers (private)' are restricted. The classic theory answer is 'Learners' or 'Small motorcycles' (under 50cc). Let's assume standard 'Learner drivers' option refers to unaccompanied/private practice. Actually, 'Motorcycles under 50cc' is also a correct answer but the options provided say 'Motorcycles over 50cc'. So 'Cars driven by learner drivers' is the intended answer (unless with instructor)."
        },
        {
            text: "You're approaching road works on a motorway. What should you do?",
            options: [
                "Always use the hard shoulder",
                "Stay very close to the vehicle in front",
                "Speed up to clear the area quickly",
                "Obey all speed limits"
            ],
            correctAnswer: 3,
            explanation: "Obey the temporary limits."
        },
        {
            text: "You're on a three-lane motorway. There are red reflective studs on your left and white ones to your right. Which lane are you in?",
            imageSrc: "/images/driving-theory/motorway-view-studs.png",
            options: [
                "In the right-hand lane",
                "On the hard shoulder",
                "In the middle lane",
                "In the left-hand lane"
            ],
            correctAnswer: 3,
            explanation: "Red studs are on the left edge. White separate lanes. So you are in the left lane."
        },
        {
            text: "What should you do when going through a contraflow system on a motorway?",
            options: [
                "Ensure that you don't exceed 30 mph",
                "Keep a good distance from the vehicle ahead",
                "Stay close to the vehicle ahead to reduce queues",
                "Switch lanes to keep the traffic flowing"
            ],
            correctAnswer: 1,
            explanation: "Don't get too close."
        },
        {
            text: "On a three-lane motorway, which lane should you normally use?",
            options: [
                "Right",
                "Either the right or centre",
                "Left",
                "Centre"
            ],
            correctAnswer: 2,
            explanation: "Left."
        },
        {
            text: "You're on a motorway. What colour are the reflective studs on the left of the carriageway?",
            options: [
                "Red",
                "Green",
                "Amber",
                "White"
            ],
            correctAnswer: 0,
            explanation: "Red."
        },
        {
            text: "How should you use the emergency telephone on a motorway?",
            options: [
                "Keep your back to the traffic",
                "Stand on the hard shoulder",
                "Stay close to the carriageway",
                "Face the oncoming traffic"
            ],
            correctAnswer: 3,
            explanation: "Face traffic to see hazards approaching."
        },
        {
            text: "You're joining a motorway. Why is it important to make full use of the slip road?",
            options: [
                "To build up a speed similar to traffic on the motorway",
                "Because there is space available to turn round if you need to",
                "To allow you direct access to the overtaking lanes",
                "Because you can continue on the hard shoulder"
            ],
            correctAnswer: 0,
            explanation: "Match speed to join safely."
        },
        {
            text: "You've broken down on a motorway. In which direction should you walk to find the nearest emergency telephone?",
            options: [
                "With the traffic flow",
                "In the direction of the nearest exit",
                "Facing oncoming traffic",
                "In the direction shown on the marker posts"
            ],
            correctAnswer: 3,
            explanation: "Arrows on posts point to the nearest phone."
        },
        {
            text: "What colour are the reflective studs between a motorway and its slip road?",
            options: [
                "Red",
                "White",
                "Green",
                "Amber"
            ],
            correctAnswer: 2,
            explanation: "Green."
        },
        {
            text: "What colour are the reflective studs between the lanes on a motorway?",
            options: [
                "Amber",
                "Red",
                "Green",
                "White"
            ],
            correctAnswer: 3,
            explanation: "White."
        },
        {
            text: "On which part of a motorway are amber reflective studs found?",
            options: [
                "Between the central reservation and the carriageway",
                "Between each pair of lanes",
                "Between the acceleration lane and the carriageway",
                "Between the hard shoulder and the carriageway"
            ],
            correctAnswer: 0,
            explanation: "Amber marks the right-hand edge (central reservation)."
        },
        {
            text: "What do these motorway signs show?",
            imageSrc: "/images/driving-theory/motorway-countdown-markers.png",
            options: [
                "They're distance markers to the next telephone",
                "They're countdown markers to a bridge",
                "They warn of a police control ahead",
                "They're countdown markers to the next exit"
            ],
            correctAnswer: 3,
            explanation: "Countdown markers (3, 2, 1 bars) indicate distance to exit."
        },
        {
            text: "You're travelling along a motorway. Where would you find a crawler or climbing lane?",
            options: [
                "Before a service area",
                "Before a junction",
                "On a steep gradient",
                "Along the hard shoulder"
            ],
            correctAnswer: 2,
            explanation: "For slow vehicles on hills."
        },
        {
            text: "You've had a breakdown on the hard shoulder of a motorway. When the problem has been fixed, how should you rejoin the main carriageway?",
            options: [
                "Move out onto the carriageway using your hazard warning lights",
                "Wait on the hard shoulder until someone flashes their headlights at you",
                "Move out onto the carriageway, then build up your speed",
                "Gain speed on the hard shoulder before moving out onto the carriageway"
            ],
            correctAnswer: 3,
            explanation: "Build speed on the hard shoulder to match traffic."
        },
        {
            text: "You break down on a motorway. You need to call for help. Why may it be better to use an emergency roadside telephone rather than a mobile phone?",
            options: [
                "Using a mobile phone will distract other drivers",
                "It allows easy location by the emergency services",
                "It connects you to a local garage",
                "Mobile phones don't work on motorways"
            ],
            correctAnswer: 1,
            explanation: "They know exactly where you are."
        },
        {
            text: "Which of these isn't allowed to travel in the right-hand lane of a three-lane motorway?",
            options: [
                "A vehicle towing a trailer",
                "A small delivery van",
                "A motorcycle and sidecar",
                "A motorcycle"
            ],
            correctAnswer: 0,
            explanation: "Vehicles with trailers are restricted from the rightmost lane."
        },
        {
            text: "Which vehicles should use the left-hand lane on a three-lane motorway?",
            imageSrc: "/images/driving-theory/motorway-lane-arrows.png",
            options: [
                "Emergency vehicles only",
                "Large vehicles only",
                "Any vehicle",
                "Slow vehicles only"
            ],
            correctAnswer: 2,
            explanation: "Any vehicle can use the left lane; it is the driving lane."
        },
        {
            text: "What's the national speed limit on motorways for cars and motorcycles?",
            options: [
                "50 mph",
                "60 mph",
                "30 mph",
                "70 mph"
            ],
            correctAnswer: 3,
            explanation: "70 mph."
        },
        {
            text: "What should you do when you're joining a motorway?",
            options: [
                "Stop at the end of the acceleration lane",
                "Slow to a stop before joining the motorway",
                "Use the hard shoulder",
                "Give way to traffic already on the motorway"
            ],
            correctAnswer: 3,
            explanation: "Give way."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 9: Motorway Rules...\n");

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
            videoUrl: "https://vimeo.com/1011942825",
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
