"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SnapReminder() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/projects" className="flex items-center gap-2 text-sm mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="text-3xl font-bold mb-4">snapReminder</h1>
      <p className="text-zinc-500 mb-4">A smart collaboration system integrating Tesseract.js OCR to automatically extract dates from uploaded timetables, reducing manual entry. Secured with JWT and featuring automated Nodemailer alerts.</p>
      <section className="mt-6">
        <h2 className="font-semibold mb-2">Highlights</h2>
        <ul className="list-disc ml-6 text-zinc-500">
          <li>React 18 frontend with responsive Bento Grid</li>
          <li>Node.js + Express API with JWT-based auth</li>
          <li>MongoDB for persistent reminders and users</li>
          <li>Tesseract.js OCR pipeline for timetable parsing</li>
        </ul>
      </section>
      <div className="mt-8 flex gap-4">
        <a href="https://github.com/code-addicts/snapReminder" target="_blank" rel="noreferrer" className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 text-sm">GitHub</a>
        <a href="https://snapreminder.netlify.app/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm">Live Demo</a>
      </div>
    </div>
  );
}
