import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { formatPrice } from "../utils/format";
import { getProductWhatsAppLink } from "../utils/whatsapp";
import { ChevronLeftIcon, WhatsAppIcon } from "../components/icons";
import { ProductGrid } from "../components/ProductGrid";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-heading text-2xl font-semibold text-paper">
          Producto no encontrado
        </h1>
        <p className="mt-2 text-paper/60">
          Es posible que este producto ya no esté disponible en el catálogo.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-400"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-paper/60 hover:text-gold-400"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        Volver al catálogo
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-2xl border border-ink-border/60 bg-ink-soft">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-wide text-gold-400/90">
            {[product.brand, category?.name].filter(Boolean).join(" · ")}
          </p>

          <h1 className="font-heading mt-2 text-2xl font-semibold text-paper sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-heading text-3xl font-semibold text-paper">
              {formatPrice(product)}
            </span>
            {!product.available && (
              <span className="rounded-full bg-ink-elevated px-3 py-1 text-xs font-semibold text-paper/60 ring-1 ring-paper/20">
                Agotado
              </span>
            )}
          </div>
          {product.priceNote && (
            <p className="mt-1 text-xs text-paper/40">{product.priceNote}</p>
          )}

          <p className="mt-5 leading-relaxed text-paper/70">{product.description}</p>

          {product.features.length > 0 && (
            <ul className="mt-5 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-paper/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            {product.available ? (
              <a
                href={getProductWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-gold-400 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Comprar por WhatsApp
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-ink-elevated px-6 py-3.5 text-base font-semibold text-paper/40 sm:w-auto"
              >
                Producto agotado
              </button>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-xl font-semibold text-paper">
            Más en {category?.name}
          </h2>
          <div className="mt-6">
            <ProductGrid products={related} />
          </div>
        </div>
      )}
    </div>
  );
}
