import { CalEmbed } from "./CalEmbed";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: 1,
    title: "Nezávazná konzultace",
    text: "Na konzultaci náš expert dle vaší aktuální situace, potřeb a představ doporučí nejvhodnější řešení pro vás. V případě zájmu představí návrh webu.",
  },
  {
    n: 2,
    title: "Dohoda",
    text: "V případě, že se vám návrh bude líbit, přistoupíme k dohodě o provedení služby, případně dlouhodobé spolupráce.",
  },
  {
    n: 3,
    title: "Pokročilá analýza",
    text: "Expert provede analýzu informací potřebných k tvorbě řešení — o vás, firmě, službě či produktu, trhu a konkurenci. Řešení pak padne vám i vašim zákazníkům.",
  },
  {
    n: 4,
    title: "Produkce",
    text: "Tvoříme design, grafické rozhraní a fungování celé webové stránky i periferií. Průběžně vám reportujeme postup. Standardní řešení jsou hotová do týdne.",
  },
  {
    n: 5,
    title: "Dokončeno",
    text: "Po dokončení vám ukážeme výsledek a doladíme detaily. Následně web předáme. V rámci partnerství PREMIUM+ pokračujeme správou, hostingem, úpravami i vývojem.",
  },
];

/** Registration passage — numbered process on the left, consultation form on the right.
 *  Rendered at the bottom of every page except /kontakt. */
export function ConsultationSection({ className }: { className?: string | undefined }) {
  return (
    <section id="konzultace" className={cn("scroll-mt-24 border-t border-border bg-surface py-14 md:py-18", className)}>
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-violet">
              Jak to probíhá?
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold md:text-[2rem]">
              Pět kroků od konzultace k webu, který vydělává
            </h2>

            <ol className="mt-8 space-y-7">
              {steps.map((s, i) => (
                <li key={s.n} className="relative flex gap-5">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[1.05rem] top-9 h-[calc(100%+1.75rem-2.25rem)] w-px bg-border"
                    />
                  )}
                  <span className="relative z-10 grid size-[2.1rem] shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-primary-foreground shadow-brand">
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-base font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div id="konzultace-form" className="order-1 scroll-mt-24 lg:order-2 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-xl font-semibold md:text-2xl">
              Zamluvit si nezávaznou konzultaci
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vyberte termín, který vám vyhovuje. Konzultace je zdarma a bez závazků.
            </p>
            <CalEmbed className="mt-5 min-h-[640px] overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-lift md:p-4" />
          </div>

        </div>
      </div>
    </section>
  );
}
