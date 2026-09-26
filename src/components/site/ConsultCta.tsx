import type { ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "brand" | "banner" | "purple" | "outline" | "quiet" | "ghost" | "ink" | "default";

/** Scrolls to the registration passage on the current page; if the page has
 *  none (e.g. /kontakt), it navigates to the home page passage instead. */
export function ConsultCta({
  children = "Nezávazná konzultace",
  variant = "brand",
  size = "xl",
  className,
  withIcon = true,
  onNavigate,
}: {
  children?: ReactNode;
  variant?: Variant;
  size?: "lg" | "xl";
  className?: string;
  withIcon?: boolean;
  onNavigate?: () => void;
}) {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => {
        onNavigate?.();
        const el =
          document.getElementById("konzultace-form") ?? document.getElementById("konzultace");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          void navigate({ to: "/", hash: "konzultace-form" });
        }
      }}
    >

      {children}
      {withIcon && <ArrowRight />}
    </Button>
  );
}
