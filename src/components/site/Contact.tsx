import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const hours = [
  ["Mon", "Closed"],
  ["Tue – Fri", "10:00 — 19:00"],
  ["Saturday", "10:00 — 17:00"],
  ["Sunday", "11:00 — 16:00"],
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-background pt-10 pb-24 md:pt-12 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">05 — Visit</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
            Come sit with us.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Tucked into a quiet corner of Oslo. Walk in for a coffee, stay for a
            considered manicure — we'd love to meet you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Studio</p>
                  <p className="mt-1 text-foreground">Markveien 12, 0554 Oslo</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 size-5 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Phone</p>
                  <p className="mt-1 text-foreground">+47 22 00 00 00</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 size-5 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="eyebrow">Email</p>
                  <p className="mt-1 text-foreground">hello@nordnails.no</p>
                </div>
              </li>
            </ul>

            <div>
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-foreground" strokeWidth={1.5} />
                <p className="eyebrow">Hours</p>
              </div>
              <table className="mt-4 w-full border-t border-foreground">
                <tbody>
                  {hours.map(([d, h]) => (
                    <tr key={d} className="border-b border-border">
                      <td className="py-3 text-sm text-muted-foreground">{d}</td>
                      <td className="py-3 text-right text-sm font-medium text-foreground">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map to Nord Nails"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.755%2C59.917%2C10.770%2C59.925&layer=mapnik&marker=59.921%2C10.7625"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="eyebrow" htmlFor="name">Name</label>
              <Input
                id="name"
                required
                className="mt-2 h-12 rounded-none border-0 border-b border-foreground bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="eyebrow" htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                required
                className="mt-2 h-12 rounded-none border-0 border-b border-foreground bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="eyebrow" htmlFor="message">Message</label>
              <Textarea
                id="message"
                required
                rows={5}
                className="mt-2 rounded-none border-0 border-b border-foreground bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </div>
            <Button
              type="submit"
              className="h-12 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
            >
              {sent ? "Thank you — we'll be in touch" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
