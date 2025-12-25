"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BuyButton({ courseId, price, slug }: { courseId: string, price: number, slug: string }) {
    return (
        <Link href={`/checkout?courseId=${courseId}`} className="w-full block bg-ft-red text-white text-center font-bold py-4 rounded-lg hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2">
            Enroll Now <ArrowRight className="w-5 h-5" />
        </Link>
    )
}
