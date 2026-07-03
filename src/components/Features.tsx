import { Radio, Orbit, Layers } from "lucide-react";

const items = [
  {
    Icon: Radio,
    title: "instant share",
    body: "tap your ring to any NFC-enabled device to share your profile instantly",
  },
  {
    Icon: Orbit,
    title: "track connections",
    body: "visualize and manage your circles. never lose another connection",
  },
  {
    Icon: Layers,
    title: "all-in-one",
    body: "LinkedIn, Instagram, X, email, phone, Venmo — all in one place",
  },
];

export function Features() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {items.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur transition-colors hover:border-mint/40"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-mint/10 text-mint">
              <Icon className="h-7 w-7" strokeWidth={2} />
            </div>
            <h3 className="mb-3 text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
