"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/data";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open && wasOpen.current) menuButton.current?.focus();
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <header
      className="sticky top-0 z-50 bg-black backdrop-blur-xl"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.14), transparent 42%), linear-gradient(90deg, #000000, #09090b 50%, #000000)",
      }}
    >
      <div className="page-shell relative flex h-16 items-center justify-end sm:h-[72px] md:justify-center">
        <span className="absolute left-1/2 max-w-[calc(100%-5.5rem)] -translate-x-1/2 truncate text-center text-sm font-semibold tracking-tight text-white md:hidden">
          Ronny Yabar Aizcorbe
        </span>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <Link
                key={link.title}
                href={link.url}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${active ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-700 bg-zinc-900 text-white shadow-sm md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="page-shell border-t border-zinc-800 py-3 md:hidden"
        >
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <Link
                key={link.title}
                href={link.url}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${active ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-900 hover:text-white"}`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
