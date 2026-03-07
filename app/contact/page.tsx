"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">Connect With Us</h1>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto italic">
                        Whether you need technical support, a custom enterprise solution,
                        or just want to say hi, we&apos;re here for you.
                    </p>
                </motion.div>
            </div>

            <ContactForm />

            <div className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                    <div className="p-8 rounded-[2.5rem] bg-black/5 border border-black/5">
                        <h3 className="font-bold text-lg mb-2 italic">Support Hours</h3>
                        <p className="text-foreground/60 italic text-sm">Mon - Fri: 8AM - 5PM PHT</p>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-black/5 border border-black/5">
                        <h3 className="font-bold text-lg mb-2 italic">Response Time</h3>
                        <p className="text-foreground/60 italic text-sm">Within 24 Business Hours</p>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-black/5 border border-black/5">
                        <h3 className="font-bold text-lg mb-2 italic">Regional Focus</h3>
                        <p className="text-foreground/60 italic text-sm">Serving the Philippines</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
