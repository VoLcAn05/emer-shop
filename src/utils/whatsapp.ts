import { siteConfig } from "../data/config";
import type { Product } from "../data/types";

/** Builds a wa.me link with the given message, using the central WhatsApp number. */
function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/** WhatsApp link with the general/default inquiry message. */
export function getGeneralWhatsAppLink(): string {
  return buildWhatsAppLink(siteConfig.whatsappDefaultMessage);
}

/** WhatsApp link pre-filled with a message about a specific product. */
export function getProductWhatsAppLink(product: Product): string {
  const message = siteConfig.whatsappProductMessageTemplate.replace(
    "{productName}",
    product.name,
  );
  return buildWhatsAppLink(message);
}
