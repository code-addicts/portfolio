import Link from "next/link";

export default function ProjectsIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/projects/snapReminder" className="p-6 rounded-2xl bg-zinc-900/5 hover:shadow-lg">
          <h3 className="font-semibold">snapReminder</h3>
          <p className="text-zinc-500 text-sm mt-2">OCR-powered reminders system (React, Node, MongoDB)</p>
        </Link>
        <Link href="/projects/autoflow" className="p-6 rounded-2xl bg-zinc-900/5 hover:shadow-lg">
          <h3 className="font-semibold">AutoFlow</h3>
          <p className="text-zinc-500 text-sm mt-2">Vehicle lifecycle automation platform</p>
        </Link>
      </div>
    </div>
  );
}
