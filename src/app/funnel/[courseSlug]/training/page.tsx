"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    FaPlay,
    FaCheck,
    FaWhatsapp,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
    FaStar,
} from "react-icons/fa";
import { getCourse, BonusVideo } from "@/lib/funnel-data";

// Video Item Component
function VideoItem({
    video,
    isActive,
    isCompleted,
    onClick,
}: {
    video: BonusVideo;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
}) {
    const [isExpanded, setIsExpanded] = useState(isActive);

    return (
        <div
            className={`bg-white rounded-xl shadow-lg border-2 transition-all overflow-hidden ${isActive
                    ? "border-red-500 ring-4 ring-red-100"
                    : isCompleted
                        ? "border-green-300"
                        : "border-slate-200 hover:border-red-300"
                }`}
        >
            <div
                className="p-4 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-32 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-red-900/80 flex items-center justify-center">
                            {isCompleted ? (
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <FaCheck className="text-white" />
                                </div>
                            ) : (
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                                    <FaPlay className="text-white text-sm ml-0.5" />
                                </div>
                            )}
                        </div>
                        {/* Badge */}
                        <div className="absolute top-1 left-1 bg-yellow-400 text-slate-900 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            FREE
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <span className="text-yellow-500 text-xs font-bold flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={10} />
                                    ))}
                                    <span className="text-slate-400 ml-1">
                                        BONUS VIDEO #{video.id}
                                    </span>
                                </span>
                                <h3 className="font-bold text-slate-900 text-lg leading-tight">
                                    {video.title}
                                </h3>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 p-1">
                                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-slate-600 mb-4">{video.description}</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClick();
                            }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
                        >
                            <FaPlay size={12} /> Watch Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function FunnelTrainingPage() {
    const params = useParams();
    const courseSlug = params.courseSlug as string;
    const course = getCourse(courseSlug);

    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [completedVideos, setCompletedVideos] = useState<Set<number>>(
        new Set()
    );

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

    const activeVideo = course.bonusVideos[activeVideoIndex];

    const handleVideoSelect = (index: number) => {
        setActiveVideoIndex(index);
        // Mark previous video as completed
        if (index > 0) {
            setCompletedVideos((prev) => new Set([...prev, index - 1]));
        }
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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

                    {/* Progress */}
                    <div className="flex items-center gap-4">
                        <span className="text-white/80 text-sm hidden sm:block">
                            Video {activeVideoIndex + 1} of {course.totalFreeVideos}
                        </span>
                        <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-green-400 transition-all duration-300"
                                style={{
                                    width: `${((activeVideoIndex + 1) / course.totalFreeVideos) * 100
                                        }%`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Title */}
                <div className="text-center mb-8">
                    <span className="text-yellow-500 text-sm font-bold flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={12} />
                        ))}
                        <span className="text-slate-500 ml-2">BONUS VIDEO #{activeVideo.id}</span>
                    </span>
                    <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-2">
                        How To Pass The {course.shortName}
                        <br />
                        <span className="text-red-600">Test First Time</span>
                    </h1>
                </div>

                {/* Main Video Player */}
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
                            src={activeVideo.videoUrl}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href={`/enrol/${courseSlug}`}
                    className="block w-full max-w-2xl mx-auto py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl rounded-xl shadow-xl shadow-green-500/30 transition-all transform hover:-translate-y-1 text-center mb-12"
                >
                    Join Our Full Course Today! →
                    <span className="block text-sm font-normal mt-1 opacity-80">
                        Get Access to All Training Materials
                    </span>
                </Link>

                {/* Video List */}
                <div className="space-y-4">
                    {course.bonusVideos.map((video, index) => (
                        <VideoItem
                            key={video.id}
                            video={video}
                            isActive={index === activeVideoIndex}
                            isCompleted={completedVideos.has(index)}
                            onClick={() => handleVideoSelect(index)}
                        />
                    ))}
                </div>

                {/* CTA Button After Videos */}
                <div className="py-12">
                    <Link
                        href={`/enrol/${courseSlug}`}
                        className="block w-full max-w-2xl mx-auto py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl rounded-xl shadow-xl shadow-green-500/30 transition-all transform hover:-translate-y-1 text-center"
                    >
                        Join Our Full Course Today! →
                        <span className="block text-sm font-normal mt-1 opacity-80">
                            Get Access to All Training Materials
                        </span>
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
                        Speak To Us On 01156547979
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
