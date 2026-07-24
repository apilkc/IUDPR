import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { useTheme } from "@/hooks/useTheme";
import { SearchModal } from "@/components/SearchModal";
import { LogoMark } from "@/components/LogoMark";

function toPath(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-9 h-9 rounded-full text-iudpr-fg hover:bg-iudpr-fg/5 transition-colors ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px]" />
      ) : (
        <Moon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeAndScroll = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-iudpr-bg/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 leading-none select-none">
          <LogoMark className="w-9 h-9 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl font-extrabold tracking-tight text-iudpr-fg">
              IUDPR
            </span>
            <span className="hidden xl:block whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-iudpr-muted mt-0.5">
              Institute for Urban Development &amp; Policy Research
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              to={toPath(link.href)}
              className="relative text-sm font-medium uppercase tracking-wide text-iudpr-fg hover:text-iudpr-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-iudpr-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="flex items-center gap-2 text-iudpr-muted hover:text-iudpr-fg hover:bg-iudpr-fg/5 transition-colors rounded-full pl-3 pr-2.5 h-9"
          >
            <Search className="w-4 h-4" />
            <kbd className="text-[10px] font-sans border border-iudpr-fg/15 rounded px-1.5 py-0.5">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <Link
            to="/#contact"
            className="whitespace-nowrap bg-iudpr-accent-solid text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-iudpr-accent-solid-dark active:scale-95 transition-all"
          >
            {siteContent.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="text-iudpr-fg p-2"
          >
            <Search className="w-5 h-5" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-iudpr-fg p-2"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-iudpr-bg transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              to={toPath(link.href)}
              onClick={closeAndScroll}
              className="py-3 text-base font-medium uppercase tracking-wide text-iudpr-fg border-b border-iudpr-fg/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={closeAndScroll}
            className="mt-4 text-center bg-iudpr-accent-solid text-white px-5 py-3 rounded-full text-sm font-medium active:scale-95 transition-all"
          >
            {siteContent.nav.cta}
          </Link>
        </div>
      </div>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </nav>
  );
}
