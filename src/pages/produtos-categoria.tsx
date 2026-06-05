import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { getCategoria, tipoSlug } from "@/lib/produtos-data";
import { usePageMeta } from "@/lib/use-page-meta";
import { NotFound } from "@/components/not-found";

export function ProdutosCategoriaPage() {
  const { slug = "" } = useParams();
  const categoria = getCategoria(slug);
  const [query, setQuery] = useState("");

  usePageMeta({
    title: `${categoria?.titulo ?? "Produto"} | APC Seal`,
    description: categoria?.descricao ?? "",
  });

  const tipos = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categoria?.tipos ?? [];
    return (categoria?.tipos ?? []).filter((t: string) => t.toLowerCase().includes(q));
  }, [categoria, query]);

  if (!categoria) return <NotFound />;

  const Icon = categoria.icon;

  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar aos produtos
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary to-accent-red text-primary-foreground flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">
                Produtos
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl uppercase font-bold text-foreground">
                {categoria.titulo}
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{categoria.descricao}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoria.tipos.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">
                Linha em atualização. Entre em contato para consultar disponibilidade.
              </p>
              <Link to="/contato" className="mt-4 inline-block text-primary font-semibold">
                Falar com a APC Seal
              </Link>
            </div>
          ) : (
            <>
              <div className="max-w-md relative mb-8">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar tipo nesta categoria..."
                  className="w-full pl-12 pr-4 py-3 rounded-md bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                />
              </div>

              {tipos.length === 0 ? (
                <p className="text-muted-foreground">Nenhum tipo encontrado para "{query}".</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tipos.map((tipo: string) => (
                    <Link
                      key={tipo}
                      to={`/produtos/${slug}/${tipoSlug(tipo)}`}
                      className="bg-card border border-border rounded-lg p-5 hover:border-primary hover:shadow-md transition flex items-center justify-between gap-2 group"
                    >
                      <span className="font-display uppercase font-bold text-foreground">
                        {tipo}
                      </span>
                      <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition">
                        Ver →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
