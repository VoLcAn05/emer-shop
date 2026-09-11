import { siteConfig } from "../data/config";
import { categories } from "../data/categories";
import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { MapPinIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-ink-border/60 bg-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={siteConfig.logo.emblem}
                alt={`Logo de ${siteConfig.businessName}`}
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <span className="font-heading text-lg font-semibold text-paper">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              Productos, herramientas y accesorios para barbería en{" "}
              {siteConfig.location.city}, {siteConfig.location.country}.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-paper/60">
              <MapPinIcon className="h-4 w-4 shrink-0 text-gold-500" />
              {siteConfig.location.city}, {siteConfig.location.country}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-paper/80">
              Categorías
            </h3>
            <ul className="mt-3 space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <a
                    href="#catalogo"
                    className="text-sm text-paper/60 hover:text-gold-400"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-paper/80">
              Contacto
            </h3>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink hover:bg-gold-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-border/60 pt-6 text-xs text-paper/50">
          © {new Date().getFullYear()} {siteConfig.businessName}. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
