import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const prisma = new PrismaClient();

export default async function StudentsPage() {
    const session = await getServerSession();
    if (!session?.user?.email) return redirect("/login");
    const admin = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!admin || admin.role !== "TEACHER") return redirect("/student");

    const students = await prisma.user.findMany({
        where: { role: "STUDENT" },
        include: {
            _count: {
                select: { quizResults: true } as any
            }
        },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/teacher" className="text-slate-500 font-medium hover:text-slate-800 text-sm mb-2 block">← Back to Dashboard</Link>
                        <h1 className="text-3xl font-bold text-slate-900">Manage Students</h1>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/50">
                                <th className="p-6 font-bold text-slate-700">Student Name</th>
                                <th className="p-6 font-bold text-slate-700">Email</th>
                                <th className="p-6 font-bold text-slate-700">Quizzes Taken</th>
                                <th className="p-6 font-bold text-slate-700">Status</th>
                                <th className="p-6 font-bold text-slate-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-slate-500 italic">No students found.</td>
                                </tr>
                            ) : (
                                students.map(student => (
                                    <tr key={student.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-medium text-slate-900 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                                <FaUserCircle />
                                            </div>
                                            {student.name || "Unknown"}
                                        </td>
                                        <td className="p-6 text-slate-600">{student.email}</td>
                                        <td className="p-6 text-slate-600">
                                            <span className="font-bold">{(student as any)._count?.quizResults || 0}</span> Tests
                                        </td>
                                        <td className="p-6">
                                            {(student as any).isPro ? (
                                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
                                                    PREMIUM
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
                                                    FREE
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-6 text-right">
                                            <button className="text-blue-600 font-bold text-sm hover:underline">View Details</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
