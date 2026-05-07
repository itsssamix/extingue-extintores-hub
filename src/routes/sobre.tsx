import { createFileRoute } from "@tanstack/react-router";
import { Award, MapPin, Users, Wrench } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Extingue Extintores" },
      { name: "description", content: "Desde 1983 em Franca/SP, com profissionais certificados pelo INMETRO em prevenção contra incêndios." },
      { property: "og:title", content: "Sobre a Extingue Extintores" },
      { property: "og:description", content: "Mais de 40 anos de tradição em segurança contra incêndios." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Nossa história</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Quem é a Extingue</h1>
          <p className="mt-6 text-lg opacity-90 leading-relaxed">
            Desde 1983 protegendo vidas e patrimônios com tradição, técnica e responsabilidade.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid gap-12 md:grid-cols-2 items-start">
        <img src={about} alt="" loading="lazy" width={1280} height={1280} className="rounded-3xl shadow-[var(--shadow-elegant)] object-cover" />
        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            A <strong>Junqueira Comércio e Sistemas de Prevenção LTDA — Extingue Extintores</strong>
            está no mercado desde 1983, com a missão de proporcionar produtos e serviços
            de qualidade na prevenção e segurança contra incêndios, de forma satisfatória e eficaz aos seus clientes.
          </p>
          <p>
            Com sede própria localizada em <strong>Franca / SP</strong>, é composta por profissionais
            altamente treinados e capacitados que trabalham para proporcionar eficiência total
            em seus serviços e equipamentos. Sua competência e reconhecimento são
            <strong> Certificados pelo INMETRO.</strong>
          </p>
          <p>
            O setor de Engenharia da Extingue, empenhado em abranger mais áreas de combate a incêndio,
            desenvolve as melhores técnicas para confecção e execução dos projetos em prédios
            residenciais, industriais e todo tipo de comércio.
          </p>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-4 text-center">
          {[
            { icon: Award, label: "Certificada", value: "INMETRO" },
            { icon: MapPin, label: "Sede própria", value: "Franca/SP" },
            { icon: Users, label: "Equipe", value: "Engenheiros & técnicos" },
            { icon: Wrench, label: "Mercado desde", value: "1983" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <Icon className="h-8 w-8 text-primary mx-auto" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
              <div className="mt-1 font-display text-2xl font-bold text-secondary">{value}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
