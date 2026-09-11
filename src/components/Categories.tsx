import type { ComponentType, SVGProps } from "react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import {
  GridIcon,
  LayersIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchIcon,
} from "./icons";

/**
 * Icon per category id, purely presentational. Falls back to GridIcon so a
 * newly added category (see categories.ts) never breaks the UI — it just
 * renders with a generic icon until one is mapped here.
 */
const categoryIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "maquinas-herramientas": WrenchIcon,
  repuestos: LayersIcon,
  "accesorios-barberia": GridIcon,
  "higiene-desechables": ShieldCheckIcon,
  "cuidado-personal": SparklesIcon,
};

export function Categories({
  onSelect,
}: {
  onSelect: (categoryId: string) => void;
}) {
  const withCounts = categories
    .map((category) => ({
      ...category,
      count: products.filter((p) => p.category === category.id).length,
    }))
    .filter((category) => category.count > 0);

  if (withCounts.length === 0) return null;

  return (
    <section id="categorias" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-semibold text-paper sm:text-3xl">
          Categorías
        </h2>
        <p className="mt-1 text-sm text-paper/60">
          Encuentra rápido lo que necesitas para tu barbería.
        </p>
      </div>

      <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-5">
        {withCounts.map((category) => {
          const Icon = categoryIcons[category.id] ?? GridIcon;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className="group flex w-[42vw] shrink-0 flex-col items-start gap-3 rounded-2xl border border-ink-border/60 bg-ink-soft p-4 text-left transition-colors hover:border-gold-500/50 sm:w-auto"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-ink">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-heading text-sm font-semibold leading-snug text-paper sm:text-base">
                {category.name}
              </span>
              <span className="text-xs text-paper/50">
                {category.count} {category.count === 1 ? "producto" : "productos"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
