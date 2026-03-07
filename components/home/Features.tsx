"use client";

import { motion } from "framer-motion";
import { Brain, Users, Calendar, ClipboardList, Database, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: ClipboardList,
        title: "Streamlined Care",
        description: "Our platform digitizes patient records, scheduling, and staff management, reducing paperwork and improving daily workflow.",
        color: "text-primary",
        bg: "bg-primary/5",
    },
    {
        icon: ShieldCheck,
        title: "Secure Data Management",
        description: "Patient information is protected using secure cloud infrastructure and modern data protection practices.",
        color: "text-secondary",
        bg: "bg-secondary/5",
    },
    {
        icon: Brain,
        title: "Intuitive Technology",
        description: "Built to support healthcare facilities of different sizes with easy-to-use AI-driven tools.",
        color: "text-accent",
        bg: "bg-accent/5",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-zinc-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-foreground-rich">Built for Modern Healthcare</h2>
                    <p className="text-foreground/70 text-lg italic">
                        Medgabay provides all the tools you need to run a modern clinic,
                        from basic record keeping to advanced AI-driven analytics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-white border border-black/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 group"
                        >
                            <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={30} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 italic text-foreground-rich">{feature.title}</h3>
                            <p className="text-foreground/70 leading-relaxed italic font-medium">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
