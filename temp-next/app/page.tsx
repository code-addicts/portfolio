"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Layout, Server } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-50 p-6 md:p-12 font-sans selection:bg-zinc-700">
      <div className="max-w-6xl mx-auto">
        <motion.section initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="py-12">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="md:flex-1">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Suthar Pawankumar</h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-6">Full-Stack developer focused on performant, maintainable systems and delightful interfaces. I build production-grade web apps and backend services that scale.</p>
              <div className="flex gap-4">
                <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700">
                  View Projects <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-800">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 mt-6 md:mt-0">
              <div className="rounded-2xl p-6 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                <h4 className="text-sm text-zinc-300 mb-2">Quick Stats</h4>
                <div className="flex flex-col gap-2 text-zinc-400">
                  <div><strong>Experience:</strong> Personal & freelance projects</div>
                  <div><strong>Technologies:</strong> MERN, Tailwind, Framer Motion</div>
                  <div><strong>Focus:</strong> Scalable APIs, UX, and automation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(140px,auto)]">
          <motion.article whileHover={{ scale: 0.995 }} className="md:col-span-2 row-span-2 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-zinc-200">About</h2>
              <p className="text-zinc-400 leading-relaxed">I enjoy integrating automation and AI to solve real-world problems.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/code-addicts" target="_blank" rel="noreferrer" className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
                <Code2 size={20} />
              </a>
              <a href="mailto:pawansuthar310@gmail.com" className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
                <Mail size={20} />
              </a>
            </div>
          </motion.article>

          <Link href="/projects/snapReminder" className="md:col-span-2 rounded-3xl bg-gradient-to-br from-blue-900/20 to-zinc-900/50 border border-blue-900/30 p-8 flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600">
            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.995 }} transition={{ type: 'spring', stiffness: 300 }} className="">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-blue-100">snapReminder</h3>
                <ArrowUpRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-zinc-400 mb-4 text-sm">OCR-driven reminders with Tesseract.js, JWT auth, and automated email alerts.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">React 18</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">Node.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">MongoDB</span>
              </div>
            </motion.div>
          </Link>

          <Link href="/projects/autoflow" className="md:col-span-2 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 border border-emerald-900/30 p-8 flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.995 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-emerald-100">AutoFlow</h3>
                <ArrowUpRight className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-zinc-400 mb-4 text-sm">Vehicle lifecycle automation with role-based auth and exportable reports.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/50">React.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/50">Express.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/50">jsPDF</span>
              </div>
            </motion.div>
          </Link>

          <motion.div whileHover={{ scale: 0.98 }} className="rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg">
            <Layout className="mb-3 text-indigo-400" size={32} />
            <h4 className="font-medium text-zinc-200">Front-End</h4>
            <p className="text-sm text-zinc-500 mt-1">React.js, Tailwind CSS</p>
          </motion.div>

          <motion.div whileHover={{ scale: 0.98 }} className="rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 flex flex-col items-center justify-center text-center hover:shadow-lg">
            <Server className="mb-3 text-orange-400" size={32} />
            <h4 className="font-medium text-zinc-200">Back-End</h4>
            <p className="text-sm text-zinc-500 mt-1">Node.js, Express, MongoDB</p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}