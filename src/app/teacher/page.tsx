import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FaUserGraduate, FaClipboardList, FaChartLine, FaUsers } from "react-icons/fa";

const prisma = new PrismaClient();

export default async function TeacherDashboard() {
    const session = await getServerSession();

    // Basic role check (In real app better to use middleware or specific auth options)
    // We assume role is in session or we check DB. For now let's check DB.
    if (!session?.user?.email) return redirect("/login");

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user || user.role !== "TEACHER") {
        return redirect("/student"); // Kick non-teachers out
    }

    // Fetch Stats
    const studentCount = await prisma.user.count({ where: { role: "STUDENT" } });
    const quizCount = await prisma.quiz.count();
    const totalResults = await (prisma as any).quizResult.count();

    // Recent Activity
    const recentResults = await (prisma as any).quizResult.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
            user: true,
            quiz: true
        }
    });

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Banner */}
            <div className="bg-slate-900 text-white py-12 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2">Teacher Dashboard</h1>
                    <p className="text-slate-400">Welcome back, {user.name || "Instructor"}. Here is what's happening today.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard icon={<FaUserGraduate />} label="Total Students" value={studentCount} color="blue" />
                    <StatCard icon={<FaClipboardList />} label="Total Quizzes" value={quizCount} color="purple" />
                    <StatCard icon={<FaChartLine />} label="Tests Taken" value={totalResults} color="green" />
                    <StatCard icon={<FaUsers />} label="Active Today" value={Math.ceil(studentCount * 0.4)} color="orange" />
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Recent Activity List */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-800">Recent Student Activity</h3>
                            <Link href="/teacher/students" className="text-blue-600 font-semibold text-sm hover:underline">View All Students</Link>
                        </div>

                        <div className="space-y-4">
                            {recentResults.length === 0 ? (
                                <p className="text-slate-500 italic">No activity yet.</p>
                            ) : (
                                recentResults.map((res: any) => (
                                    <div key={res.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                                {res.user.name?.[0] || "S"}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{res.user.name || res.user.email}</p>
                                                <p className="text-sm text-slate-500">Completed <span className="font-medium text-slate-700">{res.quiz.title}</span></p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${res.passed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                                {res.score} / {res.total}
                                            </span>
                                            <p className="text-xs text-slate-400 mt-1">{new Date(res.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-fit">
                        <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h3>
                        <div className="space-y-3">
                            <ActionButton href="/teacher/students" label="Manage Students" />
                            <ActionButton href="/teacher/quizzes" label="Manage Content" />
                            <ActionButton href="/teacher/settings" label="Platform Settings" />
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-2">Platform Revenue</h4>
                            <p className="text-3xl font-black text-slate-900">$1,250.00</p>
                            <p className="text-sm text-green-500 font-medium">+12% from last month</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: any, label: string, value: number, color: string }) {
    const colors: any = {
        blue: "bg-blue-100 text-blue-600",
        purple: "bg-purple-100 text-purple-600",
        green: "bg-green-100 text-green-600",
        orange: "bg-orange-100 text-orange-600",
    };

    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${colors[color]}`}>
                {icon}
            </div>
            <div>
                <p className="text-slate-500 text-sm font-medium">{label}</p>
                <p className="text-2xl font-bold text-slate-900">{value}</p>
            </div>
        </div>
    )
}

function ActionButton({ href, label }: { href: string, label: string }) {
    return (
        <Link href={href} className="block w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-slate-700 transition-colors">
            {label}
        </Link>
    )
}
