import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { siteContent } from "@/content/site-content";

function StatItem({
  value,
  suffix,
  label,
  active,
  formatAsYear,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  formatAsYear: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-black text-iudpr-accent">
        {formatAsYear ? count : count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wide text-iudpr-ink-fg/70 mt-2">
        {label}
      </div>
    </div>
  );
}

export function StatsBand() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-iudpr-ink text-iudpr-ink-fg py-16">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10"
      >
        {siteContent.stats.map((stat) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            active={isVisible}
            formatAsYear={stat.value > 1900}
          />
        ))}
      </div>
    </section>
  );
}
