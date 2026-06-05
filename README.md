# GFX Challenge — Post-Production Delivery Guide

A single-page, frame.io-styled reference site that standardizes the post-production
and delivery workflow for the **Fujifilm GFX Challenge**. It gives every editor on
the project the same specs, the same export recipes, and the same handoff rules —
from raw footage all the way to final master.

🔗 **Live site:** _added after deploy — see below_

---

## What's in the guide

The page walks the full pipeline, stage by stage:

| # | Stage | Who |
|---|-------|-----|
| 01 | **Ingest & Proxies** — back up RAW, build Blackmagic proxies, ship proxies + sound to editors | Producer / Post-lead |
| 02 | **Offline Edit** — cut on the spec timeline, JPG placeholders, publish review versions | Editor |
| 03 | **Picture Lock** — image list → final images + metadata PNGs, sRGB check, XML pull | Editor + Fuji team |
| 04 | **Audio Handoff ∥ Color** (parallel) — AAF + 1080p reference / ProRes 422 HQ color return | Editor · Sound · Color |
| 05 | **Online / Conform** — color + audio + graphics, export for approval to Frame.io | Editor |
| 06 | **Master & Deliver** — clean master + full master, ProRes 422 HQ | Editor |

Plus reference sections: **sequence spec**, the **graphics layering stack**, copy-paste
**export recipes** for Premiere Pro & DaVinci Resolve, a **deliverables matrix**, a suggested
**file-naming convention**, and a **glossary**.

### Core technical spec

- **Resolution:** 3840 × 2160 (UHD 4K)
- **Pixel aspect:** Square (1.0)
- **Frame rate:** 23.976 fps, progressive
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
