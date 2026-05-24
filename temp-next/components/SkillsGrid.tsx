"use client";
import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Zap, FileCode2 } from "lucide-react";

const skills = [
  { name: "React.js", icon: <Layout className="text-indigo-500 dark:text-indigo-400" size={28} /> },
  { name: "Node.js", icon: <Server className="text-orange-500 dark:text-orange-400" size={28} /> },
  { name: "Express.js", icon: <Server className="text-green-500 dark:text-green-400" size={28} /> },
  { name: "PHP", icon: <FileCode2 className="text-purple-500 dark:text-purple-400" size={28} /> },
  { name: "MongoDB", icon: <Database className="text-emerald-500 dark:text-emerald-400" size={28} /> },
  { name: "Tailwind CSS", icon: <Zap className="text-cyan-500 dark:text-cyan-400" size={28} /> },
  { name: "Framer Motion", icon: <Zap className="text-pink-500 dark:text-pink-400" size={28} /> },
  { name: "TypeScript", icon: <Code2 className="text-blue-500 dark:text-blue-400" size={28} /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function SkillsGrid() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-200">Skills</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors shadow-sm"
          >
            {skill.icon}
            <span className="mt-2 text-zinc-700 dark:text-zinc-100 text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

