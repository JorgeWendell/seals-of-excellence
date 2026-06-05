import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import { NotFound } from "@/components/not-found";
import { HomePage } from "@/pages/home";
import { EmpresaPage } from "@/pages/empresa";
import { ServicosPage } from "@/pages/servicos";
import { ContatoPage } from "@/pages/contato";
import { ProdutosPage } from "@/pages/produtos";
import { ProdutosCategoriaPage } from "@/pages/produtos-categoria";
import { ProdutosTipoPage } from "@/pages/produtos-tipo";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="empresa" element={<EmpresaPage />} />
        <Route path="servicos" element={<ServicosPage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="produtos" element={<ProdutosPage />} />
        <Route path="produtos/:slug" element={<ProdutosCategoriaPage />} />
        <Route path="produtos/:slug/:tipo" element={<ProdutosTipoPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
