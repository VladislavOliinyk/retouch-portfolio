# Lily Oliinyk Portfolio

Premium portfolio website for a professional commercial retoucher.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Development

```bash
npm install
npm run dev
```

## GitHub Pages

The site is configured for GitHub Pages through `.github/workflows/deploy.yml`.

1. Push the `main` branch to `VladislavOliinyk/retouch-portfolio`.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Wait for the `Deploy to GitHub Pages` workflow to finish.

The site URL will be:

```text
https://vladislavoliinyk.github.io/retouch-portfolio/
```

## Production / VPS

For VPS deployment with a Node.js server, switch `output` in `next.config.ts` from `"export"` to `"standalone"`.

```bash
npm ci
npm run build
node .next/standalone/server.js
```

Copy `.next/static` and `public` next to the standalone server during deployment.
