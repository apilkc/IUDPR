import type { SVGProps } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { siteContent } from "@/content/site-content";

function toPath(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, href: "facebook", label: "Facebook" },
  { Icon: TwitterIcon, href: "twitter", label: "Twitter" },
  { Icon: InstagramIcon, href: "instagram", label: "Instagram" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-iudpr-ink text-iudpr-ink-fg/70 text-sm py-10 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-xl font-extrabold tracking-tight text-iudpr-ink-fg">
            IUDPR
          </span>
          <p className="mt-1 text-xs uppercase tracking-wide text-iudpr-ink-fg/50">
            Institute for Urban Development &amp; Policy Research
          </p>
          <p className="mt-2 max-w-xs">{siteContent.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              to={toPath(link.href)}
              className="hover:text-iudpr-ink-fg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            to="/#contact"
            className="group flex items-center gap-1.5 text-sm font-semibold text-iudpr-ink-fg/80 hover:text-iudpr-accent transition-colors"
          >
            <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:fill-iudpr-accent" />
            Support Us
          </Link>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={siteContent.social[href]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-iudpr-ink-fg/60 hover:text-iudpr-ink-fg hover:scale-110 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-iudpr-ink-fg/50 text-xs">
          © {year} IUDPR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
