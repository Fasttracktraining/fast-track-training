// Funnel configuration data for all courses
// This powers the ClickFunnels-style lead generation and sales funnel

export interface CourseConfig {
    slug: string;
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    heroVideoUrl: string;
    bridgeVideoUrl: string;
    totalFreeVideos: number;
    pricing: {
        group: { price: number; original: number; stripeLink: string };
        oneToOne: { price: number; original: number; stripeLink: string };
        vip: { price: number; original: number; stripeLink: string };
    };
    bonusVideos: BonusVideo[];
    faq: FAQ[];
    reviews: Review[];
}

export interface BonusVideo {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail?: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Review {
    name: string;
    date: string;
    rating: number;
    text: string;
    source: "google" | "trustpilot" | "yell";
}

export const COURSES: Record<string, CourseConfig> = {
    "life-in-the-uk": {
        slug: "life-in-the-uk",
        name: "Life in the UK Test",
        shortName: "Life in UK",
        tagline: "Pass Your Life in the UK Test First Time!",
        description:
            "Get instant access to 10 FREE bonus video lessons that cover the hardest parts of the exam.",
        heroVideoUrl: "https://player.vimeo.com/video/496431100",
        bridgeVideoUrl: "https://player.vimeo.com/video/496431100",
        totalFreeVideos: 10,
        pricing: {
            group: {
                price: 295,
                original: 395,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            oneToOne: {
                price: 450,
                original: 550,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            vip: {
                price: 495,
                original: 650,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
        },
        bonusVideos: [
            {
                id: 1,
                title: "How to Pass the Life in the UK Test First Time",
                description:
                    "Learn the proven 99% first-time pass method that thousands of our students have used to succeed. This comprehensive overview sets the foundation for your success.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 2,
                title: "Difficulty Memorising Historical Dates",
                description:
                    "Master our proven memory techniques for remembering key dates and events in British history. Learn the easy method that makes dates stick in your mind forever.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 3,
                title: "Understanding British Cultural Traditions",
                description:
                    "Explore British customs, holidays, and traditions in this engaging video. Perfect for building cultural knowledge that appears frequently on the test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 4,
                title: "Confusion With Government And Politics",
                description:
                    "Simplified breakdown of the UK government structure, from Parliament to local councils. Never get confused about political questions again.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 5,
                title: "How To Study For The Life In The UK Test",
                description:
                    "Discover the optimal study schedule and techniques that guarantee success. Learn how to study smarter, not harder.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 6,
                title: "How To Manage Your Stress",
                description:
                    "Test anxiety tips and relaxation techniques to stay calm and focused. Mental preparation is just as important as studying.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 7,
                title: "More Life In The UK Test Questions!",
                description:
                    "Practice with real-style test questions and detailed explanations. Get comfortable with the question format before exam day.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 8,
                title: "How To Book Your Test",
                description:
                    "Step-by-step guide to booking your official Life in the UK test. Avoid common booking mistakes and choose the best test centre.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 9,
                title: "LIVE Class Recording",
                description:
                    "Watch a full live training session with our expert instructors. Experience what our group training classes are like.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 10,
                title: "How To Get Started Today",
                description:
                    "Your complete action plan to begin your Life in the UK test preparation today. Start your journey to British citizenship!",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
        ],
        faq: [
            {
                question: "How long do I have access to the training?",
                answer:
                    "You have UNLIMITED access! You stay with us until you pass – no time limits, no additional fees.",
            },
            {
                question: "What is your pass rate?",
                answer:
                    "We have a 99% first-time pass rate with over 13 years of experience helping thousands of students succeed.",
            },
            {
                question: "Can I study at my own pace?",
                answer:
                    "Absolutely! All video lessons and practice tests are available 24/7 on any device.",
            },
            {
                question: "What if I fail the test?",
                answer:
                    "With our unlimited training package, you continue learning with us until you pass – completely free of additional charges.",
            },
            {
                question: "When are the live classes?",
                answer:
                    "Our live Zoom group training sessions run 5 days a week – Tuesday, Wednesday, Thursday, Saturday, and Sunday. Morning and evening slots available.",
            },
        ],
        reviews: [
            {
                name: "Pardis Namdar",
                date: "2023-07-03",
                rating: 5,
                text: "Very well run, the director is so sweet and creative which creates a connection code between words. The teachers are professional and really nice.",
                source: "google",
            },
            {
                name: "Sarah Johnson",
                date: "2023-07-25",
                rating: 5,
                text: "Excellent training program with knowledgeable instructors. The course content is well structured and easy to follow. Highly recommend!",
                source: "google",
            },
            {
                name: "Michael Chen",
                date: "2023-07-15",
                rating: 5,
                text: "Great experience! The staff was professional and the training materials were comprehensive. I learned a lot and feel confident now.",
                source: "google",
            },
        ],
    },
    "b1-english": {
        slug: "b1-english",
        name: "B1 English Test (SELT)",
        shortName: "B1 English",
        tagline: "Pass Your B1 English Speaking & Listening Test!",
        description:
            "Get instant access to 10 FREE bonus video lessons that prepare you for the Trinity SELT exam.",
        heroVideoUrl: "https://player.vimeo.com/video/496431100",
        bridgeVideoUrl: "https://player.vimeo.com/video/496431100",
        totalFreeVideos: 10,
        pricing: {
            group: {
                price: 295,
                original: 395,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            oneToOne: {
                price: 450,
                original: 550,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            vip: {
                price: 495,
                original: 650,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
        },
        bonusVideos: [
            {
                id: 1,
                title: "Introduction to B1 English Test",
                description:
                    "Learn everything you need to know about the B1 English SELT exam format and what to expect.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 2,
                title: "Speaking Practice - Topic Discussion",
                description:
                    "Master the art of discussing topics confidently in English with our proven techniques.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 3,
                title: "Listening Skills Development",
                description:
                    "Improve your English listening comprehension with targeted exercises and tips.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 4,
                title: "Common Grammar Mistakes to Avoid",
                description:
                    "Learn the most common grammar errors and how to avoid them in your speaking test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 5,
                title: "Pronunciation Tips & Tricks",
                description:
                    "Perfect your English pronunciation with our expert guidance and practice exercises.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 6,
                title: "Mock Speaking Test Practice",
                description:
                    "Experience a full mock speaking test to prepare for the real exam.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 7,
                title: "Building Vocabulary for Success",
                description:
                    "Expand your English vocabulary with topic-specific words and phrases.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 8,
                title: "Handling Difficult Questions",
                description:
                    "Learn strategies for answering challenging questions confidently.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 9,
                title: "Test Day Preparation",
                description:
                    "Everything you need to know for your test day - from booking to success.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 10,
                title: "Final Review & Action Plan",
                description:
                    "Your complete action plan to pass your B1 English test first time.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
        ],
        faq: [
            {
                question: "What is the B1 English SELT test?",
                answer:
                    "The B1 SELT (Secure English Language Test) is required for UK visa applications, particularly for spouse/partner visas and indefinite leave to remain.",
            },
            {
                question: "How long is the training?",
                answer:
                    "Our students typically prepare for 2-4 weeks, but you have unlimited access until you pass.",
            },
            {
                question: "Do you offer speaking practice?",
                answer:
                    "Yes! Our group training includes live speaking practice sessions with qualified English teachers.",
            },
            {
                question: "What if I have no English background?",
                answer:
                    "We cater to all levels. Our 1:1 training is perfect for beginners who need extra support.",
            },
            {
                question: "What is your pass rate?",
                answer:
                    "We maintain a 99% pass rate with our comprehensive training program.",
            },
        ],
        reviews: [
            {
                name: "Maria Garcia",
                date: "2023-08-15",
                rating: 5,
                text: "The B1 training was exactly what I needed. Passed my speaking test with confidence!",
                source: "google",
            },
            {
                name: "Ahmed Hassan",
                date: "2023-07-28",
                rating: 5,
                text: "Excellent teachers who really helped improve my English speaking skills.",
                source: "trustpilot",
            },
            {
                name: "Anna Kowalski",
                date: "2023-08-02",
                rating: 5,
                text: "Very professional service. The practice sessions were incredibly helpful.",
                source: "google",
            },
        ],
    },
    "driving-theory": {
        slug: "driving-theory",
        name: "Driving Theory Test",
        shortName: "Driving Theory",
        tagline: "Pass Your Driving Theory Test First Time!",
        description:
            "Get instant access to 10 FREE bonus video lessons covering hazard perception and mock tests.",
        heroVideoUrl: "https://player.vimeo.com/video/496431100",
        bridgeVideoUrl: "https://player.vimeo.com/video/496431100",
        totalFreeVideos: 10,
        pricing: {
            group: {
                price: 95,
                original: 150,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            oneToOne: {
                price: 195,
                original: 250,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            vip: {
                price: 295,
                original: 350,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
        },
        bonusVideos: [
            {
                id: 1,
                title: "Introduction to the Theory Test",
                description:
                    "Learn about the format and structure of the UK driving theory test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 2,
                title: "Hazard Perception Explained",
                description:
                    "Master the hazard perception test with our proven scoring techniques.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 3,
                title: "Road Signs & Markings",
                description:
                    "Learn all the essential road signs and what they mean for safe driving.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 4,
                title: "Rules of the Road",
                description:
                    "Understand right of way, speed limits, and essential driving rules.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 5,
                title: "Vehicle Safety & Maintenance",
                description:
                    "Learn about vehicle checks, maintenance, and safety requirements.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 6,
                title: "Mock Test Practice - Part 1",
                description:
                    "Practice with real-style theory test questions and explanations.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 7,
                title: "Mock Test Practice - Part 2",
                description:
                    "Continue your practice with more challenging test questions.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 8,
                title: "Hazard Perception Practice",
                description:
                    "Practice identifying hazards with realistic video clips.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 9,
                title: "Booking Your Test",
                description:
                    "Step-by-step guide to booking your driving theory test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 10,
                title: "Test Day Tips",
                description:
                    "Essential tips for test day success and what to expect.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
        ],
        faq: [
            {
                question: "How is the theory test structured?",
                answer:
                    "The test has two parts: 50 multiple choice questions (you need 43 correct) and a hazard perception test with 14 video clips.",
            },
            {
                question: "How long should I study?",
                answer:
                    "Most students need 20-30 hours of study. Our intensive courses can prepare you in just 1-2 weeks.",
            },
            {
                question: "Do you cover hazard perception?",
                answer:
                    "Yes! We have extensive hazard perception practice with realistic video clips.",
            },
            {
                question: "Can I access practice on mobile?",
                answer:
                    "Absolutely! All our training materials work on phones, tablets, and computers.",
            },
            {
                question: "What is your pass rate?",
                answer:
                    "We maintain a 95% pass rate for driving theory with our comprehensive training.",
            },
        ],
        reviews: [
            {
                name: "James Wilson",
                date: "2023-09-10",
                rating: 5,
                text: "Passed first time! The hazard perception practice was brilliant.",
                source: "google",
            },
            {
                name: "Sophie Taylor",
                date: "2023-08-22",
                rating: 5,
                text: "Great value for money. The mock tests were exactly like the real thing.",
                source: "trustpilot",
            },
            {
                name: "Ryan Murphy",
                date: "2023-09-05",
                rating: 5,
                text: "Clear explanations and lots of practice questions. Highly recommend!",
                source: "google",
            },
        ],
    },
    "a1-english": {
        slug: "a1-english",
        name: "A1/A2 English Test (SELT)",
        shortName: "A1/A2 English",
        tagline: "Pass Your A1/A2 English Speaking & Listening Test!",
        description:
            "Get instant access to 10 FREE bonus video lessons to prepare for your visa application.",
        heroVideoUrl: "https://player.vimeo.com/video/496431100",
        bridgeVideoUrl: "https://player.vimeo.com/video/496431100",
        totalFreeVideos: 10,
        pricing: {
            group: {
                price: 195,
                original: 295,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            oneToOne: {
                price: 350,
                original: 450,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
            vip: {
                price: 395,
                original: 495,
                stripeLink: "https://buy.stripe.com/28E28raGN5K2gG3afyfEk0W",
            },
        },
        bonusVideos: [
            {
                id: 1,
                title: "Introduction to A1/A2 English Test",
                description:
                    "Learn everything about the A1 and A2 English test requirements for UK visas.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 2,
                title: "Basic Speaking Practice",
                description:
                    "Build confidence with basic English speaking exercises for beginners.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 3,
                title: "Listening Comprehension Basics",
                description:
                    "Develop your English listening skills with simple, clear exercises.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 4,
                title: "Common Phrases for the Test",
                description:
                    "Learn essential phrases and vocabulary you'll need for the speaking test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 5,
                title: "Pronunciation Made Easy",
                description:
                    "Simple tips to improve your English pronunciation quickly.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 6,
                title: "Practice Conversation Topics",
                description:
                    "Practice discussing common topics that appear in the A1/A2 test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 7,
                title: "Building Confidence",
                description:
                    "Techniques to overcome nervousness and speak with confidence.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 8,
                title: "Mock Test Experience",
                description:
                    "Experience a full mock A1/A2 test to know what to expect.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 9,
                title: "Booking Your Test",
                description:
                    "How to book your official A1/A2 English test at Trinity or IELTS centres.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
            {
                id: 10,
                title: "Your Success Action Plan",
                description:
                    "Your complete roadmap to passing the A1/A2 English test.",
                videoUrl: "https://player.vimeo.com/video/496431100",
            },
        ],
        faq: [
            {
                question: "What is the difference between A1 and A2?",
                answer:
                    "A1 is for spouse/partner visa applications. A2 is for extension applications. Both test speaking and listening.",
            },
            {
                question: "I have very little English - can I still pass?",
                answer:
                    "Yes! A1 and A2 are basic level tests. Our training is designed for complete beginners.",
            },
            {
                question: "How long until I'm ready?",
                answer:
                    "With our intensive training, most students are ready in 2-4 weeks, even with no English background.",
            },
            {
                question: "Do you offer practice speaking sessions?",
                answer:
                    "Yes! Live speaking practice is included in all our training packages.",
            },
            {
                question: "What is your pass rate?",
                answer:
                    "We have a 99% pass rate for A1/A2 English with our dedicated training program.",
            },
        ],
        reviews: [
            {
                name: "Fatima Ahmed",
                date: "2023-08-18",
                rating: 5,
                text: "I could barely speak English but passed A1 first time! Amazing training.",
                source: "google",
            },
            {
                name: "Pedro Santos",
                date: "2023-07-30",
                rating: 5,
                text: "The teachers were so patient and helpful. Highly recommended!",
                source: "trustpilot",
            },
            {
                name: "Yuki Tanaka",
                date: "2023-08-10",
                rating: 5,
                text: "Perfect for beginners. The video lessons are very easy to follow.",
                source: "google",
            },
        ],
    },
};

export function getCourse(slug: string): CourseConfig | undefined {
    return COURSES[slug];
}

export function getAllCourseSlugs(): string[] {
    return Object.keys(COURSES);
}
