import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import HazardTestContainer from '@/components/HazardTestContainer';

const prisma = new PrismaClient();

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function HazardTestPage({ params }: PageProps) {
    const { id } = await params;

    const hazardTest = await prisma.hazardTest.findUnique({
        where: { id },
        include: {
            hazards: true,
        },
    });

    if (!hazardTest) {
        notFound();
    }

    // Define a server action or simple handler for updating score if needed
    // For basic practice, we can just log or show it on client
    // But strictly we can't pass server functions to client components easily without 'use server' inline in a separate file

    // We'll handle the "onComplete" purely client-side for feedback in this MVP version
    // or create a separate API route later to save progress.

    return (
        <div className="container mx-auto py-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Practice: {hazardTest.title}</h1>
                <p className="text-gray-600">{hazardTest.description}</p>
            </div>

            <div className="flex justify-center">
                {/* 
          Passing 'onComplete' as a client-side prop. 
          The component handles the logic. 
        */}
                <div className="w-full max-w-5xl">
                    <HazardTestContainer
                        id={hazardTest.id}
                        title={hazardTest.title}
                        videoUrl={hazardTest.videoUrl}
                        hazards={hazardTest.hazards}
                    />
                </div>
            </div>
        </div>
    );
}
