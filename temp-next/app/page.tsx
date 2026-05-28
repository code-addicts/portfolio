"use client";

import { motion, Transition } from "framer-motion";
import { ArrowUpRight, Code2, Layout, Mail, Server } from "lucide-react";
import BentoCard from "@/components/BentoCard";
import Link from "next/link";

export default function Portfolio() {
  const springTransition: Transition = { type: 'spring', stiffness: 300 };
  return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-12 font-sans selection:bg-indigo-200 transition-colors duration-300">      <div className="max-w-6xl mx-auto">
        <motion.section initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="py-12">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="md:flex-1">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">Pawan Suthar</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Full-Stack Developer | MERN & Automation</h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-6">Building scalable, intelligent web solutions that bridge real-world challenges with clean, high-performance digital experiences.</p>
              <div className="flex gap-4 flex-wrap mb-4">
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
                  Download Resume
                </a>
                <Link href="/projects" className="group inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-all">
                  View Projects <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
                  Contact
                </Link>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="https://github.com/code-addicts" target="_blank" rel="noreferrer" className="p-2 bg-zinc-800 text-zinc-50 rounded-full hover:bg-indigo-700 transition" title="GitHub">
                  <Code2 size={20} />
                </a>
                <a href="mailto:pawansuthar310@gmail.com" className="p-2 bg-zinc-800 text-zinc-50 rounded-full hover:bg-indigo-700 transition" title="Email">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pawan-suthar-19569b410/" target="_blank" rel="noreferrer" className="p-2 bg-zinc-800 text-zinc-50 rounded-full hover:bg-indigo-700 transition" title="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                </a>
                <a href="https://www.instagram.com/pxwan_2005/" target="_blank" rel="noreferrer" className="p-2 bg-zinc-800 text-zinc-50 rounded-full hover:bg-indigo-700 transition" title="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769 2.297 6.049 2.284 6.459 2.284 12c0 5.541.013 5.951.072 7.231.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323 1.28.059 1.69.072 7.231.072s5.951-.013 7.231-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.69.072-7.231s-.013-5.951-.072-7.231c-.059-1.281-.342-2.393-1.323-3.374C19.393.414 18.281.131 17.001.072 15.721.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://PawanSuthar.dev" target="_blank" rel="noreferrer" className="p-2 bg-zinc-800 text-zinc-50 rounded-full hover:bg-indigo-700 transition" title="Portfolio">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
<div className="hidden md:block md:w-1/3 mt-6 md:mt-0">
              <div className="relative rounded-2xl p-6 bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <h4 className="text-sm text-zinc-300 mb-2 relative z-10">Quick Stats</h4>
                <div className="flex flex-col gap-2 text-zinc-400 relative z-10">
                  <div><strong>Experience:</strong> Personal & freelance projects</div>
                  <div><strong>Technologies:</strong> MERN, Tailwind, Framer Motion</div>
                  <div><strong>Focus:</strong> Scalable APIs, UX, and automation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(140px,auto)]">
          <BentoCard title="About" className="md:col-span-2 row-span-2 flex flex-col justify-between dark:bg-zinc-900/50 dark:border-zinc-800/50">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Full-Stack Developer specializing in MERN stack development and intelligent automation. Proven track record in building scalable, role-based web applications that integrate OCR technology for workflow automation.<br />
              Passionate about bridging complex operational challenges—such as vehicle lifecycle management and academic project tracking—with clean, intuitive, and high-performance digital solutions.
            </p>
            <ul className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 list-disc list-inside">
              <li>Expertise: MERN, OCR, JWT, Automation</li>
              <li>Location: Ahmedabad, Gujarat, India</li>
              <li>Email: pawansuthar310@gmail.com</li>
            </ul>
          </BentoCard>

          <Link href="/projects/snapReminder" className="md:col-span-2 rounded-3xl bg-gradient-to-br from-blue-900/20 to-zinc-900/50 border border-blue-900/30 p-8 flex flex-col justify-between group cursor-pointer card-animate focus:outline-none focus:ring-2 focus:ring-blue-600 transition-base" tabIndex={0}>
            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.995 }} transition={springTransition}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-blue-100">snapReminder</h3>
                <ArrowUpRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-400 mb-4 text-sm">OCR-driven reminders with Tesseract.js, JWT auth, and automated email alerts.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">React 18</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">Node.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">MongoDB</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/projects/autoflow" className="md:col-span-2 rounded-3xl bg-gradient-to-br from-emerald-100 to-white dark:from-emerald-900/20 dark:to-zinc-900/50 border border-emerald-200 dark:border-emerald-900/30 p-8 flex flex-col justify-between group cursor-pointer card-animate focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-base" tabIndex={0}>
            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.995 }} transition={springTransition}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-100">AutoFlow</h3>
                <ArrowUpRight className="text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                A smart, AI-powered vehicle lifecycle management platform built collaboratively by a 5-person team, featuring robust role-based authentication and exportable reporting.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/50">React.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/50">Express.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/50">jsPDF</span>
              </div>
            </motion.div>
          </Link>

          {/* Skills Section */}
          <div className="md:col-span-4">
            <div className="w-full">
              {require("@/components/SkillsGrid").default()}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}