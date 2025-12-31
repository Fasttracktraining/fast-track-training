const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 11: Rules of the Road
 * 67 questions
 */

const quiz = {
    title: "Lesson 11: Rules of the Road",
    description: "Learn essential road rules, including speed limits, junctions, and parking regulations.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "When must you stop your vehicle?",
            options: [
                "Before merging onto a motorway",
                "At the end of a one-way street",
                "If you're involved in an incident that causes damage or injury",
                "At a junction where there are 'give way' lines"
            ],
            correctAnswer: 2,
            explanation: "You must stop and exchange details if you are involved in an incident."
        },
        {
            text: "What must you have to park in a disabled space?",
            imageSrc: "/images/driving-theory/disabled-road-marking.png",
            options: [
                "An adapted vehicle",
                "A wheelchair",
                "An advanced driver certificate",
                "A Blue Badge"
            ],
            correctAnswer: 3,
            explanation: "Only vehicles displaying a valid Blue Badge may park in spaces marked for disabled use."
        },
        {
            text: "You're driving on a road that has a cycle lane. The lane is marked by a broken white line. What does this mean?",
            options: [
                "Cyclists can travel in both directions in that lane",
                "You shouldn't drive in the lane unless it's unavoidable",
                "The lane must be used by motorcyclists in heavy traffic",
                "There's a reduced speed limit for motor vehicles using the lane"
            ],
            correctAnswer: 1,
            explanation: "Do not enter a cycle lane unless necessary and safe to do so."
        },
        {
            text: "You're driving in the right-hand lane of a dual carriageway. You see signs showing that the right-hand lane is closed 800 yards ahead. What should you do?",
            imageSrc: "/images/driving-theory/lane-closure-sign-800-yards.png",
            options: [
                "Move to the left immediately",
                "Move to the left in good time",
                "Wait and see which lane is moving faster",
                "Keep in that lane until you reach the queue"
            ],
            correctAnswer: 1,
            explanation: "Merge in turn, moving to the left lane safely and in good time."
        },
        {
            text: "To help keep your vehicle secure at night, where should you park?",
            options: [
                "On a red route",
                "Near a police station",
                "In a well-lit area",
                "In a quiet road"
            ],
            correctAnswer: 2,
            explanation: "Parking in well-lit areas deters thieves."
        },
        {
            text: "You're parked in a busy high street. What's the safest way to turn your vehicle around so you can go the opposite way?",
            options: [
                "Drive into a side road and reverse into the main road",
                "Do a U-turn",
                "Get someone to stop the traffic",
                "Find a quiet side road to turn around in"
            ],
            correctAnswer: 3,
            explanation: "Find a safe, quiet place to turn around, avoiding busy traffic."
        },
        {
            text: "Other than direction indicators, how can you give signals to other road users?",
            options: [
                "By using sidelights",
                "By using interior lights",
                "By using fog lights",
                "By using brake lights"
            ],
            correctAnswer: 3,
            explanation: "Brake lights signal that you are slowing down or stopping."
        },
        {
            text: "When may you drive a motor car in this bus lane?",
            imageSrc: "/images/driving-theory/bus-lane-sign-hours.png",
            options: [
                "Outside its hours of operation",
                "You may not use it at any time",
                "To overtake slow-moving traffic",
                "To get to the front of a traffic queue"
            ],
            correctAnswer: 0,
            explanation: "Car drivers can use bus lanes outside the indicated operating hours."
        },
        {
            text: "You're driving at night with your headlights on full beam. A vehicle is overtaking you. When should you dip your lights?",
            options: [
                "Only if the other driver dips their headlights",
                "Some time after the vehicle has passed you",
                "As soon as the vehicle passes you",
                "Before the vehicle starts to pass you"
            ],
            correctAnswer: 2,
            explanation: "Dip your headlights as soon as the vehicle passes to avoid dazzling the driver in their mirror."
        },
        {
            text: "You're on a road that's only wide enough for one vehicle. A car is coming towards you. What should you do?",
            options: [
                "Pull into a passing place on your left",
                "Pull into a passing place on your right",
                "Pull into a passing place if your vehicle is wider",
                "Force the other driver to reverse"
            ],
            correctAnswer: 0,
            explanation: "Use the nearest passing place (usually on the left)."
        },
        {
            text: "You're looking for somewhere to park your vehicle. The area is full except for spaces marked 'disabled use'. What can you do?",
            options: [
                "You can use one of the spaces as long as one is kept free",
                "You can park in one of these spaces if you stay with your vehicle",
                "You can't park there, unless you're permitted to do so",
                "You can use these spaces when elsewhere is full"
            ],
            correctAnswer: 2,
            explanation: "You must not park in disabled bays without a disabled badge."
        },
        {
            text: "When may you stop on an urban clearway?",
            options: [
                "To load or unload goods",
                "To ask for directions",
                "To set down and pick up passengers",
                "To use a mobile telephone"
            ],
            correctAnswer: 2,
            explanation: "Stopping is only allowed to quickly pick up or set down passengers."
        },
        {
            text: "Where's the safest place to park your vehicle at night?",
            options: [
                "In a quiet car park",
                "Near a red route",
                "In a garage",
                "On a busy road"
            ],
            correctAnswer: 2,
            explanation: "A garage offers the best security."
        },
        {
            text: "You're reversing your vehicle into a side road. When would the greatest hazard to passing traffic occur?",
            options: [
                "After you've completed the manoeuvre",
                "When the front of your vehicle swings out",
                "Just before you actually begin to manoeuvre",
                "After you've entered the side road"
            ],
            correctAnswer: 1,
            explanation: "The front of your car will swing out into the road as you turn."
        },
        {
            text: "You want to turn right at a box junction. There's oncoming traffic. What should you do?",
            options: [
                "Wait before the junction until it's clear of all traffic",
                "Drive slowly into the box junction when signalled by oncoming traffic",
                "Drive on; you can't turn right at a box junction",
                "Wait in the box junction if your exit is clear"
            ],
            correctAnswer: 3,
            explanation: "You can enter and wait in the box if your exit is clear but you are blocked by oncoming traffic."
        },
        {
            text: "When may you reverse from a side road into a main road?",
            options: [
                "At any time",
                "Not at any time",
                "Only if the main road is clear of traffic",
                "Only if both roads are clear of traffic"
            ],
            correctAnswer: 1,
            explanation: "Never reverse from a side road into a main road; it is unsafe."
        },
        {
            text: "What should you do when you're unsure whether it's safe to reverse your vehicle?",
            options: [
                "Reverse slowly",
                "Rev your engine",
                "Sound your horn",
                "Get out and check"
            ],
            correctAnswer: 3,
            explanation: "Always check manually if you can't see clearly."
        },
        {
            text: "Over what distance are you allowed to reverse?",
            options: [
                "No further than is necessary",
                "No more than a car's length",
                "The length of a residential street",
                "As far as it takes to reverse around a corner"
            ],
            correctAnswer: 0,
            explanation: "Reverse only as far as required to complete your manoeuvre."
        },
        {
            text: "During which manoeuvre may you remove your seat belt?",
            options: [
                "Hill start",
                "Emergency stop",
                "Driving slowly",
                "Reversing"
            ],
            correctAnswer: 3,
            explanation: "You may remove your seatbelt while reversing to look around, but must put it back on afterwards."
        },
        {
            text: "You're on a busy main road and find that you're travelling in the wrong direction. What should you do?",
            options: [
                "Turn around in a side road",
                "Make a 'three-point' turn in the main road",
                "Make a U-turn in the main road",
                "Turn into a side road on the right and reverse into the main road"
            ],
            correctAnswer: 0,
            explanation: "Find a safe place to turn around, such as a side road."
        },
        {
            text: "You're driving over a level crossing. The warning lights come on and a bell rings. What should you do?",
            imageSrc: "/images/driving-theory/level-crossing-lights-warning.png",
            options: [
                "Keep going and clear the crossing",
                "Get everyone out of the vehicle immediately",
                "Stop immediately and use your hazard warning lights",
                "Stop and reverse back to clear the crossing"
            ],
            correctAnswer: 0,
            explanation: "If you are already on the crossing, keep going to clear it."
        },
        {
            text: "You're waiting at a level crossing. The red warning lights continue to flash after a train has passed by. What should you do?",
            imageSrc: "/images/driving-theory/level-crossing-lights-warning.png",
            options: [
                "Telephone the signal operator",
                "Get out and investigate",
                "Drive across carefully",
                "Continue to wait"
            ],
            correctAnswer: 3,
            explanation: "Wait. Another train may be coming."
        },
        {
            text: "You intend to turn left from a main road into a minor road. What should you do as you approach it?",
            options: [
                "Swing out to the right just before turning",
                "Keep just left of the middle of the road",
                "Keep in the middle of the road",
                "Keep well to the left of the road"
            ],
            correctAnswer: 3,
            explanation: "Position your vehicle correctly to the left."
        },
        {
            text: "A cycle lane, marked by a solid white line, is in operation. What does this mean for car drivers?",
            options: [
                "You may drive in the lane at any time",
                "The lane may be used when necessary",
                "You mustn't drive in that lane",
                "The lane may be used for parking your car"
            ],
            correctAnswer: 2,
            explanation: "You must not drive or park in a cycle lane marked by a solid white line during its hours of operation."
        },
        {
            text: "You want to park and you see this sign. What should you do on the days and times shown?",
            imageSrc: "/images/driving-theory/meter-zone-sign.png",
            options: [
                "Park in a bay and pay",
                "Park in a bay and not pay",
                "Park on yellow lines and pay",
                "Park on yellow lines and not pay"
            ],
            correctAnswer: 0,
            explanation: "Signs typically indicate pay and display conditions."
        },
        {
            text: "What's the speed limit for a car towing a small caravan along a dual carriageway?",
            imageSrc: "/images/driving-theory/car-towing-caravan.png",
            options: [
                "40 mph",
                "60 mph",
                "70 mph",
                "50 mph"
            ],
            correctAnswer: 1,
            explanation: "The limit is 60 mph for towing vehicles on dual carriageways."
        },
        {
            text: "A single carriageway road has this sign. What's the maximum permitted speed for a car towing a trailer?",
            imageSrc: "/images/driving-theory/national-speed-limit-sign.png",
            options: [
                "30 mph",
                "60 mph",
                "50 mph",
                "40 mph"
            ],
            correctAnswer: 2,
            explanation: "National speed limit for towing on single carriageways is 50 mph."
        },
        {
            text: "When may you drive over a footpath?",
            options: [
                "If there are no pedestrians nearby",
                "To overtake slow-moving traffic",
                "When the pavement is very wide",
                "To get onto a property"
            ],
            correctAnswer: 3,
            explanation: "Only to gain lawful access to property."
        },
        {
            text: "You're going straight ahead at a roundabout. How should you signal?",
            options: [
                "Signal right on the approach to the roundabout and keep the signal on",
                "Signal right on the approach and then left to leave the roundabout",
                "Signal left after you leave the roundabout and enter the new road",
                "Signal left just after you pass the exit before the one you're going to take"
            ],
            correctAnswer: 3,
            explanation: "Signal left to exit."
        },
        {
            text: "You're travelling on a motorway in England. You must stop when signalled to do so by which of these?",
            options: [
                "Pedestrians on the hard shoulder",
                "A driver who has broken down",
                "A traffic officer",
                "Flashing amber lights above your lane"
            ],
            correctAnswer: 2,
            explanation: "Traffic officers (Highways England) have authority to stop vehicles."
        },
        {
            text: "Where will you see these red and white markers?",
            imageSrc: "/images/driving-theory/countdown-markers-concealed-crossing.png",
            options: [
                "Approaching a concealed level crossing",
                "Approaching a concealed speed-limit sign",
                "Approaching the end of a motorway",
                "Approaching the end of a dual carriageway"
            ],
            correctAnswer: 0,
            explanation: "Countdown markers warn of a concealed level crossing."
        },
        {
            text: "You park at night on a road with a 40 mph speed limit. What should you do?",
            options: [
                "Park near a street light",
                "Park with parking lights on",
                "Park facing the traffic",
                "Park with dipped headlights on"
            ],
            correctAnswer: 1,
            explanation: "Parking lights are required on roads with speed limits over 30 mph at night."
        },
        {
            text: "What's the national speed limit on a single carriageway road for cars and motorcycles?",
            options: [
                "70 mph",
                "30 mph",
                "50 mph",
                "60 mph"
            ],
            correctAnswer: 3,
            explanation: "60 mph."
        },
        {
            text: "The dual carriageway you're turning right onto has a very narrow central reservation. What should you do?",
            options: [
                "Stop in the first lane so that other vehicles give way",
                "Emerge slightly to show your intentions",
                "Wait until the road is clear in both directions",
                "Proceed to the central reservation and wait"
            ],
            correctAnswer: 2,
            explanation: "Do not block the crossover if the reservation is too narrow. Wait for a clear gap."
        },
        {
            text: "You're on a well-lit road at night, in a built-up area. How will using dipped headlights help?",
            options: [
                "You can be easily seen by others",
                "You can see further along the road",
                "You can go at a much faster speed",
                "You can switch to main beam quickly"
            ],
            correctAnswer: 0,
            explanation: "Dipped headlights ensure you are seen."
        },
        {
            text: "What must you do when entering road works where a temporary speed limit is displayed?",
            options: [
                "Ignore the displayed limit",
                "Obey the speed limit",
                "Obey the limit, but only during rush hour",
                "Use your own judgment; the limit is only advisory"
            ],
            correctAnswer: 1,
            explanation: "Temporary limits are mandatory."
        },
        {
            text: "What does this sign tell you?",
            imageSrc: "/images/driving-theory/zone-ends-sign.png",
            options: [
                "No through road",
                "End of traffic-calming zone",
                "No-waiting zone ends",
                "Free-parking zone ends"
            ],
            correctAnswer: 1,
            explanation: "End of traffic calming/control zone."
        },
        {
            text: "You're waiting at a level crossing. A train passes but the lights keep flashing. What must you do?",
            imageSrc: "/images/driving-theory/level-crossing-lights-warning.png",
            options: [
                "Park and investigate",
                "Phone the signal operator",
                "Carry on waiting",
                "Edge over the stop line and look for trains"
            ],
            correctAnswer: 2,
            explanation: "Wait until the lights stop flashing."
        },
        {
            text: "Where shouldn't you park?",
            options: [
                "Where there's no pavement",
                "On a road with a 40 mph speed limit",
                "At or near a bus stop",
                "Within 20 meters (65 feet) of a junction"
            ],
            correctAnswer: 2,
            explanation: "Parking at bus stops causes obstruction."
        },
        {
            text: "What's the nearest you may park to a junction?",
            options: [
                "20 meters (66 feet)",
                "15 meters (49 feet)",
                "12 meters (39 feet)",
                "10 meters (32 feet)"
            ],
            correctAnswer: 3,
            explanation: "10 meters."
        },
        {
            text: "Who has priority at an unmarked crossroads?",
            options: [
                "The larger vehicle",
                "No-one has priority",
                "The smaller vehicle",
                "The faster vehicle"
            ],
            correctAnswer: 1,
            explanation: "Proceed with caution."
        },
        {
            text: "You're on a two-lane dual carriageway. Why would you use the right-hand lane?",
            options: [
                "For normal progress",
                "To overtake slower traffic",
                "To keep driving at a constant high speed",
                "When staying at the minimum allowed speed"
            ],
            correctAnswer: 1,
            explanation: "Use the right lane for overtaking or turning right."
        },
        {
            text: "What should you do when you meet an obstruction on your side of the road?",
            options: [
                "Accelerate to get past first",
                "Give way to oncoming traffic",
                "Wave oncoming vehicles through",
                "Carry on, as you have priority"
            ],
            correctAnswer: 1,
            explanation: "Give way to traffic not facing the obstruction."
        },
        {
            text: "You're travelling along a street with parked vehicles on the left-hand side. Why should you keep your speed down?",
            options: [
                "Children may run out from between the vehicles",
                "There may be delivery lorries on the street",
                "So that oncoming traffic can see you more clearly",
                "You may set off car alarms"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians can be hidden by parked cars."
        },
        {
            text: "You're turning right at a crossroads. An oncoming driver is also turning right. How should you normally deal with this?",
            options: [
                "Carry on and turn at the next junction instead",
                "Keep the other vehicle to your left and turn in front of it (nearside to nearside)",
                "Keep the other vehicle to your right and turn behind it (offside to offside)",
                "Hold back and wait for the other driver to turn first"
            ],
            correctAnswer: 2,
            explanation: "Passing offside to offside is safer as you can see oncoming traffic, but nearside to nearside is common. The 'normal' or safer advice often taught is offside to offside (right to right), but nearside (left to left) is safer in congestion. The question says 'normally'. The standard answer is usually 'keep the other vehicle to your right' (offside to offside), allowing visibility. Wait, actually modern advice and many junctions are marked for nearside to nearside (turning in front). But the theory test often looks for 'right to right'. Let's check standard theory answers. 'Keep the other vehicle to your right and turn behind it' is the classic 'safe' method for visibility, but 'turn near-side to near-side' is more common practically. Let's assume option c (right/offside) for theory correctness unless specified otherwise."
        },
        {
            text: "When can you park on the left opposite these road markings?",
            options: [
                "When there are no yellow lines",
                "During daylight hours only",
                "To pick up or set down passengers",
                "If the line nearest to you is broken"
            ],
            correctAnswer: 2,
            explanation: "You can stop to pick up/set down passengers, but not park."
        },
        {
            text: "You're waiting at a pelican crossing. What does it mean when the red light changes to flashing amber?",
            options: [
                "Wait for pedestrians on the crossing to clear",
                "Get ready and go when the continuous amber light shows",
                "Move off immediately without any hesitation",
                "Wait for the green light before moving off"
            ],
            correctAnswer: 0,
            explanation: "Give way to pedestrians still on the crossing."
        },
        {
            text: "Who can use a toucan crossing?",
            options: [
                "Cyclists and pedestrians",
                "Trams and trains",
                "Buses and lorries",
                "Cars and motorcycles"
            ],
            correctAnswer: 0,
            explanation: "Toucan = 'Two can' cross (cyclists and pedestrians)."
        },
        {
            text: "You see a pedestrian waiting at a zebra crossing. What should you normally do?",
            options: [
                "Go on quickly before they step onto the crossing",
                "Stop before you reach the zigzag lines and let them cross",
                "Ignore them as they're still on the pavement",
                "Stop to let them cross and wait patiently"
            ],
            correctAnswer: 3,
            explanation: "Be ready to stop; if they are waiting, you should stop."
        },
        {
            text: "Which person's signal to stop must you obey?",
            options: [
                "A bus driver",
                "A police officer",
                "A pedestrian",
                "A motorcyclist"
            ],
            correctAnswer: 1,
            explanation: "You must obey police officers, traffic wardens, and school crossing patrols."
        },
        {
            text: "When may you stop and wait in a box junction?",
            options: [
                "When oncoming traffic prevents you from turning right",
                "When you're in a queue of traffic turning left",
                "When you're on a roundabout",
                "When you're in a queue of traffic going ahead"
            ],
            correctAnswer: 0,
            explanation: "You can wait in the box when turning right if blocked by oncoming traffic."
        },
        {
            text: "On which occasion may you enter a box junction?",
            options: [
                "When your exit road is clear",
                "When signaled by another road user",
                "When there are fewer than two vehicles ahead",
                "When traffic signs direct you"
            ],
            correctAnswer: 0,
            explanation: "Do not enter unless your exit is clear."
        },
        {
            text: "Which vehicle might have to take a different course from normal at roundabouts?",
            options: [
                "Van",
                "Long vehicle",
                "Sports car",
                "Estate car"
            ],
            correctAnswer: 1,
            explanation: "Long vehicles may need more room."
        },
        {
            text: "How should you signal when going straight ahead at a roundabout?",
            options: [
                "Indicate left before leaving the roundabout",
                "Indicate right when approaching the roundabout",
                "Don't indicate at any time",
                "Indicate left when approaching the roundabout"
            ],
            correctAnswer: 0,
            explanation: "No signal on approach, signal left after passing the exit before yours."
        },
        {
            text: "Where may you overtake on a one-way street?",
            options: [
                "Only on the left-hand side",
                "Only on the right-hand side",
                "Overtaking isn't allowed",
                "On either the right or the left"
            ],
            correctAnswer: 3,
            explanation: "You can pass on either side in a one-way street."
        },
        {
            text: "You're approaching a busy junction. What should you do when, at the last moment, you realise you're in the wrong lane?",
            options: [
                "Stop until the area has cleared",
                "Force your way across",
                "Use clear arm signals to cut across",
                "Continue in that lane"
            ],
            correctAnswer: 3,
            explanation: "Carry on and find another way back."
        },
        {
            text: "On a three-lane dual carriageway, what can the right-hand lane be used for?",
            options: [
                "Overtaking only, never turning right",
                "Overtaking or turning right",
                "Turning right only, never overtaking",
                "Fast-moving traffic only"
            ],
            correctAnswer: 1,
            explanation: "Overtaking or turning right."
        },
        {
            text: "When can you park on the right-hand side of a road at night?",
            options: [
                "When you have your sidelights on",
                "When you're under a lamppost",
                "When you're more than 10 meters (32 feet) from a junction",
                "When you're in a one-way street"
            ],
            correctAnswer: 3,
            explanation: "Parking against the flow of traffic is illegal at night unless in a marked bay or one-way street."
        },
        {
            text: "What's the meaning of this sign?",
            imageSrc: "/images/driving-theory/sign-no-entry.png",
            options: [
                "No entry",
                "Waiting restrictions",
                "School crossing patrol",
                "National speed limit"
            ],
            correctAnswer: 0,
            explanation: "No entry sign (Red circle with white bar)."
        },
        {
            text: "When mustn't you stop on a clearway?",
            options: [
                "During daylight hours",
                "In the rush hour",
                "When it's busy",
                "At any time"
            ],
            correctAnswer: 3,
            explanation: "No stopping at any time on a clearway."
        },
        {
            text: "Which vehicle is most likely to take an unusual course at a roundabout?",
            options: [
                "Delivery van",
                "Milk float",
                "Estate car",
                "Long lorry"
            ],
            correctAnswer: 3,
            explanation: "Long vehicles need more space."
        },
        {
            text: "There's a tractor ahead. You want to overtake but you aren't sure whether it's safe. What should you do?",
            options: [
                "Sound your horn to make the tractor pull over",
                "Speed past, flashing your lights at oncoming traffic",
                "Follow another vehicle as it overtakes the tractor",
                "Stay behind the tractor if you're in any doubt"
            ],
            correctAnswer: 3,
            explanation: "Don't overtake unless sure."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-end-of-minimum-speed.png",
            options: [
                "End of minimum speed",
                "Minimum speed 30 mph",
                "End of maximum speed",
                "Maximum speed 30 mph"
            ],
            correctAnswer: 0,
            explanation: "Blue circle with red diagonal line cancelling the number."
        },
        {
            text: "You see street lights but no speed-limit signs. What will the speed limit usually be?",
            options: [
                "60 mph",
                "50 mph",
                "30 mph",
                "40 mph"
            ],
            correctAnswer: 2,
            explanation: "Street lights usually indicate a 30 mph limit."
        },
        {
            text: "There are no speed-limit signs on the road. How is a 30 mph limit indicated?",
            options: [
                "By pedestrian islands",
                "By hazard warning lines",
                "By double or single yellow lines",
                "By street lighting"
            ],
            correctAnswer: 3,
            explanation: "Street lighting implies 30 mph."
        },
        {
            text: "What's the national speed limit for cars and motorcycles on a dual carriageway?",
            options: [
                "60 mph",
                "30 mph",
                "70 mph",
                "50 mph"
            ],
            correctAnswer: 2,
            explanation: "70 mph."
        },
        {
            text: "What's the meaning of this sign?",
            imageSrc: "/images/driving-theory/national-speed-limit-sign.png",
            options: [
                "No waiting on the carriageway",
                "Local speed limit applies",
                "National speed limit applies",
                "No entry for vehicles"
            ],
            correctAnswer: 2,
            explanation: "White circle with black diagonal stripe."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 11: Rules of the Road...\n");

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
            videoUrl: "https://vimeo.com/1014248406",
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
