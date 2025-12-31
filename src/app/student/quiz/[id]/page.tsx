"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaPlay, FaPause, FaCheckCircle, FaTimesCircle, FaTrophy, FaStar, FaArrowRight, FaRedo, FaList, FaLock, FaBars } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import toast from "react-hot-toast";

// Helper: Parse question text and extract image path if present
const parseQuestionContent = (text: string) => {
    const imageMatch = text.match(/\[Image:\s*([^\]]+)\]/);
    if (imageMatch) {
        const imagePath = imageMatch[1].trim();
        const cleanText = text.replace(/\[Image:\s*[^\]]+\]/, '').trim();
        return { text: cleanText, imagePath };
    }
    return { text, imagePath: null };
};

// Helper: Check if option is an image-based option (JSON object with imageSrc)
const isImageOption = (option: any): option is { text: string; imageSrc: string } => {
    return typeof option === 'object' && option !== null && 'imageSrc' in option;
};

// Define Types
type Question = {
    id: string;
    text: string;
    options: (string | { text: string; imageSrc: string })[];
    correctAnswer: number;
    explanation?: string;
    audioSrc?: string;
}

type SiblingQuiz = {
    id: string;
    title: string;
}

type QuizData = {
    id: string;
    title: string;
    questions: Question[];
    videoUrl?: string;
    isPremium?: boolean;
    course?: {
        quizzes: SiblingQuiz[];
    };
}

