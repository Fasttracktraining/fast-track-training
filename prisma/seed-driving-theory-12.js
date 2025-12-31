const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const quiz = {
    title: "Lesson 12: Road and Traffic Signs",
    description: "Master the meanings of all road signs, signals, and markings.",
    courseSlug: "driving-theory",
    isPremium: false,
    videoUrl: "https://vimeo.com/1011728234?fl=pl&fe=sh",
    questions: [
        {
            text: "You're driving in busy traffic. You want to pull up on the left just after a junction on the left. When should you signal?",
            options: ["Just before you reach the junction", "It would be better not to signal at all", "As you're passing or just after the junction", "Well before you reach the junction"],
            correctAnswer: 2,
            explanation: "Signal after the junction to avoid confusing other drivers into thinking you are turning into the junction."
        },
        {
            text: "Why should you make sure that your indicators are cancelled after turning?",
            options: ["To avoid damage to the indicator relay", "To avoid flattening the battery", "To avoid dazzling other road users", "To avoid misleading other road users"],
            correctAnswer: 3,
            explanation: "Misleading signals can be dangerous."
        },
        {
            text: "When can you park on these markings outside a school?",
            imageSrc: "/images/driving-theory/school-keep-clear-markings.png",
            options: ["Not under any circumstances", "When you're dropping off children", "When there's nowhere else available", "When you're picking up children"],
            correctAnswer: 0,
            explanation: "You must not stop or park on yellow zigzag lines outside a school."
        },
        {
            text: "When may you use hazard warning lights while you're driving?",
            options: ["On rural routes, after a sign warning of animals", "On the approach to toucan crossings where cyclists are waiting to cross", "Instead of sounding the horn in a built-up area between 11.30 pm and 7.00 am", "On a motorway or unrestricted dual carriageway, to warn of a hazard ahead"],
            correctAnswer: 3,
            explanation: "You may use them while moving on motorways/dual carriageways to warn of obstruction ahead."
        },
        {
            text: "You're waiting at a T-junction. A vehicle is coming from the right, with its left indicator flashing. What should you do?",
            imageSrc: "/images/driving-theory/waiting-at-t-junction-indicating.png",
            options: ["Move out slowly", "Wait until the vehicle starts to turn in", "Move out and accelerate hard", "Pull out before the vehicle reaches the junction"],
            correctAnswer: 1,
            explanation: "Wait to ensure the vehicle is actually turning."
        },
        {
            text: "How should you give an arm signal to turn left?",
            options: [
                "[Image: /images/driving-theory/arm-signal-turn-left.png]",
                "[Image: /images/driving-theory/arm-signal-slow-down.png]",
                "[Image: /images/driving-theory/arm-signal-turn-right.png]",
                "[Image: /images/driving-theory/arm-signal-front-view-driver.png]"
            ],
            correctAnswer: 0,
            explanation: "The left turn arm signal involves moving the right arm in a clockwise circular motion."
        },
        {
            text: "What does this white arrow on the road ahead mean?",
            imageSrc: "/images/driving-theory/white-arrow-keep-left.png",
            options: ["Entrance on the left", "Keep left of the hatched markings", "Road bends to the left", "All vehicles turn left"],
            correctAnswer: 1,
            explanation: "White arrows often instruct you to get back into lane or keep left/right."
        },
        {
            text: "What does the white line along the side of the road indicate?",
            imageSrc: "/images/driving-theory/white-edge-line.png",
            options: ["No overtaking", "No parking", "The edge of the carriageway", "The approach to a hazard"],
            correctAnswer: 2,
            explanation: "Edge lines mark the side of the carriageway."
        },
        {
            text: "You're approaching a zebra crossing where pedestrians are waiting. Which arm signal might you give?",
            options: [
                "[Image: /images/driving-theory/arm-signal-turn-left.png]",
                "[Image: /images/driving-theory/arm-signal-slow-down.png]",
                "[Image: /images/driving-theory/arm-signal-turn-right.png]",
                "[Image: /images/driving-theory/arm-signal-front-view-driver.png]"
            ],
            correctAnswer: 1,
            explanation: "You might signal you are slowing down (arm moving up and down)."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/tunnel-warning-sign.png",
            options: ["Tunnel ahead", "Traffic danger spot ahead", "Ancient monument ahead", "Low bridge ahead"],
            correctAnswer: 0,
            explanation: "Check the specific sign image."
        },
        {
            text: "You're approaching a red traffic light. What will the signal show next?",
            imageSrc: "/images/driving-theory/traffic-light-red.png",
            options: ["Red and amber", "Green alone", "Green and amber", "Amber alone"],
            correctAnswer: 0,
            explanation: "Red and amber show together before green."
        },
        {
            text: "Which of these signs means turn left ahead?",
            options: [
                "[Image: /images/driving-theory/sign-mini-roundabout.png]",
                "[Image: /images/driving-theory/sign-turn-left-ahead.png]",
                "[Image: /images/driving-theory/sign-pass-either-side.png]",
                "[Image: /images/driving-theory/sign-keep-left.png]"
            ],
            correctAnswer: 1,
            explanation: "Blue circle with arrow turning left."
        },
        {
            text: "Which arm signal tells you that the car you're following is going to pull up?",
            options: [
                "[Image: /images/driving-theory/arm-signal-front-view-driver.png]",
                "[Image: /images/driving-theory/arm-signal-turn-left.png]",
                "[Image: /images/driving-theory/arm-signal-slow-down.png]",
                "[Image: /images/driving-theory/arm-signal-turn-right.png]"
            ],
            correctAnswer: 2,
            explanation: "Right arm moving up and down."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-zebra-crossing-ahead.png",
            options: ["Zebra crossing ahead", "Pedestrian zone - no vehicles", "No pedestrians allowed", "School crossing patrol"],
            correctAnswer: 0,
            explanation: "Check image."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-with-flow-bus-cycle-lane.png",
            options: ["No waiting for buses and cycles", "No buses and cycles allowed", "Contraflow bus and cycle lane", "With-flow bus and cycle lane"],
            correctAnswer: 3,
            explanation: "Blue signs indicate mandatory bus/cycle lanes."
        },
        {
            text: "Which of these signs shows that you're entering a one-way system?",
            options: [
                "[Image: /images/driving-theory/sign-one-way-traffic.png]",
                "[Image: /images/driving-theory/sign-no-u-turn.png]",
                "[Image: /images/driving-theory/sign-priority-over-oncoming.png]",
                "[Image: /images/driving-theory/sign-give-way-to-oncoming.png]"
            ],
            correctAnswer: 0,
            explanation: "Rectangular blue sign with white arrow."
        },
        {
            text: "You're in a tunnel and you see this sign. What does it mean?",
            imageSrc: "/images/driving-theory/sign-emergency-exit-pedestrian.png",
            options: ["Beware of pedestrians: no footpath ahead", "No access for pedestrians", "Beware of pedestrians crossing ahead", "Direction to emergency pedestrian exit"],
            correctAnswer: 3,
            explanation: "Green running man sign."
        },
        {
            text: "At a railway level crossing, the red lights continue to flash after a train has gone by. What should you do?",
            options: ["Phone the signal operator", "Alert drivers behind you", "Wait", "Proceed with caution"],
            correctAnswer: 2,
            explanation: "Wait; another train may be coming."
        },
        {
            text: "Where does this marking normally appear on a road?",
            imageSrc: "/images/driving-theory/road-marking-give-way-triangle.png",
            options: ["Just before a 'no through road' sign", "Just before a 'give way' sign", "Just before a 'stop' sign", "Just before a 'no entry' sign"],
            correctAnswer: 1,
            explanation: "Give way markings (inverted triangle)."
        },
        {
            text: "What should you do when approaching traffic lights where red and amber are showing together?",
            imageSrc: "/images/driving-theory/traffic-light-red-amber.png",
            options: ["Take care because there's a fault with the lights", "Stop because the lights are changing to red", "Wait for the green light", "Pass the lights if the road is clear"],
            correctAnswer: 2,
            explanation: "Red and amber mean 'Get Ready', but do not go until green."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-park-and-ride.png",
            options: ["Direction to park-and-ride car park", "No parking for buses or coaches", "Direction to bus and coach park", "Parking area for cars and coaches"],
            correctAnswer: 0,
            explanation: "Check image."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-hump-bridge.png",
            options: ["Low bridge", "Uneven road", "Hump bridge", "Traffic-calming hump"],
            correctAnswer: 2,
            explanation: "Warning sign with hump symbol."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-two-way-traffic-straight-ahead.png",
            options: ["Traffic approaching you has priority", "Two-way traffic straight ahead", "Motorway contraflow system ahead", "Two-way traffic crosses a one-way road"],
            correctAnswer: 1,
            explanation: "Triangle with up/down arrows."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-two-way-traffic-crosses.png",
            options: ["Two-way traffic over a bridge", "Two-way traffic crosses a two-way road", "Two-way traffic crosses a one-way road", "Two-way traffic straight ahead"],
            correctAnswer: 2,
            explanation: "Triangle with horizontal arrows."
        },
        {
            text: "What does this sign mean?",
            imageSrc: "/images/driving-theory/sign-mini-roundabout.png",
            options: ["Mini-roundabout", "Keep right", "Buses turning", "Ring road"],
            correctAnswer: 0,
            explanation: "Blue circle with arrows."
        },
        {
            text: "Which shape is used for a 'give way' sign?",
            options: [
                "[Image: /images/driving-theory/shape-triangle.png]",
                "[Image: /images/driving-theory/shape-inverted-triangle.png]",
                "[Image: /images/driving-theory/shape-circle.png]",
                "[Image: /images/driving-theory/shape-octagon.png]"
            ],
            correctAnswer: 1,
            explanation: "Inverted triangle."
        },
        {
            text: "What must you do when you see this sign?",
            imageSrc: "/images/driving-theory/sign-stop.png",
            options: [
                "Stop only if traffic is approaching",
                "Stop only if children are waiting to cross",
                "Stop only if a red light is showing",
                "Stop even if the road is clear"
            ],
            correctAnswer: 3,
            explanation: "Stop sign requires a full stop."
        }
    ]
};

