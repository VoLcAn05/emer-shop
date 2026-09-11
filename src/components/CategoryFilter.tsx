import type { Category } from "../data/types";

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: Category[];
  active: string | null;
  onChange: (id: string | null) => void;
}) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      <Chip label="Todos" selected={active === null} onClick={() => onChange(null)} />
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.name}
          selected={active === category.id}
          onClick={() => onChange(category.id)}
        />
      ))}
    </div>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        selected
          ? "border-gold-500 bg-gold-500 text-ink"
          : "border-ink-border bg-ink-soft text-paper/70 hover:border-gold-500/40 hover:text-paper"
      }`}
    >
      {label}
    </button>
  );
}
