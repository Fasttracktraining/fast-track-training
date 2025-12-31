const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 7: Hazard Awareness
 * 81 questions
 */

const quiz = {
    title: "Lesson 7: Hazard Awareness",
    description: "Learn to identify and respond to potential hazards on the road.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "Your motorway journey is boring and you feel drowsy. What should you do?",
            options: [
                "Stop on the hard shoulder for a sleep",
                "Slow down and let other drivers overtake",
                "Speed up to arrive at your destination sooner",
                "Open a window and stop as soon as it's safe and legal"
            ],
            correctAnswer: 3,
            explanation: "Fresh air can help, but you must stop in a safe place to rest."
        },
        {
            text: "Why should the junction on the left be kept clear?",
            imageSrc: "/images/driving-theory/junction-left-clear.png",
            options: [
                "To allow vehicles to park",
                "To allow the bus to reverse",
                "To allow vehicles to make a U-turn",
                "To allow vehicles to enter and emerge"
            ],
            correctAnswer: 3,
            explanation: "Keeping junctions clear allows traffic to flow and vehicles to turn safely."
        },
        {
            text: "After passing your driving test, you suffer from ill health. This affects your driving. What must you do?",
            options: [
                "Inform your local police",
                "Always drive accompanied",
                "Inform the licensing authority",
                "Avoid using motorways"
            ],
            correctAnswer: 2,
            explanation: "You must inform the DVLA (or DVA in NI) if your health affects your driving."
        },
        {
            text: "You're waiting to emerge at a junction. Your view is restricted by parked vehicles. What can help you to see traffic on the road you're joining?",
            options: [
                "Checking for traffic in your interior mirror",
                "Making eye contact with other road users",
                "Looking for traffic behind you",
                "Reflections of traffic in shop windows"
            ],
            correctAnswer: 3,
            explanation: "Reflections in windows can sometimes help you see approaching traffic when your direct view is blocked."
        },
        {
            text: "In which circumstances may you use hazard warning lights?",
            options: [
                "When warning oncoming traffic that you intend to stop",
                "When you're double-parked on a two-way road",
                "When driving on a motorway to warn traffic behind of a hazard ahead",
                "When your direction indicators aren't working"
            ],
            correctAnswer: 2,
            explanation: "Use them briefly on motorways or dual carriageways to warn of a hazard ahead."
        },
        {
            text: "In what way are provisional car licence holders restricted?",
            options: [
                "They can't carry passengers in the rear seats",
                "They can't drive unaccompanied",
                "They can't drive between 11.30 pm and 7.00 am",
                "They can't drive at more than 40 mph"
            ],
            correctAnswer: 1,
            explanation: "Learner drivers must be supervised by a qualified driver."
        },
        {
            text: "Ahead of you, traffic in the left-hand lane is slowing. What should you do?",
            imageSrc: "/images/driving-theory/traffic-slowing.png",
            options: [
                "Move across and continue in the right-hand lane",
                "Slow down, keeping a safe separation distance",
                "Accelerate past the vehicles in the left-hand lane",
                "Pull up on the left-hand verge"
            ],
            correctAnswer: 1,
            explanation: "Anticipate that traffic may stop or change lanes. Slow down and maintain a safe gap."
        },
        {
            text: "You're driving towards this left-hand bend. What dangers should you be aware of?",
            imageSrc: "/images/driving-theory/left-hand-bend.png",
            options: [
                "No sign to warn you of the bend",
                "No white lines in the centre of the road",
                "A vehicle overtaking you",
                "Pedestrians walking towards you"
            ],
            correctAnswer: 3,
            explanation: "Pedestrians walking on the road (facing traffic) may be around the bend."
        },
        {
            text: "You're driving along this motorway. It's raining. What should you do when following this lorry?",
            imageSrc: "/images/driving-theory/lorry-rain-spray.png",
            options: [
                "Be aware of spray reducing your vision",
                "Be aware of water cause tyre slip",
                "Move right and stay in the right-hand lane",
                "Move left and drive on the hard shoulder"
            ],
            correctAnswer: 0,
            explanation: "Large vehicles create a lot of spray, which reduces visibility."
        },
        {
            text: "When driving a car fitted with automatic transmission, what would you use 'kick down' for?",
            options: [
                "Fuel economy",
                "Slow braking",
                "Cruise control",
                "Quick acceleration"
            ],
            correctAnswer: 3,
            explanation: "Kick down selects a lower gear for rapid acceleration, e.g., for overtaking."
        },
        {
            text: "You want to turn left at this junction. Your view of the main road is restricted. What should you do?",
            imageSrc: "/images/driving-theory/restricted-junction-view.png",
            options: [
                "Build up your speed so that you can emerge quickly",
                "Approach slowly and edge out until you can see more clearly",
                "Stop and apply the handbrake even if the road is clear",
                "Stay well back and wait to see if anything comes"
            ],
            correctAnswer: 1,
            explanation: "Creep forward slowly ('peep and creep') until you can see clearly."
        },
        {
            text: "When should you use hazard warning lights?",
            options: [
                "When warning oncoming traffic that you intend to stop",
                "When your direction indicators aren't working",
                "When your vehicle has broken down and is causing an obstruction",
                "When you're double-parked on a two-way road"
            ],
            correctAnswer: 2,
            explanation: "Use them if your vehicle is stationary and causing a temporary obstruction."
        },
        {
            text: "You find that your eyesight has become very poor and your optician cannot help you. By law, who should you tell?",
            options: [
                "Another optician",
                "The local police",
                "Your own doctor",
                "The driver licensing authority"
            ],
            correctAnswer: 3,
            explanation: "You must inform the licensing authority if you cannot meet the eyesight requirements."
        },
        {
            text: "What can seriously affect your ability to concentrate?",
            options: [
                "Busy roads",
                "Contact lenses",
                "Tinted windows",
                "Drugs"
            ],
            correctAnswer: 3,
            explanation: "Drugs (prescription or illegal) can severely affect concentration and reaction times."
        },
        {
            text: "Which of the following types of glasses shouldn't be worn when driving at night?",
            options: [
                "Round",
                "Tinted",
                "Bifocal",
                "Half-moon"
            ],
            correctAnswer: 1,
            explanation: "Tinted glasses reduce the amount of light entering your eyes, making it harder to see at night."
        },
        {
            text: "You find that you need glasses to read vehicle number plates at the required distance. When must you wear them?",
            options: [
                "At all times when driving",
                "Only when you think it's necessary",
                "Only in bad weather conditions",
                "Only in bad light or at night time"
            ],
            correctAnswer: 0,
            explanation: "You must wear them whenever you are driving to meet the legal eyesight standard."
        },
        {
            text: "Your doctor has given you a course of medicine. Why should you ask how it will affect you?",
            options: [
                "The medicine you take may affect your hearing",
                "You'll have to let your insurance company know about the medicine",
                "Some types of medicine can cause your reactions to slow down",
                "Drugs make you a better driver by quickening your reactions"
            ],
            correctAnswer: 2,
            explanation: "Some medicines cause drowsiness or slow reactions."
        },
        {
            text: "What's a common effect of drinking alcohol?",
            options: [
                "Increased concentration",
                "Faster reactions",
                "Increased confidence",
                "Colour blindness"
            ],
            correctAnswer: 2,
            explanation: "Alcohol gives a false sense of confidence while impairing judgement and control."
        },
        {
            text: "You're about to drive home. You can't find the glasses you need to wear. What should you do?",
            options: [
                "Borrow a friend's glasses and use those",
                "Drive home at night, so that the lights will help you",
                "Drive home slowly, keeping to quiet roads",
                "Find a way of getting home without driving"
            ],
            correctAnswer: 3,
            explanation: "Do not drive if you cannot see clearly without your glasses."
        },
        {
            text: "You've just been overtaken by this motorcyclist, who has cut in sharply. What should you do?",
            imageSrc: "/images/driving-theory/motorcyclist-cutting-in.png",
            options: [
                "Flash your lights",
                "Brake firmly",
                "Keep a safe gap",
                "Sound the horn"
            ],
            correctAnswer: 2,
            explanation: "Stay calm and drop back to maintain a safe stopping distance."
        },
        {
            text: "You're driving on this dual carriageway. Why may you need to slow down?",
            imageSrc: "/images/driving-theory/dual-carriageway-hazard.png",
            options: [
                "There are road works ahead of you",
                "There's a broken white line in the centre",
                "There are no footpaths",
                "There are solid white lines on either side"
            ],
            correctAnswer: 0,
            explanation: "Be alert for signs of roadworks or hazards."
        },
        {
            text: "You've been involved in an argument that has made you feel angry. What should you do before starting your journey?",
            options: [
                "Open a window",
                "Turn on your radio",
                "Calm down",
                "Have an alcoholic drink"
            ],
            correctAnswer: 2,
            explanation: "Anger can affect your judgement. Calm down before driving."
        },
        {
            text: "You're driving along this road. The driver on the left is reversing from a driveway. What should you do?",
            imageSrc: "/images/driving-theory/car-reversing-driveway.png",
            options: [
                "Sound your horn and be prepared to stop",
                "Move to the opposite side of the road",
                "Drive through as you have priority",
                "Speed up and drive through quickly"
            ],
            correctAnswer: 0,
            explanation: "Alert the driver and be ready to stop if they don't see you."
        },
        {
            text: "What will be a serious distraction from driving?",
            options: [
                "Using your windscreen washers",
                "Switching on your demister",
                "Looking at road maps",
                "Looking in your door mirror"
            ],
            correctAnswer: 2,
            explanation: "Reading maps while driving takes your eyes off the road."
        },
        {
            text: "You take the wrong route and find you're on a one-way street. What should you do?",
            imageSrc: "/images/driving-theory/one-way-sign.png",
            options: [
                "Turn around in a side road",
                "Reverse into a driveway",
                "Continue to the end of the road",
                "Reverse out of the road"
            ],
            correctAnswer: 2,
            explanation: "You must not reverse or turn around in a one-way street. Carry on."
        },
        {
            text: "You take some cough medicine given to you by a friend. What should you do before driving?",
            options: [
                "Check the label to see if the medicine will affect your driving",
                "Drink some strong coffee one hour before driving",
                "Ask your friend if taking the medicine affected their driving",
                "Drive a short distance to see if the medicine is affecting your driving"
            ],
            correctAnswer: 0,
            explanation: "Always check the label for side effects like drowsiness."
        },
        {
            text: "You're driving on a long journey. What can you do to help prevent tiredness?",
            options: [
                "Eat a large meal before driving",
                "Complete the journey without stopping",
                "Take regular refreshment breaks",
                "Play loud music in the car"
            ],
            correctAnswer: 2,
            explanation: "Take a break of at least 15 minutes every two hours."
        },
        {
            text: "You're about to drive home. You feel very tired and have a severe headache. What should you do?",
            options: [
                "Drive home if you can stay awake for the journey",
                "Wait until you're fit and well before driving",
                "Drive home, but take a tablet for headaches",
                "Wait for a short time, then drive home slowly"
            ],
            correctAnswer: 1,
            explanation: "Do not drive if you remain unwell or tired."
        },
        {
            text: "What should you do if you become tired while you're driving on a motorway?",
            options: [
                "Pull up on the hard shoulder and change drivers",
                "Leave the motorway at the next exit and rest",
                "Close all your windows and set the heating to warm",
                "Increase your speed and turn up the radio volume"
            ],
            correctAnswer: 1,
            explanation: "Exit the motorway and find a safe place to rest (e.g., service station)."
        },
        {
            text: "What should you do if you begin to feel drowsy while you're driving?",
            options: [
                "Close the car windows to help you concentrate",
                "Continue with your journey but drive more slowly",
                "Turn the heater up to keep you warm and comfortable",
                "Stop and rest as soon as possible"
            ],
            correctAnswer: 3,
            explanation: "Stop in a safe place. Do not continue driving."
        },
        {
            text: "During periods of illness, your ability to drive may be impaired. What must you do?",
            options: [
                "See your doctor each time before you drive",
                "Take all your medicines with you when you drive",
                "Take smaller doses of any medicines",
                "Make sure you're medically fit to drive"
            ],
            correctAnswer: 3,
            explanation: "It is your responsibility to ensure you are fit to drive."
        },
        {
            text: "You're about to drive home from holiday when you become ill. A doctor prescribes drugs that are likely to affect your driving. What should you do?",
            options: [
                "Never drive at more than 30 mph",
                "Get someone else to drive",
                "Avoid driving on motorways",
                "Only drive if someone is with you"
            ],
            correctAnswer: 1,
            explanation: "Do not drive if medication impairs your ability."
        },
        {
            text: "You've been taking medicine that causes drowsiness. You begin to feel better, but you still need to take the medicine. What should you do about driving?",
            options: [
                "Ask someone to come with you",
                "Only drive if your journey is necessary",
                "Drive on quiet roads",
                "Avoid driving and check with your doctor"
            ],
            correctAnswer: 3,
            explanation: "Consult your doctor if you are unsure about the effects of medication."
        },
        {
            text: "What advice should you give to a driver who has had a few alcoholic drinks at a party?",
            options: [
                "Go home by public transport",
                "Drive home carefully and slowly",
                "Have a strong cup of coffee and then drive home",
                "Wait a short while and then drive home"
            ],
            correctAnswer: 0,
            explanation: "They should not drive. Suggest alternative transport."
        },
        {
            text: "You've been convicted of driving while unfit through drink or drugs. You'll find this is likely to cause the cost of one of the following to rise considerably. Which one?",
            options: [
                "Driving licence",
                "Insurance premiums",
                "Vehicle test certificate",
                "Road fund licence"
            ],
            correctAnswer: 1,
            explanation: "Insurance companies will increase premiums significantly for convicted drivers."
        },
        {
            text: "You're invited to a pub lunch. You know that you'll have to drive in the evening. What's your best course of action?",
            options: [
                "Don't drink any alcohol at all",
                "Eat a hot meal with your alcoholic drinks",
                "Have some milk before drinking alcohol",
                "Avoid mixing your alcoholic drinks"
            ],
            correctAnswer: 0,
            explanation: "Alcohol stays in the body for many hours. The safest option is not to drink."
        },
        {
            text: "You're driving on a road with several lanes. You see these signs above the lanes. What do they mean?",
            imageSrc: "/images/driving-theory/overhead-lane-signs.png",
            options: [
                "The two left lanes are open",
                "Traffic in the right lanes should stop",
                "The two right lanes are open",
                "Traffic in the left lanes should stop"
            ],
            correctAnswer: 0,
            explanation: "Green arrows indicate open lanes. Red crosses indicate closed lanes."
        },
        {
            text: "What might you expect to happen in this situation?",
            imageSrc: "/images/driving-theory/merge-lane-sign.png",
            options: [
                "Traffic will move into the left-hand lane",
                "Traffic won't need to change position",
                "Traffic will move into the right-hand lane",
                "Traffic speed will increase"
            ],
            correctAnswer: 0,
            explanation: "If a lane is closing (e.g., indicated by signs or road markings), traffic will merge."
        },
        {
            text: "Why should you reduce your speed when driving along this road?",
            imageSrc: "/images/driving-theory/staggered-junction-sign.png",
            options: [
                "A low bridge is ahead",
                "A staggered junction is ahead",
                "The road narrows ahead",
                "The road surface changes ahead"
            ],
            correctAnswer: 1,
            explanation: "Staggered junction signs warn of junctions on both sides."
        },
        {
            text: "You intend to turn left at the traffic lights. What should you do just before turning?",
            imageSrc: "/images/driving-theory/turn-left-traffic-lights.png",
            options: [
                "Check your right mirror",
                "Check for bicycles on your left",
                "Move up close to the white car",
                "Straddle the lanes"
            ],
            correctAnswer: 1,
            explanation: "Cyclists may be filtering up on your left. Check your blind spot."
        },
        {
            text: "What should the white car do when the traffic lights change to green?",
            imageSrc: "/images/driving-theory/white-car-cyclist-hazard.png",
            options: [
                "Sound their horn to warn the cyclist",
                "Wait for the cyclist to pull away",
                "Move off quickly and turn in front of the cyclist",
                "Move up close to the cyclist to beat the lights"
            ],
            correctAnswer: 1,
            explanation: "Give the cyclist time and space to move off safely."
        },
        {
            text: "You're behind this cyclist. When the traffic lights change, what should you do?",
            options: [
                "Allow the cyclist time and room",
                "Try to move off before the cyclist",
                "Tap your horn and drive through first",
                "Turn right but give the cyclist room"
            ],
            correctAnswer: 0,
            explanation: "Cyclists may be slower to move off. Be patient."
        },
        {
            text: "You're driving towards this level crossing. What would be the first warning of an approaching train?",
            imageSrc: "/images/driving-theory/level-crossing-warning.png",
            options: [
                "A steady amber light",
                "Both half-barriers down",
                "One half-barrier down",
                "Twin flashing red lights"
            ],
            correctAnswer: 0,
            explanation: "The steady amber light is the first warning signal at many level crossings."
        },
        {
            text: "What does the solid white line at the side of the road indicate?",
            imageSrc: "/images/driving-theory/solid-white-line.png",
            options: [
                "Edge of the carriageway",
                "Traffic lights ahead",
                "Footpath on the left",
                "Cycle path"
            ],
            correctAnswer: 0,
            explanation: "It marks the edge of the carriageway."
        },
        {
            text: "What's an effect of drinking alcohol?",
            options: [
                "A loss of confidence",
                "Greater awareness of danger",
                "Faster reactions",
                "Poor judgment of speed"
            ],
            correctAnswer: 3,
            explanation: "Alcohol impairs your ability to judge speed and distance."
        },
        {
            text: "Where shouldn't you overtake?",
            options: [
                "Travelling up a long hill",
                "On a single carriageway",
                "Approaching a junction",
                "On a one-way street"
            ],
            correctAnswer: 2,
            explanation: "Do not overtake approaching junctions as vehicles may emerge or turn."
        },
        {
            text: "Why should you be cautious when going past this stationary bus?",
            imageSrc: "/images/driving-theory/stationary-bus-hazard.png",
            options: [
                "People may cross the road in front of it",
                "The road surface will be slippery",
                "The driver may open the door",
                "There is traffic approaching in the distance"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians are often hidden by the bus."
        },
        {
            text: "What does this signal from a police officer mean to oncoming traffic?",
            imageSrc: "/images/driving-theory/police-officer-stop.png",
            options: [
                "Turn left",
                "Turn right",
                "Go ahead",
                "Stop"
            ],
            correctAnswer: 3,
            explanation: "A raised hand with palm facing you means stop."
        },
        {
            text: "You're on a dual carriageway. Ahead, you see a vehicle with an amber flashing light. What could this be?",
            options: [
                "A fire engine",
                "A doctor on call",
                "An ambulance",
                "A disabled person's vehicle"
            ],
            correctAnswer: 3,
            explanation: "Powered wheelchairs or mobility scooters (Class 3) use flashing amber lights on dual carriageways."
        },
        {
            text: "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
            options: [
                "Traffic in both directions can use the middle lane to overtake",
                "Traffic can overtake on the left",
                "Traffic uses the middle lane for emergencies only",
                "Traffic can travel faster in poor weather conditions"
            ],
            correctAnswer: 0,
            explanation: "The shared middle lane can lead to head-on conflict if drivers from both directions try to overtake simultaneously."
        },
        {
            text: "Why are place names painted on the road surface?",
            options: [
                "To enable you to change lanes early",
                "To prevent you changing lanes",
                "To restrict the flow of traffic",
                "To warn you of oncoming traffic"
            ],
            correctAnswer: 0,
            explanation: "They help you select the correct lane in good time."
        },
        {
            text: "When approaching this hazard, why should you slow down?",
            imageSrc: "/images/driving-theory/hazard-slow-junction.png",
            options: [
                "Because of animals crossing",
                "Because of approaching traffic",
                "Because of the level crossing",
                "Because it's hard to see to the right"
            ],
            correctAnswer: 3,
            explanation: "If visibility is restricted at a junction, slow down."
        },
        {
            text: "How should you drive in areas with traffic-calming measures?",
            options: [
                "At the speed limit",
                "In the centre of the road",
                "At a reduced speed",
                "With headlights on dipped beam"
            ],
            correctAnswer: 2,
            explanation: "Traffic calming is designed to slow traffic down."
        },
        {
            text: "A driver's behaviour has upset you. What can you do to safely get over this incident?",
            options: [
                "Shout abusive language",
                "Follow them, flashing your headlights",
                "Stop and take a break",
                "Gesture to them with your hand"
            ],
            correctAnswer: 2,
            explanation: "Take a break to calm down."
        },
        {
            text: "What's the main hazard you should be aware of when following this cyclist?",
            imageSrc: "/images/driving-theory/cyclist-swerving-hazard.png",
            options: [
                "The cyclist may move to the left and dismount",
                "The cyclist may wish to turn right at the end of the road",
                "The cyclist may swerve into the road",
                "The contents of the cyclist's carrier may fall onto the road"
            ],
            correctAnswer: 2,
            explanation: "Cyclists can be unsteady or swerve to avoid potholes/drains."
        },
        {
            text: "What hazard should you be aware of when travelling along this street?",
            imageSrc: "/images/driving-theory/residential-street-hazard.png",
            options: [
                "Glare from the sun",
                "Children running out between vehicles",
                "Large goods vehicles",
                "Lack of road markings"
            ],
            correctAnswer: 1,
            explanation: "In residential streets with parked cars, children may run out."
        },
        {
            text: "What type of vehicle displays this yellow sign?",
            imageSrc: "/images/driving-theory/school-bus-sign.png",
            options: [
                "An ice-cream van",
                "A school bus",
                "A private ambulance",
                "A broken-down vehicle"
            ],
            correctAnswer: 1,
            explanation: "The 'children' sign is used on school buses."
        },
        {
            text: "What's the main hazard the driver of the red car (arrowed) should be aware of?",
            imageSrc: "/images/driving-theory/red-car-overtaking-hazard.png",
            options: [
                "Glare from the sun may affect the driver's vision",
                "The black car may stop suddenly",
                "The bus may move out into the road",
                "Oncoming vehicles will assume the driver is turning right"
            ],
            correctAnswer: 2,
            explanation: "The car is attempting to pass a bus which may pull out."
        },
        {
            text: "You think the driver of the vehicle in front has forgotten to cancel their right indicator. What should you do?",
            options: [
                "Sound your horn before overtaking",
                "Stay behind and don't overtake",
                "Overtake on the left if there's room",
                "Flash your lights to alert the driver"
            ],
            correctAnswer: 1,
            explanation: "They may turn right at any moment. Wait and see."
        },
        {
            text: "A slow-moving lorry showing this sign is travelling in the middle lane of a three-lane motorway. How should you pass it?",
            imageSrc: "/images/driving-theory/lorry-arrow-sign.png",
            options: [
                "Don't pass the lorry and leave the motorway at the next exit",
                "Cautiously approach the lorry, then pass on either side",
                "Approach with care and pass on the left of the lorry",
                "Use the right-hand lane and pass the lorry normally"
            ],
            correctAnswer: 2,
            explanation: "The sign directs you to pass on the left."
        },
        {
            text: "Why are mirrors often slightly curved (convex)?",
            options: [
                "They make following traffic look bigger",
                "They give a wider field of vision",
                "They totally cover blind spots",
                "They make it easier to judge the speed of following traffic"
            ],
            correctAnswer: 1,
            explanation: "Convex mirrors provide a wider field of view, though vehicles appear further away."
        },
        {
            text: "What should you do as you approach this overhead bridge?",
            imageSrc: "/images/driving-theory/arch-bridge-height.png",
            options: [
                "Move across to the right-hand side before going through",
                "Move out to the centre of the road before going through",
                "Be prepared to give way to large vehicles in the middle of the road",
                "Find another route; this one is only for high vehicles"
            ],
            correctAnswer: 1,
            explanation: "Arched bridges are lower at the edges. Large vehicles may need the centre."
        },
        {
            text: "You're following a slower-moving vehicle on a narrow country road. There's a junction just ahead on the right. What should you do?",
            options: [
                "Accelerate quickly to pass before the junction",
                "Only consider overtaking when you're past the junction",
                "Slow down and prepare to overtake on the left",
                "Overtake after checking your mirrors and signaling"
            ],
            correctAnswer: 1,
            explanation: "Do not overtake near junctions."
        },
        {
            text: "What should the driver of the red car (arrowed) do?",
            imageSrc: "/images/driving-theory/pedestrian-crossing-road.png",
            options: [
                "Quickly drive behind the pedestrian in the road",
                "Tell the pedestrian in the road she shouldn't have crossed",
                "Wave towards the pedestrians who are waiting to cross",
                "Wait for the pedestrian in the road to cross"
            ],
            correctAnswer: 3,
            explanation: "Give way to pedestrians already crossing."
        },
        {
            text: "You're approaching a crossroads. The traffic lights have failed. What should you do?",
            options: [
                "Be prepared to stop for any traffic",
                "Brake sharply to a stop before looking",
                "Brake and stop only for large vehicles",
                "Be prepared to brake sharply to a stop"
            ],
            correctAnswer: 0,
            explanation: "Treat it as an uncontrolled junction. Be very careful."
        },
        {
            text: "The red lights are flashing. What should you do when approaching this level crossing?",
            options: [
                "Switch on hazard warning lights",
                "Go through carefully",
                "Go through quickly",
                "Stop before the barrier"
            ],
            correctAnswer: 3,
            explanation: "Flashing red lights mean stop."
        },
        {
            text: "You're planning a long journey. Do you need to plan rest stops?",
            options: [
                "No, only fuel stops will be needed",
                "Yes, regular stops help concentration",
                "Yes, you should plan to stop every half an hour",
                "No, you'll be less tired if you get there as soon as possible"
            ],
            correctAnswer: 1,
            explanation: "Plan to stop every two hours for at least 15 minutes."
        },
        {
            text: "You've just passed these warning lights. What hazard would you expect to see next?",
            imageSrc: "/images/driving-theory/amber-flashing-lights.png",
            options: [
                "A school crossing patrol",
                "An ambulance station",
                "A level crossing with no barrier",
                "An opening bridge"
            ],
            correctAnswer: 0,
            explanation: "Amber flashing lights usually warn of a school crossing patrol or children."
        },
        {
            text: "A driver pulls out of a side road in front of you, causing you to brake hard. What should you do?",
            options: [
                "Flash your lights to show your annoyance",
                "Ignore the error and stay calm",
                "Overtake as soon as possible",
                "Sound your horn to show your annoyance"
            ],
            correctAnswer: 1,
            explanation: "Stay calm and do not retaliate."
        },
        {
            text: "How would age affect an elderly person's driving ability?",
            options: [
                "They won't be able to obtain car insurance",
                "They won't signal at junctions",
                "They'll take longer to react to hazards",
                "They'll need glasses to read road signs"
            ],
            correctAnswer: 2,
            explanation: "Reaction times tend to slow with age."
        },
        {
            text: "What must you do at this junction?",
            imageSrc: "/images/driving-theory/stop-junction-hazard.png",
            options: [
                "Stop only if there's traffic on the main road",
                "Stop only if you're turning right",
                "Stop beyond the line, at a point where you can see clearly",
                "Stop behind the line, then edge forward to see clearly"
            ],
            correctAnswer: 3,
            explanation: "At a 'Stop' sign, you must stop behind the line. Then peep and creep to see."
        },
        {
            text: "What type of vehicle could you expect to meet in the middle of the road?",
            options: [
                "Bicycle",
                "Lorry",
                "Car",
                "Motorcycle"
            ],
            correctAnswer: 1,
            explanation: "Large vehicles may need to straddle lanes to negotiate narrow roads or bends."
        },
        {
            text: "Which type of vehicle should you be ready to give way to as you approach this bridge?",
            imageSrc: "/images/driving-theory/bridge-approach-hazard.png",
            options: [
                "Cars",
                "Motorcycles",
                "Buses",
                "Bicycles"
            ],
            correctAnswer: 2,
            explanation: "Buses are large and may need the centre of the road under a bridge."
        },
        {
            text: "Why must you take extra care when turning right at this junction?",
            imageSrc: "/images/driving-theory/restricted-view-junction.png",
            options: [
                "The footpaths are narrow",
                "The view is restricted",
                "The road surface is poor",
                "The road markings are faint"
            ],
            correctAnswer: 1,
            explanation: "Obstructions (hedges, walls, parked cars) can restrict your view."
        },
        {
            text: "You're approaching this cyclist. What should you do?",
            imageSrc: "/images/driving-theory/cyclist-junction-hazard.png",
            options: [
                "Flash your headlights at the cyclist",
                "Overtake the cyclist on the left-hand side",
                "Overtake before the cyclist gets to the junction",
                "Slow down and allow the cyclist to turn"
            ],
            correctAnswer: 3,
            explanation: "Do not overtake. Wait for them to turn."
        },
        {
            text: "You see this sign ahead. What should you expect?",
            imageSrc: "/images/driving-theory/left-bend-sign.png",
            options: [
                "The road will go steeply downhill",
                "The road will bend sharply to the right",
                "The road will bend sharply to the left",
                "The road will go steeply uphill"
            ],
            correctAnswer: 2,
            explanation: "Sharp bend to the left."
        },
        {
            text: "What should the driver of the grey car (arrowed) be especially aware of?",
            imageSrc: "/images/driving-theory/grey-car-hazard.png",
            options: [
                "Empty parking spaces",
                "The uneven road surface",
                "Traffic following behind",
                "Doors opening on parked cars"
            ],
            correctAnswer: 3,
            explanation: "Driving close to parked cars carries the risk of doors opening."
        },
        {
            text: "What should the driver of the car approaching the crossing do?",
            imageSrc: "/images/driving-theory/car-approaching-crossing.png",
            options: [
                "Continue at the same speed",
                "Sound the horn",
                "Slow down and get ready to stop",
                "Drive through quickly"
            ],
            correctAnswer: 2,
            explanation: "Allow the pedestrians to cross."
        },
        {
            text: "Which road user has caused a hazard?",
            imageSrc: "/images/driving-theory/hazard-identification-parked-car.png",
            options: [
                "The parked car (arrowed A)",
                "The moving car (arrowed C)",
                "The car turning (arrowed D)",
                "The pedestrian waiting to cross (arrowed B)"
            ],
            correctAnswer: 0,
            explanation: "Parking near a junction or crossing restricts view and is a hazard."
        },
        {
            text: "What's the main hazard shown in this picture?",
            imageSrc: "/images/driving-theory/cyclist-crossing-hazard.png",
            options: [
                "Vehicles turning right",
                "The cyclist crossing the road",
                "Vehicles doing U-turns",
                "Parked cars around the corner"
            ],
            correctAnswer: 1,
            explanation: "The cyclist riding across the road."
        },
        {
            text: "Where would you expect to see these markers?",
            imageSrc: "/images/driving-theory/rear-markers-hazard.png",
            options: [
                "On a motorway sign",
                "On a railway bridge",
                "On a large goods vehicle",
                "On a diversion sign"
            ],
            correctAnswer: 2,
            explanation: "Red and yellow chevron markers are found on the rear of large goods vehicles."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 7: Hazard Awareness...\n");

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
            videoUrl: "https://vimeo.com/1009429656",
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
