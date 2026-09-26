import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        tone === "light"
          ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80"
          : "border-border bg-surface text-violet",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string | undefined;
  tone?: "white" | "surface" | "ink";
  id?: string | undefined;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 md:py-18",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-gradient-ink text-primary-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-3xl font-semibold leading-[1.1] md:text-[2.6rem]",
          tone === "light" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-[1.05rem]",
            tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({
  index,
  title,
  children,
}: {
  index?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-violet/30 hover:shadow-lift">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">{title}</h3>
        {index && <span className="font-display text-sm text-muted-foreground/60">{index}</span>}
      </div>
      <div className="mt-4 h-px w-full bg-border" />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-12 pt-12 md:pb-16 md:pt-16">
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-60" />
      <div className="container-page relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
