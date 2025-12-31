"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    FaPlay,
    FaChevronLeft,
    FaChevronRight,
    FaWhatsapp,
    FaPhone,
    FaStar,
    FaLock,
} from "react-icons/fa";
import { getCourse } from "@/lib/funnel-data";

export default function FunnelStepPage() {
    const router = useRouter();
    const params = useParams();
    const courseSlug = params.courseSlug as string;
    const stepNumber = parseInt(params.step as string);
    const course = getCourse(courseSlug);

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

    // Validate step number
    if (isNaN(stepNumber) || stepNumber < 1 || stepNumber > course.totalFreeVideos) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Video Not Found
                    </h1>
                    <p className="text-slate-600 mb-8">
                        This video step doesn&apos;t exist.
                    </p>
                    <Link
                        href={`/funnel/${courseSlug}/training`}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
                    >
                        View All Videos
                    </Link>
                </div>
            </div>
        );
    }

    const video = course.bonusVideos[stepNumber - 1];
    const isFirstVideo = stepNumber === 1;
    const isLastVideo = stepNumber === course.totalFreeVideos;
    const prevStep = stepNumber - 1;
    const nextStep = stepNumber + 1;
    const progress = (stepNumber / course.totalFreeVideos) * 100;

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Header with Progress */}
            <header className="bg-gradient-to-r from-blue-900 to-red-900 py-4 sticky top-0 z-50 shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-3">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">🦅</span>
                            </div>
                            <span className="font-bold text-white text-sm hidden sm:block">
                                FAST TRACK TRAINING
                            </span>
                        </Link>

                        <span className="text-white/80 text-sm">
                            Step {stepNumber} of {course.totalFreeVideos}
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Title */}
                <div className="text-center mb-8">
                    <span className="text-yellow-500 text-sm font-bold flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={12} />
                        ))}
                        <span className="text-slate-500 ml-2">BONUS VIDEO #{stepNumber}</span>
                    </span>
                    <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-2">
                        {video.title}
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">{video.description}</p>
                </div>

                {/* Video Player */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                    <div className="aspect-video relative">
                        {/* 99% Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                                <span className="text-2xl font-black">99%</span>
                                <span className="text-xs leading-tight">
                                    First-Time
                                    <br />
                                    Pass Rate
                                </span>
                            </div>
                        </div>

                        <iframe
                            src={video.videoUrl}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-4 mb-8">
                    {!isFirstVideo ? (
                        <Link
                            href={`/funnel/${courseSlug}/step/${prevStep}`}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl transition"
                        >
                            <FaChevronLeft /> Previous Video
                        </Link>
                    ) : (
                        <div />
                    )}

                    {!isLastVideo ? (
                        <Link
                            href={`/funnel/${courseSlug}/step/${nextStep}`}
                            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-lg shadow-red-600/30"
                        >
                            Next Video <FaChevronRight />
                        </Link>
                    ) : (
                        <Link
                            href={`/enrol/${courseSlug}`}
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition shadow-lg shadow-green-500/30"
                        >
                            Get Full Access <FaChevronRight />
                        </Link>
                    )}
                </div>

                {/* Video List */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">
                        All Free Videos
                    </h3>
                    <div className="grid gap-2">
                        {course.bonusVideos.map((v, index) => {
                            const isCurrentVideo = index + 1 === stepNumber;
                            const isCompleted = index + 1 < stepNumber;

                            return (
                                <Link
                                    key={v.id}
                                    href={`/funnel/${courseSlug}/step/${index + 1}`}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition ${isCurrentVideo
                                            ? "bg-red-50 border-2 border-red-500"
                                            : isCompleted
                                                ? "bg-green-50 hover:bg-green-100"
                                                : "bg-slate-50 hover:bg-slate-100"
                                        }`}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isCurrentVideo
                                                ? "bg-red-600 text-white"
                                                : isCompleted
                                                    ? "bg-green-500 text-white"
                                                    : "bg-slate-200 text-slate-600"
                                            }`}
                                    >
                                        {isCompleted ? (
                                            "✓"
                                        ) : isCurrentVideo ? (
                                            <FaPlay size={12} className="ml-0.5" />
                                        ) : (
                                            <span className="text-sm font-bold">{index + 1}</span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p
                                            className={`font-medium truncate ${isCurrentVideo ? "text-red-600" : "text-slate-700"
                                                }`}
                                        >
                                            {v.title}
                                        </p>
                                        <p className="text-xs text-slate-400">Bonus Video #{v.id}</p>
                                    </div>
                                    {!isCurrentVideo && !isCompleted && (
                                        <span className="text-xs text-slate-400 bg-yellow-100 px-2 py-1 rounded-full font-medium">
                                            FREE
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-blue-900 to-red-900 rounded-2xl p-8 text-center text-white mb-8">
                    <h3 className="text-2xl font-black mb-4">
                        Ready to Pass Your {course.shortName} Test?
                    </h3>
                    <p className="text-white/80 mb-6 max-w-md mx-auto">
                        Join thousands of successful students with our proven 99% first-time
                        pass rate training program.
                    </p>
                    <Link
                        href={`/enrol/${courseSlug}`}
                        className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-0.5"
                    >
                        Join Our Full Course Today! →
                    </Link>
                </div>
            </div>

            {/* Contact Footer */}
            <section className="relative overflow-hidden py-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 -skew-y-2 origin-top-left" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />

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
