import { Home, Map, Leaf, Landmark, Users, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent, type FocusAreaIcon } from "@/content/site-content";

const ICONS: Record<FocusAreaIcon, LucideIcon> = {
  Home,
  Map,
  Leaf,
  Landmark,
  Users,
  GraduationCap,
};

function FocusCard({
  icon,
  title,
  description,
  index,
}: {
  icon: FocusAreaIcon;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const Icon = ICONS[icon];

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <div className="bg-iudpr-surface rounded-2xl p-8 border border-iudpr-fg/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-iudpr-accent/40">
        <div className="w-11 h-11 rounded-full bg-iudpr-accent/10 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-iudpr-accent" />
        </div>
        <h3 className="font-display text-lg font-bold text-iudpr-fg mb-2">
          {title}
        </h3>
        <p className="text-sm text-iudpr-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FocusAreas() {
  return (
    <section id="focus-areas" className="py-28 px-6 bg-iudpr-surface/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-14">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-iudpr-muted">
              {siteContent.focusAreas.statementLead}
            </span>
            <br />
            <span className="text-iudpr-fg">
              {siteContent.focusAreas.statementMain}
              <span className="text-iudpr-accent">.</span>
            </span>
          </p>
          <p className="text-iudpr-muted leading-relaxed mt-4">
            {siteContent.focusAreas.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.focusAreas.items.map((item, index) => (
            <FocusCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
