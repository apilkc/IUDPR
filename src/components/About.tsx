import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

const RING_STYLES = [
  { radius: 160, color: "var(--iudpr-fg)", fillOpacity: 0.06 },
  { radius: 110, color: "var(--iudpr-muted)", fillOpacity: 0.15 },
  { radius: 60, color: "var(--iudpr-accent)", fillOpacity: 0.18 },
];

const LABEL_POSITIONS = [
  { x: 200, y: 52 },
  { x: 200, y: 102 },
  { x: 200, y: 205 },
];

export function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const rings = siteContent.about.diagram.rings;
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 2;

  return (
    <section id="about" className="py-28 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center`}
      >
        <div>
          <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.about.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-iudpr-fg mt-3 mb-6">
            {siteContent.about.heading}
          </h2>
          <p className="text-iudpr-muted leading-relaxed text-base md:text-lg">
            {siteContent.about.body}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {siteContent.about.affiliations.map((item) => (
              <span
                key={item}
                className="text-xs font-medium uppercase tracking-wide text-iudpr-fg bg-iudpr-fg/5 border border-iudpr-fg/10 rounded-full px-3.5 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-[380px] h-auto">
            {/* Orbiting markers give the diagram continuous, quiet motion */}
            <g
              className="animate-orbit"
              style={{ transformOrigin: "200px 200px" }}
            >
              <circle cx="200" cy="40" r="4" fill="var(--iudpr-fg)" fillOpacity="0.5" />
            </g>
            <g
              className="animate-orbit-reverse"
              style={{ transformOrigin: "200px 200px" }}
            >
              <circle cx="200" cy="90" r="3.5" fill="var(--iudpr-muted)" />
            </g>

            {RING_STYLES.map((ring, index) => {
              const isActive = active === index;
              return (
                <circle
                  key={ring.radius}
                  cx="200"
                  cy="200"
                  r={ring.radius}
                  fill={ring.color}
                  fillOpacity={ring.fillOpacity}
                  stroke={ring.color}
                  strokeOpacity={isActive ? 0.7 : 0.3}
                  strokeWidth={isActive ? 2 : 1.5}
                  className="cursor-pointer transition-all duration-300 origin-center"
                  style={{
                    transformOrigin: "200px 200px",
                    transform: isActive ? "scale(1.02)" : "scale(1)",
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}

            {rings.map((ring, index) => (
              <text
                key={ring.label}
                x={LABEL_POSITIONS[index].x}
                y={LABEL_POSITIONS[index].y}
                textAnchor="middle"
                dominantBaseline={index === 2 ? "middle" : undefined}
                className="pointer-events-none transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: active === index ? 700 : 500,
                  fill:
                    active === index
                      ? "var(--iudpr-accent)"
                      : index === 0
                        ? "var(--iudpr-fg)"
                        : "var(--iudpr-muted)",
                }}
              >
                {ring.label}
              </text>
            ))}
          </svg>

          <p className="text-sm text-iudpr-muted text-center leading-relaxed mt-2 max-w-[320px] min-h-[40px]">
            {rings[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
