import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";
import s3 from "@/assets/service-3.jpg";
import s4 from "@/assets/service-4.jpg";
import s5 from "@/assets/service-5.jpg";
import s6 from "@/assets/service-6.jpg";

const services = [
  { name: "Classic Manicure", desc: "Shape, cuticle care and a flawless polish — the everyday essential.", price: "$38", img: s1 },
  { name: "Gel Manicure", desc: "Long-lasting high-gloss colour that holds up for two full weeks.", price: "$60", img: s2 },
  { name: "Builder Gel", desc: "Adds quiet strength and structure to natural nails.", price: "$76", img: s3 },
  { name: "Soft Pedicure", desc: "Foot soak, gentle scrub and a polish — pure quiet ritual.", price: "$60", img: s4 },
  { name: "Nail Art", desc: "Hand-drawn minimalist details, priced per nail.", price: "$9", img: s5 },
  { name: "Removal & Repair", desc: "Gentle removal and repair — never any damage to the natural nail.", price: "$22", img: s6 },
];

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 440;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-background pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">01 — Services</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
              A short menu, done very well.
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Six considered services. No upsells, no rush — just careful work
              from start to finish.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hide mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mt-16 md:px-10"
      >
        {services.map((s) => (
          <article
            key={s.name}
            data-card
            className="group flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm sm:w-[420px] md:w-[440px]"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <h3 className="text-2xl font-black leading-tight text-white">
                  {s.name}
                </h3>
                <span className="text-2xl font-black text-white">{s.price}</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          </article>
        ))}
        <div className="w-2 shrink-0" aria-hidden />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-3 px-6 md:px-10">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous service"
          onClick={() => scroll(-1)}
          className="size-12 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next service"
          onClick={() => scroll(1)}
          className="size-12 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}
