import type { Product } from "../data/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-border py-16 text-center">
        <p className="text-paper/70">No encontramos productos con esos filtros.</p>
        <p className="mt-1 text-sm text-paper/40">
          Intenta con otra categoría o término de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
