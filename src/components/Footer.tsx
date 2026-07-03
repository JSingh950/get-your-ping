export function Footer() {
  return (
    <footer className="relative border-t border-border/40 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="text-2xl font-black">
          ping<span className="text-mint">!</span>
        </div>
        <div className="flex gap-3 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Ping. All rights reserved.</p>
      </div>
    </footer>
  );
}
