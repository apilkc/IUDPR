import { useEffect, useState, type ReactNode, type SVGProps } from "react";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";
import { avatarUrl, teamBoard, teamStaff, type TeamEntry } from "@/lib/content";

type Person = TeamEntry;

function GroupHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-16 first:mt-0">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-iudpr-muted whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-iudpr-fg/10" />
    </div>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PersonModal({ person, onClose }: { person: Person; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={person.frontmatter.name}
        className="relative bg-iudpr-surface rounded-2xl max-w-lg w-full p-8 shadow-2xl animate-modal-in max-h-[85vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-iudpr-muted hover:bg-iudpr-fg/5 hover:text-iudpr-fg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={avatarUrl(person.slug, person.frontmatter.photo)}
          alt={person.frontmatter.name}
          className="w-20 h-20 rounded-full object-cover ring-1 ring-iudpr-fg/10 mb-4"
        />
        <h3 className="font-display text-xl font-bold tracking-tight text-iudpr-fg">
          {person.frontmatter.name}
        </h3>
        {person.frontmatter.credentials && (
          <p className="text-xs text-iudpr-muted uppercase tracking-wide mt-0.5">
            {person.frontmatter.credentials}
          </p>
        )}
        <p className="text-sm text-iudpr-accent font-semibold mt-1">
          {person.frontmatter.role}
        </p>
        <p className="text-sm leading-relaxed text-iudpr-fg/80 mt-4">
          {person.bio}
        </p>

        <div className="flex items-center gap-3 mt-6">
          <a
            href={person.frontmatter.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.frontmatter.name} on LinkedIn`}
            className="text-iudpr-muted hover:text-iudpr-accent transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={person.frontmatter.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.frontmatter.name} on Twitter`}
            className="text-iudpr-muted hover:text-iudpr-accent transition-colors"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function PersonCard({
  person,
  index,
  onReadMore,
}: {
  person: Person;
  index: number;
  onReadMore: (person: Person) => void;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
    >
      <div className="group h-full bg-iudpr-surface rounded-2xl border border-iudpr-fg/10 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-iudpr-accent/30">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-1 ring-iudpr-fg/10 group-hover:ring-iudpr-accent/40 transition-all duration-300">
          <img
            src={avatarUrl(person.slug, person.frontmatter.photo)}
            alt={person.frontmatter.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="font-display text-base font-bold text-iudpr-fg">
          {person.frontmatter.name}
        </h3>
        {person.frontmatter.credentials && (
          <p className="text-[11px] text-iudpr-muted uppercase tracking-wide mt-0.5">
            {person.frontmatter.credentials}
          </p>
        )}
        <p className="text-xs text-iudpr-accent font-semibold uppercase tracking-wide mt-1.5">
          {person.frontmatter.role}
        </p>
        <p className="text-sm text-iudpr-muted leading-relaxed mt-3">
          {person.frontmatter.brief}
        </p>
        <button
          type="button"
          onClick={() => onReadMore(person)}
          className="text-sm font-semibold text-iudpr-accent hover:opacity-70 transition-opacity mt-3"
        >
          Read more
        </button>
        <div className="flex items-center gap-3 mt-4">
          <a
            href={person.frontmatter.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.frontmatter.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
            className="text-iudpr-muted hover:text-iudpr-accent transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={person.frontmatter.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.frontmatter.name} on Twitter`}
            onClick={(e) => e.stopPropagation()}
            className="text-iudpr-muted hover:text-iudpr-accent transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-[-4%] top-0 h-[420px] z-0 animate-drift pointer-events-none"
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="team-topo" width="400" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M0,40 Q100,0 200,40 T400,40"
                fill="none"
                stroke="var(--iudpr-fg)"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M0,120 Q100,80 200,120 T400,120"
                fill="none"
                stroke="var(--iudpr-fg)"
                strokeOpacity="0.04"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-topo)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.team.eyebrow}
          </span>
          <h1 className="font-display text-4xl font-black tracking-tight text-iudpr-fg mt-3 mb-4">
            {siteContent.team.heading}
          </h1>
          <p className="text-iudpr-muted leading-relaxed">
            {siteContent.team.intro}
          </p>
        </div>

        <GroupHeading>Board &amp; Advisors</GroupHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamBoard.map((person, index) => (
            <PersonCard
              key={person.slug}
              person={person}
              index={index}
              onReadMore={setActivePerson}
            />
          ))}
        </div>

        <GroupHeading>Research &amp; Admin Team</GroupHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamStaff.map((person, index) => (
            <PersonCard
              key={person.slug}
              person={person}
              index={index}
              onReadMore={setActivePerson}
            />
          ))}
        </div>
      </div>

      {activePerson && (
        <PersonModal person={activePerson} onClose={() => setActivePerson(null)} />
      )}
    </section>
  );
}
