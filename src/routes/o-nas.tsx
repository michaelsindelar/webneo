import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { PremiumBand } from "@/components/site/PremiumBand";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { ConsultCta } from "@/components/site/ConsultCta";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — kdo stojí za Webneo" },
      {
        name: "description",
        content:
          "Webneo je studio Michaela Šindeláře a Jiřího Nováka z Brna. Tvoříme prémiové weby pro firmy, které chtějí web jako obchodní nástroj.",
      },
      { property: "og:title", content: "O nás | Webneo" },
      {
        property: "og:description",
        content: "Kdo stojí za Webneo, jak pracujeme a jaké hodnoty držíme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const team = [
  {
    initials: "MŠ",
    name: "Michael Šindelář",
    role: "Strategie, konzultace a design",
    text: "Vede konzultace, převádí obchodní cíle do struktury webu a odpovídá za vizuální úroveň výstupu.",
    contact: "michael.sindelar@webneo.pro",
  },
  {
    initials: "JN",
    name: "Jiří Novák",
    role: "Realizace, technologie a provoz",
    text: "Stará se o implementaci, výkon, zabezpečení a hladký provoz webů i všech navazujících nástrojů.",
    contact: "jiri.novak@webneo.pro",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title={
          <>
            Malý tým, <span className="text-gradient-brand">velká odpovědnost</span>
          </>
        }
        description="Webneo je brněnské studio zaměřené na weby, které pomáhají prodávat. Pracujeme v malém týmu, takže s vámi jedná přímo ten, kdo web navrhuje a staví."
      >
        <div className="flex flex-wrap gap-3">
          <ConsultCta />
          <Button
            type="button"
            variant="quiet"
            size="xl"
            onClick={() => document.getElementById("nas-pristup")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Poznat Webneo <ArrowRight />
          </Button>
        </div>
      </PageHero>

      <Section id="nas-pristup" className="scroll-mt-24 py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Náš přístup"
            title="Web bereme jako obchodní nástroj, ne jako grafiku"
            description="Nejdřív rozumíme obchodu, potom kreslíme. Proto naše weby nejen dobře vypadají, ale hlavně dělají práci — přivádí poptávky, kvalifikují je a šetří váš čas."
          />
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Tvoříme podnikatelům a firmám weby, které činí mnohem víc konverzí než kdy předtím.
              Svoji práci adaptujeme potřebám vás i vašich zákazníků a pomáháme maximalizovat dosah
              na internetu.
            </p>
            <p>
              Pokud potřebujete spolehlivého partnera pro řešení webu od A do Z, jsme pro vás ti
              praví. Vedle samotné tvorby nabízíme i dlouhodobou péči v rámci partnerství PREMIUM+ —
              od hostingu a zabezpečení po průběžný rozvoj.
            </p>
            <div className="grid gap-5 pt-2 sm:grid-cols-3">
              {[
                { k: "2", v: "lidé, se kterými jednáte" },
                { k: "7 dní", v: "průměrná realizace" },
                { k: "Brno", v: "kde nás najdete" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-display text-xl font-semibold text-foreground">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="py-10 md:py-12">
        <SectionHeading eyebrow="Tým" title="Kdo bude na vašem webu pracovat" />
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand font-display text-base font-semibold text-primary-foreground shadow-brand">
                {m.initials}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-violet">{m.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              <a
                href={`mailto:${m.contact}`}
                className="mt-6 inline-block border-b border-transparent text-sm text-foreground transition-colors hover:border-violet hover:text-violet"
              >
                {m.contact}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <TrustindexReviews className="py-8 md:py-10" />

      <PremiumBand />

      <ConsultationSection className="py-10 md:py-12" />
    </>
  );
}
