import { siteConfig } from "../data/config";

/**
 * "Conoce Emer Shop" brand section. The photo is real; name/role/bio come
 * from siteConfig.founder and are placeholders until the real bio is
 * provided — see the comment there for how to update them.
 */
export function AboutFounder() {
  const { founder } = siteConfig;

  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold-500">
            Sobre Emer Shop
          </p>
          <h2 className="font-heading mt-2 text-2xl font-semibold text-paper sm:text-3xl">
            Conoce quién está detrás de Emer Shop.
          </h2>

          <p className="font-heading mt-8 text-lg font-semibold text-paper">
            {founder.name}
          </p>
          <p className="text-sm font-medium uppercase tracking-wide text-gold-500">
            {founder.role}
          </p>

          <p className="mt-4 max-w-md leading-relaxed text-paper/70">
            {founder.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
