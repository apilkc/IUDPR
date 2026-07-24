import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

export function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const c = siteContent.contact;

  return (
    <section
      id="contact"
      className="bg-iudpr-terracotta text-white py-20 px-6"
    >
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} max-w-[900px] mx-auto text-center`}
      >
        <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">
          {c.eyebrow}
        </span>
        <h2 className="font-display text-4xl font-semibold mt-3 mb-10">
          {c.headline}
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-10 gap-y-4 mb-10 text-sm">
          <a
            href={`mailto:${c.email}`}
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            {c.email}
          </a>
          <a
            href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {c.phone}
          </a>
          <span className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            {c.address}
          </span>
          <span className="flex items-center justify-center gap-2">
            <Globe className="w-4 h-4" />
            {c.website}
          </span>
        </div>

        <a
          href={`mailto:${c.email}`}
          className="inline-block bg-white text-iudpr-terracotta rounded-full px-6 py-3 font-medium hover:bg-iudpr-cream active:scale-95 transition-all"
        >
          {c.ctaLabel}
        </a>
      </div>
    </section>
  );
}
