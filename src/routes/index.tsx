import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Gauge, Target, Award, Headphones, Truck, BadgeCheck, CalendarClock, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-seals.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APC Seal — Selos Mecânicos de Alta Performance | 41 anos" },
      { name: "description", content: "Há 41 anos fabricando selos mecânicos de alta performance para a indústria. Soluções confiáveis, eficientes e sob medida para cada aplicação." },
      { property: "og:title", content: "APC Seal — Selos Mecânicos" },
      { property: "og:description", content: "41 anos de tecnologia em vedação industrial." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: ShieldCheck, title: "ALTA", sub: "DURABILIDADE" },
  { icon: Gauge, title: "DESEMPENHO", sub: "CONFIÁVEL" },
  { icon: Target, title: "SOLUÇÕES", sub: "PERSONALIZADAS" },
  { icon: Award, title: "QUALIDADE", sub: "COMPROVADA" },
];

const strip = [
  { icon: Headphones, t: "ATENDIMENTO", s: "TÉCNICO ESPECIALIZADO" },
  { icon: Truck, t: "ENTREGA PARA", s: "TODO O BRASIL" },
  { icon: BadgeCheck, t: "PRODUTOS EM CONFORMIDADE", s: "COM NORMAS INTERNACIONAIS" },
  { icon: CalendarClock, t: "+41 ANOS", s: "DE EXPERIÊNCIA" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div className="relative z-10">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-foreground uppercase">
              Tecnologia que <br />
              veda. Qualidade que <br />
              <span className="text-primary">garante</span> <span className="text-accent-red">performance.</span>
            </h1>
            <div className="mt-6 h-1 w-20 bg-accent-red" />
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Selos mecânicos de alta performance para os mais diversos segmentos industriais.
              Soluções confiáveis, eficientes e sob medida para cada aplicação. Há 41 anos
              ao lado da indústria brasileira.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produtos"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-md font-display font-semibold uppercase tracking-wider text-sm transition"
              >
                Conheça nossos produtos
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 rounded-md font-display font-semibold uppercase tracking-wider text-sm transition"
              >
                Falar com especialista
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-start">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div className="mt-3 font-display font-bold text-sm text-foreground">{f.title}</div>
                  <div className="text-[11px] tracking-wider text-muted-foreground font-semibold">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 to-accent-red/10 blur-3xl rounded-full" aria-hidden />
            <img
              src={heroImg}
              alt="Selos mecânicos industriais APC Seal"
              width={1536}
              height={1024}
              className="relative rounded-lg shadow-2xl object-cover w-full h-[420px] lg:h-[520px]"
            />
          </div>
        </div>

        {/* strip */}
        <div className="bg-industrial-dark text-industrial-dark-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strip.map((s) => (
              <div key={s.t} className="flex items-center gap-3">
                <s.icon className="w-7 h-7 text-accent-red shrink-0" />
                <div className="text-xs leading-tight">
                  <div className="font-display font-bold tracking-wider">{s.t}</div>
                  <div className="text-industrial-dark-foreground/70 tracking-wider">{s.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display text-sm tracking-[0.3em] text-accent-red font-semibold uppercase">Sobre a APC Seal</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl uppercase font-bold text-foreground">
              41 anos vedando o que move a indústria.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Desde 1984, a APC Seal projeta, fabrica e recondiciona selos mecânicos para
              bombas, agitadores, compressores e equipamentos rotativos críticos. Atendemos
              segmentos como sucroenergético, químico, petroquímico, papel e celulose,
              saneamento, alimentos e mineração.
            </p>
            <Link to="/empresa" className="mt-6 inline-block font-display font-semibold uppercase tracking-wider text-sm text-primary hover:text-accent-red transition">
              Conheça a empresa →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "41+", l: "Anos de mercado" },
              { n: "+5.000", l: "Selos entregues/ano" },
              { n: "+200", l: "Clientes industriais" },
              { n: "100%", l: "Nacional" },
            ].map((s) => (
              <div key={s.l} className="bg-secondary p-6 rounded-lg border border-border">
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-4 text-center text-primary-foreground">
          <h2 className="font-display text-3xl sm:text-4xl uppercase font-bold">
            Precisa de uma solução em vedação?
          </h2>
          <p className="mt-4 text-primary-foreground/85 max-w-2xl mx-auto">
            Nosso time de engenharia desenvolve o selo certo para sua aplicação. Atendimento técnico em todo o Brasil.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-7 py-4 rounded-md font-display font-semibold uppercase tracking-wider text-sm transition"
          >
            <MessageCircle className="w-4 h-4" /> Fale com um especialista
          </a>
        </div>
      </section>
    </div>
  );
}
