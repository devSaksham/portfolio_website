# Portfolio Website

The site behind **[sakshamagrawal.me](https://sakshamagrawal.me)**: my main portfolio, with projects, experience, skills and contact links.

It's a single `index.html` with inlined CSS and a little JavaScript. The design is high-contrast black on white with an electric-cyan accent and hard offset shadows, set in Inter and JetBrains Mono.

## Run locally

```bash
git clone https://github.com/devSaksham/portfolio_website.git
cd portfolio_website
```

Open `index.html` in a browser. There's nothing to install or build.

## Deployment

Netlify deploys the repo root on every push to `main`. `netlify.toml` only sets cache headers: images are cached for 7 days and HTML is always revalidated, so content edits show up straight after a deploy.

## Files

```
index.html             the site
saksham.jpg            profile photo
apple-touch-icon.png   home-screen icon
netlify.toml           cache headers
```

## Other versions

- [hogwarts-portfolio](https://github.com/devSaksham/hogwarts-portfolio): the same content as an interactive Hogwarts-themed site
- [saksham-agrawal](https://github.com/devSaksham/saksham-agrawal): an earlier dark, terminal-style version
