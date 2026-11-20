'use client';

import { TrackedLink } from '@/components/TrackedLink';
import { SiteHeader } from '@/components/SiteHeader';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { WorkInProgressSection } from '@/components/WorkInProgressSection';
import { ContactForm } from '@/components/ContactForm';
import { trackEvent } from '@/lib/analytics';

export default function Home() {
  const handleCTAClick = () => {
    trackEvent('cta_button_click', {
      location: 'hero',
      destination: 'contact',
    });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-950">
      <SiteHeader />

      {/* Blockchain-themed animated background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="#3E8B82" strokeWidth="0.5" className="animate-hex-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-hex-shift" />
          </svg>
        </div>

        {/* Network nodes with connections */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3E8B82">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#7FC5B8">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
              </stop>
            </linearGradient>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="#3E8B82" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#3E8B82" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Network connections */}
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="30%" y1="40%" x2="60%" y2="25%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="60%" y1="25%" x2="80%" y2="45%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="60%" x2="50%" y2="70%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '1.5s' }} />
          <line x1="50%" y1="70%" x2="75%" y2="85%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '2s' }} />
          <line x1="15%" y1="80%" x2="40%" y2="50%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '0.8s' }} />
          <line x1="70%" y1="15%" x2="90%" y2="60%" stroke="url(#nodeGradient)" strokeWidth="1" className="animate-network-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Network nodes */}
          {[
            { x: '10%', y: '20%' },
            { x: '30%', y: '40%' },
            { x: '60%', y: '25%' },
            { x: '80%', y: '45%' },
            { x: '20%', y: '60%' },
            { x: '50%', y: '70%' },
            { x: '75%', y: '85%' },
            { x: '15%', y: '80%' },
            { x: '40%', y: '50%' },
            { x: '70%', y: '15%' },
            { x: '90%', y: '60%' },
            { x: '85%', y: '30%' },
          ].map((node, i) => (
            <g key={`node-${i}`} className="animate-node-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              <circle cx={node.x} cy={node.y} r="8" fill="url(#nodeGlow)" />
              <circle cx={node.x} cy={node.y} r="4" fill="#5FA89D" />
            </g>
          ))}
        </svg>

        {/* Data particles flowing through network */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            const paths = [
              { startX: 10, startY: 20, className: 'animate-data-flow-path1' },
              { startX: 30, startY: 40, className: 'animate-data-flow-path2' },
              { startX: 60, startY: 25, className: 'animate-data-flow-path3' },
              { startX: 20, startY: 60, className: 'animate-data-flow-path4' },
              { startX: 50, startY: 70, className: 'animate-data-flow-path5' },
            ];
            const path = paths[i % paths.length];
            const delay = (i % 5) * 0.4;
            const duration = 3 + (i % 3);
            return (
              <div
                key={`particle-${i}`}
                className={`absolute h-2 w-2 rounded-full bg-[#5FA89D] ${path.className}`}
                style={{
                  left: `${path.startX}%`,
                  top: `${path.startY}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  boxShadow: `0 0 8px rgba(95, 168, 157, 0.8)`,
                }}
              />
            );
          })}
        </div>

        {/* Animated gradient orbs - more intense */}
        <div className="absolute -right-40 -top-40 h-96 w-96 animate-orb-float-intense rounded-full bg-[#3E8B82]/25 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-orb-float-intense-delayed rounded-full bg-[#3E8B82]/20 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse-intense rounded-full bg-[#5FA89D]/15 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 h-80 w-80 animate-orb-drift-intense rounded-full bg-[#7FC5B8]/12 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 h-96 w-96 animate-orb-drift-intense-delayed rounded-full bg-[#3E8B82]/18 blur-3xl"></div>

        {/* Cryptographic hash-like patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[
            '0x1a3f8bc2e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a',
            '1a3f8bc2e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b',
            '3f8bc2e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c',
            '8bc2e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d',
            'c2e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e',
            'e59d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f',
            '9d4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a',
            '4a7f6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b',
          ].map((hash, i) => (
            <div
              key={`hash-${i}`}
              className="absolute animate-hash-scroll font-mono text-xs text-[#3E8B82]"
              style={{
                left: `${(i * 12.5)}%`,
                top: `${(i * 15) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${15 + i * 2}s`,
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              {hash}
            </div>
          ))}
        </div>

        {/* Chain link pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="chainLinks" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="8" fill="none" stroke="#3E8B82" strokeWidth="1" className="animate-chain-link" />
                <circle cx="90" cy="30" r="8" fill="none" stroke="#5FA89D" strokeWidth="1" className="animate-chain-link" style={{ animationDelay: '0.5s' }} />
                <line x1="38" y1="30" x2="82" y2="30" stroke="#3E8B82" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chainLinks)" className="animate-chain-shift" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28">
        <main className="relative z-10 flex w-full max-w-4xl animate-fade-in flex-col items-center justify-center gap-8 text-center">
          {/* Status pill */}
          <div className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-[#3E8B82]/40 bg-[#3E8B82]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#7FC5B8]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5FA89D] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5FA89D]"></span>
            </span>
            <span className="sm:hidden">Work in progress</span>
            <span className="hidden sm:inline">
              Work in progress — 3 engagements in flight
            </span>
          </div>

          {/* Logo/Brand */}
          <div className="flex animate-fade-in-up flex-col items-center gap-3">
            <TrackedLink
              href="/"
              eventName="logo_click"
              eventParams={{ location: 'homepage', element: 'logo' }}
              className="block"
            >
              <h1 className="cursor-pointer bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-6xl font-bold text-transparent transition-opacity hover:opacity-80 md:text-8xl">
                Forgevine
              </h1>
            </TrackedLink>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#3E8B82] to-transparent"></div>
          </div>

          {/* Positioning */}
          <p className="animate-fade-in-up text-2xl font-light tracking-wide text-slate-200 delay-300 md:text-3xl">
            A Web3 dev shop that works in the shadow.
          </p>

          <p className="max-w-2xl animate-fade-in-up text-base text-slate-400 delay-300 md:text-lg">
            We embed with small teams, build the product, harden it, and hand it
            over. Most of what we ship never gets a public page — and we like it
            that way.
          </p>

          {/* CTAs */}
          <div className="flex animate-fade-in-up flex-col items-center gap-3 delay-700 sm:flex-row">
            <button
              onClick={handleCTAClick}
              className="rounded-lg bg-gradient-to-r from-[#3E8B82] to-[#5FA89D] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#3E8B82]/20 transition-all duration-300 hover:-translate-y-1 hover:from-[#5FA89D] hover:to-[#7FC5B8] hover:shadow-[#3E8B82]/40"
            >
              Start a project
            </button>
            <TrackedLink
              href="#status"
              eventName="hero_secondary_click"
              eventParams={{ location: 'hero', destination: 'status' }}
              className="rounded-lg border border-slate-700/80 px-6 py-4 text-sm font-medium text-slate-300 transition-colors hover:border-[#3E8B82]/60 hover:text-white"
            >
              See what&apos;s in progress →
            </TrackedLink>
          </div>

          {/* Trust line */}
          <ul className="flex animate-fade-in flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 delay-1000">
            <li>NDA-first</li>
            <li aria-hidden="true" className="text-slate-700">·</li>
            <li>Seniors only</li>
            <li aria-hidden="true" className="text-slate-700">·</li>
            <li>No public portfolio</li>
          </ul>

          {/* Decorative vine pattern */}
          <div className="flex animate-fade-in items-center gap-2 opacity-60 delay-1000">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3E8B82]"></div>
            <div className="h-2 w-2 rounded-full bg-[#3E8B82]"></div>
            <div className="h-px w-24 bg-gradient-to-r from-[#3E8B82] via-[#5FA89D] to-[#3E8B82]"></div>
            <div className="h-2 w-2 rounded-full bg-[#5FA89D]"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3E8B82]"></div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Work in the shadow */}
      <AboutSection />

      {/* Work in progress */}
      <WorkInProgressSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <TrackedLink
                href="https://forgevine.com"
                eventName="footer_link_click"
                eventParams={{ link_type: 'domain', location: 'footer' }}
                className="text-sm text-slate-400 transition-colors hover:text-slate-300"
              >
                forgevine.com
              </TrackedLink>
              <p className="mt-2 font-mono text-xs text-slate-500">
                No public projects. By design.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <TrackedLink
                href="https://github.com/Forgevine"
                eventName="social_link_click"
                eventParams={{ platform: 'github', location: 'footer' }}
                className="transition-colors hover:text-slate-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </TrackedLink>
              <TrackedLink
                href="https://twitter.com/forgevine"
                eventName="social_link_click"
                eventParams={{ platform: 'twitter', location: 'footer' }}
                className="transition-colors hover:text-slate-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </TrackedLink>
            </div>
          </div>
          <p className="mt-8 text-center font-mono text-xs text-slate-600 md:text-left">
            © {new Date().getFullYear()} Forgevine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
