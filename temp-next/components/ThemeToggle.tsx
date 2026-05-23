"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Keep React state only for rendering the icon.
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read theme from localStorage and sync DOM class.
    // Important: we avoid calling setTheme in this effect to satisfy the lint rule
    // about setting state in effects.
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
    }
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className="p-2 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 transition"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

