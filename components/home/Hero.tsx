"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[100px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/5 blur-[130px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20 shadow-sm">
                        <Zap size={16} />
                        The Future of Clinic Management
                    </span>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-foreground-rich mb-8 leading-[1.05]">
                        Manage Your Clinic with <br />
                        <span className="bg-main-gradient bg-clip-text text-transparent italic underline decoration-primary/30">AI-Precision</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed italic font-medium">
                        Medgabay is a smart, secure, and easy-to-use platform designed to
                        bridge the gap between medical expertise and administrative efficiency.
                        Focus on patient care, not paperwork.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/plans"
                            className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-primary/30 flex items-center gap-2 group"
                        >
                            View Our Plans
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white border border-black/15 hover:border-primary/50 text-foreground-rich px-10 py-5 rounded-full text-xl font-bold transition-all shadow-sm"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-zinc-50/50 border border-black/5">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-foreground-rich italic">Secure Records</h3>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-zinc-50/50 border border-black/5">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-foreground-rich italic">AI Analytics</h3>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-zinc-50/50 border border-black/5">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shadow-inner">
                                <Zap size={32} />
                            </div>
                            <h3 className="font-bold text-lg text-foreground-rich italic">Fast Scheduling</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
