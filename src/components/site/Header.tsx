import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ConsultCta } from "./ConsultCta";

const nav = [
  { to: "/sluzby", label: "Služby" },
  { to: "/premium-plus", label: "PREMIUM+" },
  { to: "/reference", label: "Reference" },
  { to: "/o-nas", label: "O nás" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-violet" }}
            >
              {item.label}
              <span
                aria-hidden="true"
                className="nav-underline-line group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/kontakt"
            className="group relative px-1.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-violet" }}
          >
            Kontakt
            <span
              aria-hidden="true"
              className="nav-underline-line left-1.5 right-1.5 group-hover:scale-x-100"
            />
          </Link>
          <ConsultCta size="lg" />
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {[...nav, { to: "/kontakt", label: "Kontakt" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <ConsultCta size="lg" className="mt-2" onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
