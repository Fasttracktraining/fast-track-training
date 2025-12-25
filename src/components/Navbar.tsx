"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Highlight active link logic
    const isActive = (path: string) => pathname === path ? "text-white font-bold border-b-2 border-red-500" : "text-slate-300 hover:text-white transition";

    return (
        <nav className="bg-[#0B1120] text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                            <span className="font-bold text-xl">FT</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none tracking-tight">FAST TRACK</span>
                            <span className="text-[10px] text-slate-400 tracking-widest uppercase">Training</span>
                        </div>
                    </Link>

                    {/* 2. Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
                        <Link href="/" className={isActive("/")}>HOME</Link>
                        <Link href="/about" className={isActive("/about")}>ABOUT US</Link>
                        <Link href="/#courses" className={isActive("/#courses")}>OUR COURSES</Link>
                        <Link href="/contact" className={isActive("/contact")}>CONTACT</Link>
                        <Link href="/dashboard" className={isActive("/dashboard")}>DASHBOARD</Link>
                    </div>

                    {/* 3. Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Check if we are in the dashboard/app to show Logout/User */}
                        {pathname?.includes('/dashboard') || pathname?.includes('/learn') ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-right">
                                    <span className="text-xs text-slate-400 block">Student</span>
                                    <span className="font-bold text-sm block">My Account</span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                                    <UserCircle className="w-6 h-6 text-slate-400" />
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition shadow-lg shadow-red-900/20">
                                STUDENT LOGIN
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-4">
                    <Link href="/" className="block py-2 text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="block py-2 text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/#courses" className="block py-2 text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Our Courses</Link>
                    <Link href="/contact" className="block py-2 text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/dashboard" className="block py-2 text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Dashboard</Link>
                    <Link href="/login" className="block py-2 text-red-500 font-bold" onClick={() => setIsOpen(false)}>Student Login</Link>
                </div>
            )}
        </nav>
    );
}
