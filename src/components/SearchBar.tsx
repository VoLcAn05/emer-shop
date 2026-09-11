import { SearchIcon } from "./icons";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full">
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/40" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar productos…"
        aria-label="Buscar productos"
        className="w-full rounded-full border border-ink-border bg-ink-soft py-3 pl-11 pr-4 text-sm text-paper placeholder:text-paper/40 focus:border-gold-500/60"
      />
    </div>
  );
}
