import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import logoMark from "@/assets/brand/mark-badge-small.png";
import { navLinks } from "@/data/services";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Nabure Systems"
            className="size-10 rounded-xl brand-glow"
          />
          <span className="text-headline-sm font-bold text-primary">
            Nabure Systems
          </span>
        </Link>

        <nav className="hidden items-center gap-lg md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `pb-1 text-body-md font-bold transition-colors ${
                  isActive
                    ? "border-b-2 border-secondary text-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="link" to="/contacto">
            Cotiza tu proyecto
          </Button>
        </div>

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
                  `text-body-md ${isActive ? "font-semibold text-secondary" : "text-on-surface-variant"}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button as="link" to="/contacto" onClick={() => setOpen(false)}>
              Cotiza tu proyecto
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
