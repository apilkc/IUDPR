import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

export function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const c = siteContent.contact;

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} max-w-[900px] mx-auto`}
      >
        <div className="bg-iudpr-surface border border-iudpr-fg/10 rounded-3xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
              {c.eyebrow}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-iudpr-fg mt-2">
              {c.headline}
            </h2>

            <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3 mt-6 text-sm text-iudpr-muted">
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 hover:text-iudpr-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {c.email}
              </a>
              <a
                href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 hover:text-iudpr-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                {c.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {c.address}
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {c.website}
              </span>
            </div>
          </div>

          <a
            href={`mailto:${c.email}`}
            className="inline-block shrink-0 bg-iudpr-accent-solid text-white rounded-full px-7 py-3.5 font-medium hover:bg-iudpr-accent-solid-dark active:scale-95 transition-all text-center"
          >
            {c.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
