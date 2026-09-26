import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

/** Questions as headings; the answer reveals on click. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto mt-8 max-w-3xl">
      {items.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`faq-${i}`}
          className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-6 shadow-soft transition-colors hover:border-violet/30"
        >
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline md:text-lg">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
