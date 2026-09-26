import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { FaqAccordion } from "@/components/site/FaqAccordion";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — napište nám nebo volejte | Webneo" },
      {
        name: "description",
        content:
          "Kontakty na Michaela Šindeláře a Jiřího Nováka, adresa v Brně a formulář pro dotazy i poptávky. Odpovídáme do jednoho pracovního dne.",
      },
      { property: "og:title", content: "Kontakt | Webneo" },
      {
        property: "og:description",
        content: "Kontakty na tým Webneo, adresa v Brně a formulář pro dotazy a poptávky.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const people = [
  {
    initials: "MŠ",
    name: "Michael Šindelář",
    role: "Strategie, konzultace a design",
    email: "michael.sindelar@webneo.pro",
    phone: "+420 721 193 208",
    tel: "+420721193208",
    address: "Ondrouškova 18, 635 00 Brno · IČO: 24473359",
  },
  {
    initials: "JN",
    name: "Jiří Novák",
    role: "Realizace, technologie a provoz",
    email: "jiri.novak@webneo.pro",
    phone: "+420 732 570 355",
    tel: "+420732570355",
    address: "Myslivní 29, 623 00 Brno · IČO: 23584726",
  },
];

const faqs = [
  {
    q: "Jak dlouho trvá realizace?",
    a: "Standardní webová řešení dodáváme do týdne od schválení návrhu. Rozsáhlejší projekty plánujeme individuálně a průběžně reportujeme postup.",
  },
  {
    q: "Kolik web stojí?",
    a: "Jednostránkové weby startují od 19 900 Kč, kompletní firemní weby od 44 900 Kč. Konečnou cenu navrhujeme po konzultaci podle rozsahu.",
  },
  {
    q: "Co když nemám podklady ani jasnou vizi?",
    a: "To je běžné. Na konzultaci se ptáme na správné otázky, provedeme analýzu a vizi zformulujeme za vás — včetně struktury a textů.",
  },
  {
    q: "Postaráte se o web i po předání?",
    a: "Ano, v rámci partnerství PREMIUM+ přebíráme hosting, zabezpečení, aktualizace, podporu 24/7 i průběžný rozvoj.",
  },
];

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Napište nám nebo <span className="text-gradient-brand">volejte přímo</span>
          </>
        }
        description="Máte dotaz nebo konkrétní poptávku? Ozvěte se — odpovídáme obvykle do jednoho pracovního dne. Chcete-li rovnou konzultaci, zaregistrujte se na termín."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="brand" size="xl">
            <Link to="/" hash="konzultace-form">
              Registrace na konzultaci <ArrowRight />
            </Link>
          </Button>
          <Button
            type="button"
            variant="quiet"
            size="xl"
            onClick={() => document.getElementById("kontaktni-obsah")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Napsat nebo zavolat <ArrowRight />
          </Button>
        </div>
      </PageHero>

      <Section id="kontaktni-obsah" className="scroll-mt-24 pb-8 pt-10 md:pb-10 md:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-lift md:p-9">
            <h2 className="font-display text-2xl font-semibold">Dotaz nebo poptávka</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Napište, s čím vám můžeme pomoci. Ozveme se do jednoho pracovního dne.
            </p>
            <form
              className="mt-7 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                const form = e.currentTarget;
                try {
                  const response = await fetch("https://formsubmit.co/ajax/michael.sindelar@webneo.pro", {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: new FormData(form),
                  });
                  if (!response.ok) throw new Error("FormSubmit request failed");
                  setSending(false);
                  form.reset();
                  toast.success("Zpráva odeslána", {
                    description: "Ozveme se vám nejpozději do jednoho pracovního dne.",
                  });
                } catch {
                  setSending(false);
                  toast.error("Zprávu se nepodařilo odeslat", {
                    description: "Zkuste to prosím znovu nebo nám napište přímo e-mailem.",
                  });
                }
              }}
            >
              <input type="hidden" name="_subject" value="Nová poptávka z webu Webneo" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Jméno a příjmení</Label>
                  <Input id="name" name="name" required placeholder="Jan Novák" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" required placeholder="jan@firma.cz" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Vaše zpráva</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Dotaz, poptávka nebo cokoliv dalšího…"
                />
              </div>
              <Button type="submit" variant="brand" size="xl" disabled={sending} className="w-full">
                {sending ? "Odesílám…" : "Odeslat zprávu"} <ArrowRight />
              </Button>
              <p className="text-xs text-muted-foreground">
                Odesláním souhlasíte se zpracováním údajů pro účely zpracování dotazu.
              </p>
            </form>
          </div>

          <div className="space-y-5">
            {people.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-xs font-semibold text-primary-foreground">
                    {p.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold">{p.name}</p>
                    <p className="truncate text-xs text-violet">{p.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2 text-foreground transition-colors hover:text-violet"
                  >
                    <Mail className="size-4 shrink-0 text-violet" /> {p.email}
                  </a>
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-2 text-foreground transition-colors hover:text-violet"
                  >
                    <Phone className="size-4 shrink-0 text-violet" /> {p.phone}
                  </a>
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-violet" /> {p.address}
                  </p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-surface p-6 text-sm">
              <p className="flex items-center gap-2 text-foreground">
                <Clock className="size-4 shrink-0 text-violet" /> Po–Pá 9:00–18:00 · PREMIUM+ podpora
                24/7
              </p>
              <a
                href="mailto:support@webneo.pro"
                className="mt-2 flex items-center gap-2 text-foreground transition-colors hover:text-violet"
              >
                <Mail className="size-4 shrink-0 text-violet" /> support@webneo.pro
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="py-8 md:py-10">
        <SectionHeading align="center" eyebrow="Časté dotazy" title="Než nám napíšete" />
        <FaqAccordion items={faqs} />
      </Section>
    </>
  );
}
