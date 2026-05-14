import { createFileRoute } from "@tanstack/react-router";
import { Cog, Layers, Shield, Disc3, Package } from "lucide-react";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Selos Mecânicos | APC Seal" },
      { name: "description", content: "Linha completa de selos mecânicos: cartucho, simples, duplos, para bombas, agitadores e equipamentos rotativos." },
    ],
  }),
  component: Produtos,
});

const produtos = [
  { icon: Layers, t: "Selos Mecânicos Simples", d: "Vedação confiável para aplicações industriais convencionais." },
  { icon: Cog, t: "Selos Mecânico Cartucho", d: "Montagem rápida e segura, ideais para manutenção em campo." },
  { icon: Shield, t: "Protetor de Mancal", d: "Proteção contra contaminação e prolongamento da vida útil dos mancais." },
  { icon: Disc3, t: "Maquina Lapidadora", d: "Equipamentos para lapidação de faces de selos com alta precisão." },
  { icon: Package, t: "Produtos Diversos", d: "Faces, molas, anéis, elastômeros e componentes de reposição." },
];

function Produtos() {
  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">Produtos</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase font-bold text-foreground">Linha completa de selos mecânicos</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Engenharia, materiais e acabamento para vedação confiável em qualquer segmento industrial.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((p) => (
            <article key={p.t} className="group bg-card border border-border rounded-lg p-7 hover:border-primary hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-primary to-accent-red text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display uppercase text-lg font-bold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
