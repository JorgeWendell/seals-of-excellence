import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-industrial-dark text-industrial-dark-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">
            APC <span className="text-accent-red">SEAL</span>
          </div>
          <p className="mt-3 text-sm text-industrial-dark-foreground/70 max-w-xs">
            41 anos fabricando, recondicionando e fornecendo selos mecânicos de alta performance
            para a indústria brasileira.
          </p>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-wider text-sm mb-4 text-accent-red">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/empresa"
                className="hover:text-primary-foreground/100 text-industrial-dark-foreground/70"
              >
                Empresa
              </Link>
            </li>
            <li>
              <Link
                to="/produtos"
                className="hover:text-primary-foreground/100 text-industrial-dark-foreground/70"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className="hover:text-primary-foreground/100 text-industrial-dark-foreground/70"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="hover:text-primary-foreground/100 text-industrial-dark-foreground/70"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-wider text-sm mb-4 text-accent-red">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-industrial-dark-foreground/80">
            <li className="flex items-start gap-2" suppressHydrationWarning>
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />{" "}
              <span suppressHydrationWarning>(00) 0000-0000</span>
            </li>
            <li className="flex items-start gap-2" suppressHydrationWarning>
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />{" "}
              <a href="mailto:contato@apcseal.com.br" suppressHydrationWarning>
                contato@apcseal.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Brasil — Atendimento nacional
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-industrial-dark-foreground/60">
        © {new Date().getFullYear()} APC Seal — Selos Mecânicos. Todos os direitos reservados. By
        Adel Systems
      </div>
    </footer>
  );
}
