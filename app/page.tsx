import { TrackedLink } from '@/components/TrackedLink';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3E8B82]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3E8B82]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-12 text-center">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center gap-4">
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
        <p className="text-2xl md:text-3xl font-light text-slate-200 tracking-wide">
          Forging the future of Web3
        </p>

        {/* Bio */}
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            At Forgevine, we forge the critical infrastructure for the decentralized future. 
            Like a vine, our projects are interconnected, sharing strength and resources to 
            grow in new directions.
          </p>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            We are dedicated to creating foundational Web3 technologies, weaving individual 
            projects into a powerful, unified network.
          </p>
        </div>

        {/* Decorative vine pattern */}
        <div className="mt-8 flex items-center gap-2 opacity-60">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3E8B82]"></div>
          <div className="w-2 h-2 rounded-full bg-[#3E8B82]"></div>
          <div className="h-px w-24 bg-gradient-to-r from-[#3E8B82] via-[#5FA89D] to-[#3E8B82]"></div>
          <div className="w-2 h-2 rounded-full bg-[#5FA89D]"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3E8B82]"></div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-sm text-slate-400">
          <div className="flex flex-col items-center gap-4">
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
          </div>
        </footer>
      </main>
    </div>
  );
}
