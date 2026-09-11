export interface Category {
  /** Stable identifier used to link products to this category. */
  id: string;
  /** Display name shown in the UI. */
  name: string;
  /** Short description, optional. */
  description?: string;
}

export interface Product {
  /** Stable, unique, URL-safe identifier (kebab-case). */
  id: string;
  /** Product name as it should be displayed. */
  name: string;
  /** Brand name, when known. Omit if not confirmed. */
  brand?: string;
  /** Category id — must match an id in categories.ts */
  category: string;
  /** Numeric price. Omit (leave undefined) if not confirmed — never guess. */
  price?: number;
  /** ISO-like currency code, e.g. "USD". */
  currency: string;
  /**
   * Optional clarification about how the price is charged/paid
   * (e.g. "Pago en bolívares a tasa BCV"), only when the source
   * material explicitly states it. Never invented.
   */
  priceNote?: string;
  /** Path to the product image, relative to /public. */
  image: string;
  /** Short marketing-safe description (1-2 sentences). */
  description: string;
  /** Bullet list of confirmed features/benefits. */
  features: string[];
  /** Whether the product can currently be ordered. */
  available: boolean;
  /** Whether the product should appear in the "Destacados" section. */
  featured: boolean;
}