// Add Questions 28-35
quiz.questions.push(
    {
        text: "You see this signal overhead on the motorway. What does it mean?",
        imageSrc: "/images/driving-theory/signal-motorway-leave-exit.png",
        options: ["Leave the motorway at the next exit", "All vehicles use the hard shoulder", "Sharp bend to the left ahead", "Stop: all lanes ahead closed"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "You see this amber traffic light ahead. Which light, or lights, will come on next?",
        imageSrc: "/images/driving-theory/traffic-light-amber.png",
        options: ["Red and amber together", "Green alone", "Green and amber together", "Red alone"],
        correctAnswer: 3,
        explanation: "Amber alone leads to Red."
    },
    {
        text: "A police car is following you. The police officer flashes the headlights and points to the left. What should you do?",
        options: ["Pull up on the left", "Turn left at the next junction", "Move over to the left", "Stop immediately"],
        correctAnswer: 0,
        explanation: "Pull up on the left safely."
    },
    {
        text: "Where would you find these road markings?",
        imageSrc: "/images/driving-theory/placeholder.png",
        options: ["On a motorway", "On a pedestrian crossing", "At a mini-roundabout", "At a railway crossing"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "What does this signal mean?",
        imageSrc: "/images/driving-theory/signal-tram-stop.png",
        options: ["Both trams and cars can continue", "Both trams and cars must stop", "Trams must stop", "Cars must stop"],
        correctAnswer: 2,
        explanation: "Horizontal white bar means Stop for trams."
    },
    {
        text: "What speed limit is often found in narrow residential streets?",
        options: ["25 mph", "40 mph", "20 mph", "35 mph"],
        correctAnswer: 2,
        explanation: "20 mph zones are common in residential areas."
    },
    {
        text: "Other drivers may sometimes flash their headlights at you. In which situation are they allowed to do this?",
        options: ["To let you know there's a fault with your vehicle", "To show that they're giving way to you", "To warn you of their presence", "To warn of a radar speed trap ahead"],
        correctAnswer: 2,
        explanation: "Only to warn others of your presence."
    },
    {
        text: "What's the reason for the area marked in red and white along the center of this road?",
        imageSrc: "/images/driving-theory/road-marking-red-white-center.png",
        options: ["It separates traffic flowing in opposite directions", "It marks an area to be used by overtaking motorcyclists", "It's a temporary marking to warn of the road works", "It separates the two sides of the dual carriageway"],
        correctAnswer: 0,
        explanation: "Separates opposing traffic."
    }
);

// Add Questions 36-43
quiz.questions.push(
    {
        text: "What's the reason for the yellow crisscross lines painted on the road here?",
        imageSrc: "/images/driving-theory/road-marking-box-junction.png",
        options: ["To warn you of the tram lines crossing the road", "To mark the entrance lane to a car park", "To prevent queuing traffic from blocking the junction on the left", "To mark out an area for trams only"],
        correctAnswer: 2,
        explanation: "Box junction prevents blocking."
    },
    {
        text: "What does this white line along the center of the road mean?",
        imageSrc: "/images/driving-theory/road-marking-hazard-warning-line.png",
        options: ["Give way warning", "Lane marking", "Hazard warning", "Bus lane marking"],
        correctAnswer: 2,
        explanation: "Hazard warning line (longer dashes)."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-quayside-river-bank.png",
        options: ["Steep hill downwards", "Road liable to flooding", "Uneven road surface", "Quayside or river bank"],
        correctAnswer: 3,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-urban-clearway.png",
        options: ["No parking at all from Monday to Friday", "End of the urban clearway restrictions", "No parking on the days and times shown", "You can park on the days and times shown"],
        correctAnswer: 2,
        explanation: "Check image."
    },
    {
        text: "Your vehicle is stationary. When may you use its horn?",
        options: ["When signaling that you've just arrived", "When another road user poses a danger", "When it's used only briefly", "When the road is blocked by queuing traffic"],
        correctAnswer: 1,
        explanation: "Only if another road user poses a danger."
    },
    {
        text: "When may you sound the horn?",
        options: ["To attract a friend's attention.", "To give you right of way", "To warn others of your presence", "To make slower drivers move over"],
        correctAnswer: 2,
        explanation: "To warn of your presence."
    },
    {
        text: "You're on a motorway. Red flashing lights appear above your lane only. What should you do?",
        options: ["Move into another lane in good time", "Continue in that lane and look for further information", "Pull onto the hard shoulder", "Stop and wait for an instruction to proceed"],
        correctAnswer: 0,
        explanation: "Move to another lane if red X or lights above yours."
    },
    {
        text: "You're on a motorway. A lorry has stopped in the right-hand lane. What should you do when you see this sign on the lorry?",
        imageSrc: "/images/driving-theory/sign-pass-arrow-lorry.png",
        options: ["Move into the right-hand lane", "Stop behind the flashing lights", "Pass the lorry on the left", "Leave the motorway at the next exit"],
        correctAnswer: 2,
        explanation: "Pass on the left if indicated."
    }
);

// Add Questions 44-75
quiz.questions.push(
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-no-motor-vehicles.png",
        options: ["No overtaking", "No motor vehicles", "Cars and motorcycles only", "Clearway (no stopping)"],
        correctAnswer: 1,
        explanation: "Check image."
    },
    // Placeholders for Q45-Q47
    { text: "Question 45 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    { text: "Question 46 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    { text: "Question 47 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    {
        text: "What does this sign indicate?",
        imageSrc: "/images/driving-theory/sign-diversion-route-triangle.png",
        options: ["A picnic area", "A pedestrian zone", "A diversion route", "A cycle route"],
        correctAnswer: 2,
        explanation: "Check image."
    },
    {
        text: "You see this sign on a motorway. What does it mean?",
        imageSrc: "/images/driving-theory/sign-speed-limit-ahead.png",
        options: ["Contraflow system 1 mile ahead", "50 mph limit 1 mile ahead", "Bridge maintenance 1 mile ahead", "Service area 1 mile ahead"],
        correctAnswer: 1,
        explanation: "Check image."
    },
    // Q50-Q51 Placeholders
    { text: "Question 50 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    { text: "Question 51 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    // Q52 Mapped
    {
        text: "Which of these signs means that the national speed limit applies?",
        options: [
            "[Image: /images/driving-theory/sign-no-entry.png]",
            "[Image: /images/driving-theory/sign-clearway-no-stopping.png]",
            "[Image: /images/driving-theory/sign-national-speed-limit.png]",
            "[Image: /images/driving-theory/sign-red-circle-empty.png]"
        ],
        correctAnswer: 2,
        explanation: "White circle with black diagonal stripe."
    },
    // Q53-Q59 Mapped
    {
        text: "What does this temporary sign indicate?",
        imageSrc: "/images/driving-theory/sign-advisory-speed-limit-50.png",
        options: ["A variable speed limit ahead", "An advisory change of speed limit ahead", "A mandatory speed-limit change ahead", "The speed-limit change at the end of the motorway"],
        correctAnswer: 1,
        explanation: "Advisory speed limit (lights not red)."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-end-of-motorway.png",
        options: ["Free recovery ends", "End of motorway", "End of restriction", "Lane ends ahead"],
        correctAnswer: 1,
        explanation: "Check image."
    },
    {
        text: "What's the maximum speed on a single carriageway road?",
        options: ["60 mph", "70 mph", "40 mph", "50 mph"],
        correctAnswer: 0,
        explanation: "60 mph for cars."
    },
    {
        text: "Which of these signs means that the national speed limit applies?",
        options: [
            "[Image: /images/driving-theory/sign-national-speed-limit.png]",
            "[Image: /images/driving-theory/sign-no-entry.png]",
            "[Image: /images/driving-theory/sign-clearway-no-stopping.png]",
            "[Image: /images/driving-theory/sign-red-circle-empty.png]"
        ],
        correctAnswer: 0,
        explanation: "Reuse of national speed limit options."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-no-motor-vehicles.png",
        options: ["No motor vehicles", "End of motorway", "End of bus lane", "No through road"],
        correctAnswer: 0,
        explanation: "Car and motorcycle in red circle."
    },
    {
        text: "What does '25' mean on this motorway sign?",
        imageSrc: "/images/driving-theory/sign-motorway-junction-number.png",
        options: ["The speed limit on the slip road", "The distance to the nearest town", "The number of the next junction", "The route number of the road"],
        correctAnswer: 2,
        explanation: "Junction number."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-motorway-lane-closed.png",
        options: ["Right-hand lane T-junction only", "Right-hand lane closed ahead", "11 tone weight limit", "Through traffic to use left lane"],
        correctAnswer: 1,
        explanation: "Lane closed symbol."
    },
    {
        text: "What does this motorway sign mean?",
        imageSrc: "/images/driving-theory/sign-temporary-max-speed-50.png",
        options: ["Temporary minimum speed 50 mph", "Temporary maximum speed 50 mph", "Obstruction 50 meters (164 feet) ahead", "No services for 50 miles"],
        correctAnswer: 1,
        explanation: "Temp max speed."
    },
    // Q61-Q74 Mapped & Placeholders
    {
        text: "What should you do when you see this sign on a motorway?",
        imageSrc: "/images/driving-theory/signal-motorway-arrow-left.png",
        options: ["Move into the lane on your left", "Leave the motorway at the next exit", "Change lanes to the right", "Stop on the hard shoulder"],
        correctAnswer: 1,
        explanation: "Arrow pointing down-left usually means leave at next exit."
    },
    {
        text: "What do these motorway road markings mean?",
        imageSrc: "/images/driving-theory/road-marking-motorway-separation-chevrons.png",
        options: ["You're approaching a 50 mph speed limit", "You're approaching a lay-by", "They separate traffic flowing in opposite directions", "They separate traffic flowing in the same direction"],
        correctAnswer: 3,
        explanation: "Chevrons separate traffic in same direction (e.g. exit slip)."
    },
    {
        text: "The driver of the car in front is giving this arm signal. What does it mean?",
        imageSrc: "/images/driving-theory/arm-signal-turn-left-rear.png",
        options: ["The driver intends to turn left", "The driver intends to turn right", "The driver intends to slow down", "The driver intends to stop"],
        correctAnswer: 0,
        explanation: "Right arm rotating means Left Turn."
    },
    {
        text: "You're approaching a junction. A police officer gives this signal. What should you do?",
        imageSrc: "/images/driving-theory/police-signal-stop-junction.png",
        options: ["Turn left", "Turn right", "Stop at the stop line", "Proceed past the officer"],
        correctAnswer: 2,
        explanation: "Hand up palm forward means Stop."
    },
    // Q65-Q67 Placeholders
    { text: "Question 65 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    { text: "Question 66 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    { text: "Question 67 placeholder", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Placeholder" },
    {
        text: "What does this white line along the center of the road mean?",
        imageSrc: "/images/driving-theory/road-marking-hazard-center-v2.png",
        options: ["Give way warning", "Lane marking", "Hazard warning", "Bus lane marking"],
        correctAnswer: 2,
        explanation: "Hazard warning line (long dashes)."
    },
    // Q69-74 Mapped & Placeholders
    {
        text: "What do these road markings mean?",
        imageSrc: "/images/driving-theory/road-marking-lane-separation.png",
        options: ["Lane separation", "No overtaking", "Hazard ahead", "Bus lane"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "What does this road marking mean?",
        imageSrc: "/images/driving-theory/road-marking-hazard-line-2.png",
        options: ["Hazard warning", "Lane marking", "Edge line", "Stop line"],
        correctAnswer: 0,
        explanation: "Hazard warning line."
    },
    {
        text: "What do these double white lines mean?",
        imageSrc: "/images/driving-theory/road-marking-double-white-lines.png",
        options: ["No parking", "No overtaking", "Tidal flow", "Dual carriageway"],
        correctAnswer: 1,
        explanation: "Do not cross solid double white lines."
    },
    {
        text: "What do these zigzag lines mean?",
        imageSrc: "/images/driving-theory/road-marking-zigzag-lines.png",
        options: ["No stopping or parking", "No overtaking", "School crossing", "Pedestrian crossing ahead"],
        correctAnswer: 0,
        explanation: "Zigzags at crossings mean no stopping."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-level-crossing-lights.png",
        options: ["Stop when lights show", "Train approaching", "Level crossing barrier stuck", "Traffic lights ahead"],
        correctAnswer: 0,
        explanation: "Stop when red lights flash."
    },
    // Q74 Mapped
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-traffic-lights-out-of-order.png",
        options: ["Amber signal out of order", "Temporary traffic lights ahead", "New traffic lights ahead", "Traffic lights out of order"],
        correctAnswer: 3,
        explanation: "Sign indicates traffic lights are not working."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-traffic-lights-out-of-order.png",
        options: ["Amber signal out of order", "Temporary traffic lights ahead", "New traffic lights ahead", "Traffic lights out of order"],
        correctAnswer: 3,
        explanation: "Check image."
    }
);

// Add Questions 76-90
quiz.questions.push(
    {
        text: "You're in the left-hand lane at traffic lights, waiting to turn left. At which of these traffic lights mustn't you move on?",
        options: [
            "[Image: /images/driving-theory/traffic-light-red-green-arrow-a.png]",
            "[Image: /images/driving-theory/traffic-light-green-main-b.png]",
            "[Image: /images/driving-theory/traffic-light-red-amber-c.png]",
            "[Image: /images/driving-theory/traffic-light-red-green-arrow-d.png]"
        ],
        correctAnswer: 2,
        explanation: "Red and amber together mean 'Stop' and 'Get Ready'. Do not proceed until green shows."
    },
    {
        text: "You're at a junction controlled by traffic lights. When shouldn't you proceed at green?",
        imageSrc: "/images/driving-theory/traffic-light-green.png",
        options: ["When pedestrians are waiting to cross", "When you think the lights may be about to change", "When you intend to turn right", "When your exit from the junction is blocked"],
        correctAnswer: 3,
        explanation: "Don't block the junction."
    },
    {
        text: "At traffic lights, what does it mean when the amber light shows on its own?",
        options: ["Go if no pedestrians are crossing", "Prepare to go", "Go if the way is clear", "Stop at the stop line"],
        correctAnswer: 3,
        explanation: "Amber means stop unless unsafe."
    },
    {
        text: "What does a red traffic light mean?",
        options: ["You should stop unless turning left", "Proceed with care", "You must stop and wait behind the stop line", "Stop, if you're able to brake safely"],
        correctAnswer: 2,
        explanation: "Stop behind the line."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-crawler-lane.png",
        options: ["Lane for heavy and slow vehicles", "Rest area for lorries", "All lorries use the hard shoulder", "Leave motorway at next exit"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-contraflow-stay-in-lane-30.png",
        options: ["One-way street", "Contraflow system", "Leave at the next exit", "Change to the left lane"],
        correctAnswer: 1,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-right-lane-narrow.png",
        options: ["The right-hand lane ahead is narrow", "The right-hand lane is closed", "Right-hand lane for turning right", "Right-hand lane for buses only"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "Which is the sign for a ring road?",
        options: [
            "[Image: /images/driving-theory/sign-roundabout-blue.png]",
            "[Image: /images/driving-theory/sign-ring-road.png]",
            "[Image: /images/driving-theory/sign-clearway-no-stopping-from-q83.png]",
            "[Image: /images/driving-theory/sign-roundabout-warning.png]"
        ],
        correctAnswer: 1,
        explanation: "'R' or circular text sign."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-no-through-road.png",
        options: ["No through road", "T-junction", "Toilet ahead", "Telephone box ahead"],
        correctAnswer: 0,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-no-through-road-left.png",
        options: ["Turn left for ferry terminal", "No through road on the left", "Turn left for parking area", "No entry for traffic turning left"],
        correctAnswer: 1,
        explanation: "No through road on the left."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-ford.png",
        options: ["Road ahead ends", "Bridge over the road", "Uneven road surface", "Water across the road"],
        correctAnswer: 3,
        explanation: "Warning of water across road (Ford)."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-steep-hill-downwards-10.png",
        options: ["Adverse camber", "Steep hill downwards", "Steep hill upwards", "Uneven road"],
        correctAnswer: 1,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/sign-trams-crossing-ahead.png",
        options: ["Oncoming trams", "No trams ahead", "Trams crossing ahead", "Trams only"],
        correctAnswer: 2,
        explanation: "Check image."
    },
    {
        text: "What does this sign mean?",
        imageSrc: "/images/driving-theory/placeholder.png",
        options: ["Gated road ahead", "Level crossing with gate or barrier", "Cattle grid ahead", "Level crossing without gate or barrier"],
        correctAnswer: 1,
        explanation: "Gate symbol."
    },
    {
        text: "You're about to overtake. What should you do when you see this sign?",
        imageSrc: "/images/driving-theory/placeholder.png",
        options: ["Move to the right to get a better view", "Hold back until you can see clearly ahead", "Overtake the other driver as quickly as possible", "Switch your headlights on before overtaking"],
        correctAnswer: 1,
        explanation: "Sign usually warns of Dip or Hidden Dip or oncoming traffic."
    }
);

// Add Questions 91-137
quiz.questions.push(
    { text: "What does this traffic sign mean?", imageSrc: "/images/driving-theory/placeholder.png", options: ["Slippery road ahead", "Service area ahead", "Danger ahead", "Tyres liable to punctures ahead"], correctAnswer: 2, explanation: "Exclamation mark means Danger ahead." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/placeholder.png", options: ["Airport", "Road noise", "Adverse camber", "Side winds"], correctAnswer: 3, explanation: "Windsock symbol." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/placeholder.png", options: ["Tall bridge", "End of narrow bridge", "End of dual carriageway", "Road narrows"], correctAnswer: 2, explanation: "Check image." },
    { text: "Which of these signs means the end of a dual carriageway?", options: ["[Image A]", "[Image B]", "[Image C]", "[Image D]"], correctAnswer: 0, explanation: "Check image." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-hump-in-road-triangle.png", options: ["Entrance to tunnel", "Hump bridge", "Soft verges", "Humps in the road"], correctAnswer: 3, explanation: "Check image." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-give-way-to-trams.png", options: ["Give way to farm vehicles", "Wait at the crossroads", "Wait at the barriers", "Give way to trams"], correctAnswer: 3, explanation: "Give way to trams." },
    { text: "Which of these signs means there's a double bend ahead?", options: ["[Image A]", "[Image B]", "[Image C]", "[Image D]"], correctAnswer: 0, explanation: "Zigzag arrow sign." },
    {
        text: "Which sign means that pedestrians may be walking along the road?",
        options: [
            "[Image: /images/driving-theory/sign-pedestrians-in-road.png]",
            "[Image: /images/driving-theory/sign-pedestrian-crossing-warning.png]",
            "[Image: /images/driving-theory/sign-frail-pedestrians.png]",
            "[Image: /images/driving-theory/sign-school-crossing-warning.png]"
        ],
        correctAnswer: 0,
        explanation: "Adult and child sign warns of pedestrians in the road (no pavement)."
    },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-cycle-route-ahead-warning.png", options: ["Cyclists must dismount", "Cycle in single file", "Cycles aren't allowed", "Cycle route ahead"], correctAnswer: 3, explanation: "Check image." },
    { text: "What information would be shown in a triangular road sign?", imageSrc: "/images/driving-theory/sign-road-narrows-both.png", options: ["Road narrows", "Minimum speed", "Keep left", "Ahead only"], correctAnswer: 0, explanation: "Triangles warn (e.g. road narrows)." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-roundabout-ahead-warning.png", options: ["Roundabout", "No vehicles", "Ring road", "Mini-roundabout"], correctAnswer: 0, explanation: "Check image." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-crossroads-warning.png", options: ["Level crossing without gate", "Ahead only", "Level crossing with gate", "Crossroads"], correctAnswer: 3, explanation: "Check image." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-risk-of-ice-snowflake.png", options: ["Six roads converge", "Place of historical interest", "Multi-exit roundabout", "Risk of ice"], correctAnswer: 3, explanation: "Check image." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-t-junction-warning.png", options: ["T-junction", "Give way", "Turn left ahead", "No through road"], correctAnswer: 0, explanation: "Check image." },
    { text: "What are triangular signs for?", imageSrc: "/images/driving-theory/placeholder.png", options: ["To give directions", "To give information", "To give orders", "To give warnings"], correctAnswer: 3, explanation: "Warnings." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-tourist-attraction-train.png", options: ["Beware of trains", "Beware of trams", "Level crossing", "Tourist attraction"], correctAnswer: 3, explanation: "Brown sign = Tourist attraction." },
    { text: "What does a sign with a brown background show?", imageSrc: "/images/driving-theory/sign-tourist-directions-brown-arrow.png", options: ["Motorway routes", "Primary roads", "Tourist directions", "Minor roads"], correctAnswer: 2, explanation: "Tourist info." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-contraflow-bus-lane.png", options: ["Bus station on the right", "Give way to buses", "Contraflow bus lane", "With-flow bus lane"], correctAnswer: 2, explanation: "Check image." },
    { text: "Where would you see a contraflow bus and cycle lane?", options: ["On a one-way street", "On a roundabout", "On an urban motorway", "On a dual carriageway"], correctAnswer: 0, explanation: "One-way streets often have contraflow lanes." },
    { text: "What does a circular traffic sign with a blue background do?", imageSrc: "/images/driving-theory/sign-blue-circle-only.png", options: ["Give motorway information", "Give warning of a motorway ahead", "Give directions to a car park", "Give an instruction"], correctAnswer: 3, explanation: "Orders (Mandatory)." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-route-for-trams.png", options: ["Route for trams", "Give way to buses", "Give way to trams", "Route for buses"], correctAnswer: 0, explanation: "Blue circle with tram and 'Only' means route for trams only." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-pass-either-side.png", options: ["Approaching traffic passes you on both sides", "Pass either side to get to the same destination", "Turn off at the next available junction", "Give way to oncoming vehicles"], correctAnswer: 1, explanation: "Pass either side." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-minimum-speed-30.png", options: ["Minimum speed 30 mph", "Lay-by 30 miles ahead", "Service area 30 miles ahead", "Maximum speed 30 mph"], correctAnswer: 0, explanation: "Blue circle = Minimum speed." },
    { text: "At a junction, you see this sign partly covered by snow. What does it mean?", imageSrc: "/images/driving-theory/sign-stop-snow-covered.png", options: ["Give way", "Crossroads", "Turn right", "Stop"], correctAnswer: 3, explanation: "Octagonal sign = Stop." },
    { text: "What shape is a 'stop' sign at a junction?", options: ["[Image: /images/driving-theory/sign-octagon-stop.png]", "[Image: /images/driving-theory/sign-triangle-warning.png]", "[Image: /images/driving-theory/sign-circle-order.png]", "[Image: /images/driving-theory/sign-rect-info.png]"], correctAnswer: 0, explanation: "The 'Stop' sign is the only octagonal sign." },
    { text: "What's the meaning of this traffic sign?", imageSrc: "/images/driving-theory/sign-give-priority-oncoming-circle.png", options: ["Give priority to vehicles coming towards you", "End of two-way road", "Bus lane ahead", "You have priority over vehicles coming towards you"], correctAnswer: 0, explanation: "Red circle with arrows means give priority to oncoming traffic." },
    { text: "What does this traffic sign mean?", imageSrc: "/images/driving-theory/sign-two-way-traffic-arrows-warning.png", options: ["One-way traffic only", "Give priority to oncoming traffic", "No overtaking allowed", "Two-way traffic"], correctAnswer: 3, explanation: "Two way traffic arrows." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-parking-on-verge-or-footway.png", options: ["Vehicles may park on the right-hand side of the road only", "Vehicles may not park on the verge or footway", "Vehicles may park on the left-hand side of the road only", "Vehicles may park fully on the verge or footway"], correctAnswer: 3, explanation: "Sign P on pavement means parking on verge or footway allowed." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-parking-distance-1-mile.png", options: ["Distance to parking place ahead", "Distance to public house ahead", "Distance to passing place ahead", "Distance to public telephone ahead"], correctAnswer: 2, explanation: "Blue sign with 'P' and distance usually indicates a passing place or parking (Check image context, if 'P' it's parking, if 'Passing Place' text it's that. The image shows 'P 1 mile' so it's distance to parking)." },
    { text: "You see this sign ahead. What does it mean?", imageSrc: "/images/driving-theory/sign-clearway-no-stopping-red-cross.png", options: ["No stopping", "No entry", "Waiting restrictions apply", "National speed limit applies"], correctAnswer: 0, explanation: "Clearway sign (red cross on blue circle)." },
    { text: "Which sign means 'no stopping'?", options: ["[Image: /images/driving-theory/sign-clearway-no-stopping-red-cross.png]", "[Image: /images/driving-theory/sign-no-waiting.png]", "[Image: /images/driving-theory/sign-no-entry.png]", "[Image: /images/driving-theory/sign-no-motor-vehicles.png]"], correctAnswer: 0, explanation: "Red cross on blue." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-zone-ends-restriction.png", options: ["End of restricted parking area", "End of clearway", "End of restricted speed area", "End of cycle route"], correctAnswer: 0, explanation: "Zone ends." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-no-waiting-red-blue.png", options: ["Clearway (no stopping)", "Waiting restrictions apply", "National speed limit applies", "Waiting permitted"], correctAnswer: 1, explanation: "No waiting (single diagonal bar)." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-no-motor-vehicles-all.png", options: ["Two-way traffic", "No overtaking", "No motor vehicles", "You have priority"], correctAnswer: 2, explanation: "Car and motorcycle in red circle means no motor vehicles." },
    { text: "Which sign means no motor vehicles allowed?", options: ["[Image: /images/driving-theory/sign-no-motor-vehicles-all.png]", "[Image: /images/driving-theory/sign-no-entry.png]", "[Image: /images/driving-theory/sign-no-overtaking.png]", "[Image: /images/driving-theory/sign-no-pedestrians.png]"], correctAnswer: 0, explanation: "Car and motorcycle in red circle." },
    { text: "Which type of vehicle does this sign apply to?", imageSrc: "/images/driving-theory/sign-height-limit-circle.png", options: ["Long vehicles", "Wide vehicles", "Heavy vehicles", "High vehicles"], correctAnswer: 3, explanation: "Height limit sign applies to high vehicles." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-route-for-trams-only.png", options: ["Route for trams only", "Parking for buses only", "Parking for trams only", "Route for buses only"], correctAnswer: 0, explanation: "Blue circle with tram and 'Only' means route for trams only." },
    { text: "Which sign means 'no entry'?", options: ["[Image: /images/driving-theory/sign-no-entry.png]", "[Image: /images/driving-theory/sign-no-waiting.png]", "[Image: /images/driving-theory/sign-no-motor-vehicles-all.png]", "[Image: /images/driving-theory/sign-clearway-no-stopping-red-cross.png]"], correctAnswer: 0, explanation: "Red circle with horizontal white bar." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-no-right-turn.png", options: ["Bend to the right", "No traffic from the right", "Road on the right closed", "No right turn"], correctAnswer: 3, explanation: "Red circle with crossed right arrow." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-no-waiting.png", options: ["No parking", "No through road", "No road markings", "No entry"], correctAnswer: 0, explanation: "No waiting/parking." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-no-overtaking-red.png", options: ["No overtaking", "No motor vehicles", "Cars and motorcycles only", "Clearway (no stopping)"], correctAnswer: 0, explanation: "Red circle with car next to car." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-end-of-20-zone.png", options: ["No vehicles over 30 tonnes", "End of 20 mph zone", "Minimum speed limit 30 mph", "New speed limit 20 mph"], correctAnswer: 1, explanation: "End of 20 zone." },
    { text: "Which sign means no motor vehicles are allowed?", options: ["[Image: /images/driving-theory/sign-no-motor-vehicles-all.png]", "[Image: /images/driving-theory/sign-no-entry.png]", "[Image: /images/driving-theory/sign-no-overtaking-red.png]", "[Image: /images/driving-theory/sign-no-waiting.png]"], correctAnswer: 0, explanation: "Car/Bike red circle." },
    { text: "What does this sign mean?", imageSrc: "/images/driving-theory/sign-zone-20-entrance-detailed.png", options: ["Minimum speed limit with traffic calming", "Maximum speed limit with traffic calming", "20 cars only' parking zone", "Only 20 cars allowed at any one time"], correctAnswer: 1, explanation: "Zone 20 sign with traffic calming." },
    { text: "Which type of sign tells you not to do something?", options: ["[Image: /images/driving-theory/sign-red-circle-empty.png]", "[Image: /images/driving-theory/sign-green-bg.png]", "[Image: /images/driving-theory/sign-blue-bg.png]", "[Image: /images/driving-theory/sign-blue-circle-empty.png]"], correctAnswer: 0, explanation: "Red circle signs are prohibitive orders." },
    { text: "Traffic signs giving orders are generally which shape?", options: ["Circle", "Triangle", "Rectangle", "Octagon"], correctAnswer: 0, explanation: "Circle signs give orders." },
    { text: "How can you identify traffic signs that give orders?", options: ["Red triangles", "Blue rectangles", "Green rectangles", "Red circles"], correctAnswer: 3, explanation: "Red circles give orders." }
);

async function main() {
    console.log(`🚗 Seeding Driving Theory - Lesson 12: Road and Traffic Signs (${quiz.questions.length} questions)...`);

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
                    imageSrc: q.imageSrc,
                    options: JSON.stringify(q.options),
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation
                }))
            }
        }
    });

    console.log("✅ Lesson 12 seeded successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
