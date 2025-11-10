This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your Google Analytics 4 Measurement ID. You can find this in your [Google Analytics dashboard](https://analytics.google.com/).

### Running the Development Server

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

## Google Analytics

This project includes Google Analytics tracking using `@next/third-parties/google`. Page views are automatically tracked, and you can track custom events throughout your application.

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
  eventParams={{ link_text: "About", location: "header" }}
>
  About Us
</TrackedLink>
```

See `lib/analytics.ts` for all available tracking functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
