import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Teams } from "@/components/Teams";
import { Signup } from "@/components/Signup";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ping! — the future of networking" },
      {
        name: "description",
        content:
          "A smart NFC ring and app that turn every handshake into a living, visual network. Instant share, track connections, all-in-one.",
      },
      { property: "og:title", content: "ping! — the future of networking" },
      {
        property: "og:description",
        content:
          "A smart NFC ring and app that turn every handshake into a living, visual network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Teams />
        <About />
        <Signup />
        <Footer />
      </div>
    </main>
  );
}
