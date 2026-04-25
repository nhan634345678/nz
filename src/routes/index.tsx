import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nord Nails — Minimalist Nail Studio in Oslo" },
      {
        name: "description",
        content:
          "A Scandinavian nail studio for considered manicures and quiet rituals. Book your appointment at Nord Nails, Oslo.",
      },
      { property: "og:title", content: "Nord Nails — Minimalist Nail Studio in Oslo" },
      {
        property: "og:description",
        content: "Considered manicures and quiet rituals in central Oslo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
