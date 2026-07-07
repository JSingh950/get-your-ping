export function Hero() {
  return (
    <section id="ring" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(89,255,183,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0)_48%)]" />
      <div className="absolute left-1/2 top-20 h-[720px] w-[1200px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pb-6">
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
            The future of networking
          </p>
          <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
            Ping Ring.
            <span className="block text-white/50">Your digital identity on your finger.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            A single tap shares your phone number, email, LinkedIn, Instagram, X, Venmo, and
            anything else you choose. No fumbling for phones. No forgetting to follow up. Just
            seamless, intentional connection.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#invest"
              className="rounded-full bg-mint px-8 py-4 text-center text-sm font-black text-black shadow-[0_0_50px_-8px_var(--mint)] transition-transform hover:scale-105"
            >
              Buy now · $49.99
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Start visualizing your network
            </a>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/50">
            Limited first batch · No ring required to start
          </p>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-[48px] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))] ring-1 ring-white/10" />
          <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-mint/20 blur-3xl" />
          <div className="absolute left-1/2 top-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.09),rgba(255,255,255,0)_62%)]" />
          <div className="absolute left-1/2 top-20 h-[360px] w-[250px] -translate-x-1/2 rotate-[-18deg] rounded-[48%] border-[26px] border-black bg-gradient-to-br from-white/20 via-zinc-900 to-black shadow-[inset_0_0_40px_rgba(255,255,255,0.12),0_44px_120px_rgba(0,0,0,0.75),0_0_90px_rgba(89,255,183,0.18)]">
            <div className="ml-10 mt-10 h-3 w-3 rounded-full bg-white/55" />
            <div className="absolute -right-8 top-28 h-28 w-28 rounded-full bg-mint/25 blur-2xl" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded-[32px] border border-white/10 bg-black/70 p-5 shadow-2xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold">Ping profile</span>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-black text-black">
                NFC ready
              </span>
            </div>
            <div className="grid gap-3 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.08] px-4 py-3">
                <span>Tap to share</span>
                <span className="text-mint">contact + socials</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/[0.08] px-4 py-3">
                <span>Network map</span>
                <span className="text-mint">living universe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
