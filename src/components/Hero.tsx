import { siteConfig } from "../data/config";
import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-border/60">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-gold-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
          {siteConfig.location.city}, {siteConfig.location.country}
        </p>

        <h1 className="font-heading mt-5 max-w-xl text-4xl font-semibold leading-[1.1] text-paper text-balance sm:text-5xl lg:text-6xl">
          Todo para tu <span className="text-gold-500">barbería</span>.
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 sm:text-lg">
          Productos, herramientas y accesorios para llevar tu trabajo al
          siguiente nivel. Consulta disponibilidad y compra directo por
          WhatsApp.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] hover:bg-gold-400"
          >
            Ver productos
          </a>
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-gold-500/60 hover:text-gold-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
