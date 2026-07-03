export function Nav() {
  const links = ["ring", "teams", "about", "news"];
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="w-24" />
        <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-black/70 px-2 py-2 backdrop-blur-md">
          {links.slice(0, 2).map((l) => (
            <a key={l} href={`#${l}`} className="rounded-full px-5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
          <a href="#" className="px-3 text-2xl font-black tracking-tight">
            ping<span className="text-mint">!</span>
          </a>
          {links.slice(2).map((l) => (
            <a key={l} href={`#${l}`} className="rounded-full px-5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#signin"
          className="rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--mint)] transition-transform hover:scale-105"
        >
          sign in
        </a>
      </div>
    </header>
  );
}
