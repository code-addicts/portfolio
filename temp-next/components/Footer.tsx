import Link from "next/link";
import { Code2, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-8 border-t border-zinc-200/10 text-sm text-zinc-500 flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link href="/projects" className="hover:text-indigo-600 transition">Projects</Link>
        <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        <a href="/resume.pdf" download className="hover:text-indigo-600 transition">Resume</a>
      </div>
      <div className="flex gap-3 mb-2">
        <a href="mailto:pawansuthar310@gmail.com" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="Email">
          <Mail size={18} />
        </a>
        <a href="https://github.com/code-addicts" target="_blank" rel="noreferrer" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="GitHub">
          <Code2 size={18} />
        </a>
        <a href="https://PawanSuthar.dev" target="_blank" rel="noreferrer" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="Portfolio">
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="max-w-4xl text-center">© {new Date().getFullYear()} Pawan Suthar — Built with Next.js</div>
    </footer>
  );
}
