'use client';

// This is a wrapper component to handle key interactivity strictly on the client side
// It takes the "server data" as props and then renders the Player.

import HazardPlayer from '@/components/HazardPlayer';

interface HazardWindow {
    id: string;
    startTime: number;
    endTime: number;
    description?: string | null;
}

interface HazardTestContainerProps {
    id: string;
    title: string;
    videoUrl: string;
    hazards: HazardWindow[];
}

export default function HazardTestContainer({ id, title, videoUrl, hazards }: HazardTestContainerProps) {

    const handleComplete = (score: number, total: number) => {
        console.log(`Test finished: ${score}/${total}`);
        // Future: Call a server action here to save progress if needed
    };

    return (
        <HazardPlayer
            id={id}
            title={title}
            videoUrl={videoUrl}
            hazards={hazards}
            onComplete={handleComplete}
        />
    );
}
