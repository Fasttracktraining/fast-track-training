"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { getCourse } from "@/lib/funnel-data";

export default function FunnelThankYouPage() {
    const params = useParams();
    const courseSlug = params.courseSlug as string;
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

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Celebration */}
            <section className="relative overflow-hidden">
                {/* Confetti Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-red-600 to-blue-900" />

                {/* Confetti Animation */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-fall"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-${Math.random() * 20}px`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                        >
                            <div
                                className={`w-2 h-3 ${i % 5 === 0
                                        ? "bg-yellow-400"
                                        : i % 5 === 1
                                            ? "bg-blue-400"
                                            : i % 5 === 2
                                                ? "bg-green-400"
                                                : i % 5 === 3
                                                    ? "bg-pink-400"
                                                    : "bg-purple-400"
                                    }`}
                                style={{
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="relative max-w-4xl mx-auto px-4 py-12 lg:py-16 text-center">
                    <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
                        Thank You! You Are Almost There!
                        <br />
                        <span className="text-yellow-300">Watch Video Below First!</span>
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-4xl mx-auto px-4 py-12 -mt-4">
                {/* Video Player */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 border border-slate-100">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                        <iframe
                            src={course.bridgeVideoUrl}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    {/* Instructions */}
                    <div className="space-y-6 text-slate-700">
                        <p className="text-lg">
                            Thank you for signing up! 🎉 You&apos;re one step closer to passing
                            your {course.name} training with confidence.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-yellow-600 font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Please Check Your Email Now
                                    </h3>
                                    <p className="text-slate-600">
                                        We&apos;ve just sent you an important email with the next steps.
                                        If you don&apos;t see it, check your spam/junk folder and unblock
                                        or whitelist our email address to ensure you don&apos;t miss any
                                        updates.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-600 font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        We&apos;ll Contact You via WhatsApp
                                    </h3>
                                    <p className="text-slate-600">
                                        We&apos;ll also reach out to you directly on WhatsApp to support
                                        you and answer any questions. Look out for messages from:{" "}
                                        <span className="font-bold">📞 01156547979</span> or{" "}
                                        <span className="font-bold">07913256387</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-600 font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Daily Free Bonus Materials
                                    </h3>
                                    <p className="text-slate-600">
                                        As a bonus, you&apos;ll receive daily emails packed with training
                                        tips, tools, and exclusive resources to help you prepare and
                                        pass your test the first time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-blue-800">
                                ✅ Be sure to read each one –{" "}
                                <strong>they&apos;re designed to boost your success!</strong>
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={`/funnel/${courseSlug}/training`}
                        className="block w-full py-5 bg-green-500 hover:bg-green-600 text-white font-black text-xl rounded-xl shadow-xl shadow-green-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] text-center mt-8"
                    >
                        Get Me Access Now
                        <span className="block text-sm font-normal mt-1 opacity-80">
                            Skip the Line and Go Straight to Video #1
                        </span>
                    </Link>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-12">
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
            </section>

            {/* Contact Footer */}
            <section className="relative overflow-hidden py-12">
                {/* Diagonal Background */}
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

                    {/* Contact Buttons */}
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

            {/* CSS for confetti animation */}
            <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
        </div>
    );
}
