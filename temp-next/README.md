# Suthar Portfolio (temp-next)

This is a Next.js portfolio scaffold built with Tailwind, Framer Motion, and Lucide icons.

Local development

1. Install dependencies:

```bash
cd temp-next
npm install
```

2. Copy `.env.example` to `.env` and fill SMTP values if you want contact emails to be sent.

3. Start dev server:

```bash
npm run dev
# open http://localhost:3000
```

Deployment

- Deploy to Vercel (recommended): import this repo and set the environment variables from `.env.example`.
 - Deploy to Vercel (recommended): import this repo and set the environment variables from `.env.example`.
 - Deploy to Vercel (recommended): import this repo and set the environment variables from `.env.example`.

Tips:
- Replace `public/resume.pdf` with your real resume PDF before deploying.
- Update `public/sitemap.xml` with your production host.

SendGrid / SMTP
- To enable sending emails from the contact form, provide either SendGrid (`SENDGRID_API_KEY` and `SENDGRID_FROM`) or SMTP settings (`SMTP_*`) in the environment. The API will prefer SendGrid and fall back to Nodemailer.

Vercel deployment notes
- This project includes `vercel.json`. When you deploy on Vercel, set the environment variables in the Vercel dashboard and enable automatic deploys from your Git provider.

Notes

- Contact API logs submissions when SMTP is not configured. Replace with a production email provider when ready.
- Resume: drop `resume.pdf` into `public/` to enable download.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
