import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-nails.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-background pt-16"
    >
      <div className="relative mx-auto h-[100svh] min-h-[640px] w-full">
        {/* Full-bleed image */}
        <img
          src={heroImg}
          alt="Editorial portrait of an elegant woman with a soft nude manicure"
          width={1024}
          height={1536}
          className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
        />
        {/* Gradient scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Text overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 md:pb-24 lg:justify-center lg:pb-0">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
              Est. 2024 — Oslo
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[1.15] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Quietly
              <br />
              beautiful
              <br />
              nails.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              A Scandinavian nail studio for those who love the unhurried craft
              of perfectly shaped, perfectly polished hands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-white px-7 text-foreground hover:bg-white/90"
              >
                <a href="#contact">
                  Book an appointment <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white bg-transparent px-7 text-white hover:bg-white hover:text-foreground"
              >
                <a href="#services">View services</a>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-12 hidden items-end gap-12 lg:flex">
            <div>
              <p className="text-3xl font-black text-white">12+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Years of craft
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">4.9</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Avg. rating
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">2k+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Happy clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
