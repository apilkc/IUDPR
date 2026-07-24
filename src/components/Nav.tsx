import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAndScroll = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-iudpr-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex flex-col leading-none select-none">
          <span className="font-display text-2xl font-semibold text-iudpr-slate">
            IUDPR
          </span>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.15em] text-iudpr-muted mt-0.5">
            Urban Development &amp; Policy Research
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-iudpr-slate hover:text-iudpr-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex whitespace-nowrap bg-iudpr-terracotta text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-iudpr-terracotta-dark active:scale-95 transition-all"
        >
          {siteContent.nav.cta}
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-iudpr-slate"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-iudpr-cream transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeAndScroll}
              className="py-3 text-base font-medium uppercase tracking-wide text-iudpr-slate border-b border-iudpr-slate/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeAndScroll}
            className="mt-4 text-center bg-iudpr-terracotta text-white px-5 py-3 rounded-full text-sm font-medium active:scale-95 transition-all"
          >
            {siteContent.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
