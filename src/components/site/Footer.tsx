import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Navigace",
    links: [
      { to: "/", label: "Domů" },
      { to: "/sluzby", label: "Služby" },
      { to: "/premium-plus", label: "PREMIUM+" },
      { to: "/reference", label: "Reference" },
      { to: "/o-nas", label: "O nás" },
      { to: "/kontakt", label: "Kontakt" },
      { to: "/gdpr", label: "GDPR" },
    ],
  },
];

const provides = [
  "Konzultace a návrh řešení",
  "Design webové stránky",
  "Realizace a konfigurace webu",
  "Správa a úpravy webu",
  "Periferie a integrace",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="full" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Prémiová webová studia pro firmy, které chtějí web jako obchodní nástroj — ne jako
              vizitku. Strategie, design, realizace a dlouhodobá péče.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href="mailto:support@webneo.pro"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-violet"
              >
                <Mail className="size-4 text-violet" /> support@webneo.pro
              </a>
              <a
                href="tel:+420721193208"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-violet"
              >
                <Phone className="size-4 text-violet" /> +420 721 193 208
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group relative inline-block py-0.5 text-foreground/80 transition-colors hover:text-violet"
                    >
                      {l.label}
                      <span
                        aria-hidden="true"
                        className="nav-underline-line left-0 right-0 bottom-0 group-hover:scale-x-100"
                      />
                    </Link>
                  </li>

                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Co poskytujeme
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              {provides.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground md:grid-cols-2">
          <div>
            <p className="font-semibold text-foreground">Provozovatel webu</p>
            <p className="mt-1">
              Michael Šindelář · Sídlo: Ondrouškova 18, 635 00 Brno · IČO: 24473359
              <br />
              michael.sindelar@webneo.pro · +420 721 193 208
              <br />
              Zapsán v živnostenském rejstříku vedeném Magistrátem města Brna
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Spolupracující partner</p>
            <p className="mt-1">
              Jiří Novák · Sídlo: Myslivní 29, 623 00 Brno · IČO: 23584726
              <br />
              jiri.novak@webneo.pro · +420 732 570 355
              <br />
              Zapsán v živnostenském rejstříku vedeném Magistrátem města Brna
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          „Webneo“ je obchodní značka používaná provozovatelem tohoto webu a jeho spolupracujícími
          partnery. Nejedná se o právnickou osobu. © {new Date().getFullYear()} Obchodní značka
          Webneo (Michael Šindelář).
        </p>
      </div>
    </footer>
  );
}
