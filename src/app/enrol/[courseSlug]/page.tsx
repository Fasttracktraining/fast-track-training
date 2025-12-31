"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    FaCheck,
    FaCheckCircle,
    FaStar,
    FaWhatsapp,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
    FaGoogle,
    FaUsers,
    FaUserGraduate,
    FaCrown,
} from "react-icons/fa";
import { getCourse } from "@/lib/funnel-data";

// FAQ Accordion Item
function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
            <button
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                onClick={onClick}
            >
                <span className="font-bold text-slate-900">{question}</span>
                {isOpen ? (
                    <FaChevronUp className="text-slate-400 flex-shrink-0" />
                ) : (
                    <FaChevronDown className="text-slate-400 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="px-5 pb-5">
                    <p className="text-slate-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

// Pricing Card Component
function PricingCard({
    title,
    price,
    originalPrice,
    features,
    ctaLink,
    ctaText,
    popular,
    icon,
    color,
}: {
    title: string;
    price: number;
    originalPrice: number;
    features: string[];
    ctaLink: string;
    ctaText: string;
    popular?: boolean;
    icon: React.ReactNode;
    color: "blue" | "red" | "purple";
}) {
    const colorClasses = {
        blue: {
            header: "bg-gradient-to-br from-blue-600 to-blue-700",
            button: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/30",
            border: popular ? "border-blue-500" : "border-slate-200",
        },
        red: {
            header: "bg-gradient-to-br from-red-600 to-red-700",
            button: "bg-red-600 hover:bg-red-700 shadow-red-600/30",
            border: popular ? "border-red-500" : "border-slate-200",
        },
        purple: {
            header: "bg-gradient-to-br from-purple-600 to-purple-700",
            button: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/30",
            border: popular ? "border-purple-500" : "border-slate-200",
        },
    };

    const classes = colorClasses[color];

    return (
        <div
            className={`bg-white rounded-2xl overflow-hidden shadow-xl border-2 ${classes.border} ${popular ? "ring-4 ring-yellow-400 ring-offset-2 ring-offset-slate-100" : ""
                } transition-transform hover:-translate-y-1`}
        >
            {/* Popular Badge */}
            {popular && (
                <div className="bg-yellow-400 text-yellow-900 text-center py-2 text-sm font-bold uppercase tracking-wide">
                    ⭐ Most Popular Choice ⭐
                </div>
            )}

            {/* Header */}
            <div className={`${classes.header} text-white p-6 text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-white/80 text-sm">Until You Pass</p>
            </div>

            {/* Price */}
            <div className="p-6 text-center border-b border-slate-100">
                <div className="text-slate-400 text-sm line-through mb-1">
                    Was £{originalPrice}
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">
                    £{price}
                </div>
                <div className="text-sm text-green-600 font-bold bg-green-50 py-1 px-3 rounded-full inline-block">
                    Save £{originalPrice - price}
                </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-3">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
                <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 ${classes.button} text-white font-bold text-lg rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 text-center`}
                >
                    {ctaText}
                </a>
            </div>
        </div>
    );
}

// Review Card
function ReviewCard({
    name,
    text,
    rating,
    source,
}: {
    name: string;
    text: string;
    rating: number;
    source: "google" | "trustpilot" | "yell";
}) {
    return (
        <div className="bg-white rounded-xl shadow p-4 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-slate-800 text-sm">{name}</p>
                    <div className="flex text-yellow-400">
                        {[...Array(rating)].map((_, i) => (
                            <FaStar key={i} size={10} />
                        ))}
                    </div>
                </div>
                {source === "google" && <FaGoogle className="ml-auto text-blue-500" />}
            </div>
            <p className="text-slate-600 text-sm line-clamp-3">{text}</p>
        </div>
    );
}

export default function EnrolPage() {
    const params = useParams();
    const courseSlug = params.courseSlug as string;
    const course = getCourse(courseSlug);

    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Course Not Found
                    </h1>
                    <Link
                        href="/"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    // Build feature lists for each pricing tier
    const groupFeatures = [
        `Ready in 14+ days`,
        `Live Zoom lessons 5 days a week`,
        `Morning and evening classes`,
        `35 realistic practice tests`,
        `35 expert-led teacher training videos`,
        `Support until you pass – no time limit`,
        `Access to student community`,
    ];

    const oneToOneFeatures = [
        `Ready in 7-14 days`,
        `Personalized 1:1 training sessions`,
        `Flexible scheduling to suit you`,
        `35 realistic practice tests`,
        `35 expert-led teacher training videos`,
        `Direct access to your tutor`,
        `Priority support`,
    ];

    const vipFeatures = [
        `Ready in 1 day`,
        `Intensive face-to-face or online training`,
        `Full day dedicated to you`,
        `35 realistic practice tests`,
        `35 expert-led teacher training videos`,
        `1-on-1 with senior instructor`,
        `VIP priority support`,
        `Exam day preparation coaching`,
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-red-900 py-4 sticky top-0 z-50 shadow-lg">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">🦅</span>
                        </div>
                        <span className="font-bold text-white text-sm hidden sm:block">
                            FAST TRACK TRAINING
                        </span>
                    </Link>
                    <Link
                        href="/register"
                        className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-100 transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
                <div className="absolute inset-0 opacity-20">
                    {/* Pattern overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
                        Pass the First Time with Fast Track Training
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-6">
                        {course.name}
                        <br />
                        <span className="text-yellow-400">Training</span>
                    </h1>
                    <ul className="text-white/90 text-left max-w-md mx-auto space-y-2 mb-8">
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-400" /> 99% First-Time Pass Rate
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-400" /> Unlimited Training Until You Pass
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-400" /> Expert Teachers with 13+ Years Experience
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-green-400" /> 35 Practice Tests Included
                        </li>
                    </ul>

                    {/* Hero Image Placeholder */}
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                            <FaUserGraduate className="text-white text-5xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10 pb-16">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    <PricingCard
                        title="Unlimited Group Training"
                        price={course.pricing.group.price}
                        originalPrice={course.pricing.group.original}
                        features={groupFeatures}
                        ctaLink={course.pricing.group.stripeLink}
                        ctaText="Buy Now"
                        icon={<FaUsers className="text-white text-2xl" />}
                        color="blue"
                    />
                    <PricingCard
                        title="1:1 Training"
                        price={course.pricing.oneToOne.price}
                        originalPrice={course.pricing.oneToOne.original}
                        features={oneToOneFeatures}
                        ctaLink={course.pricing.oneToOne.stripeLink}
                        ctaText="Buy Now"
                        icon={<FaUserGraduate className="text-white text-2xl" />}
                        color="red"
                        popular
                    />
                    <PricingCard
                        title="Fast Track VIP Training"
                        price={course.pricing.vip.price}
                        originalPrice={course.pricing.vip.original}
                        features={vipFeatures}
                        ctaLink={course.pricing.vip.stripeLink}
                        ctaText="Buy Now"
                        icon={<FaCrown className="text-white text-2xl" />}
                        color="purple"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative overflow-hidden py-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 -skew-y-2 origin-top-left" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />

                <div className="relative max-w-4xl mx-auto px-4 text-center py-8">
                    <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-2">
                        Need Help?
                    </h2>
                    <p className="text-3xl lg:text-5xl font-black text-white mb-4">
                        Speak To Us On 07913256387
                    </p>
                    <p className="text-xl text-white/90 mb-8">
                        Find Out More About The {course.name} Course.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/447913256387"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <FaWhatsapp size={20} /> Chat Now On WhatsApp
                        </a>
                        <a
                            href="tel:07913256387"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <FaPhone size={16} /> Call Our Support Team
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-black text-center text-slate-900 mb-8">
                    FAQ
                </h2>

                {/* FAQ Video Placeholder */}
                <div className="aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-12">
                    <iframe
                        src={course.heroVideoUrl}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <div className="space-y-3">
                    {course.faq.map((item, i) => (
                        <FAQItem
                            key={i}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openFAQ === i}
                            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                        />
                    ))}
                </div>
            </section>

            {/* Reviews Section */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <h2 className="text-3xl font-black text-center text-slate-900 mb-8">
                    Read Our Reviews
                </h2>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {course.reviews.map((review, i) => (
                        <ReviewCard
                            key={i}
                            name={review.name}
                            text={review.text}
                            rating={review.rating}
                            source={review.source}
                        />
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 48 48" className="w-8 h-8">
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                        </svg>
                        <span className="font-bold text-slate-700">Google Reviews</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaStar className="text-emerald-500 text-2xl" />
                        <span className="font-bold text-slate-700">Trustpilot</span>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-emerald-500 w-5 h-5 flex items-center justify-center"
                                >
                                    <FaStar className="text-white text-[8px]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded font-bold text-sm">
                            yell.com
                        </div>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden py-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-2">
                        Need Help?
                    </h2>
                    <p className="text-3xl lg:text-5xl font-black text-white mb-4">
                        Speak To Us On 07913256387
                    </p>
                    <p className="text-xl text-white/90 mb-8">
                        Find Out More About The {course.name} Course.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/447913256387"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <FaWhatsapp size={20} /> Chat Now On WhatsApp
                        </a>
                        <a
                            href="tel:07913256387"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <FaPhone size={16} /> Call Our Support Team
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-950 text-white py-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm text-white/70">
                        © 2025 Fast Track Training Worldwide Learning and Tuition. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
