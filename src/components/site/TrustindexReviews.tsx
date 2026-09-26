import { useCallback, useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./primitives";

const GOOGLE_URL =
  "https://www.google.com/maps/place/Webneo/@49.2021525,16.577928,34672m/data=!3m1!1e3!4m8!3m7!1s0x2f95ebb93e9aeafb:0x8c6ca1e943f298fc!8m2!3d49.2021525!4d16.577928!9m1!1b1!16s%2Fg%2F11zbczblj6";

type Review = { name: string; avatar: string; rating: number; text: string };

const REVIEWS: Review[] = [
  {
    name: "Erik Palas",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLDh8zuSNRa7qQqeskeNSyF1b3FvPPCV9tNYEqrD9YgTvWJ-A=w45-h45-p-rp-mo-br100",
    rating: 5,
    text: "Jako fotograf mám opravdu vysoké nároky na vizuál, a proto mě spolupráce s borci opravdu velice mile překvapila. Již po první konzultaci Michal rychle a velice dobře pochopil moji představu a pak vytvořil moderní web, který opravdu skvěle vystihuje mou tvorbu jako fotografa. Oceňuji hlavně rychlost, kterou Michal pracoval, a také skvělou komunikaci, kterou jsme během spolupráce měli. Mě taky velice potěšil profesionální, ale zároveň lidský přístup, který Michal projevoval během naší spolupráce. Pokud hledáte někoho, kdo odvede opravdu kvalitní práci a kdo se bude opravdu zajímat o výsledek, tak můžu jenom doporučit spolupráci s Webneo a s Michalem.",
  },
  {
    name: "Stěhování D Gmail com",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXtVQHJV1Pr7V0zNc8gNYf_wRAsInpCJvYO-6UUKHyqvxeKeaT6=w45-h45-p-rp-mo-br100",
    rating: 5,
    text: "Při projektu pro naši stěhovací službu jsme využili služby Webneo a byli jsme spokojeni. Termín byl dodržen i s více pracemi.",
  },
  {
    name: "Jiří Coufal",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVnPtwxlUIX7Aoxmm1H4HHsJLavAyInvvEnEw6jBgxRXJqXdAl3qA=w45-h45-p-rp-mo-ba12-br100",
    rating: 5,
    text: "Skvělá zkušenost od prvního kontaktu. Spolupracujeme delší dobu i na více projektech.",
  },
];

function GoogleLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden className="shrink-0">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.6.27-3.15.76-4.59l-7.98-6.19A23.94 23.94 0 000 24c0 3.88.93 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.9-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

const CARD =
  "flex min-h-[285px] shrink-0 grow-0 flex-col rounded-[18px] border border-[#e8eaed] bg-white p-[26px] shadow-[0_5px_20px_rgba(0,0,0,0.045)]";

/** Google reviews slider (static data from Google profile). */
export function TrustindexReviews({
  tone = "surface",
  className,
}: {
  tone?: "white" | "surface";
  className?: string | undefined;
}) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragXRef = useRef(0);
  const movedRef = useRef(false);

  const measure = useCallback(() => {
    const w = window.innerWidth;
    setVisible(w <= 600 ? 1 : w <= 900 ? 2 : 3);
    setVw(viewportRef.current?.clientWidth ?? 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const total = REVIEWS.length + 1;
  const maxIndex = Math.max(0, total - visible);
  const gap = visible === 1 ? 14 : visible === 2 ? 18 : 24;
  const cardWidth = vw > 0 ? (vw - gap * (visible - 1)) / visible : 0;
  const clamped = Math.min(index, maxIndex);
  const step = cardWidth + gap;
  const baseOffset = clamped * step;

  const startDrag = useCallback(
    (clientX: number) => {
      isDraggingRef.current = true;
      movedRef.current = false;
      dragStartXRef.current = clientX;
      dragStartOffsetRef.current = baseOffset;
      dragXRef.current = baseOffset;
      setDragX(baseOffset);
      setIsDragging(true);
    },
    [baseOffset]
  );

  const moveDrag = useCallback(
    (clientX: number) => {
      if (!isDraggingRef.current) return;
      const delta = clientX - dragStartXRef.current;
      if (Math.abs(delta) > 4) movedRef.current = true;

      let next = dragStartOffsetRef.current - delta;
      const maxOffset = maxIndex * step;
      if (next < 0) next *= 0.35;
      else if (next > maxOffset) next = maxOffset + (next - maxOffset) * 0.35;

      dragXRef.current = next;
      setDragX(next);
    },
    [maxIndex, step]
  );

  const endDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const maxOffset = maxIndex * step;
    const target = Math.max(0, Math.min(maxOffset, dragXRef.current));
    const nearest = Math.round(target / step);
    setIndex(nearest);
  }, [maxIndex, step]);

  // Touch drag with non-passive move to block horizontal page scroll/back gesture.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      startDrag(touch.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      moveDrag(touch.clientX);
      if (movedRef.current) e.preventDefault();
    };
    const onTouchEnd = () => endDrag();

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [startDrag, moveDrag, endDrag]);

  // Mouse drag attached to window so releasing outside the viewport still ends the drag.
  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e: MouseEvent) => moveDrag(e.clientX);
    const onMouseUp = () => endDrag();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, moveDrag, endDrag]);

  const currentOffset = isDragging ? dragX : baseOffset;

  return (
    <Section tone={tone} className={className}>
      <SectionHeading
        align="center"
        eyebrow="Hodnocení na Googlu"
        title="Co říkají naši klienti"
        description="Nejlepší doporučení je hotová práce a spokojený majitel firmy."
      />

      <div className="relative mx-auto mt-8 w-full max-w-[1280px]">
        <div
          ref={viewportRef}
          className={`w-full overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={(e) => startDrag(e.clientX)}
        >
          <div
            className={`flex ${isDragging ? "" : "transition-transform duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)]"} ${isDragging ? "select-none" : ""}`}
            style={{ gap: `${gap}px`, transform: `translateX(-${currentOffset}px)` }}
          >
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className={CARD}
                style={cardWidth ? { width: `${cardWidth}px` } : undefined}
              >
                <div className="mb-[19px] flex items-center gap-[13px]">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="size-12 shrink-0 rounded-full bg-[#f1f3f4] object-cover"
                  />
                  <div className="min-w-0 flex-1 truncate text-[15px] font-semibold text-[#202124]">
                    {r.name}
                  </div>
                  <GoogleLogo size={22} />
                </div>
                <div className="mb-[13px] text-[18px] leading-none text-[#fbbc04]">
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>
                <p className="max-h-[155px] overflow-y-auto pr-2 text-[15px] leading-[1.62] text-[#3c4043]">
                  {r.text}
                </p>
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-[9px] pt-[22px] text-[13px] font-semibold text-[#5f6368] transition-colors hover:text-[#1a73e8]"
                >
                  <GoogleLogo size={18} />
                  Další recenze na Googlu
                </a>
              </article>
            ))}

            <article
              className={`${CARD} items-center justify-center p-7 text-center`}
              style={cardWidth ? { width: `${cardWidth}px` } : undefined}
            >
              <div className="mb-[14px]">
                <GoogleLogo size={46} />
              </div>
              <div className="text-[20px] font-semibold text-[#202124]">Webneo</div>
              <div className="mt-2 text-[35px] font-bold leading-none text-[#202124]">5,0</div>
              <div className="mt-2 text-[21px] leading-none tracking-[2px] text-[#fbbc04]">
                ★★★★★
              </div>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#70757a]">
                Přečtěte si recenze našich klientů
              </p>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[21px] inline-flex min-h-[43px] items-center justify-center rounded-lg bg-[#1a73e8] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1557b0]"
              >
                Napsat recenzi
              </a>
            </article>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Předchozí recenze"
            disabled={clamped <= 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="flex size-[42px] items-center justify-center rounded-full border border-[#dadce0] bg-white text-[#3c4043] transition hover:bg-[#f8f9fa] disabled:opacity-30"
          >
            ❮
          </button>
          <button
            type="button"
            aria-label="Další recenze"
            disabled={clamped >= maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            className="flex size-[42px] items-center justify-center rounded-full border border-[#dadce0] bg-white text-[#3c4043] transition hover:bg-[#f8f9fa] disabled:opacity-30"
          >
            ❯
          </button>
        </div>
      </div>
    </Section>
  );
}
