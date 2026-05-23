"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(form.entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-zinc-500 mb-6">Send a short message — I usually reply within 24–48 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your name" className="w-full p-3 rounded-md bg-zinc-100" required />
        <input name="email" type="email" placeholder="you@domain.com" className="w-full p-3 rounded-md bg-zinc-100" required />
        <textarea name="message" rows={6} placeholder="Brief message" className="w-full p-3 rounded-md bg-zinc-100" required />
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-zinc-900 text-white disabled:opacity-60"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          {status === "sent" && (
            <span className="text-sm text-green-500">Sent — thank you!</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-500">Error — try again later.</span>
          )}
        </div>
      </form>
    </div>
  );
}
