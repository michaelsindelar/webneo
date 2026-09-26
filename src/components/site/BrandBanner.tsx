import type { ReactNode } from "react";
import heroBg from "@/assets/pozadi.png";

/** Animated brand banner: background artwork, moving grid, floating orbs,
 *  full-width sheen sweep and chart lines that draw themselves upwards. */
export function BrandBanner({
  children,
  size = "lg",
}: {
  children: ReactNode;
  size?: "lg" | "sm";
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.22_0.12_275_/_0.55)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-light grid-pan" />

      {/* floating light orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-6 -z-10 h-72 w-72 rounded-full bg-[oklch(0.7_0.2_290_/_0.35)] blur-3xl float-orb"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="pointer-events-none absolute left-1/3 -top-16 -z-10 h-64 w-64 rounded-full bg-[oklch(0.75_0.16_300_/_0.25)] blur-3xl float-orb"
        style={{ animationDelay: "-9s" }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-[oklch(0.65_0.2_255_/_0.35)] blur-3xl float-orb"
        style={{ animationDelay: "-6s" }}
      />

      {/* full width sheen */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-[oklch(1_0_0_/_0.14)] to-transparent sheen-sweep" />
      </div>


      <div
        className={`container-page relative flex flex-col items-center justify-center text-center ${
          size === "lg" ? "py-10 md:py-14" : "py-8 md:py-12"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
