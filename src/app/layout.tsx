import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Fast Track Training | #1 UK Citizenship Course",
  description: "Pass your Life in the UK test first time with our expert training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster position="top-center" />

        {/* The Fixed Brand Header */}
        <Navbar />

        {/* The Page Content */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>

        {/* The Global Footer */}
        <footer className="bg-[#0B1120] text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Fast Track Training</h3>
              <p>Worldwide Learning and Tuition. Helping you pass your exams first time with a 99% pass rate.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Our Courses</h4>
              <ul className="space-y-2">
                <li>Life in the UK</li>
                <li>Driving Theory</li>
                <li>A1 English</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>0115 837 6502</li>
                <li>contact@fasttracklifeuk.co.uk</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; 2025 Fast Track Training. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
