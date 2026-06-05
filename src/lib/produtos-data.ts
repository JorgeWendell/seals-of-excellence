import { Cog, Layers, Shield, Disc3, Package, type LucideIcon } from "lucide-react";

export type Categoria = {
  slug: string;
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  tipos: string[];
};

export const categorias: Categoria[] = [
  {
    slug: "selos-mecanicos-simples",
    icon: Layers,
    titulo: "Selos Mecânicos Simples",
    descricao: "Vedação confiável para aplicações industriais convencionais.",
    tipos: [
      "Tipo 27", "Tipo 31/32", "Tipo 42", "Tipo 49", "Tipo 49B",
      "Tipo 50", "Tipo 50B", "Tipo 51", "Tipo 51B", "Tipo 53",
      "Tipo 53B", "Tipo 54/54B", "Tipo 58/58B", "Tipo 84/85",
      "Tipo 94", "Tipo 100", "Tipo 107",
    ],
  },
  {
    slug: "selos-mecanico-cartucho",
    icon: Cog,
    titulo: "Selos Mecânico Cartucho",
    descricao: "Montagem rápida e segura, ideais para manutenção em campo.",
    tipos: [],
  },
  {
    slug: "protetor-de-mancal",
    icon: Shield,
    titulo: "Protetor de Mancal",
    descricao: "Proteção contra contaminação e prolongamento da vida útil dos mancais.",
    tipos: [],
  },
  {
    slug: "maquina-lapidadora",
    icon: Disc3,
    titulo: "Maquina Lapidadora",
    descricao: "Equipamentos para lapidação de faces de selos com alta precisão.",
    tipos: [],
  },
  {
    slug: "produtos-diversos",
    icon: Package,
    titulo: "Produtos Diversos",
    descricao: "Faces, molas, anéis, elastômeros e componentes de reposição.",
    tipos: [],
  },
];

export const getCategoria = (slug: string) =>
  categorias.find((c) => c.slug === slug);

export const tipoSlug = (tipo: string) =>
  tipo
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const getTipo = (slug: string, tipoSlugStr: string) => {
  const cat = getCategoria(slug);
  if (!cat) return undefined;
  const nome = cat.tipos.find((t) => tipoSlug(t) === tipoSlugStr);
  return nome ? { categoria: cat, nome } : undefined;
};

<<<<<<< HEAD
/** URL do PDF em public/pdfs/{tipo-slug}.pdf (ex: public/pdfs/tipo-27.pdf) */
export const pdfHref = (tipoSlugStr: string) => `/pdfs/${tipoSlugStr}.pdf`;

export const pdfDownloadName = (nome: string) =>
  `${tipoSlug(nome)}-catalogo.pdf`;
=======
export const pdfHref = (catSlug: string, tipoSlugStr: string) =>
  `/pdfs/${catSlug}/${tipoSlugStr}.pdf`;
>>>>>>> c7088708e7d473ddc0affa4f734a02390af123a7
