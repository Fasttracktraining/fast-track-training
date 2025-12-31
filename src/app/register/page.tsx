"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [data, setData] = useState({ name: "", email: "", password: "", role: "STUDENT" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Registration successful! Please login.");
                router.push("/login");
            } else {
                const text = await response.text();
                toast.error(text || "Something went wrong!");
            }
        } catch (error) {
            toast.error("Registration failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full text-center">
                <h1 className="text-3xl font-extrabold text-ft-blue mb-6">Create Account</h1>
                <p className="text-slate-500 mb-8">Join Fast Track Training today.</p>

                <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">I am a...</label>
                        <select
                            value={data.role}
                            onChange={(e) => setData({ ...data, role: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ft-blue outline-none bg-white"
                        >
                            <option value="STUDENT">Student</option>
                            <option value="TEACHER">Teacher</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-ft-blue text-white font-bold py-3 rounded-lg hover:bg-slate-900 transition shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <div className="mt-6 text-sm text-slate-400">
                    Already have an account? <Link href="/login" className="text-ft-red font-bold hover:underline">Sign in here</Link>
                </div>
            </div>
        </div>
    )
}
