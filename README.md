# Fluid Labs LLC

Static company website for [fluidlabsllc.com](https://fluidlabsllc.com).

## Hosting

The site is designed for GitHub Pages and has no runtime dependencies or build
step. GitHub Pages should publish the repository's `main` branch from the
repository root.

- `index.html` contains the website content.
- `styles.css` contains the responsive presentation.
- `CNAME` assigns the custom domain.
- `.nojekyll` disables Jekyll processing.
- `robots.txt` and `sitemap.xml` support search indexing.

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## DNS

Point both the apex domain and `www` records at GitHub Pages using the values in
GitHub's Pages settings. Preserve all MX, SPF, DKIM, and DMARC records used by
`contact@fluidlabsllc.com`.
