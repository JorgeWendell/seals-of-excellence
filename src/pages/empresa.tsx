import { Target, Eye, Heart } from "lucide-react";
import { usePageMeta } from "@/lib/use-page-meta";

export function EmpresaPage() {
  usePageMeta({
    title: "A Empresa — APC Seal | 41 anos em selos mecânicos",
    description:
      "Conheça a APC Seal: 41 anos de tradição em fabricação e recondicionamento de selos mecânicos para a indústria brasileira.",
  });

  return (
    <div className="bg-background">
      <section className="bg-industrial-dark text-industrial-dark-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">
            Empresa
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase font-bold">
            Quem é a APC Seal
          </h1>
          <p className="mt-5 max-w-3xl text-industrial-dark-foreground/80">
            Há 41 anos no mercado, a APC Seal é referência nacional em selos mecânicos. Combinamos
            engenharia de precisão, materiais de alta performance e atendimento técnico
            especializado para garantir vedação confiável a equipamentos críticos da indústria.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              t: "Missão",
              d: "Entregar soluções de vedação que aumentem a confiabilidade e a produtividade dos nossos clientes.",
            },
            {
              icon: Eye,
              t: "Visão",
              d: "Ser a marca de referência em selos mecânicos no Brasil, reconhecida pela engenharia e pelo atendimento.",
            },
            {
              icon: Heart,
              t: "Valores",
              d: "Compromisso, qualidade comprovada, parceria de longo prazo e melhoria contínua.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display uppercase text-xl font-bold text-foreground">
                {b.t}
              </h3>
              <p className="mt-3 text-muted-foreground text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl uppercase font-bold text-foreground">
            Uma história de 41 anos
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              <span className="font-bold text-primary">1983</span> — Iniciou suas atividades com o
              nome de Duoll Comércio, Representações e Assessoria de Equipamentos Ltda.
            </p>
            <p>
              <span className="font-bold text-primary">1985</span> — A razão social passa ser
              DU-O-LAP Renovadora de Selos Mecânicos e Lapidação Industrial Ltda.
            </p>
            <p>
              <span className="font-bold text-primary">1989</span> — A razão social passa a ser
              DU-O-LAP INDÚSTRIA E COMÉRCIO LTDA.
            </p>
            <p>
              <span className="font-bold text-primary">1990</span> — A empresa passa a funcionar na
              sede atual, Rua Fabio da Silva Prado, 521 – SBCampo/SP.
            </p>
            <p>
              <span className="font-bold text-primary">1993</span> — A empresa passa a funcionar na
              sede atual, Rua Fabio da Silva Prado, 521 – SBCampo/SP.
            </p>
            <p>
              <span className="font-bold text-primary">1990</span> — A DU-O-LAP faz 10 anos de
              empresa consolidada.
            </p>
            <p>
              <span className="font-bold text-primary">1995</span> — Os sócios resolvem constituir
              uma filial, na área de prestação de serviços, situada na cidade de Paranaguá/PR.
            </p>
            <p>
              <span className="font-bold text-primary">1998</span> — A DU-O-LAP completa 15 anos.
            </p>
            <p>
              <span className="font-bold text-primary">2003</span> — A empresa completa 20 anos no
              mercado de vedação industrial.
            </p>
            <p>
              <span className="font-bold text-primary">2008</span> — DU-O-LAP – 25 ANOS.
            </p>
            <p>
              <span className="font-bold text-primary">2009</span> — Aprovada na certificação da ISO
              9001 versão 2008.
            </p>
            <p>
              <span className="font-bold text-primary">2010</span> — Homologada pela Petrobras como
              primeiro fabricante nacional de Selos Mecânicos
            </p>
            <p>
              <span className="font-bold text-accent-red">2011</span> — APC Seal passa a representar
              a logomarca Du-o-Lap.
            </p>
            <p>
              <span className="font-bold text-accent-red">Hoje</span> — Atendemos clientes em todo o
              Brasil com engenharia de aplicação dedicada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
