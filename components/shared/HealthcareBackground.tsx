"use client";

import { motion } from "framer-motion";
import { Plus, Heart, Activity, Stethoscope } from "lucide-react";

const icons = [
    { Icon: Plus, size: 24, top: "10%", left: "5%", delay: 0 },
    { Icon: Heart, size: 20, top: "20%", left: "85%", delay: 2 },
    { Icon: Activity, size: 28, top: "40%", left: "10%", delay: 4 },
    { Icon: Stethoscope, size: 22, top: "60%", left: "90%", delay: 1 },
    { Icon: Plus, size: 18, top: "80%", left: "15%", delay: 3 },
    { Icon: Heart, size: 24, top: "70%", left: "80%", delay: 5 },
    { Icon: Activity, size: 20, top: "15%", left: "70%", delay: 2.5 },
    { Icon: Stethoscope, size: 26, top: "85%", left: "50%", delay: 4.5 },
];

export function HealthcareBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute text-primary/10"
                    style={{ top: item.top, left: item.left }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}
        </div>
    );
}
