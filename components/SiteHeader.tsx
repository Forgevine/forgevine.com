'use client';

import { TrackedLink } from '@/components/TrackedLink';
import { trackEvent } from '@/lib/analytics';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-we-work', label: 'How we work' },
  { href: '#status', label: 'In progress' },
];

export function SiteHeader() {
  const handleCtaClick = () => {
    trackEvent('header_cta_click', {
      location: 'header',
      destination: 'contact',
    });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/40 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <TrackedLink
          href="/"
          eventName="logo_click"
          eventParams={{ location: 'header', element: 'logo' }}
          className="flex items-baseline gap-2"
        >
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            Forgevine
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-[#5FA89D] sm:inline">
            / dev shop
          </span>
        </TrackedLink>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm text-slate-400 md:flex"
        >
          {navLinks.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              eventName="nav_click"
              eventParams={{ location: 'header', link_text: link.label }}
              className="transition-colors hover:text-slate-100"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleCtaClick}
          className="rounded-lg border border-[#3E8B82]/50 bg-[#3E8B82]/10 px-4 py-2 text-sm font-medium text-[#7FC5B8] transition-colors hover:border-[#5FA89D]/70 hover:bg-[#3E8B82]/20 hover:text-white"
        >
          Start a project
        </button>
      </div>
    </header>
  );
}
