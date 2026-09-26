import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ShieldCheck,
  RefreshCw,
  LifeBuoy,
  Server,
  Lock,
  TrendingUp,
  Crown,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/primitives";
import { ConsultCta } from "@/components/site/ConsultCta";
import { ConsultationSection } from "@/components/site/ConsultationSection";

export const Route = createFileRoute("/premium-plus")({
  head: () => ({
    meta: [
      { title: "PREMIUM+ — exkluzivní partnerství pro váš web | Webneo" },
      {
        name: "description",
        content:
          "PREMIUM+ je exkluzivní dlouhodobé partnerství: správa webu, hosting, zabezpečení, pojištění, podpora 24/7 a průběžný rozvoj i optimalizace.",
      },
      { property: "og:title", content: "PREMIUM+ partnerství | Webneo" },
      {
        property: "og:description",
        content: "Kompletní péče o web: správa, zabezpečení, podpora 24/7 a průběžný rozvoj.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Premium,
});

const standardItems = [
  "Úpravy webu zdarma (20 hodin práce / rok)",
  "Správa hostingu a periferií",
  "Profesionální zabezpečení 24/7",
  "Podpora expertů 24/7",
  "Pokročilá analýza a průzkum",
  "Možnost řešení na splátky",
  "Privátní newsletter pro partnery",
  "Přednostní upozornění o novinkách a zlevněných nabídkách",
];

const enterpriseItems = [
  "Úpravy webu zdarma (dohodou)",
  "Vše v PREMIUM+ Standard",
  "Vše ostatní dohodou…",
];

const included = [
  {
    icon: Server,
    title: "Hosting a provoz",
    text: "Rychlý hosting, domény, e-maily a certifikáty. Vše na jednom místě a bez vaší starosti.",
    detail:
      "Web běží na výkonném hostingu s monitoringem dostupnosti. Domény, certifikáty i firemní e-maily držíme aktuální a obnovujeme za vás — nikdy vám nic nevyprší.",
  },
  {
    icon: RefreshCw,
    title: "Aktualizace a zálohy",
    text: "Pravidelné aktualizace, monitoring dostupnosti a zálohy, ze kterých se dá skutečně obnovit.",
    detail:
      "Zálohujeme pravidelně a obnovení testujeme, takže i v nejhorším případě je web zpět v řádu minut. Aktualizace provádíme mimo provozní hodiny.",
  },
  {
    icon: Lock,
    title: "Zabezpečení a pojištění",
    text: "Ochrana proti útokům, hlídání zranitelností a pojištění webu pro případ, že se něco stane.",
    detail:
      "Filtrujeme útoky, sledujeme známé zranitelnosti a web je navíc pojištěný. Bezpečnost neřešíme až po incidentu, ale předem.",
  },
  {
    icon: LifeBuoy,
    title: "Podpora 24/7",
    text: "Napíšete, my řešíme. Bez tiketových kolotočů a bez čekání na obchodní hodiny.",
    detail:
      "Máte přímý kontakt na experta, který váš web zná. Žádná první linie, žádné vysvětlování problému třem lidem.",
  },
  {
    icon: TrendingUp,
    title: "Rozvoj a optimalizace",
    text: "Průběžné úpravy, nové sekce a testování. Web se zlepšuje spolu s vaším podnikáním.",
    detail:
      "V rámci ročního objemu hodin doplňujeme sekce, texty i funkce. Sledujeme data a navrhujeme změny, které zvyšují počet poptávek.",
  },
  {
    icon: ShieldCheck,
    title: "Garance spokojenosti",
    text: "Nejdřív vaše spokojenost, peníze potom. Držíme se svých hodnot a vycházíme maximálně vstříc.",
    detail:
      "Partnerství držíme na výsledcích, ne na smluvních pokutách. Když nejste spokojeni, řešíme to — a to platí po celou dobu spolupráce.",
  },
];

function Premium() {
  return (
    <>
      {/* PRESTIGE HERO — fully centered */}
      <section className="relative isolate overflow-hidden bg-gradient-ink pb-12 pt-8 text-center md:pb-16 md:pt-10">
        <div className="pointer-events-none absolute inset-0 grid-light grid-pan opacity-40" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[oklch(0.7_0.2_290_/_0.35)] blur-3xl float-orb" />
        <div
          className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[oklch(0.65_0.2_255_/_0.35)] blur-3xl float-orb"
          style={{ animationDelay: "-5s" }}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-[oklch(1_0_0_/_0.12)] to-transparent sheen-sweep" />
        </div>
        <div className="container-page relative flex flex-col items-center">
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur rise-in">
            <span className="pointer-events-none absolute inset-0 rounded-2xl border border-primary-foreground/25 pulse-ring" />
            <Crown className="size-6 text-primary-foreground" />
          </span>
          <div className="mt-6 rise-in" style={{ animationDelay: "0.08s" }}>
            <Eyebrow tone="light">Exkluzivní partnerství</Eyebrow>
          </div>
          <h1
            className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] text-primary-foreground rise-in md:text-[3.4rem]"
            style={{ animationDelay: "0.16s" }}
          >
            Web, o který se{" "}
            <span className="bg-gradient-to-r from-[oklch(0.95_0.02_285)] to-[oklch(0.8_0.14_255)] bg-clip-text text-transparent">
              nemusíte starat
            </span>
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 rise-in"
            style={{ animationDelay: "0.24s" }}
          >
            PREMIUM+ je kompletní péče na nejvyšší úrovni: provoz, zabezpečení, podpora i rozvoj. Vy
            se věnujete podnikání, my tomu, aby web vydělával.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 rise-in" style={{ animationDelay: "0.32s" }}>
            <ConsultCta variant="purple">Chci PREMIUM+</ConsultCta>
            <Button
              size="xl"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById("partnerstvi")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Zjistit víc <ChevronDown />
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            {["Omezený počet klientů", "Osobní kontakt bez tiketů", "Garance spokojenosti"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check className="size-4" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON OFFER */}
      <Section id="partnerstvi" className="scroll-mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Partnerství</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] md:text-[2.6rem]">
            Zvažte partnerství{" "}
            <span className="italic text-gradient-brand">PREMIUM+</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Všechno, co váš web potřebuje k úspěchu — na jednom místě, za pevnou cenu.
          </p>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-[oklch(0.7_0.2_290_/_0.12)] blur-3xl float-orb" />

          {/* STANDARD */}
          <div className="relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 rise-in hover:-translate-y-1.5 hover:border-violet/40 hover:shadow-lift">
<span className="text-lg font-semibold uppercase tracking-[0.18em] text-navy">
               Standard
             </span>
            <p className="mt-3 font-display text-4xl font-semibold tracking-tight">
              2 377 <span className="text-lg font-medium text-muted-foreground">Kč / měsíc</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Pevná měsíční cena bez skrytých poplatků</p>
            <div className="mt-6 h-px w-full bg-border" />
            <ul className="mt-6 flex-1 space-y-3">
              {standardItems.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-navy" /> {i}
                </li>
              ))}
            </ul>
            <ConsultCta variant="purple" className="mt-8 w-full" withIcon={false}>
              Chci PREMIUM+
            </ConsultCta>
          </div>

          {/* ENTERPRISE */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-violet/50 bg-gradient-ink p-8 shadow-lift transition-all duration-500 rise-in hover:-translate-y-1.5">
            <div className="pointer-events-none absolute inset-0 grid-light opacity-25" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[oklch(0.7_0.2_290_/_0.3)] blur-3xl float-orb" />
            <div className="relative flex flex-1 flex-col">
<span className="text-lg font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                 Enterprise
               </span>
              <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-primary-foreground">
                Cena <span className="text-lg font-medium text-primary-foreground/60">dohodou</span>
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Řešení šité na míru vašemu byznysu
              </p>
              <div className="mt-6 h-px w-full bg-primary-foreground/15" />
              <ul className="mt-6 space-y-3">
                {enterpriseItems.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-[oklch(0.8_0.14_300)]" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex-1 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                  Pro koho
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/75">
                  Pro firmy s vyššími nároky: rozsáhlejší weby, více projektů, náročnější provoz nebo
                  individuální rozsah péče. Podmínky, rozsah úprav i reakční dobu nastavíme přesně
                  podle vašich potřeb na konzultaci.
                </p>
              </div>

              <ConsultCta
                variant="purple"
                className="mt-8 w-full"
                withIcon={false}
              >
                Chci PREMIUM+
              </ConsultCta>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT IS INCLUDED — interactive */}
      <Section tone="surface">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Co je součástí</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] md:text-[2.4rem]">
            Šest pilířů dlouhodobé péče
          </h2>
          <p className="mt-4 text-muted-foreground">
            Najeďte kurzorem na pilíř a podívejte se, jak ho v praxi řešíme.
          </p>
        </div>
        <PillarGrid />
        <div className="mt-10 text-center">
          <ConsultCta variant="purple">Chci PREMIUM+</ConsultCta>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Jak partnerství funguje</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.12] md:text-[2.4rem]">
            Tři kroky a web je naše starost
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Převzetí webu",
              d: "Projdeme technický stav, přeneseme hosting, domény a e-maily a nastavíme monitoring i zálohy.",
            },
            {
              n: "02",
              t: "Nastavení péče",
              d: "Dohodneme rozsah úprav, prioritu požadavků a kanál pro komunikaci. Dostanete přímý kontakt na experta.",
            },
            {
              n: "03",
              t: "Průběžný rozvoj",
              d: "Reportujeme, navrhujeme zlepšení a realizujeme úpravy v rámci ročního objemu hodin.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-violet/30 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-semibold text-primary-foreground shadow-brand">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ConsultCta variant="purple">Chci PREMIUM+</ConsultCta>
        </div>
      </Section>

      <ConsultationSection />
    </>
  );
}

function PillarGrid() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {included.map((i, idx) => {
        const Icon = i.icon;
        return (
          <article
            key={i.title}
            tabIndex={0}
            style={{ animationDelay: `${idx * 0.07}s` }}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 text-left shadow-soft outline-none transition-all duration-500 rise-in hover:-translate-y-1.5 hover:border-violet/40 hover:shadow-lift focus-visible:border-violet/40 focus-visible:shadow-lift ${
              idx % 3 === 1 ? "lg:mt-8" : idx % 3 === 2 ? "lg:mt-16" : ""
            }`}
          >
            <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[oklch(0.7_0.2_290_/_0.12)] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-hairline opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center gap-3.5">
              <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-violet transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-brand">
                <span className="pointer-events-none absolute inset-0 rounded-2xl border border-violet/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:pulse-ring" />
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">{i.title}</h3>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  0{idx + 1} / 0{included.length}
                </span>
              </div>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{i.text}</p>

            <div className="relative grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:mt-4 group-hover:grid-rows-[1fr] group-focus-visible:mt-4 group-focus-visible:grid-rows-[1fr] max-md:mt-4 max-md:grid-rows-[1fr]">
              <div className="min-h-0 overflow-hidden">
                <p className="border-t border-border pt-4 text-sm leading-relaxed text-foreground/80">
                  {i.detail}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
