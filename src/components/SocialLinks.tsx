import { siteConfig } from "../data/config";
import { ChevronRightIcon, InstagramIcon, TikTokIcon } from "./icons";

const networks = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    icon: InstagramIcon,
    cta: "Ver Instagram",
  },
  {
    label: "TikTok",
    href: siteConfig.tiktokUrl,
    icon: TikTokIcon,
    cta: "Ver TikTok",
  },
];

export function SocialLinks() {
  return (
    <section className="bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
          Síguenos
        </p>
        <h2 className="font-heading mt-2 text-2xl font-semibold text-paper sm:text-3xl">
          Conecta con Emer Shop
        </h2>
        <p className="mt-1 max-w-md text-sm text-paper/60">
          Descubre nuestros productos, novedades y contenido en nuestras
          redes sociales.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:max-w-md">
          {networks.map((network) => (
            <a
              key={network.label}
              href={network.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 rounded-2xl border border-ink-border/60 bg-ink-soft p-4 transition-colors hover:border-gold-500/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper/70 transition-colors group-hover:border-gold-500/50 group-hover:text-gold-500">
                <network.icon className="h-4 w-4" />
              </span>
              <span className="font-heading text-sm font-semibold text-paper sm:text-base">
                {network.label}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-400 sm:text-sm">
                {network.cta}
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
