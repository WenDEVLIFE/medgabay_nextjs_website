"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <Image
                                src="/assets/medgabay_logo.png"
                                alt="Medgabay Logo"
                                width={300}
                                height={80}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-foreground/60 leading-relaxed italic">
                            Empowering healthcare through AI-driven management solutions.
                            Simplify your clinic operations and focus on patient care.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61587847310346"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/40 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                                title="Follow us on Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/40 hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 italic">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-foreground/60 hover:text-primary transition-colors italic">Home</Link></li>
                            <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors italic">About Us</Link></li>
                            <li><Link href="/plans" className="text-foreground/60 hover:text-primary transition-colors italic">Our Plans</Link></li>
                            <li><Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors italic">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 italic">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors italic">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors italic">Terms of Service</Link></li>
                            <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors italic">DOH Compliance</Link></li>
                            <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors italic">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 italic">Stay Updated</h4>
                        <p className="text-foreground/60 mb-6 italic text-sm">Join our newsletter to receive the latest updates on AI healthcare.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-black/5 border border-black/5 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all italic text-sm text-foreground"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl hover:bg-primary-dark transition-colors">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-foreground/40 text-sm italic">
                        © {new Date().getFullYear()} Medgabay. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2 text-foreground/40 text-sm">
                            <Mail size={14} />
                            <span className="italic">info@medgabay.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/40 text-sm">
                            <Phone size={14} />
                            <span className="italic">+63 2 8123 4567</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
