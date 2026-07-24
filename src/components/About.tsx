import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

const RING_STYLES = [
  { radius: 160, fill: "#2B3238", opacity: 0.06, stroke: "#2B3238", delay: "0s" },
  { radius: 110, fill: "#6B7F5E", opacity: 0.12, stroke: "#6B7F5E", delay: "0.6s" },
  { radius: 60, fill: "#B5502F", opacity: 0.18, stroke: "#B5502F", delay: "1.2s" },
];

export function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [research, policy, community] = siteContent.about.diagram.rings;

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center`}
      >
        <div>
          <span className="text-iudpr-terracotta text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.about.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-semibold text-iudpr-slate mt-3 mb-6">
            {siteContent.about.heading}
          </h2>
          <p className="text-iudpr-muted leading-relaxed text-base md:text-lg">
            {siteContent.about.body}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {siteContent.about.affiliations.map((item) => (
              <span
                key={item}
                className="text-xs font-medium uppercase tracking-wide text-iudpr-slate bg-iudpr-slate/5 border border-iudpr-slate/10 rounded-full px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-[380px] h-auto">
            {RING_STYLES.map((ring) => (
              <circle
                key={ring.radius}
                cx="200"
                cy="200"
                r={ring.radius}
                fill={ring.fill}
                fillOpacity={ring.opacity}
                stroke={ring.stroke}
                strokeOpacity={0.35}
                strokeWidth="1.5"
                className="animate-ring-pulse origin-center"
                style={{ animationDelay: ring.delay, transformOrigin: "200px 200px" }}
              />
            ))}
            <text
              x="200"
              y="52"
              textAnchor="middle"
              className="fill-iudpr-slate text-[15px] font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {research}
            </text>
            <text
              x="200"
              y="102"
              textAnchor="middle"
              className="fill-iudpr-sage text-[15px] font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {policy}
            </text>
            <text
              x="200"
              y="205"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-iudpr-terracotta text-[15px] font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {community}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
