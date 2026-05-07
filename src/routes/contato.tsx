import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5516999998625&text=Ol%C3%A1!%20Como%20posso%20te%20ajudar%20?";
const INSTAGRAM = "https://www.instagram.com/extingueextintores/";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Extingue Extintores" },
      { name: "description", content: "Fale com a Extingue Extintores em Franca/SP. WhatsApp, Instagram e atendimento rápido." },
      { property: "og:title", content: "Contato — Extingue Extintores" },
      { property: "og:description", content: "Fale agora com nossa equipe." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Fale conosco</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold">Vamos conversar</h1>
          <p className="mt-6 text-lg opacity-90 max-w-2xl">
            Estamos prontos para atender sua empresa. Escolha o canal de sua preferência.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid gap-6 md:grid-cols-2 max-w-4xl">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="group bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366] text-white">
            <Phone className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-secondary">WhatsApp</h3>
          <p className="mt-2 text-muted-foreground">(16) 99999-8625</p>
          <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">Abrir conversa →</span>
        </a>

        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
          className="group bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
            <Instagram className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-secondary">Instagram</h3>
          <p className="mt-2 text-muted-foreground">@extingueextintores</p>
          <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">Seguir perfil →</span>
        </a>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)]">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-secondary">Sede</h3>
          <p className="mt-2 text-muted-foreground">Franca / SP — Brasil</p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)]">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Clock className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-secondary">Horário</h3>
          <p className="mt-2 text-muted-foreground">Seg a Sex • 08h às 18h</p>
        </div>
      </section>
    </>
  );
}
