const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Lesson 14: Incidents, Accidents and Emergencies",
    description: "Learn how to respond effectively to breakdowns, collisions, and medical emergencies on the road.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/1011728647?fl=pl&fe=sh",
    questions: [
        {
            text: "You lose control of your car and damage a garden wall. No-one is around. What must you do?",
            options: ["Report the incident to your insurance company when you get home", "Find someone in the area to tell them about it immediately", "Report the incident to the police within 24 hours", "Go back to tell the house owner the next day"],
            correctAnswer: 2,
            explanation: "If you damage property and cannot find the owner, you must report it to the police as soon as is reasonably practicable, and in any case within 24 hours."
        },
        {
            text: "You're in collision with another moving vehicle. Someone is injured and your vehicle is damaged. What information should you find out?",
            options: ["The occupation of the other driver", "The destination of the other driver", "The other driver's name, address and telephone number", "Whether the other driver is licensed to drive"],
            correctAnswer: 2,
            explanation: "You must exchange name, address, and vehicle registration details with anyone having reasonable grounds for requiring them."
        },
        {
            text: "You have a collision while your car is moving. What's the first thing you must do?",
            options: ["Call the emergency services", "Stop only if someone waves at you", "Stop at the scene of the incident", "Call your insurance company"],
            correctAnswer: 2,
            explanation: "If you are involved in an accident which causes damage or injury to any other person, vehicle, animal or property, YOU MUST STOP."
        },
        {
            text: "What should you carry for use in the event of a collision?",
            options: ["Road map", "Fire extinguisher", "Jump leads", "Can of petrol"],
            correctAnswer: 1,
            explanation: "Carrying a fire extinguisher can help you deal with small fires before they become uncontrollable."
        },
        {
            text: "Your vehicle has broken down on an automatic railway level crossing. What should you do first?",
            options: ["Get everyone out of the vehicle and clear of the crossing", "Walk along the track to give warning to any approaching trains", "Try to push the vehicle clear of the crossing as soon as possible", "Telephone your vehicle recovery service to move it"],
            correctAnswer: 0,
            explanation: "Safety is the priority. Get everyone out and well away from the tracks immediately."
        },
        {
            text: "What should you do as you approach a long road tunnel?",
            options: ["Put on your sunglasses and use the sun visor", "Change down to a lower gear", "Turn your headlights on to main beam", "Make sure your radio is tuned to the frequency shown"],
            correctAnswer: 3,
            explanation: "Tune your radio to the frequency shown at the tunnel entrance to receive important safety messages."
        },
        {
            text: "You're in a tunnel. Your vehicle is on fire and you can't drive it. What should you do?",
            options: ["Stay in the vehicle and close the windows", "Leave the engine running", "Switch on hazard warning lights", "Switch off all of your lights"],
            correctAnswer: 2,
            explanation: "Switch on your hazard warning lights to warn other drivers, and then try to extinguish the fire if safe to do so."
        },
        {
            text: "Your vehicle catches fire while driving through a tunnel. It's still drivable. What should you do?",
            options: ["Drive it out of the tunnel if you can do so", "Park it away from the carriageway", "Pull up, then walk to an emergency telephone", "Leave it where it is, with the engine running"],
            correctAnswer: 0,
            explanation: "If your vehicle catches fire, try to drive it out of the tunnel to reduce the risk of smoke and fire trapped underground."
        },
        {
            text: "Your vehicle breaks down in a tunnel. What should you do?",
            options: ["Switch on hazard warning lights, then go and call for help", "Stand in front of your vehicle to warn oncoming drivers", "Stay in your vehicle and wait for the police", "Stand in the lane behind your vehicle to warn others"],
            correctAnswer: 0,
            explanation: "Turn on hazard lights and use an emergency telephone to call for help."
        },
        {
            text: "While you're driving, a warning light on your vehicle's instrument panel comes on. What should you do?",
            options: ["Continue if the engine sounds all right", "Check out the problem quickly and safely", "Hope that it's just a temporary electrical fault", "Deal with the problem when there's more time"],
            correctAnswer: 1,
            explanation: "Warning lights indicate potential safety issues. Check your vehicle's handbook and resolve the issue immediately."
        },
        {
            text: "You're on the motorway. Luggage falls from your vehicle. What should you do?",
            options: ["Walk back up the motorway to pick it up", "Stop at the next emergency telephone and contact the police", "Pull up on the hard shoulder and wave traffic down", "Stop on the motorway and switch on hazard warning lights while you pick it up"],
            correctAnswer: 1,
            explanation: "Never try to retrieve something from the motorway yourself. Use an emergency phone or contact 999."
        },
        {
            text: "What safeguard could you take against fire risk to your vehicle?",
            options: ["Use fuel additives", "Keep water levels above maximum", "Check out any strong smell of fuel", "Avoid driving with a full tank of fuel"],
            correctAnswer: 2,
            explanation: "A strong smell of fuel is often a sign of a leak, which is a major fire risk."
        },
        {
            text: "You're driving through a tunnel and the traffic is flowing normally. What should you do?",
            options: ["Use rear fog lights", "Use front spotlights", "Use dipped headlights", "Use parking lights"],
            correctAnswer: 2,
            explanation: "You must use dipped headlights in tunnels so that you are visible to other drivers."
        },
        {
            text: "Before driving through a tunnel, what should you do?",
            options: ["Remove any sunglasses", "Close your sunroof", "Switch off your radio", "Switch on your windscreen wipers"],
            correctAnswer: 0,
            explanation: "Sunglasses can make it difficult to see in the low-light conditions of a tunnel."
        },
        {
            text: "You've broken down on a motorway. When you use the emergency telephone, what will you be asked for?",
            options: ["Details about your vehicle", "Your driving licence details", "The name of your vehicle's insurance company", "Your employer's details"],
            correctAnswer: 0,
            explanation: "The operator will ask for your location and details about your vehicle to arrange assistance."
        },
        {
            text: "You're driving on a motorway. When can you use hazard warning lights?",
            options: ["When a vehicle is following too closely", "When you slow down quickly because of danger ahead", "When you're towing another vehicle", "When you're driving on the hard shoulder"],
            correctAnswer: 1,
            explanation: "Hazard lights may be used on motorways or unrestricted dual carriageways to warn following drivers of a hazard or obstruction ahead."
        },
        {
            text: "You've stalled in the middle of a level crossing and can't restart the engine. The warning bells start to ring. What should you do?",
            options: ["Run down the track to warn the signal operator", "Push the vehicle clear of the crossing", "Carry on trying to restart the engine", "Get out of the car and clear of the crossing"],
            correctAnswer: 3,
            explanation: "If the bells ring, a train is imminent. Get yourself and any passengers clear immediately."
        },
        {
            text: "Your vehicle has a puncture on a motorway. What should you do?",
            options: ["Pull up on the hard shoulder. Change the wheel as quickly as possible", "Switch on your hazard warning lights. Stop in your lane", "Drive slowly to the next service area to get assistance", "Pull up on the hard shoulder. Use the emergency phone to get assistance"],
            correctAnswer: 3,
            explanation: "It is dangerous to change a wheel on the hard shoulder. Call for professional recovery."
        },
        {
            text: "Your tyre bursts while you're driving. What should you do?",
            options: ["Pull on the handbrake", "Pull up slowly at the side of the road", "Brake as quickly as possible", "Continue on at a normal speed"],
            correctAnswer: 1,
            explanation: "Keep a firm grip on the steering wheel, keep the car heading straight, and allow it to slow down gradually."
        },
        {
            text: "You break down on a level crossing. The lights haven't yet begun to flash. What's the first thing you should do?",
            options: ["Tell drivers behind what has happened", "Leave your vehicle and get everyone clear", "Walk down the track and signal the next train", "Stay in your car until you're told to move"],
            correctAnswer: 1,
            explanation: "Get everyone out and away from the crossing first, then use the phone (if provided) to contact the signalman."
        },
        {
            text: "You've broken down on a two-way road. You have a warning triangle. At least how far from your vehicle should you place the warning triangle?",
            imageSrc: "/images/driving-theory/sign-hazard-warning-triangle.png",
            options: ["45 meters (147 feet)", "100 meters (328 feet)", "5 meters (16 feet)", "25 meters (82 feet)"],
            correctAnswer: 0,
            explanation: "Place a triangle at least 45 meters behind your vehicle on the same side of the road."
        },
        {
            text: "There's been a collision. A motorcyclist is lying injured and unconscious. Unless it's essential, why should you not usually attempt to remove their helmet?",
            options: ["This could result in more serious injury", "You could scratch the helmet", "They'll get too cold if you do this", "They might not want you to"],
            correctAnswer: 0,
            explanation: "Removing a helmet could worsen a spinal or head injury. Only remove it if it's essential for their breathing."
        },
        {
            text: "You're at the scene of an incident. Someone is suffering from shock. How should you treat them?",
            options: ["Reassure them confidently", "Give them a warm drink", "Offer them a cigarette", "Offer them some food"],
            correctAnswer: 0,
            explanation: "Reassurance is vital. Do not give them anything to eat or drink."
        },
        {
            text: "At an incident, what should you do with a casualty who has stopped breathing?",
            options: ["Remove anything that's blocking their airway", "Keep their head tilted forwards as far as possible", "Raise their legs to help with circulation", "Try to give them something to drink"],
            correctAnswer: 0,
            explanation: "Ensuring the airway is clear is the first step in resuscitation (DR ABC)."
        },
        {
            text: "A collision has just happened. An injured person is lying in a busy road. What's the first thing you should do to help?",
            options: ["Warn other traffic", "Treat the person for shock", "Make sure the injured person is kept warm", "Place them in the recovery position"],
            correctAnswer: 0,
            explanation: "Protect the scene to prevent further collisions by warning other traffic."
        },
        {
            text: "A casualty has an injured arm. They can move it freely but it's bleeding. Why should you get them to keep it in a raised position?",
            options: ["It will help them to be seen more easily", "It will ease the pain", "It will help to reduce the blood flow", "To stop them touching other people"],
            correctAnswer: 2,
            explanation: "Gravity helps reduce blood flow to a raised limb, aiding clotting."
        },
        {
            text: "You're involved in a collision. Afterwards, which document may the police ask you to produce?",
            options: ["Driving licence", "Theory test certificate", "Vehicle registration document", "Vehicle service record"],
            correctAnswer: 0,
            explanation: "The police can ask to see your driving license and certificate of insurance."
        },
        {
            text: "After a collision, someone is unconscious in their vehicle. When should you call the emergency services?",
            options: ["Only as a last resort", "As soon as possible", "After checking for broken bones", "After you've woken them up"],
            correctAnswer: 1,
            explanation: "Time is critical. Get professional help as quickly as possible."
        },
        {
            text: "A tanker is involved in a collision. Which sign shows that it's carrying dangerous goods?",
            options: ["[Image: /images/driving-theory/sign-long-vehicle.png]", "[Image: /images/driving-theory/sign-hazard-marker.png]", "[Image: /images/driving-theory/sign-hazardous-chemicals.png]", "[Image: /images/driving-theory/sign-hazard-warning-triangle.png]"],
            correctAnswer: 2,
            explanation: "Tankers carrying dangerous goods will display orange hazardous material labels."
        },
        {
            text: "At an incident, it's important to look after any casualties. What should you do with them when the area is safe?",
            options: ["Ask them how it happened", "Give them something to eat", "Keep them where they are", "Move them away from the vehicles"],
            correctAnswer: 2,
            explanation: "Unless there is danger from fire or traffic, keep casualties where they are to avoid worsening any injuries."
        },
        {
            text: "At an incident, a casualty is unconscious but breathing. When should you move them?",
            options: ["When an ambulance is on its way", "When bystanders advise you to", "When there's further danger", "When bystanders will help you"],
            correctAnswer: 2,
            explanation: "Only move an injured person if there is an immediate threat to their life (e.g., fire)."
        },
        {
            text: "You arrive at an incident. A pedestrian is bleeding heavily from a leg wound. The leg isn't broken and there's nothing in the wound. What should you do?",
            options: ["Keep both legs flat on the ground", "Fetch them a warm drink", "Raise the leg to lessen bleeding", "Dab the wound to stop bleeding"],
            correctAnswer: 2,
            explanation: "Raise the limb that is bleeding and apply firm pressure to the wound."
        },
        {
            text: "At an incident, someone is suffering from severe burns. What should you do to help them?",
            options: ["Burst any blisters", "Remove anything sticking to the burns", "Douse the burns with clean, cool, non-toxic liquid", "Apply lotions to the injury"],
            correctAnswer: 2,
            explanation: "Cool the burn immediately using cool water or a non-toxic liquid for at least 20 minutes."
        },
        {
            text: "At an incident, a casualty isn't breathing. What should you do while helping them to start breathing again?",
            options: ["Shake them firmly", "Put their arms across their chest", "Roll them onto their side", "Tilt their head back gently"],
            correctAnswer: 3,
            explanation: "Tilting the head back opens the airway (Airway in DR ABC)."
        },
        {
            text: "At an incident, a small child isn't breathing. To restore normal breathing, how should you breathe into their mouth?",
            options: ["Heavily", "Rapidly", "Sharply", "Gently"],
            correctAnswer: 3,
            explanation: "For children, apply gentle breaths into the mouth and nose simultaneously."
        },
        {
            text: "You arrive at the scene of a motorcycle crash. No other vehicle is involved. The rider is unconscious and lying in the middle of the road. What's the first thing you should do at the scene?",
            options: ["Give the rider reassurance", "Warn other traffic", "Clear the road of debris", "Move the rider out of the road"],
            correctAnswer: 1,
            explanation: "Ensure the scene is safe for you and the casualty before providing first aid."
        },
        {
            text: "There's been a collision. A driver is suffering from shock. What should you do?",
            options: ["Reassure them", "Ask who caused the incident", "Offer them a cigarette", "Give them a drink"],
            correctAnswer: 0,
            explanation: "Reassure them and keep them warm until help arrives."
        },
        {
            text: "You've stopped at an incident to give help. What should you do?",
            options: ["Keep injured people on the move by walking them around", "Keep injured people warm and comfortable", "Give injured people something to eat", "Give injured people a warm drink"],
            correctAnswer: 1,
            explanation: "Keep casualties warm and don't give them anything to eat or drink."
        },
        {
            text: "At an incident someone is unconscious. What would your priority be?",
            options: ["Make them comfortable", "Find out their name", "Wake them up", "Check their airway is clear (DR ABC - Danger, Response, Airway, Breathing, Compressions)"],
            correctAnswer: 3,
            explanation: "Follow the DR ABC protocol: Danger, Response, Airway, Breathing, Compressions."
        },
        {
            text: "You arrive at an incident. There's no danger from fire or further collisions. What's your first priority when attending to an unconscious motorcyclist?",
            options: ["Check whether they have any broken bones", "Check whether they’re breathing", "Check whether they're bleeding", "Check whether they have any bruising"],
            correctAnswer: 1,
            explanation: "Checking for breathing is the first priority after ensuring the airway is clear."
        },
        {
            text: "You arrive at the scene of a motorcycle crash. The rider is injured. When should their helmet be removed?",
            options: ["Only when it's essential", "Only when the motorcyclist asks", "Always, unless they're in shock", "Always straight away"],
            correctAnswer: 0,
            explanation: "Only remove a rider's helmet if it is essential to save their life (e.g., if they have stopped breathing)."
        },
        {
            text: "You're the first person to arrive at an incident where people are badly injured. You've switched on your hazard warning lights and checked all engines are stopped. What else should you do?",
            options: ["Stop other cars and ask the drivers for help", "Make sure that an ambulanceis called for", "Move the people who are injured clear of their vehicles", "Try and get people who are injured to drink something"],
            correctAnswer: 1,
            explanation: "Ensure the emergency services are on their way as soon as possible."
        },
        {
            text: "You're the first to arrive at the scene of a crash. What should you do?",
            options: ["Drag all casualties away from the vehicles", "Flag down other motorists to help you", "Leave as soon as another motorist arrives", "Call the emergency services promptly"],
            correctAnswer: 3,
            explanation: "Alert the professionals immediately."
        },
        {
            text: "An adult casualty isn't breathing. To maintain circulation, compressions should be given. What's the correct depth to press for each compression?",
            options: ["5 to 6 centimeters", "1 to 2 centimeters", "10 to 15 centimeters", "15 to 20 centimeters"],
            correctAnswer: 0,
            explanation: "Chest compressions should be 5 to 6 cm deep for an adult."
        },
        {
            text: "You're going through a long tunnel. What will warn you of congestion or an incident ahead?",
            options: ["Variable message signs", "Areas with hatch markings", "Hazard warning lines", "Other drivers flashing their lights"],
            correctAnswer: 0,
            explanation: "Variable message signs provide real-time information about conditions inside the tunnel."
        },
        {
            text: "What should you do if you see a large box fall from a lorry onto the motorway?",
            options: ["Go to the next emergency telephone and report the hazard", "Pull over to the hard shoulder, then remove the box", "Stop close to the box until the police arrive", "Catch up with the lorry and try to get the driver's attention"],
            correctAnswer: 0,
            explanation: "Report the hazard so that the authorities can remove it safely. Never try to pick it up yourself."
        },
        {
            text: "An injured motorcyclist is lying unconscious in the road. The traffic has stopped and there's no further danger. What should you do to help?",
            options: ["Move the person off the road", "Remove their safety helmet", "Remove their leather jacket", "Seek medical assistance"],
            correctAnswer: 3,
            explanation: "Call for professional help immediately."
        },
        {
            text: "A person has been injured. They may be suffering from shock. What are the warning signs to look for?",
            options: ["Pale grey skin", "Slow pulse", "Flushed complexion", "Warm dry skin"],
            correctAnswer: 0,
            explanation: "Warning signs of shock include a fast, weak pulse and pale grey skin."
        },
        {
            text: "An injured person has been placed in the recovery position. They're unconscious but breathing normally. What else should be done?",
            options: ["Place their arms by their side", "Check their airway remains clear", "Press firmly between their shoulders", "Give them a hot sweet drink"],
            correctAnswer: 1,
            explanation: "Continue to monitor the casualty until professional help takes over."
        },
        {
            text: "A casualty isn't breathing normally. Chest compressions should be given. At what rate?",
            options: ["120 per minute", "240 per minute", "60 per minute", "10 per minute"],
            correctAnswer: 0,
            explanation: "Chest compressions should be given at a rate of 100-120 per minute."
        },
        {
            text: "Following a collision, someone has suffered a burn. The burn needs to be cooled. What's the shortest time it should be cooled for?",
            options: ["20 minutes", "10 minutes", "15 minutes", "5 minutes"],
            correctAnswer: 0,
            explanation: "Burns should be cooled for at least 20 minutes under cool water or liquid."
        },
        {
            text: "At an incident, a casualty is unconscious. You need to check whether they're breathing. How long should you allow for this check?",
            options: ["At least 2 seconds", "At least 10 seconds", "At least 1 minute", "At least 2 minutes"],
            correctAnswer: 1,
            explanation: "Check for breathing for at least 10 seconds before starting resuscitation."
        },
        {
            text: "You arrive at the scene of a crash. Someone is bleeding badly from an arm wound. Nothing is embedded in it. What should you do?",
            options: ["Apply pressure over the wound and keep the arm down", "Dab the wound", "Get them a drink", "Apply pressure over the wound and raise the arm"],
            correctAnswer: 3,
            explanation: "Apply direct pressure and raise the limb above the heart to reduce bleeding."
        },
        {
            text: "On a motorway, when should the hard shoulder be used?",
            options: ["When checking a road map", "When answering a mobile phone", "When taking a short rest", "When an emergency arises"],
            correctAnswer: 3,
            explanation: "The hard shoulder is only for emergencies. Do not stop there for any other reason."
        },
        {
            text: "You're going through a congested tunnel and have to stop. What should you do?",
            options: ["Ignore any message signs, as they're never up to date", "Pull up very close to the vehicle in front to save space", "Keep a safe distance from the vehicle in front", "Make a U-turn and find another route"],
            correctAnswer: 2,
            explanation: "Always leave enough space between your vehicle and the one ahead, even when stopped."
        },
        {
            text: "When are you allowed to use hazard warning lights?",
            options: ["When parked on double yellow lines to visit a shop", "When travelling slowly because you're lost", "When travelling during darkness without headlights", "When stopped and temporarily obstructing traffic"],
            correctAnswer: 3,
            explanation: "Hazard lights are used to warn other drivers that you are a temporary obstruction."
        },
        {
            text: "When should you use hazard warning lights?",
            options: ["When you slow down quickly on a motorway because of a hazard ahead", "When you need to park on the pavement", "When you wish to stop on double yellow lines", "When you leave your car at the roadside to visit a shop"],
            correctAnswer: 0,
            explanation: "Use them on motorways or dual carriageways to warn following traffic of danger ahead."
        },
        {
            text: "You see a car on the hard shoulder of a motorway with a 'help' pennant displayed. What does this mean?",
            options: ["The driver is a foreign visitor", "The driver is likely to be a disabled person", "The driver is a rescue patrol officer", "The driver is first-aid trained"],
            correctAnswer: 1,
            explanation: "A 'help' pennant indicates the driver may be disabled and unable to walk to an emergency phone."
        }
    ]
};

async function main() {
    console.log(`🚗 Seeding Driving Theory - Lesson 14: Incidents, Accidents and Emergencies (${quiz.questions.length} questions)...`);

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
                    imageSrc: q.imageSrc || null,
                    options: JSON.stringify(q.options),
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation
                }))
            }
        }
    });

    console.log("✅ Lesson 14 seeded successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
