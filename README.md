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

## Production / VPS

The project is configured with `output: "standalone"` so it can be deployed without Vercel.

```bash
npm ci
npm run build
node .next/standalone/server.js
```

Copy `.next/static` and `public` next to the standalone server during deployment.
