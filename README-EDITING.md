# Editing this website (no coding required)

This guide is for anyone on the IUDPR team who needs to update content on the website but isn't a developer.

## How content is organized

Everything you'd normally want to edit lives in `src/content/`, laid out like folders of documents:

```
src/content/
  site-content.ts        ← headlines, stats, testimonials, contact info
  team/
    board-and-advisors/      ← one .md file per board member, patron, or advisor
    research-and-admin-team/ ← one .md file per staff member
  projects/               ← one .md file per project
  blog/                   ← one .md file per blog post
```

Three of these — team, projects, blog — work exactly the same way: **one person or post = one file.** To add someone or something new, add a file. To remove them, delete the file. Nothing else to touch.

The only content edited in a single shared file is page-wide text (headline, stats, testimonials, contact details) — that's `src/content/site-content.ts`.

## 1. Editing page text

Open `src/content/site-content.ts` in any text editor, or directly on GitHub (click the file, then click the pencil icon to edit in your browser).

- Only change the text **between the quotation marks** (`"like this"`).
- Don't delete commas, curly braces `{ }`, or square brackets `[ ]`. The file will break if those are missing.
- Save the file (or, on GitHub, scroll down and click "Commit changes").

### Examples

To change the main headline, find this line near the top:

```ts
headline: "Better policy. Better cities. Built with communities.",
```

and change the text inside the quotes to whatever you want.

To update the phone number or email, find the `contact` section near the bottom:

```ts
email: "iudpresearch@gmail.com",
phone: "+977-9851120765",
```

To update social media links (shown in the footer), find the `social` section near the top:

```ts
social: {
  facebook: "https://facebook.com/iudprnepal",
  twitter: "https://twitter.com/iudprnepal",
  instagram: "https://instagram.com/iudprnepal",
},
```

These are currently placeholder links. Replace each with your real profile URL.

The `team` section here only holds the small intro text above the team grid (`eyebrow`, `heading`, `intro`). Individual people are edited elsewhere — see the next section. The same copy-a-block pattern used for people also works for `testimonials.items` if you want to add another quote.

## 2. Adding or editing a team member

Each person on the "Our Team" page is their own file:

- Board members, patrons, and advisors → `src/content/team/board-and-advisors/`
- Research and admin staff → `src/content/team/research-and-admin-team/`

To add someone new, create a file in the right folder, for example `src/content/team/research-and-admin-team/07-jane-doe.md`. The leading number controls the display order (people are shown in file order within their folder) — pick the next unused number. Use this frontmatter format:

```md
---
name: Jane Doe
credentials: MURP
role: Research Associate
linkedin: https://linkedin.com/in/janedoe
twitter: https://twitter.com/janedoe
brief: A short, roughly twenty-word summary shown on their card.
---

The longer biography shown in the "Read more" popup goes here, as plain text or a paragraph or two of Markdown.
```

- `credentials` can be left out entirely if the person doesn't have any (see `apil-kc.md` for an example).
- `linkedin` / `twitter` are optional too — leave placeholder `https://linkedin.com` / `https://twitter.com` links if you don't have real profiles yet.
- To remove someone, delete their file. To re-order people, rename the files with different leading numbers.
- To move someone between groups (e.g. a researcher joins the board), just move their file into the other folder.

For a photo, see "Adding real photos" below — until then, everyone gets an auto-assigned placeholder headshot.

## 3. Adding or editing a project

Each project on the "Projects" section of the homepage is one Markdown file in `src/content/projects/`. To add a new project:

1. Create a new file there, for example `src/content/projects/my-new-project.md`. The filename becomes the project's web address, so keep it short and use hyphens instead of spaces.
2. Add a frontmatter block at the top (between two lines of three dashes) with a title, one-line summary, date, tag, and a color (`terracotta`, `slate`, or `cotton`, used for the project tile background).
3. Write the rest of the project write-up below the frontmatter using normal Markdown: headings with `##`, bold with `**text**`, links with `[text](url)`, and lists with `-`.
4. Save and commit the file. The project appears on the homepage automatically.

To edit an existing project, open its file and change the text. To remove a project, delete its file. For a real thumbnail photo instead of the placeholder, see "Adding real photos" below.

## 4. Adding or editing a blog post

Same idea, in `src/content/blog/`. Open `src/content/blog/how-to-add-a-blog-post.md` for a short example, or copy `src/content/blog/welcome-to-iudpr.md` as a starting template.

## Adding real photos

Right now, nobody's photo or project thumbnail is a real uploaded image — they're all stand-in stock photos, auto-picked so each person/project consistently gets the same placeholder rather than a different random one every visit. That's why you won't find any photo files in the repo yet: **there aren't any, on purpose, until you add them.**

To swap in a real photo:

1. Add your image file to the matching folder in `public/images/`:
   - Team headshots → `public/images/team/`
   - Project thumbnails → `public/images/projects/`
   - Blog thumbnails → `public/images/blog/`
2. Reference just the filename (not the full path) in that entry's frontmatter:
   - Team member: add a `photo: jane-doe.jpg` line
   - Project: add an `image: my-photo.jpg` line
   - Blog post: add an `image: my-photo.jpg` line
3. Save and commit both the image file and the frontmatter change together.

Leave the line out entirely and the placeholder keeps showing — no error, nothing breaks. Use reasonably-sized photos (roughly 700px wide is plenty; large multi-megabyte files will slow the site down).

## Previewing your changes before publishing

If you have the project set up on your computer:

```bash
npm install
npm run dev
```

This opens a live preview at `http://localhost:5173` that updates as you edit content.

If you're editing directly on GitHub, you won't get a live preview, but the site will automatically rebuild and go live within a couple of minutes after you commit your change (see below).

## How publishing works

Every time changes are pushed to (or committed on) the `main` branch on GitHub, the site automatically rebuilds and redeploys to **iudpr.org**. No manual steps needed. You can watch the progress under the "Actions" tab on GitHub.

## Domain setup (already done — reference only)

The site is already connected to Cloudflare-managed DNS at `iudpr.org` / `www.iudpr.org`, GitHub Pages is enabled with HTTPS enforced, and `vite.config.ts`'s `PROD_BASE` is set to `/`. Nothing here needs to be redone. Keeping the steps for reference in case the domain or hosting ever needs to be rebuilt:

1. GitHub repo → **Settings → Pages** → custom domain set to `www.iudpr.org`, with `public/CNAME` in the repo containing that same domain.
2. Cloudflare dashboard → the domain → **DNS → Records** → `CNAME` records for both `www` and the bare domain, target `<github-username>.github.io`, proxy status **DNS only** (gray cloud) until GitHub's certificate is issued.
3. Back in GitHub Pages settings, once the domain verifies, **Enforce HTTPS** is enabled.

## Questions

If something looks broken after an edit to `site-content.ts`, the most common cause is a missing comma or bracket. Undo your last change and try again, or ask a developer to take a look. Markdown files in `src/content/team/`, `src/content/projects/`, and `src/content/blog/` are more forgiving since they're just text with a small frontmatter header.
