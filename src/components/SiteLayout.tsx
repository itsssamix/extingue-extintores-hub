import { Link, Outlet } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5516999998625&text=Ol%C3%A1!%20Como%20posso%20te%20ajudar%20?";
const INSTAGRAM = "https://www.instagram.com/extingueextintores/";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Extingue Extintores" className="h-12 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-secondary">EXTINGUE</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Extintores
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>Início</Link>
          <Link to="/sobre" className="text-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Sobre</Link>
          <Link to="/servicos" className="text-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Serviços</Link>
          <Link to="/contato" className="text-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Contato</Link>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary-glow transition-all hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Orçamento</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Extingue" className="h-14 w-auto bg-white/5 p-1 rounded" />
            <div>
              <div className="font-display text-xl font-bold">EXTINGUE</div>
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Extintores</div>
            </div>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Desde 1983 protegendo vidas e patrimônios com soluções completas em
            prevenção e combate a incêndios.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-accent">Navegação</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-accent">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-accent">Sobre nós</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-accent">Contato</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Franca / SP</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (16) 99999-8625</li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <Instagram className="h-4 w-4 text-accent" /> @extingueextintores
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Junqueira Comércio e Sistemas de Prevenção LTDA — Extingue Extintores. Certificada pelo INMETRO.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.44-8.41ZM12.04 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.93 9.91Zm5.43-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34Z"/>
      </svg>
    </a>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
