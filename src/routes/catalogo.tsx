import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { CATALOGO } from "@/data/catalogo";
import { useState } from "react";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5516999998625&text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20do%20cat%C3%A1logo.";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo de Produtos — Extingue Extintores" },
      { name: "description", content: "Confira nosso catálogo completo de extintores, placas de sinalização, mangueiras, iluminação de emergência e acessórios." },
    ],
  }),
  component: CatalogoCompleto,
});

function CatalogoCompleto() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  // Filtra o catálogo com base na busca e na categoria selecionada
  const catalogoFiltrado = CATALOGO.map((categoria) => {
    // Se a categoria selecionada não for "Todas" e for diferente desta categoria, retornamos vazio
    if (categoriaAtiva !== "Todas" && categoria.categoria !== categoriaAtiva) {
      return { ...categoria, itens: [] };
    }

    // Filtra os itens pela busca
    const itensFiltrados = categoria.itens.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return { ...categoria, itens: itensFiltrados };
  }).filter((categoria) => categoria.itens.length > 0); // Remove categorias que ficaram vazias

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* HEADER DA PÁGINA */}
      <div className="bg-secondary text-secondary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft className="h-4 w-4" /> Voltar para o início
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Catálogo Completo</h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl">
            Explore nossa linha completa de produtos certificados para prevenção e combate a incêndios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-4 md:p-6 border border-border flex flex-col md:flex-row gap-4 justify-between">
          {/* BUSCA */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-muted/50 border-none rounded-xl py-3 pl-12 pr-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>

          {/* FILTRO DE CATEGORIA */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide snap-x">
            <button
              onClick={() => setCategoriaAtiva("Todas")}
              className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                categoriaAtiva === "Todas"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Todas
            </button>
            {CATALOGO.map((cat) => (
              <button
                key={cat.categoria}
                onClick={() => setCategoriaAtiva(cat.categoria)}
                className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  categoriaAtiva === cat.categoria
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.categoria}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LISTA DE PRODUTOS */}
      <div className="container mx-auto px-4 mt-12 space-y-16">
        {catalogoFiltrado.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Nenhum produto encontrado com "{busca}".</p>
            <button onClick={() => setBusca("")} className="mt-4 text-primary font-semibold hover:underline">
              Limpar busca
            </button>
          </div>
        ) : (
          catalogoFiltrado.map((categoria) => (
            <section key={categoria.categoria}>
              <h2 className="font-display text-3xl font-bold text-secondary mb-8 border-b border-border pb-4">
                {categoria.categoria}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoria.itens.map((item) => (
                  <div key={item.id} className="bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border group hover:-translate-y-1 transition-all flex flex-col">
                    <div className="aspect-square rounded-xl bg-muted/30 overflow-hidden mb-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/5">
                        <span className="text-xs font-medium uppercase tracking-wider">Imagem ilustrativa</span>
                      </div>
                      <img 
                        src={item.imagem} 
                        alt={item.nome} 
                        className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-300" 
                        onLoad={(e) => (e.currentTarget.style.opacity = '1')} 
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                        loading="lazy" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-semibold text-secondary text-lg group-hover:text-primary transition-colors mb-2">
                        {item.nome}
                      </h3>
                      <div className="mt-auto pt-4 border-t border-border">
                        <a 
                          href={`${WHATSAPP}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20o%20pre%C3%A7o%20do%20produto:%20*${item.nome}*`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                          Consultar Preço <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
