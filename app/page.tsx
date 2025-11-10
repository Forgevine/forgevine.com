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
    <div className="min-h-screen bg-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3E8B82]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3E8B82]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5FA89D]/10 rounded-full blur-3xl animate-pulse-glow delay-300"></div>
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
