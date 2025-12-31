'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Player from '@vimeo/player';
import { toast } from 'react-hot-toast';

interface HazardWindow {
    id: string;
    startTime: number;
    endTime: number;
    description?: string | null;
}

interface HazardTestProps {
    id: string;
    title: string;
    videoUrl: string;
    hazards: HazardWindow[];
    onComplete: (score: number, total: number) => void;
}

interface ClickRecord {
    time: number;
    score: number;
    hazardId?: string;
}

export default function HazardPlayer({ id, title, videoUrl, hazards, onComplete }: HazardTestProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isReviewing, setIsReviewing] = useState(false);
    const [flags, setFlags] = useState<{ time: number }[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Maximum points per hazard
    const MAX_POINTS = 5;

    // Extract Vimeo ID from various URL formats
    const getVimeoId = (url: string) => {
        const match = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
        return match ? match[1] : '';
    };

    const vimeoId = getVimeoId(videoUrl);

    useEffect(() => {
        if (!containerRef.current || !vimeoId) return;

        // Initialize Vimeo Player
        const player = new Player(containerRef.current, {
            id: Number(vimeoId),
            width: 640,
            controls: true, // Show native controls for now to ensure usability
            responsive: true,
            autoplay: false,
        });

        playerRef.current = player;

        player.on('play', () => setIsPlaying(true));
        player.on('pause', () => setIsPlaying(false));

        player.on('timeupdate', (data) => {
            setCurrentTime(data.seconds);
            setDuration(data.duration);
        });

        player.on('ended', () => {
            setIsPlaying(false);
            calculateResults();
        });

        player.on('error', (data) => {
            console.error("Vimeo Player Error:", data);
            toast.error("Video Error: " + data.message);
        });

        return () => {
            player.destroy().catch(() => { });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vimeoId]);

    const calculateResults = () => {
        let totalScore = 0;
        const maxPossibleScore = hazards.length * MAX_POINTS;
        const scoredHazards = new Set<string>();
        const sortedClicks = [...flags].sort((a, b) => a.time - b.time);

        hazards.forEach(hazard => {
            const validClicks = sortedClicks.filter(c => c.time >= hazard.startTime && c.time <= hazard.endTime);

            if (validClicks.length > 0) {
                const firstClick = validClicks[0];
                const reactionTime = firstClick.time - hazard.startTime;
                const windowDuration = hazard.endTime - hazard.startTime;

                const segment = windowDuration / 5;
                let points = 0;

                if (reactionTime <= segment) points = 5;
                else if (reactionTime <= segment * 2) points = 4;
                else if (reactionTime <= segment * 3) points = 3;
                else if (reactionTime <= segment * 4) points = 2;
                else points = 1;

                if (!scoredHazards.has(hazard.id)) {
                    totalScore += points;
                    scoredHazards.add(hazard.id);
                }
            }
        });

        setFinalScore(totalScore);
        setIsCompleted(true);
        onComplete(totalScore, maxPossibleScore);
    };

    const handleClick = useCallback(async () => {
        if (!playerRef.current || isCompleted) return;

        // We rely on the player state, but purely trusting 'isPlaying' state might be slightly delayed.
        // It's better to check if paused directly if needed, but for now trusting state is fine.
        if (!isPlaying) return;

        const time = await playerRef.current.getCurrentTime();

        // Visual feedback
        setFlags(prev => [...prev, { time }]);
        console.log(`Flagged at ${time.toFixed(2)}s`);

    }, [isPlaying, isCompleted]);

    const handleStart = () => {
        playerRef.current?.play().catch(e => console.error("Play failed", e));
        setFlags([]);
        setIsCompleted(false);
    };

    const handleReplay = () => {
        setFlags([]);
        setFinalScore(0);
        setIsCompleted(false);
        playerRef.current?.setCurrentTime(0);
        playerRef.current?.play();
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                {/* Score Display */}
                {isCompleted && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-lg animate-in fade-in">
                        Score: {finalScore} / {hazards.length * MAX_POINTS}
                    </div>
                )}
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-2xl bg-black">
                {/* Video Container */}
                {/* We use a transparent overlay for clicking to ensure we capture clicks 
                    even if the iframe eats them (though Vimeo SDK usually handles clicks well, 
                    we want to interpret them as 'flags' not 'pause'). 
                    
                    HOWEVER: Blocking iframe clicks prevents using native controls. 
                    Strategy: Allow controls, but put a transparent div over the VIDEO AREA mainly?
                    Or better: Just listen to click on the wrapping div.
                */}
                <div
                    ref={containerRef}
                    className="w-full aspect-video"
                    style={{ pointerEvents: 'auto' }}
                />

                {/* Click Capture Overlay - Active only when playing */}
                {isPlaying && (
                    <div
                        className="absolute inset-0 z-10 cursor-crosshair"
                        onClick={(e) => {
                            // Don't swallow event if it hits the control bar bottom 10%?
                            // Vimeo controls are separate inside iframe. We cannot detect where they are exactly easily.
                            // BUT, we provided 'controls: true' to Vimeo.
                            // If we cover it with a div, controls won't work.

                            // Solution: Leave controls enabled. Clicking video usually pauses it in Vimeo.
                            // We can use the 'pause' event to distinguish or just use a keyboard key?
                            // OR: overlay everything EXCEPT bottom 50px.

                            // Better UX: Full overlay. Custom Start/Stop controls properly implemented if we wanted perfection.
                            // For this MVP: Click anywhere on this overlay triggers flag.

                            // To allow pausing: User can't pause in a real test!
                            // So covering everything is ACTUALLY correct for a TEST mode.

                            handleClick();
                        }}
                    >
                        {/* Optional 'Click' feedback animation could go here */}
                    </div>
                )}

                {/* Start / Replay Overlay */}
                {!isPlaying && !isCompleted && currentTime === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                        <button
                            onClick={handleStart}
                            className="bg-primary text-white hover:brightness-110 px-8 py-3 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-lg border-2 border-white/20"
                        >
                            Start Hazard Test
                        </button>
                    </div>
                )}

                {isCompleted && !isReviewing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 flex-col gap-6 animate-in fade-in">
                        <h3 className="text-white text-3xl font-bold">Test Complete</h3>
                        <div className="text-center">
                            <p className="text-gray-300 mb-2">You scored</p>
                            <div className="text-6xl font-bold text-white mb-2">{finalScore}</div>
                            <p className="text-gray-400">out of {hazards.length * MAX_POINTS}</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsReviewing(true)}
                                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                Review Clip
                            </button>
                            <button
                                onClick={handleReplay}
                                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path><path d="M3 3v9h9"></path></svg>
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Flag Feedback Indicator */}
                {isPlaying && !isReviewing && (
                    <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm pointer-events-none border border-white/10">
                        {flags.length} Flags Placed
                    </div>
                )}

                {/* Review Mode Indicator */}
                {isReviewing && (
                    <div className="absolute top-4 left-4 z-20 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm pointer-events-none font-bold border border-white/10 shadow-lg">
                        Review Mode
                    </div>
                )}
            </div>

            {/* Live Flag Feed */}
            <div className="mt-4 flex flex-wrap gap-2 min-h-[40px] items-center p-2 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                {flags.length === 0 && !isCompleted && (
                    <span className="text-sm text-gray-400 italic w-full text-center">Flags will appear here when you click...</span>
                )}
                {flags.map((flag, idx) => (
                    <div key={idx} className="animate-in zoom-in-50 duration-300">
                        <FlagIcon className="w-6 h-6 text-red-600 fill-red-600 drop-shadow-sm" />
                    </div>
                ))}
            </div>

            {/* Evaluation / Timeline Section */}
            {isCompleted && duration > 0 && (
                <div className="mt-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-8 bg-primary rounded-full"></span>
                        Performance Review
                    </h3>

                    <div className="space-y-8">
                        {hazards.map((hazard, idx) => {
                            // Find the scoring click for this hazard
                            const validClick = flags
                                .sort((a, b) => a.time - b.time)
                                .find(f => f.time >= hazard.startTime && f.time <= hazard.endTime);

                            const score = validClick
                                ? calculateScoreForClick(validClick.time, hazard)
                                : 0;

                            return (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                                                Hazard {idx + 1}: {hazard.description || "Developing Hazard"}
                                                <button
                                                    onClick={() => {
                                                        setIsReviewing(true);
                                                        playerRef.current?.setCurrentTime(Math.max(0, hazard.startTime - 2));
                                                        playerRef.current?.play();
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors flex items-center gap-1"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M8 5v14l11-7z" /></svg>
                                                    Watch
                                                </button>
                                            </h4>
                                            <p className="text-sm text-gray-500">Window: {hazard.startTime}s - {hazard.endTime}s</p>
                                        </div>
                                        <div className={`px-4 py-2 rounded-lg font-bold text-lg border ${score > 0 ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                                            }`}>
                                            {score} / 5 Points
                                        </div>
                                    </div>

                                    {/* Timeline Bar */}
                                    <div className="relative h-16 bg-gray-100 rounded-lg w-full mb-4 select-none overflow-hidden border border-gray-200">
                                        {/* Ticks */}
                                        <div className="absolute inset-0 flex justify-between px-2">
                                            {[0, 25, 50, 75, 100].map(p => (
                                                <div key={p} className="h-full border-r border-gray-200/50 w-px relative">
                                                    <span className="absolute bottom-1 right-1 text-[10px] text-gray-400">{Math.round(duration * (p / 100))}s</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Scoring Window */}
                                        <div
                                            className="absolute top-2 bottom-8 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 opacity-30 rounded-md border border-gray-300"
                                            style={{
                                                left: `${(hazard.startTime / duration) * 100}%`,
                                                width: `${((hazard.endTime - hazard.startTime) / duration) * 100}%`
                                            }}
                                        >
                                            <div className="absolute -top-6 left-0 text-xs font-bold text-green-600 bg-green-100 px-1 py-0.5 rounded">5pts</div>
                                            <div className="absolute -top-6 right-0 text-xs font-bold text-red-600 bg-red-100 px-1 py-0.5 rounded">1pt</div>
                                        </div>

                                        {/* User Clicks on this timeline */}
                                        {flags.map((flag, fIdx) => {
                                            const isScoring = flag.time >= hazard.startTime && flag.time <= hazard.endTime;
                                            const pct = (flag.time / duration) * 100;
                                            if (pct < 0 || pct > 100) return null;

                                            return (
                                                <div
                                                    key={fIdx}
                                                    className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center group/flag transition-all hover:z-10`}
                                                    style={{ left: `${pct}%` }}
                                                >
                                                    <FlagIcon
                                                        className={`w-5 h-5 drop-shadow-md transition-colors ${isScoring ? 'text-green-600 fill-green-600' : 'text-red-500 fill-red-500 opacity-50'
                                                            }`}
                                                    />
                                                    <div className="opacity-0 group-hover/flag:opacity-100 absolute bottom-full mb-1 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity pointer-events-none">
                                                        {flag.time.toFixed(1)}s
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="text-xs text-gray-400 text-center">
                                        Video Timeline (0s - {duration.toFixed(0)}s)
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {!isCompleted && (
                <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Instructions</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Watch the video clip as if you are driving.</li>
                        <li>Click or tap the screen <strong>as soon as you see a developing hazard</strong>.</li>
                        <li>A developing hazard is something that would cause you to take action (e.g., changing speed or direction).</li>
                        <li>You can flag multiple times, but continuous clicking will result in a zero score.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

// Helper for Flag Icon
function FlagIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    );
}

function calculateScoreForClick(time: number, hazard: HazardWindow) {
    const reactionTime = time - hazard.startTime;
    const windowDuration = hazard.endTime - hazard.startTime;

    // Outside window
    if (time < hazard.startTime || time > hazard.endTime) return 0;

    const segment = windowDuration / 5;
    if (reactionTime <= segment) return 5;
    if (reactionTime <= segment * 2) return 4;
    if (reactionTime <= segment * 3) return 3;
    if (reactionTime <= segment * 4) return 2;
    return 1;
}
