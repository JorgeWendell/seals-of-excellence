import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { getTipo, pdfDownloadName, pdfHref } from "@/lib/produtos-data";
import { cotacaoMessage, whatsAppUrl } from "@/lib/whatsapp";
import { usePageMeta } from "@/lib/use-page-meta";
import { NotFound } from "@/components/not-found";

const DESCRICOES: Record<string, string> = {
  "Tipo 27":
    "Selo Du-O-Lap tipo 27 é não balanceado, com Fole de Elastômero e de mola única. Sua mola protegida impede qualquer tipo de travamento do selo mecânico e o acúmulo de resíduos. Indicado especialmente para as indústrias alimentícias e farmacêuticas.",
  "Tipo 31/32":
    "Selo mecânico Tipo 31/32 — Selos  Du-O-Lap tipo 31 e tipo 32 são projetados para atuar em condições de extrema corrosão e situações similares, com concentrações de ácidos, sais e compostos orgânicos. Indicado para aplicação em produtos químicos, com alto índice de corrosão.",
  "Tipo 42":
    "Selo mecânico Tipo 42 — Selo Du-O-Lap tipo 42 com Fole de Elastômero, é indicado para equipamentos rotivaivos no geral, como bombas, compressores, misturadores, resfriadores e agitadores. Aplicado nas indústrias alimentícias, petroquímicas, de papel e celulose e águas residuais.",
  "Tipo 49":
    "Selo mecânico Tipo 49 — Selo Du-O-Lap tipo 49 com fole de elastômero, é indicado para equipamentos rotativos, como bombas, compressores, misturadores, resfriadores e agitadores. Aplicado nas indústrias alimentícias, petroquímicas, químicas, papel e celulose e de águas residuais.",
  "Tipo 49B":
    "Selo mecânico Tipo 49B — Selo Du-O-Lap balanceado tipo 49B com fole de elastômero, é indicado para equipamentos rotativos em geral (bombas, compressores, misturadores). Aplicado nas indústrias alimentícias, petroquímicas, químicas, papel e celulose e de águas residuais.",
  "Tipo 50":
    "Selo mecânico Tipo 50 — Selo Du-O-Lap tipo 50 com fole de elastômero, é indicado para bombas, compressores, misturadores, resfriadores e outros equipamentos rotativos. Aplicado em processos alimentícios, petroquímicos, químicos,papel e celulose e águas residuais",
  "Tipo 50B":
    "Selo mecânico Tipo 50B — Selo Du-O-Lap tipo 50B com fole de elastômero, é indicado para bombas, compressores, misturadores, resfriadores e outros equipamentos rotativos. Aplicado em processos alimentícios, petroquímicos, químicos,papel e celulose e águas residuais",
  "Tipo 51":
    "Selo mecânico Tipo 51 — Selo Du-O-Lap tipo 51 é deslizante com molas múltiplas, para bombas centrífugas, compressores, misturadores, resfriadores, agitadores e outros equipamentos de eixo rotativo. Manuseiam satisfatoriamente todos os produtos  químicos.",
  "Tipo 51B":
    "Selo mecânico Tipo 51B — Selo Du-O-Lap tipo 51B é deslizante com molas múltiplas, para bombas centrífugas, compressores, misturadores, resfriadores, agitadores e outros equipamentos de eixo rotativo. Manuseiam satisfatoriamente todos os produtos  químicos.",
  "Tipo 53":
    "Selo mecânico Tipo 53 — Selo Du-O-Lap tipo 53 é deslizante com molas múltiplas. Indicado para bombas, compressores, misturadores e outros equipamentos rotativos. Manuseiam satisfatoriamente produtos químicos. Ideal para montagem em caixas de selagem menores.",
  "Tipo 53B":
    "Selo mecânico Tipo 53B — Selo Du-O-Lap tipo 53B é deslizante com molas múltiplas. Indicado para bombas, compressores, misturadores e outros equipamentos rotativos. Manuseiam satisfatoriamente produtos químicos. Ideal para montagem em caixas de selagem menores.",
  "Tipo 54/54B":
    "Selo mecânico Tipo 54/54B — Selo Du-O-Lap tipo 54/54B é deslizante com molas múltiplas, podendo ser ou não balanceado. Indicado para bombas centrífugas, compressores, misturadores, resfriadores, agitadores e outros equipamentos de eixo rotativo. Ideal para processos com produtos químicos.",
  "Tipo 58/58B":
    "Selo mecânico Tipo 58/58B — Selo Du-O-Lap tipo 58/58B é deslizante com molas múltiplas, podendo ser ou não balanceado. Indicado para bombas centrífugas, compressores, misturadores, resfriadores, agitadores e outros equipamentos de eixo rotativo. Ideal para processos com produtos químicos..",
  "Tipo 84/85":
    "Selo mecânico Tipo 84/85 — Selo Du-O-Lap tipo 84/85  é não balanceado, de mola única e de aplicação simples. Geralmente usados em bombas centrífugas e misturadores. Os materiais são selecionados de acordo com as características físico químicas do produto a ser selado.",
  "Tipo 94":
    "Selo mecânico Tipo 94 — Selo  Du-O-Lap tipo 94 é de mola única e cônica. Ideal para trabalho com produtos viscosos em bombas, compressores, misturadores, resfriadores, agitadores e outros equipamentos rotativos, nas indústrias química, petroquímica, papel e celulose e de águas residuais.",
  "Tipo 100":
    "Selo mecânico Tipo 100 — Selo Du-O-Lap tipo 100 com Fole de Elastômero, tem a face conduzida através da mola e anéis em L, com modelos de sede G4, G9 e G60. Um dos mais utilizados devido à sua versatilidade e eficácia. Recomendado para aplicações em águas residuais e esgotos.",
  "Tipo 107":
    "Selo mecânico Tipo 107 — Selo Du-O-Lap tipo 107 é deslizante com molas múltiplas. Projetado para aplicações cotidianas nos mais variados tipos de equipamentos rotativos. Ideal para as indústrias alimentícias, petroquímicas, químicas, de papel e celulose e águas residuais.",
};

