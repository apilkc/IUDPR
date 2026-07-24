import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { projects, type ProjectFrontmatter } from "@/lib/content";
import type { ContentEntry } from "@/lib/content";

const TILE_STYLES: Record<
  ProjectFrontmatter["color"],
  { bg: string; icon: string; text: string }
> = {
  terracotta: {
    bg: "bg-iudpr-accent-solid",
    icon: "text-white/35",
    text: "text-white",
  },
  slate: { bg: "bg-iudpr-ink", icon: "text-white/25", text: "text-white" },
  cotton: {
    bg: "bg-iudpr-surface border border-iudpr-fg/10",
    icon: "text-iudpr-fg/25",
    text: "text-iudpr-fg",
  },
};

// Bento-style spans on desktop; every tile is a simple square on mobile.
const SPAN_CLASSES = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
];

function ProjectTile({
  project,
  index,
}: {
  project: ContentEntry<ProjectFrontmatter>;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const style = TILE_STYLES[project.frontmatter.color] ?? TILE_STYLES.terracotta;
  const span = SPAN_CLASSES[index % SPAN_CLASSES.length];

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${span} aspect-square md:aspect-auto`}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`group relative block h-full w-full rounded-2xl overflow-hidden ${style.bg} transition-transform duration-500 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-iudpr-accent focus-visible:outline-offset-2`}
      >
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <ImageIcon className={`w-10 h-10 ${style.icon}`} strokeWidth={1.25} />
        </div>
        <div
          className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`}
        />
        <span
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <ArrowUpRight className="w-4 h-4 text-iudpr-ink" />
        </span>
        <span
          className={`absolute bottom-3 left-3 right-3 text-xs font-semibold uppercase tracking-wide ${style.text} opacity-90`}
        >
          {project.frontmatter.title}
        </span>
      </Link>
    </div>
  );
}

export function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Our work
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-iudpr-fg mt-3 mb-4">
            Projects
          </h2>
          <p className="text-iudpr-muted leading-relaxed">
            Select a project to read the full write-up.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4 [grid-auto-flow:dense]">
          {projects.map((project, index) => (
            <ProjectTile key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-iudpr-accent hover:opacity-70 transition-opacity"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
