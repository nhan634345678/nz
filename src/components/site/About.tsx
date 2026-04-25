import aboutImg from "@/assets/about-salon.jpg";

export function About() {
  return (
    <section id="about" className="bg-background pt-12 pb-10 md:pt-16 md:pb-12">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow">04 — About</p>
        <p className="mt-10 text-3xl font-black leading-snug tracking-tight text-foreground md:text-5xl">
          "We believe a manicure should feel like a quiet ritual — not a
          transaction."
        </p>
        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          Founded by nail artist Maren Lien in 2024, Nord Nails is a small
          studio in central Oslo. Two chairs, no rush, no music too loud. Just
          considered work, clean tools, and time to think.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-5xl px-6 md:px-10">
        <div className="mx-auto aspect-[1/2] w-full max-w-sm overflow-hidden rounded-2xl md:aspect-[4/3] md:max-w-none">
          <img
            src={aboutImg}
            alt="Minimalist Scandinavian nail salon interior with view of nature"
            loading="lazy"
            width={1080}
            height={1920}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
