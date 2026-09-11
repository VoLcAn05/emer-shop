import { products } from "../data/products";
import { ProductGrid } from "./ProductGrid";

export function FeaturedSection() {
  const featured = products.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section id="destacados" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-paper sm:text-3xl">
            Productos destacados
          </h2>
          <p className="mt-1 text-sm text-paper/60">
            Selección de productos más populares en Emer Shop.
          </p>
        </div>
      </div>
      <ProductGrid products={featured} />
    </section>
  );
}
