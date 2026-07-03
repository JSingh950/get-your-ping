export function Hero() {
  const words = ["connection", "networking", "relationships", "CRM's"];
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24">
      {/* Floating ring visual */}
      <div className="relative mb-4 flex h-[380px] w-full items-center justify-center">
        <div
          className="absolute h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--mint) 35%, transparent) 0%, transparent 55%)",
            animation: "ring-glow 6s ease-in-out infinite",
          }}
        />
        <div
          className="relative"
          style={{ animation: "ring-float 6s ease-in-out infinite" }}
        >
          <div
            className="h-40 w-28 rounded-[45%] border-[10px] shadow-2xl"
            style={{
              borderColor: "oklch(0.12 0.01 160)",
              background:
                "linear-gradient(135deg, oklch(0.18 0.01 160), oklch(0.05 0 0))",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.9), 0 0 40px color-mix(in oklab, var(--mint) 20%, transparent)",
            }}
          >
            <div className="mt-4 ml-2 h-1 w-1 rounded-full bg-white/60" />
          </div>
        </div>
      </div>

      <h1 className="text-center text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
        the future of
        <br />
        <span className="text-mint">
          {words[1]}
        </span>
      </h1>

      <div className="mt-10 flex flex-col items-center gap-3">
        <a
          href="#buy"
          className="rounded-full bg-mint px-10 py-4 text-base font-bold text-primary-foreground shadow-[0_0_40px_-5px_var(--mint)] transition-transform hover:scale-105"
        >
          Buy now — $49.99
        </a>
        <a href="#teams" className="text-sm text-muted-foreground hover:text-foreground">
          buying for a team? →
        </a>
        <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground">LIMITED FIRST BATCH</p>

        <a
          href="#app"
          className="mt-4 rounded-full border border-border bg-secondary/40 px-10 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary/70"
        >
          start visualizing your network
        </a>
        <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
          NO RING REQUIRED. UPGRADE ANYTIME.
        </p>
      </div>
    </section>
  );
}
