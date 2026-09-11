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

  /** Official Instagram profile URL. Used by the "Síguenos en redes" section. */
  instagramUrl: "https://www.instagram.com/emershopve?stkn=ejVvZ2pzd2Zra3U=",

  /** Official TikTok profile URL. Used by the "Síguenos en redes" section. */
  tiktokUrl: "https://www.tiktok.com/@emershop.ve?_r=1&_t=ZS-99dFkYeEtce",

  /**
   * "Conoce Emer Shop" section content. The photo is a real photo of the
   * person behind the business. The name/role/bio below are placeholders —
   * REPLACE them with the real information once it's provided; nothing
   * here should be treated as a real biography until then.
   */
  founder: {
    photo: "/images/team/founder.webp",
    name: "Nombre del fundador", // PLACEHOLDER — reemplazar con el nombre real
    role: "Fundador de Emer Shop",
    bio: "Presentación pendiente por completar con la historia real detrás de Emer Shop.", // PLACEHOLDER
  },

  /**
   * Business hours — intentionally empty until Emer Shop provides them.
   * Add entries like { day: "Lunes a Sábado", hours: "9:00 am - 6:00 pm" }.
   */
  businessHours: [] as { day: string; hours: string }[],
};

export type SiteConfig = typeof siteConfig;
