// Loads Markdown files from src/content/projects and src/content/blog.
// Each file needs a frontmatter block (between --- lines) followed by the
// body text. See README-EDITING.md for how to add or edit entries.

export interface FrontmatterBase {
  title: string;
  summary: string;
  date: string;
}

export interface ProjectFrontmatter extends FrontmatterBase {
  tag: string;
  color: "terracotta" | "slate" | "cotton";
}

export interface BlogFrontmatter extends FrontmatterBase {
  author: string;
  tag: string;
}

export interface ContentEntry<T> {
  slug: string;
  frontmatter: T;
  body: string;
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const [, frontmatterBlock, body] = match;
  const data: Record<string, string> = {};

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    const lineMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    data[key] = rawValue.trim().replace(/^["']|["']$/g, "");
  }

  return { data, body: body.trim() };
}

function slugify(path: string): string {
  const filename = path.split("/").pop() ?? path;
  return filename.replace(/\.md$/, "");
}

function loadEntries<T extends FrontmatterBase>(
  globResult: Record<string, string>,
): ContentEntry<T>[] {
  return Object.entries(globResult)
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw);
      return {
        slug: slugify(path),
        frontmatter: data as unknown as T,
        body,
      };
    })
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

const projectFiles = import.meta.glob("/src/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const blogFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const projects: ContentEntry<ProjectFrontmatter>[] =
  loadEntries<ProjectFrontmatter>(projectFiles);

export const blogPosts: ContentEntry<BlogFrontmatter>[] =
  loadEntries<BlogFrontmatter>(blogFiles);

export function getProjectBySlug(slug: string) {
  return projects.find((entry) => entry.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((entry) => entry.slug === slug);
}

const WORDS_PER_MINUTE = 200;

// Estimated reading time from the actual word count. Genuinely computed,
// not a placeholder, so it stays accurate as content changes.
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
