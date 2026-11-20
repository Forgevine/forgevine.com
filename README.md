# Forgevine

The website for Forgevine, a small Web3 development shop that works in the shadow.

The site is intentionally short on public proof: it describes the shop, the
services, how we work under NDA, and an anonymized view of what is currently in
progress. Client names and case studies are not listed publicly, by design.

## Page structure

- **Hero** — positioning and current engagement count.
- **Services** — smart contracts, dApps, consulting, infrastructure.
- **How we work** — the "work in the shadow" posture and disclosure ledger.
- **In progress** — redacted, anonymized engagements currently in flight.
- **Contact** — NDA-friendly project inquiry form.

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google Analytics 4 Measurement ID (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Resend — contact form delivery (required for the contact form)
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL="Forgevine Contact <hello@your-verified-domain.com>"
RESEND_TO_EMAIL=contact@forgevine.com
```

`NEXT_PUBLIC_GA_ID` is optional; analytics is only initialized when it is set.

The contact form posts to `/api/contact`. Submissions are validated on the
server with the shared schema in `lib/contact-schema.ts` and delivered through
Resend, so a Resend API key and a verified sender address are required.

### Running the Development Server

This project uses pnpm (see `packageManager` in `package.json`):

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. You can start editing the page by modifying `app/page.tsx`; the page
auto-updates as you edit.

The site uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to load Geist and Geist Mono.

## Google Analytics

This project includes Google Analytics tracking using
`@next/third-parties/google`. Page views are tracked automatically when
`NEXT_PUBLIC_GA_ID` is set, and you can track custom events throughout the
application.

### Tracking Custom Events

Use the `trackEvent` function to track custom user interactions:

```tsx
'use client';
import { trackEvent } from '@/lib/analytics';

function MyButton() {
  const handleClick = () => {
    trackEvent('button_click', {
      button_name: 'subscribe',
      location: 'header',
    });
    // Your button logic here
  };

  return <button onClick={handleClick}>Subscribe</button>;
}
```

### Tracking Link Clicks

Use the `TrackedLink` component for automatic link click tracking:

```tsx
import { TrackedLink } from '@/components/TrackedLink';

<TrackedLink
  href="/about"
  eventName="navigation_click"
  eventParams={{ link_text: 'About', location: 'header' }}
>
  About Us
</TrackedLink>
```

See `lib/analytics.ts` for all available tracking functions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy this Next.js app is with the
[Vercel Platform](https://vercel.com/new). See the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for details.
