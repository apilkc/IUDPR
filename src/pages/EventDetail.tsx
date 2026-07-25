import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  PlayCircle,
  FileText,
  ExternalLink,
} from "lucide-react";
import { getEventBySlug, isUpcomingEvent, type EventFrontmatter } from "@/lib/content";

const VENUE_META: Record<
  EventFrontmatter["venueType"],
  { icon: typeof MapPin; label: string }
> = {
  "in-person": { icon: MapPin, label: "In person" },
  virtual: { icon: Video, label: "Virtual" },
  hybrid: { icon: Users, label: "Hybrid" },
};

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return (
      <section className="max-w-[720px] mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-iudpr-fg mb-4">
          Event not found
        </h1>
        <Link
          to="/events"
          className="text-iudpr-accent font-semibold hover:opacity-70 transition-opacity"
        >
          Back to events
        </Link>
      </section>
    );
  }

  const { frontmatter, body } = event;
  const { icon: VenueIcon, label: venueLabel } = VENUE_META[frontmatter.venueType];
  const upcoming = isUpcomingEvent(event);

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link
          to="/events"
          className="flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-iudpr-muted hover:text-iudpr-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to events
        </Link>

        <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
          {frontmatter.tag} · {upcoming ? "Upcoming" : "Past event"}
        </span>
        <h1 className="font-display text-4xl font-black tracking-tight text-iudpr-fg mt-3 mb-6 leading-tight">
          {frontmatter.title}
        </h1>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 bg-iudpr-surface border border-iudpr-fg/10 rounded-2xl p-6">
          <p className="flex items-center gap-2 text-sm text-iudpr-fg">
            <Calendar className="w-4 h-4 text-iudpr-accent shrink-0" />
            {formatDate(frontmatter.date)}
          </p>
          {frontmatter.time && (
            <p className="flex items-center gap-2 text-sm text-iudpr-fg">
              <Clock className="w-4 h-4 text-iudpr-accent shrink-0" />
              {frontmatter.time}
            </p>
          )}
          <p className="flex items-center gap-2 text-sm text-iudpr-fg">
            <VenueIcon className="w-4 h-4 text-iudpr-accent shrink-0" />
            {venueLabel} — {frontmatter.venue}
          </p>
          <p className="text-sm text-iudpr-fg">
            Hosted by <span className="font-semibold">{frontmatter.host}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          {frontmatter.registerUrl && (
            <a
              href={frontmatter.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-iudpr-accent-solid text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-iudpr-accent-solid-dark active:scale-95 transition-all"
            >
              RSVP
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {frontmatter.recording && (
            <a
              href={frontmatter.recording}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-iudpr-fg/15 px-5 py-2.5 rounded-full text-sm font-semibold text-iudpr-fg hover:border-iudpr-accent/40 transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              Watch recording
            </a>
          )}
          {frontmatter.notes && (
            <a
              href={frontmatter.notes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-iudpr-fg/15 px-5 py-2.5 rounded-full text-sm font-semibold text-iudpr-fg hover:border-iudpr-accent/40 transition-colors"
            >
              <FileText className="w-4 h-4" />
              View notes
            </a>
          )}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:text-iudpr-fg prose-a:text-iudpr-accent prose-strong:text-iudpr-fg">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
