"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";


function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "text-zinc-50 font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-indigo-400/90"
          : "text-zinc-500 hover:text-zinc-50 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-transparent hover:after:bg-indigo-400/60"
      }
    >
      {label}
    </Link>
  );
}


export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full py-4 px-6 md:px-12 flex items-center justify-between bg-zinc-950/40 backdrop-blur border-b border-zinc-800/40">
      <Link href="/" className="text-lg font-semibold text-zinc-50">
        Suthar Pawankumar
      </Link>


      <nav className="hidden md:flex gap-6 items-center text-sm">
        <NavLink
          href="/projects"
          label="Projects"
          active={pathname === "/projects"}
        />
        <NavLink
          href="/resume"
          label="Resume"
          active={pathname === "/resume"}
        />
        <NavLink
          href="/contact"
          label="Contact"
          active={pathname === "/contact"}
        />

        <div className="ml-2">
          <ThemeToggle />
        </div>
      </nav>



      <div className="md:hidden">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-nav-panel"
          aria-expanded={mobileOpen}
          className="p-2 rounded-md border border-zinc-800 text-zinc-200 hover:bg-zinc-900"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>



      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}


