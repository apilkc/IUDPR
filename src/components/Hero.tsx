import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/content/site-content";

const SKYLINE_PATH =
  "M0,150 L90,150 L140,85 L165,115 L190,60 L215,115 L240,85 L290,150 L400,150 L455,95 L478,132 L505,62 L532,132 L555,95 L610,150 L740,150 Q790,100 840,150 Q890,100 940,150 L1010,150 L1055,65 L1082,112 L1105,72 L1128,112 L1160,150 L1200,150";

export function Hero() {
  const [drawn, setDrawn] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDrawn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden flex flex-col"
    >
      {/* Drifting topographic pattern */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 animate-drift pointer-events-none"
        style={{ width: "108%", left: "-4%" }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="topo"
              width="400"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,40 Q100,0 200,40 T400,40"
                fill="none"
                stroke="#2B3238"
                strokeOpacity="0.06"
                strokeWidth="1.5"
              />
              <path
                d="M0,120 Q100,80 200,120 T400,120"
                fill="none"
                stroke="#2B3238"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M0,200 Q100,160 200,200 T400,200"
                fill="none"
                stroke="#2B3238"
                strokeOpacity="0.06"
                strokeWidth="1.5"
              />
              <path
                d="M0,270 Q100,240 200,270 T400,270"
                fill="none"
                stroke="#2B3238"
                strokeOpacity="0.04"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      {/* Hand-drawn skyline, pinned to hero bottom */}
      <svg
        aria-hidden
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 inset-x-0 z-[1] w-full h-[22vh] max-h-[220px] pointer-events-none"
      >
        <path
          d={SKYLINE_PATH}
          fill="none"
          stroke="#B5502F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 2400,
            strokeDashoffset: drawn ? 0 : 2400,
            transition: "stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </svg>

      {/* Top gradient so nav/headline stay legible */}
      <div
        className="absolute inset-x-0 top-0 h-[500px] pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(246,241,234,1) 0%, rgba(246,241,234,0) 100%)",
        }}
      />

      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-24 text-center max-w-[1280px] mx-auto">
        <span className="text-iudpr-terracotta text-sm font-semibold uppercase tracking-[0.2em] mb-5">
          {siteContent.hero.eyebrow}
        </span>
        <h1 className="font-display text-[clamp(36px,6vw,64px)] font-semibold text-iudpr-slate leading-[1.1] max-w-[820px]">
          {siteContent.hero.headline}
        </h1>
        <p className="text-lg text-iudpr-muted max-w-[560px] mt-6 leading-relaxed">
          {siteContent.hero.subhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#contact"
            className="bg-iudpr-terracotta text-white px-6 py-3.5 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-iudpr-terracotta-dark active:scale-95 transition-all"
          >
            {siteContent.hero.primaryCta}
          </a>
          <a
            href="#focus-areas"
            className="border border-iudpr-slate/30 text-iudpr-slate px-6 py-3.5 rounded-full text-sm font-medium uppercase tracking-wide hover:border-iudpr-slate active:scale-95 transition-all"
          >
            {siteContent.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div
        className={`relative z-[2] flex justify-center pb-8 transition-opacity duration-500 ${
          scrolledPast ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <ChevronDown className="w-6 h-6 text-iudpr-slate/50 animate-bounce" />
      </div>
    </section>
  );
}
