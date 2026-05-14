import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { getTipo, pdfHref } from "@/lib/produtos-data";

export const Route = createFileRoute("/produtos/$slug/$tipo")({
  beforeLoad: ({ params }) => {
    if (!getTipo(params.slug, params.tipo)) throw notFound();
  },
  head: ({ params }) => {
    const found = params ? getTipo(params.slug, params.tipo) : undefined;
    return {
      meta: [
        { title: `${found?.nome ?? "Produto"} | APC Seal` },
        {
          name: "description",
          content: found
            ? `${found.nome} — ${found.categoria.titulo}. Especificações técnicas e download do catálogo em PDF.`
            : "",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-3xl uppercase">Produto não encontrado</h1>
      <Link to="/produtos" className="mt-6 inline-block text-primary font-semibold">
        Voltar aos produtos
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: TipoPage,
});

function TipoPage() {
  const { slug, tipo } = Route.useParams();
  const found = getTipo(slug, tipo);
  if (!found) return null;
  const { categoria, nome } = found;
  const pdf = pdfHref(slug, tipo);

  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/produtos/$slug"
            params={{ slug }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para {categoria.titulo}
          </Link>
          <span className="mt-6 block font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">
            {categoria.titulo}
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl uppercase font-bold text-foreground">
            {nome}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Selo mecânico {nome} — projetado para vedação confiável em aplicações industriais.
            Consulte o catálogo completo para dimensões, materiais e condições operacionais.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-7">
              <h2 className="font-display uppercase text-xl font-bold text-foreground">
                Características
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Vedação primária por faces de carbeto/cerâmica</li>
                <li>Construção balanceada / não-balanceada conforme aplicação</li>
                <li>Elastômeros disponíveis: NBR, EPDM, FKM (Viton®), FFKM</li>
                <li>Adequado a bombas centrífugas, agitadores e misturadores</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-7">
              <h2 className="font-display uppercase text-xl font-bold text-foreground">
                Aplicações típicas
              </h2>
              <p className="mt-3 text-muted-foreground">
                Indústrias química, petroquímica, papel e celulose, alimentícia, farmacêutica
                e tratamento de água. Para condições especiais (alta pressão, alta temperatura
                ou fluidos abrasivos), entre em contato para dimensionamento.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-7">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="font-display uppercase font-bold text-foreground">
                  Catálogo PDF
                </h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Baixe o catálogo técnico completo do {nome} com desenhos, dimensões e
                tabela de materiais.
              </p>
              <a
                href={pdf}
                download
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-primary to-accent-red text-primary-foreground font-semibold uppercase tracking-wide text-sm hover:opacity-95 transition"
              >
                <Download className="w-4 h-4" /> Baixar PDF
              </a>
            </div>

            <Link
              to="/contato"
              className="block text-center bg-card border border-border rounded-lg p-5 hover:border-primary transition text-sm font-semibold text-primary"
            >
              Solicitar cotação
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
