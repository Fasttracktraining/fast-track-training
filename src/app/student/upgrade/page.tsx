"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle, FaCrown, FaStar, FaGlobe } from "react-icons/fa";
import toast from "react-hot-toast";

export default function UpgradePage() {
    const { data: session, update } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpgrade = async () => {
        setLoading(true);
        try {
            // Mock Payment API Call
            const res = await fetch("/api/mock-checkout", { method: "POST" });
            if (!res.ok) throw new Error("Payment failed");

            toast.success("Upgrade Successful!");

            // Force session update/refresh
            await update();
            router.push("/student");
            router.refresh();
        } catch (error) {
            toast.error("Process failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm tracking-wide uppercase">
                        Premium Training Plans
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        Choose Your Path to <span className="text-blue-600">Success</span>
                    </h1>
                    <p className="text-xl text-slate-600">
                        Whether you prefer group learning, 1:1 coaching, or VIP fast-tracking, we have a plan for you.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Option 1: Group Training */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 flex flex-col hover:border-blue-500 transition-all cursor-pointer group hover:-translate-y-1">
                        <div className="mb-4">
                            <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">Most Popular</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Group Training</h3>
                        <p className="text-slate-500 text-sm mb-6">Learn with others in our interactive online classroom.</p>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-slate-900">£295</span>
                            <span className="text-slate-500"> / course</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["Live Interactive Group Classes", "Access to All Premium Quizzes", "24/7 Video Library Access", "Tutor QA Support"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                                    <FaCheckCircle className="text-green-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleUpgrade}
                            disabled={loading}
                            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors"
                        >
                            Select Group Plan
                        </button>
                    </div>

                    {/* Option 2: 1:1 Training */}
                    <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-600 p-8 flex flex-col relative transform md:-translate-y-4 hover:-translate-y-5 transition-transform">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                            Highly Recommended
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">1:1 Training</h3>
                        <p className="text-slate-500 text-sm mb-6">Personalized coaching dedicated entirely to you.</p>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-slate-900">£450</span>
                            <span className="text-slate-500"> / course</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["Everything in Group Plan", "Dedicated Personal Tutor", "Customized Study Plan", "Flexible Scheduling", "Mock Interview Practice"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                                    <FaCheckCircle className="text-blue-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleUpgrade}
                            disabled={loading}
                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-colors"
                        >
                            Select 1:1 Training
                        </button>
                    </div>

                    {/* Option 3: VIP Fast Track */}
                    <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 flex flex-col text-white transform hover:-translate-y-1 transition-transform">
                        <div className="mb-4">
                            <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit">
                                <FaStar /> VIP Exclusive
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">VIP Fast Track</h3>
                        <p className="text-slate-400 text-sm mb-6">Waitlist priority. Verify & pass in 1 day.</p>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-white">£495</span>
                            <span className="text-slate-400"> / day</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["skip the Waitlist", "Full Day Intensive (1 Day)", "Guaranteed Pass Strategy", "Private VIP Channel", "Lunch Included (In-Person)"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                    <FaCheckCircle className="text-yellow-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleUpgrade}
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-900/20"
                        >
                            Get VIP Access
                        </button>
                    </div>

                </div>

                {/* Combined Package */}
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 px-4 py-1 rounded-full text-purple-200 text-sm font-bold">
                                <FaGlobe /> BECOME A BRITISH CITIZEN
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black leading-tight">
                                Ultimate Citizenship Bundle
                                <br /><span className="text-purple-300">B1 English + Life in the UK</span>
                            </h3>
                            <p className="text-purple-100 text-lg max-w-xl">
                                The comprehensive all-in-one package to handle your entire citizenship journey. Includes training for both required exams.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["B1 English Course", "Life in the UK Course", "All Study Materials", "Exam Booking Assistance"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-purple-100 bg-purple-800/50 px-3 py-1.5 rounded-lg border border-purple-500/30">
                                        <FaCheckCircle className="text-green-400" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center md:text-right space-y-4 min-w-[250px]">
                            <div className="text-sm text-purple-300 line-through">Total Value: £1200+</div>
                            <div className="text-5xl font-black text-white">£995</div>
                            <button
                                onClick={handleUpgrade}
                                disabled={loading}
                                className="w-full py-4 bg-white text-purple-900 font-bold text-lg rounded-xl hover:bg-purple-50 transition-colors shadow-lg shadow-purple-900/50"
                            >
                                Get The Ultimate Bundle
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="text-center pt-8 border-t border-slate-200">
                    <p className="text-slate-400 text-sm">
                        Secure payments processed by Stripe. 100% Satisfaction Guarantee.
                    </p>
                </div>

            </div>
        </div>
    );
}
