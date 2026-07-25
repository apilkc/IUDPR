import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  PlayCircle,
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import {
  thumbnailUrl,
  upcomingEvents,
  pastEvents,
  type EventFrontmatter,
  type ContentEntry,
} from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";

type EventEntry = ContentEntry<EventFrontmatter>;

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

function dateBadge(iso: string): { day: string; month: string } {
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return { day: "--", month: "" };
  return {
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
  };
}

function GroupHeading({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-8 mt-20 first:mt-0">
      <div>
        <span className="text-iudpr-accent text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-iudpr-fg mt-1">
          {heading}
        </h2>
        <p className="text-sm text-iudpr-muted mt-1">{intro}</p>
      </div>
      <div className="h-px flex-1 bg-iudpr-fg/10 self-end mb-2" />
    </div>
  );
}

function UpcomingEventCard({ event, index }: { event: EventEntry; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const { icon: VenueIcon, label: venueLabel } = VENUE_META[event.frontmatter.venueType];
  const badge = dateBadge(event.frontmatter.date);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
    >
      <div className="group h-full flex flex-col sm:flex-row bg-iudpr-surface rounded-2xl overflow-hidden border border-iudpr-fg/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-iudpr-accent/30">
        <div className="relative w-full sm:w-44 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
          <img
            src={thumbnailUrl("events", event.slug, event.frontmatter.image)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-3 left-3 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-white/95 shadow-sm leading-none">
            <span className="text-base font-display font-extrabold text-iudpr-ink">
              {badge.day}
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wide text-iudpr-accent-solid">
              {badge.month}
            </span>
          </span>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <p className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-iudpr-muted uppercase tracking-wide mb-2">
            <span className="flex items-center gap-1.5 text-iudpr-accent font-semibold">
              <VenueIcon className="w-3.5 h-3.5" />
              {venueLabel}
            </span>
            {event.frontmatter.time && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {event.frontmatter.time}
              </span>
            )}
          </p>
          <h3 className="font-display text-lg font-bold tracking-tight leading-snug text-iudpr-fg group-hover:text-iudpr-accent transition-colors">
            {event.frontmatter.title}
          </h3>
          <p className="text-xs text-iudpr-muted mt-1">{event.frontmatter.venue}</p>
          <p className="text-sm text-iudpr-muted leading-relaxed mt-3 flex-1">
            {event.frontmatter.summary}
          </p>
          <p className="text-xs text-iudpr-fg/70 mt-3">
            Hosted by <span className="font-semibold">{event.frontmatter.host}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            {event.frontmatter.registerUrl && (
              <a
                href={event.frontmatter.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-iudpr-accent-solid text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-iudpr-accent-solid-dark active:scale-95 transition-all"
              >
                RSVP
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              to={`/events/${event.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-iudpr-accent hover:opacity-70 transition-opacity"
            >
              Details
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PastEventCard({ event, index }: { event: EventEntry; index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const { icon: VenueIcon, label: venueLabel } = VENUE_META[event.frontmatter.venueType];

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
    >
      <div className="group h-full flex flex-col sm:flex-row bg-iudpr-surface rounded-2xl overflow-hidden border border-iudpr-fg/10 transition-all duration-300 hover:border-iudpr-accent/30">
        <div className="relative w-full sm:w-36 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
          <img
            src={thumbnailUrl("events", event.slug, event.frontmatter.image)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-iudpr-ink/80 text-iudpr-ink-fg text-[9px] font-semibold uppercase tracking-wide">
            Past
          </span>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <p className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-iudpr-muted uppercase tracking-wide mb-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(event.frontmatter.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <VenueIcon className="w-3.5 h-3.5" />
              {venueLabel}
            </span>
          </p>
          <h3 className="font-display text-base font-bold tracking-tight leading-snug text-iudpr-fg">
            {event.frontmatter.title}
          </h3>
          <p className="text-xs text-iudpr-muted mt-1">{event.frontmatter.venue}</p>
          <p className="text-sm text-iudpr-muted leading-relaxed mt-3 flex-1">
            {event.frontmatter.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            {event.frontmatter.recording && (
              <a
                href={event.frontmatter.recording}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-iudpr-accent hover:opacity-70 transition-opacity"
              >
                <PlayCircle className="w-4 h-4" />
                Watch recording
              </a>
            )}
            {event.frontmatter.notes && (
              <a
                href={event.frontmatter.notes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-iudpr-accent hover:opacity-70 transition-opacity"
              >
                <FileText className="w-4 h-4" />
                View notes
              </a>
            )}
            <Link
              to={`/events/${event.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-iudpr-muted hover:text-iudpr-accent transition-colors"
            >
              Read summary
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
          Get involved
        </span>
        <h1 className="font-display text-4xl font-black tracking-tight text-iudpr-fg mt-3 mb-4">
          Events
        </h1>
        <p className="text-iudpr-muted leading-relaxed max-w-[560px]">
          Forums, workshops, and webinars where our research meets the communities it's meant to serve. Recordings and notes stay up after the fact, so nothing is only for the people in the room.
        </p>

        <GroupHeading
          eyebrow="What's next"
          heading="Upcoming events"
          intro="RSVP to save your spot."
        />
        {upcoming.length === 0 && (
          <p className="text-iudpr-muted">No upcoming events scheduled right now — check back soon.</p>
        )}
        <div className="grid gap-6">
          {upcoming.map((event, index) => (
            <UpcomingEventCard key={event.slug} event={event} index={index} />
          ))}
        </div>

        <GroupHeading
          eyebrow="Look back"
          heading="Past events"
          intro="Recordings, notes, and summaries from past sessions."
        />
        {past.length === 0 && (
          <p className="text-iudpr-muted">No past events yet.</p>
        )}
        <div className="grid gap-6">
          {past.map((event, index) => (
            <PastEventCard key={event.slug} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
