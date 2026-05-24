"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function BentoCard({ title, children, className = "" }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl ${className}`}
    >
      {title.trim().length > 0 && (
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      )}
      {children}
    </motion.div>

  );
}
