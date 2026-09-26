import { useEffect } from "react";

/** Adds a restrained entrance animation to page content as it enters the viewport. */
export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector = [
      "main section > .container-page > *",
      "main section > .container-page > div > *",
      "main section article",
    ].join(",");

    const reveal = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (element.dataset["revealReady"]) return;
        element.dataset["revealReady"] = "true";

        if (reducedMotion || element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.classList.add("is-revealed");
          return;
        }

        element.classList.add("scroll-reveal");
        observer.observe(element);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    // Let React finish hydrating all lazy route content before decorating the DOM.
    const initialTimer = window.setTimeout(() => reveal(document), 600);
    let mutationTimer: number | undefined;
    const mutations = new MutationObserver(() => {
      window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(() => reveal(document), 250);
    });
    mutations.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(mutationTimer);
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}