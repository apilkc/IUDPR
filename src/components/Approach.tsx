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
      className={`reveal ${isVisible ? "is-visible" : ""} snap-start shrink-0 w-[260px] sm:w-auto bg-iudpr-surface rounded-2xl p-8 border border-iudpr-fg/10 hover:border-iudpr-accent/30 transition-colors duration-300`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <span className="font-display text-4xl font-black text-iudpr-accent/25">
        {number}
      </span>
      <div
        className="h-[2px] bg-iudpr-accent mt-3 mb-4 transition-[width] duration-700 ease-out"
        style={{ width: isVisible ? "40px" : "0px" }}
      />
      <h3 className="font-display text-lg font-bold text-iudpr-fg mb-2">
        {title}
      </h3>
      <p className="text-sm text-iudpr-muted leading-relaxed">{description}</p>
    </div>
  );
}

export function Approach() {
  return (
    <section id="approach" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-14">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-iudpr-muted">
              {siteContent.approach.statementLead}
            </span>
            <br />
            <span className="text-iudpr-fg">
              {siteContent.approach.statementMain}
              <span className="text-iudpr-accent">.</span>
            </span>
          </p>
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

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
