import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, ShieldCheck, LineChart, Sparkles, Check, FileText, Clock3, Users, TrendingUp, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/primitives";
import { BrandBanner } from "@/components/site/BrandBanner";
import { PremiumBand } from "@/components/site/PremiumBand";
import { ConsultCta } from "@/components/site/ConsultCta";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webneo | Profesionální web-prezentace od A do Z" },
      {
        name: "description",
        content:
          "Navrhujeme a stavíme weby, které prodávají. Strategie, design, realizace do týdne a dlouhodobá péče PREMIUM+. Nezávazná konzultace zdarma.",
      },
      { property: "og:title", content: "Webneo | Profesionální web-prezentace od A do Z" },
      {
        property: "og:description",
        content:
          "Weby jako obchodní nástroj: strategie, prémiový design, rychlá realizace a dlouhodobá správa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Gauge,
    visualIcon: Clock3,
    title: "Rychlost",
    stat: "3 dny",
    statLabel: "průměrná realizace",
    text: "Standardní webová řešení do 3 dnů. Web jde z konceptu do provozu rychle — bez slev na kvalitě.",
    accent: "from-navy/12 to-navy/3",
  },
  {
    icon: ShieldCheck,
    visualIcon: Users,
    title: "Expertíza",
    stat: "1 tým",
    statLabel: "od strategie po spuštění",
    text: "Web přebírají lidé, kteří se tomu věnují každý den a znají, co dnes reálně funguje.",
    accent: "from-violet/12 to-violet/3",
  },
  {
    icon: LineChart,
    visualIcon: TrendingUp,
    title: "Analytika",
    stat: "Data",
    statLabel: "místo dojmů",
    text: "Zkoumáme chování návštěvníků. Víme, co funguje, a postupně tak můžeme zlepšovat váš marketing.",
    accent: "from-navy-soft/14 to-navy-soft/3",
  },
  {
    icon: Sparkles,
    visualIcon: Crown,
    title: "Premium",
    stat: "24/7",
    statLabel: "péče a podpora",
    text: "Hosting, zabezpečení, úpravy zdarma, podpora 24/7 a pravidelné aktualizace, přístup k privátnímu newsletteru se zajímavými novinkami.",
    accent: "from-violet/16 to-navy/6",
    href: "/premium-plus" as const,
  },
];

const winBullets = [
  "Řešení webových stránek na míru šité vaší firemní identitě",
  "Maximalizace konverzního poměru na webu (efektivní prodej)",
  "Specialisté, kteří pracují s tím, co funguje právě teď",
  "Šetříme váš drahocenný čas — web je naše starost",
];



function Home() {
  return (
    <>
      <BrandBanner>
        <div className="rise-in">
          <Eyebrow tone="light">Prémiová webová řešení</Eyebrow>
        </div>
        <h1
          className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-primary-foreground rise-in md:text-[3.7rem]"
          style={{ animationDelay: "0.1s" }}
        >
          Vaše webová prezentace{" "}
          <span className="bg-gradient-to-r from-[oklch(0.95_0.02_285)] to-[oklch(0.8_0.14_255)] bg-clip-text text-transparent">
            <br></br>která přináší výsledky!
          </span>
        </h1>
        <p
          className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 rise-in"
          style={{ animationDelay: "0.2s" }}
        >
          <strong className="font-semibold text-primary-foreground">75 % lidí</strong> hodnotí
          důvěryhodnost firmy podle vzhledu webu. <br></br>První dojem děláme jen jednou — nenecháme to
          náhodě.

        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 rise-in" style={{ animationDelay: "0.3s" }}>
          <ConsultCta variant="banner" />
          <Button
            type="button"
            size="xl"
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground"
            onClick={() =>
              document.getElementById("vyhody")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Proč Webneo <ArrowRight />
          </Button>
        </div>

        <div
          className="mt-9 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-4 backdrop-blur-md rise-in"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { k: "3 dny", v: "průměrná realizace" },
            { k: "100 %", v: "spokojenost" },
            { k: "24/7", v: "podpora PREMIUM+" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <p className="font-display text-lg font-semibold text-primary-foreground">{s.k}</p>
              <p className="text-[0.68rem] uppercase tracking-wide text-primary-foreground/70">{s.v}</p>
            </div>
          ))}
        </div>
      </BrandBanner>

      {/* VALUE PROP */}
      <Section id="vyhody" tone="surface" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex max-w-2xl flex-col">
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] text-foreground md:text-[2.6rem]">
              Zažijte výhru v době internetové
            </h2>
            <ul className="mt-6 space-y-3">
              {winBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-violet" />
                  {b}
                </li>
              ))}
            </ul>

            <div aria-hidden className="hidden min-h-8 flex-1 lg:block" />
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-gradient-ink p-7 text-left shadow-lift md:p-8 lg:mt-0">
              <div className="pointer-events-none absolute inset-0 grid-light opacity-30" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[oklch(0.7_0.2_290_/_0.35)] blur-3xl float-orb" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                  <FileText className="size-3.5" /> Cenová nabídka zdarma
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary-foreground md:text-2xl">
                  Zjistěte, jaká je investice — ještě dnes
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                  Připravíme vám nezávaznou transparentní cenovou nabídku i doporučené řešení na míru. Bez
                  poplatků, bez závazků a s časovým odhadem.
                </p>
                <ConsultCta className="mt-6">Chci cenovou nabídku zdarma</ConsultCta>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative isolate min-h-[225px] overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-violet/35 hover:shadow-lift"
              >
                <div className={`absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b ${p.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute -right-7 -top-7 -z-10 size-28 rounded-full border border-violet/10 transition-all duration-700 group-hover:scale-125 group-hover:border-violet/25" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-violet/10 bg-background shadow-soft transition-all duration-500 group-hover:rotate-3 group-hover:border-violet/30 group-hover:bg-accent">
                    <p.icon className="size-5 text-violet" />
                  </span>
                  <div className="text-right">
                    <div className="font-display text-xl font-semibold text-gradient-brand">{p.stat}</div>
                    <div className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-muted-foreground">{p.statLabel}</div>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
                  <span className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <p.visualIcon className="size-4 text-violet" />
                    {p.title === "Premium" ? "Kompletní péče" : "Web jako investice"}
                  </span>
                  {p.href && (
                    <Link to={p.href} className="inline-flex items-center gap-1 text-xs font-semibold text-violet transition-all duration-300 hover:gap-2 hover:text-navy">
                      PREMIUM+ <ArrowRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>


      <TrustindexReviews tone="surface" className="pb-5 pt-2 md:pb-6 md:pt-3" />

      <div className="bg-surface pb-5 text-center md:pb-6">
        <Button asChild variant="brand" size="xl" className="group min-w-[260px] shadow-brand">
          <Link to="/reference">
            Prohlédnout portfolio <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* PREMIUM+ BAND */}
      <PremiumBand />

      <ConsultationSection />
    </>
  );
}
