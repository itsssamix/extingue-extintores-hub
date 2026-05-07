import { createFileRoute } from "@tanstack/react-router";
import { Flame, Wrench, Zap, Bell, GraduationCap, FileText, Building, ShieldAlert } from "lucide-react";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5516999998625&text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Extingue Extintores" },
      { name: "description", content: "Manutenção de extintores, hidrantes, projetos contra incêndio, brigadas, para-raios e muito mais." },
      { property: "og:title", content: "Serviços — Extingue Extintores" },
      { property: "og:description", content: "Soluções completas em combate e prevenção a incêndios." },
    ],
  }),
  component: Servicos,
});

const services = [
  { icon: Flame, title: "Extintores", desc: "Retirada, manutenção e instalação de extintores de todas as classes." },
  { icon: Wrench, title: "Hidrantes & Mangueiras", desc: "Instalação e manutenção de hidrantes, mangueiras e acessórios." },
  { icon: Zap, title: "Para-raios (SPDA)", desc: "Projeto, instalação e laudo de Sistema de Proteção contra Descargas Atmosféricas." },
  { icon: Bell, title: "Alarmes & Detecção", desc: "Sistemas de alarme de incêndio e detecção precoce de fumaça." },
  { icon: ShieldAlert, title: "Luzes de emergência", desc: "Iluminação de emergência conforme as normas técnicas vigentes." },
  { icon: GraduationCap, title: "Brigada de Incêndio", desc: "Treinamento completo de brigadas, com certificação." },
  { icon: FileText, title: "Projetos de Engenharia", desc: "Projetos técnicos de prevenção e combate a incêndio." },
  { icon: Building, title: "Todos os segmentos", desc: "Universidades, escolas, indústrias, shoppings, clubes e órgãos públicos." },
];

function Servicos() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">O que fazemos</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Nossos serviços</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl leading-relaxed">
            Soluções completas em combate e prevenção a incêndios — do extintor ao projeto de engenharia,
            com a qualidade e a certificação INMETRO que sua empresa precisa.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card rounded-2xl p-7 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-flame)" }}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-12 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Precisa de um serviço específico?</h2>
          <p className="mt-3 opacity-90">Fale com nossa equipe e receba um orçamento sob medida.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground hover:scale-105 transition-transform">
            Solicitar orçamento
          </a>
        </div>
      </section>
    </>
  );
}
