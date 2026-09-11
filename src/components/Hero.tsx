import { siteConfig } from "../data/config";
import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-15%] h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
          {siteConfig.location.city}, {siteConfig.location.country}
        </p>

        <h1 className="font-heading mt-5 max-w-xl text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-paper text-balance sm:text-6xl lg:text-7xl">
          Todo para
          <br />
          tu <span className="text-gold-500">barbería</span>.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
          Productos, herramientas y accesorios para llevar tu trabajo al
          siguiente nivel. Consulta disponibilidad y compra directo por
          WhatsApp.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink transition-transform active:scale-95 sm:hover:scale-[1.02] sm:hover:bg-gold-400"
          >
            Ver productos
          </a>
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-6 py-3.5 text-sm font-semibold text-paper transition-colors active:scale-95 sm:hover:border-gold-500/60 sm:hover:text-gold-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
