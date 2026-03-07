"use client";

import { Pricing } from "@/components/shared/Pricing";
import { motion } from "framer-motion";

export default function PlansPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 italic text-foreground-rich underline decoration-primary/20">Transparent Pricing</h1>
                    <p className="text-foreground/80 text-lg max-w-2xl mx-auto italic font-medium">
                        No hidden fees. Choose a plan that grows with your clinic.
                        Each plan is meticulously designed for different stages of practice.
                    </p>
                </motion.div>
            </div>

            <Pricing />

            <div className="container mx-auto px-4 mt-20">
                <div className="bg-primary/5 rounded-[3rem] p-12 border border-primary/10 max-w-5xl mx-auto shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black mb-6 italic text-primary">Need a bespoke solution?</h2>
                            <p className="text-foreground/80 italic font-medium leading-relaxed mb-8">
                                For large hospitals or clinic networks requiring custom
                                integrations, specialized DOH reporting, or on-premise
                                deployments.
                            </p>
                            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all">
                                Contact Sales Team
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white rounded-3xl border border-black/5">
                                <p className="text-xl font-bold text-primary mb-1 italic">99%</p>
                                <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Satisfaction</p>
                            </div>
                            <div className="p-6 bg-white rounded-3xl border border-black/5">
                                <p className="text-xl font-bold text-secondary mb-1 italic">24/7</p>
                                <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Expert Support</p>
                            </div>
                            <div className="p-6 bg-white rounded-3xl border border-black/5">
                                <p className="text-xl font-bold text-accent mb-1 italic">Gemini</p>
                                <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">AI Integrated</p>
                            </div>
                            <div className="p-6 bg-white rounded-3xl border border-black/5">
                                <p className="text-xl font-bold text-primary mb-1 italic">DOH</p>
                                <p className="text-xs text-foreground/40 font-bold uppercase tracking-wider">Ready Reports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
