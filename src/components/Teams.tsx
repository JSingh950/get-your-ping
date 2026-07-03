const items = [
  {
    title: "Onboard your team",
    body: "Create a workspace, invite your reps with a single link, and connect your stack. A guided setup gets everyone live in minutes — no IT, no migration.",
  },
  {
    title: "Total visibility on warm leads",
    body: "See who on the team is pinging who, which prospects are warming up, and exactly where every relationship sits in the process — so no lead falls between reps.",
  },
  {
    title: "Integrate any tool",
    body: "Push the people you meet straight into the systems your team lives in. Connect once and the context flows where the work already happens.",
  },
];

const integrations = ["Salesforce", "HubSpot", "Notion", "Granola", "Gmail", "Outlook", "Google Calendar"];

export function Teams() {
  return (
    <section id="teams" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground">FOR TEAMS</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          One workspace for your whole team's network.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Bring your sales team into a shared space where every connection a rep makes becomes a warm lead the whole team can see, own, and move forward — wired into the tools you already run on.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur">
              <h3 className="mb-3 text-lg font-bold">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs tracking-[0.25em] text-muted-foreground">INTEGRATES WITH</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {integrations.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-lg font-bold">
                {name[0]}
              </div>
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#team-setup" className="rounded-full bg-mint px-8 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_30px_-5px_var(--mint)] transition-transform hover:scale-105">
            Set up your team
          </a>
        </div>
      </div>
    </section>
  );
}
