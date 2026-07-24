# Editing this website (no coding required)

This guide is for anyone on the IUDPR team who needs to update content on the website but isn't a developer.

There are two kinds of content on this site, edited in two different places:

1. **Page text** (headlines, stats, team bios, testimonials, contact info, social links): edited in one file, `src/content/site-content.ts`.
2. **Projects and blog posts**: each one is its own Markdown file in `src/content/projects/` or `src/content/blog/`.

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

To add, remove, or edit a team member, find the `team` section. It has three lists:

- `team.board` — the Board of Directors. Each person is a full block with a bio, like:

  ```ts
  {
    initials: "PD",
    name: "Priti Dawadi",
    credentials: "",
    boardRole: "Director",
    title: "Architectural Designer, The Dietz Partnership",
    bio: "...",
  },
  ```

- `team.patrons` — Patrons & Advisors, and `team.staff` — Research & Office Team. These are simpler, just a name and title:

  ```ts
  { initials: "R1", name: "Add Researcher Name", title: "Research Associate" },
  ```

Copy an existing block (including the `{` and `},`) to add a new person, or delete one entirely to remove them. Entries starting with "Add ..." are placeholders, replace the name and title and they'll show up normally. The same copy-a-block pattern works for `testimonials.items`.

## 2. Adding or editing a project

Each project on the "Projects" section of the homepage is one Markdown file in `src/content/projects/`. To add a new project:

1. Create a new file there, for example `src/content/projects/my-new-project.md`. The filename becomes the project's web address, so keep it short and use hyphens instead of spaces.
2. Add a frontmatter block at the top (between two lines of three dashes) with a title, one-line summary, date, tag, and a color (`terracotta`, `slate`, or `cotton`, used for the project tile background).
3. Write the rest of the project write-up below the frontmatter using normal Markdown: headings with `##`, bold with `**text**`, links with `[text](url)`, and lists with `-`.
4. Save and commit the file. The project appears on the homepage automatically.

To edit an existing project, open its file and change the text. To remove a project, delete its file.

## 3. Adding or editing a blog post

Same idea, in `src/content/blog/`. Open `src/content/blog/how-to-add-a-blog-post.md` for a short example, or copy `src/content/blog/welcome-to-iudpr.md` as a starting template.

## Changing images

Photos and other images go in the `public/images/` folder. Add your image file there, then reference it in `site-content.ts` or a project or blog Markdown file (or ask a developer to wire it in). Leadership portraits and project tiles currently use placeholder icons instead of photos; ask a developer to swap these in when real photography is ready.

## Previewing your changes before publishing

If you have the project set up on your computer:

```bash
npm install
npm run dev
```

This opens a live preview at `http://localhost:5173` that updates as you edit content.

If you're editing directly on GitHub, you won't get a live preview, but the site will automatically rebuild and go live within a couple of minutes after you commit your change (see below).

## How publishing works

Every time changes are pushed to (or committed on) the `main` branch on GitHub, the site automatically rebuilds and redeploys. No manual steps needed. You can watch the progress under the "Actions" tab on GitHub.

## Connecting the Cloudflare domain

You bought the domain through Cloudflare, so DNS is managed in the Cloudflare dashboard rather than at the registrar itself.

1. In the GitHub repo, go to **Settings → Pages** and enter your custom domain (e.g. `www.iudpr.org.np` or your apex domain). This creates a `public/CNAME` file in the repo automatically. If it doesn't, add one yourself containing just the domain, one line, no other text.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), select the domain, then go to **DNS → Records**, and add:
   - For a `www` subdomain: a **CNAME** record, name `www`, target `<your-github-username>.github.io`.
   - For the bare/apex domain (no `www`): Cloudflare supports a **CNAME** record directly at the root, target `<your-github-username>.github.io`. If you'd rather use `A` records, point them at GitHub's four Pages IP addresses, listed in [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. **Important Cloudflare-specific step:** set the proxy status on that DNS record to **DNS only** (the cloud icon should be gray, not orange), at least until GitHub Pages finishes issuing its HTTPS certificate. GitHub needs to see the real server to verify the domain; Cloudflare's proxy can block that. You can switch it to "Proxied" (orange cloud) afterward if you want Cloudflare's CDN/caching, but if the site ever breaks after enabling it, switch back to DNS only.
4. Back in GitHub's **Settings → Pages**, wait for the domain to show as verified and for "Enforce HTTPS" to become available, then enable it. This can take anywhere from a few minutes to a few hours after DNS propagates.
5. **Also important:** open `vite.config.ts` and change `const PROD_BASE = '/IUDPR/'` to `const PROD_BASE = '/'`. Until a custom domain is connected, the site lives at `https://<username>.github.io/IUDPR/`, which needs that `/IUDPR/` base path. Once the custom domain takes over, the site is served from the domain root instead, so the base path must go back to `/`. Ask a developer if you're not sure how to make this change, it's a one-line edit.

### How to publish once the domain is connected

Publishing works the same way it always has: push (or commit on GitHub) to the `main` branch, and GitHub Actions automatically rebuilds and redeploys the live site within a couple of minutes. There's no separate "post" step, once DNS and `PROD_BASE` are set up as above, every commit to `main` goes live at your domain automatically.

## Questions

If something looks broken after an edit to `site-content.ts`, the most common cause is a missing comma or bracket. Undo your last change and try again, or ask a developer to take a look. Markdown files in `src/content/projects/` and `src/content/blog/` are more forgiving since they're just text with a small frontmatter header.
