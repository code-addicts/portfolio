"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AutoFlow() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/projects" className="flex items-center gap-2 text-sm mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="text-3xl font-bold mb-4">AutoFlow</h1>
      <p className="text-zinc-500 mb-4">An intelligent vehicle lifecycle platform featuring predictive maintenance suggestions and dynamic compliance reporting. Built with a robust workflow engine to automate tasks like PUC and insurance renewals.</p>
      <section className="mt-6">
        <h2 className="font-semibold mb-2">Highlights</h2>
        <ul className="list-disc ml-6 text-zinc-500">
          <li>React-driven admin UI with role-based access</li>
          <li>Express workflows with scheduled jobs</li>
          <li>PDF/Excel exports for reporting (jsPDF, ExcelJS)</li>
          <li>Integrations for notifications and analytics</li>
        </ul>
      </section>
      <div className="mt-8 flex gap-4">
        <a href="https://github.com/code-addicts/AutoFlow" target="_blank" rel="noreferrer" className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 text-sm">GitHub</a>
        <a href="https://autoflow-teal.vercel.app/login" target="_blank" rel="noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 text-sm">Live Demo</a>
      </div>
    </div>
  );
}
