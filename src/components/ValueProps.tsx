import { CheckCircleIcon, RefreshIcon, SparklesIcon, WhatsAppIcon } from "./icons";

/**
 * Safe, non-fabricated value propositions. These describe how the site
 * and business actually operate — never invented claims like shipping
 * guarantees, delivery times, or customer counts.
 */
const items = [
  {
    icon: WhatsAppIcon,
    title: "Atención directa por WhatsApp",
    description: "Consulta disponibilidad y compra hablando directo con nosotros.",
  },
  {
    icon: RefreshIcon,
    title: "Catálogo actualizado",
    description: "Productos y precios reflejan lo que tenemos disponible ahora.",
  },
  {
    icon: SparklesIcon,
    title: "Para profesionales y uso personal",
    description: "Herramientas y accesorios pensados para barbería.",
  },
  {
    icon: CheckCircleIcon,
    title: "Compra simple",
    description: "Eliges el producto, consultas por WhatsApp y confirmas.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-ink-soft/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-4 lg:gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper/70">
              <item.icon className="h-4 w-4" />
            </span>
            <h3 className="font-heading text-sm font-semibold text-paper sm:text-base">
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed text-paper/60 sm:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
