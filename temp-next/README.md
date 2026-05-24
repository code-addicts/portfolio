# Portfolio

This is a Next.js portfolio scaffold built with Tailwind, Framer Motion, and Lucide icons. It has been configured as a static site, making it suitable for hosting on GitHub Pages, Vercel, or any static file host.

## Local development

1. Install dependencies:

```bash
cd temp-next
npm install
```

2. Start dev server:

```bash
npm run dev
# open http://localhost:3000
```

## Deployment: GitHub Pages (Recommended for Static)

This project is configured to export a static HTML/CSS/JS output (`out/` directory).

1. Build the static export:
```bash
npm run build
```
This will generate an `out/` directory containing your fully static website.

2. Deploy using GitHub Actions (Preferred):
   - In your GitHub repository settings, go to **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** as the source.
   - Use the standard "Next.js" workflow template provided by GitHub, or configure your own action to deploy the `out/` folder.

   *(Note: If you are hosting the site in a subpath like `username.github.io/repo-name`, you will need to add a `basePath: '/repo-name'` entry to your `next.config.ts`)*

3. Custom Domain:
   - If using a custom domain with GitHub Pages, you can add a `CNAME` file to the `public/` directory with your domain name, or configure it via the GitHub repo settings.

## Deployment: Vercel (Alternative)

- Import this repo into your Vercel dashboard.
- The build command is automatically detected. Vercel supports static exports seamlessly.
- You can leave `output: 'export'` in `next.config.ts`, and Vercel will still deploy it correctly.

## Notes

- **Contact Form:** The contact form has been converted to a static `mailto:` link because GitHub Pages does not support dynamic API routes.
- **Resume:** Drop `resume.pdf` into the `public/` directory to enable the download link.
- Update `public/sitemap.xml` with your production domain before final deployment.
