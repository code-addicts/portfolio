"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";


export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  // Keep for potential future dialog-title wiring; currently we use a stable id.
  // const panelId = useId();


  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Simple focus management:
  // - When opening, focus the close button inside the dialog.
  // - When closing, restore focus to the previously focused element.
  useEffect(() => {
    if (!open) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => {
      const closeButton = document.querySelector<HTMLButtonElement>(
        "[data-mobile-nav-close]"
      );
      closeButton?.focus();
    }, 0);

    return () => {
      window.clearTimeout(t);
      previousActive?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  const linkClass = (href: string) =>
    pathname === href
      ? "text-zinc-50 font-medium"
      : "text-zinc-300 hover:text-zinc-50 transition-colors";

  return (

    <div className="md:hidden">
      <div
        className="fixed inset-0 bg-black/60 z-50"
        role="presentation"
        onClick={onClose}
      />

      <div
        id="mobile-nav-panel"

        className="fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-zinc-950 z-50 border-l border-zinc-800"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >

        <div className="p-6 flex items-center justify-between border-b border-zinc-800 gap-3">
          <div className="text-base font-semibold text-zinc-50">
            Suthar Pawankumar
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              data-mobile-nav-close
              className="p-2 rounded-md border border-zinc-800 text-zinc-200 hover:bg-zinc-900"
            >
              ✕
            </button>

          </div>
        </div>


        <nav className="p-4 space-y-1">
          <Link href="/projects" onClick={onClose} aria-current={pathname === "/projects" ? "page" : undefined} className={linkClass("/projects")}>
            <span className="block px-3 py-3 rounded-lg hover:bg-zinc-900 relative after:absolute after:-left-[1px] after:top-3 after:h-6 after:w-[3px] after:rounded-full after:bg-indigo-400/90">
              Projects
            </span>
          </Link>
          <Link href="/resume" onClick={onClose} aria-current={pathname === "/resume" ? "page" : undefined} className={linkClass("/resume")}>
            <span className="block px-3 py-3 rounded-lg hover:bg-zinc-900 relative after:absolute after:-left-[1px] after:top-3 after:h-6 after:w-[3px] after:rounded-full after:bg-indigo-400/90">
              Resume
            </span>
          </Link>
          <Link href="/contact" onClick={onClose} aria-current={pathname === "/contact" ? "page" : undefined} className={linkClass("/contact")}>
            <span className="block px-3 py-3 rounded-lg hover:bg-zinc-900 relative after:absolute after:-left-[1px] after:top-3 after:h-6 after:w-[3px] after:rounded-full after:bg-indigo-400/90">
              Contact
            </span>
          </Link>
        </nav>


        <div className="px-4 pb-6 text-xs text-zinc-500">
          Tip: Press Esc to close.
        </div>
      </div>
    </div>
  );
}

