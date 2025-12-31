import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBookOpen, FaStar, FaArrowRight, FaLock, FaArrowLeft } from "react-icons/fa";

export default async function CoursePage({ params }: { params: { slug: string } }) {
    // Next.js 15+ needs await params? Not yet for standard app directory but let's be safe
    // Actually in Next 15 yes, in Next 14 no?
    // Current proj uses Next 16.1.1 (from previous error log) which is very new (Canary/Beta?). 
    // Assuming standard params.
    const { slug } = await params;

    const course = await prisma.course.findUnique({
        where: { slug: slug },
        include: {
            quizzes: {
                where: { published: true },
                include: {
                    _count: {
                        select: { questions: true }
                    }
                }
            }
        }
    });

    if (!course) return notFound();

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Back Link */}
                <Link href="/student" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-semibold">
                    <FaArrowLeft /> Back to All Courses
                </Link>

                {/* Course Header */}
                <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{course.title}</h1>
                        <p className="text-slate-500">{course.description || "Complete the practice tests below."}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-bold flex items-center gap-2">
                            <FaBookOpen /> {course.quizzes.length} Tests
                        </div>
                    </div>
                </div>

                {/* Quiz Grid */}
                {course.quizzes.length === 0 ? (
                    <div className="text-center py-12 text-slate-400">
                        No quizzes added to this course yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {course.quizzes.map((quiz) => (
                            <div key={quiz.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group relative">
                                {quiz.isPremium && (
                                    <div className="absolute top-4 right-4 z-10 bg-yellow-400/20 backdrop-blur-md text-yellow-700 p-2 rounded-full shadow-sm">
                                        <FaLock className="text-xs" />
                                    </div>
                                )}
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        {(quiz.title.includes("New") || quiz.title.includes("2025")) && (
                                            <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                                                New
                                            </div>
                                        )}
                                        {/* Spacer if no tag */}
                                        {!quiz.title.includes("New") && <div></div>}

                                        {!quiz.isPremium && <FaStar className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{quiz.title}</h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-3">{quiz.description}</p>
                                    <div className="text-xs text-slate-400 font-medium">
                                        {quiz._count.questions} Questions
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 border-t border-slate-100">
                                    <Link
                                        href={`/student/quiz/${quiz.id}`}
                                        className={`block w-full py-3 px-4 font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2 ${quiz.isPremium
                                                ? "bg-slate-900 text-white hover:bg-slate-800"
                                                : "bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700"
                                            }`}
                                    >
                                        {quiz.isPremium ? "Start Premium Test" : "Start Free Test"} <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
