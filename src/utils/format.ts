import type { Product } from "../data/types";

/** Formats a product's price for display, or a fallback when price is unknown. */
export function formatPrice(product: Product): string {
  if (product.price === undefined) {
    return "Consultar precio";
  }
  return `$${product.price.toFixed(2).replace(/\.00$/, "")} ${product.currency}`;
}
