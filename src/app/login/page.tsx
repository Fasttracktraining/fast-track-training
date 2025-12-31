"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [data, setData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const callback = await signIn("credentials", {
            ...data,
            redirect: false,
        });

        if (callback?.error) {
            toast.error(callback.error);
            setLoading(false);
        }

        if (callback?.ok && !callback?.error) {
            toast.success("Logged in successfully!");
            router.push("/student"); // Redirect to student area by default
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full text-center">
                <img src="/images/logo-icon.png" alt="Fast Track Training" className="h-16 mx-auto mb-4" />
                <h1 className="text-3xl font-extrabold text-ft-blue mb-2">Student Login</h1>
                <p className="text-slate-500 mb-8">Please sign in to access your course materials.</p>

                <form className="space-y-4 text-left" onSubmit={handleSubmit}>
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
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-ft-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <button
                        type="button"
                        disabled={loading}
                        onClick={() => {
                            setData({ email: "demo@student.com", password: "password123" });
                            // Optional: auto-submit immediately or let user click sign in
                            // We will just fill it for now to let them see it, or we could handle the sign in logic directly.
                            // Let's call a separate handler or just set data.
                            // Better UX: Fill and auto-submit logic
                            signIn("credentials", {
                                email: "demo@student.com",
                                password: "password123",
                                redirect: false,
                            }).then((callback) => {
                                if (callback?.ok && !callback?.error) {
                                    toast.success("Welcome, Demo User!");
                                    router.push("/student");
                                    router.refresh();
                                }
                            });
                        }}
                        className="w-full bg-slate-100 text-slate-700 font-bold py-3 rounded-lg hover:bg-slate-200 transition mt-3 flex items-center justify-center gap-2"
                    >
                        🚀 Demo Student Login
                    </button>
                </form>

                <div className="mt-6 text-sm text-slate-400">
                    Don't have an account? <a href="/register" className="text-ft-blue font-bold hover:underline">Register here</a>
                </div>
            </div>
        </div>
    )
}
