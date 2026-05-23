OKay # TODO

## Deployment plan: GitHub Pages (static)

- [ ] Determine if the Next.js app can be converted to a static export (Next export) without SSR-only features
- [ ] Add build/export scripts (if needed) for GitHub Pages (`next export`)
- [ ] Add/update `temp-next/public` assets needed for export (and ensure `app/` routes are compatible)
- [ ] Create `gh-pages` publishing instructions (branch + GitHub Pages settings)
- [ ] Generate a deployable static output folder (`out/`)
- [ ] Add `CNAME` / `basePath` handling if using custom domain (optional)
- [ ] Remove/avoid non-static runtime dependencies for GitHub Pages (contact form API will not work)
- [ ] Update README with exact GitHub Pages steps

## Deployment plan: temp-next (Vercel) [backup]

- [ ] (Optional) Keep Vercel deploy docs (recommended for this Next.js app)

