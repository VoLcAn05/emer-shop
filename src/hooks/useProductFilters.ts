import { useMemo, useState } from "react";
import type { Product } from "../data/types";
import type { SortOption } from "../components/SortSelect";

export function useProductFilters(products: Product[]) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("relevance");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesSearch = query
        ? [product.name, product.brand, product.description]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(query)
        : true;
      return matchesCategory && matchesSearch;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return (a.price ?? Infinity) - (b.price ?? Infinity);
        case "price-desc":
          return (b.price ?? -Infinity) - (a.price ?? -Infinity);
        case "name-asc":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [products, search, category, sort]);

  return { search, setSearch, category, setCategory, sort, setSort, filtered };
}
