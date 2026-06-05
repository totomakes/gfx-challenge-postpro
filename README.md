# GFX Challenge — Post-Production Delivery Guide

A single-page, frame.io-styled reference site that standardizes the post-production
and delivery workflow for the **Fujifilm GFX Challenge**. It gives every editor on
the project the same specs, the same export recipes, and the same handoff rules —
from raw footage all the way to final master.

🔗 **Live site:** https://gfx-challenge-postpro.vercel.app
📦 **Repo:** https://github.com/totomakes/gfx-challenge-postpro

---

## What's in the guide

The page opens with **Start here** (create the project to spec before importing), the
**core spec**, and a downloadable **Assets** pack (bug, letterbox, intro), then walks
the four-stage workflow:

| # | Stage | What happens |
|---|-------|-----|
| 01 | **Digest** | Proxies arrive in the original folder structure; JPG placeholders; export naming by stage/status |
| 02 | **Edit** | Status slate at the start of non-final exports; review export (4K H.264 .mov @ 20 Mbps) |
| 03 | **Picture lock** | Image list → metadata graphics; AAF audio handoff; clean XML for color (retimes reset to 100%) |
| 04 | **Deliver** | Two ProRes 422 HQ masters — Clean (intro/end card + photos only) and Master (everything on) |

Plus a collapsible **Reference** section: graphics layering stack, copy-paste
**export recipes** for Premiere Pro & DaVinci Resolve, a **deliverables matrix**, the
**file-naming convention**, and a **glossary**.

### Assets

Web-ready brand overlays live in `assets/` and ship with the site (downloadable from the
rail button or the Assets section): transparent `bug.png` and `letterbox.png`, the
`GFX-CGP25-Intro.mp4`, a one-click `GFX_Brand_Assets.zip`, plus composited preview images.

### Core technical spec

- **Resolution:** 3840 × 2160 (UHD 4K)
- **Pixel aspect:** Square (1.0)
- **Frame rate:** 24 fps, progressive
- **Review / Online:** 4K H.264 `.mov` @ 20,000 kbps
- **Audio reference:** 1080p H.264 `.mp4` @ 20,000 kbps
- **Audio handoff:** AAF with embedded clips (separated tracks)
- **Color return & Masters:** ProRes 422 HQ

> **Note on the audio handoff format:** the brief said “AAC”, but the format that carries
> *separated tracks with embedded clips* for sound design is **AAF** (Advanced Authoring
> Format). AAC is a final mixdown codec and cannot hold separate lines, so the guide
> specifies AAF. Change it if your sound team genuinely wants something else.

---

## Tech

Plain, dependency-free static site — fast to load and trivial to host.

```
index.html     # the one-pager (structure + content)
styles.css     # dark editorial theme (frame.io × Fujifilm red)
app.js         # tabs, scroll-spy nav, copy buttons, scroll reveals
vercel.json    # static hosting config
README.md      # this file
```

- Fonts: Bricolage Grotesque (display), Hanken Grotesque (body), JetBrains Mono (specs) via Google Fonts.
- No build step, no framework, no npm install.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

This repo is a static site, deployable as-is.

- **Vercel:** import the repo (Framework preset: *Other*) or run `vercel`. No build command, output dir = project root.
- **GitHub Pages:** push and enable Pages on the root of the default branch.

## Editing the content

All copy lives in `index.html`. To change a spec, edit the matching value in the
relevant section and, where present, update the `data-copy="..."` attribute on the
nearby **Copy settings** button so the clipboard text stays in sync.

---

Fujifilm GFX Challenge · Post-Production Delivery Standard · v1.0
