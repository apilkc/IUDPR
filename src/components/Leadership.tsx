import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

type Person = (typeof siteContent.leadership.people)[number];

function LeadershipCard({ person, index }: { person: Person; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const isChair = person.boardRole === "Chair";

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div
        className={`h-full bg-white rounded-2xl p-6 border ${
          isChair
            ? "border-iudpr-terracotta/30 ring-1 ring-iudpr-terracotta/20"
            : "border-iudpr-slate/10"
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 rounded-full bg-iudpr-terracotta/10 flex items-center justify-center">
            <span className="font-display text-xl text-iudpr-terracotta">
              {person.initials}
            </span>
          </div>
          <span
            className={`text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1 ${
              isChair
                ? "bg-iudpr-terracotta/10 text-iudpr-terracotta"
                : "bg-iudpr-slate/10 text-iudpr-slate"
            }`}
          >
            {person.boardRole}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-iudpr-slate">
          {person.name}
        </h3>
        {person.credentials && (
          <p className="text-xs text-iudpr-muted uppercase tracking-wide mt-0.5">
            {person.credentials}
          </p>
        )}
        <p className="text-sm text-iudpr-muted mt-1">{person.title}</p>
        <p className="text-sm leading-relaxed text-iudpr-slate/80 mt-3">
          {person.bio}
        </p>
      </div>
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 bg-white/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-terracotta text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.leadership.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-semibold text-iudpr-slate mt-3 mb-4">
            {siteContent.leadership.heading}
          </h2>
          <p className="text-iudpr-muted leading-relaxed">
            {siteContent.leadership.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {siteContent.leadership.people.map((person, index) => (
            <LeadershipCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
