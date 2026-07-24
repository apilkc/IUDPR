// Loads Markdown files from src/content/projects, src/content/blog, and
// src/content/team. Each file needs a frontmatter block (between --- lines)
// followed by the body text. See README-EDITING.md for how to add or edit
// entries.

export interface FrontmatterBase {
  title: string;
  summary: string;
  date: string;
}

export interface ProjectFrontmatter extends FrontmatterBase {
  tag: string;
  color: "terracotta" | "slate" | "cotton";
  // Optional: filename of a photo placed in public/images/projects/.
  // Leave unset and a placeholder thumbnail is used instead.
  image?: string;
}

export interface BlogFrontmatter extends FrontmatterBase {
  author: string;
  tag: string;
  // Optional: filename of a photo placed in public/images/blog/.
  // Leave unset and a placeholder thumbnail is used instead.
  image?: string;
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
  // Strip a leading "01-" style ordering prefix, used by team files to
  // control display order without needing a separate frontmatter field.
  return filename.replace(/\.md$/, "").replace(/^\d+-/, "");
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

// Picks a stock placeholder photo (1-70) deterministically from a slug, so
// people/projects without a real uploaded photo still get a stable, distinct
// placeholder instead of a random one that changes on every visit.
function placeholderSeed(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return (hash % 70) + 1;
}

// Real thumbnail if `image` is set in frontmatter (file living in
// public/images/<folder>/), otherwise a stable placeholder stock photo.
export function thumbnailUrl(
  folder: "projects" | "blog",
  slug: string,
  image: string | undefined,
): string {
  if (image) return `${import.meta.env.BASE_URL}images/${folder}/${image}`;
  return `https://picsum.photos/seed/${slug}/700/525`;
}

// Real headshot if `photo` is set in frontmatter (file living in
// public/images/team/), otherwise a stable placeholder avatar.
export function avatarUrl(slug: string, photo: string | undefined): string {
  if (photo) return `${import.meta.env.BASE_URL}images/team/${photo}`;
  return `https://i.pravatar.cc/240?img=${placeholderSeed(slug)}`;
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

export interface TeamFrontmatter {
  name: string;
  credentials: string;
  role: string;
  linkedin: string;
  twitter: string;
  brief: string;
  // Optional: filename of a photo placed in public/images/team/.
  // Leave unset and a placeholder headshot is used instead.
  photo?: string;
}

export type TeamGroup = "board" | "staff";

export interface TeamEntry {
  slug: string;
  group: TeamGroup;
  frontmatter: TeamFrontmatter;
  bio: string;
}

function loadTeamEntries(
  globResult: Record<string, string>,
  group: TeamGroup,
): TeamEntry[] {
  return Object.entries(globResult)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw);
      return {
        slug: slugify(path),
        group,
        frontmatter: data as unknown as TeamFrontmatter,
        bio: body,
      };
    });
}

const boardFiles = import.meta.glob("/src/content/team/board-and-advisors/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const staffFiles = import.meta.glob("/src/content/team/research-and-admin-team/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const teamBoard: TeamEntry[] = loadTeamEntries(boardFiles, "board");
export const teamStaff: TeamEntry[] = loadTeamEntries(staffFiles, "staff");

const WORDS_PER_MINUTE = 200;

// Estimated reading time from the actual word count. Genuinely computed,
// not a placeholder, so it stays accurate as content changes.
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
