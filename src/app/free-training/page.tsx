"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirect old free-training page to new funnel
export default function FreeTrainingRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the main funnel page or directly to Life in UK course
        router.replace("/funnel/life-in-the-uk");
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-600">Redirecting to free training...</p>
            </div>
        </div>
    );
}
