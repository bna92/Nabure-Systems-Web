import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import logoMark from "@/assets/brand/logo-mark-inline.png";
import { navLinks } from "@/data/services";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-[1350px] sm:top-4 sm:w-[calc(100%-3rem)]">
      <div className="flex h-20 items-center justify-between rounded-full border border-white/60 bg-white/80 px-md shadow-[0_8px_30px_-10px_rgba(15,111,255,0.25)] backdrop-blur-xl md:grid md:grid-cols-3 md:px-xl">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Nabure Systems"
            width={40}
            height={40}
            className="brand-glow h-9 w-auto shrink-0 rounded-xl sm:h-10"
          />
          <span className="text-title-lg font-bold text-primary sm:text-headline-sm">
            Nabure Systems
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-lg py-2.5 text-body-md font-bold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-secondary to-brand-cyan text-white shadow-md shadow-secondary/25"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="justify-self-end text-on-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <Icon name={open ? "close" : "menu"} className="text-2xl" />
        </button>
      </div>

      {open && (
        <div className="mt-2 rounded-3xl border border-white/60 bg-white/90 p-md shadow-[0_8px_30px_-10px_rgba(15,111,255,0.25)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-md py-2 text-body-md font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-secondary to-brand-cyan text-white"
                      : "text-on-surface-variant hover:bg-surface-container-low"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
