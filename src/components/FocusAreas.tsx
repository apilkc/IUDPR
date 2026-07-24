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
      <div className="bg-white rounded-2xl p-6 border border-iudpr-slate/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-iudpr-terracotta/40">
        <div className="w-11 h-11 rounded-full bg-iudpr-terracotta/10 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-iudpr-terracotta" />
        </div>
        <h3 className="font-display text-lg font-semibold text-iudpr-slate mb-2">
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
    <section id="focus-areas" className="py-24 px-6 bg-white/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-terracotta text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.focusAreas.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-semibold text-iudpr-slate mt-3 mb-4">
            {siteContent.focusAreas.heading}
          </h2>
          <p className="text-iudpr-muted leading-relaxed">
            {siteContent.focusAreas.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
