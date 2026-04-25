import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const tiles = [
  { src: g1, alt: "Black nail polish bottle" },
  { src: g2, alt: "Pink nail polish flatlay" },
  { src: g3, alt: "Chrome silver nails" },
  { src: g4, alt: "Soft pastel flatlay" },
  { src: g5, alt: "Nail tools flatlay" },
  { src: g6, alt: "Bold red nails" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background pt-8 pb-12 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">02 — Gallery</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
              Recent work.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-xs font-medium uppercase tracking-[0.25em] text-foreground/70 underline-offset-8 hover:text-foreground hover:underline md:block"
          >
            See more →
          </a>
        </div>

        {/* Fixed 2 cols × 3 rows on mobile, 3 cols × 2 rows on desktop */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="group aspect-square overflow-hidden rounded-2xl bg-secondary"
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
