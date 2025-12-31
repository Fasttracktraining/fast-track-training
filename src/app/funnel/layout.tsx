import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Training Videos | Fast Track Training",
    description:
        "Get instant access to 10 FREE bonus video lessons to pass your test first time. 99% pass rate, expert training, no credit card required.",
};

export default function FunnelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Hide the main navbar for funnel pages */}
            <style>{`
        nav.bg-\\[\\#0B1120\\] {
          display: none !important;
        }
        body > div > footer.bg-\\[\\#0B1120\\] {
          display: none !important;
        }
      `}</style>
            {children}
        </>
    );
}
