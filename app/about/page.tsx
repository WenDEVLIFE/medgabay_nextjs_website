"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield, Sparkles, GraduationCap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Hero Section - The Story of Eliaza */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-24"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black mb-8 italic text-foreground-rich underline decoration-primary/20">Our Story</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                                <GraduationCap size={18} />
                                Meet Eliaza
                            </div>
                            <p className="text-xl text-foreground font-medium italic leading-relaxed">
                                Eliaza is a nursing student, part of the next generation of healthcare heroes.
                                She has spent years studying pharmacology and life-saving procedures because
                                she wants to heal people.
                            </p>
                            <p className="text-foreground/70 italic leading-relaxed">
                                But in her clinical rotations, she found herself stuck at a desk dealing with
                                handwritten ledgers and outdated systems. She realized the biggest barrier to
                                care isn’t a lack of medicine—it’s the heavy administrative workload.
                            </p>
                            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                <p className="text-primary font-bold italic">
                                    "That’s why we created MedGabay."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full aspect-square rounded-[3rem] bg-main-gradient p-1">
                                <div className="w-full h-full bg-white rounded-[2.9rem] flex items-center justify-center">
                                    <Heart size={120} className="text-primary/20 animate-pulse" />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-black/5">
                                <p className="text-3xl font-black text-primary italic">MedGabay</p>
                                <p className="text-sm font-bold text-foreground/40 italic uppercase tracking-wider">Meaning: "To Guide"</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Section */}
                <div className="bg-zinc-50 rounded-[4rem] p-12 md:p-20 mb-24 border border-black/5">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black italic text-foreground-rich">Our Mission</h2>
                        <p className="text-xl text-foreground/80 italic font-medium leading-relaxed">
                            To guide healthcare professionals toward a smarter and more efficient healthcare system.
                            We believe professionals should focus on patient care, not paperwork.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mx-auto shadow-sm">
                                    <Sparkles size={24} />
                                </div>
                                <h4 className="font-bold italic">Streamlined Care</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary mx-auto shadow-sm">
                                    <Shield size={24} />
                                </div>
                                <h4 className="font-bold italic">Secure Data</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent mx-auto shadow-sm">
                                    <Users size={24} />
                                </div>
                                <h4 className="font-bold italic">Intuitive Tech</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Section */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-2xl font-black italic text-foreground-rich mb-8">
                        "Together, we can build a future where healthcare professionals are empowered to focus on what matters most—saving lives."
                    </p>
                    <div className="flex items-center justify-center gap-8">
                        <div>
                            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1 italic">Co-Founder</p>
                            <p className="text-xl font-black text-primary italic">Nestor</p>
                        </div>
                        <div className="w-px h-12 bg-black/10" />
                        <div>
                            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1 italic">Co-Founder</p>
                            <p className="text-xl font-black text-secondary italic">Kath</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
