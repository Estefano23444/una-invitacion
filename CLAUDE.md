# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page Spanish-language invitation site ("Una invitación · Toy Story") — a personal RSVP page where **Estéfano invites Enmanuel** to see *Toy Story* at the cinema for their **anniversary**. Pure static site: no framework, no build, no package manager.

There's a second page, [calendario.html](calendario.html) + [calendario.js](calendario.js): the "Sí" button leads here to pick a showtime. It lists the **real Toy Story showtimes** (one cinema — Multicines Plaza de las Américas — one day, Friday June 19, taken from a cartelera screenshot) and, on confirm, POSTs the pick to FormSubmit so Estéfano gets an email (with a `mailto:` fallback).

## Running locally

There's no build step. Serve the directory with any static server, e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` works for most things but the optional `hero.png` probe in [script.js:104-115](script.js#L104-L115) is more reliable over HTTP.

## Architecture

Three files do all the work:

- [index.html](index.html) — markup, including an inline SVG fallback illustration (a stylized **Buzz Lightyear** — helmet/head in the `.fedora` group, suit + control panel in the `.glove` group; class names kept from the old fedora/glove art so the float animations still apply) inside `#rotor`. The hero falls back to the SVG unless a `hero.png` exists alongside it (the script probes for one and swaps it in). See [buzz-prompt.md](buzz-prompt.md) for the image-generation prompt that produces `hero.png`.
- [styles.css](styles.css) — all visual styling, animations, and the `.escaping` absolute-positioning rules used by the runaway "No" button.
- [script.js](script.js) — single IIFE wiring up four behaviors:
  1. **Runaway "No" button** ([script.js:22-64](script.js#L22-L64)): on hover/focus/touch, the button teleports to a random spot inside `.no-area`, cycles through escalating Spanish guilt-trip texts (`noTexts`), and shrinks while the "Sí" button grows. After exhausting the list it locks to "Okay, sí." and disables.
  2. **"Sí" → ticket modal + canvas confetti** ([script.js:67-71](script.js#L67-L71), [script.js:118-157](script.js#L118-L157)). The `#showtime` dialog is shown by toggling `.hidden`. Visit `#ticket` in the URL to preview the modal without clicking ([script.js:98-101](script.js#L98-L101)).
  3. **Nav `data-action`** ([script.js:11-20](script.js#L11-L20)): `reload` reloads the page; the YouTube link uses default navigation.
  4. **Logo easter egg** ([script.js:86-95](script.js#L86-L95)): clicking `.brand` adds `.boost` to the rotor for 1.6s.

## Assets

Large media files (`ejemplo.mp4`, `video-landing.mp4`, `ffmpeg.zip`, `ffmpeg/`, `frames/`, `frames-landing/`, `screenshots/`) are gitignored — they appear to be source material and a bundled ffmpeg used to extract preview frames, not part of the deployed site. The shipped site only needs `index.html`, `calendario.html`, `styles.css`, `script.js`, `calendario.js`, and optionally `hero.png`. (`buzz-prompt.md` is just the prompt used to regenerate `hero.png`.)

## Language note

User-facing copy is Spanish. Preserve tone (warm, playful, slightly cheeky) when editing strings — especially the `noTexts` array, which is the heart of the joke.
