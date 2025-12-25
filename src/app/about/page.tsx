import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-extrabold text-ft-blue text-center mb-8">About Fast Track Training</h1>

                <div className="prose prose-lg mx-auto text-slate-600 mb-12">
                    <p className="text-xl leading-relaxed mb-6">
                        We are a leading provider of British Citizenship and English Language training in the UK.
                        With over 10 years of experience, we have helped thousands of students pass their exams and secure their future in the UK.
                    </p>
                    <p className="mb-6">
                        Our mission is simple: <strong>To help you pass first time.</strong> We understand that taking exams can be stressful,
                        especially when your visa or citizenship depends on it. That's why we have developed a proven method
                        that simplifies the learning process and focuses on exactly what you need to know.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-ft-blue mb-4">Why We Are Different</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-ft-red flex-shrink-0 mt-0.5" />
                                <span><strong>No Textbooks Needed:</strong> We provide all the simplified materials you need.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-ft-red flex-shrink-0 mt-0.5" />
                                <span><strong>Multilingual Support:</strong> Our tutors speak multiple languages to help explain difficult concepts.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-ft-red flex-shrink-0 mt-0.5" />
                                <span><strong>Until You Pass:</strong> Our unlimited training guarantee means we stick with you until you succeed.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-ft-blue text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold mb-4 text-white">Our Success Numbers</h3>
                        <div className="grid grid-cols-2 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-extrabold text-white mb-1">99%</div>
                                <div className="text-xs uppercase tracking-widest text-blue-200">Pass Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-white mb-1">10+</div>
                                <div className="text-xs uppercase tracking-widest text-blue-200">Years Exp</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-white mb-1">5000+</div>
                                <div className="text-xs uppercase tracking-widest text-blue-200">Students</div>
                            </div>
                            <div>
                                <div className="text-4xl font-extrabold text-white mb-1">24/7</div>
                                <div className="text-xs uppercase tracking-widest text-blue-200">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
