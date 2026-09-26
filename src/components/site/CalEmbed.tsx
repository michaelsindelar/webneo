import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/** Cal.com booking embed for the consultation registration. */
export function CalEmbed({ className }: { className?: string }) {
  useEffect(() => {
    void (async function () {
      const cal = await getCalApi({ namespace: "konzultace" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#0023ff" }, dark: { "cal-brand": "#0023ff" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      className={
        className ??
        "overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-lift md:p-4"
      }
    >
      <Cal
        namespace="konzultace"
        calLink="webneo/konzultace"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }}
      />
    </div>
  );
}
