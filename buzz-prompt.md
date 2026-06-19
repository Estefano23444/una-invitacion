# Hero image prompt — Buzz Lightyear

Generate a hero illustration of **Buzz Lightyear** to replace the old Michael Jackson
figure. Save the result as **`hero.png`** in the project root (overwrite the existing
file). Both `index.html` (probed at runtime) and `calendario.html` (mini-stage) pull
from `hero.png`, so one file updates the whole site.

## Target style (match the file it replaces)

The previous `hero.png` was a **Pixar-style 3D character render**, full body, **isolated
on a fully transparent background**, roughly **square (≈1:1, 500×500 or larger)**, with a
soft purple rim light. The new image must drop into the same slot, so keep:

- **Full-body** character, centered, head-to-toe in frame with a little margin.
- **Transparent background (PNG with alpha)** — no scene, no floor, no shadow plate.
- **Square-ish canvas**, ideally **1024×1024** for crispness.
- **Rim lighting in green + purple** so it blends with the site's "space ranger" palette.
- The figure floats — it is shown slowly rotating, so it should read well from any angle.

## Prompt

> A full-body 3D Pixar-style render of **Buzz Lightyear** from Toy Story, the space ranger
> in his iconic **white spacesuit with green and purple accents**, clear domed helmet up,
> red and yellow control buttons on the chest panel, wings folded. Confident heroic pose,
> one arm raised pointing upward — **"to infinity and beyond"** — a warm, friendly smile.
> Cinematic studio lighting with a soft **green-and-purple rim light**, glossy toy-plastic
> material, subtle reflections. **Isolated on a fully transparent background**, no shadow,
> no floor, no scene. Centered full-body composition, square 1024×1024, high detail,
> clean edges suitable for compositing.

### Negative / avoid
- No background, no environment, no ground shadow.
- No text, no logos, no watermark.
- Not cropped — keep the whole body and the raised arm inside the frame.
- Avoid a dark, gritty or photoreal look — keep the bright, glossy Pixar feel.

## After generating
1. Export as **PNG with transparency**.
2. Name it **`hero.png`** and place it in `D:\Otros\Romantic\mision-story\`, replacing the
   current Michael image.
3. Reload the site — the hero and the calendar mini-stage will show Buzz automatically.
   (If `hero.png` is missing, an inline Buzz SVG fallback shows instead.)
