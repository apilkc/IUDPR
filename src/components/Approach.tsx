import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

function ApproachCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} snap-start shrink-0 w-[260px] sm:w-auto bg-white rounded-2xl p-6 border border-iudpr-slate/10 hover:border-iudpr-terracotta/30 transition-colors duration-300`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <span className="font-display text-4xl text-iudpr-terracotta/25">
        {number}
      </span>
      <div
        className="h-[2px] bg-iudpr-terracotta mt-3 mb-4 transition-[width] duration-700 ease-out"
        style={{ width: isVisible ? "40px" : "0px" }}
      />
      <h3 className="font-display text-lg font-semibold text-iudpr-slate mb-2">
        {title}
      </h3>
      <p className="text-sm text-iudpr-muted leading-relaxed">{description}</p>
    </div>
  );
}

export function Approach() {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-terracotta text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.approach.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-semibold text-iudpr-slate mt-3">
            {siteContent.approach.heading}
          </h2>
        </div>

        <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6">
          {siteContent.approach.items.map((item, index) => (
            <ApproachCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.approach.items.map((item, index) => (
            <ApproachCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
