"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Plans", href: "/plans" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white/90 backdrop-blur-[24px] border border-black/5 sticky top-6 z-50 mx-4 flex items-center justify-between rounded-full px-6 py-3 md:mx-auto md:max-w-5xl md:px-8 shadow-lg">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/assets/medgabay_logo.png"
                    alt="Medgabay Logo"
                    width={300}
                    height={60}
                    className="h-16 md:h-20 w-auto object-contain"
                    priority
                />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden gap-8 text-sm font-medium md:flex">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`transition-colors duration-300 hover:text-primary ${pathname === link.href ? "text-primary font-bold" : "text-foreground/70"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20"
                >
                    Get Started
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-[calc(100%+12px)] w-full rounded-[2rem] border border-black/5 bg-white p-6 backdrop-blur-2xl shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center text-lg font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`transition-colors ${pathname === link.href ? "text-primary font-bold" : "text-foreground/70"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-primary text-white py-4 rounded-2xl text-base font-bold shadow-lg shadow-primary/20"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}