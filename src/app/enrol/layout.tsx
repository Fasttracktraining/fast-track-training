import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enrol Now | Fast Track Training",
    description:
        "Join our expert training courses with a 99% first-time pass rate. Unlimited training until you pass, live Zoom lessons, and full support.",
};

export default function EnrolLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Hide the main navbar for enrol pages */}
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
