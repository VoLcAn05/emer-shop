import { Hero } from "../components/Hero";
import { Categories } from "../components/Categories";
import { FeaturedSection } from "../components/FeaturedSection";
import { ValueProps } from "../components/ValueProps";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { SortSelect } from "../components/SortSelect";
import { ProductGrid } from "../components/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { useProductFilters } from "../hooks/useProductFilters";

export function Home() {
  const { search, setSearch, category, setCategory, sort, setSort, filtered } =
    useProductFilters(products);

  function handleSelectCategory(categoryId: string) {
    setCategory(categoryId);
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Hero />
      <Categories onSelect={handleSelectCategory} />
      <FeaturedSection />
      <ValueProps />

      <section id="catalogo" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-paper sm:text-3xl">
            Catálogo
          </h2>
          <p className="mt-1 text-sm text-paper/60">
            Explora todos nuestros productos disponibles.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
            <SortSelect value={sort} onChange={setSort} />
          </div>
        </div>

        <div className="mt-8">
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
}
