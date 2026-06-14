# Personal Site Template

A zero-build, single-page personal site you customize by editing one JSON file.
Drop in your name, bio, socials, and a few project screenshots — push to GitHub
Pages — done. No framework, no `npm install`, no toolchain.

This is the source for [gabrielaboy.com](https://gabrielaboy.com), released as
a template so anyone can fork it.

## Quickstart

1. Click **Use this template** at the top of the repo (or fork it).
2. Edit `config.json` — replace name, bio, location, socials, projects.
3. Replace `assets/portrait.png` with your own photo.
4. Drop project screenshots into `assets/projects/<slug>/`.
5. Enable GitHub Pages (Settings → Pages → Source: **GitHub Actions**).
6. Push to `main`. The included workflow builds and publishes.

Preview locally first:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## How it works

- `index.html` is a static shell with three mount points (`profile`,
  `projects`, `toast`).
- `render.js` fetches `config.json` at page load, applies your theme to CSS
  variables on `:root`, and renders the sidebar + project cards into the
  shell.
- No build step. The browser does the rendering.

## `config.json` schema

```json
{
  "meta": {
    "title": "string  // <title> and document title",
    "description": "string  // <meta name=description>",
    "favicon": "string  // path, optional"
  },
  "profile": {
    "name": "string  // required",
    "avatar": "string  // path to portrait image, required",
    "location": "string  // optional, shows under name with pin icon",
    "tagline": "string  // optional, italic one-liner",
    "pitch": "string  // optional, bold sentence",
    "pitchHighlight": "string  // optional, substring of pitch to render as a styled link",
    "bio": "string  // optional, short paragraph"
  },
  "socials": [
    { "label": "LinkedIn", "url": "https://...", "icon": "linkedin" }
  ],
  "projects": [
    {
      "name": "string  // required",
      "url": "string  // optional. Omit for non-link cards. Ignored if comingSoon is true.",
      "description": "string",
      "badge": "string  // optional, shown as a pill (e.g. '8 users', 'Beta')",
      "comingSoon": "boolean  // optional. true → clicking shows a toast instead of navigating.",
      "icon": {
        "class": "string  // CSS class for the icon tile background. Built-ins: ic-gitapplied, ic-stackflow, ic-needscript, ic-tandem, ic-purple. Add your own in index.html.",
        "glyph": "string  // optional, single character or short text",
        "image": "string  // optional, path to logo image (overrides glyph)",
        "imageAlt": "string  // optional"
      },
      "slides": [
        { "image": "assets/projects/foo/01.png", "label": "Landing" }
      ]
    }
  ],
  "theme": {
    "bg":         "#hex",
    "card":       "#hex",
    "ink":        "#hex  // primary text",
    "ink2":       "#hex  // secondary text",
    "muted":      "#hex",
    "line":       "#hex  // hairline borders",
    "pillBg":     "#hex", "pillFg": "#hex", "pillDot": "#hex",
    "highlight":  "#hex",
    "chart":      "#hex", "chartFill": "rgba(...)",
    "gridDot":    "#hex",
    "dark":       "#hex  // CTAs, toast",
    "pitchLink":  "#hex  // color for pitchHighlight"
  }
}
```

### Social icon presets

`icon` field on each social accepts one of:
`linkedin`, `email`, `instagram`, `medium`, `flickr`, `github`, `x`,
`twitter`, `bluesky`, `rss`, `youtube`. Add more in the `ICONS` map at
the top of `render.js`.

### Asset guidelines

- **Portrait**: square, ≥512×512, JPG or PNG. Saved as `assets/portrait.png`
  by default — change the path in `config.json` if you use a different
  filename.
- **Project slides**: 16:10 aspect ratio (e.g. 1280×800), ≥1280px wide.
  Stored at `assets/projects/<slug>/NN-name.png`. Numeric prefix keeps them
  ordered on disk. Slides are rendered with `object-fit: cover` and
  `object-position: top center` — design them so the important content is
  near the top.

## Theming

Every color in `theme` maps to a CSS custom property on `:root` and is read
by the existing stylesheet in `index.html`. Change `theme.highlight` to swap
the accent color across the page. To override anything deeper (spacing,
fonts, breakpoints), edit the `<style>` block in `index.html` directly.

## Adding a custom icon-tile class

Built-in tile classes (`ic-gitapplied`, `ic-stackflow`, etc.) are defined in
the `<style>` block in `index.html`. To add your own:

```css
.ic-mine {
  background: linear-gradient(135deg, #f00 0%, #800 100%);
  box-shadow: 0 4px 10px -4px rgba(255,0,0,0.55);
}
```

Then reference it from `config.json`: `"icon": { "class": "ic-mine", "glyph": "M" }`.

## Deploy

The included workflow (`.github/workflows/deploy.yml`) publishes to GitHub
Pages on every push to `main`. To enable:

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. (Optional) Configure a custom domain by editing `CNAME` and pointing your
   DNS at GitHub Pages.

## License

[MIT](./LICENSE) — fork freely, no attribution required (though a star is
appreciated).
