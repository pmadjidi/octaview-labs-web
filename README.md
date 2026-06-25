# Octaviewlab — website

Single-page company site. Self-contained: everything is in `public/index.html` (inline CSS, inline SVG logos, a few lines of JS, one Google Fonts link). No build step.

```
oktaviewlabs-web/
├── public/
│   └── index.html      ← the entire site (logos are inline SVG)
├── firebase.json       ← Firebase Hosting config
└── README.md
```

## Logos

- **Octaviewlab mark** — rebuilt as a crisp inline **SVG** (octagon + glowing node-sphere), so it
  scales perfectly and needs no image file. It's an interpretation of your selected logo, not the
  exact raster from the slide. To use the EXACT designed PNG instead: export a clean version of the
  mark (no slide text/background), drop it in `public/` as `logo.png`, and I'll swap the inline SVG
  for `<img src="/logo.png">`.
- **topos2 mark** — the real `topos-logo.svg` from the repo, inlined on the topos2 product card.

## Deploy to Firebase Hosting

One-time setup:

```bash
npm install -g firebase-tools     # if you don't have it
firebase login                    # opens a browser
```

Point this folder at your Firebase project (creates `.firebaserc`):

```bash
cd oktaviewlabs-web
firebase use --add                # pick (or create) the project, e.g. "octaviewlab"
```

Deploy:

```bash
firebase deploy --only hosting
```

You'll get a live URL like `https://octaviewlab.web.app`. For a custom domain
(`octaviewlab.com`): Firebase Console → Hosting → Add custom domain, then follow the DNS records.

## Preview locally

```bash
firebase emulators:start --only hosting
# or just open public/index.html in a browser
```

## Edit checklist before going live

- `info@octaviewlabs.com` — placeholder contact email (contact band + footer). Set your real one.
- Custom domain — confirm the final spelling/domain (Octaviewlab vs OktaViewLabs vs OctaViewLab —
  the site now uses **Octaviewlab** to match the selected logo).
- The "in production" / EMIR line is framed as a track record without naming the client — confirm
  you're comfortable with it being public.

## Deliberately LEFT OUT (it's a public page)

Pulled only the public-facing mission/product material from your investment memos. Excluded on
purpose: raise size / valuation / dilution, cap-table logic, named team members (memo notes they
still need to consent to being named), internal architecture doctrine, and the client behind the
EMIR work. Add any of it back only with intent.
