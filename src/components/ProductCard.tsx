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
        className="relative block aspect-square overflow-hidden bg-ink"
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

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gold-400/90">
          {[product.brand, category?.name].filter(Boolean).join(" · ")}
        </p>

        <Link to={`/producto/${product.id}`} className="line-clamp-2 font-heading text-base font-semibold text-paper hover:text-gold-400">
          {product.name}
        </Link>

        <p className="line-clamp-2 text-sm text-paper/60">{product.description}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-heading text-lg font-semibold text-paper">
            {formatPrice(product)}
          </span>
        </div>

        {product.available ? (
          <a
            href={getProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-400"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="mt-1 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-ink-elevated px-4 py-2.5 text-sm font-semibold text-paper/40"
          >
            Agotado
          </button>
        )}
      </div>
    </article>
  );
}
