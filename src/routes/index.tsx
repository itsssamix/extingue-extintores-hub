import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Wrench, Users, Building2, ArrowRight, Flame, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { CATALOGO } from "@/data/catalogo";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5516999998625&text=Ol%C3%A1!%20Como%20posso%20te%20ajudar%20?";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Extingue Extintores — Prevenção e combate a incêndios desde 1983" },
      { name: "description", content: "Empresa certificada pelo INMETRO em Franca/SP. Extintores, hidrantes, projetos contra incêndio, brigadas e muito mais." },
      { property: "og:title", content: "Extingue Extintores — Segurança contra incêndios" },
      { property: "og:description", content: "Soluções completas em prevenção e combate a incêndios. Certificada pelo INMETRO." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-28 md:py-40 text-secondary-foreground">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Flame className="h-3.5 w-3.5" /> Desde 1983 • Franca / SP
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Segurança contra incêndios <span className="text-accent">de verdade.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
              Mais de 40 anos protegendo vidas e patrimônios com produtos de primeira linha
              e equipe de engenheiros e técnicos certificados pelo INMETRO.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow transition-all hover:scale-105">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary-foreground/30 px-7 py-4 text-base font-semibold hover:bg-secondary-foreground/10 transition-colors">
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nossos diferenciais</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-secondary">
            Por que escolher a Extingue
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Certificada pelo INMETRO", desc: "Garantia oficial de qualidade e conformidade técnica em todos os serviços." },
            { icon: ShieldCheck, title: "Produtos de primeira linha", desc: "Equipamentos selecionados das melhores marcas e fabricantes do mercado." },
            { icon: Users, title: "Equipe especializada", desc: "Engenheiros e técnicos de segurança formados, prontos para atender." },
            { icon: Building2, title: "Atendimento amplo", desc: "Universidades, escolas, indústrias, shoppings, clubes e órgãos públicos." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-card rounded-2xl p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all border border-border hover:-translate-y-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO PREVIEW */}
      <section className="bg-muted/50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nossos Produtos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-secondary">
              Catálogo de Produtos
            </h2>
            <p className="mt-3 text-muted-foreground">Arraste para os lados para ver os modelos de cada categoria.</p>
          </div>
          <Link to="/catalogo" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 transition-all shadow-[var(--shadow-card)] whitespace-nowrap">
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="container mx-auto px-4 space-y-12">
          {CATALOGO.map((categoria) => (
            <div key={categoria.categoria}>
              <h3 className="font-display text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                {categoria.categoria}
              </h3>
              <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {categoria.itens.map((item) => (
                  <div key={item.id} className="min-w-[280px] md:min-w-[320px] snap-start bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border group hover:-translate-y-1 transition-all">
                    <div className="aspect-square rounded-xl bg-muted/30 overflow-hidden mb-4 relative">
                      {/* Image fallback/placeholder since we don't have the actual images in the public dir yet */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/5">
                        <span className="text-xs font-medium uppercase tracking-wider">Imagem ilustrativa</span>
                      </div>
                      <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-300" onLoad={(e) => (e.currentTarget.style.opacity = '1')} onError={(e) => (e.currentTarget.style.display = 'none')} loading="lazy" />
                    </div>
                    <h4 className="font-semibold text-secondary text-lg group-hover:text-primary transition-colors">{item.nome}</h4>
                    <a href={`${WHATSAPP}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto:%20${item.nome}`} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                      Consultar preço <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={about} alt="Técnico Extingue inspecionando extintor" loading="lazy" width={1280} height={1280}
              className="rounded-3xl shadow-[var(--shadow-elegant)] object-cover aspect-square" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-elegant)] hidden md:block">
              <div className="font-display text-4xl font-bold">40+</div>
              <div className="text-sm opacity-90">anos de mercado</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Quem somos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-secondary">
              Tradição e técnica em prevenção
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A Junqueira Comércio e Sistemas de Prevenção LTDA — Extingue Extintores —
              está no mercado desde 1983, com a missão de oferecer produtos e serviços
              de qualidade na prevenção e segurança contra incêndios, de forma satisfatória
              e eficaz aos seus clientes.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Sede própria em Franca / SP",
                "Profissionais altamente treinados",
                "Eficiência total em serviços e equipamentos",
                "Reconhecida e certificada pelo INMETRO",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-secondary">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS PREVIEW */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">O que fazemos</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-secondary">Soluções completas</h2>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Extintores & Hidrantes", desc: "Retirada, manutenção e instalação de extintores, hidrantes, mangueiras e acessórios." },
            { title: "Projetos de Engenharia", desc: "Projetos contra incêndio para prédios residenciais, industriais e comerciais." },
            { title: "Brigada de Incêndio", desc: "Treinamento de brigadas, alarmes, luzes de emergência e para-raios." },
          ].map((s, i) => (
            <div key={s.title} className="relative overflow-hidden rounded-2xl bg-secondary text-secondary-foreground p-8 group hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="absolute -right-6 -top-6 text-[8rem] font-display font-bold text-accent/10 leading-none select-none">
                0{i + 1}
              </div>
              <Wrench className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative text-primary-foreground">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Proteja o que importa.</h2>
            <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
              Fale agora com nossa equipe e receba um orçamento personalizado para o seu negócio.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-xl hover:scale-105 transition-transform">
              Falar pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
