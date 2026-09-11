import { Link } from "react-router-dom";
import type { Product } from "../data/types";
import { categories } from "../data/categories";
import { formatPrice } from "../utils/format";
import { getProductWhatsAppLink } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink-border/60 bg-ink-soft transition-colors hover:border-gold-500/40">
      <Link
        to={`/producto/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden bg-ink"
        aria-label={`Ver detalle de ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.available && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-paper/80 ring-1 ring-paper/20">
            Agotado
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
        <p className="truncate text-[11px] font-medium uppercase tracking-wide text-gold-400/90 sm:text-xs">
          {[product.brand, category?.name].filter(Boolean).join(" · ")}
        </p>

        <h3 className="font-heading text-sm font-semibold leading-snug text-paper sm:text-base">
          <Link to={`/producto/${product.id}`} className="hover:text-gold-400">
            {product.name}
          </Link>
        </h3>

        <p className="line-clamp-2 text-xs text-paper/60 sm:text-sm">
          {product.description}
        </p>

        <div className="mt-auto flex items-baseline justify-between gap-2 pt-2.5">
          <span className="font-heading text-lg font-semibold text-gold-400 sm:text-xl">
            {formatPrice(product)}
          </span>
        </div>

        {product.available ? (
          <a
            href={getProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 text-sm font-semibold text-ink transition-colors active:scale-95 sm:hover:bg-gold-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="mt-1 inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-ink-elevated px-4 text-sm font-semibold text-paper/50"
          >
            Agotado
          </button>
        )}
      </div>
    </article>
  );
}
