import { getGeneralWhatsAppLink } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Emer Shop por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform active:scale-95 sm:bottom-6 sm:right-6 sm:hover:scale-105 ${className ?? "flex"}`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
