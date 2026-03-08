"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Basic Plan",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        if (!recaptchaSiteKey) {
            setSubmitStatus({
                type: "error",
                message: "reCAPTCHA is not configured. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your environment variables.",
            });
            setIsSubmitting(false);
            return;
        }

        const token = recaptchaRef.current?.getValue();
        if (!token) {
            setSubmitStatus({
                type: "error",
                message: "Please complete the reCAPTCHA.",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token,
                }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent.",
            });
            setFormData({ name: "", email: "", service: "Basic Plan", message: "" });
            recaptchaRef.current?.reset();
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black ml-1 italic text-foreground-rich">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black ml-1 italic text-foreground-rich">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black ml-1 italic text-foreground-rich">Service Interested In</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all appearance-none italic font-bold shadow-sm cursor-pointer"
                                >
                                    <option>Basic Plan</option>
                                    <option>Pro Plan</option>
                                    <option>Enterprise Plan</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black ml-1 italic text-foreground-rich">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your clinic..."
                                    className="w-full bg-white border border-black/15 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all italic font-bold shadow-sm placeholder:text-foreground/30"
                                />
                            </div>

                            <div className="flex justify-center py-2">
                                {recaptchaSiteKey ? (
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={recaptchaSiteKey}
                                    />
                                ) : (
                                    <div className="text-xs text-red-500 font-bold italic">
                                        reCAPTCHA Site Key missing
                                    </div>
                                )}
                            </div>

                            {submitStatus.type && (
                                <div className={`p-4 rounded-xl text-center font-bold italic ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 size={22} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
