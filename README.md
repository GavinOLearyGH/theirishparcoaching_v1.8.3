# TIP Coaching Intelligence V1.8.1

Entry point: `index.html` (The Irish Par Caddy hub)

Pages:
- `index.html` — Caddy hub
- `review.html` — coaching / round analysis
- `library.html` — drill library

This package preserves the working V1.7.4.2 engine and adds a new hub page for routing between coaching and library.

# TIP Coaching Intelligence V1.7.4.1

# TIP Coaching Intelligence V1.7.4.1

GitHub Pages-ready package for The Irish Par coaching workflow.

## Included
- Post-round coaching debrief
- Prescription engine with 4-dimension output
- Session Builder layer with Quick / Standard / Full session modes
- Separate TIP Library browse page
- Springhaven preset mode
- Custom course mode
- Saved courses + round history
- Calendar-ready session export (.ics)

## Files
- `index.html`
- `app.js`
- `styles.css`
- `tip_coaching_intelligence_product_ready.xlsx`
- `springhaven_scorecard.png`

## Hosting
Upload the full folder to a GitHub Pages repo root (or `docs` folder) and keep all files together.

## What changed in V1.7
- packaged Coaching + Prescription + Session Builder into one connected flow
- added a real Prescription Engine presentation layer
- rebuilt the practice section into a Session Builder experience
- kept the original round-entry, analysis, history, and export workflow intact

## What changed in V1.7.4.1
- kept the working V1.7 coaching package intact
- added a separate `library.html` page for browsing the TIP drill library
- added filtering by dimension, area, category, location, and confidence mode
- added favorites and a session tray on the library page


## V1.7.4.1 additions
- Separate TIP Library page retained
- Structured `tip-drill-details.js` content source for drill guidance
- Shared `View How` drawer system on prescription and library cards
- Full drill detail fields: setup, action, feel, common mistake, when to use, TIP coach note


## V1.7.4.1 updates
- Added featured Drill Packs to the Library page
- Wired pack filters into the full library dataset
- Extended coaching toast timing and improved empty-state guidance
- Reused the existing View How drawer system


## V1.8.3 Library Rebuild
- Rebuilt `tip-drill-details.js` for the full library with stronger drill differentiation and cleaner how-to guidance.
- Swing entries reviewed and rewritten for distinct intent.
- Remaining drill families rebuilt with category-specific guidance rather than repeated templates.
