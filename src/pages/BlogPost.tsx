import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPostBySlug, readingTime } from "@/lib/content";

function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="max-w-[720px] mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-iudpr-fg mb-4">
          Post not found
        </h1>
        <Link
          to="/blog"
          className="text-iudpr-accent font-semibold hover:opacity-70 transition-opacity"
        >
          Back to blog
        </Link>
      </section>
    );
  }

  const { frontmatter, body } = post;

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <Link
          to="/blog"
          className="flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-iudpr-muted hover:text-iudpr-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <h1 className="font-display text-4xl font-black tracking-tight text-iudpr-fg mt-3 mb-3 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="flex items-center gap-2 text-sm text-iudpr-muted uppercase tracking-wide mb-10">
          {formatDate(frontmatter.date)} · {frontmatter.author}
          <span aria-hidden>·</span>
          <span className="flex items-center gap-1.5 normal-case">
            <Clock className="w-3.5 h-3.5" />
            {readingTime(body)} min read
          </span>
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:text-iudpr-fg prose-a:text-iudpr-accent prose-strong:text-iudpr-fg">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
