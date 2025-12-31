"use client";

import React from "react";
import Link from "next/link";
import {
    FaArrowRight,
    FaStar,
    FaGraduationCap,
    FaCar,
    FaLanguage,
    FaPassport,
} from "react-icons/fa";
import { getAllCourseSlugs, getCourse } from "@/lib/funnel-data";

const courseIcons: Record<string, React.ReactNode> = {
    "life-in-the-uk": <FaPassport className="text-4xl" />,
    "b1-english": <FaLanguage className="text-4xl" />,
    "driving-theory": <FaCar className="text-4xl" />,
    "a1-english": <FaGraduationCap className="text-4xl" />,
};

const courseColors: Record<string, string> = {
    "life-in-the-uk": "from-blue-600 to-red-600",
    "b1-english": "from-purple-600 to-pink-600",
    "driving-theory": "from-green-600 to-teal-600",
    "a1-english": "from-orange-600 to-yellow-600",
};

export default function FunnelIndexPage() {
    const courseSlugs = getAllCourseSlugs();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Header */}
            <header className="py-6">
                <div className="max-w-6xl mx-auto px-4 flex justify-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">🦅</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-xl tracking-tight leading-none">
                                FAST TRACK TRAINING
                            </span>
                            <span className="text-xs text-slate-400 tracking-widest uppercase">
                                Worldwide Learning and Tuition
                            </span>
                        </div>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                    <FaStar /> 99% First-Time Pass Rate
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                    Get <span className="text-yellow-400">FREE</span> Training Videos
                    <br />
                    To Pass Your Test First Time
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                    Choose your course below and get instant access to 10 FREE bonus video
                    lessons that will help you prepare and pass first time.
                </p>
            </section>

            {/* Course Grid */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {courseSlugs.map((slug) => {
                        const course = getCourse(slug);
                        if (!course) return null;

                        return (
                            <Link
                                key={slug}
                                href={`/funnel/${slug}`}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                            >
                                {/* Card Header */}
                                <div
                                    className={`bg-gradient-to-r ${courseColors[slug]} p-8 text-white`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                            {courseIcons[slug]}
                                        </div>
                                        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                                            10 FREE Videos
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-black text-white mb-2">
                                        {course.name}
                                    </h3>
                                    <p className="text-slate-400 mb-4">{course.description}</p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <span className="text-green-400">✓</span> Expert video lessons
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <span className="text-green-400">✓</span> Practice questions included
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <span className="text-green-400">✓</span> No credit card required
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-black text-white">FREE</span>
                                        <span className="flex items-center gap-2 text-red-400 font-bold group-hover:gap-4 transition-all">
                                            Get Access <FaArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Trust Section */}
            <section className="border-t border-white/10 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-slate-400 mb-6">Trusted by thousands of students</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {/* Google */}
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={16} />
                                ))}
                            </div>
                            <span className="text-white font-bold">4.9/5</span>
                            <span className="text-slate-400">Google Reviews</span>
                        </div>

                        {/* Trustpilot */}
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-emerald-500 w-5 h-5 flex items-center justify-center"
                                    >
                                        <FaStar className="text-white text-xs" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-white font-bold">4.9/5</span>
                            <span className="text-slate-400">Trustpilot</span>
                        </div>

                        {/* Pass Rate */}
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-black text-green-400">99%</span>
                            <span className="text-slate-400">Pass Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-500">
                        © 2025 Fast Track Training Worldwide Learning and Tuition. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
