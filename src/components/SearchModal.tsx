import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { projects, blogPosts } from "@/lib/content";

interface SearchResult {
  type: "Project" | "Blog";
  href: string;
  title: string;
  summary: string;
}

function matches(query: string, ...fields: string[]): boolean {
  return fields.some((field) => field.toLowerCase().includes(query));
}

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const projectResults: SearchResult[] = projects
      .filter((p) =>
        matches(q, p.frontmatter.title, p.frontmatter.summary, p.frontmatter.tag, p.body),
      )
      .map((p) => ({
        type: "Project",
        href: `/projects/${p.slug}`,
        title: p.frontmatter.title,
        summary: p.frontmatter.summary,
      }));

    const blogResults: SearchResult[] = blogPosts
      .filter((p) =>
        matches(q, p.frontmatter.title, p.frontmatter.summary, p.frontmatter.tag, p.body),
      )
      .map((p) => ({
        type: "Blog",
        href: `/blog/${p.slug}`,
        title: p.frontmatter.title,
        summary: p.frontmatter.summary,
      }));

    return [...projectResults, ...blogResults];
  }, [query]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 p-6">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative bg-iudpr-surface rounded-2xl max-w-xl w-full shadow-2xl animate-modal-in max-h-[70vh] flex flex-col overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-iudpr-fg/10 shrink-0">
          <Search className="w-5 h-5 text-iudpr-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects and posts..."
            className="flex-1 bg-transparent outline-none text-iudpr-fg placeholder:text-iudpr-muted"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="text-iudpr-muted hover:text-iudpr-fg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto">
          {query.trim() === "" && (
            <p className="p-6 text-sm text-iudpr-muted">
              Start typing to search projects and blog posts.
            </p>
          )}
          {query.trim() !== "" && results.length === 0 && (
            <p className="p-6 text-sm text-iudpr-muted">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}
          {results.map((result) => (
            <Link
              key={result.href}
              to={result.href}
              onClick={onClose}
              className="block px-5 py-4 hover:bg-iudpr-fg/5 border-b border-iudpr-fg/5 last:border-0 transition-colors"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-iudpr-accent">
                {result.type}
              </span>
              <p className="font-display font-bold text-iudpr-fg mt-0.5">
                {result.title}
              </p>
              <p className="text-sm text-iudpr-muted mt-0.5 line-clamp-1">
                {result.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
