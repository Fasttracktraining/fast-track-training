import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { FaGraduationCap, FaArrowRight, FaBook, FaCar, FaFlag } from "react-icons/fa";

export default async function StudentDashboard() {
    const courses = await prisma.course.findMany({
        where: { published: true },
        include: {
            _count: { select: { quizzes: true } }
        },
        orderBy: { createdAt: 'asc' }
    });

    // Helper for icons based on slug
    const getIcon = (slug: string) => {
        if (slug.includes("driving")) return <FaCar className="text-4xl text-blue-500" />;
        if (slug.includes("english")) return <FaFlag className="text-4xl text-red-500" />;
        if (slug.includes("life")) return <FaBook className="text-4xl text-purple-500" />;
        return <FaGraduationCap className="text-4xl text-slate-500" />;
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Welcome Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Welcome to Fast Track</h1>
                    <p className="text-xl text-slate-600">Select a course to begin your training.</p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/student/course/${course.slug}`}
                            className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
                        >
                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {getIcon(course.slug)}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
                            <p className="text-slate-500 mb-8 flex-1">{course.description}</p>

                            <div className="w-full flex items-center justify-between border-t border-slate-100 pt-6">
                                <span className="text-sm font-bold text-slate-400">
                                    {course._count.quizzes} Modules
                                </span>
                                <span className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <FaArrowRight />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
