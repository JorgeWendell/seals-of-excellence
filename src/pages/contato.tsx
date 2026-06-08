import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { whatsAppUrl } from "@/lib/whatsapp";
import { usePageMeta } from "@/lib/use-page-meta";

export function ContatoPage() {
  usePageMeta({
    title: "Contato — APC Seal | Selos Mecânicos",
    description:
      "Fale com a APC Seal. Atendimento técnico especializado em selos mecânicos para todo o Brasil.",
  });

  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">
            Contato
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase font-bold text-foreground">
            Fale com nossos especialistas
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Conte sua aplicação. Retornamos com a melhor solução em vedação para seu equipamento.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {[
                { icon: Phone, t: "Telefone", v: "(11) 4178-3655" },
                { icon: Mail, t: "E-mail", v: "contato@duolapbombas.com.br" },
                {
                  icon: MapPin,
                  t: "Endereço",
                  v: "Rua Fábio da Silva Prado, 525 Vola Flórida, SBC - SP",
                },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display uppercase text-sm tracking-wider text-muted-foreground">
                      {c.t}
                    </div>
                    <div className="font-semibold text-foreground">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={whatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 text-accent-red-foreground px-6 py-4 rounded-md font-display font-semibold uppercase tracking-wider text-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <form
            className="bg-card border border-border rounded-lg p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-semibold text-foreground">Nome</label>
              <input className="mt-1 w-full border border-border rounded-md px-4 py-3 bg-background outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">E-mail</label>
              <input
                type="email"
                className="mt-1 w-full border border-border rounded-md px-4 py-3 bg-background outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Empresa</label>
              <input className="mt-1 w-full border border-border rounded-md px-4 py-3 bg-background outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Mensagem</label>
              <textarea
                rows={5}
                className="mt-1 w-full border border-border rounded-md px-4 py-3 bg-background outline-none focus:border-primary"
              />
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display uppercase tracking-wider text-sm font-semibold py-4 rounded-md transition">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
