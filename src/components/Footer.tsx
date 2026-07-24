import { siteContent } from "@/content/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-iudpr-slate text-iudpr-cream/70 text-sm py-10 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-xl text-iudpr-cream">
            IUDPR
          </span>
          <p className="mt-1 max-w-xs">{siteContent.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-iudpr-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-iudpr-cream/50 text-xs">
          © {year} IUDPR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