export default function QuizPlayer() {
    const params = useParams(); // Get ID from URL
    const quizId = params?.id as string;

    const [quiz, setQuiz] = useState<QuizData | null>(null);
    const [loading, setLoading] = useState(true);

    // Game State
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Track history for navigation coloring
    // Map of index -> { correct: boolean, selected: number }
    const [history, setHistory] = useState<Record<number, { correct: boolean; selected: number }>>({});

    // Audio State
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    // Stats
    const [score, setScore] = useState(0);

    // Sidebar Mobile Toggle
    const [showSidebar, setShowSidebar] = useState(false);

    // Stop speaking when component unmounts or changes
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const speakText = (text: string) => {
        if ('speechSynthesis' in window) {
            // Cancel any current speaking
            window.speechSynthesis.cancel();

            if (isSpeaking) {
                setIsSpeaking(false);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => setIsSpeaking(false);
            utterance.rate = 0.9; // Slightly slower for clarity

            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        } else {
            toast.error("Text-to-speech not supported in this browser.");
        }
    };

    useEffect(() => {
        async function fetchQuiz() {
            if (!quizId) return;
            try {
                const res = await fetch(`/api/quiz/${quizId}`, { cache: 'no-store' });
                if (!res.ok) throw new Error("Failed to load quiz");
                const data = await res.json();

                // Parse options JSON
                const parsedQuestions = data.questions.map((q: any) => ({
                    ...q,
                    options: JSON.parse(q.options)
                }));

                setQuiz({ ...data, questions: parsedQuestions });
            } catch (error) {
                toast.error("Could not load quiz.");
            } finally {
                setLoading(false);
            }
        }
        fetchQuiz();
    }, [quizId]);


    const handleOptionSelect = (index: number) => {
        if (showExplanation) return;
        setSelectedOption(index);
    };

    const jumpToQuestion = (index: number) => {
        // Allow jumping if we are just navigating (optional: restrict if strictly sequential)
        // For revision mode, jumping is fine.
        window.speechSynthesis.cancel();
        setIsSpeaking(false);

        setCurrentQuestionIndex(index);

        // Restore state if visited
        if (history[index]) {
            setSelectedOption(history[index].selected);
            setShowExplanation(true); // Show result for revisited
            setIsCorrect(history[index].correct);
        } else {
            setSelectedOption(null);
            setShowExplanation(false);
            setIsCorrect(null);
        }

        setShowSidebar(false); // Close mobile sidebar on selection
    };

    const handleAudioPlay = (src: string) => {
        if (isPlaying && audio) {
            audio.pause();
            setIsPlaying(false);
        } else {
            const newAudio = new Audio(src);
            newAudio.onended = () => setIsPlaying(false);
            newAudio.play();
            setAudio(newAudio);
            setIsPlaying(true);
        }
    };


    const handleSubmit = () => {
        if (selectedOption === null || !quiz) return;

        const currentQuestion = quiz.questions[currentQuestionIndex];
        const correct = selectedOption === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        setShowExplanation(true);

        // Save to history
        setHistory(prev => ({
            ...prev,
            [currentQuestionIndex]: { correct, selected: selectedOption }
        }));

        if (correct) {
            setScore(prev => prev + 1);
            toast.success("Correct!");
        } else {
            toast.error("Incorrect.");
        }
    };

    const handleNext = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        if (!quiz) return;

        if (currentQuestionIndex < quiz.questions.length - 1) {
            jumpToQuestion(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const { data: session } = useSession();
    const isPro = (session?.user as any)?.isPro === true;

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading Quiz...</div>;
    if (!quiz || quiz.questions.length === 0) return <div className="min-h-screen flex items-center justify-center text-slate-500">Quiz not found or empty.</div>;

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progressPercentage = ((Object.keys(history).length) / quiz.questions.length) * 100;

    if (quizCompleted) {
        return (
            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center space-y-8 animate-fade-in-up">
                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaTrophy className="text-5xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900">Quiz Completed!</h2>
                    <p className="text-slate-600">
                        You scored {score} out of {quiz.questions.length}.
                    </p>

                    <Link
                        href="/student"
                        className="block w-full py-4 px-6 bg-slate-900 text-white font-bold rounded-xl shadow-lg transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                        <FaList /> Back to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 relative pb-12">

            {/* Top Navigation Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/student" className="text-slate-500 hover:text-slate-900 font-bold flex items-center gap-2 text-sm transition-colors">
                        ← Back
                    </Link>
                    <h1 className="text-slate-900 font-bold text-sm md:text-base truncate max-w-[200px] md:max-w-md">{quiz.title}</h1>
                    <button
                        onClick={() => setShowSidebar(true)}
                        className="lg:hidden text-slate-600 p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Center Content (Questions & Video) */}
                <div className="lg:col-span-9 space-y-6">

                    {/* Video Lesson Player - Sticky or Top */}
                    {quiz.videoUrl && (
                        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video relative group">
                            <iframe
                                src={`https://player.vimeo.com/video/${quiz.videoUrl.split('/').pop()}`}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="Lesson Video"
                            ></iframe>
                        </div>
                    )}

                    {/* Question Card */}
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative transition-all duration-300">

                        {/* Progress Bar inside Card */}
                        <div className="h-1.5 w-full bg-slate-100">
                            <div
                                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>

                        <div className="p-6 md:p-10 space-y-8">

                            {/* Question Header & Audio */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                                    <button
                                        onClick={() => speakText(parseQuestionContent(currentQuestion.text).text + " " + currentQuestion.options.map(o => isImageOption(o) ? o.text : o).join(", "))}
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isSpeaking
                                            ? "bg-blue-600 text-white animate-pulse shadow-lg"
                                            : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                                            }`}
                                        title="Read Question"
                                    >
                                        {isSpeaking ? <FaPause size={14} /> : <HiSpeakerWave size={18} />}
                                    </button>
                                </div>

                                {(() => {
                                    const { text: questionText, imagePath } = parseQuestionContent(currentQuestion.text);
                                    return (
                                        <>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                                                {questionText}
                                            </h2>

                                            {imagePath && (
                                                <div className="flex justify-start my-4">
                                                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                                                        <img
                                                            src={imagePath}
                                                            alt="Question illustration"
                                                            className="max-h-60 object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>

                            {/* Options Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentQuestion.options.map((option, idx) => {
                                    const isImgOption = isImageOption(option);
                                    let statusClass = "border-slate-200 hover:border-blue-400 hover:bg-slate-50";
                                    let icon = <span className="text-slate-400 text-sm font-bold">{String.fromCharCode(65 + idx)}</span>;

                                    if (showExplanation) {
                                        if (idx === currentQuestion.correctAnswer) {
                                            statusClass = "border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500";
                                            icon = <FaCheckCircle className="text-green-500" />;
                                        } else if (selectedOption === idx) {
                                            statusClass = "border-red-500 bg-red-50 text-red-700 ring-1 ring-red-500";
                                            icon = <FaTimesCircle className="text-red-500" />;
                                        } else {
                                            statusClass = "border-slate-100 opacity-50";
                                        }
                                    } else if (selectedOption === idx) {
                                        statusClass = "border-blue-600 bg-blue-50 ring-2 ring-blue-600";
                                        icon = <div className="w-3 h-3 bg-blue-600 rounded-full" />;
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(idx)}
                                            disabled={showExplanation}
                                            className={`text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium relative flex items-center gap-4 ${statusClass}`}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                                                {icon}
                                            </div>

                                            {isImgOption ? (
                                                <div className="flex items-center gap-3">
                                                    <img src={option.imageSrc} alt={option.text} className="w-12 h-12 object-contain" />
                                                    <span className="text-sm">{option.text}</span>
                                                </div>
                                            ) : (
                                                <span className="text-base">{option}</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                        </div>

                        {/* Action Bar */}
                        <div className="bg-slate-50 p-6 border-t border-slate-100 flex items-center justify-between">
                            {showExplanation ? (
                                <div className="flex-1 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className={`text-sm font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                                            {isCorrect ? "Correct answer!" : "Incorrect answer"}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            {currentQuestion.explanation ? "Explanation available" : ""}
                                        </span>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 transition-transform active:scale-95"
                                    >
                                        {currentQuestionIndex === quiz.questions.length - 1 ? "Finish" : "Next"} <FaArrowRight />
                                    </button>
                                </div>
                            ) : (
                                <div className="flex-1 flex justify-end">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={selectedOption === null}
                                        className={`py-3 px-8 font-bold rounded-xl shadow-lg flex items-center gap-2 transition-all ${selectedOption !== null
                                            ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                                            : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
                                    >
                                        Check Answer
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Text Explanation Panel */}
                        {showExplanation && currentQuestion.explanation && (
                            <div className="bg-blue-50 p-6 border-t border-blue-100 animate-fade-in text-sm text-slate-700 leading-relaxed">
                                <span className="font-bold text-blue-800 block mb-1">Explanation:</span>
                                {currentQuestion.explanation}
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Sidebar - Desktop */}
                <div className="hidden lg:block lg:col-span-3 space-y-6">

                    {/* Question Navigator */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800 text-sm">Questions</h3>
                            <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">{Object.keys(history).length}/{quiz.questions.length} Done</span>
                        </div>
                        <div className="p-4 grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                            {quiz.questions.map((_, idx) => {
                                const status = history[idx];
                                let bgClass = "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100";

                                if (idx === currentQuestionIndex) {
                                    bgClass = "ring-2 ring-blue-500 ring-offset-1 bg-blue-600 text-white font-bold border-transparent";
                                } else if (status?.correct) {
                                    bgClass = "bg-green-100 text-green-700 border-green-200";
                                } else if (status?.correct === false) {
                                    bgClass = "bg-red-100 text-red-700 border-red-200";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => jumpToQuestion(idx)}
                                        className={`w-full aspect-square rounded-lg text-xs font-medium flex items-center justify-center transition-all ${bgClass}`}
                                    >
                                        {idx + 1}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Course Navigation */}
                    {quiz.course?.quizzes && quiz.course.quizzes.length > 1 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 border-b border-slate-100 bg-slate-50">
                                <h3 className="font-bold text-slate-800 text-sm">Course Lessons</h3>
                            </div>
                            <div className="max-h-[400px] overflow-y-auto">
                                {quiz.course.quizzes.map(sibling => (
                                    <Link
                                        key={sibling.id}
                                        href={`/student/quiz/${sibling.id}`}
                                        className={`block px-4 py-3 text-sm border-l-4 transition-colors ${sibling.id === quiz.id
                                                ? 'bg-blue-50 text-blue-700 font-bold border-blue-600'
                                                : 'hover:bg-slate-50 text-slate-600 border-transparent hover:border-slate-300'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="truncate">{sibling.title}</span>
                                            {sibling.id === quiz.id && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Mobile Sidebar Overlay */}
            {showSidebar && (
                <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSidebar(false)}></div>
                    <div className="relative w-80 bg-white h-full shadow-2xl overflow-y-auto animate-slide-in-right">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800">Menu</h3>
                            <button onClick={() => setShowSidebar(false)} className="text-slate-500 p-2"><FaTimesCircle size={20} /></button>
                        </div>

                        <div className="p-4 space-y-6">
                            {/* Mobile Question Navigator */}
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Questions</h4>
                                <div className="grid grid-cols-5 gap-2">
                                    {quiz.questions.map((_, idx) => {
                                        const status = history[idx];
                                        let bgClass = "bg-slate-50 text-slate-500 border border-slate-100";

                                        if (idx === currentQuestionIndex) {
                                            bgClass = "bg-blue-600 text-white font-bold border-transparent";
                                        } else if (status?.correct) {
                                            bgClass = "bg-green-100 text-green-700 border-green-200";
                                        } else if (status?.correct === false) {
                                            bgClass = "bg-red-100 text-red-700 border-red-200";
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => jumpToQuestion(idx)}
                                                className={`w-full aspect-square rounded-lg text-xs font-medium flex items-center justify-center ${bgClass}`}
                                            >
                                                {idx + 1}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Mobile Course Nav */}
                            {quiz.course?.quizzes && (
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Lessons</h4>
                                    <div className="space-y-1">
                                        {quiz.course.quizzes.map(sibling => (
                                            <Link
                                                key={sibling.id}
                                                href={`/student/quiz/${sibling.id}`}
                                                className={`block p-3 rounded-lg text-sm ${sibling.id === quiz.id ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                {sibling.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
