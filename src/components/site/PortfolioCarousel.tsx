import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PortfolioProject = {
  name: string;
  field: string;
  note: string | null;
  url: string;
  image: string;
  text: string;
};

export function PortfolioCarousel({ projects }: { projects: PortfolioProject[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef(0);
  const scrollStartRef = useRef(0);
  const movedRef = useRef(false);

  const measure = useCallback(() => {
    const width = window.innerWidth;
    setVisible(width <= 600 ? 1 : width <= 900 ? 2 : 3);
    setViewportWidth(viewportRef.current?.clientWidth ?? 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const gap = visible === 1 ? 14 : visible === 2 ? 18 : 24;
  const cardWidth = viewportWidth > 0 ? (viewportWidth - gap * (visible - 1)) / visible : 0;
  const maxIndex = Math.max(0, projects.length - visible);
  const step = cardWidth + gap;

  const moveTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, next));
      setIndex(clamped);
      viewportRef.current?.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [maxIndex, step],
  );

  useEffect(() => {
    const element = viewportRef.current;
    if (!dragging || !element) return;
    const move = (event: MouseEvent) => {
      const delta = event.clientX - dragStartRef.current;
      if (Math.abs(delta) > 4) movedRef.current = true;
      element.scrollLeft = scrollStartRef.current - delta;
    };
    const end = () => {
      setDragging(false);
      moveTo(Math.round(element.scrollLeft / step));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    };
  }, [dragging, moveTo, step]);

  return (
    <div className="relative mt-7">
      <div
        ref={viewportRef}
        className={`overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing select-none scroll-auto" : "cursor-grab snap-x snap-mandatory"}`}
        onMouseDown={(event) => {
          const element = viewportRef.current;
          if (!element) return;
          movedRef.current = false;
          dragStartRef.current = event.clientX;
          scrollStartRef.current = element.scrollLeft;
          setDragging(true);
        }}
        onScroll={(event) => {
          if (!dragging && step > 0) setIndex(Math.round(event.currentTarget.scrollLeft / step));
        }}
      >
        <div className="flex" style={{ gap: `${gap}px` }}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                if (movedRef.current) event.preventDefault();
              }}
              className="group flex min-h-[430px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-violet/30 hover:shadow-lift"
              style={cardWidth ? { width: `${cardWidth}px` } : undefined}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                <img
                  src={project.image}
                  alt={`Web projektu ${project.name}`}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-violet backdrop-blur">
                  Zobrazit projekt <ArrowUpRight className="size-3.5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet">
                  {project.field}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{project.name}</h3>
                {project.note && <span className="mt-1 text-xs italic text-muted-foreground">({project.note})</span>}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <Button type="button" variant="quiet" size="icon" aria-label="Předchozí projekt" disabled={index <= 0} onClick={() => moveTo(index - 1)}>
          <ArrowLeft />
        </Button>
        <Button type="button" variant="quiet" size="icon" aria-label="Další projekt" disabled={index >= maxIndex} onClick={() => moveTo(index + 1)}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}