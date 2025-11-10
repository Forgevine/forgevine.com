'use client';

import { TrackedLink } from '@/components/TrackedLink';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
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
    <div className="min-h-screen bg-slate-950 relative">
      {/* Blockchain-themed animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="#3E8B82" strokeWidth="0.5" className="animate-hex-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-hex-shift" />
          </svg>
        </div>

        {/* Network nodes with connections */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
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
                className={`absolute w-2 h-2 bg-[#5FA89D] rounded-full ${path.className}`}
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
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3E8B82]/25 rounded-full blur-3xl animate-orb-float-intense"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3E8B82]/20 rounded-full blur-3xl animate-orb-float-intense-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5FA89D]/15 rounded-full blur-3xl animate-orb-pulse-intense"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#7FC5B8]/12 rounded-full blur-3xl animate-orb-drift-intense"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#3E8B82]/18 rounded-full blur-3xl animate-orb-drift-intense-delayed"></div>

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
              className="absolute font-mono text-[#3E8B82] text-xs animate-hash-scroll"
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
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-12 text-center animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <TrackedLink 
              href="/"
              eventName="logo_click"
              eventParams={{ location: 'homepage', element: 'logo' }}
              className="block"
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
                Forgevine
              </h1>
            </TrackedLink>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#3E8B82] to-transparent"></div>
          </div>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl font-light text-slate-200 tracking-wide animate-fade-in-up delay-300">
            Forging the future of Web3
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-700">
            <button
              onClick={handleCTAClick}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#3E8B82] to-[#5FA89D] text-white font-semibold text-lg hover:from-[#5FA89D] hover:to-[#7FC5B8] transition-all duration-300 shadow-lg shadow-[#3E8B82]/20 hover:shadow-[#3E8B82]/40 hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>

          {/* Decorative vine pattern */}
          <div className="mt-8 flex items-center gap-2 opacity-60 animate-fade-in delay-1000">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3E8B82]"></div>
            <div className="w-2 h-2 rounded-full bg-[#3E8B82]"></div>
            <div className="h-px w-24 bg-gradient-to-r from-[#3E8B82] via-[#5FA89D] to-[#3E8B82]"></div>
            <div className="w-2 h-2 rounded-full bg-[#5FA89D]"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3E8B82]"></div>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 text-sm text-slate-400">
            <TrackedLink 
              href="https://forgevine.com"
              eventName="footer_link_click"
              eventParams={{ link_type: 'domain', location: 'footer' }}
              className="hover:text-slate-300 transition-colors"
            >
              forgevine.com
            </TrackedLink>
            <div className="flex gap-6 text-slate-500">
              <TrackedLink 
                href="https://github.com/Forgevine"
                eventName="social_link_click"
                eventParams={{ platform: 'github', location: 'footer' }}
                className="hover:text-slate-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </TrackedLink>
              <TrackedLink 
                href="https://twitter.com/forgevine"
                eventName="social_link_click"
                eventParams={{ platform: 'twitter', location: 'footer' }}
                className="hover:text-slate-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </TrackedLink>
            </div>
            <p className="text-xs text-slate-600 mt-4">
              © {new Date().getFullYear()} Forgevine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
