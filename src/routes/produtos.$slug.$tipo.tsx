import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { getTipo, pdfHref } from "@/lib/produtos-data";

// Descrição específica por tipo. Chave = nome exato do tipo (ex: "Tipo 27").
// Edite/adicione textos aqui conforme necessário.
const DESCRICOES: Record<string, string> = {
  "Tipo 27": "Selo mecânico Tipo 27 — descrição específica deste produto.",
  "Tipo 31/32": "Selo mecânico Tipo 31/32 — descrição específica deste produto.",
  "Tipo 42": "Selo mecânico Tipo 42 — descrição específica deste produto.",
  "Tipo 49": "Selo mecânico Tipo 49 — descrição específica deste produto.",
  "Tipo 49B": "Selo mecânico Tipo 49B — descrição específica deste produto.",
  "Tipo 50": "Selo mecânico Tipo 50 — descrição específica deste produto.",
  "Tipo 50B": "Selo mecânico Tipo 50B — descrição específica deste produto.",
  "Tipo 51": "Selo mecânico Tipo 51 — descrição específica deste produto.",
  "Tipo 51B": "Selo mecânico Tipo 51B — descrição específica deste produto.",
  "Tipo 53": "Selo mecânico Tipo 53 — descrição específica deste produto.",
  "Tipo 53B": "Selo mecânico Tipo 53B — descrição específica deste produto.",
  "Tipo 54/54B": "Selo mecânico Tipo 54/54B — descrição específica deste produto.",
  "Tipo 58/58B": "Selo mecânico Tipo 58/58B — descrição específica deste produto.",
  "Tipo 84/85": "Selo mecânico Tipo 84/85 — descrição específica deste produto.",
  "Tipo 94": "Selo mecânico Tipo 94 — descrição específica deste produto.",
  "Tipo 100": "Selo mecânico Tipo 100 — descrição específica deste produto.",
  "Tipo 107": "Selo mecânico Tipo 107 — descrição específica deste produto.",
};

// Foto do produto. Chave = nome exato do tipo. Coloque os arquivos em /public/produtos/
// (ex: public/produtos/tipo-27.jpg) e referencie como "/produtos/tipo-27.jpg".
const IMAGENS: Record<string, string> = {
  "Tipo 27": "/produtos/tipo-27.jpg",
  "Tipo 31/32": "/produtos/tipo-31-32.jpg",
  "Tipo 42": "/produtos/tipo-42.jpg",
  "Tipo 49": "/produtos/tipo-49.jpg",
  "Tipo 49B": "/produtos/tipo-49b.jpg",
  "Tipo 50": "/produtos/tipo-50.jpg",
  "Tipo 50B": "/produtos/tipo-50b.jpg",
  "Tipo 51": "/produtos/tipo-51.jpg",
  "Tipo 51B": "/produtos/tipo-51b.jpg",
  "Tipo 53": "/produtos/tipo-53.jpg",
  "Tipo 53B": "/produtos/tipo-53b.jpg",
  "Tipo 54/54B": "/produtos/tipo-54-54b.jpg",
  "Tipo 58/58B": "/produtos/tipo-58-58b.jpg",
  "Tipo 84/85": "/produtos/tipo-84-85.jpg",
  "Tipo 94": "/produtos/tipo-94.jpg",
  "Tipo 100": "/produtos/tipo-100.jpg",
  "Tipo 107": "/produtos/tipo-107.jpg",
};

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
            {DESCRICOES[nome] ??
              `Selo mecânico ${nome} — projetado para vedação confiável em aplicações industriais. Consulte o catálogo completo para dimensões, materiais e condições operacionais.`}
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
