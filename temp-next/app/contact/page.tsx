import ContactForm from "@/components/ContactForm";
import { Code2, Mail, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-zinc-500 mb-6">Send a short message — I usually reply within 24–48 hours.</p>
      <div className="mb-8">
        <ContactForm />
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-8 border-t pt-6 border-zinc-200 dark:border-zinc-800">
        <div className="flex gap-3">
          <a href="mailto:pawansuthar310@gmail.com" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="Email">
            <Mail size={20} />
          </a>
          <a href="https://github.com/code-addicts" target="_blank" rel="noreferrer" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="GitHub">
            <Code2 size={20} />
          </a>
          <a href="https://PawanSuthar.dev" target="_blank" rel="noreferrer" className="p-2 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition" title="Portfolio">
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="text-zinc-500 text-sm mt-2 md:mt-0">Ahmedabad, Gujarat, India</div>
      </div>
    </div>
  );
}
