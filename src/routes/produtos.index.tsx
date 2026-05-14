import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { categorias, tipoSlug } from "@/lib/produtos-data";

export const Route = createFileRoute("/produtos/")({
  head: () => ({
    meta: [
      { title: "Produtos — Selos Mecânicos | APC Seal" },
      { name: "description", content: "Linha completa de selos mecânicos: simples, cartucho, protetor de mancal, máquina lapidadora e produtos diversos." },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  const [query, setQuery] = useState("");

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return categorias.flatMap((cat) =>
      cat.tipos
        .filter((t) => t.toLowerCase().includes(q))
        .map((tipo) => ({ tipo, cat })),
    );
  }, [query]);

  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">Produtos</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase font-bold text-foreground">Linha completa de selos mecânicos</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Engenharia, materiais e acabamento para vedação confiável em qualquer segmento industrial.</p>

          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar tipo (ex: Tipo 49, Tipo 100...)"
              className="w-full pl-12 pr-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
            />
            {query && (
              <div className="mt-3 bg-card border border-border rounded-md max-h-72 overflow-y-auto shadow-lg">
                {resultados.length === 0 ? (
                  <p className="p-4 text-sm text-muted-foreground">Nenhum tipo encontrado.</p>
                ) : (
                  resultados.map(({ tipo, cat }) => (
                    <Link
                      key={`${cat.slug}-${tipo}`}
                      to="/produtos/$slug/$tipo"
                      params={{ slug: cat.slug, tipo: tipoSlug(tipo) }}
                      className="flex items-center justify-between px-4 py-3 hover:bg-secondary border-b border-border last:border-0 transition"
                    >
                      <span className="font-medium text-foreground">{tipo}</span>
                      <span className="text-xs text-muted-foreground">{cat.titulo}</span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((p) => (
            <Link
              key={p.slug}
              to="/produtos/$slug"
              params={{ slug: p.slug }}
              className="group bg-card border border-border rounded-lg p-7 hover:border-primary hover:shadow-xl transition flex flex-col"
            >
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-primary to-accent-red text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display uppercase text-lg font-bold text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.descricao}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Ver produtos <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
