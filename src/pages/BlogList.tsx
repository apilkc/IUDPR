import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, readingTime, thumbnailUrl, type BlogFrontmatter } from "@/lib/content";
import type { ContentEntry } from "@/lib/content";
import { useReveal } from "@/hooks/useReveal";
import { useTagFilter } from "@/hooks/useTagFilter";
import { TagFilter } from "@/components/TagFilter";
import { SortToggle } from "@/components/SortToggle";
import { Pagination } from "@/components/Pagination";

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({
  post,
  index,
}: {
  post: ContentEntry<BlogFrontmatter>;
  index: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block h-full bg-iudpr-surface rounded-2xl overflow-hidden border border-iudpr-fg/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-iudpr-accent/30"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={thumbnailUrl("blog", post.slug, post.frontmatter.image)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-iudpr-ink" />
          </span>
        </div>
        <div className="p-8">
          <p className="text-xs text-iudpr-accent font-semibold uppercase tracking-wide mb-2">
            {post.frontmatter.tag} · {formatDate(post.frontmatter.date)}
          </p>
          <h2 className="font-display text-xl font-bold tracking-tight leading-snug text-iudpr-fg group-hover:text-iudpr-accent transition-colors mb-2">
            {post.frontmatter.title}
          </h2>
          <p className="text-sm text-iudpr-muted leading-relaxed mb-4">
            {post.frontmatter.summary}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-iudpr-muted">
            <Clock className="w-3.5 h-3.5" />
            {readingTime(post.body)} min read
          </p>
        </div>
      </Link>
    </div>
  );
}

export function BlogList() {
  const {
    tags,
    activeTag,
    setActiveTag,
    sortOrder,
    setSortOrder,
    page,
    setPage,
    totalPages,
    pageItems,
  } = useTagFilter(
    blogPosts,
    (p) => p.frontmatter.tag,
    (p) => p.frontmatter.date,
  );

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <span className="text-iudpr-accent text-sm font-semibold uppercase tracking-[0.2em]">
          From the team
        </span>
        <h1 className="font-display text-4xl font-black tracking-tight text-iudpr-fg mt-3 mb-8">
          Blog
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
          <SortToggle sortOrder={sortOrder} onChange={setSortOrder} />
        </div>

        {pageItems.length === 0 && (
          <p className="text-iudpr-muted">No posts in this category yet.</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageItems.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
