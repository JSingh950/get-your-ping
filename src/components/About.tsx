import { Fingerprint, Network, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 text-xs tracking-[0.25em] text-mint">
            <Sparkles className="h-3.5 w-3.5" /> OUR MISSION
          </span>
        </div>
        <h2 className="mt-8 text-center text-5xl font-black md:text-7xl">
          About <span className="text-mint">Ping!</span>
        </h2>
        <p className="mt-6 text-center text-xl text-muted-foreground">
          Built to enhance human connection
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              Icon: Fingerprint,
              title: "The Ring",
              body: "Your digital identity on your finger. A single tap shares your phone number, email, LinkedIn, Instagram, and anything else you choose. No fumbling for phones. No forgetting to follow up. Just seamless, intentional connection.",
            },
            {
              Icon: Network,
              title: "The App",
              body: "Transforms your network into a living universe. Visualize your circles. Track relationship health. Get gentle reminders when you haven't connected with priority people in a while. Because connecting with the right person changes everything.",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/10 text-mint">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/60 bg-card/30 px-8 py-6 text-center backdrop-blur">
          <p className="text-sm">
            The ring is our first step toward a{" "}
            <span className="text-mint">full ecosystem of human connection.</span>
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Ping! was founded on a simple belief:</p>
          <p className="mx-auto mt-3 max-w-3xl text-2xl font-bold md:text-3xl">
            <span className="text-mint">your network is your net worth</span> — and you should be able to see it.
          </p>
        </div>

        <div className="mt-14 grid gap-4 text-center md:grid-cols-4">
          {[
            "Built for students, founders, creators, and connectors",
            "No charging, no Bluetooth — just tap and share",
            "Private, secure, and designed for real-world simplicity",
            "Your network: visual, organized, and in your control",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-border/60 bg-card/30 p-6 text-sm text-muted-foreground backdrop-blur">
              {t}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Launching our first 1,000 rings soon. Join us as we redefine connection.
        </p>
      </div>
    </section>
  );
}
