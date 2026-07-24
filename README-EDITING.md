# Editing this website (no coding required)

This guide is for anyone on the IUDPR team who needs to update text on the website but isn't a developer.

## The one file that matters

Almost everything you can see on the site — headlines, descriptions, stats, focus areas, leadership bios, contact info — lives in a single file:

```
src/content/site-content.ts
```

Open it in any text editor (or directly on GitHub — click the file, then click the pencil ✏️ icon to edit in your browser).

- Only change the text **between the quotation marks** (`"like this"`).
- Don't delete commas `,`, curly braces `{ }`, or square brackets `[ ]` — the file will break if those are missing.
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

To add, remove, or edit a leadership bio, find the `leadership.people` list — each person is a block like:

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

Copy an existing block (including the `{` and `},`) to add a new person, or delete one entirely to remove them.

## Changing images

Photos and other images go in the `public/images/` folder. Add your image file there, then reference it in `site-content.ts` or ask a developer to wire it into the relevant section.

## Previewing your changes before publishing

If you have the project set up on your computer:

```bash
npm install
npm run dev
```

This opens a live preview at `http://localhost:5173` that updates as you edit `site-content.ts`.

If you're editing directly on GitHub, you won't get a live preview, but the site will automatically rebuild and go live within a couple of minutes after you commit your change (see below).

## How publishing works

Every time changes are pushed to (or committed on) the `main` branch on GitHub, the site automatically rebuilds and redeploys — no manual steps needed. You can watch the progress under the "Actions" tab on GitHub.

## Connecting the GoDaddy domain

Once you've purchased a domain from GoDaddy:

1. In the GitHub repo, go to **Settings → Pages** and enter the custom domain.
2. This creates a `CNAME` file in the repo automatically (or add one yourself in `public/CNAME` containing just the domain, e.g. `www.iudpr.org.np`).
3. In GoDaddy's DNS settings, point the domain at GitHub Pages:
   - Add a `CNAME` record for `www` pointing to `<your-github-username>.github.io`
   - Or add `A` records for the apex domain pointing to GitHub's Pages IP addresses (listed in [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
4. DNS changes can take a few hours to take effect.
5. **Important:** open `vite.config.ts` and change `const PROD_BASE = '/IUDPR/'` to `const PROD_BASE = '/'`. Until a custom domain is connected, the site lives at `https://<username>.github.io/IUDPR/`, which needs that `/IUDPR/` base path; once the custom domain takes over, the site is served from the domain root instead, so the base path must go back to `/`. Ask a developer if you're not sure how to make this change — it's a one-line edit.

## Questions

If something looks broken after an edit, the most common cause is a missing comma or bracket in `site-content.ts`. Undo your last change and try again, or ask a developer to take a look.