const IMAGENS: Record<string, string> = {
  "Tipo 27": "/produtos/tipo-27.png",
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

export function ProdutosTipoPage() {
  const { slug = "", tipo = "" } = useParams();
  const found = getTipo(slug, tipo);

  usePageMeta({
    title: `${found?.nome ?? "Produto"} | APC Seal`,
    description: found
      ? `${found.nome} — ${found.categoria.titulo}. Especificações técnicas e download do catálogo em PDF.`
      : "",
  });

  if (!found) return <NotFound />;

  const { categoria, nome } = found;
  const pdf = pdfHref(tipo);
  const pdfFilename = pdfDownloadName(nome);
  const whatsappCotacao = whatsAppUrl(cotacaoMessage(nome, categoria.titulo));

  return (
    <div className="bg-background">
      <section className="py-16 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to={`/produtos/${slug}`}
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
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center aspect-[4/3]">
              {IMAGENS[nome] ? (
                <img
                  src={IMAGENS[nome]}
                  alt={`Foto do selo mecânico ${nome}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm text-muted-foreground p-8 text-center">
                  Foto do {nome} em breve
                </span>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-7">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="font-display uppercase font-bold text-foreground">Catálogo PDF</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Baixe o catálogo técnico completo do {nome} com desenhos, dimensões e tabela de
                materiais.
              </p>
              <a
                href={pdf}
                download={pdfFilename}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-primary to-accent-red text-primary-foreground font-semibold uppercase tracking-wide text-sm hover:opacity-95 transition"
              >
                <Download className="w-4 h-4" /> Baixar PDF
              </a>
            </div>

            <a
              href={whatsappCotacao}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-card border border-border rounded-lg p-5 hover:border-primary transition text-sm font-semibold text-primary"
            >
              Solicitar cotação
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
