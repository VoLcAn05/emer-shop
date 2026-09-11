import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

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
          Lo más elegido de nuestro catálogo.
        </p>
      </div>

      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-auto sm:mt-8 sm:grid sm:max-w-6xl sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-6 lg:grid-cols-4">
        {featured.map((product) => (
          <div key={product.id} className="w-[75%] shrink-0 snap-start sm:w-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
