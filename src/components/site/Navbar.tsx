import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="text-xl font-black tracking-tight text-foreground">
          NORD<span className="text-muted-foreground">.</span>NAILS
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-foreground px-6 text-foreground hover:bg-foreground hover:text-background"
          >
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-xs font-medium uppercase tracking-[0.25em] text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button
                asChild
                className="w-full rounded-full border-0 text-white hover:opacity-90"
                style={{ backgroundColor: "#5C3A21" }}
                onClick={() => setOpen(false)}
              >
                <a href="#contact">Book Now</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
