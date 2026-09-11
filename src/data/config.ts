/**
 * Central site configuration.
 *
 * Change any value here and it propagates everywhere it's used
 * (header, footer, WhatsApp buttons, SEO tags, etc.). See README.md
 * for step-by-step instructions on common changes (e.g. updating the
 * WhatsApp number once Emer Shop provides the definitive one).
 */
export const siteConfig = {
  businessName: "Emer Shop",
  tagline: "Productos para barbería",

  /**
   * TEMPORARY test number provided for development/testing only.
   * This is NOT necessarily the final Emer Shop WhatsApp number.
   * Replace this single value once the real number is confirmed —
   * every WhatsApp button in the app reads from here.
   *
   * Format: international format, digits only, no "+" or spaces
   * (e.g. Venezuela +58 412 761 4901 -> "584127614901").
   */
  whatsappNumber: "584127614901",

  /** Default message used by the general/floating WhatsApp button. */
  whatsappDefaultMessage:
    "Hola, Emer Shop. Quiero información sobre sus productos.",

  /**
   * Message template used for per-product WhatsApp buttons.
   * `{productName}` is replaced automatically.
   */
  whatsappProductMessageTemplate:
    "Hola, Emer Shop. Estoy interesado en el producto: {productName}. ¿Está disponible?",

  location: {
    city: "Barinas",
    country: "Venezuela",
  },

  currency: "USD",

  logo: {
    full: "/images/logo/emer-shop-logo.webp",
    emblem: "/images/logo/emer-shop-emblem.png",
  },

  /**
   * Social links — intentionally empty until Emer Shop provides them.
   * Add entries like { label: "Instagram", url: "https://instagram.com/..." }
   * and the footer will render them automatically.
   */
  socialLinks: [] as { label: string; url: string }[],

  /**
   * Business hours — intentionally empty until Emer Shop provides them.
   * Add entries like { day: "Lunes a Sábado", hours: "9:00 am - 6:00 pm" }.
   */
  businessHours: [] as { day: string; hours: string }[],
};

export type SiteConfig = typeof siteConfig;
