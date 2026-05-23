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
    </div>
  );
}
