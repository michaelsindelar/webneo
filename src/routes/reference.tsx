import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { BrandBanner } from "@/components/site/BrandBanner";
import { ConsultCta } from "@/components/site/ConsultCta";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";
import { PortfolioCarousel } from "@/components/site/PortfolioCarousel";
import fotopalas from "@/assets/ref-fotopalas.jpg";
import esmeralda from "@/assets/ref-esmeralda.jpg";
import afrodita from "@/assets/ref-afrodita.jpg";

export const Route = createFileRoute("/reference")({
  head: () => ({
    meta: [
      { title: "Reference — portfolio realizovaných webů | Webneo" },
      {
        name: "description",
        content:
          "Portfolio Webneo: Foto Palásek, Restaurace Esmeralda a Afrodita Reality. Podívejte se na naši tvorbu a hodnocení klientů na Googlu.",
      },
      { property: "og:title", content: "Reference a portfolio | Webneo" },
      {
        property: "og:description",
        content: "Naše tvorba — Foto Palásek, Restaurace Esmeralda a Afrodita Reality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: References,
});

const projects = [
  {
    name: "Foto Palásek",
    field: "Fotografie",
    note: null as string | null,
    url: "https://webneopro.github.io/fotopalas/",
    image: fotopalas,
    text: "Osobní web fotografa, kde tvorba mluví na první pohled. Portfolio, služby a poptávkový formulář v jednom čistém celku.",
  },
  {
    name: "Restaurace Esmeralda",
    field: "Gastro",
    note: "demonstrační model",
    url: "https://webneopro.github.io/esmeralda/",
    image: esmeralda,
    text: "Ukázka webu pro restauraci — atmosféra, menu, otevírací doba a rezervace na jedno kliknutí.",
  },
  {
    name: "Afrodita Reality",
    field: "Reality",
    note: "demonstrační model",
    url: "https://webneopro.github.io/afrodita/",
    image: afrodita,
    text: "Ukázka webu realitní kanceláře — nabídka nemovitostí, důvěryhodná prezentace makléřů a sběr poptávek.",
  },
];


function References() {
  return (
    <>
      <BrandBanner size="sm">
        <Eyebrow tone="light">Portfolio</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] text-primary-foreground md:text-[3rem] rise-in">
          Naše tvorba, která{" "}
          <span className="bg-gradient-to-r from-[oklch(0.95_0.02_285)] to-[oklch(0.8_0.14_255)] bg-clip-text text-transparent">
            mluví za nás
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Reálné projekty i demonstrační modely, na kterých ukazujeme, jak přistupujeme k designu,
          struktuře a konverzím.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ConsultCta variant="banner" />
          <Button
            type="button"
            size="xl"
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Prohlédnout tvorbu <ArrowDown />
          </Button>
        </div>
      </BrandBanner>

      <Section id="portfolio" className="scroll-mt-24 pb-8 pt-10 md:pb-10 md:pt-12">
        <SectionHeading eyebrow="Portfolio" title="Naše tvorba" />
        <PortfolioCarousel projects={projects} />
      </Section>

      <TrustindexReviews tone="surface" className="py-8 md:py-10" />

      <ConsultationSection className="py-8 md:py-10" />
    </>
  );
}
