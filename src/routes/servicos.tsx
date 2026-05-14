import { createFileRoute } from "@tanstack/react-router";
import { Settings, RefreshCcw, ClipboardCheck, Users } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Engenharia em vedação | APC Seal" },
      { name: "description", content: "Recondicionamento, engenharia de aplicação, assistência técnica e treinamento em selos mecânicos." },
    ],
  }),
  component: Servicos,
});

const servicos = [
  { icon: RefreshCcw, t: "Recondicionamento", d: "Recuperação de selos com qualidade de fábrica e prazo reduzido." },
  { icon: Settings, t: "Engenharia de Aplicação", d: "Seleção e dimensionamento do selo ideal para sua operação." },
  { icon: ClipboardCheck, t: "Assistência Técnica", d: "Inspeção em campo, análise de falhas e recomendações." },
  { icon: Users, t: "Treinamento", d: "Capacitação de equipes de manutenção em vedação industrial." },
];

function Servicos() {
  return (
    <div className="bg-background">
      <section className="py-16 bg-industrial-dark text-industrial-dark-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">Serviços</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase font-bold">Suporte técnico do projeto à manutenção</h1>
          <p className="mt-4 max-w-2xl text-industrial-dark-foreground/80">Mais que fornecedor — somos parceiros de engenharia da sua planta industrial.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {servicos.map((s) => (
            <article key={s.t} className="bg-card border border-border rounded-lg p-8 flex gap-5 hover:shadow-xl transition">
              <div className="w-14 h-14 shrink-0 rounded-md bg-accent-red/10 text-accent-red flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display uppercase text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
