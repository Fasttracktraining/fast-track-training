const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Driving Theory Test - Lesson 3: Safety and your vehicle
 * 79 questions
 */

const quiz = {
    title: "Lesson 3: Safety and Your Vehicle",
    description: "Learn about vehicle safety, maintenance, security, and eco-safe driving.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/1013063779",
    questions: [
        {
            text: "You're leaving your vehicle parked on a road and unattended. When may you leave the engine running?",
            options: [
                "Never if you're away from the vehicle",
                "If the battery keeps going flat",
                "When parked in a 20 mph zone",
                "If you'll be parking for less than five minutes"
            ],
            correctAnswer: 0,
            explanation: "It is an offence to leave a vehicle engine running if you are away from the vehicle."
        },
        {
            text: "You want to put a rear-facing baby seat on the front passenger seat, which is protected by a frontal airbag. What must you do before setting off?",
            options: [
                "Ask a passenger to hold the baby",
                "Deactivate the airbag",
                "Put the child in an adult seat belt",
                "Turn the seat to face sideways"
            ],
            correctAnswer: 1,
            explanation: "Airbags deploy with great force and can cause serious injury or death to a child in a rear-facing seat. You must deactivate the airbag first."
        },
        {
            text: "You're parked at the side of the road. You'll be waiting some time for a passenger. What should you do?",
            options: [
                "Switch off the engine",
                "Use your headlights",
                "Switch off the radio",
                "Apply the steering lock"
            ],
            correctAnswer: 0,
            explanation: "Switching off your engine saves fuel and reduces noise and pollution."
        },
        {
            text: "You're carrying an 11-year-old child in the back seat of your car. They're under 1.35 meters (4 feet 5 inches) tall. What must you make sure of?",
            options: [
                "That they can see clearly out of the front window",
                "That they sit between two belted people",
                "That a suitable child restraint is available",
                "That they can fasten their own seat belt"
            ],
            correctAnswer: 2,
            explanation: "Children under 1.35 metres tall must use a suitable child restraint (like a booster seat) unless an exception applies."
        },
        {
            text: "You're carrying a five-year-old child in the back seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. A correct child restraint isn't available. How should you seat them?",
            options: [
                "Between two other children",
                "Using an adult seat belt",
                "Behind the passenger seat",
                "Sharing a belt with an adult"
            ],
            correctAnswer: 1,
            explanation: "If a suitable child restraint is not available in a taxi or emergency, a child over 3 may use an adult seat belt in the rear."
        },
        {
            text: "You have too much oil in your engine. What could this cause?",
            options: [
                "Low oil pressure",
                "Engine overheating",
                "Chain wear",
                "Oil leaks"
            ],
            correctAnswer: 3,
            explanation: "Overfilling engine oil can cause excessive pressure, leading to oil leaks and damage to seals."
        },
        {
            text: "You're driving a friend's children home from school. They're both under 14 years old. Who's responsible for making sure they wear a seat belt or approved child restraint where required?",
            options: [
                "An adult passenger",
                "You, the driver",
                "The children",
                "Your friend"
            ],
            correctAnswer: 1,
            explanation: "The driver is legally responsible for ensuring any passenger under 14 is wearing a seat belt or appropriate restraint."
        },
        {
            text: "When is it acceptable for a passenger to travel in a car without wearing a seat belt?",
            options: [
                "When they're exempt for medical reasons",
                "When they're under 14 years old",
                "When they're under 1.5 meters (5 feet) in height",
                "When they're sitting in the rear seat"
            ],
            correctAnswer: 0,
            explanation: "You may be exempt from wearing a seat belt on medical grounds, but you must hold a valid exemption certificate."
        },
        {
            text: "Fuel consumption is at its highest when you're doing what?",
            options: [
                "Steering",
                "Accelerating",
                "Coasting",
                "Braking"
            ],
            correctAnswer: 1,
            explanation: "Accelerating requires the engine to work harder, consuming the most fuel. Accelerate gently to save fuel."
        },
        {
            text: "You're checking your trailer tyres. What's the legal minimum tread depth over the central three-quarters of its breadth?",
            options: [
                "1 mm",
                "2 mm",
                "1.6 mm",
                "2.6 mm"
            ],
            correctAnswer: 2,
            explanation: "For cars and light trailers, the minimum tread depth is 1.6 mm across the central three-quarters of the tyre."
        },
        {
            text: "What does eco safe driving achieve?",
            options: [
                "Increased exhaust emissions",
                "Damage to the environment",
                "Improved road safety",
                "Increased fuel consumption"
            ],
            correctAnswer: 2,
            explanation: "Eco-safe driving techniques, such as looking ahead and anticipating, not only save fuel but also improve overall road safety."
        },
        {
            text: "How can driving in an Eco safe manner help protect the environment?",
            options: [
                "By reducing exhaust emissions",
                "Through the legal enforcement of speed regulations",
                "Through increased fuel bills",
                "By increasing the number of cars on the road"
            ],
            correctAnswer: 0,
            explanation: "Using less fuel means producing fewer harmful exhaust emissions, which protects the environment."
        },
        {
            text: "Which driving technique can help you save fuel?",
            options: [
                "Missing out some gears",
                "Using each gear in turn",
                "Accelerating sharply in each gear",
                "Using lower gears as often as possible"
            ],
            correctAnswer: 0,
            explanation: "Block changing (skipping gears, e.g., 3rd to 5th) reduces the time the engine is working hard and saves fuel."
        },
        {
            text: "What can driving smoothly achieve?",
            options: [
                "Reduction in fuel consumption by about 15%",
                "Increase in journey times by about 15%",
                "Increase in fuel consumption by about 15%",
                "Reduction in journey times by about 15%"
            ],
            correctAnswer: 0,
            explanation: "Smooth acceleration and braking can reduce your fuel consumption by around 15%."
        },
        {
            text: "On a vehicle, where would you find a catalytic converter?",
            options: [
                "In the fuel tank",
                "On the exhaust system",
                "On the cooling system",
                "In the air filter"
            ],
            correctAnswer: 1,
            explanation: "The catalytic converter is part of the exhaust system. It filters harmful gases from the engine exhaust."
        },
        {
            text: "Which of these will help you to keep your car secure?",
            options: [
                "Vehicle breakdown organisation",
                "Vehicle watch scheme",
                "Advanced driver's scheme",
                "Car maintenance class"
            ],
            correctAnswer: 1,
            explanation: "Vehicle Watch schemes help the police identify stolen cars. Stickers on the car indicate it shouldn't be on the road at certain times."
        },
        {
            text: "How can you lessen the risk of your vehicle being broken into at night?",
            options: [
                "Park in a poorly-lit area",
                "Park in a quiet side road",
                "Don't engage the steering lock",
                "Leave it in a well-lit area"
            ],
            correctAnswer: 3,
            explanation: "Thieves prefer to work in the dark. Parking in a well-lit area acts as a deterrent."
        },
        {
            text: "How can you help to prevent your car radio being stolen?",
            options: [
                "Park in an unlit area",
                "Leave the radio turned on",
                "Park near a busy junction",
                "Install a security-coded radio"
            ],
            correctAnswer: 3,
            explanation: "Security codes make the radio useless if stolen, as it cannot be used without the code."
        },
        {
            text: "How can you reduce the chances of your car being broken into when leaving it unattended?",
            options: [
                "Park near a taxi rank",
                "Take all valuables with you",
                "Place any valuables on the floor",
                "Park near a fire station"
            ],
            correctAnswer: 1,
            explanation: "Never leave valuables in sight. The safest option is to take them with you."
        },
        {
            text: "What can people who live or work in towns and cities do to help reduce urban pollution levels?",
            options: [
                "Drive more quickly",
                "Drive short journeys",
                "Over-rev in a low gear",
                "Walk or cycle"
            ],
            correctAnswer: 3,
            explanation: "Walking or cycling for short journeys reduces the number of vehicles on the road and cuts pollution."
        },
        {
            text: "What causes the most damage to the environment?",
            options: [
                "Having your vehicle serviced regularly",
                "Making a lot of short journeys",
                "Choosing a fuel-efficient vehicle",
                "Driving in as high a gear as possible"
            ],
            correctAnswer: 1,
            explanation: "Short journeys don't allow the engine to reach efficient operating temperature, leading to higher fuel consumption and pollution."
        },
        {
            text: "What's the most important reason for having a properly adjusted head restraint?",
            options: [
                "To make you more comfortable",
                "To help you avoid neck injury",
                "To help you maintain your driving position",
                "To help you relax"
            ],
            correctAnswer: 1,
            explanation: "Head restraints protect against whiplash neck injuries in rear-end collisions."
        },
        {
            text: "Where would parking your vehicle cause an obstruction?",
            options: [
                "In a marked parking space",
                "On your driveway",
                "In front of a property entrance",
                "Alongside a parking meter"
            ],
            correctAnswer: 2,
            explanation: "Do not park where you would block access to a property."
        },
        {
            text: "When leaving your vehicle, where should you try to park?",
            options: [
                "At or near a taxi rank",
                "In a secure car park",
                "Opposite a traffic island",
                "On a bend"
            ],
            correctAnswer: 1,
            explanation: "A secure car park with CCTV or patrols is the safest place to leave your vehicle."
        },
        {
            text: "What should you do when you leave your car unattended for a few minutes?",
            options: [
                "Park near a traffic warden",
                "Leave the engine running",
                "Lock it and remove the key",
                "Switch the engine off but leave the key in"
            ],
            correctAnswer: 2,
            explanation: "Always lock your vehicle and remove the key, even for a short time."
        },
        {
            text: "You're having difficulty finding a parking space in a busy town. You can see there's space on the zigzag lines of a zebra crossing. Can you park there?",
            options: [
                "No, not under any circumstances",
                "No, not unless you stay with your car",
                "Yes, in order to drop off a passenger",
                "Yes, if you don't block people from crossing"
            ],
            correctAnswer: 0,
            explanation: "Parking on zigzag lines at a pedestrian crossing is strictly prohibited as it blocks the view of pedestrians and drivers."
        },
        {
            text: "When should you especially check the engine oil level?",
            options: [
                "Every 6000 miles",
                "Before a long journey",
                "When the engine is hot",
                "Early in the morning"
            ],
            correctAnswer: 1,
            explanation: "Check critical fluids like oil and water before any long journey to prevent breakdowns."
        },
        {
            text: "You enter a road where there are road humps. What should you do?",
            options: [
                "Accelerate quickly between each one",
                "Drive slowly at school times only",
                "Always keep to the maximum legal speed",
                "Maintain a reduced speed throughout"
            ],
            correctAnswer: 3,
            explanation: "Drive at a steady, slow speed over the humps to avoid damage to your suspension and ensure comfort."
        },
        {
            text: "What will be the result of having your vehicle properly serviced?",
            options: [
                "Reduced insurance premiums",
                "Slower journey times",
                "Lower vehicle excise duty (road tax)",
                "Better fuel economy"
            ],
            correctAnswer: 3,
            explanation: "A well-maintained engine runs more efficiently and uses less fuel."
        },
        {
            text: "How can you reduce the damage your vehicle causes to the environment?",
            options: [
                "Use narrow side streets",
                "Brake heavily",
                "Use busy routes",
                "Anticipate well ahead"
            ],
            correctAnswer: 3,
            explanation: "Anticipating traffic flow helps you drive smoothly, avoiding unnecessary braking and acceleration."
        },
        {
            text: "Why do MOT tests include a strict exhaust emission test?",
            options: [
                "To recover the cost of expensive garage equipment",
                "To help protect the environment against pollution",
                "To make sure diesel and petrol engines emit the same fumes",
                "To discover which fuel supplier is used the most"
            ],
            correctAnswer: 1,
            explanation: "Emission tests ensure vehicles do not produce excessive harmful pollutants."
        },
        {
            text: "You service your own vehicle. How should you get rid of the old engine oil?",
            options: [
                "Put it in your dustbin",
                "Tip it into a hole in the ground",
                "Take it to a local-authority site",
                "Pour it down a drain"
            ],
            correctAnswer: 2,
            explanation: "Old oil creates pollution. Dispose of it responsibly at an official collection point or recycling centre."
        },
        {
            text: "What will improve fuel consumption?",
            options: [
                "Driving in lower gears",
                "Reducing your speed",
                "Rapid acceleration",
                "Late and harsh braking"
            ],
            correctAnswer: 1,
            explanation: "Driving at a lower, steady speed reduces wind resistance and fuel consumption."
        },
        {
            text: "What should you do when leaving your vehicle parked and unattended?",
            options: [
                "Park in a housing estate",
                "Lock it and remove the key",
                "Park near a busy junction",
                "Leave the left indicator on"
            ],
            correctAnswer: 1,
            explanation: "Always lock your vehicle to prevent theft."
        },
        {
            text: "Which of the following shouldn't be kept in your vehicle?",
            options: [
                "The owner's manual",
                "The vehicle registration document",
                "The service record",
                "The car dealer's details"
            ],
            correctAnswer: 1,
            explanation: "The vehicle registration document (V5C) proves ownership and should not be left in the car, as it could help a thief sell the vehicle."
        },
        {
            text: "Which of the following may help to deter a thief from stealing your car?",
            options: [
                "Fitting reflective glass windows",
                "Always keeping the headlights on",
                "Always keeping the interior light on",
                "Etching the registration number on the windows"
            ],
            correctAnswer: 3,
            explanation: "Etching the registration number on windows makes them harder to sell and easier to trace."
        },
        {
            text: "You have to leave valuables in your car. What would it be safest to do?",
            options: [
                "Park near a school entrance",
                "Lock them out of sight",
                "Park near a bus stop",
                "Put them in a carrier bag"
            ],
            correctAnswer: 1,
            explanation: "If you must leave valuables, lock them in the boot or glovebox where they cannot be seen."
        },
        {
            text: "Turning the steering wheel while stationary can cause damage to which part of your car?",
            options: [
                "Gearbox",
                "Brakes",
                "Tyres",
                "Engine"
            ],
            correctAnswer: 2,
            explanation: "Dry steering (turning wheels when stopped) scuffs the tyres and strains the steering mechanism."
        },
        {
            text: "What will happen if your car's wheels are unbalanced?",
            options: [
                "The steering will pull to one side",
                "The steering will vibrate",
                "The tyres will deflate",
                "The brakes will fail"
            ],
            correctAnswer: 1,
            explanation: "Unbalanced wheels cause vibration through the steering wheel, usually felt at higher speeds."
        },
        {
            text: "When you use the brakes, your vehicle pulls to one side. What should you do?",
            options: [
                "Change gear and pump the brake pedal",
                "Have the brakes checked as soon as possible",
                "Increase the pressure in your tyres",
                "Use your parking brake at the same time"
            ],
            correctAnswer: 1,
            explanation: "Pulling to one side indicates a fault in the braking system or tyres. Get it checked immediately."
        },
        {
            text: "Up to how much more fuel will you use by driving at 70 mph, compared with driving at 50 mph?",
            options: [
                "75%",
                "30%",
                "10%",
                "100%"
            ],
            correctAnswer: 1,
            explanation: "Driving at 70 mph uses roughly 30% more fuel than driving at 50 mph due to increased air resistance."
        },
        {
            text: "What does the law require you to keep in good condition?",
            options: [
                "Gears",
                "Transmission",
                "Seat belts",
                "Door locks"
            ],
            correctAnswer: 2,
            explanation: "Seat belts must be in good condition and functioning properly to pass an MOT and legal checks."
        },
        {
            text: "What's most likely to waste fuel?",
            options: [
                "Reducing your speed",
                "Under-inflated tyres",
                "Using different brands of fuel",
                "Driving on motorways"
            ],
            correctAnswer: 1,
            explanation: "Under-inflated tyres increase rolling resistance, making the engine work harder and wasting fuel."
        },
        {
            text: "What could you do to reduce the volume of traffic on the roads?",
            options: [
                "Walk or cycle on short journeys",
                "Travel by car at all times",
                "Drive in a bus lane",
                "Use a car with a smaller engine"
            ],
            correctAnswer: 0,
            explanation: "Using alternative transport for short trips helps reduce congestion."
        },
        {
            text: "How can you avoid wasting fuel?",
            options: [
                "By revving the engine in the lower gears",
                "By driving at higher speeds where possible",
                "By having your vehicle serviced regularly",
                "By keeping an empty roof rack on your vehicle"
            ],
            correctAnswer: 2,
            explanation: "Regular servicing maintains engine efficiency."
        },
        {
            text: "How can drivers help the environment?",
            options: [
                "By accelerating gently",
                "By using leaded fuel",
                "By driving faster",
                "By accelerating harshly"
            ],
            correctAnswer: 0,
            explanation: "Gentle acceleration burns less fuel and is better for the environment."
        },
        {
            text: "You're carrying two 13-year-old children and their parents in your car. Who's responsible for seeing that the children wear seat belts?",
            options: [
                "You, the driver",
                "The children",
                "The front-seat passenger",
                "The children's parents"
            ],
            correctAnswer: 0,
            explanation: "The driver is responsible for passengers under 14."
        },
        {
            text: "What's the legal minimum depth of tread for car tyres?",
            options: [
                "4 mm",
                "1.6 mm",
                "2.5 mm",
                "1 mm"
            ],
            correctAnswer: 1,
            explanation: "1.6mm is the legal minimum tread depth for cars."
        },
        {
            text: "Which of these makes your tyres illegal?",
            options: [
                "They were bought second-hand",
                "They have different tread patterns",
                "They have a large, deep cut in the side wall",
                "They're of different makes"
            ],
            correctAnswer: 2,
            explanation: "Deep cuts that expose the ply or cord make the tyre dangerous and illegal."
        },
        {
            text: "How will a roof rack affect your car's performance?",
            options: [
                "The engine will use more oil",
                "Fuel consumption will increase",
                "There will be less wind noise",
                "The car will accelerate faster"
            ],
            correctAnswer: 1,
            explanation: "Roof racks increase air resistance (drag), leading to higher fuel consumption."
        },
        {
            text: "You're testing your suspension. You notice that your vehicle keeps bouncing when you press down on the front wing. What does this mean?",
            options: [
                "Worn shock absorbers",
                "Tyres under-inflated",
                "Worn tyres",
                "Steering wheel not located centrally"
            ],
            correctAnswer: 0,
            explanation: "Shock absorbers dampen the bounce. If they are worn, the car will continue to bounce."
        },
        {
            text: "What will reduce the risk of neck injury resulting from a collision?",
            options: [
                "A properly adjusted head restraint",
                "Anti-lock brakes",
                "A collapsible steering wheel",
                "An air-sprung seat"
            ],
            correctAnswer: 0,
            explanation: "Head restraints prevent the head from snapping back in a collision."
        },
        {
            text: "It's important to wear suitable shoes when you're driving. Why is this?",
            options: [
                "To prevent wear on the pedals",
                "To maintain control of the pedals",
                "To enable you to walk for assistance if you break down",
                "To enable you to adjust your seat"
            ],
            correctAnswer: 1,
            explanation: "Proper footwear ensures you can operate the pedals effectively without slipping."
        },
        {
            text: "What does it mean if this light comes on while you're driving?",
            imageSrc: "/images/driving-theory/brake-warning-light.png",
            options: [
                "A rear light has failed",
                "Your seat belt isn't fastened",
                "A fault in the braking system",
                "The engine oil is low"
            ],
            correctAnswer: 2,
            explanation: "A warning light with an exclamation mark usually indicates a fault in the braking system or low brake fluid."
        },
        {
            text: "What should you do if your anti-lock brakes (ABS) warning light stays on?",
            options: [
                "Check the brake-fluid level",
                "Check that the handbrake is released",
                "Check the footbrake free play",
                "Have the brakes checked immediately"
            ],
            correctAnswer: 3,
            explanation: "If the ABS light stays on, the system is faulty. Get it checked."
        },
        {
            text: "What's the main cause of brake fade?",
            options: [
                "Air in the brake fluid",
                "Oil on the brakes",
                "The brakes overheating",
                "The brakes out of adjustment"
            ],
            correctAnswer: 2,
            explanation: "Brake fade is caused by overheating, often from continuous braking on long downhill stretches."
        },
        {
            text: "What can cause excessive or uneven tyre wear?",
            options: [
                "Faults in the engine",
                "Faults in the gearbox",
                "Faults in the exhaust system",
                "Faults in the suspension"
            ],
            correctAnswer: 3,
            explanation: "Suspension faults can cause wheels to become misaligned, leading to uneven wear."
        },
        {
            text: "Which of these, if allowed to get low, could cause you to crash?",
            options: [
                "Battery water level",
                "Radiator coolant level",
                "Anti-freeze level",
                "Brake fluid level"
            ],
            correctAnswer: 3,
            explanation: "Low brake fluid can lead to total brake failure."
        },
        {
            text: "What can rapid acceleration and heavy braking lead to?",
            options: [
                "Reduced pollution",
                "Reduced exhaust emissions",
                "Increased fuel consumption",
                "Increased road safety"
            ],
            correctAnswer: 2,
            explanation: "Aggressive driving burns significantly more fuel."
        },
        {
            text: "You're making an appointment and will have to travel a long distance. How should you plan for the journey?",
            options: [
                "Plan to travel at busy times",
                "Prevent other drivers from overtaking",
                "Avoid roads with the national speed limit",
                "Allow plenty of time for the trip"
            ],
            correctAnswer: 3,
            explanation: "Rushing leads to risks. Allow plenty of time for delays."
        },
        {
            text: "It can be helpful to plan your route before starting a journey. Why should you also plan an alternative route?",
            options: [
                "You may get held up by a tractor",
                "Your maps may have different scales",
                "Your original route may be blocked",
                "You may find you have to pay a congestion charge"
            ],
            correctAnswer: 2,
            explanation: "Roadworks or accidents can block your planned route. Having an alternative saves stress."
        },
        {
            text: "You avoid busy times when travelling. How will this affect your journey?",
            options: [
                "You'll travel a much shorter distance",
                "You're less likely to be delayed",
                "You're more likely to be held up",
                "Your journey time will be longer"
            ],
            correctAnswer: 1,
            explanation: "Travelling off-peak avoids congestion and delays."
        },
        {
            text: "Why is it a good idea to plan your journey to avoid busy times?",
            options: [
                "Your journey time will be longer",
                "You'll have an easier journey",
                "It will cause more traffic congestion",
                "You'll have a more stressful journey"
            ],
            correctAnswer: 1,
            explanation: "Avoiding traffic makes the journey smoother, safer, and less stressful."
        },
        {
            text: "Before starting a journey, it's wise to plan your route. How can you do this?",
            options: [
                "Look in your vehicle handbook",
                "Contact your local garage",
                "Check your vehicle registration document",
                "Look at a map"
            ],
            correctAnswer: 3,
            explanation: "Use a map or sat-nav to plan your route effectively."
        },
        {
            text: "You need to top up your battery. What level should you fill it to?",
            options: [
                "Just above the cell plates",
                "Halfway up the battery",
                "The top of the battery",
                "Just below the cell plates"
            ],
            correctAnswer: 0,
            explanation: "Electrolyte should just cover the plates. Do not overfill."
        },
        {
            text: "What can cause excessive or uneven tyre wear?",
            options: [
                "A faulty exhaust system",
                "A faulty braking system",
                "A faulty gearbox",
                "A faulty electrical system"
            ],
            correctAnswer: 1,
            explanation: "Braking faults (like a seizing caliper) can also cause uneven tyre wear."
        },
        {
            text: "How can you reduce the environmental harm caused by your motor vehicle?",
            options: [
                "Drive faster than normal",
                "Only use it for short journeys",
                "Don't service it",
                "Keep engine revs low"
            ],
            correctAnswer: 3,
            explanation: "Lower revs mean less fuel burnt and less pollution. Change gear early."
        },
        {
            text: "You're parked on the road at night. Where must you use parking lights?",
            options: [
                "Where the speed limit exceeds 30 mph",
                "Where you're near a bus stop",
                "Where you're facing oncoming traffic",
                "Where there are continuous white lines in the middle of the road"
            ],
            correctAnswer: 0,
            explanation: "Parking lights are required on roads with speed limits over 30 mph at night."
        },
        {
            text: "The fluid level in your battery is low. What should you top it up with?",
            options: [
                "Engine coolant",
                "Engine oil",
                "Distilled water",
                "Battery acid"
            ],
            correctAnswer: 2,
            explanation: "Use distilled water only. Tap water contains impurities."
        },
        {
            text: "What's most likely to cause high fuel consumption?",
            options: [
                "Staying in high gears",
                "Harsh braking and accelerating",
                "Accelerating around bends",
                "Poor steering control"
            ],
            correctAnswer: 1,
            explanation: "Aggressive driving style wastes fuel."
        },
        {
            text: "How should you dispose of a used vehicle battery?",
            options: [
                "Put it in the dustbin",
                "Leave it on waste land",
                "Take it to a local-authority site",
                "Bury it in your garden"
            ],
            correctAnswer: 2,
            explanation: "Batteries contain hazardous lead and acid. Recycle them at an authorised site."
        },
        {
            text: "When will your vehicle use more fuel?",
            options: [
                "When its tyres are of different makes",
                "When its tyres are under-inflated",
                "When its tyres are new",
                "When its tyres are over-inflated"
            ],
            correctAnswer: 1,
            explanation: "Under-inflated tyres increase drag and fuel use."
        },
        {
            text: "It's essential that tyre pressures are checked regularly. When should this be done?",
            options: [
                "After travelling at high speed",
                "When tyres are hot",
                "When tyres are cold",
                "After any lengthy journey"
            ],
            correctAnswer: 2,
            explanation: "Pressure readings are only accurate when tyres are cold."
        },
        {
            text: "What's the purpose of a catalytic converter?",
            options: [
                "To reduce harmful exhaust gases",
                "To reduce the risk of fire",
                "To reduce engine wear",
                "To reduce fuel consumption"
            ],
            correctAnswer: 0,
            explanation: "It converts toxic gases into less harmful pollutants."
        },
        {
            text: "What's the purpose of road humps, chicanes and narrowing's?",
            options: [
                "To increase traffic speed",
                "To separate lanes of traffic",
                "To reduce traffic speed",
                "To allow pedestrians to cross"
            ],
            correctAnswer: 2,
            explanation: "Traffic calming measures are designed to slow traffic down."
        },
        {
            text: "Why have 'red routes' been introduced in major cities?",
            options: [
                "To allow lorries to load more freely",
                "To help the traffic flow",
                "To raise the speed limits",
                "To provide better parking"
            ],
            correctAnswer: 1,
            explanation: "Red routes strictly prohibit stopping to keep traffic moving freely."
        },
        {
            text: "What makes the vehicle in the picture 'environmentally friendly'?",
            imageSrc: "/images/driving-theory/tram-sign.png",
            options: [
                "It's powered by gravity",
                "It's powered by diesel",
                "It's powered by unleaded petrol",
                "It's powered by electricity"
            ],
            correctAnswer: 3,
            explanation: "Electric vehicles produce zero tailpipe emissions."
        },
        {
            text: "When mustn't you sound your vehicle's horn?",
            options: [
                "Between 11.30 pm and 6.00 am on any road",
                "Between 10.00 pm and 6.00 am in a built-up area",
                "Between 11.30 pm and 7.00 am in a built-up area",
                "At any time in a built-up area"
            ],
            correctAnswer: 2,
            explanation: "Use of the horn is prohibited in built-up areas between 11:30 pm and 7:00 am."
        },
        {
            text: "What's badly affected if the tyres are under-inflated?",
            options: [
                "Changing gear",
                "Braking",
                "Indicating",
                "Parking"
            ],
            correctAnswer: 1,
            explanation: "Under-inflated tyres reduce grip and stability, severely affecting braking performance."
        }
    ]
};

async function main() {
    console.log("🚗 Seeding Driving Theory - Lesson 3: Safety and your vehicle...\n");

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
            videoUrl: quiz.videoUrl, // Added video URL here
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
