import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/pozadi.png";
import { Button } from "@/components/ui/button";

/** Full-width brand band that leads to the PREMIUM+ page. */
export function PremiumBand({
  title = "Zní takové partnerství férově?",
  description = "Zjistěte více o partnerství PREMIUM+ a získejte kompletní řešení pro váš web včetně podpory, zabezpečení a pravidelných aktualizací.",
  label = "Objevit PREMIUM+",
}: {
  title?: string;
  description?: string;
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-y-[3px] border-[oklch(0.62_0.18_255)]">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[oklch(0.28_0.16_285_/_0.55)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-light opacity-40" />
      <div className="container-page relative py-12 text-center md:py-14">
        <h2 className="font-display text-2xl font-semibold text-primary-foreground md:text-[2.1rem]">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm italic leading-relaxed text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-7 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/55 bg-transparent text-primary-foreground transition-all duration-500 hover:border-primary-foreground hover:bg-primary-foreground hover:text-navy"
          >
            <Link to="/premium-plus">{label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
