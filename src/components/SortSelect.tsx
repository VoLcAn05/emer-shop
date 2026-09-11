export type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc";

const options: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevancia" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name-asc", label: "Nombre: A-Z" },
];

export function SortSelect({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      aria-label="Ordenar productos"
      className="min-h-11 rounded-full border border-ink-border bg-ink-soft px-4 text-sm text-paper/80 focus:border-gold-500/60"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-ink-soft">
          {option.label}
        </option>
      ))}
    </select>
  );
}
