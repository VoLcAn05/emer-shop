import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

/**
 * Closing conversion banner for users who browsed the whole catalog
 * without writing to us yet. Deliberately minimal — no icons grid, no
 * extra claims — just the one action that matters at this point.
 */
export function FinalCTA() {
  return (
    <section className="border-t border-ink-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="font-heading max-w-md text-xl font-semibold text-paper sm:text-2xl">
          ¿Ya elegiste tu producto?
        </h2>
        <p className="max-w-sm text-sm text-paper/60">
          Escríbenos por WhatsApp y confirmamos disponibilidad y compra.
        </p>
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink transition-colors active:scale-95 sm:hover:bg-gold-400"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
