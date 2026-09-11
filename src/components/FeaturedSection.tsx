import { products } from "../data/products";
import { ProductGrid } from "./ProductGrid";

export function FeaturedSection() {
  const featured = products.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section id="destacados" className="bg-ink-soft/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
          Selección Emer Shop
        </p>
        <h2 className="font-heading mt-2 text-2xl font-semibold text-paper sm:text-3xl">
          Productos destacados
        </h2>
        <p className="mt-1 text-sm text-paper/60">
          Una selección para empezar a explorar el catálogo.
        </p>

        <div className="mt-6 sm:mt-8">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  );
}
