import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    quote:
      "The calmest hour of my month. The shaping is unmatched and the polish lasts forever.",
    name: "Ingrid S.",
    role: "Architect",
  },
  {
    quote:
      "I've tried every studio in the city. None come close to the precision and quiet I get here.",
    name: "Maya K.",
    role: "Stylist",
  },
  {
    quote:
      "Minimal, modern, no small talk required. My nails have never looked better.",
    name: "Sofia L.",
    role: "Editor",
  },
  {
    quote:
      "Booked once, came back forever. The space is beautiful and the work is meticulous.",
    name: "Anna R.",
    role: "Photographer",
  },
  {
    quote:
      "It feels like a gallery — every detail considered. My new monthly ritual.",
    name: "Elin H.",
    role: "Curator",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 text-white" style={{ backgroundImage: 'var(--gradient-wood)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow" style={{ color: 'oklch(0.97 0.05 95)' }}>03 — Reviews</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Kind words.
          </h2>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hide mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {reviews.map((r, i) => (
            <article
              key={i}
              className="flex w-[88%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-foreground bg-background p-8 sm:w-[440px] md:p-10"
            >
              {/* Large decorative quote glyph */}
              <div
                aria-hidden
                className="font-serif text-[7rem] leading-none text-foreground/15"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </div>

              <p className="-mt-8 text-xl font-medium leading-snug text-foreground md:text-2xl">
                {r.quote}
              </p>

              <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                {/* Avatar initial */}
                <div
                  aria-hidden
                  className="flex size-14 shrink-0 items-center justify-center rounded-full bg-foreground text-background ring-2 ring-foreground/10"
                >
                  <span className="text-lg font-black uppercase tracking-tight">
                    {r.name.trim().charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
                    {r.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous testimonial"
            onClick={() => scroll(-1)}
            className="size-12 rounded-full border-white bg-transparent text-white hover:bg-white hover:text-foreground"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
            onClick={() => scroll(1)}
            className="size-12 rounded-full border-white bg-transparent text-white hover:bg-white hover:text-foreground"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
