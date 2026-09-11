import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteConfig } from "../data/config";
import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { label: "Categorías", href: "#categorias" },
  { label: "Destacados", href: "#destacados" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(href: string) {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-border/60 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={`${siteConfig.businessName} — inicio`}>
          <img
            src={siteConfig.logo.emblem}
            alt={`Logo de ${siteConfig.businessName}`}
            className="h-10 w-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-heading text-lg font-semibold tracking-wide text-paper">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-paper/80 transition-colors hover:text-gold-500"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-gold-400 active:scale-100"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-paper hover:bg-ink-elevated"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-border/60 bg-ink px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-paper/90 hover:bg-ink-elevated"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-ink"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
