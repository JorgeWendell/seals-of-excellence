import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-apc.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/empresa", label: "Empresa" },
  { to: "/produtos", label: "Produtos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="APC Seal — Selos Mecânicos" className="h-14 w-14 object-contain" width={56} height={56} />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-primary">APC <span className="text-accent-red">SEAL</span></div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-semibold">SELOS MECÂNICOS</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary border-b-2 border-accent-red" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="font-display text-sm font-semibold uppercase tracking-wider pb-1 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-md font-display font-semibold uppercase tracking-wide text-sm transition-colors shadow-elegant"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <MessageCircle className="w-4 h-4" /> Fale Conosco
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display font-semibold uppercase tracking-wider text-sm text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
