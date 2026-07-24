import { Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { siteContent } from "@/content/site-content";

type Testimonial = (typeof siteContent.testimonials.items)[number];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="h-full bg-iudpr-surface rounded-2xl p-8 border border-iudpr-fg/10 flex flex-col">
        <Quote className="w-6 h-6 text-iudpr-accent/40 mb-4" strokeWidth={1.5} />
        <p className="text-iudpr-fg/85 leading-relaxed flex-1">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-iudpr-fg/10">
          <div className="w-10 h-10 rounded-full bg-iudpr-fg/5 flex items-center justify-center shrink-0">
            <span className="font-display text-xs font-extrabold text-iudpr-fg">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-iudpr-fg">
              {testimonial.name}
            </p>
            <p className="text-xs text-iudpr-muted">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 px-6 bg-iudpr-surface/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
            {siteContent.testimonials.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-iudpr-fg mt-3">
            {siteContent.testimonials.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
