# Vignery's Pools — Website

A clean, responsive one-page website for a pool maintenance & care business: hero section, About/Services/Contact columns, a services gallery, and a footer.

## Structure

```
.
├── index.html
├── style.css
├── script.js
└── images/
    ├── logo.svg       — circular palm tree / pool logo (matches the header + favicon)
    └── hero-bg.svg     — backyard pool illustration used behind the hero headline
```

## Running locally

No build step needed — it's plain HTML/CSS/JS. Either:

- Double-click `index.html` to open it in your browser, or
- Serve it locally for the best results (so relative paths behave the same as on GitHub Pages):
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying with GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick your default branch and the `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

## Customizing

- **Colors & fonts**: all defined as CSS variables at the top of `style.css` (`:root`).
- **Logo / hero art**: `images/logo.svg` and `images/hero-bg.svg` are hand-built vector illustrations (not photos), so you can swap them for real photography any time — just replace the files or update the `src`/`background` references in `index.html`.
- **Contact form**: `script.js` currently just shows a "Message Sent!" confirmation on submit. To actually receive messages, wire the `<form id="contactForm">` up to a backend or a form service (e.g. Formspree, Netlify Forms, EmailJS).
- **Nav links & sections**: each section in `index.html` has an `id` (`#home`, `#about`, `#services`, `#gallery`, `#contact`) that the header nav links scroll to.
