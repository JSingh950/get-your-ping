import { Sparkles } from "lucide-react";

export function Signup() {
  return (
    <section className="relative px-4 py-24">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto max-w-xl rounded-3xl border border-border/60 bg-card/40 p-10 backdrop-blur"
      >
        <div className="flex items-center justify-center gap-2 text-mint">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-2xl font-bold text-foreground">hear from us</h2>
          <Sparkles className="h-5 w-5" />
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          sign up for early access and exclusive updates
        </p>

        <div className="mt-8 space-y-3">
          {[
            { name: "name", placeholder: "your name" },
            { name: "email", placeholder: "your email", type: "email" },
            { name: "phone", placeholder: "your phone", type: "tel" },
            { name: "source", placeholder: "how did you hear about us?" },
          ].map((f) => (
            <input
              key={f.name}
              type={f.type ?? "text"}
              name={f.name}
              placeholder={f.placeholder}
              className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-mint focus:outline-none"
            />
          ))}
          <button
            type="submit"
            className="w-full rounded-xl bg-mint py-3.5 text-sm font-bold text-primary-foreground shadow-[0_0_30px_-5px_var(--mint)] transition-transform hover:scale-[1.01]"
          >
            join the community
          </button>
        </div>
      </form>
    </section>
  );
}
