import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import logoMark from "@/assets/brand/logo-mark-inline.png";
import { navLinks } from "@/data/services";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest shadow-sm">
      <Container className="flex h-20 items-center justify-between md:grid md:grid-cols-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Nabure Systems"
            width={36}
            height={36}
            className="h-9 w-auto flex-shrink-0"
          />
          <span className="text-headline-sm font-bold text-primary">
            Nabure Systems
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-lg md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `pb-1 text-body-md font-bold transition-colors ${
                  isActive
                    ? "border-b-2 border-on-surface text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="text-on-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <Icon name={open ? "close" : "menu"} className="text-2xl" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-outline-variant bg-surface-container-lowest md:hidden">
          <Container className="flex flex-col gap-md py-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-body-md ${isActive ? "font-semibold text-on-surface" : "text-on-surface-variant"}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
