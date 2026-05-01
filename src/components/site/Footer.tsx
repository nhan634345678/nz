import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
  { icon: Mail, href: "mailto:hello@nordnails.no", label: "Email" },
];

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      className="text-neutral-200"
      style={{ backgroundColor: "#3B2A1F" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#top" className="text-2xl font-black tracking-tight text-white">
              NORD<span className="text-neutral-400">.</span>NAILS
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-300">
              A quiet Scandinavian nail studio in Oslo. Unhurried craft,
              considered details, perfectly polished hands.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-200 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Studio
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-200">
              <li>Markveien 12</li>
              <li>0554 Oslo, Norway</li>
              <li>+47 22 00 00 00</li>
              <li>hello@nordnails.no</li>
            </ul>
          </div>
        </div>

        {/* Social row */}
        <div
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-center"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex size-10 items-center justify-center rounded-full border border-neutral-500/40 text-neutral-200 transition-all hover:scale-105 hover:border-white hover:bg-white hover:text-neutral-900"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Nord Nails Studio · Oslo, Norway · All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
