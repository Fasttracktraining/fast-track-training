const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 5: Vulnerable Road Users
 * 70 questions
 */

const quiz = {
    title: "Lesson 5: Vulnerable Road Users",
    description: "Learn how to deal safely with pedestrians, cyclists, motorcyclists, and other vulnerable road users.",
    courseSlug: "driving-theory",
    isPremium: false,
    questions: [
        {
            text: "You're driving towards a zebra crossing. A person in a wheelchair is waiting to cross. What should you do?",
            options: [
                "Be prepared to stop",
                "Wave to the person to wait",
                "Continue on your way",
                "Wave to the person to cross"
            ],
            correctAnswer: 0,
            explanation: "Ideally, you should stop to let them cross. Be patient, as they may cross slowly."
        },
        {
            text: "You're dazzled at night by a vehicle behind you. What should you do?",
            options: [
                "Set your mirror to dazzle the other driver",
                "Set your mirror to the anti-dazzle position",
                "Brake sharply to a stop",
                "Switch your rear lights on and off"
            ],
            correctAnswer: 1,
            explanation: "Use the anti-dazzle dip switch on your interior mirror to reduce the glare from headlights behind you."
        },
        {
            text: "You're driving past parked cars. You notice a bicycle wheel sticking out between them. What should you do?",
            options: [
                "Brake sharply and flash your headlights",
                "Slow down and wave the cyclist across",
                "Slow down and be prepared to stop for a cyclist",
                "Accelerate past quickly and sound your horn"
            ],
            correctAnswer: 2,
            explanation: "The cyclist may not have seen you. Slow down and be ready to stop if they pull out."
        },
        {
            text: "The road outside this school is marked with yellow zigzag lines. What do these lines mean?",
            imageSrc: "/images/driving-theory/school-zigzag.png",
            options: [
                "You must stay with your vehicle if you park here",
                "You may park on the lines when dropping off schoolchildren",
                "You may park on the lines when picking up schoolchildren",
                "You mustn't wait or park your vehicle here at all"
            ],
            correctAnswer: 3,
            explanation: "Yellow zigzag lines outside schools indicate that you must not wait or park on them at any time."
        },
        {
            text: "Where should you take particular care to look for motorcyclists and cyclists?",
            options: [
                "At junctions",
                "At zebra crossings",
                "On dual carriageways",
                "On one-way streets"
            ],
            correctAnswer: 0,
            explanation: "Junctions are dangerous for two-wheeled vehicles. They can be easily hidden in blind spots."
        },
        {
            text: "Why should you allow extra room when overtaking a motorcyclist on a windy day?",
            options: [
                "The rider may stop suddenly",
                "The rider may turn off suddenly to get out of the wind",
                "The rider may be blown across in front of you",
                "The rider may be travelling faster than normal"
            ],
            correctAnswer: 2,
            explanation: "Strong gusts of wind can blow cyclists and motorcyclists sideways into your path."
        },
        {
            text: "How should you overtake horse riders?",
            options: [
                "Drive up close and overtake as soon as possible",
                "Drive slowly and leave plenty of room",
                "Use your horn just once to warn them",
                "Speed isn't important but allow plenty of room"
            ],
            correctAnswer: 1,
            explanation: "Pass wide and slow. Horses can be unpredictable and easily frightened by noise or close vehicles."
        },
        {
            text: "You're driving in town. There's a bus at the bus stop on the other side of the road. Why should you be careful?",
            options: [
                "Pedestrians might come from behind the bus",
                "The bus might have broken down",
                "The bus might remain stationary",
                "The bus might move off suddenly"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians often cross the road from behind a bus after getting off. Watch out for them stepping into your path."
        },
        {
            text: "You're driving in a slow-moving queue of traffic. Just before changing lane, what should you do?",
            options: [
                "Change down to first gear",
                "Sound the horn and flash your lights",
                "Look for motorcyclists filtering through the traffic",
                "Give a 'slowing down' arm signal"
            ],
            correctAnswer: 2,
            explanation: "Motorcyclists often filter through slow traffic. Check your mirrors and blind spot before changing lanes."
        },
        {
            text: "You want to turn right from a main road into a side road. What should you do just before turning?",
            options: [
                "Select first gear",
                "Stop and set the handbrake",
                "Cancel your right-turn signal",
                "Check for traffic overtaking on your right"
            ],
            correctAnswer: 3,
            explanation: "Always check your right-hand mirror and blind spot. A motorcyclist could be overtaking you."
        },
        {
            text: "You're driving past a line of parked cars. You notice a ball bouncing out into the road ahead. What should you do?",
            imageSrc: "/images/driving-theory/ball-in-road.png",
            options: [
                "Continue driving at the same speed and flash your headlights",
                "Continue driving at the same speed and sound your horn",
                "Slow down and be prepared to stop for children",
                "Stop and wave the children across to fetch their ball"
            ],
            correctAnswer: 2,
            explanation: "A ball in the road is often followed by a child. Slow down immediately and be ready to stop."
        },
        {
            text: "You've stopped at a pelican crossing. A disabled person is crossing slowly in front of you when the lights change to green. What should you do?",
            options: [
                "Wait for them to finish crossing",
                "Edge forward slowly",
                "Drive in front of them",
                "Sound your horn"
            ],
            correctAnswer: 0,
            explanation: "Give them time to cross safely. Do not rev your engine or try to hurry them."
        },
        {
            text: "What must a driver do at a pelican crossing when the amber light is flashing?",
            options: [
                "Signal the pedestrian to cross",
                "Give way to any pedestrians on the crossing",
                "Always wait for the green light before proceeding",
                "Wait for the red-and-amber light before proceeding"
            ],
            correctAnswer: 1,
            explanation: "A flashing amber light means you must give way to pedestrians already on the crossing. If it's clear, you may proceed."
        },
        {
            text: "You're at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
            options: [
                "To make sure the side road is clear",
                "To check for emerging traffic",
                "To check for overtaking vehicles",
                "To look for pedestrians about to cross"
            ],
            correctAnswer: 2,
            explanation: "A motorcyclist may be overtaking the queue. Check your mirror and blind spot."
        },
        {
            text: "You want to turn right from a junction but your view is restricted by parked vehicles. What should you do?",
            options: [
                "Stop, then move forward slowly until you have a clear view",
                "Stop, get out and look along the main road to check",
                "Sound your horn and pull out if there's no reply",
                "Move out quickly, but be prepared to stop"
            ],
            correctAnswer: 0,
            explanation: "Creep forward slowly (peep and creep) until you can see the road is clear."
        },
        {
            text: "Who's especially in danger of not being seen as you reverse your car?",
            options: [
                "Cyclists",
                "Children",
                "Motorcyclists",
                "Car drivers"
            ],
            correctAnswer: 1,
            explanation: "Small children may be below the level of your rear window and hard to see."
        },
        {
            text: "You're about to reverse into a side road. A pedestrian is waiting to cross behind you. What should you do?",
            options: [
                "Sound your horn to warn the pedestrian",
                "Wave to the pedestrian to stop",
                "Give way to the pedestrian",
                "Reverse before the pedestrian starts to cross"
            ],
            correctAnswer: 2,
            explanation: "Wait for the pedestrian to cross. Never force them to wait for you."
        },
        {
            text: "You want to reverse into a side road, but you aren't sure that the area behind your car is clear. What should you do?",
            options: [
                "Look through the rear window only",
                "Check the mirrors only",
                "Get out and check",
                "Carry on, assuming it's clear"
            ],
            correctAnswer: 2,
            explanation: "If you can't see, get out and check. It's the only way to be sure."
        },
        {
            text: "You've just passed your test. How can you reduce your risk of being involved in a collision?",
            options: [
                "By always staying close to the vehicle in front",
                "By staying in the left-hand lane on all roads",
                "By taking further training",
                "By never going over 40 mph"
            ],
            correctAnswer: 2,
            explanation: "Courses like Pass Plus can help improve your skills and confidence."
        },
        {
            text: "At night, you see a pedestrian wearing reflective clothing and carrying a bright red light. What does this mean?",
            options: [
                "You're approaching a slow-moving vehicle",
                "You're approaching a traffic danger spot",
                "You're approaching road works",
                "You're approaching an organised walk"
            ],
            correctAnswer: 3,
            explanation: "The person at the back of an organised walk should show a red light."
        },
        {
            text: "What should you do when passing sheep on a road?",
            options: [
                "Briefly sound your horn",
                "Go very slowly",
                "Pass quickly but quietly",
                "Herd them to the side of the road"
            ],
            correctAnswer: 1,
            explanation: "Drive slowly and be ready to stop. Sheep can be unpredictable."
        },
        {
            text: "When you're overtaking a cyclist, you should leave as much room as you would give to a car. What's the main reason for this?",
            options: [
                "The cyclist might swerve",
                "The cyclist might have to make a left turn",
                "The cyclist might get off their bike",
                "The cyclist might speed up"
            ],
            correctAnswer: 0,
            explanation: "Cyclists may swerve to avoid potholes or drains, or be affected by the wind."
        },
        {
            text: "Some junctions controlled by traffic lights have a marked area between two stop lines. What's this for?",
            options: [
                "To allow cyclists and pedestrians to cross the road together",
                "To allow people with disabilities to cross the road",
                "To allow cyclists to position in front of other traffic",
                "To allow taxis to position in front of other traffic"
            ],
            correctAnswer: 2,
            explanation: "Advanced Stop Lines allow cyclists to wait ahead of other traffic, making them more visible."
        },
        {
            text: "Who may use toucan crossings?",
            options: [
                "Motorcyclists and pedestrians",
                "Motorcyclists and cyclists",
                "Cyclists and pedestrians",
                "Only cyclists"
            ],
            correctAnswer: 2,
            explanation: "Toucan crossings are designed for both pedestrians and cyclists to cross together ('Two-can')."
        },
        {
            text: "You see a pedestrian with a dog wearing a yellow or burgundy coat. What does this indicate?",
            options: [
                "The pedestrian is colour-blind",
                "The pedestrian is a dog trainer",
                "The pedestrian is deaf",
                "The pedestrian is elderly"
            ],
            correctAnswer: 2,
            explanation: "Hearing dogs for the deaf often wear distinctive yellow or burgundy coats."
        },
        {
            text: "What should you do when approaching this crossing?",
            imageSrc: "/images/driving-theory/zebra-crossing.png",
            options: [
                "Continue unless the pedestrians step out",
                "Stop and wave the pedestrians across",
                "Prepare to slow down and stop",
                "Speed up and pass by quickly"
            ],
            correctAnswer: 2,
            explanation: "Be ready to stop for pedestrians waiting at a zebra crossing."
        },
        {
            text: "You're approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?",
            imageSrc: "/images/driving-theory/cyclist-roundabout.png",
            options: [
                "The cyclist is going to turn left instead",
                "It's a quicker route for the cyclist",
                "The cyclist is slower and more vulnerable",
                "The cyclist thinks The Highway Code doesn't apply to bicycles"
            ],
            correctAnswer: 2,
            explanation: "Cyclists may stay to the left for safety, even when intending to turn right. Give them plenty of room."
        },
        {
            text: "What does this sign tell you?",
            imageSrc: "/images/driving-theory/cycle-sign.png",
            options: [
                "No cycling",
                "End of cycle route",
                "Cycle route ahead",
                "Cycle parking only"
            ],
            correctAnswer: 2,
            explanation: "A triangle sign warns of hazards. This one indicates a cycle route ahead."
        },
        {
            text: "What should you do when you're following a motorcyclist along a road that has a poor surface?",
            options: [
                "Drive closely so they can see you in their mirrors",
                "Allow the same room as normal to avoid wasting road space",
                "Allow extra room in case they swerve to avoid potholes",
                "Overtake immediately to avoid delays"
            ],
            correctAnswer: 2,
            explanation: "Motorcyclists may need to swerve to avoid potholes or slippery patches."
        },
        {
            text: "The left-hand pavement is closed due to street repairs. What should you do?",
            options: [
                "Watch out for pedestrians walking in the road",
                "Position close to the left-hand kerb",
                "Use your right-hand mirror more often",
                "Speed up to get past the road works more quickly"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians may be forced to walk on the road. Be extra vigilant."
        },
        {
            text: "What's the purpose of these road markings?",
            imageSrc: "/images/driving-theory/school-keep-clear.png",
            options: [
                "To ensure delivery vehicles have easy access to the school",
                "To enable teachers to have clear access to the school",
                "To enable parents to pick up or drop off children safely",
                "To ensure children have a clear view from the crossing area"
            ],
            correctAnswer: 3,
            explanation: "School Keep Clear markings ensure that children can see and be seen when crossing the road."
        },
        {
            text: "You notice horse riders in front. What should you do first?",
            imageSrc: "/images/driving-theory/horse-riders-front.png",
            options: [
                "Slow down and be ready to stop",
                "Pull out to the middle of the road",
                "Signal right",
                "Accelerate around them"
            ],
            correctAnswer: 0,
            explanation: "Slow down immediately and be prepared to stop if the horses are startled."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/with-flow-cycle-lane.png",
            options: [
                "With-flow cycle lane",
                "No cycles or buses",
                "Cycles and buses only",
                "Contraflow cycle lane"
            ],
            correctAnswer: 0,
            explanation: "A blue rectangular sign usually indicates a with-flow bus or cycle lane."
        },
        {
            text: "What does a flashing amber beacon mean when it's on a moving vehicle?",
            options: [
                "The vehicle has broken down",
                "The vehicle belongs to a school crossing patrol",
                "The vehicle is a doctor's car",
                "The vehicle is slow moving"
            ],
            correctAnswer: 3,
            explanation: "Flashing amber beacons warn of slow-moving or maintenance vehicles."
        },
        {
            text: "Where should you never overtake a cyclist?",
            options: [
                "Just before you turn left",
                "On a dual carriageway",
                "On a left-hand bend",
                "On a one-way street"
            ],
            correctAnswer: 0,
            explanation: "Do not overtake a cyclist just before turning left, as you might cut across their path."
        },
        {
            text: "Powered vehicles used by disabled people are small and hard to see. How do they give early warning when on a dual carriageway?",
            options: [
                "They'll have a flashing green light",
                "They'll have a flashing blue light",
                "They'll have a flashing red light",
                "They'll have a flashing amber light"
            ],
            correctAnswer: 3,
            explanation: "Class 3 powered wheelchairs/scooters must have a flashing amber light when used on dual carriageways."
        },
        {
            text: "A horse rider is in the left-hand lane approaching a roundabout. Where should you expect the rider to go?",
            options: [
                "To the left",
                "To the right",
                "In any direction",
                "Straight ahead"
            ],
            correctAnswer: 2,
            explanation: "Horse riders may stay in the left lane even if turning right. Give them time and room."
        },
        {
            text: "You're following a cyclist. What should you do when you wish to turn left just ahead?",
            options: [
                "Pull alongside the cyclist and stay level until after the junction",
                "Go around the cyclist on the junction",
                "Overtake the cyclist before you reach the junction",
                "Hold back until the cyclist has passed the junction"
            ],
            correctAnswer: 3,
            explanation: "Wait behind the cyclist until they are clear of the junction."
        },
        {
            text: "What should you do when following a car driven by an elderly driver?",
            options: [
                "Stay very close behind but be careful",
                "Flash your lights and overtake",
                "Be aware that their reactions may be slower than yours",
                "Expect the driver to drive badly"
            ],
            correctAnswer: 2,
            explanation: "Be patient and allow for slower reaction times."
        },
        {
            text: "You're on a country road. What should you expect to see coming towards you on your side of the road?",
            options: [
                "Pedestrians",
                "Motorcycles",
                "Bicycles",
                "Horse riders"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians on country roads with no pavement are advised to walk facing oncoming traffic."
        },
        {
            text: "What should you do when you're following a learner driver who stalls at a junction?",
            options: [
                "Be patient, as you expect them to make mistakes",
                "Immediately steer around them and drive on",
                "Stay very close behind and flash your headlights",
                "Start to rev your engine if they take too long to restart"
            ],
            correctAnswer: 0,
            explanation: "Keep calm and be patient. Pressuring them will only make it harder for them to restart."
        },
        {
            text: "How would you react to drivers who appear to be inexperienced?",
            options: [
                "Sound your horn to warn them of your presence",
                "Be patient and prepare for them to react more slowly",
                "Overtake them as soon as possible",
                "Flash your headlights to indicate that it's safe for them to proceed"
            ],
            correctAnswer: 1,
            explanation: "Give them space and time. We were all learners once."
        },
        {
            text: "You see a horse rider as you approach a roundabout. What should you do if they're signaling right but keeping well to the left?",
            imageSrc: "/images/driving-theory/horse-rider-signalling.png",
            options: [
                "Cut in front of them",
                "Proceed as normal",
                "Keep close to them",
                "Stay well back"
            ],
            correctAnswer: 3,
            explanation: "Stay back and let them complete their manoeuvre safely."
        },
        {
            text: "You're travelling behind a moped. What should you do when you want to turn left just ahead?",
            options: [
                "Stay behind until the moped has passed the junction",
                "Sound your horn as a warning and pull in front of the moped",
                "Overtake the moped before the junction",
                "Pull alongside the moped and stay level until just before the junction"
            ],
            correctAnswer: 0,
            explanation: "Do not overtake. Wait behind until the moped is clear."
        },
        {
            text: "You're following two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
            options: [
                "Any direction",
                "Straight ahead",
                "Left",
                "Right"
            ],
            correctAnswer: 0,
            explanation: "Cyclists often stay left for safety, regardless of their intended direction."
        },
        {
            text: "Where would you see this sign?",
            imageSrc: "/images/driving-theory/school-bus-sign.png",
            options: [
                "On a school bus",
                "At a 'pedestrians only' area",
                "Near a school crossing",
                "At a playground entrance"
            ],
            correctAnswer: 0,
            explanation: "This sign is often displayed on the rear of buses and coaches carrying schoolchildren."
        },
        {
            text: "Why must these road markings be kept clear?",
            options: [
                "To allow schoolchildren to be dropped off",
                "To allow schoolchildren to be picked up",
                "To allow a clear view of the crossing area",
                "To allow teachers to park"
            ],
            correctAnswer: 2,
            explanation: "Keeping the area clear ensures drivers and children can see each other."
        },
        {
            text: "There are flashing amber lights under a school warning sign. What action should you take?",
            options: [
                "Increase your speed to clear the area quickly",
                "Reduce speed until you're clear of the area",
                "Keep up your speed and sound the horn",
                "Wait at the lights until they change to green"
            ],
            correctAnswer: 1,
            explanation: "Flashing amber lights indicate children may be crossing. Slow down and be vigilant."
        },
        {
            text: "As you approach a pelican crossing, the lights change to green. What should you do if elderly people are halfway across?",
            options: [
                "Rev your engine to make them hurry",
                "Wave them to cross as quickly as they can",
                "Wait patiently because they'll probably take longer to cross",
                "Flash your lights in case they haven't noticed you"
            ],
            correctAnswer: 2,
            explanation: "Wait until they are safely on the pavement before moving off."
        },
        {
            text: "You're approaching a roundabout. There are horses just ahead of you. What should you do?",
            options: [
                "Give them plenty of room",
                "Treat them like any other vehicle",
                "Sound your horn as a warning",
                "Accelerate past as quickly as possible"
            ],
            correctAnswer: 0,
            explanation: "Horses need extra room and consideration."
        },
        {
            text: "Which is the most vulnerable road user at road junctions?",
            options: [
                "Car driver",
                "Lorry driver",
                ".Tractor driver",
                "Motorcyclist"
            ],
            correctAnswer: 3,
            explanation: "Motorcyclists are vulnerable due to their small size and lack of protection."
        },
        {
            text: "Why will a motorcyclist look round over their right shoulder just before turning right?",
            options: [
                "Motorcycles don't have mirrors",
                "To check for traffic in their blind area",
                "To listen for following traffic",
                "It helps them balance as they turn"
            ],
            correctAnswer: 1,
            explanation: "The 'lifesaver' glance checks the blind spot for overtaking traffic."
        },
        {
            text: "You're unsure what a slow-moving motorcyclist ahead of you is going to do. What should you do?",
            options: [
                "Pass on the left",
                "Pass on the right",
                "Move closer",
                "Stay behind"
            ],
            correctAnswer: 3,
            explanation: "Stay back until their intentions are clear."
        },
        {
            text: "Why should motorcyclists wear bright clothing?",
            options: [
                "The colours are popular",
                "They must do so by law",
                "It helps keep them cool in summer",
                "Drivers often do not see them"
            ],
            correctAnswer: 3,
            explanation: "Bright clothing improves visibility to other road users."
        },
        {
            text: "In daylight, an approaching motorcyclist is using dipped headlights. Why?",
            options: [
                "To stop the battery overcharging",
                "The rider is inviting you to proceed",
                "To improve the rider's vision",
                "So that the rider can be seen more easily"
            ],
            correctAnswer: 3,
            explanation: "Headlights make the motorcycle more visible against the background."
        },
        {
            text: "You're waiting to come out of a side road. Why should you look carefully for motorcycles?",
            options: [
                "Police patrols often use motorcycles",
                "Motorcycles are usually faster than cars",
                "Motorcycles can easily be hidden behind obstructions",
                "Motorcycles have right of way"
            ],
            correctAnswer: 2,
            explanation: "Their narrow profile makes them easy to miss behind parked cars or pillars."
        },
        {
            text: "Why should you look particularly for motorcyclists and cyclists at junctions?",
            options: [
                "They may want to turn into the side road",
                "They may slow down to let you turn",
                "They might not see you turn",
                "They're harder to see"
            ],
            correctAnswer: 3,
            explanation: "They are small and easily overlooked."
        },
        {
            text: "Which of these should you allow extra room when overtaking?",
            options: [
                "Lorry",
                "Tractor",
                "Road-sweeping vehicle",
                "Bicycle"
            ],
            correctAnswer: 3,
            explanation: "Give cyclists plenty of room (at least 1.5m) to ensure their safety."
        },
        {
            text: "You're coming up to a roundabout. A cyclist is signaling to turn right. What should you do?",
            options: [
                "Give a warning with your horn",
                "Give the cyclist plenty of room",
                "Signal the cyclist to move across",
                "Overtake on the right"
            ],
            correctAnswer: 1,
            explanation: "Give them space to manoeuvre."
        },
        {
            text: "What should you do when you see two elderly pedestrians about to cross the road ahead?",
            options: [
                "Speed up to get past them quickly",
                "Be careful; they may misjudge your speed",
                "Expect them to wait for you to pass",
                "Stop and wave them across the road"
            ],
            correctAnswer: 1,
            explanation: "Elderly people may have difficulty judging the speed and distance of approaching traffic."
        },
        {
            text: "What action would you take when elderly people are crossing the road?",
            options: [
                "Tap the horn in case they're hard of hearing",
                "Wave them across so they know that you've seen them",
                "Be patient and allow them to cross in their own time",
                "Rev the engine to let them know that you're waiting"
            ],
            correctAnswer: 2,
            explanation: "Be patient and do not hurry them."
        },
        {
            text: "You see a pedestrian carrying a white stick with a red band. What does this tell you?",
            options: [
                "They're deaf and blind",
                "They have limited mobility",
                "They're blind",
                "They're deaf"
            ],
            correctAnswer: 0,
            explanation: "A white stick with a red band indicates the person is both deaf and blind."
        },
        {
            text: "What does this sign mean?",
            options: [
                "A route for cyclists only",
                "A route for pedestrians only",
                "A route for pedestrians and cyclists",
                "No route for pedestrians and cyclists"
            ],
            correctAnswer: 2,
            explanation: "A blue circle with pedestrian and cycle symbols indicates a shared route."
        },
        {
            text: "Where would you see this sign?",
            options: [
                "At playground areas",
                "At the side of the road",
                "On the rear of a school bus or coach",
                "In the window of a car taking children to school"
            ],
            correctAnswer: 2,
            explanation: "The yellow 'Children' sign is found on school buses."
        },
        {
            text: "How will a school crossing patrol signal you to stop?",
            options: [
                "By displaying a 'stop' sign",
                "By displaying a red light",
                "By giving you an arm signal",
                "By pointing to children on the opposite pavement"
            ],
            correctAnswer: 0,
            explanation: "They use a 'Stop' sign (lollipop sign)."
        },
        {
            text: "Why is a toucan crossing different from other crossings?",
            options: [
                "It's controlled by two flashing lights",
                "Cyclists can use it",
                "It's controlled by a traffic warden",
                "Moped riders can use it"
            ],
            correctAnswer: 1,
            explanation: "Cyclists can ride across toucan crossings."
        },
        {
            text: "You're turning left into a side road. What hazard should you be especially aware of?",
            options: [
                "Pedestrians",
                "Parked vehicles",
                "Traffic congestion",
                "One-way street"
            ],
            correctAnswer: 0,
            explanation: "Pedestrians may be crossing the side road. You must give way to them."
        },
        {
            text: "You intend to turn right into a side road. Why should you check for motorcyclists just before turning?",
            options: [
                "They may be overtaking on your right",
                "They may be overtaking on your left",
                "They may be emerging from the side road",
                "They may be following you closely"
            ],
            correctAnswer: 0,
            explanation: "Ensure no one is overtaking you before you turn."
        },
        {
            text: "You're turning left at a junction where pedestrians have started to cross. What should you do?",
            options: [
                "Sound your horn and proceed",
                "Go around them, leaving plenty of room",
                "Give way to them",
                "Stop and wave at them to cross"
            ],
            correctAnswer: 2,
            explanation: "Pedestrians crossing the road into which you are turning have priority."
        },
        {
            text: "Which sign means that there may be people walking along the road?",
            options: [
                // Note: Image options here!
                { text: "No Pedestrians", imageSrc: "/images/driving-theory/no-pedestrians-sign.png" },
                { text: "Shared Pedestrian/Cycle", imageSrc: "/images/driving-theory/shared-pedestrian-cycle-sign.png" },
                { text: "Children Crossing", imageSrc: "/images/driving-theory/children-crossing-sign.png" },
                { text: "Pedestrians in Road", imageSrc: "/images/driving-theory/pedestrians-in-road-sign.png" }
            ],
            correctAnswer: 3,
            explanation: "A warning triangle with a figure of a walking person indicates pedestrians in the road."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 5: Vulnerable Road Users...\n");

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
            videoUrl: "https://vimeo.com/1013947074",
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
