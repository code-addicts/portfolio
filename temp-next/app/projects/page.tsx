import Link from "next/link";

export default function ProjectsIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SnapReminder Card */}
        <div className="group relative p-6 rounded-3xl bg-gradient-to-br from-blue-900/10 to-zinc-900/30 border border-blue-900/20 shadow-md card-animate flex flex-col transition-base" tabIndex={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl text-blue-700 font-bold text-2xl">SR</div>
            <h3 className="font-semibold text-xl">snapReminder</h3>
          </div>
          <p className="text-zinc-500 text-sm mb-3">OCR-driven reminders with Tesseract.js, JWT auth, and automated email alerts.</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-900/20 text-blue-700 border border-blue-800/30">React 18</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-900/20 text-blue-700 border border-blue-800/30">Node.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-900/20 text-blue-700 border border-blue-800/30">MongoDB</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-900/20 text-blue-700 border border-blue-800/30">Tesseract.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-900/20 text-blue-700 border border-blue-800/30">JWT</span>
          </div>
          <ul className="list-disc list-inside text-zinc-400 text-xs mb-4 pl-2">
            <li>OCR-assisted reminder engine for timetable images</li>
            <li>Priority-based task automation</li>
            <li>JWT-secured endpoints & Nodemailer notifications</li>
            <li>Modular group/circle management</li>
          </ul>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/code-addicts/snapReminder" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline text-xs">GitHub</a>
            <a href="https://snapreminder.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline text-xs">Live Demo</a>
            <Link href="/projects/snapReminder" className="ml-auto text-blue-700 hover:underline text-xs">Details →</Link>
          </div>
        </div>

        {/* AutoFlow Card */}
        <div className="group relative p-6 rounded-3xl bg-gradient-to-br from-emerald-100/10 to-zinc-900/30 border border-emerald-900/20 shadow-md card-animate flex flex-col transition-base" tabIndex={0}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center rounded-xl text-emerald-700 font-bold text-2xl">AF</div>
            <h3 className="font-semibold text-xl">AutoFlow</h3>
          </div>
          <p className="text-zinc-500 text-sm mb-3">Vehicle lifecycle automation platform with predictive maintenance and compliance tracking.</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/20 text-emerald-700 border border-emerald-800/30">React.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/20 text-emerald-700 border border-emerald-800/30">Express.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/20 text-emerald-700 border border-emerald-800/30">MongoDB</span>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/20 text-emerald-700 border border-emerald-800/30">Tesseract.js</span>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/20 text-emerald-700 border border-emerald-800/30">jsPDF</span>
          </div>
          <ul className="list-disc list-inside text-zinc-400 text-xs mb-4 pl-2">
            <li>Automated OCR for PUC/insurance expiry</li>
            <li>Dynamic dashboard & real-time compliance</li>
            <li>Role-based access (Admin, Manager, Driver)</li>
            <li>Predictive maintenance & reporting</li>
          </ul>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/code-addicts/AutoFlow" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline text-xs">GitHub</a>
            <a href="https://autoflow-teal.vercel.app/login" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline text-xs">Live Demo</a>
            <Link href="/projects/autoflow" className="ml-auto text-emerald-700 hover:underline text-xs">Details →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
