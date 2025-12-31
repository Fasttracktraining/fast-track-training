"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import {
    FaLock,
    FaCheckCircle,
    FaStar,
    FaGoogle,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";
import { getCourse } from "@/lib/funnel-data";

// Social proof icons component
function TrustBadges() {
    return (
        <div className="py-8 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                    {/* Google Reviews */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <svg viewBox="0 0 48 48" className="w-10 h-10">
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
                            <span className="text-lg font-bold text-slate-800">Google</span>
                        </div>
                        <div className="flex text-yellow-400 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={16} />
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 text-center">
                            <span className="font-bold">4.9 out of 5.0</span> on Google with
                            90+ reviews
                        </p>
                    </div>

                    {/* Trustpilot */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <FaStar className="text-emerald-500 text-2xl" />
                            <span className="text-lg font-bold text-slate-800">
                                Trustpilot
                            </span>
                        </div>
                        <div className="flex gap-0.5 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="bg-emerald-500 w-6 h-6 flex items-center justify-center">
                                    <FaStar className="text-white text-xs" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 text-center">
                            <span className="font-bold">4.9 out of 5.0</span> on Trustpilot
                            with 450+ reviews
                        </p>
                    </div>

                    {/* Yell */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="bg-yellow-400 text-slate-900 px-2 py-1 rounded font-bold text-lg">
                                yell.com
                            </div>
                        </div>
                        <div className="flex text-yellow-400 mb-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={16} className={i === 4 ? "text-slate-300" : ""} />
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 text-center">
                            <span className="font-bold">4.8 out of 5.0</span> on Yell with 33
                            reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Testimonial card component
function TestimonialCard({
    name,
    date,
    text,
    source,
}: {
    name: string;
    date: string;
    text: string;
    source: "google" | "trustpilot" | "yell";
}) {
    const sourceIcon =
        source === "google" ? (
            <FaGoogle className="text-blue-500" />
        ) : source === "trustpilot" ? (
            <FaStar className="text-emerald-500" />
        ) : (
            <span className="text-yellow-500 font-bold text-xs">Y</span>
        );

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {name.charAt(0)}
                </div>
                <div className="flex-1">
                    <p className="font-bold text-slate-800">{name}</p>
                    <p className="text-xs text-slate-400">{date}</p>
                </div>
                {sourceIcon}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
            <Link
                href="#"
                className="text-red-600 text-sm font-medium mt-3 inline-block hover:underline"
            >
                Read more
            </Link>
        </div>
    );
}

export default function FunnelLeadCapturePage() {
    const router = useRouter();
    const params = useParams();
    const courseSlug = params.courseSlug as string;
    const course = getCourse(courseSlug);

    const [formData, setFormData] = useState({
        firstName: "",
        phone: "",
        email: "",
    });
    const [loading, setLoading] = useState(false);

    // Handle 404 if course not found
    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Course Not Found
                    </h1>
                    <p className="text-slate-600 mb-8">
                        The course you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Connect to backend API to create lead
            // await fetch("/api/leads", { method: "POST", body: JSON.stringify(formData) })

            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success("Access Granted! Redirecting...");
            router.push(`/funnel/${courseSlug}/thank-you`);
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white funnel-page">
            {/* Header with Logo */}
            <header className="bg-white py-4 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 flex justify-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">🦅</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-800 text-lg tracking-tight leading-none">
                                FAST TRACK TRAINING
                            </span>
                            <span className="text-[10px] text-slate-400 tracking-widest uppercase">
                                Worldwide Learning and Tuition
                            </span>
                        </div>
                    </Link>
                </div>
            </header>

            {/* Hero Section with UK Flag Background */}
            <section className="relative overflow-hidden">
                {/* Union Jack Background */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3CclipPath id='a'%3E%3Cpath d='M0 0v30h60V0z'/%3E%3C/clipPath%3E%3CclipPath id='b'%3E%3Cpath d='M30 15h30v15zv15H0zH0V0zV0h30z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M0 0v30h60V0z' fill='%23012169'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' clip-path='url(%23b)' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "200px",
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 via-blue-900/90 to-blue-900/95" />

                <div className="relative max-w-6xl mx-auto px-4 py-12 lg:py-16">
                    {/* Headline */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
                            How to Pass the {course.name} Easily!
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            🎬 Receive{" "}
                            <span className="font-bold underline decoration-2 decoration-red-500">
                                10 bonus videos
                            </span>{" "}
                            that will help you prepare for the {course.name} and get started!
                        </p>
                    </div>

                    {/* Video + Form Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Video Player */}
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <iframe
                                    src={course.heroVideoUrl}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            {/* Video badge */}
                            <div className="absolute -top-3 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                99% First-Time Pass Rate
                            </div>
                        </div>

                        {/* Opt-in Form */}
                        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800"
                                        placeholder="Enter your first name..."
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, firstName: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">
                                        Phone
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg text-slate-500">
                                            🇬🇧 +44
                                        </span>
                                        <input
                                            type="tel"
                                            required
                                            className="flex-1 px-4 py-3 rounded-r-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800"
                                            placeholder="7912345678"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-lg shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {loading ? (
                                        <>
                                            <span className="animate-spin">⏳</span> Processing...
                                        </>
                                    ) : (
                                        <>YES! Give Me Access →</>
                                    )}
                                </button>

                                <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                                    <FaLock className="text-xs" /> Your information is 100% safe
                                    and we never spam.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <TrustBadges />

            {/* Testimonials */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        {course.reviews.map((review, i) => (
                            <TestimonialCard
                                key={i}
                                name={review.name}
                                date={review.date}
                                text={review.text}
                                source={review.source}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-16 relative overflow-hidden">
                {/* UK Flag Background */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3CclipPath id='a'%3E%3Cpath d='M0 0v30h60V0z'/%3E%3C/clipPath%3E%3CclipPath id='b'%3E%3Cpath d='M30 15h30v15zv15H0zH0V0zV0h30z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M0 0v30h60V0z' fill='%23012169'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' clip-path='url(%23b)' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "300px",
                    }}
                />

                <div className="max-w-5xl mx-auto px-4 relative">
                    <h2 className="text-3xl lg:text-4xl font-black text-center text-slate-900 mb-12">
                        Secure Your Future Today with Fast Track Training
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-black text-2xl">PASS</span>
                                        </div>
                                        <p className="text-slate-600 text-lg font-medium">
                                            Join thousands of successful students
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-lg -z-10" />
                        </div>

                        {/* Benefits */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheckCircle className="text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        99% First-Time Pass Guarantee
                                    </h3>
                                    <p className="text-slate-600">
                                        With over 13 years of experience, we are dedicated to
                                        helping you succeed on your first attempt and secure your
                                        future.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheckCircle className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        Unlimited Training
                                    </h3>
                                    <p className="text-slate-600">
                                        You stay with us until you succeed; our training course is
                                        designed for your success!
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheckCircle className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">
                                        Train Until You Pass
                                    </h3>
                                    <p className="text-slate-600">
                                        Our average pass time is 21 days. You can pass in 7-14 days,
                                        or even just 1 day with our special VIP training available
                                        face-to-face or online. Booster classes are also available!
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-lg shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-8"
                            >
                                Get Access Today →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
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
