import { Link } from "@tanstack/react-router";
import logoDark from "@/assets/logo-s-nazvem.png";
import logoWhite from "@/assets/logo-web-header-bila.png";
import logoWebHeader from "@/assets/logo-web-header.png";

export function Logo({ tone = "dark", variant = "default" }: { tone?: "dark" | "light"; variant?: "default" | "full" }) {
  const src = variant === "full" ? logoWebHeader : (tone === "light" ? logoWhite : logoDark);

  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Webneo — domů">
      <img
        src={src}
        alt="Webneo — Budoucnost digitální éry"
        className="w-[149px] aspect-[1024/247] shrink-0 transition-transform duration-300 group-hover:scale-[1.03] md:w-[166px]"
      />
    </Link>
  );
}