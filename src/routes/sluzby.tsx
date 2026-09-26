import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Compass,
  Palette,
  Code2,
  Wrench,
  Plug,
  PenLine,
  Link2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { useIsMobile } from "@/hooks/use-mobile";
import { ConsultCta } from "@/components/site/ConsultCta";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { PremiumBand } from "@/components/site/PremiumBand";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — web na míru, design, realizace, copywriting i linkbuilding | Webneo" },
      {
        name: "description",
        content:
          "Konzultace a návrh řešení, design, realizace a konfigurace, správa a úpravy, periferie a integrace, copywriting a linkbuilding. Podívejte se, jak pracujeme.",
      },
      { property: "og:title", content: "Služby Webneo — web na míru od A do Z" },
      {
        property: "og:description",
        content:
          "Strategie, prémiový design, realizace do týdne, periferie, správa, copywriting a linkbuilding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    key: "Konzultace a návrh řešení",
    icon: Compass,
    lead: "Než začneme kreslit, rozumíme vašemu obchodu.",
    how: [
      "Na úvodní konzultaci projdeme cíle, zákazníky, obchodní model a to, co dnes na webu nefunguje.",
      "Provedeme průzkum odvětví a konkurence — co dělají dobře, kde mají slabá místa a jak se od nich odlišíme.",
      "Navrhneme informační architekturu, konverzní cestu i technologie a předložíme konkrétní řešení včetně rozsahu a termínu.",
    ],
    benefits: [
      "Jasný plán před první korunou investice",
      "Struktura webu postavená na obchodních cílech",
      "Odlišení od konkurence ve vašem odvětví",
      "Odhad rozsahu, ceny i termínu předem",
    ],
  },
  {
    n: "02",
    key: "Design webové stránky",
    icon: Palette,
    lead: "Prémiový vizuál, který vede návštěvníka k akci.",
    how: [
      "Design staví na vaší identitě — barvy, typografii i tón sjednotíme do design systému, ne do jednorázové grafiky.",
      "Každou šablonu navrhujeme s ohledem na hierarchii informací: co má návštěvník vidět první, druhé a kde má kliknout.",
      "Vše kreslíme responzivně od mobilu po velké monitory a ověřujeme čitelnost, kontrast i velikost dotykových prvků.",
    ],
    benefits: [
      "První dojem na úrovni prémiové značky",
      "Konzistentní vizuál na všech podstránkách",
      "Bezchybné zobrazení na mobilu i desktopu",
      "Design, který vede k poptávce, ne jen líbí",
    ],
  },
  {
    n: "03",
    key: "Realizace a konfigurace webu",
    icon: Code2,
    lead: "Čistá implementace, rychlé načtení, hotovo do týdne.",
    how: [
      "Web stavíme na moderních technologiích s důrazem na rychlost načtení, přístupnost a čistý kód bez zbytečných nadstaveb.",
      "Zajistíme domény, e-maily, certifikáty, hosting a nasazení — přebíráme celou technickou stránku včetně přesunu ze starého webu.",
      "Nastavíme technické SEO: strukturovaná data, meta popisy, sitemapu, přesměrování a indexaci.",
    ],
    benefits: [
      "Standardní řešení v provozu do 7 dní",
      "Rychlé načtení a dobré hodnocení výkonu",
      "Připraveno pro Google od prvního dne",
      "Žádné starosti s technikou na vaší straně",
    ],
  },
  {
    n: "04",
    key: "Periferie a integrace",
    icon: Plug,
    lead: "Web propojený s nástroji, které reálně používáte.",
    how: [
      "Napojíme analytiku a měření konverzí, abyste věděli, odkud přicházejí poptávky a co je spouští.",
      "Integrujeme formuláře, rezervační kalendáře, platby, CRM i newsletter a nastavíme automatické notifikace.",
      "Doplníme vše kolem webu — firemní profil na Googlu, mapy, recenzní widgety a sociální sítě.",
    ],
    benefits: [
      "Poptávky rovnou tam, kde je řešíte",
      "Přehled o návratnosti marketingu",
      "Méně ruční práce díky automatizacím",
      "Rezervace a platby bez telefonování",
    ],
  },
  {
    n: "05",
    key: "Copywriting",
    icon: PenLine,
    lead: "Texty, které mluví jazykem vašich zákazníků.",
    how: [
      "Vycházíme z analýzy: víme, koho oslovujeme, jaké má obavy a jaká slova k rozhodnutí potřebuje slyšet.",
      "Píšeme celou strukturu — nadpisy, benefity, důkazy, časté dotazy a výzvy k akci — ne jen doplňkové odstavce.",
      "Texty optimalizujeme na klíčová slova, aniž bychom obětovali čtivost a tón vaší značky.",
    ],
    benefits: [
      "Nemusíte psát ani řádek",
      "Argumenty, které obhájí vaši cenu",
      "Lepší viditelnost ve vyhledávání",
      "Jednotný tón napříč celým webem",
    ],
  },
  {
    n: "06",
    key: "Linkbuilding",
    icon: Link2,
    lead: "Budujeme autoritu webu dlouhodobě a bezpečně.",
    how: [
      "Nejdřív analyzujeme odkazový profil vás i konkurence a najdeme příležitosti, které mají v našem odvětví smysl.",
      "Získáváme odkazy z relevantních katalogů, oborových médií, PR článků a partnerských webů — kvalita před počtem.",
      "Postup i výsledky reportujeme a odkazový profil průběžně čistíme od toho, co webu škodí.",
    ],
    benefits: [
      "Vyšší pozice na klíčová slova",
      "Provoz z vyhledávání bez placené reklamy",
      "Bezpečný postup bez rizika penalizace",
      "Transparentní report odvedené práce",
    ],
  },
  {
    n: "07",
    key: "Správa a úpravy webu",
    icon: Wrench,
    lead: "Web je živý nástroj — staráme se o něj i po předání.",
    how: [
      "Hlídáme dostupnost, aktualizace, zálohy a zabezpečení. O problému víme dřív než vy a řešíme ho hned.",
      "Průběžné úpravy, nové sekce a texty řešíme v rámci partnerství PREMIUM+ bez nutnosti sjednávat každou drobnost.",
      "Sledujeme data a navrhujeme zlepšení: testujeme nadpisy, formuláře i strukturu, aby web konvertoval lépe.",
    ],
    benefits: [
      "Web běží bez výpadků a bezpečně",
      "Úpravy zdarma v rámci PREMIUM+",
      "Podpora 24/7 přímo na experty",
      "Web se zlepšuje i po předání",
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Služby"
        title={
          <>
            Web od A do Z — <span className="text-gradient-brand">strategie, design, realizace</span>
          </>
        }
        description="Nedodáváme šablony. Dodáváme řešení šité na míru vaší firmě, vašim zákazníkům a vašim číslům. Vyberte si rozsah, o zbytek se postaráme."
      >
        <div className="flex flex-wrap gap-3">
          <ConsultCta />
          <Button
            type="button"
            variant="quiet"
            size="xl"
            onClick={() =>
              document.getElementById("sluzby-prehled")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Prohlédnout služby <ArrowRight />
          </Button>
        </div>
      </PageHero>

      <Section id="sluzby-prehled" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Co pro vás uděláme"
          title="Sedm služeb, které tvoří funkční web"
          description="Vyberte službu a podívejte se, jak ji děláme a co vám přinese."
        />
        <ServiceExplorer />
      </Section>

      <PremiumBand />

      <ConsultationSection />
    </>
  );
}

type Service = (typeof services)[number];

function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();
  const current = services[active] ?? services[0];

  if (isMobile) {
    return (
      <div className="mt-8 grid gap-3">
        {services.map((s, i) => {
          const SIcon = s.icon;
          const on = i === active;
          return (
            <div key={s.key} className="scroll-mt-24">
              <button
                type="button"
                onClick={() => setActive(on ? -1 : i)}
                aria-expanded={on}
                className={`flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
                  on ? "border-violet/40 bg-card shadow-lift" : "border-border bg-surface"
                }`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl transition-all ${
                    on
                      ? "bg-gradient-brand text-primary-foreground shadow-brand"
                      : "bg-accent text-violet"
                  }`}
                >
                  <SIcon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-sm font-semibold">{s.key}</span>
                  <span className="block text-xs text-muted-foreground">{s.n}</span>
                </span>
                <ArrowRight
                  className={`ml-auto size-4 shrink-0 text-violet transition-transform ${
                    on ? "rotate-90" : ""
                  }`}
                />
              </button>
              {on && <ServiceDetail service={s} className="mt-3" />}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="grid content-start gap-2.5">
        {services.map((s, i) => {
          const SIcon = s.icon;
          const on = i === active;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={on}
              className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
                on
                  ? "border-violet/40 bg-card shadow-lift"
                  : "border-border bg-surface hover:-translate-y-0.5 hover:border-violet/25 hover:bg-card"
              }`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-xl transition-all ${
                  on
                    ? "bg-gradient-brand text-primary-foreground shadow-brand"
                    : "bg-accent text-violet"
                }`}
              >
                <SIcon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-sm font-semibold">{s.key}</span>
                <span className="block text-xs text-muted-foreground">{s.n}</span>
              </span>
              <ArrowRight
                className={`ml-auto size-4 shrink-0 transition-all ${
                  on ? "text-violet opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {current && <ServiceDetail service={current} />}
    </div>
  );
}

function ServiceDetail({ service, className }: { service: Service; className?: string }) {
  const Icon = service.icon;
  return (
    <div
      key={service.key}
      className={`relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lift rise-in sm:p-8 md:p-10 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[oklch(0.7_0.2_290_/_0.12)] blur-3xl float-orb" />
      <div className="relative">
        <div className="flex items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand">
            <Icon className="size-6" />
          </span>
          <span className="font-display text-4xl font-semibold text-muted-foreground/25">
            {service.n}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl md:text-3xl">
          {service.key}
        </h3>
        <p className="mt-2 text-[0.98rem] text-violet md:text-[1.02rem]">{service.lead}</p>

        <div className="mt-6 space-y-4">
          {service.how.map((h, i) => (
            <div key={h} className="flex gap-4">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-violet/30 text-[0.7rem] font-semibold text-violet">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{h}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet">
            Co vám to přinese
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-violet" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <ConsultCta className="mt-7 w-full sm:w-auto">Poptat tuto službu</ConsultCta>
      </div>
    </div>
  );
}
