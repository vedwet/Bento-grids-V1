# Bento Grids V1

Five bento-style hero sections built with React, Vite and Framer Motion. Each one is shown twice: first as a colour-coded wireframe, then as the finished design.

| # | Design | Theme |
|---|---|---|
| 01 | Ironvault — armored cloud backup | Blaze orange & ember black |
| 02 | Shishi — product engineering studio | Electric blue & stone |
| 03 | Prism Lab — generative design community | Ultramarine & cool grey |
| 04 | Altura — alpine storm-shell apparel | Violet dusk & flame |
| 05 | Duskrider — open-world knight saga | Twilight indigo & sunset |

Every element animates in on scroll (staggered fades, image blur-in, word-by-word headlines, counting stats).

## Wireframes

Each wireframe is the real design rendered in wireframe mode (`.wf`), so the shapes match exactly:

- **Blue:** images
- **Red:** headings and text (one bar per line)
- **Yellow:** info cards
- **Grey:** nav, buttons and pills

## Run it

```bash
npm install
npm run dev
```

## Structure

- `src/designs/DesignN.jsx` + `dN.css`: one file pair per design
- `src/wire.css`: wireframe recolouring
- `src/components/`: shared animation variants, primitives (frame, inverted corners, animated words, counters), icons and the legend
- `public/images/`: hero style images and supporting photos

Supporting photos are from Unsplash (Unsplash License). Companies and copy are fictional.
