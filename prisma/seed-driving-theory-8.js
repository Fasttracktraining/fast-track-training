const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 8: Vehicle Handling
 * 51 questions
 */

const quiz = {
    title: "Lesson 8: Vehicle Handling",
    description: "Learn how to handle your vehicle in various weather conditions and situations.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "You're braking on a wet road. Your vehicle begins to skid. It doesn't have anti-lock brakes. What's the first thing you should do?",
            options: [
                "Push harder on the brake pedal",
                "Quickly pull up the handbrake",
                "Release the footbrake",
                "Gently use the accelerator"
            ],
            correctAnswer: 2,
            explanation: "Releasing the brake allows the wheels to turn again and restores steering control."
        },
        {
            text: "When must you use dipped headlights during the day?",
            options: [
                "When parking",
                "In poor visibility",
                "All the time",
                "On narrow streets"
            ],
            correctAnswer: 1,
            explanation: "Use dipped headlights when visibility is poor (less than 100 meters)."
        },
        {
            text: "Why is travelling in neutral for long distances (known as coasting) wrong?",
            options: [
                "The engine will run faster",
                "It will cause the car to skid",
                "It will make the engine stall",
                "There won't be any engine braking"
            ],
            correctAnswer: 3,
            explanation: "Coasting reduces driver control because there is no engine braking."
        },
        {
            text: "What should you do when dealing with this hazard?",
            imageSrc: "/images/driving-theory/ford-warning-sign.png",
            options: [
                "Switch on your windscreen wipers",
                "Switch on your hazard warning lights",
                "Use a high gear to prevent wheel spin",
                "Use a low gear and drive slowly"
            ],
            correctAnswer: 3,
            explanation: "Use a low gear and keep the engine speed up to prevent water entering the exhaust."
        },
        {
            text: "Why is it bad technique to coast when driving downhill?",
            options: [
                "The tyres will wear more quickly",
                "The vehicle will gain speed",
                "The fuel consumption will increase",
                "The engine will overheat"
            ],
            correctAnswer: 1,
            explanation: "The vehicle naturally picks up speed downhill without engine braking."
        },
        {
            text: "You're driving down a steep hill. Why could it be dangerous to keep the clutch down or roll in neutral for too long?",
            options: [
                "It will damage the engine",
                "Fuel consumption will be higher",
                "Your vehicle will pick up speed",
                "It will wear tyres out more quickly"
            ],
            correctAnswer: 2,
            explanation: "Gravity will increase your speed without the resistance of the engine."
        },
        {
            text: "What will happen if you hold the clutch pedal down or roll in neutral for too long?",
            options: [
                "It will reduce your control",
                "It will use more fuel",
                "It will cause the engine to overheat",
                "It will improve tyre wear"
            ],
            correctAnswer: 0,
            explanation: "Coasting reduces steering and braking control."
        },
        {
            text: "Why is it dangerous to leave rear fog lights on when they're not needed?",
            options: [
                "They may be confused with brake lights",
                "Electrical systems could be overloaded",
                "The bulbs would fail",
                "Direction indicators may not work properly"
            ],
            correctAnswer: 0,
            explanation: "Rear fog lights are bright and can mask brake lights or dazzle drivers."
        },
        {
            text: "You've just driven out of fog. What must you do now that visibility has improved?",
            options: [
                "Switch off your fog lights",
                "Keep your rear fog lights switched on",
                "Keep your front fog lights switched on",
                "Leave your fog lights switched on in case the fog returns"
            ],
            correctAnswer: 0,
            explanation: "Turn them off to avoid dazzling others."
        },
        {
            text: "You have to make a journey in fog. What should you do before you set out?",
            options: [
                "Make sure that the windows are clean",
                "Top up the radiator with anti-freeze",
                "Make sure that you have a warning triangle in the vehicle",
                "Check the battery"
            ],
            correctAnswer: 0,
            explanation: "Good visibility is crucial. Clean windows and lights."
        },
        {
            text: "You're driving down a long, steep hill. You suddenly notice that your brakes aren't working as well as normal. What's the usual cause of this?",
            options: [
                "Air in the brake fluid",
                "Badly adjusted brakes",
                "Oil on the brakes",
                "The brakes overheating"
            ],
            correctAnswer: 3,
            explanation: "Continuous heavy braking can cause brake fade (overheating)."
        },
        {
            text: "What should you do when there's been a heavy fall of snow?",
            options: [
                "Only drive when your journey is short",
                "Don't drive unless it's essential",
                "Drive with your hazard warning lights on",
                "Don't drive unless you have a mobile phone"
            ],
            correctAnswer: 1,
            explanation: "Avoid driving in severe weather unless absolutely necessary."
        },
        {
            text: "While you're driving in fog, it becomes necessary to use front fog lights. What should you remember?",
            options: [
                "Only use them on dual carriageways",
                "Don't use them on motorways",
                "Switch them off when visibility improves",
                "Only use them in heavy traffic conditions"
            ],
            correctAnswer: 2,
            explanation: "It is illegal to use fog lights when visibility is good."
        },
        {
            text: "Why are vehicles fitted with rear fog lights?",
            options: [
                "To make them more visible in thick fog",
                "To show when they've broken down in a dangerous position",
                "To make them more visible when driving at high speed",
                "To warn drivers following closely to drop back"
            ],
            correctAnswer: 0,
            explanation: "For use when visibility is less than 100 meters."
        },
        {
            text: "Daytime visibility is poor but not seriously reduced. Which lights should you switch on?",
            options: [
                "Dipped headlights",
                "Rear fog lights",
                "Headlights and fog lights",
                "Front fog lights"
            ],
            correctAnswer: 0,
            explanation: "Dipped headlights help you be seen without dazzling."
        },
        {
            text: "When will you feel the effects of engine braking?",
            options: [
                "When you only use the handbrake",
                "When you change to a higher gear",
                "When you're in neutral",
                "When you change to a lower gear"
            ],
            correctAnswer: 3,
            explanation: "Lower gears provide more resistance from the engine."
        },
        {
            text: "You're driving on a motorway at night. When may you switch off your headlights?",
            options: [
                "When your vehicle is broken down on the hard shoulder",
                "When you're travelling below 50 mph",
                "When the motorway is lit",
                "When there are vehicles close in front of you"
            ],
            correctAnswer: 0,
            explanation: "Never turn off headlights while driving at night on a motorway. Turn them off if broken down to reduce battery drain and prevent confusion."
        },
        {
            text: "What will affect your vehicle's stopping distance?",
            options: [
                "The speed limit",
                "The time of day",
                "The condition of the tyres",
                "The street lighting"
            ],
            correctAnswer: 2,
            explanation: "Worn tyres increases stopping distances, especially in the wet."
        },
        {
            text: "You're on a motorway at night, with other vehicles just ahead of you. Which lights should you have on?",
            options: [
                "Front fog lights",
                "Main-beam headlights",
                "Sidelights only",
                "Dipped headlights"
            ],
            correctAnswer: 3,
            explanation: "Use dipped headlights to avoid dazzling drivers ahead."
        },
        {
            text: "You're driving on a well-lit motorway on a clear night. What must you do?",
            options: [
                "Use rear fog lights",
                "Use only your sidelights",
                "Use your headlights",
                "Use front fog lights"
            ],
            correctAnswer: 2,
            explanation: "You must use headlights at night on all roads, even lit motorways."
        },
        {
            text: "You're driving on an icy road. What distance from the car in front should you drive?",
            options: [
                "Ten times the normal distance",
                "Eight times the normal distance",
                "Four times the normal distance",
                "Six times the normal distance"
            ],
            correctAnswer: 0,
            explanation: "Stopping distances can be ten times greater on ice."
        },
        {
            text: "Why could it be dangerous to keep the clutch down, or select neutral, for long periods of time while you're driving?",
            options: [
                "Engine damage may be caused",
                "Fuel spillage will occur",
                "It will wear tyres out more quickly",
                "You'll have less steering and braking control"
            ],
            correctAnswer: 3,
            explanation: "Coasting reduces vehicle control."
        },
        {
            text: "How can you use your vehicle's engine to control your speed?",
            options: [
                "By selecting neutral",
                "By changing to a higher gear",
                "By changing to a lower gear",
                "By selecting reverse gear"
            ],
            correctAnswer: 2,
            explanation: "Engine braking in lower gears helps slow the vehicle."
        },
        {
            text: "What can fitting chains to your wheels help to prevent?",
            options: [
                "Skidding in deep snow",
                "Damage to the road surface",
                "Wear to the tyres",
                "The brakes locking"
            ],
            correctAnswer: 0,
            explanation: "Snow chains provide extra grip in deep snow/ice."
        },
        {
            text: "What will happen if you use rear fog lights in good conditions?",
            options: [
                "They'll dazzle other drivers",
                "They'll make following drivers keep back",
                "They'll make it safer when towing a trailer",
                "They'll protect you from larger vehicles"
            ],
            correctAnswer: 0,
            explanation: "They are very bright and distracting."
        },
        {
            text: "Why should you switch off your rear fog lights when the fog has cleared?",
            options: [
                "To allow your headlights to work",
                "To stop draining the battery",
                "To stop the engine losing power",
                "To prevent dazzling following drivers"
            ],
            correctAnswer: 3,
            explanation: "Avoid dazzling others."
        },
        {
            text: "You're driving with your front fog lights switched on. Earlier fog has now cleared. What should you do?",
            options: [
                "Flash them to warn oncoming traffic that it's foggy",
                "Drive with them on instead of your headlights",
                "Switch them off as long as visibility remains good",
                "Leave them on if other drivers have their lights on"
            ],
            correctAnswer: 2,
            explanation: "Switch off fog lights when conditions improve."
        },
        {
            text: "When may front fog lights be used?",
            options: [
                "When visibility is seriously reduced",
                "When an audible warning device is used",
                "When they're fitted above the bumper",
                "When they aren't as bright as the headlights"
            ],
            correctAnswer: 0,
            explanation: "Use only in seriously reduced visibility (less than 100m)."
        },
        {
            text: "You're driving at night and are dazzled by vehicle headlights coming towards you. What should you do?",
            options: [
                "Pull down your sun visor",
                "Shade your eyes with your hand",
                "Flash your main-beam headlights",
                "Slow down or stop"
            ],
            correctAnswer: 3,
            explanation: "If you cannot see, slow down or stop safely."
        },
        {
            text: "What should you do if you park on the road when it's foggy?",
            options: [
                "Leave main-beam headlights switched on",
                "Leave dipped headlights switched on",
                "Leave sidelights switched on",
                "Leave dipped headlights and fog lights switched on"
            ],
            correctAnswer: 2,
            explanation: "Parking lights (sidelights) help others see your stationary vehicle."
        },
        {
            text: "You're driving in fog. Why should you keep well back from the vehicle in front?",
            options: [
                "In case it changes direction suddenly",
                "In case it stops suddenly",
                "In case its fog lights dazzle you",
                "In case its brake lights dazzle you"
            ],
            correctAnswer: 1,
            explanation: "Stopping distances are longer in wet/foggy conditions, and you need reaction time."
        },
        {
            text: "What should you do to correct a rear-wheel skid?",
            options: [
                "Apply your handbrake",
                "Steer away from it",
                "Steer into it",
                "Not steer at all"
            ],
            correctAnswer: 2,
            explanation: "Steer into the skid (in the direction the rear is sliding)."
        },
        {
            text: "You're driving on the motorway in windy conditions. What should you do as you pass a high-sided vehicle?",
            options: [
                "Drive alongside very closely",
                "Expect normal conditions",
                "Be wary of a sudden gust",
                "Increase your speed"
            ],
            correctAnswer: 2,
            explanation: "You may be buffeted by wind as you pass."
        },
        {
            text: "How will your vehicle be affected when you drive up steep hills?",
            options: [
                "The steering will feel heavier",
                "The engine will work harder",
                "The higher gears will pull better",
                "Overtaking will be easier"
            ],
            correctAnswer: 1,
            explanation: "Gravity works against the vehicle, requiring more power."
        },
        {
            text: "Why should you always reduce your speed when travelling in fog?",
            options: [
                "It's more difficult to see what's ahead",
                "The engine will take longer to warm up",
                "You'll be dazzled by other headlights",
                "The brakes don't work as well"
            ],
            correctAnswer: 0,
            explanation: "You need more time to react to hazards you can't see."
        },
        {
            text: "After this hazard you should test your brakes. Why is this?",
            imageSrc: "/images/driving-theory/ford-warning-sign.png",
            // Reusing Q4 image as it's the same context (Ford).
            options: [
                "You'll be going down a long hill",
                "You'll have just crossed a long bridge",
                "You'll be on a slippery road",
                "Your brakes will be soaking wet"
            ],
            correctAnswer: 3,
            explanation: "Driving through water can wet brakes, making them less effective. Test them lightly."
        },
        {
            text: "The road is wet. Why might a motorcyclist steer round drain covers on a bend?",
            options: [
                "To help judge the bend using the drain covers as marker points",
                "To avoid puncturing the tyres on the edge of the drain covers",
                "To prevent the motorcycle sliding on the metal drain covers",
                "To avoid splashing pedestrians on the pavement"
            ],
            correctAnswer: 2,
            explanation: "Metal covers are slippery when wet."
        },
        {
            text: "What should you do when you meet an oncoming vehicle on a single-track road?",
            options: [
                "Stop at a passing place",
                "Switch on your hazard warning lights",
                "Reverse back to the main road",
                "Carry out an emergency stop"
            ],
            correctAnswer: 0,
            explanation: "Use passing places which may be on your left or right."
        },
        {
            text: "How would you identify a section of road used by trams?",
            options: [
                "There would be metal studs around it",
                "There would be yellow hatch markings around it",
                "There would be a different surface texture",
                "There would be zigzag markings alongside it"
            ],
            correctAnswer: 2,
            explanation: "Tram tracks are often set in a different road surface."
        },
        {
            text: "You see these markings on the road. Why are they there?",
            imageSrc: "/images/driving-theory/chevrons-safe-distance.png",
            options: [
                "To show a safe distance between vehicles",
                "To make you aware of your speed",
                "To keep the area clear of traffic",
                "To warn you to change direction"
            ],
            correctAnswer: 0,
            explanation: "Chevrons on motorways indicate safe following distances (keep 2 apart)."
        },
        {
            text: "You're travelling on a road that has speed humps. What should you do when the driver in front is travelling more slowly than you?",
            options: [
                "Sound your horn",
                "Slow down and stay behind",
                "Overtake as soon as you can",
                "Flash your headlights"
            ],
            correctAnswer: 1,
            explanation: "Speed humps are for traffic calming. Be patient."
        },
        {
            text: "What must you do when overtaking a car at night?",
            options: [
                "Select a higher gear",
                "Make sure you don't dazzle other road users",
                "Flash your headlights before overtaking",
                "Switch your lights to full beam before overtaking"
            ],
            correctAnswer: 1,
            explanation: "Avoid dazzling the driver you are overtaking (use dipped until past)."
        },
        {
            text: "What should you do when making a journey in foggy conditions?",
            options: [
                "Follow other vehicles' tail lights closely",
                "Keep two seconds behind the vehicle ahead",
                "Leave plenty of time for your journey",
                "Avoid using dipped headlights"
            ],
            correctAnswer: 2,
            explanation: "Allow extra time for slow progress."
        },
        {
            text: "What's a rumble device designed to do?",
            imageSrc: "/images/driving-theory/rumble-strips.png",
            options: [
                "Prevent cattle escaping",
                "Alert you to a hazard",
                "Alert you to low tyre pressure",
                "Give directions"
            ],
            correctAnswer: 1,
            explanation: "Rumble strips alert drivers (by sound/vibration) to hazards like roundabouts or speed limits."
        },
        {
            text: "You're on a motorway in fog. The left-hand edge of the motorway can be identified by reflective studs. What colour are they?",
            options: [
                "Red",
                "Amber",
                "White",
                "Green"
            ],
            correctAnswer: 0,
            explanation: "Red studs mark the left edge. Amber marks the central reservation. White separates lanes. Green marks slip roads."
        },
        {
            text: "What do traffic-calming measures do?",
            options: [
                "Make overtaking easier",
                "Slow traffic down",
                "Stop road rage",
                "Make parking easier"
            ],
            correctAnswer: 1,
            explanation: "They are designed to reduce vehicle speeds."
        },
        {
            text: "Which of these plates normally appears with this road sign?",
            imageSrc: "/images/driving-theory/hump-bridge-sign.png",
            options: [
                "Low Bridge",
                "Humps for 1/2 mile",
                "Soft Verge",
                "Hump Bridge"
            ],
            correctAnswer: 3,
            explanation: "Hump bridge sign often has a plate indicating severity or distance. 'Humps for 1/2 mile' is also possible with a hump sign, but 'Hump Bridge' is the direct label."
        },
        {
            text: "When may you wait in a box junction?",
            imageSrc: "/images/driving-theory/box-junction-diagram.png",
            options: [
                "When approaching a zebra crossing",
                "When approaching a pelican crossing",
                "When you're stationary in a queue of traffic",
                "When oncoming traffic prevents you turning right"
            ],
            correctAnswer: 3,
            explanation: "You can enter a box junction to turn right if your exit is clear but you are waiting for oncoming traffic."
        },
        {
            text: "What should you do when you're overtaking at night?",
            options: [
                "Put your headlights on full beam",
                "Beware of bends in the road ahead",
                "Sound your horn twice before moving out",
                "Wait until a bend so that you can see oncoming headlights"
            ],
            correctAnswer: 1,
            explanation: "Bends can hide oncoming traffic headlight beams."
        },
        {
            text: "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
            options: [
                "It will be no different",
                "It will be doubled",
                "It will be ten times greater",
                "It will be halved"
            ],
            correctAnswer: 1,
            explanation: "Stopping distances double in the wet."
        },
        {
            text: "When may you overtake another vehicle on the left?",
            options: [
                "When approaching a motorway slip road where you'll be turning off",
                "When a slower vehicle is travelling in the right-hand lane of a dual carriageway",
                "When the vehicle in front is signaling to turn left",
                "When you're in a one-way street"
            ],
            correctAnswer: 2,
            explanation: "Also permitted in one-way streets or queuing traffic."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 8: Vehicle Handling...\n");

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
            videoUrl: "https://vimeo.com/1014247973",
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
