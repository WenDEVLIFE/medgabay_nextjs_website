"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Basic Plan",
        price: "₱1,500",
        period: "/ mo",
        description: "Designed for small clinics needing digital records and scheduling.",
        features: [
            "Digital patient records",
            "Basic appointment scheduling",
            "Staff management (limited)",
            "Manual inventory tracking",
            "Standard security",
            "Offline access",
        ],
        icon: Globe,
        color: "text-blue-500",
        bg: "bg-blue-500/5",
    },
    {
        name: "Pro Plan",
        price: "₱2,500",
        period: "/ mo",
        description: "Includes advanced monitoring and workflow tools for growing clinics.",
        features: [
            "Advanced monitoring tools",
            "Full workflow automation",
            "AI workload analytics",
            "Gemini AI summarization",
            "Priority support",
            "Auto-generated reports",
        ],
        isPopular: true,
        icon: Zap,
        color: "text-primary",
        bg: "bg-primary/5",
    },
    {
        name: "Enterprise Plan",
        price: "Custom",
        period: "",
        description: "For larger hospitals with complex operational needs.",
        features: [
            "Unlimited staff accounts",
            "Multi-hospital dashboards",
            "Custom DOH integrations",
            "Advanced compliance",
            "Dedicated instance",
            "On-premise deployment options",
        ],
        icon: ShieldCheck,
        color: "text-secondary",
        bg: "bg-secondary/5",
    },
];

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden bg-zinc-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-foreground-rich">Flexible Plans for Every Clinic</h2>
                    <p className="text-foreground/70 text-lg italic">
                        Choose the plan that best fits the size and scale of your practice.
                        Upgrade or downgrade at any time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[3rem] border transition-all hover:shadow-2xl relative ${plan.isPopular
                                ? "bg-white border-primary shadow-2xl scale-105 z-10"
                                : "bg-white border-black/10 shadow-sm"
                                }`}
                        >
                            {plan.isPopular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    Most Popular
                                </span>
                            )}

                            <div className={`w-12 h-12 ${plan.bg} ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <plan.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 italic text-foreground-rich">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold italic text-foreground-rich">{plan.price}</span>
                                <span className="text-foreground/60 ml-1 italic">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary/20 p-0.5 rounded-full text-primary">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-foreground/80 text-sm leading-tight italic font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center ${plan.isPopular
                                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                                    : "bg-zinc-100 hover:bg-primary/10 hover:text-primary text-foreground"
                                    }`}
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
