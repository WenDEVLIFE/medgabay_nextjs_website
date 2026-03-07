"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactForm() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic text-foreground-rich">Let&apos;s Transform Your Clinic</h2>
                        <p className="text-foreground/80 text-lg mb-10 leading-relaxed italic font-medium">
                            Have questions about our plans or want to see a demo of our AI assistant?
                            Reach out to us and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-black uppercase tracking-widest italic">Email Us</p>
                                    <p className="text-lg font-black italic text-foreground-rich">support@medgabay.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-black uppercase tracking-widest italic">Call Us</p>
                                    <p className="text-lg font-black italic text-foreground-rich">+63 (02) 8123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/50 font-black uppercase tracking-widest italic">Visit Us</p>
                                    <p className="text-lg font-black italic text-foreground-rich">Davao City, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[3rem] bg-zinc-50 border border-black/10 shadow-2xl shadow-primary/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black ml-1 italic text-foreground-rich">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black ml-1 italic text-foreground-rich">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black ml-1 italic text-foreground-rich">Service Interested In</label>
                                <select className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all appearance-none italic font-bold shadow-sm cursor-pointer">
                                    <option>Basic Plan</option>
                                    <option>Pro Plan</option>
                                    <option>Enterprise Plan</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black ml-1 italic text-foreground-rich">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your clinic..."
                                    className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                />
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-primary/30">
                                Send Message
                                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
